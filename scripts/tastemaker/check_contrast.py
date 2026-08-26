#!/usr/bin/env python3
"""
WCAG contrast ratio checker for two hex colors, a whole palette, or the full
pairing matrix of a palette.

Why this exists: a palette (whether hand-picked, extracted from a reference
image, or a user-supplied brand color) can look fine as a swatch and still
fail contrast once it's actually used as text-on-background or a button
label. The easiest miss is checking body-text-on-background and stopping
there — a Primary/Accent color can pass that check and still be illegible
as a button fill with white label text. This script checks pairs directly
against the real WCAG math instead of eyeballing it.

The deeper miss is time: a palette that passed for the pairings you enumerated
at authoring time can still fail the moment the model uses two of its colors
in a pairing you never listed. --matrix answers "which of these colors may
legally touch which," so the lock certifies the palette as *usable*, not just
as authored. See the contract described in references/style-lock-format.md.

Usage:
    # single pair
    python3 check_contrast.py 050315 fbfbfe
    python3 check_contrast.py "#050315" "#FBFBFE"

    # a five-role palette: checks the critical pairings and PASS/FAILs
    python3 check_contrast.py --palette text=050315 bg=fbfbfe primary=2f27ce \
        secondary=dedcff accent=433bff

    # the full pairing matrix: every color pair, classified by which floor it
    # clears, plus a legal-pairings summary to record in the style lock.
    # Include a label color (e.g. on-primary=ffffff) to see button-label legality.
    python3 check_contrast.py --matrix text=e6e6ea bg=0b0d12 surface=161a21 \
        primary=047857 accent=34d399 border=232a33 on-primary=ffffff

Exit code: --palette and single-pair exit nonzero if any checked pairing fails
its floor. --matrix is a report and exits 0 (it does not know each pair's
intended use, so it classifies rather than pass/fails).
"""

import sys

AA_NORMAL = 4.5        # body text on its background
AA_LARGE_OR_UI = 3.0   # large text, UI components, graphical objects (WCAG 1.4.11)


def _linearize(c):
    c = c / 255
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


def _luminance(hex_color):
    hex_color = hex_color.lstrip("#")
    if len(hex_color) != 6:
        raise ValueError(f"expected a 6-digit hex color, got {hex_color!r}")
    r, g, b = (int(hex_color[i:i + 2], 16) for i in (0, 2, 4))
    return 0.2126 * _linearize(r) + 0.7152 * _linearize(g) + 0.0722 * _linearize(b)


def ratio(hex1, hex2):
    l1, l2 = _luminance(hex1), _luminance(hex2)
    l1, l2 = max(l1, l2), min(l1, l2)
    return (l1 + 0.05) / (l2 + 0.05)


def report(label, hex1, hex2, floor=AA_NORMAL):
    r = ratio(hex1, hex2)
    status = "PASS" if r >= floor else "FAIL"
    print(f"[{status}] {label}: {r:.2f}:1 (floor {floor}:1) — #{hex1.lstrip('#')} vs #{hex2.lstrip('#')}")
    return r >= floor


def parse_roles(args):
    roles = {}
    for kv in args:
        if "=" not in kv:
            print(f"Bad argument (expected role=hex): {kv}", file=sys.stderr)
            sys.exit(1)
        k, v = kv.split("=", 1)
        roles[k] = v.lstrip("#")
    return roles


def run_matrix(roles):
    names = list(roles.keys())
    pairs = []
    for i in range(len(names)):
        for j in range(i + 1, len(names)):
            a, b = names[i], names[j]
            pairs.append((a, b, ratio(roles[a], roles[b])))
    pairs.sort(key=lambda p: -p[2])

    text_safe, ui_safe, decorative = [], [], []
    print(f"== Contrast matrix ({len(names)} roles, {len(pairs)} pairs) ==")
    for a, b, r in pairs:
        if r >= AA_NORMAL:
            cls = "text-safe (>=4.5)"
            text_safe.append(f"{a}/{b}")
        elif r >= AA_LARGE_OR_UI:
            cls = "UI-safe  (>=3.0)"
            ui_safe.append(f"{a}/{b}")
        else:
            cls = "decorative (<3.0)"
            decorative.append(f"{a}/{b}")
        print(f"  {a:<12} x {b:<12} {r:6.2f}  {cls}")

    print()
    print("== Legal pairings (record these in the style lock) ==")
    print(f"  Text-safe   (body text, links, button labels on a fill; >=4.5): {', '.join(text_safe) or 'none'}")
    print(f"  UI-safe     (large text, icons, and borders that convey state; >=3.0 and <4.5): {', '.join(ui_safe) or 'none'}")
    print(f"  Decorative  (below 3.0; fine as a subtle hairline, must NOT be the only thing conveying state): {', '.join(decorative) or 'none'}")
    return pairs


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__, file=sys.stderr)
        sys.exit(1)

    if args[0] == "--matrix":
        roles = parse_roles(args[1:])
        if len(roles) < 2:
            print("--matrix needs at least two role=hex colors.", file=sys.stderr)
            sys.exit(1)
        run_matrix(roles)
        sys.exit(0)

    # Auto-detect role=hex arguments if --palette was omitted
    if args[0] == "--palette" or any("=" in a for a in args):
        role_args = args[1:] if args[0] == "--palette" else args
        roles = parse_roles(role_args)

        all_pass = True
        missing = {"text", "bg"} - roles.keys()
        if missing and not ("primary" in roles and "bg" in roles):
            if len(roles) == 2:
                # If 2 custom roles provided, check them directly
                keys = list(roles.keys())
                all_pass &= report(f"{keys[0]} / {keys[1]}", roles[keys[0]], roles[keys[1]], AA_NORMAL)
                sys.exit(0 if all_pass else 1)
            print(f"--palette requires at least text= and bg=; missing {missing}", file=sys.stderr)
            sys.exit(1)

        if "text" in roles and "bg" in roles:
            all_pass &= report("body text / background", roles["text"], roles["bg"], AA_NORMAL)

        if "primary" in roles and "bg" in roles:
            white_ok = report("white label / primary fill", "ffffff", roles["primary"], AA_NORMAL)
            dark_ok = report(f"dark text ({roles.get('text', '000000')}) / primary fill", roles.get("text", "000000"), roles["primary"], AA_NORMAL)
            if not (white_ok or dark_ok):
                print(f"  -> NEITHER white nor {roles.get('text', '000000')} text is readable on primary #{roles['primary']} — darken/lighten primary.")
            all_pass &= (white_ok or dark_ok)
            all_pass &= report("primary / background (visibility, UI-component floor)", roles["primary"], roles["bg"], AA_LARGE_OR_UI)

        if "accent" in roles and "bg" in roles:
            all_pass &= report("accent / background (visibility + hyperlink-text floor)", roles["accent"], roles["bg"], AA_LARGE_OR_UI)

        sys.exit(0 if all_pass else 1)
    else:
        if len(args) != 2:
            print("Usage: check_contrast.py <hex1> <hex2>  OR  --palette role=hex ...  OR  --matrix role=hex ...", file=sys.stderr)
            sys.exit(1)
        all_pass = report("given pair", args[0], args[1], AA_NORMAL)
        sys.exit(0 if all_pass else 1)


if __name__ == "__main__":
    main()

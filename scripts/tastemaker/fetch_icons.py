#!/usr/bin/env python3
"""
Fetch icons from Iconify's public API — attribution-free, no API key.
Hardened with SSRF protection, path traversal defenses, and Windows UTF-8 safety.
"""

from __future__ import annotations

import argparse
import json
import os
import random
import re
import sys
import urllib.parse
import urllib.request

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32" and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _netguard import urlopen_checked  # noqa: E402

API = "https://api.iconify.design"

MOOD_ICON_SETS = {
    "premium": ["heroicons", "iconoir"],
    "warm": ["tabler", "solar"],
    "technical": ["lucide", "carbon"],
    "playful": ["ph", "mingcute"],
    "elegant": ["material-symbols", "fluent"],
}


def sanitize_name(name: str) -> str:
    """Sanitize icon name to prevent path traversal."""
    cleaned = re.sub(r"[^a-zA-Z0-9_-]", "-", name.strip().lower())
    return cleaned or "icon"


def search(query: str, set_prefix: str | None = None, limit: int = 16) -> list[str]:
    params = {"query": query, "limit": limit}
    if set_prefix:
        params["prefixes"] = set_prefix
    url = f"{API}/search?{urllib.parse.urlencode(params)}"
    with urlopen_checked(url, timeout=20, allow_external_cdns=False) as resp:
        data = json.loads(resp.read().decode())
    return data.get("icons", [])


def fetch_icon(
    set_name: str, name: str, color: str | None = None, width: int | None = None
) -> bytes:
    params = {}
    if color:
        params["color"] = color
    if width:
        params["width"] = width
    clean_set = sanitize_name(set_name)
    clean_name = sanitize_name(name)
    qs = f"?{urllib.parse.urlencode(params)}" if params else ""
    url = f"{API}/{clean_set}/{clean_name}.svg{qs}"
    with urlopen_checked(url, timeout=20, allow_external_cdns=False) as resp:
        return resp.read()


def main():
    parser = argparse.ArgumentParser(description="Fetch icons from Iconify.")
    parser.add_argument("--search", help="Search query to discover icon names")
    parser.add_argument("--icons", nargs="+", help="One or more icon names to download")
    parser.add_argument(
        "--mood",
        choices=["premium", "warm", "technical", "playful", "elegant"],
        help="Mood determines the recommended icon set",
    )
    parser.add_argument("--set", dest="icon_set", help="Explicit icon set name (e.g., lucide, tabler)")
    parser.add_argument("--color", help="Hex color code for the icons (e.g., '#6C5CE7')")
    parser.add_argument("--width", type=int, help="Width in pixels")
    parser.add_argument("--seed", help="Random seed for deterministic icon set selection")
    parser.add_argument("--out", default="design/assets/icons", help="Output directory")
    args = parser.parse_args()

    if args.icon_set:
        pass
    elif args.mood:
        candidates = MOOD_ICON_SETS[args.mood]
        args.icon_set = random.Random(args.seed).choice(candidates)
        print(f"Mood '{args.mood}' -> '{args.icon_set}'.", file=sys.stderr)
    else:
        args.icon_set = "lucide"

    if args.search:
        try:
            names = search(args.search, set_prefix=args.icon_set)
        except Exception as e:
            print(f"Search failed: {e}", file=sys.stderr)
            sys.exit(1)
        if not names:
            print(f"No icons found for '{args.search}' in set '{args.icon_set}'.")
            return
        print(f"Icons matching '{args.search}' in '{args.icon_set}':")
        for n in names:
            print(f"  {n.split(':', 1)[-1]}")
        return

    if not args.icons:
        print("Nothing to do. Use --search to discover names, or --icons to fetch.", file=sys.stderr)
        sys.exit(1)

    os.makedirs(args.out, exist_ok=True)
    out_abs = os.path.abspath(args.out)
    failed = []
    for raw_name in args.icons:
        name = sanitize_name(raw_name)
        try:
            svg = fetch_icon(args.icon_set, name, args.color, args.width)
            if len(svg) < 60:
                failed.append(name)
                print(f"[miss] {name} — not found in set '{args.icon_set}'")
                continue
            dest = os.path.abspath(os.path.join(out_abs, f"{name}.svg"))
            if not dest.startswith(out_abs):
                raise ValueError(f"Path traversal detected: {name}")
            with open(dest, "wb") as f:
                f.write(svg)
            print(f"[ok]   {dest}")
        except Exception as e:
            failed.append(name)
            print(f"[fail] {name} — {e}", file=sys.stderr)

    if failed:
        print(f"\n{len(failed)} icon(s) not fetched: {', '.join(failed)}.")


if __name__ == "__main__":
    main()

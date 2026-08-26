#!/usr/bin/env python3
"""
Tastemaker Master CLI Runner for Antigravity Design OS
Unified entry point for all 13 deterministic design tools.
"""

import sys
import subprocess
import os

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32" and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

COMMANDS = {
    "generate": "generate_palette.py",
    "contrast": "check_contrast.py",
    "scan": "anti_slop_scan.py",
    "audit-motion": "audit_motion.py",
    "photos": "fetch_photos.py",
    "icons": "fetch_icons.py",
    "recolor": "recolor_svg.py",
    "favicons": "export_favicons.py",
    "extract": "extract_palette.py",
    "domains": "check_domains.py",
    "security": "test_security.py",
    "validate": "validate_assets.py"
}

def print_help():
    print("""
[Tastemaker Tooling Suite - Antigravity Design OS]

Usage:
  python scripts/tastemaker/run.py <command> [args...]

Available Commands:
  generate       Generate procedural, legible-by-construction palette & contrast matrix
  contrast       Check WCAG 2.2 AA / APCA contrast ratios for arbitrary color pairs
  scan           Run AST & regex anti-slop linter against HTML, CSS, or JS/TS files
  audit-motion   Audit CSS and GSAP motion curves for linear timing violations
  photos         Fetch keyless, zero-attribution CC0 photography from Openverse
  icons          Fetch SVG vector icons from the Iconify ecosystem
  recolor        Recolor SVG vector assets to brand palette hexes
  favicons       Generate full favicon bundle (PNGs, ICO, Webmanifest) from SVG mark
  extract        Extract dominant colors and contrast ratios from image pixels
  domains        Audit asset domains and URLs for external dependencies
  validate       Validate dimensions, aspect ratios, and formats of visual assets
  security       Run local security sandbox checks on design assets

Examples:
  python scripts/tastemaker/run.py generate --mood technical --mode dark
  python scripts/tastemaker/run.py scan path/to/page.html
  python scripts/tastemaker/run.py photos "minimalist modern workspace" --out design/assets/photos
""")

def main():
    if len(sys.argv) < 2 or sys.argv[1] in ["-h", "--help", "help"]:
        print_help()
        sys.exit(0)

    cmd = sys.argv[1]
    args = sys.argv[2:]

    if cmd not in COMMANDS:
        print(f"Error: Unknown command '{cmd}'. Available: {', '.join(COMMANDS.keys())}")
        print_help()
        sys.exit(1)

    target_script = os.path.join(SCRIPT_DIR, COMMANDS[cmd])
    if not os.path.exists(target_script):
        print(f"Error: Script not found: {target_script}")
        sys.exit(1)

    result = subprocess.run([sys.executable, target_script] + args)
    sys.exit(result.returncode)

if __name__ == "__main__":
    main()

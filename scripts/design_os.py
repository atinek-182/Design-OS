#!/usr/bin/env python3
"""
Antigravity Design OS: Master Unified Python Engine & Workflow Orchestrator
Calibrated for Gemini 3.7 Flash & Senior Design Engineering Pipelines.
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import sys

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32" and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
TASTEMAKER_DIR = os.path.join(SCRIPT_DIR, "tastemaker")
TEMPLATES_DIR = os.path.join(PROJECT_ROOT, "templates")

if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if TASTEMAKER_DIR not in sys.path:
    sys.path.insert(0, TASTEMAKER_DIR)

try:
    from tastemaker import (
        anti_slop_scan,
        check_contrast,
        fetch_icons,
        fetch_photos,
        generate_palette,
    )
except ImportError:
    try:
        from scripts.tastemaker import (  # type: ignore
            anti_slop_scan,
            check_contrast,
            fetch_icons,
            fetch_photos,
            generate_palette,
        )
    except ImportError:
        import anti_slop_scan  # type: ignore
        import check_contrast  # type: ignore
        import fetch_icons  # type: ignore
        import fetch_photos  # type: ignore
        import generate_palette  # type: ignore



def cmd_init(args):
    """Scaffold the 7-File Context Foundation, Reference Vault, and Wayfinder Map."""
    target_dir = os.path.abspath(args.target)
    context_dir = os.path.join(target_dir, "context")
    ref_dir = os.path.join(target_dir, "reference")
    ref_assets_dir = os.path.join(ref_dir, "assets")
    docs_wayfinder_dir = os.path.join(target_dir, "docs", "wayfinder")

    os.makedirs(context_dir, exist_ok=True)
    os.makedirs(ref_assets_dir, exist_ok=True)
    os.makedirs(docs_wayfinder_dir, exist_ok=True)

    print("════════════════════════════════════════════════════════════════════════════════")
    print("🚀 ANTIGRAVITY DESIGN OS: INITIALIZING 7-FILE CONTEXT FOUNDATION")
    print("════════════════════════════════════════════════════════════════════════════════")

    # Copy context templates
    tmpl_context_dir = os.path.join(TEMPLATES_DIR, "context")
    if os.path.exists(tmpl_context_dir):
        for fname in sorted(os.listdir(tmpl_context_dir)):
            src = os.path.join(tmpl_context_dir, fname)
            if fname == "reference-MANIFEST.md":
                dst = os.path.join(ref_dir, "MANIFEST.md")
            else:
                dst = os.path.join(context_dir, fname)
            
            if not os.path.exists(dst) or args.force:
                shutil.copy2(src, dst)
                print(f"  [+] Scaffolding: {os.path.relpath(dst, target_dir)}")
            else:
                print(f"  [.] Existing (preserved): {os.path.relpath(dst, target_dir)}")

    # Copy wayfinder map
    wayfinder_src = os.path.join(TEMPLATES_DIR, "docs", "wayfinder", "design-map.md")
    wayfinder_dst = os.path.join(docs_wayfinder_dir, "design-map.md")
    if os.path.exists(wayfinder_src):
        if not os.path.exists(wayfinder_dst) or args.force:
            shutil.copy2(wayfinder_src, wayfinder_dst)
            print(f"  [+] Scaffolding: {os.path.relpath(wayfinder_dst, target_dir)}")

    print("\n✅ Context foundation successfully established.")
    print("👉 Next Step: Run Stage 1 Socratic Discovery in chat or execute: python scripts/design_os.py stage 1")
    print("════════════════════════════════════════════════════════════════════════════════\n")


def cmd_resume(args):
    """Resume session with zero context loss by inspecting progress tracker and wayfinder."""
    target_dir = os.path.abspath(args.target)
    tracker_path = os.path.join(target_dir, "context", "6-progress-tracker.md")
    tokens_path = os.path.join(target_dir, "context", "2-design-tokens.json")
    wayfinder_path = os.path.join(target_dir, "docs", "wayfinder", "design-map.md")

    print("════════════════════════════════════════════════════════════════════════════════")
    print("🔄 ANTIGRAVITY DESIGN OS: MULTI-SESSION RESUME PROTOCOL")
    print("════════════════════════════════════════════════════════════════════════════════")

    if not os.path.exists(tracker_path):
        print("⚠️ No active context tracker found. Initializing new context...")
        cmd_init(args)
        return

    # Read progress tracker
    with open(tracker_path, "r", encoding="utf-8") as f:
        tracker_content = f.read()

    print("📊 Current Project Status:")
    for line in tracker_content.splitlines()[:15]:
        if line.strip():
            print(f"   {line}")

    if os.path.exists(tokens_path):
        try:
            with open(tokens_path, "r", encoding="utf-8") as f:
                tokens = json.load(f)
            font_display = tokens.get("typography", {}).get("fontDisplay", "Default")
            bg_base = tokens.get("palette", {}).get("background", {}).get("base", "Default")
            print(f"\n🎨 Active Design Tokens: Font: {font_display} | Base BG: {bg_base}")
        except Exception:
            pass

    print("\n✅ Multi-session context restored cleanly. Ready to proceed with active stage.")
    print("════════════════════════════════════════════════════════════════════════════════\n")


def cmd_stage(args):
    """Advance or display isolated stage instructions."""
    stage_num = args.stage_number
    stages_info = {
        1: ("Socratic Brand, Mood & Stack Discovery", ["tastemaker", "design-brief", "north-star-vision"], "context/1-brand-and-vision.md"),
        2: ("Reference Ingestion & Deconstruction", ["explain-interface", "competitive-analysis", "case-study"], "reference/MANIFEST.md"),
        3: ("Deterministic Token & Contrast Math", ["better-colors", "better-typography", "theming-system"], "context/2-design-tokens.json"),
        4: ("Macrostructure & IA Rotation", ["better-layout", "editorial-tech", "gestalt-principles"], "context/3-ui-manifest.md"),
        5: ("Motion Physics & Interaction Spec", ["gsap-animation", "cinematic-gsap-lenis-motion-system", "emil-design-eng"], "context/4-motion-choreography.md"),
        6: ("Layout Skeleton & Grid Scaffolding", ["wireframe-spec", "tailwind-patterns", "tailwind-4-docs"], "src/components/layout/"),
        7: ("Component Crafting & Visual Surface", ["better-ui", "liquid-metal-border", "glass-dark-ui", "dither-background", "threejs-shaders"], "src/components/ui/"),
        8: ("Kinetic Motion, WebGL Shaders & Sound UX", ["threejs-postprocessing", "threejs-interaction", "sound-design-ux", "gsap-scrolltrigger", "gsap-timeline"], "src/motion/"),
        9: ("Deterministic Asset Binding", ["solar-duotone-bold", "ideagram"], "src/assets/"),
        10: ("Mobile & Touch Ergonomics", ["mobile-app-ui-design", "animate-expo", "gesture-patterns"], "src/mobile/"),
        11: ("Multi-Engine Quality Gates & Visual Diffing", ["visual-regression-gate", "better-interface", "better-accessibility"], ".screenshots/"),
        12: ("Anti-Slop Audit, VibeSec & Handoff", ["design-impact-reporting", "workflow-handoff", "design-system-governance", "break"], "audit-report.md")
    }

    if stage_num not in stages_info:
        print(f"Error: Stage number must be between 1 and 12. Received: {stage_num}")
        return

    name, skills, artifact = stages_info[stage_num]
    print("════════════════════════════════════════════════════════════════════════════════")
    print(f"🎯 DESIGN OS: STAGE {stage_num} — {name.upper()}")
    print("════════════════════════════════════════════════════════════════════════════════")
    print(f"📦 Isolated Stage Skills: {', '.join(skills)}")
    print(f"📄 Target Checkpoint Artifact: {artifact}")
    if stage_num <= 5:
        print("🛑 Strict Planning Gate: Zero code modifications permitted until Stage 5 DoD is signed off.")
    else:
        print("⚡ Execution Stage: Build strictly against tokens in context/2-design-tokens.json.")
    print("════════════════════════════════════════════════════════════════════════════════\n")


def cmd_verify(args):
    """Execute Playwright 5-viewport screenshot runner and responsive health check."""
    url = args.url or "http://localhost:4173"
    out_dir = os.path.abspath(args.out or ".screenshots")
    os.makedirs(out_dir, exist_ok=True)

    viewports = [
        ("desktop", 1920, 1080),
        ("laptop", 1440, 900),
        ("tablet", 768, 1024),
        ("mobile-portrait", 375, 812),
        ("mobile-landscape", 667, 375),
    ]

    print("════════════════════════════════════════════════════════════════════════════════")
    print(f"📸 DESIGN OS: RUNNING PLAYWRIGHT 5-VIEWPORT SCREENSHOT GATE ON {url}")
    print("════════════════════════════════════════════════════════════════════════════════")

    # Generate Node runner script for Playwright safely using JSON serialization
    runner_js = os.path.join(SCRIPT_DIR, "_playwright_runner.mjs")
    runner_code = f"""
import {{ chromium }} from 'playwright';
import fs from 'fs';

const viewports = {json.dumps(viewports)};
const url = {json.dumps(url)};
const outDir = {json.dumps(out_dir.replace(os.sep, '/'))};

async function run() {{
  let browser;
  try {{
    browser = await chromium.launch({{ headless: true }});
    const page = await browser.newPage();
    console.log(`Connecting to ${{url}}...`);
    await page.goto(url, {{ waitUntil: 'networkidle', timeout: 15000 }});
    
    for (const [name, width, height] of viewports) {{
      await page.setViewportSize({{ width, height }});
      await page.waitForTimeout(500);
      const filePath = `${{outDir}}/${{name}}.png`;
      await page.screenshot({{ path: filePath, fullPage: true }});
      console.log(`  [✓] Captured ${{name}} (${{width}}x${{height}}) -> ${{filePath}}`);
    }}
  }} catch (err) {{
    console.log(`  [!] Notice: Playwright automated runner message: ${{err.message}}`);
    console.log(`  [i] In Antigravity agent runtime, multi-viewport inspection can be completed via browser_testing.`);
  }} finally {{
    if (browser) await browser.close();
  }}
}}
run();
"""
    try:
        with open(runner_js, "w", encoding="utf-8") as f:
            f.write(runner_code)
        
        import subprocess
        res = subprocess.run(["node", runner_js], capture_output=True, text=True)
        print(res.stdout)
        if res.stderr and "Error" in res.stderr:
            print(res.stderr)
    except Exception as e:
        print(f"Runner info: {e}")
    finally:
        if os.path.exists(runner_js):
            try:
                os.remove(runner_js)
            except Exception:
                pass

    print("════════════════════════════════════════════════════════════════════════════════\n")


def cmd_workflow(args):
    """Execute or print guide for the 6 Master Design OS Workflows."""
    name = args.workflow_name.lower()
    
    workflows = {
        "page": """
================================================================================
🌊 MASTER WORKFLOW: 12-STAGE DESIGN ENGINEERING PIPELINE
================================================================================
Phase I: Strategic Discovery & Inception (Stages 1-3)
  - Stage 1: Brand & Stack Selection (python scripts/design_os.py stage 1)
  - Stage 2: Reference Deconstruction (python scripts/design_os.py stage 2)
  - Stage 3: Information Architecture & User Flows (python scripts/design_os.py stage 3)

Phase II: Mathematical Tokens & Surface Craft (Stages 4-6)
  - Stage 4: Token Generation & Contrast Floor (python scripts/design_os.py palette --mood technical)
  - Stage 5: Macrostructure & Section Rhythm (python scripts/design_os.py stage 5)
  - Stage 6: Surface Aesthetics & Materiality (python scripts/design_os.py stage 6)

Phase III: Component Engineering & Kinetic Physics (Stages 7-9)
  - Stage 7: Component Engineering & State Machines (python scripts/design_os.py stage 7)
  - Stage 8: Motion Choreography & WebGL FX (python scripts/design_os.py stage 8)
  - Stage 9: Deterministic Asset Binding (python scripts/design_os.py photos / icons)

Phase IV: Quality Hardening & Handoff (Stages 10-12)
  - Stage 10: Mobile & Touch Ergonomics (python scripts/design_os.py stage 10)
  - Stage 11: Playwright 5-Viewport Gate & Diffing (python scripts/design_os.py verify)
  - Stage 12: Anti-Slop Audit & Design Governance (python scripts/design_os.py scan .)
================================================================================
""",
        "component": """
================================================================================
⚡ COMPONENT SPRINT WORKFLOW (Single Component Crafting)
================================================================================
1. Extract Component Contract: Define props, states (hover/press/loading/error/empty).
2. Token Floor: Verify WCAG 2.2 AA contrast matrix (python scripts/design_os.py contrast).
3. Surface Craft: Concentric border radius, 1px hairline border, tinted depth shadow.
4. Micro-Interactions: 150-250ms cubic-bezier transition, scale-on-press (active:scale-98).
5. AST Anti-Slop Verification: (python scripts/design_os.py scan <path-to-component>).
================================================================================
""",
        "motion": """
================================================================================
🎬 KINETIC MOTION & AWWWARDS WEBGL WORKFLOW
================================================================================
1. Smooth Scroll Foundation: Lenis momentum scroller setup.
2. GSAP Timeline Choreography: Orchestrated entrance staggered reveals.
3. ScrollTrigger Pinned Parallax: ContainerAnimation fake horizontal or pinned scrub.
4. WebGL Shaders: Custom GLSL displacement, chromatic aberration, fluid cursor trails.
5. Sound UX: Zero-dependency Web Audio API micro-haptics.
================================================================================
""",
        "mobile": """
================================================================================
📱 MOBILE APP & TOUCH ERGONOMICS WORKFLOW
================================================================================
1. Thumb Zone Architecture: Critical CTAs in bottom 1/3 viewport.
2. Touch Target Sizing: Minimum 44x44pt (iOS HIG) / 48x48dp (Material).
3. 8-Point Spatial Rhythm: Multiples of 4/8px with safe-area-inset padding.
4. Bottom Sheet Drawers: Replace center modals with gesture-dismissible sheets.
5. 5-Viewport Responsive Gate: Verify portrait and landscape across mobile devices.
================================================================================
""",
        "audit": """
================================================================================
🛡️ MULTI-ENGINE QUALITY AUDIT & VIBESEC GATE
================================================================================
1. AST Anti-Slop Scanner: python scripts/design_os.py scan .
2. Contrast Flooring Matrix: python scripts/design_os.py contrast text=#ffffff bg=#090d16
3. Playwright 5-Viewport Gate: python scripts/design_os.py verify
4. Full OS Test Suite: npm run audit:full
5. Security Domain Guard: python scripts/tastemaker/test_security.py
================================================================================
"""
    }

    if name in workflows:
        print(workflows[name])
    else:
        print(f"Displaying default master pipeline:")
        print(workflows["page"])


def main():
    parser = argparse.ArgumentParser(
        prog="design_os",
        description="Antigravity Design OS: Master Python Engine & Tooling Suite",
    )
    subparsers = parser.add_subparsers(dest="command", help="Available commands")

    # Init command
    init_parser = subparsers.add_parser("init", help="Scaffold 7-File Context Foundation & Reference Vault")
    init_parser.add_argument("--target", default=".", help="Target project directory")
    init_parser.add_argument("--force", action="store_true", help="Overwrite existing context files")

    # Resume command
    res_parser = subparsers.add_parser("resume", help="Resume project context with zero loss")
    res_parser.add_argument("--target", default=".", help="Target project directory")

    # Stage command
    stage_parser = subparsers.add_parser("stage", help="Advance or display isolated stage instructions")
    stage_parser.add_argument("stage_number", type=int, choices=range(1, 13), help="Stage number (1-12)")

    # Verify command
    ver_parser = subparsers.add_parser("verify", help="Run Playwright 5-viewport screenshot runner")
    ver_parser.add_argument("--url", default="http://localhost:4173", help="Target URL")
    ver_parser.add_argument("--out", default=".screenshots", help="Output screenshot directory")

    # Workflow command
    wf_parser = subparsers.add_parser("workflow", help="Run or display a Master Design Workflow")
    wf_parser.add_argument("workflow_name", nargs="?", default="page")

    # Palette command
    pal_parser = subparsers.add_parser("palette", help="Generate procedural OKLCH palette & WCAG matrix")
    pal_parser.add_argument("--mood", choices=["premium", "warm", "technical", "playful", "elegant"], default="technical")
    pal_parser.add_argument("--mode", choices=["dark", "light"], default="dark")
    pal_parser.add_argument("--seed", help="Random seed for reproducible palette")

    # Contrast command
    con_parser = subparsers.add_parser("contrast", help="Check contrast ratios for color pairs")
    con_parser.add_argument("pairs", nargs="*", help="Key=value pairs, e.g. text=#ffffff bg=#090d16")

    # Scan command
    scan_parser = subparsers.add_parser("scan", help="Run AST & regex anti-slop scanner")
    scan_parser.add_argument("paths", nargs="*", default=["."], help="Files or directories to scan (default: .)")
    scan_parser.add_argument("--fail-on", choices=["high", "medium", "none"], default="high")

    # Photos command
    photo_parser = subparsers.add_parser("photos", help="Fetch keyless CC0 photography from Openverse")
    photo_parser.add_argument("query", help="Search query")
    photo_parser.add_argument("--count", type=int, default=3, help="Number of photos")
    photo_parser.add_argument("--out", default="design/assets/photos", help="Output directory")

    # Icons command
    icon_parser = subparsers.add_parser("icons", help="Fetch SVG icons from Iconify")
    icon_parser.add_argument("--icons", nargs="+", help="Icon names")
    icon_parser.add_argument("--mood", choices=["premium", "warm", "technical", "playful", "elegant"], default="technical")
    icon_parser.add_argument("--out", default="design/assets/icons", help="Output directory")

    args, unknown = parser.parse_known_args()

    if not args.command:
        parser.print_help()
        sys.exit(0)

    if args.command == "init":
        cmd_init(args)
    elif args.command == "resume":
        cmd_resume(args)
    elif args.command == "stage":
        cmd_stage(args)
    elif args.command == "verify":
        cmd_verify(args)
    elif args.command == "workflow":
        cmd_workflow(args)
    elif args.command == "palette":
        sys.argv = [sys.argv[0]] + (["--mood", args.mood, "--mode", args.mode] + (["--seed", args.seed] if args.seed else []))
        generate_palette.main()
    elif args.command == "contrast":
        sys.argv = [sys.argv[0]] + args.pairs
        check_contrast.main()
    elif args.command == "scan":
        anti_slop_scan.sys.argv = [sys.argv[0]] + [str(p) for p in args.paths]
        sys.exit(anti_slop_scan.main())
    elif args.command == "photos":
        sys.argv = [sys.argv[0], args.query, "--count", str(args.count), "--out", args.out]
        fetch_photos.main()
    elif args.command == "icons":
        sys.argv = [sys.argv[0]] + (["--icons"] + args.icons if args.icons else ["--search", "ui"]) + ["--mood", args.mood, "--out", args.out]
        fetch_icons.main()


if __name__ == "__main__":
    main()

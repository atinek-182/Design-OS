#!/usr/bin/env python3
"""
scripts/ingest_vault.py
-----------------------
Master Ingestion & Distillation CLI for Design-OS.
Ingests all 23 Awwwards reference sites + research vaults into:
- references/research-vault/ (7 theoretical sub-vaults)
- references/vault/site-XX-name/ (Standardized deconstructions, assets, mirrors, and code-extracts)
- components/ (Flat, curated, production React 19 + Tailwind v4 components)

Usage:
  python scripts/ingest_vault.py --sync-research
  python scripts/ingest_vault.py --batch 1
  python scripts/ingest_vault.py --batch 2
  python scripts/ingest_vault.py --status
"""

import os
import sys
import shutil
import argparse
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SRC_RESEARCH_VAULT = Path(r"D:\AI-OS\references\awwwards-research-vault")
SRC_VAULT_REFS = Path(r"D:\AI-OS\premium-frontend-experience-system\vault-references")
SRC_SITES = Path(r"D:\AI-OS\premium-frontend-experience-system\reference-inputs\sites")

DEST_RESEARCH_VAULT = BASE_DIR / "references" / "research-vault"
DEST_VAULT = BASE_DIR / "references" / "vault"
DEST_COMPONENTS = BASE_DIR / "components"

BATCHES = {
    1: [
        ("site-01-active-theory", "active-theory", "Cyber-Minimalist Obsidian HUD & GLSL Particles"),
        ("site-02-ashley-brooke", "ashley-brooke-cs", "Warm Neutral Editorial Luxury & Serif Typography"),
        ("site-03-champions-4-good", "champions-4-good", "High-Impact Bold Typography & Bento Grid"),
        ("site-04-detroit-paris", "detroit-paris", "Asymmetrical Obys Grid & Custom Cursor"),
        ("site-05-follow-art", "follow-art", "Art Curation & Smooth Kinetic Gallery"),
    ],
    2: [
        ("site-06-gehry-getty", "gehry-getty", "Architectural Brutalism & Monospace Metadata"),
        ("site-07-good-fella", "good-fella", "Retro-Modern Kinetic Typography & Vibrant Palette"),
        ("site-08-grids-obys-agency", "grids-obys-agency", "Obys 140px Grid, Liquid Type & Wave Distortion"),
        ("site-09-jasmine-gunarto", "jasmine-gunarto", "Boutique Luxury Portfolio & Masked Text Reveals"),
        ("site-10-locomotive-agency", "locomotive-agency", "Locomotive Scroll / Lenis & Kinetic Typography"),
    ],
    3: [
        ("site-11-made-in-evolve", "made-in-evolve", "Interactive 3D Showcases & High-Density HUD"),
        ("site-12-merci-michel", "merci-michel", "Web Audio Engine & Particle Physics Micro-Interactions"),
        ("site-13-off-menu-design", "off-menu-design", "Experimental Menus & SVG Magnetic Path Nav"),
        ("site-14-oryzo-ai", "oryzo-ai", "Lusion 3D Gaussian Splats & 60k px Camera Scrollytelling"),
        ("site-15-outfit-hello-hello", "outfit-hello-hello", "Fashion Editorial & Horizontal Parallax Slider"),
    ],
    4: [
        ("site-16-resn-corn-revolution", "resn-corn-revolution", "Resn Playful Physics & Custom Interactive Audio"),
        ("site-17-sondaven", "sondaven", "Drag-along-path SVG Slider, Euclidean Pins & 180deg Card Flip"),
        ("site-18-the-line-studio", "the-line-studio", "3D Rotated Card Transitions & Electric Red Overlays"),
        ("site-19-the-shift-tokyo", "the-shift-tokyo", "Japanese Precision Grid & Interactive Particle Canvas"),
        ("site-20-tresmares-capital", "tresmares-capital", "Subtle Glassmorphism & Interactive Financial Charts"),
    ],
    5: [
        ("site-21-trionn-agency", "trionn-agency", "16 GLSL Shaders, Dual-Ring Cursor & Master Motion"),
        ("site-22-truck-n-roll", "truck-n-roll", "Industrial Brutalism & Bold Soundscapes"),
        ("site-23-unleashing-best", "unleashing-best", "Fluid Typography Clamps & Staggered Word Reveals"),
    ]
}

def sync_research_vault():
    print("[INFO] Synchronizing 7 Theoretical Research Sub-Vaults...")
    if not SRC_RESEARCH_VAULT.exists():
        print(f"[FAIL] Source path {SRC_RESEARCH_VAULT} does not exist.")
        return

    DEST_RESEARCH_VAULT.mkdir(parents=True, exist_ok=True)
    for item in SRC_RESEARCH_VAULT.iterdir():
        dest = DEST_RESEARCH_VAULT / item.name
        if item.is_dir():
            shutil.copytree(item, dest, dirs_exist_ok=True)
        else:
            shutil.copy2(item, dest)
    print(f"[PASS] Synchronized 7 sub-vaults into {DEST_RESEARCH_VAULT}")

def curate_component(src_file: Path, target_category: str, new_name: str = None):
    target_dir = DEST_COMPONENTS / target_category
    target_dir.mkdir(parents=True, exist_ok=True)
    dest_name = new_name if new_name else src_file.name
    dest_file = target_dir / dest_name
    shutil.copy2(src_file, dest_file)
    print(f"    [CURATED] {src_file.name} -> components/{target_category}/{dest_name}")

def ingest_batch(batch_num):
    if batch_num not in BATCHES:
        print(f"[FAIL] Invalid batch number: {batch_num}. Valid batches are 1 to 5.")
        return

    sites = BATCHES[batch_num]
    print(f"\n=======================================================")
    print(f"[ACTIVE] Ingesting Batch {batch_num} ({len(sites)} Sites)")
    print(f"=======================================================")

    for dest_name, src_slug, archetype in sites:
        print(f"\n[INFO] Processing {src_slug} -> {dest_name} ({archetype})")
        site_dest = DEST_VAULT / dest_name
        site_dest.mkdir(parents=True, exist_ok=True)

        # 1. Copy Granularity Master Deconstruction
        granularity_file = SRC_VAULT_REFS / f"{src_slug}-granularity-master.md"
        if granularity_file.exists():
            shutil.copy2(granularity_file, site_dest / "DECONSTRUCTION.md")
            print(f"  [PASS] Copied DECONSTRUCTION.md")

        src_site_dir = SRC_SITES / src_slug
        if src_site_dir.exists():
            # 2. Copy documentation
            site_dna = src_site_dir / "site-dna.md"
            if site_dna.exists():
                shutil.copy2(site_dna, site_dest / "site-dna.md")

            deep_analysis = src_site_dir / "DEEP_ANALYSIS.md"
            if deep_analysis.exists():
                shutil.copy2(deep_analysis, site_dest / "DEEP_ANALYSIS.md")

            # 3. Recursively copy assets (screenshots, wireframes, images, videos)
            src_assets = src_site_dir / "assets"
            if src_assets.exists():
                dest_assets = site_dest / "assets"
                shutil.copytree(src_assets, dest_assets, dirs_exist_ok=True)
                asset_count = sum(len(files) for _, _, files in os.walk(dest_assets))
                print(f"  [PASS] Copied Assets ({asset_count} files)")

            # 4. Recursively copy all code-extracts
            src_code = src_site_dir / "code-extracts"
            if src_code.exists():
                dest_code = site_dest / "code-extracts"
                shutil.copytree(src_code, dest_code, dirs_exist_ok=True)
                code_count = sum(len(files) for _, _, files in os.walk(dest_code))
                print(f"  [PASS] Copied Code Extracts ({code_count} files across all subdirs)")

                # Also symlink or copy individual subdirs for easy top-level access
                for subdir in ["animations", "components", "shaders", "styles"]:
                    src_sub = src_code / subdir
                    if src_sub.exists() and any(src_sub.iterdir()):
                        dest_sub = site_dest / subdir
                        shutil.copytree(src_sub, dest_sub, dirs_exist_ok=True)
                        print(f"  [PASS] Populated {subdir}/ ({len(list(dest_sub.iterdir()))} items)")

            # 5. Curate Key Top-Level React Components into Design-OS components/
            src_comp = src_site_dir / "code-extracts" / "components"
            if src_comp.exists():
                for comp_file in src_comp.glob("*.tsx"):
                    name_lower = comp_file.name.lower()
                    prefix = dest_name.replace("site-", "").split("-")[0] # e.g. 02, 03
                    
                    if "hero" in name_lower or "banner" in name_lower:
                        curate_component(comp_file, "heroes", f"{comp_file.stem}_{src_slug.replace('-', '_')}.tsx")
                    elif "nav" in name_lower or "header" in name_lower or "menu" in name_lower:
                        curate_component(comp_file, "navigation", f"{comp_file.stem}_{src_slug.replace('-', '_')}.tsx")
                    elif "card" in name_lower or "case" in name_lower or "work" in name_lower or "grid" in name_lower or "gallery" in name_lower:
                        curate_component(comp_file, "editorial", f"{comp_file.stem}_{src_slug.replace('-', '_')}.tsx")
                    elif "footer" in name_lower:
                        curate_component(comp_file, "micro-ui", f"{comp_file.stem}_{src_slug.replace('-', '_')}.tsx")
                    elif "audio" in name_lower or "sound" in name_lower:
                        curate_component(comp_file, "audio", f"{comp_file.stem}_{src_slug.replace('-', '_')}.tsx")
                    else:
                        curate_component(comp_file, "kinetic", f"{comp_file.stem}_{src_slug.replace('-', '_')}.tsx")

            # 6. Curate Shaders if present
            src_shaders = src_site_dir / "code-extracts" / "shaders"
            if src_shaders.exists() and any(src_shaders.iterdir()):
                for glsl in src_shaders.glob("*.glsl"):
                    dest_glsl = DEST_COMPONENTS / "shaders" / f"{src_slug}_{glsl.name}"
                    shutil.copy2(glsl, dest_glsl)
                    print(f"    [CURATED SHADER] {glsl.name} -> components/shaders/{dest_glsl.name}")

        print(f"[PASS] Successfully ingested {dest_name}")

    print(f"\n[SUCCESS] Batch {batch_num} Ingestion & Distillation Complete!")

def show_status():
    print("\n=======================================================")
    print("Design-OS Awwwards Vault Ingestion Status Tracker")
    print("=======================================================")
    print(f"Foundation Site 00 (Obys Typography): {'[INGESTED]' if (DEST_VAULT / 'site-00-obys-typography').exists() else '[PENDING]'}")
    
    for b in range(1, 6):
        sites = BATCHES[b]
        ingested_count = sum(1 for dest_name, _, _ in sites if (DEST_VAULT / dest_name).exists())
        status = "[INGESTED]" if ingested_count == len(sites) else f"[{ingested_count}/{len(sites)} INGESTED]"
        print(f"Batch {b} ({len(sites)} Sites): {status}")

def main():
    parser = argparse.ArgumentParser(description="Design-OS Awwwards Vault Ingestion CLI")
    parser.add_argument("--sync-research", action="store_true", help="Synchronize the 7 research sub-vaults")
    parser.add_argument("--batch", type=int, choices=[1, 2, 3, 4, 5], help="Ingest a specific batch (1-5)")
    parser.add_argument("--status", action="store_true", help="Show current vault ingestion status")

    args = parser.parse_args()

    if args.sync_research:
        sync_research_vault()
    elif args.batch:
        ingest_batch(args.batch)
    elif args.status:
        show_status()
    else:
        show_status()

if __name__ == "__main__":
    main()

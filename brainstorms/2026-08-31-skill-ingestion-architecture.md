# Flagship Skill Anatomy & Ingestion Taxonomy: Discovery & Brainstorm Notes
Date: 2026-08-31 · Goal: Define the comprehensive, commercial-grade folder and asset organization for the Flagship Skill across references, components, scripts, research, docs, and live interactive benchmarks.

## Summary / Key Decisions
- Ingesting 23+ Awwwards Site of the Year codebases into modular, production-ready assets without bloat.
- Preserving all 134 standalone skills in `.agents/skills/` while building the master flagship skill as the central orchestration hub.
- Enforcing strict zero-slop mathematical flooring (OKLCH, Obys 140px rhythm, single-ticker GSAP/Lenis sync, Emil Kowalski micro-interactions, Web Audio haptics, Playwright receipts).

## Q&A Log: Structural Taxonomy & Expansion Dimensions

### Q1 — Component Library Scope & Subcategories
- **Captured**:
  - Production React 19 + TypeScript + Tailwind v4 component blocks (Drop-in heroes, HUD navbars, kinetic text masks, shaders).
  - Multi-variant component switchers (3-way in-page layout, density, and typography pickers via `variant`).
  - Zero-Dependency Web Audio Micro-Haptics (15ms tactile click impulses, mode chimes, spatial audio).
  - Typography, Layout, GSAP, Lenis, and complex SVG animations & vector paths.
  - Commercial-safe open typography (Fontshare / SIL OFL open-source webfonts: Clash Display, General Sans, Instrument Serif, Syne, Cabinet Grotesk).
  - Performance-guarded WebGL/GLSL shader modules (safe on mobile GPUs).
- **Flags**: Component organization schema in `components/` -> Owner: Antigravity Architect.

### Q2 — Deterministic Scripts & Automation Suite
- **Captured**:
  - `scripts/design_os.py`: Master CLI coordinator (`init`, `resume`, `stage`, `verify`, `palette`, `contrast`, `scan`, `photos`, `icons`).
  - `scripts/tastemaker/generate_palette.py` & `check_contrast.py`: Perceptual OKLCH color math & WCAG 2.2 AA matrix.
  - `scripts/tastemaker/anti_slop_scan.py`: 6-axis AST slop pattern detector.
  - `scripts/tastemaker/fetch_photos.py` & `fetch_icons.py`: Zero-placeholder CC0 Openverse and Iconify SVG resolvers.
  - `scripts/design_os.py verify`: Automated Playwright 5-viewport screenshot runner.
  - `scripts/sanitize_svg.py`: DOM XSS SVG sanitizer and CSP validator.
  - Synergize with utilities already existing in `.agents/skills/`.
- **Flags**: Python CLI packaging -> Owner: Tooling Lead.

### Q3 — Deep Research, Theory & Awwwards Vault Ingestion
- **Captured**:
  - Architectural deconstructions of 23+ Awwwards sites (expanding continuously).
  - Color science & perceptual contrast (OKLCH vs sRGB, APCA vs WCAG 2.2 AA).
  - Mathematical kinetic physics (framerate-independent exponential lerp damping, non-linear deceleration curves).
  - Awwwards typography scales, spatial psychology, and Obys 140px section rhythm.
- **Flags**: Manifest catalog in `references/MANIFEST.md` -> Owner: Research Lead.

### Q4 — Proof-of-Quality & Testing Harness
- **Captured**:
  - Dual-Engine Testing: Live interactive Studio Dashboard on port 4173 (`npm start`) + Headless automated Playwright screenshot pipeline.
- **Flags**: Studio Dashboard runner -> Owner: Demo Lead.

## Detailed Folder Architecture Blueprint

```
d:/Design-OS/
├── references/
│   ├── incoming/                               # Staging area for incoming research/code
│   │   ├── case-studies/
│   │   ├── components/
│   │   ├── research/
│   │   └── urls/
│   ├── vault/                                  # 23+ Awwwards reference deconstructions
│   │   ├── active-theory/                      # [INGESTED] Site 01
│   │   ├── site-02/ ... site-23/               # [PENDING INGESTION]
│   │   ├── archetypes/                         # 4 signature aesthetic archetypes
│   │   ├── motion-physics/                     # Kinetic easing & lerp math
│   │   └── shaders/                            # WebGL GLSL shader library
│   ├── style-recipes/                          # 25+ curated style recipes
│   ├── macrostructures/                        # 7 rotated structural skeletons
│   ├── typography/                             # Fontshare/Google Fonts commercial pairings
│   └── svg-animations/                         # Advanced SVG vector motion blueprints
├── components/
│   ├── heroes/                                 # 3D canvas, asymmetric editorial, media bands
│   ├── navigation/                             # HUD 4-corner, sparse minimal, magnetic dock
│   ├── kinetic/                                # Masked text splitters, parallax, horizontal scroll
│   ├── shaders/                                # Liquid metal, Bayer dither, fluid ripple
│   ├── micro-ui/                               # Scale-on-press buttons, origin popovers, instant tooltips
│   ├── audio/                                  # Web Audio synthesizers (click, chime, spatial)
│   └── variant-switchers/                      # 3-way in-page candidate switcher harness
├── scripts/
│   ├── design_os.py                            # Master Python CLI
│   ├── audit-design-os.mjs                     # Full system linter
│   ├── serve-demos.mjs                         # Live Studio Dashboard server
│   ├── sanitize_svg.py                         # SVG DOM XSS sanitizer
│   └── tastemaker/
│       ├── anti_slop_scan.py                   # 6-axis AST anti-slop linter
│       ├── check_contrast.py                   # Mathematical contrast matrix
│       ├── fetch_icons.py                      # Iconify Solar Duotone resolver
│       ├── fetch_photos.py                     # Openverse CC0 photo scraper
│       └── generate_palette.py                 # OKLCH palette generator
├── research/
│   ├── tastemaker/                             # OKLCH math, macrostructure papers
│   ├── kinetics/                               # Framerate-normalized lerp, WAAPI proofs
│   ├── a11y/                                   # WCAG 2.2 AA & APCA contrast thresholds
│   └── svg-physics/                            # Morphing vectors, stroke dashoffset math
├── docs/
│   ├── ARCHITECTURE.md                         # System architecture
│   ├── DESIGN_OS_UNIFIED_ARCHITECTURE_AUDIT.md # Master 16-section audit
│   ├── FLAGSHIP_SKILL_COMMERCIAL_ARCHITECTURE.md # Commercial blueprint
│   ├── API_AND_PROPS.md                        # Component customization reference
│   └── workflows/
│       └── MASTER_WORKFLOW_ENGINE.md           # 4-Stage Adaptive lifecycle
├── templates/                                  # Production-ready starter templates (Vite, Next.js)
└── brainstorms/                                # Persistent discovery & interview notes
```

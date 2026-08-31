# Master Awwwards Vault Ingestion & Component Synthesis Plan

> **Plan ID**: `AWWWARDS-INGESTION-v2.0`  
> **Status**: `[APPROVED & IN EXECUTION]`  
> **Scope**: 23 External Awwwards Sites + Foundation Site 00 (Obys Typography Principles) + 7 Theoretical Research Sub-Vaults.

---

## 1. Directory & Ingestion Architecture

```
d:/Design-OS/
├── references/
│   ├── vault/
│   │   ├── site-00-obys-typography/            # [PRIORITY] Obys Typography Principles (Full Extraction)
│   │   ├── site-01-active-theory/              # [INGESTED] Active Theory (Hydra Math, GLSL Particles, Audio)
│   │   ├── site-02-ashley-brooke/ ... site-23/ # [5-BY-5 BATCH INGESTION]
│   │   ├── archetypes/                         # 5 Signature aesthetic engines
│   │   ├── motion-physics/                     # Framerate-normalized kinetic curves & Lenis hooks
│   │   └── shaders/                            # GLSL WebGL fragment shaders
│   └── research-vault/                         # 7 Synchronized theoretical sub-vaults (200+ docs)
│
├── components/                                 # [MODULAR REACT 19 + TSX TAXONOMY]
│   ├── heroes/                                 # Bespoke hero blocks with canvas stages
│   ├── navigation/                             # 4-corner HUD, magnetic dock, clip-path overlays
│   ├── typography/                             # Obys masked headline reveals, marquee tickers, fluid type
│   ├── svg-motion/                             # Curved SVG sliders, stroke draw, vector morphs
│   ├── transitions/                            # Pinned curtain wipes, View Transitions, Matter.js physics
│   ├── editorial/                              # Asymmetrical photo collages, Van de Graaf heroes
│   ├── kinetic/                                # Horizontal pinned scrollers, parallax depth cards
│   ├── shaders/                                # Standalone WebGL Three.js canvas stages
│   ├── micro-ui/                               # Scale(0.97) magnetic buttons, origin popovers
│   └── audio/                                  # Zero-dependency Web Audio synthesizers
│
├── scripts/
│   ├── extract_obys_typography.py              # Dedicated scraper & extractor for Foundation Site 00
│   ├── ingest_vault.py                         # Master 5-by-5 batch ingestion & distillation CLI
│   └── tastemaker/                             # Contrast, anti-slop, palette, and typography math tools
│
└── projects/                                   # [MANDATORY PROJECT ROUTING]
    ├── Websites/                               # Production client websites & flagships
    ├── Products/                               # Full web applications & SaaS platforms
    └── Sandbox/                                # Interactive batch test stages & component spikes
```

---

## 2. 5-Batch Execution Roadmap

### Foundation Priority: Site 00 (Obys Typography Principles)
- **Source**: `https://typographyprinciples.obys.agency/`
- **Actions**:
  1. Scrape all 7 pages (Intro, Fonts, Alignments, Contrast, Spacing, Measure, Negative Space).
  2. Download all raw assets, images, and font files into `references/vault/site-00-obys-typography/assets/`.
  3. Mirror raw HTML snippets and CSS into `references/vault/site-00-obys-typography/mirror/`.
  4. Author `OBYS_TYPOGRAPHY_DECONSTRUCTION.md`, `site-dna.md`, and `typography-math.ts`.
  5. Extract React 19 components into `components/typography/` (`<ObysHeadlineReveal>`, `<ObysInteractiveTypeTester>`, `<ObysEditorialPairing>`).

---

### Batch 1: Sites 01–05 (Studio & Editorial Pioneers)
1. **Site 01 (Active Theory)**: Cyber-Minimalist Obsidian HUD, GLSL particles, Hydra math. `[INGESTED]`
2. **Site 02 (Ashley Brooke CS)**: Warm neutral editorial luxury, bespoke serif typography, magazine layout.
3. **Site 03 (Champions 4 Good)**: High-impact typography, bold contrasting accents, interactive grid.
4. **Site 04 (Detroit Paris)**: Cross-cultural studio portfolio, asymmetrical Obys grid, custom cursor.
5. **Site 05 (Follow Art)**: Art curation, kinetic image reveals, smooth scroll gallery.

---

### Batch 2: Sites 06–10 (Spatial & Grid Masters)
6. **Site 06 (Gehry Getty)**: Architectural brutalism, monospace metadata, high-contrast dark mode.
7. **Site 07 (Good Fella)**: Retro-modern kinetic typography, vibrant palette, micro-animations.
8. **Site 08 (Grids Obys Agency)**: The gold-standard Obys 140px spatial grid, liquid typography, wave distortion.
9. **Site 09 (Jasmine Gunarto)**: Boutique luxury portfolio, smooth Lenis scroll, masked text reveal.
10. **Site 10 (Locomotive Agency)**: Locomotive Scroll / Lenis, kinetic typography, Barba transitions.

---

### Batch 3: Sites 11–15 (3D WebGL & Experimental Innovators)
11. **Site 11 (Made In Evolve)**: Interactive 3D showcases, WebGL shaders, high-density HUD.
12. **Site 12 (Merci Michel)**: Hall of fame Web Audio engine, particle fields, playful micro-interactions.
13. **Site 13 (Off Menu Design)**: Experimental menu systems, SVG magnetic path navigation.
14. **Site 14 (Oryzo AI)**: Lusion 3D Gaussian splatting, 60k px camera scrollytelling.
15. **Site 15 (Outfit Hello Hello)**: Fashion editorial, horizontal parallax slider, dynamic theme switcher.

---

### Batch 4: Sites 16–20 (Luxury & High-Production Flagships)
16. **Site 16 (Resn Corn Revolution)**: Resn playful physics, interactive audio, custom shaders.
17. **Site 17 (Sondaven)**: Drag-along-path SVG season slider, Euclidean map pins, 180° card flip.
18. **Site 18 (The Line Studio)**: 3D rotated card transitions, electric red multiply blend overlays.
19. **Site 19 (The Shift Tokyo)**: Japanese precision tech, monospace grid, interactive particle canvas.
20. **Site 20 (Tresmares Capital)**: Subtle glassmorphism, interactive financial charts.

---

### Batch 5: Sites 21–23 (Shader & Motion Powerhouses)
21. **Site 21 (Trionn Agency)**: 16 GLSL fragment shaders, dual-ring cursor, Web Audio ticker loop.
22. **Site 22 (Truck N Roll)**: Industrial brutalism, bold machinery soundscapes, heavy typography.
23. **Site 23 (Unleashing Best)**: Fluid typography clamps, staggered word reveals, high-contrast layouts.

# Awwwards Research Vault & 23-Site Ingestion Engine: Master Brainstorm & Architecture Specification
Date: 2026-08-31 · Status: [FINALIZED & APPROVED] · Goal: Architect the automated ingestion, distillation, and component-synthesis pipeline for 23+1 Awwwards sites into the definitive Design-OS Flagship Web Engine.

---

## 1. Executive Summary & Source Asset Registry

- **Source Asset Vaults**:
  1. `D:\AI-OS\references\awwwards-research-vault` (7 core sub-vaults, 25 sub-categories, 200+ docs across GSAP, Obys grids, WebGL, judging rubrics, and UX psychology).
  2. `D:\AI-OS\premium-frontend-experience-system\vault-references` (24 Granularity Master docs + 83KB master `INDEX.md`).
  3. `D:\AI-OS\premium-frontend-experience-system\reference-inputs\sites` (23 complete site folders with full scraped mirrors, TSX extracts, GLSL shaders, 5-viewport media, wireframes).
  4. **FOUNDATION SITE 00 (PRIORITY)**: `https://typographyprinciples.obys.agency/` (Full extraction of all 7 sections, raw code, assets, and React 19 typography components).

- **Destination Architecture in Design-OS**:
  - `references/vault/site-00-obys-typography/` (Foundation Site 00: Obys Typography Principles).
  - `references/vault/site-01..23/` (Standardized site deconstructions organized into 5 curated batches).
  - `components/` (Flat, un-nested, strictly typed React 19 + Tailwind v4 components).
  - `docs/workflows/AWWWARDS_5_STAGE_ENGINE.md` (Lean 5-Stage Awwwards Flagship Lifecycle).
  - `scripts/extract_obys_typography.py` (Dedicated Foundation Site 00 scraper & asset extractor).
  - `scripts/ingest_vault.py` (Master batch ingestion & distillation CLI).

---

## 2. Master Key Decisions Log (All 10 Questions Approved)

1. **Ingestion Model (Hybrid Script + 5-by-5 Curation)**:
   - Automated script indexes bulk research docs and deconstructions.
   - Components are dissected, de-nested, and standardized into `components/` in 5-site batches with deep sandbox testing.
2. **5-Stage Awwwards Engine (Replacing 12-Stage Monolith)**:
   - Stage 1: Creative Inception, Archetype Lock & OKLCH Theme Math.
   - Stage 2: Poster Typography, Obys 140px Grid & Spatial Rhythm.
   - Stage 3: Kinetic Motion, SVG Physics, Lenis & Web Audio.
   - Stage 4: WebGL GLSL Shaders & Surface Materiality.
   - Stage 5: Playwright 5-Viewport QA, Anti-Slop Audit & Production Polish.
3. **Priority Foundation Site 00 (Obys Typography Principles)**:
   - Target: `https://typographyprinciples.obys.agency/`
   - Ingested FIRST before Batch 1 to establish the canonical typography rules, fluid clamps, and font pairing presets.
4. **Kinetic SVG & GSAP/Lenis Motion Suite**:
   - Unified SSR-safe `useAwwwardsMotion()` hook binding Lenis and GSAP ScrollTrigger to a single ticker.
   - Reusable SVG motion primitives (stroke drawing, path morphing, `getPointAtLength` curved sliders).
5. **Full-Spectrum Obys Extraction**:
   - Mirrors, raw HTML/JS/CSS, images, fonts, deep analysis, and React 19 interactive components extracted into `references/vault/site-00-obys-typography/`.
6. **Transition Engine (GSAP + View Transitions + Matter.js)**:
   - Pinned curtain wipes, View Transitions API, persistent WebGL canvas, and opt-in Matter.js 2D physics in `components/transitions/`.
7. **Photo Layout & Art Direction Matrix**:
   - Van de Graaf power line layouts, asymmetrical collages, $16:9 / 4:5 / 1:1$ aspect ratio grammar, differential parallax speeds, and Openverse CC0 photo integration in `components/editorial/`.
8. **Anti-Slop Archetype Rotation & Style-Locks**:
   - 7 rotated macrostructures recorded in `.tastemaker/log.json` with `.tastemaker/style-lock.md` persistent contracts.
9. **Autonomous Scaffolding Workflow**:
   - Support both CLI commands (`python scripts/design_os.py make`) and natural language chat prompts to scaffold projects directly into `projects/Websites/` and `projects/Products/`.
10. **Mandatory Quality Gates**:
    - Automated Playwright 5-viewport screenshot runner (1920, 1440, 1024, 768, 375px), AST anti-slop scanner, and WCAG AAA contrast verification before completion.

---

## 3. Complete Q&A Log & Decision Summary

- **Q1 (Ingestion Strategy)**: Option A + C Mixed (Hybrid 5-by-5 batch runner + component de-nesting).
- **Q2 (Workflow Model)**: Option A + C Combined (5-Stage Engine + Deep Sprint on Batch 1).
- **Q3 (Typography Engine)**: Option A + Priority extraction of `typographyprinciples.obys.agency`.
- **Q4 (Motion & SVG Pipeline)**: Option A (Unified `useAwwwardsMotion()` hook + SVG path physics).
- **Q5 (Obys Ingestion Scope)**: Option A (Full raw code, assets, mirrors, and React 19 components).
- **Q6 (Transition System)**: Option A + C Combined (GSAP curtain wipes, View Transitions, persistent canvas, and Matter.js physics).
- **Q7 (Photo Layout Matrix)**: Option A (Curated Editorial Layout Engine + Openverse CC0 integration).
- **Q8 (Archetype Rotation)**: Option A (Intelligent mode-aware rotation via `.tastemaker/log.json` + style-locks).
- **Q9 (Project Scaffolding)**: Option A (Python CLI + conversational chat trigger routing to `projects/Websites/`).
- **Q10 (Quality Gates)**: Option A (Mandatory Playwright 5-viewport visual audit + AST anti-slop verification).

---

## 4. 5-Batch Site Ingestion Roadmap

| Batch | Sites Included | Core Design Archetype & Focus |
| :--- | :--- | :--- |
| **Site 00 (Priority)** | **Obys Typography Principles** | Canonical Typography Rules, Fluid Clamps, Interactive Font Testers, Spacing & Contrast |
| **Batch 1 (Sites 01–05)** | Active Theory, Ashley Brooke, Champions 4 Good, Detroit Paris, Follow Art | Cyber Obsidian HUD, Editorial Luxury, Magazine Layouts, Custom Magnetic Cursors |
| **Batch 2 (Sites 06–10)** | Gehry Getty, Good Fella, Grids Obys Agency, Jasmine Gunarto, Locomotive Agency | Obys 140px Grid, Liquid Typography, Smooth Locomotive/Lenis, Barba Page Morphs |
| **Batch 3 (Sites 11–15)** | Made In Evolve, Merci Michel, Off Menu Design, Oryzo AI, Outfit Hello Hello | 3D Gaussian Splats, Web Audio Synthesizers, Experimental SVG Menus, WebGL Shaders |
| **Batch 4 (Sites 16–20)** | Resn Corn Revolution, Sondaven, The Line Studio, The Shift Tokyo, Tresmares Capital | Drag-along-path SVG Sliders, 3D Rotated Cards, Japanese Precision Grid, Luxury Resorts |
| **Batch 5 (Sites 21–23)** | Trionn Agency, Truck N Roll, Unleashing Best | 16 GLSL Shaders, Dual-Ring Cursor, Industrial Brutalism, Fluid Staggered Reveals |

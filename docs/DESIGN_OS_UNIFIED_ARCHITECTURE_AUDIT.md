# Antigravity Design-OS: Master System Audit & Unified Architecture Blueprint

> **System Identifier**: `DESIGN-OS-UNIFIED-ARCH-AUDIT-v1.0`  
> **Status**: `[PROPOSED]` / `[UNDER REVIEW]`  
> **Target LLM Runtime**: Gemini 3.7 Flash (High) / Claude 3.7 Sonnet  
> **Execution Standard**: Strict Zero-Emoji, Deterministic Math Flooring, Anti-Slop AST Gate  

---

## Executive Summary

Design-OS contains an exceptionally rich collection of design engineering capabilities: **134 local skills**, **169 global skills**, deterministic Python math utilities (OKLCH contrast matrices, Openverse photo scrapers, Iconify vector resolvers), AST-level slop detectors, 24 curated Awwwards vault reference repositories, and multi-viewport visual regression suites.

However, the ecosystem currently suffers from **tri-engine architectural fragmentation**:
1. **The 12-Stage / 48-Phase Master Workflow Engine** (`docs/workflows/MASTER_WORKFLOW_ENGINE.md`): An exhaustive enterprise lifecycle.
2. **The 24-Chat / 7-Wave Blast-Radius Engine** (`flagship-project-init`): A session-isolated execution model with `RESUME.md` checkpointing.
3. **The Single-Pass Dial/Recipe Engines** (`tastemaker`, `web-design-engineer`, `impeccable`, `frontend-design`, `ui-ux-pro-max`): Fast, single-turn heuristic generators.

This document delivers a complete, forensic 16-section audit (**Sections A through P**) and proposes a unified, 4-layer modular architecture that consolidates redundant skills, standardizes deterministic token math, coordinates kinetic and WebGL shaders, and introduces automated multi-viewport visual regression loops.

---

## Table of Contents

- [Section A: Existing System Map](#section-a-existing-system-map)
- [Section B: Skill Inventory & Taxonomy](#section-b-skill-inventory--taxonomy)
- [Section C: System Strength Analysis](#section-c-system-strength-analysis)
- [Section D: System Weakness & Friction Analysis](#section-d-system-weakness--friction-analysis)
- [Section E: Architectural Conflict Matrix](#section-e-architectural-conflict-matrix)
- [Section F: Redundancy & Overlap Matrix](#section-f-redundancy--overlap-matrix)
- [Section G: Capability Gap Analysis](#section-g-capability-gap-analysis)
- [Section H: Unified System Architecture Proposal](#section-h-unified-system-architecture-proposal)
- [Section I: Unified Skill Orchestration Model](#section-i-unified-skill-orchestration-model)
- [Section J: Research & Reference Ingestion Engine](#section-j-research--reference-ingestion-engine)
- [Section K: Anti-AI-Slop & Taste Enforcement Engine](#section-k-anti-ai-slop--taste-enforcement-engine)
- [Section L: Visual QA, Edge-Case & Verification Pipeline](#section-l-visual-qa-edge-case--verification-pipeline)
- [Section M: MCP & Tooling Integration Strategy](#section-m-mcp--tooling-integration-strategy)
- [Section N: Migration & Consolidation Roadmap](#section-n-migration--consolidation-roadmap)
- [Section O: Proposed Directory & File Structure](#section-o-proposed-directory--file-structure)
- [Section P: Open Questions, Trade-Offs & Council Roast](#section-p-open-questions-trade-offs--council-roast)

---

## Section A: Existing System Map

### 1. Architectural Tiers

```
+-------------------------------------------------------------------------------+
| Tier 1: System Rules & Safety Gates                                           |
|   - GEMINI.md (Root System Contract)                                          |
|   - .agents/rules/zero-emojis-and-vibesec.md                                  |
|   - .agents/rules/projects-location.md (Mandatory projects/ routing)          |
|   - vibesec (5-gate security protocol: CSP, XSS, SVG sanitize, secrets)       |
+-------------------------------------------------------------------------------+
| Tier 2: Orchestration & Workflow Engines                                      |
|   - MASTER_WORKFLOW_ENGINE.md (12 Stages / 48 Phases)                         |
|   - flagship-project-init (24-Chat / 7-Wave Blast Radius Engine)               |
|   - design-os (10-Stage CLI & Python harness: scripts/design_os.py)           |
|   - Tastemaker / Web-Design-Engineer / Impeccable (Direct Dial Engines)       |
+-------------------------------------------------------------------------------+
| Tier 3: Deterministic Math Core & Anti-Slop Detectors                         |
|   - scripts/design_os.py (Unified CLI: init, resume, stage, verify, palette)  |
|   - scripts/tastemaker/generate_palette.py (OKLCH math & WCAG AA matrix)      |
|   - scripts/tastemaker/check_contrast.py (Mathematical contrast verification) |
|   - scripts/tastemaker/anti_slop_scan.py (AST slop pattern detector)          |
|   - scripts/tastemaker/fetch_photos.py (Openverse CC0 keyless photo pipeline) |
|   - scripts/tastemaker/fetch_icons.py (Iconify Solar Duotone resolver)        |
+-------------------------------------------------------------------------------+
| Tier 4: Taste & Design Direction Engines                                      |
|   - build-awwwards-quality-sites (High-concept visual leadership)              |
|   - tastemaker (7 Macrostructures, Style-Lock Contract, Tastemaker Profile)   |
|   - web-design-engineer (5 Dials, 25 Style Recipes, Archetype Positioning)    |
|   - Global: frontend-design, ui-ux-pro-max, taste, impeccable                 |
+-------------------------------------------------------------------------------+
| Tier 5: Kinetic Physics, Motion Choreography & 3D Shaders                     |
|   - cinematic-gsap-lenis-motion-system (GSAP ScrollTrigger + Lenis)           |
|   - emil-design-eng (Kowalski micro-interactions, WAAPI, spring curves)      |
|   - threejs-shaders, threejs-postprocessing, threejs-interaction              |
|   - liquid-metal-border (Metal-Fx chromatic WebGL borders)                    |
|   - shader-cursor-effects, dither-background, cobejs (Globe), matterjs (2D)   |
|   - sound-design-ux (Zero-dependency Web Audio API micro-haptics)             |
+-------------------------------------------------------------------------------+
| Tier 6: Domain Design & Component Crafting (134 Local Skills)                 |
|   - better-accessibility, better-colors, better-layout, better-typography     |
|   - better-ui, better-writing, better-interface (Cross-discipline reviewer)  |
|   - Style archetypes: editorial-tech, clean-minimal-beige-light-mode, etc.    |
+-------------------------------------------------------------------------------+
| Tier 7: Quality Hardening, Stress Testing & Visual QA                         |
|   - visual-regression-gate (5-viewport Playwright automated screenshot gate)  |
|   - break (Extreme container/string edge case stress-testing)                 |
|   - variant (3-candidate in-page interactive switcher)                        |
|   - interface-review, accesslint-a11y                                         |
+-------------------------------------------------------------------------------+
| Tier 8: Context Foundation & Handoff Infrastructure                          |
|   - 8-file Context Foundation (.tastemaker/style-lock.md, context/1..8)       |
|   - reference/MANIFEST.md (Vault deconstruction & Keep/Discard log)           |
|   - handoff-spec, component-spec, documentation-template                      |
+-------------------------------------------------------------------------------+
```

### 2. Filesystem Topography

```
d:/Design-OS/
├── .agents/
│   ├── rules/
│   │   ├── projects-location.md
│   │   └── zero-emojis-and-vibesec.md
│   └── skills/                         # 134 local skills
├── .tastemaker/
│   ├── decisions.log
│   ├── log.json
│   └── style-lock.md                   # Single-anchor style lock contract
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DEMOS_AND_TOOLING.md
│   ├── GEMINI_37_FLASH_PROMPTING.md
│   ├── INGESTION_GUIDE.md
│   ├── SKILLS_INDEX.md
│   ├── research/tastemaker/
│   ├── showcase/tastemaker/
│   └── workflows/
│       └── MASTER_WORKFLOW_ENGINE.md   # 12-Stage / 48-Phase specification
├── projects/                           # Mandatory destination for all builds
│   ├── Websites/
│   ├── Products/
│   ├── Sandbox/
│   ├── For design/
│   ├── For AIOS/
│   ├── Learning/
│   ├── Zorixel brand/
│   └── My advisors/
├── references/
│   ├── style-recipes/                  # 25 style recipes
│   └── vault/                          # 24 Awwwards curated reference repos
├── scripts/
│   ├── design_os.py                    # Master Python CLI
│   ├── audit-design-os.mjs
│   ├── serve-demos.mjs
│   ├── sanitize_svg.py
│   └── tastemaker/
│       ├── anti_slop_scan.py
│       ├── check_contrast.py
│       ├── fetch_icons.py
│       ├── fetch_photos.py
│       └── generate_palette.py
├── templates/                          # Static demo templates
├── GEMINI.md                           # Master repo guidelines & invariants
├── package.json                        # Root dependencies & build scripts
└── skills-lock.json                    # Synchronized skill registry
```

---

## Section B: Skill Inventory & Taxonomy

The workspace contains **134 local skills** and access to **169 global skills**. Below is the categorized inventory mapping domain, inputs, outputs, capabilities, and dependencies.

| Category | Key Skills | Input Context | Primary Output | Deterministic Tools / Dependencies |
| :--- | :--- | :--- | :--- | :--- |
| **Orchestration & Workflow** | `design-os`, `flagship-project-init`, `MASTER_WORKFLOW_ENGINE`, `gsd-*` | Project brief, mode flag (`--mode awwwards\|product\|component`) | Phase plans, `RESUME.md`, stage gates | `scripts/design_os.py`, `phase_gate.py` |
| **Discovery & UX Strategy** | `design-brief`, `jobs-to-be-done`, `north-star-vision`, `competitive-analysis`, `service-blueprint` | Raw user problem, target audience | Brief spec, value propositions, user journeys | Socratic questioning, `/grill-me`, `/roast` |
| **Visual Leadership & Taste** | `build-awwwards-quality-sites`, `tastemaker`, `web-design-engineer`, `frontend-design`, `ui-ux-pro-max`, `taste` | Brand mood, industry lane, dial values | Style-lock contract, OKLCH palette, spatial rhythm | `generate_palette.py`, `check_contrast.py`, `anti_slop_scan.py` |
| **Foundational Token Craft** | `better-colors`, `better-typography`, `better-layout`, `better-ui`, `better-writing`, `better-accessibility` | Design system tokens, layout wireframes | Token JSON, font-pairing matrices, WCAG audit | `culori`, `scripts/design_os.py palette`, `accesslint-a11y` |
| **Motion & Kinetic Physics** | `cinematic-gsap-lenis-motion-system`, `emil-design-eng`, `gsap-react`, `gsap-scrolltrigger`, `sound-design-ux` | Component AST, viewport scroll state | GSAP timelines, Lenis sync RAF, Web Audio chimes | `gsap`, `lenis`, Web Audio API |
| **3D, Shaders & Canvas FX** | `threejs-shaders`, `threejs-postprocessing`, `threejs-interaction`, `liquid-metal-border`, `dither-background`, `cobejs`, `matterjs` | Canvas container ref, shader uniforms | WebGL ShaderMaterial, canvas particle loops | `three`, `metal-fx`, `cobe`, `matter-js` |
| **Style Archetypes** | `editorial-tech`, `clean-minimal-beige-light-mode`, `high-contrast-skeuomorphic-clean`, `glass-dark-ui`, `mesh-gradient-dark-blue-clean` | Target aesthetic brief | Complete CSS/Tailwind utility theme & surface styles | CSS vars, gradient borders, radial meshes |
| **Quality, Stress & Visual QA** | `better-interface`, `visual-regression-gate`, `break`, `variant`, `interface-review`, `vibesec` | Rendered localhost URL, component code | 5-viewport screenshot diffs, edge-case breakdown, ranked verdict | `playwright`, `scripts/design_os.py verify`, `scripts/sanitize_svg.py` |
| **Handoff & Governance** | `component-spec`, `handoff-spec`, `design-impact-reporting`, `documentation-template` | Final codebase, token definitions | Developer handoff package, Storybook docs | Markdown specs, JSON tokens |

---

## Section C: System Strength Analysis

Design-OS possesses several state-of-the-art capabilities that place it far ahead of typical AI coding agents:

1. **Deterministic OKLCH Math & Contrast Flooring**:
   - `scripts/tastemaker/generate_palette.py` and `scripts/design_os.py` calculate perceptual lightness and chroma in OKLCH color space.
   - Contrast matrices test all text and surface combinations mathematically against WCAG 2.2 AA (4.5:1 text, 3:1 UI) before any CSS is emitted.
2. **Obys 140px Spatial Rhythm & Macrostructure Rotation**:
   - `tastemaker` actively prevents monoculture through 7 distinct macrostructural skeletons (`split-editorial-monolith`, `asymmetric-canvas-rail`, `staggered-narrative-flow`, `brutalist-grid-ledger`, `horizontal-filmstrip-strip`, `instrument-cockpit-dense`, `typographic-poster-scroll`).
   - Obys-inspired 140px vertical section spacing creates genuine breathing room and editorial weight.
3. **Synchronized Single-Ticker GSAP & Lenis Smooth Scrolling**:
   - `cinematic-gsap-lenis-motion-system` correctly couples Lenis RAF directly into the GSAP ticker (`gsap.ticker.add((time) => lenis.raf(time * 1000))`), eliminating scroll jitter and RAF desync.
   - Text splitting uses semantic masked spans (`aria-hidden="true"` on split fragments, `aria-label` on container) preserving DOM accessibility.
4. **Emil Kowalski Micro-Interaction & WAAPI Physics**:
   - Encodes real design engineering: non-linear custom cubic-beziers (`cubic-bezier(0.23, 1, 0.32, 1)`), zero animation on frequent keyboard actions, `scale(0.97)` on `:active`, and origin-aware popover scales.
5. **Deterministic Zero-Placeholder Asset Scraping**:
   - Openverse CC0 keyless photo pipeline (`fetch_photos.py`) fetches real high-resolution imagery.
   - Iconify Solar Duotone resolver (`fetch_icons.py`) pulls cohesive SVG icon vectors without broken placeholder links.
6. **VibeSec Cybersecurity & SVG Sanitization Protocol**:
   - 5-gate defense-in-depth security protocol preventing DOM XSS, enforcing strict CSP, sanitizing inline SVGs (`scripts/sanitize_svg.py`), and ensuring zero secret leaks.
7. **Automated 5-Viewport Playwright Screenshot Gate**:
   - `scripts/design_os.py verify` tests across `1920x1080`, `1440x900`, `768x1024`, `375x812`, and `667x375`, generating real visual receipts rather than relying on LLM hallucination.

---

## Section D: System Weakness & Friction Analysis

Despite its strengths, the system exhibits critical bottlenecks in practical execution:

1. **Context Window Saturation from Multi-Stage Monoliths**:
   - The 12-Stage / 48-Phase pipeline (`MASTER_WORKFLOW_ENGINE.md`) is so exhaustive that executing it in a single chat session exhausts context tokens before implementation begins.
2. **Conflicting Orchestration Entry Points**:
   - A user prompt can be intercepted by `design-os`, `flagship-project-init`, `tastemaker`, `web-design-engineer`, `frontend-design`, or `impeccable`, each proposing a different workflow and format.
3. **Overlapping Style Recipe Databases**:
   - `ui-ux-pro-max` contains a 50+ style SQLite/CSV database.
   - `web-design-engineer` contains 25 Markdown style recipes in `references/style-recipes/`.
   - `tastemaker` contains 7 macrostructures.
   - These catalogs do not share a single schema or token output format.
4. **Inconsistent Anti-Slop Scanners**:
   - `anti_slop_scan.py` scans Python AST / regex.
   - `impeccable` uses Node.js scripts (`detect.mjs`).
   - Global rules enforce heuristic bans in prompt instructions. There is no unified pre-commit or post-generation linter.
5. **Silent React DOM Reconciliation Hazards**:
   - In React/Next.js builds, naive text splitting (`textContent = ''`) breaks React hydration and DOM reconciliation.
   - Pinned GSAP ScrollTrigger sections trigger unmounting errors (`removeChild on Node`) when pins are applied to container root instead of inner ref wrappers.

---

## Section E: Architectural Conflict Matrix

| Conflict Domain | System A | System B | Conflict Nature | Resolution in Unified System |
| :--- | :--- | :--- | :--- | :--- |
| **Workflow Scope** | 12-Stage / 48-Phase (`MASTER_WORKFLOW_ENGINE`) | 24-Chat / 7-Wave (`flagship-project-init`) | 12-stage is a continuous waterfall; 24-chat is a session-gated blast-radius model. | Unify into a 4-Stage Adaptive Engine with session checkpoints (`RESUME.md`). |
| **Design Direction** | `tastemaker` (7 Macrostructures, OKLCH Python math) | `web-design-engineer` (5 Dials, 25 Markdown recipes) | Tastemaker is algorithmic & structural; Web-Design-Engineer is prompt/recipe-based. | Merge 5 Dials into Tastemaker Style Lock; compile recipes into Tastemaker archetypes. |
| **Design Search** | `ui-ux-pro-max` (SQLite/CSV search engine) | `tastemaker` (Python contrast/palette engine) | Redundant palette and style lookup paths. | Ingest `ui-ux-pro-max` data into Python core; retire separate SQLite search script. |
| **Motion Stack** | `cinematic-gsap-lenis-motion-system` (GSAP + Lenis) | `emil-design-eng` / `better-ui` (Framer Motion / WAAPI) | Multiple motion libraries imported simultaneously causing bundle bloat and dropped frames. | Enforce **One Motion Engine Per Project**: GSAP+Lenis for editorial/cinematic flagships; WAAPI/CSS for ultra-fast products. |
| **Stack Scaffold** | Next.js App Router (SSR + Client components) | Vite React / Vanilla HTML | Discrepancy in dependency management and Vite NTFS junction rules. | Standardize on Vite + React 19 as the primary interactive sandbox; Next.js 15 for full-stack apps. |

---

## Section F: Redundancy & Overlap Matrix

| Redundant Cluster | Participating Skills | Recommended Action | Consolidation Rationale |
| :--- | :--- | :--- | :--- |
| **Design Taste & Archetypes** | `tastemaker`, `web-design-engineer`, `frontend-design`, `ui-ux-pro-max`, `taste` | **MERGE into `tastemaker`** | Unify 5 dials, 7 macrostructures, and 25 style recipes under one deterministic Python/AST core. |
| **Interface Quality Review** | `better-interface`, `interface-review`, `accesslint-a11y`, `vercel-web-design-guidelines` | **WRAP into `better-interface`** | Keep `better-interface` as the sole master review coordinator routing to accessibility, typography, layout, writing, and color. |
| **Motion Guidelines** | `cinematic-gsap-lenis-motion-system`, `gsap-animation`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline` | **MERGE into `cinematic-gsap-lenis-motion-system`** | GSAP skills share identical ScrollTrigger/Lenis rules. Provide one authoritative skill with React SSR lifecycle examples. |
| **Shaders & 3D Visuals** | `threejs-shaders`, `threejs-postprocessing`, `threejs-interaction`, `threejs-webgl` | **MERGE into `threejs-shaders`** | Consolidate Three.js GLSL shaders, composer passes, and pointer interaction into one comprehensive reference. |
| **Static Style Presets** | `clean-minimal-beige-light-mode`, `high-contrast-skeuomorphic-clean`, `editorial-tech`, `mesh-gradient-dark-blue-clean`, `glass-dark-ui` | **PRESERVE as Modular Presets** | Keep as loadable archetype modules referenced by the unified `tastemaker` engine. |

---

## Section G: Capability Gap Analysis

The audit identifies 4 key functional gaps that must be resolved:

1. **Multi-Viewport Visual Critique Loop**:
   - While `scripts/design_os.py verify` takes Playwright screenshots, there is no automated step that feeds the resulting images into a structured visual critique prompt to evaluate optical balance, hierarchy, and clipping.
2. **Dynamic Macrostructure Inversion & Section Shuffle**:
   - Macrostructure rotation is currently chosen once at project init. The system lacks a mechanism to dynamically reshuffle or invert section rhythms during intermediate iterations.
3. **Automated Cross-Viewport Touch & Gesture Verification**:
   - `emil-design-eng` mandates `@media (hover: hover)` and drag damping, but Playwright verification currently only captures static viewport screenshots rather than testing touch scroll, drag-to-dismiss, and hover bounds.
4. **Deterministic Token-to-CSS/Tailwind Exporter**:
   - Palette generator outputs JSON, but creating corresponding `@theme` CSS or Tailwind v4 configurations requires manual copy-pasting.

---

## Section H: Unified System Architecture Proposal

The proposed **Unified Design Engineering Engine** organizes all capabilities into **4 Modular Layers**:

```
+===============================================================================+
|                   LAYER 1: MASTER ORCHESTRATOR & DISPATCHER                   |
|                   (Unified Entry Point: /design-os or design-os)               |
|                                                                               |
|   [Track Selector]                                                            |
|   ├── --mode awwwards    (Lenis, GSAP, WebGL Shaders, 140px Obys Grid)         |
|   ├── --mode product     (Design System, High Density, WAAPI Snappy Motion)   |
|   └── --mode component   (Micro-Sprint, Variant Switcher, Break Stress Test)  |
+===============================================================================+
                                       │
                                       ▼
+===============================================================================+
|                   LAYER 2: DESIGN INTELLIGENCE & TASTE CORE                   |
|                                                                               |
|   [Tastemaker Engine] ────────── [Deterministic Python Math]                  |
|   ├── 5 Dials Calibration        ├── generate_palette.py (OKLCH Color Math)   |
|   ├── 7 Macrostructures          ├── check_contrast.py (WCAG AA Matrix)       |
|   ├── 25 Style Recipes           ├── fetch_photos.py (Openverse CC0 Images)   |
|   └── Style-Lock Contract        └── fetch_icons.py (Iconify Solar Duotone)   |
+===============================================================================+
                                       │
                                       ▼
+===============================================================================+
|                   LAYER 3: ENGINEERING, KINETICS & SURFACES                   |
|                                                                               |
|   [Surface & Typography]         [Motion & Kinetics]      [3D & Shaders]       |
|   ├── better-typography          ├── cinematic-gsap-lenis ├── threejs-shaders  |
|   ├── better-layout              ├── emil-design-eng      ├── liquid-metal     |
|   ├── css-border-gradient        └── sound-design-ux      └── dither-bg        |
|   └── Style Archetypes                                                        |
+===============================================================================+
                                       │
                                       ▼
+===============================================================================+
|                   LAYER 4: QUALITY GATES & VERIFICATION MATRIX                |
|                                                                               |
|   [Visual QA Gate]       [Edge-Case Stress]   [Security Gate]  [Code Standards]|
|   ├── Playwright 5-VP    ├── break (320px)    ├── vibesec      ├── anti_slop_  |
|   ├── better-interface   ├── variant (3-way)  └── sanitize_    │   scan.py     |
|   └── Ranked Verdict     └── RTL / I18N           svg.py       └── DOM AST Lints|
+===============================================================================+
```

---

## Section I: Unified Skill Orchestration Model

### 1. The 4-Stage Adaptive Lifecycle

To resolve context saturation while maintaining strict quality gates, the 12-stage engine is refactored into a **4-Stage Sequential Execution Pipeline**:

```
[Stage 1: Discovery & Creative Inception]
  ├── Socratic Inquiry & Audience Clarification (/grill-me)
  ├── 5 Dials Calibration & Style-Lock Contract Generation
  └── Macrostructure Selection & Section Rhythm Wireframe
                                │
                                ▼
[Stage 2: Token Generation & Aesthetic Surface Craft]
  ├── OKLCH Color Palette & Contrast Matrix Calculation (Python)
  ├── Typography Scale & Font Pairing Matrix
  └── Surface Materials, Gradient Borders & Atmospheric Canvas
                                │
                                ▼
[Stage 3: Component Engineering & Motion Choreography]
  ├── Semantic HTML5 & SSR-Safe React Architecture
  ├── GSAP ScrollTrigger + Lenis Smooth Scroll Integration
  ├── Emil Kowalski Micro-Interactions & WAAPI Physics
  └── Zero-Placeholder Asset Scraping (Openverse + Iconify)
                                │
                                ▼
[Stage 4: Quality Hardening, Stress Testing & Visual QA]
  ├── AST Anti-Slop Scan (Python AST Linter)
  ├── 5-Viewport Playwright Screenshot Gate (Receipts in .screenshots/)
  ├── Container & String Overflow Stress Testing (`break`)
  ├── VibeSec 5-Gate Security & CSP Audit
  └── Master Verdict Generation (`better-interface`)
```

### 2. Multi-Session Continuity & State Handoff

Every session persists state through the **8-File Context Foundation**:
1. `.tastemaker/style-lock.md`: Locked OKLCH tokens, type scales, and macrostructure skeleton.
2. `.tastemaker/decisions.log`: Timestamped Keep-vs-Discard architectural decisions.
3. `context/1-brand-and-vision.md`: Purpose, creative pillars, and target audience.
4. `context/2-design-tokens.json`: Raw machine-readable OKLCH and spatial tokens.
5. `context/3-ui-manifest.md`: Screen inventory and state transition matrix.
6. `context/4-motion-choreography.md`: GSAP timelines and cubic-bezier parameters.
7. `context/5-code-standards.md`: AST rules, Vite NTFS junction rules, and VibeSec rules.
8. `context/6-progress-tracker.md`: Active stage tracker and DoD sign-off checkboxes.

Invoking `/design-os resume` or `python scripts/design_os.py resume` restores 100% project context instantly.

---

## Section J: Research & Reference Ingestion Engine

### 1. Curated Awwwards Vault Deconstruction

Design-OS includes **24 curated award-winning repositories** in `references/vault/`. The reference ingestion engine uses a strict **Extract Principles, Never Clone** protocol:

```
[Reference Repo] ──> [Deconstruction AST] ──> [Keep-vs-Discard Matrix] ──> [Token Extraction]
```

### 2. Deconstruction Schema

For every reference ingested, the engine generates an entry in `reference/MANIFEST.md`:
- **Spatial Rhythm**: Measure grid column count, gutter widths, and section padding (e.g. Obys 140px).
- **Typography Scale**: Extract modular ratio (e.g. 1.25 Major Third or 1.333 Perfect Fourth), line-height clamping, and letter-spacing tracking.
- **Motion Parameters**: Extract cubic-bezier curves, stagger delays (30–80ms), and ScrollTrigger scrub multipliers (0.8–1.4s).
- **Surface Treatment**: Deconstruct gradient stops, border highlights (1px white 0.08 opacity), and shadow layer stacks.
- **Explicit Discard**: Document what was rejected (e.g. sluggish ease-in curves, inaccessible contrast pairs, gratuitous particle clutter).

---

## Section K: Anti-AI-Slop & Taste Enforcement Engine

### 1. The 6-Axis Anti-Slop AST Gate

Every line of generated CSS, HTML, and TypeScript must pass the deterministic AST anti-slop linter (`scripts/tastemaker/anti_slop_scan.py`):

| Axis | Prohibited Slop Pattern | Enforced High-Craft Standard |
| :--- | :--- | :--- |
| **Color & Contrast** | Arbitrary hex colors, muddy gradients, neon glows without contrast flooring. | Perceptually uniform OKLCH palettes, WCAG 2.2 AA verified (4.5:1 text, 3:1 UI). |
| **Macrostructure** | Generic "Hero -> 3 Feature Cards -> Testimonial Carousel -> Pricing -> CTA". | 7 rotated macrostructures (e.g. Asymmetric Canvas Rail, Brutalist Ledger, Filmstrip). |
| **Typography** | Browser default font stacks, loose leading on display titles, untracked uppercase labels. | Curated editorial font pairings, tight display leading (`line-height: 0.95-1.1`), tracked mono labels (`letter-spacing: 0.05em`). |
| **Spacing & Rhythm** | Arbitrary Tailwind margins (`mt-7`, `p-13`), cramped 40px section dividers. | Rigid 8pt spatial grid, Obys 140px vertical section rhythm, optical alignment. |
| **Motion Physics** | `transition: all 300ms`, `ease-in` on UI elements, animation from `scale(0)`. | Targeted property transitions (`transform 200ms ease-out`), start from `scale(0.95)`, custom cubic-beziers (`power3.out`). |
| **Surface Craft** | Flat generic cards, full-opacity neon borders, thick opaque glassmorphism. | Subtle gradient-border shells, concentric border radii, layered depth shadows, tactile inset highlights. |

---

## Section L: Visual QA, Edge-Case & Verification Pipeline

### 1. The 3-Tier Quality Gate

```
[Tier 1: Code-Level Linting] ──> [Tier 2: Stress-Testing] ──> [Tier 3: Multi-Viewport Pixel Gate]
  - Python AST Anti-Slop           - `break` (320px viewports)      - Playwright 5 Viewports
  - VibeSec Security Scan          - 500-char string overflow       - Optical alignment check
  - TypeScript Compiler            - Missing data / Empty states    - Visual diffing receipts
```

### 2. Multi-Viewport Specifications

Playwright automatically renders and captures screenshots at:
1. **Desktop Large**: `1920x1080` (Full layout canvas, macrostructure alignment).
2. **Laptop Standard**: `1440x900` (Baseline responsive scaling).
3. **Tablet Portrait**: `768x1024` (Multi-column to single-column reflow).
4. **Mobile Portrait**: `375x812` (Touch ergonomics, 320px container edge tolerance).
5. **Mobile Landscape**: `667x375` (Vertical height truncation & sticky navigation behavior).

---

## Section M: MCP & Tooling Integration Strategy

The unified system coordinates local tools and MCP servers into a high-performance pipeline:

```
+-------------------------------------------------------------------------------+
| MCP / Tool Integration Matrix                                                 |
|                                                                               |
| 1. Playwright / Chrome DevTools:                                              |
|    - Automated multi-viewport screenshot captures                             |
|    - Console log inspection & runtime error tracking                          |
|    - Layout reflow & animation frame rate measurement                         |
|                                                                               |
| 2. 21st / Magic MCP:                                                          |
|    - High-end component inspiration & modern React UI block discovery         |
|                                                                               |
| 3. Context7 MCP:                                                              |
|    - Instant query of up-to-date documentation (GSAP, Lenis, Tailwind v4)     |
|                                                                               |
| 4. Figma MCP:                                                                 |
|    - Direct token ingestion & vector asset extraction                         |
|                                                                               |
| 5. Deterministic Python Subprocess Core:                                      |
|    - OKLCH color math (`culori`)                                              |
|    - Openverse CC0 photo scraper (`fetch_photos.py`)                         |
|    - Iconify SVG resolver (`fetch_icons.py`)                                  |
|    - AST slop pattern detector (`anti_slop_scan.py`)                          |
+-------------------------------------------------------------------------------+
```

---

## Section N: Migration & Consolidation Roadmap

### Phase 1: Core Consolidation (Immediate)
- **Merge** `taste`, `web-design-engineer`, `frontend-design`, and `ui-ux-pro-max` into the authoritative `tastemaker` skill.
- **Consolidate** all GSAP motion skills into `cinematic-gsap-lenis-motion-system`.
- **Consolidate** Three.js skills into `threejs-shaders`.
- **Standardize** `scripts/design_os.py` as the single executable CLI entry point.

### Phase 2: Workflow Refactoring
- **Update** `MASTER_WORKFLOW_ENGINE.md` to index the consolidated 4-stage lifecycle while maintaining reference links to deep domain skills.
- **Implement** the multi-viewport visual critique feedback loop into `scripts/design_os.py verify`.

### Phase 3: Governance & Catalog Synchronization
- **Run** `npm run sync:catalog` to regenerate `skills-lock.json` and update `README.md`.
- **Execute** `npm run audit:full` to verify 100% frontmatter compliance and zero broken dependencies.

---

## Section O: Proposed Directory & File Structure

```
d:/Design-OS/
├── .agents/
│   ├── rules/
│   │   ├── projects-location.md                # Mandatory subfolder routing
│   │   └── zero-emojis-and-vibesec.md          # Zero-emoji & VibeSec rules
│   └── skills/                                 # Consolidated high-leverage skills
│       ├── tastemaker/                         # Master taste, dials & anti-slop
│       ├── build-awwwards-quality-sites/       # High-concept creative flagship
│       ├── cinematic-gsap-lenis-motion-system/ # Master GSAP/Lenis choreography
│       ├── emil-design-eng/                    # Micro-interactions & UI polish
│       ├── threejs-shaders/                    # WebGL GLSL shaders & post-processing
│       ├── liquid-metal-border/                # Chromatic metal border shaders
│       ├── sound-design-ux/                    # Web Audio micro-haptics
│       ├── better-interface/                   # Master cross-discipline review
│       ├── better-accessibility/               # WCAG 2.2 AA & ARIA semantics
│       ├── better-typography/                  # Editorial type scales & pairings
│       ├── better-colors/                      # OKLCH color palettes & APCA/WCAG
│       ├── better-layout/                      # Obys grid & spatial rhythm
│       ├── better-ui/                          # Concentric radius & depth shadows
│       ├── better-writing/                     # UX copy & error recovery
│       ├── break/                              # Extreme container stress-testing
│       ├── variant/                            # 3-candidate in-page switcher
│       ├── vibesec/                            # Cybersecurity & CSP protocol
│       └── visual-regression-gate/             # Playwright multi-viewport gate
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DESIGN_OS_UNIFIED_ARCHITECTURE_AUDIT.md # This document
│   └── workflows/
│       └── MASTER_WORKFLOW_ENGINE.md
├── projects/                                   # Mandatory build destination
│   ├── Websites/
│   ├── Products/
│   └── Sandbox/
├── references/
│   ├── style-recipes/                          # Consolidated style recipes
│   └── vault/                                  # 24 Awwwards reference repos
└── scripts/
    ├── design_os.py                            # Unified CLI core
    ├── audit-design-os.mjs
    ├── sanitize_svg.py
    └── tastemaker/
        ├── anti_slop_scan.py
        ├── check_contrast.py
        ├── fetch_icons.py
        ├── fetch_photos.py
        └── generate_palette.py
```

---

## Section P: Open Questions, Trade-Offs & Council Roast

To stress-test this unified architecture, we execute the `/roast` protocol using a **5-Persona Adversarial Council**:

```
+─────────────────────────────────────────────────────────────────────────────+
|                         5-PERSONA COUNCIL ROAST                             |
+─────────────────────────────────────────────────────────────────────────────+
| 1. THE CONTRARIAN (The Skeptic):                                            |
|    "Why maintain 134 skills when 80% are micro-specialists that could be    |
|    subsumed under 6 core pillars? You risk orchestrator analysis-paralysis."|
|                                                                             |
| 2. THE EXPANSIONIST (The Scale Visionary):                                  |
|    "Where is the multi-page design token synchronization? If a flagship     |
|    website expands to 12 pages, how do you prevent token drift without a   |
|    persistent database?"                                                    |
|                                                                             |
| 3. THE LOGICIAN (The Architect):                                            |
|    "The tension between GSAP ScrollTrigger and React DOM reconciliation     |
|    must be solved at the template level. An inner wrapper ref rule must be  |
|    hard-coded into the AST linter."                                         |
|                                                                             |
| 4. THE RESEARCHER (The Evidence Gatherer):                                  |
|    "Ensure that Openverse CC0 and Iconify scraping include offline fallback |
|    caching in case of network timeouts during local development."           |
|                                                                             |
| 5. THE BUYER (The End User / Client):                                       |
|    "I don't care about internal architecture; I care about first-impression |
|    WOW factor, zero bugs at 375px mobile, and instant page load speeds."    |
+─────────────────────────────────────────────────────────────────────────────+
```

### Key Decisions for User Sign-Off:

1. **Orchestration Model**:
   - **Option A (Recommended)**: Adopt the **4-Stage Adaptive Engine** with `RESUME.md` session checkpoints and the 3 execution tracks (`--mode awwwards`, `--mode product`, `--mode component`).
   - **Option B**: Maintain the strict 12-Stage / 48-Phase waterfall with mandatory human approval at each sub-phase.

2. **Motion Engine Standard**:
   - **Option A (Recommended)**: Enforce a strict **Single-Motion-Engine Contract** per project: GSAP + Lenis for `--mode awwwards`; WAAPI / CSS for `--mode product`.
   - **Option B**: Allow hybrid GSAP + Framer Motion in the same project.

3. **Skill Catalog Restructuring**:
   - **Option A (Recommended)**: Consolidate overlapping taste, GSAP, and Three.js skills into 12 authoritative flagship skills while preserving granular domain references as sub-modules.
   - **Option B**: Keep all 134 individual skill folders untouched in `.agents/skills/`.

---
*End of Master System Audit & Unified Architecture Blueprint.*

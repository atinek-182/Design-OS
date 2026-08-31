# Resn (Corn Revolution) — 15-Category Dot-to-Dot Master Reference Manual

> **Target Site:** [https://cornrevolution.resn.global/#](https://cornrevolution.resn.global/#)  
> **Vault Reference ID:** `resn-corn-revolution-granularity-master`  
> **Source Directory:** `reference-inputs/sites/resn-corn-revolution/`  

---

## 1. Meta, SEO, & Favicons Architecture
- **Title Tag:** `Pioneer® — Corn Revolutionized | Resn`
- **Canonical URL:** `https://cornrevolution.resn.global/#`
- **Favicons:** Custom biological grain icon formats (`16x16`, `32x32`, `apple-touch-icon.png`).

## 2. Preloader & Entrance System
- **Preloader Mechanic:** Interactive 3D preloader displaying real-time asset hydration percentage (`0%` -> `100%`).
- **Scroll Lock:** Lock body scroll while initial WebGL textures and 3D meshes compile.

## 3. Navigation & Header System
- **Positioning:** Fixed HUD overlay bar with chapter shortcuts and audio mute controls.
- **Interactions:** Hover clip-path animations and spatial sound triggers.

## 4. Cursor & Pointer Physics
- **Custom Cursor:** Radial repulsion effect that disperses 3D particle fields on pointer hover.

## 5. Typography & Text Rendering
- **Fluid Type Clamp:** `clamp(2.75rem, 7vw, 6rem)` for primary chapter titles.
- **Monospace HUD Data:** JetBrains Mono style data callouts.

## 6. OKLCH Color Tokens & Theme Engine
- **Primary Background:** `oklch(0.08 0.02 135)` (`#070a06`)
- **Dark Moss Surface:** `oklch(0.14 0.04 135)` (`#10170d`)
- **Chlorophyll Green:** `oklch(0.65 0.22 145)` (`#22c55e`)
- **Harvest Gold:** `oklch(0.78 0.18 85)` (`#eab308`)

## 7. Hero Section Architecture
- **Structure:** Infinite vertical scroll 3D WebGL viewport canvas bound to normalized scroll position (`Hero_3DStage_01.tsx`).

## 8. Scrollytelling & Parallax Engine
- **3D Camera Scrubbing:** Camera Z-axis translation through 4 biological chapters bound to scroll.

## 9. Interactive UI Widgets & Cards
- **Data Callout Overlay Cards:** Floating 3D data tags anchored to CGI world coordinates.

## 10. Drag-along-Path SVG & Slider Mechanics
- **Infinite Carousel:** Continuous loop navigation between the start and end chapters.

## 11. Proximity-Based Interactive Elements
- **Particle Vector Repulsion:** Euclidean distance calculation for pointer-mesh displacement ($\mathbf{D} = \mathbf{P}_{cursor} - \mathbf{P}_{particle}$).

## 12. Audio & Soundscape UI System
- **Howler.js Spatial Audio:** Ambient soundscape modulating pitch and volume with scroll velocity.

## 13. Modals, CTAs, & Form Mechanics
- **Chapter Navigation Overlay:** Interactive HUD drawer for jumping across narrative chapters.

## 14. Footer & Page Transition System
- **Footer Section:** Credits section highlighting Awwwards Site of the Year honors (Resn × Bader Rutter).

## 15. 3D Models, Rive Runtimes & Motion Physics Inventory
- **WebGL GLSL Shaders:** 6 intercepted vertex & fragment shaders (`code-extracts/shaders/shader_01_fragment.glsl` to `shader_06_fragment.glsl`).

---

*Registered in Central Vault Indexing.*

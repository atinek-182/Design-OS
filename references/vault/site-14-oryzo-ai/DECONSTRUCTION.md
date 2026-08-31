# Oryzo AI — 14-Category Dot-to-Dot Master Reference Manual

> **Reference Slug:** `oryzo-ai`  
> **Source URL:** [https://oryzo.ai/](https://oryzo.ai/)  
> **Ingested Path:** [reference-inputs/sites/oryzo-ai/](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/)  
> **Agency:** Lusion ([https://lusion.co](https://lusion.co))  

---

## 0. Raw Source, Media & Visual Wireframe Assets (`assets/`)
- 🌐 **Raw Mirrored Source:** [`mirror/index.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/mirror/index.html)
- 📐 **Detailed Visual UI Wireframe:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/wireframe.html) | Image: [`wireframe.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/wireframe.png)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/mobile_375.png)

---

## 1. Meta, SEO, & Favicons
- **Viewport Config:** `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`
- **Theme Color:** `#000000` (Pitch Black).
- **OpenGraph Asset:** `https://oryzo.ai/meta/og_image.png` (`1200x630`).
- **Icons:** SVG favicon (`/meta/favicon.svg`), Apple Touch Icon (`180x180`).

---

## 2. Preloader & Entrance System
- **Preloader Mechanics:** Canvas initialization waits for `SplatsWorker` to decode the 3D Gaussian Splats dataset.
- **Ready State Class:** Body gains `class="is-desktop is-ready"` once Three.js WebGL context mounts.
- **Scrollbar Physics:** `--vh: 10.8px` custom CSS custom variable calculated from `window.innerHeight * 0.01` to avoid mobile browser address bar layout jumps.

---

## 3. Navigation & Header System
- **Navigation Type:** Hidden minimalist header with embedded floating logo (`#hero-logo-ref`).
- **Logo SVG Symbol:** Stored in hidden `<svg>` symbol container (`#logo-tmpl`, `viewBox="0 0 809 174"`).

---

## 4. Cursor & Pointer Physics
- **Custom Hand Cursor:** SVG symbol (`#hand-tmpl`, `viewBox="0 0 32 40"`).
- **Interactive Proximity Text:** `"Try to hover hand"` (`#ai-instruction-text`) with spring magnetic pull.

---

## 5. Typography & Text Rendering
- **Header Font:** Custom luxury serif stack paired with mono utility labels (`Space Mono`).
- **SplitText Strategy:** Text split into character `<div aria-hidden="true" style="position: relative; display: inline-block;">` nodes while wrapping original text in root `aria-label` attribute.

---

## 6. OKLCH Color Tokens & Theme Engine
- **Primary Background:** `#000000` (Pure Black).
- **Accent Cream:** `#FFEDD6` / `#FDE9CE`.
- **Satirical Orange:** `#F97316` (used for CTA highlights and warnings).

---

## 7. Hero Section Architecture
- **Structure:** Full-screen viewport hero containing floating 3D canvas stage (`canvas#canvas`), top tagline, and video reveal thumbnail.
- **Copy:** *"Made for mugs. Built for tables."* / *"Designed to lift, insulate, and grip in all the right ways."*

---

## 8. Scrollytelling & Parallax Engine
- **Canvas Height:** Body height set to `60582.1px` to provide ultra-smooth scrub control over GSAP timelines.
- **Camera Interpolation:** Three.js camera position scrubbed smoothly across 7 distinct keyframes.

---

## 9. Interactive UI Widgets & Cards
- **Feature Items:** `<div id="features-item-elevate" class="features-item" data-id="elevate">` with precision-engineered lift specs.
- **Gallery Carousel:** Horizontal movement container (`#wearable-gallery-move-container`) holding WebP loops and image cards.

---

## 10. Drag-along-Path SVG Slider
- **Dashed Lines:** Custom dashed borders (`.o-dashline`) separating title cards and disclaimers.

---

## 11. Proximity-Based Interactive Map Pins & Warnings
- **Warning Modal:** `<div id="wearable-gallery-warning">` with satirical copy: *"This stunt was performed by professionals. Do not attempt this at home."*

---

## 12. Audio & Soundscape UI System
- **Video Reveal:** Embeds custom Vimeo player (`player.module.js`, `player.css`) for high-resolution video playback on play button click.

---

## 13. Modals, CTAs, & Form Mechanics
- **Bikini Prompt Widget:** Interactive input box with "@oryzo" handle tag and orange "Send" trigger button.

---

---

## 15. 📦 Intercepted 3D Models, Rive Runtimes & Texture Assets Inventory

### 🧊 Raw 3D Mesh & Camera Keyframe Buffers (`mirror/misc/`)
- `coaster.buf` (66 KB) — Main 3D Cork Coaster geometry mesh buffer
- `CUP.buf` (95 KB) — 3D Coffee Cup mesh buffer
- `hand.buf` (381 KB) — 3D Hand gesture mesh buffer
- `hand_animation.buf` (41.5 KB) — 3D Hand skeletal animation tracks
- `PINBOARD.buf` (535 KB) — 3D Pinboard background mesh buffer
- `COVER.buf` (451 KB) — 3D Magazine Cover geometry mesh buffer
- `BARK.buf` (278 KB) — Raw cork bark texture surface buffer
- `water_bear.buf` (420 KB) — 3D Tardigrade/Water Bear mascot mesh buffer
- `condom_front.buf` & `condom_back.buf` (737 KB) — Satirical packaging 3D mesh buffers
- `CAMERA_ANIM.buf` (8.5 KB) — Full camera scroll path keyframe array
- `COASTER_ANIM.buf` & `COASTER_FLIP_ANIM.buf` (10 KB) — Coaster rotational transform tracks
- `COFFEE_ANIM.buf` & `hero_camera.buf` — Fluid coffee stream & hero entry tracks

### ⚡ 3D Engine, Rive Runtime & Gaussian Splat Sorters
- `oryzo.riv` (59 KB) — Native Rive 2D/3D vector animation asset file
- `rive.wasm` (1.81 MB) — Rive WebAssembly graphics engine runtime
- `splat_sorter_bg-BfJrILzx.wasm` (38.5 KB) — Real-time WebGL Gaussian Splat depth sorter WebAssembly module
- `props.sog` (3.09 MB) & `table_reflection.sog` (486 KB) — 3D Splat texture & reflection maps
- `Inter.json` (14 KB) — Three.js 3D typeface font definition

### 🎨 PBR Maps, Textures & Shading Asset Suite (`assets/images/`)
- **PBR Material Maps:** `HEIGHT.webp` (276 KB), `DIFF.webp` (273 KB), `cork_closeup.webp` (308 KB), `normal.png`, `brdf.png`, `cover-specular.webp`
- **Gobo & Lighting Maps:** `gobo_b_0.4630597.avif` (166 KB), `gobo_c_0.38847005.avif` (165 KB), `env_hero.webp`, `env_table.webp`
- **WebP Video Loops:** `drop_test.webp` (228 KB), `condom_anim.webp` (422 KB), `bark.webp` (518 KB), `DESK_HD.webp` (669 KB)


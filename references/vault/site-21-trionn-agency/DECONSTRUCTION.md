# TRIONN Agency — 15-Category Dot-to-Dot Master Reference Manual

> **Target Site:** [https://trionn.com/](https://trionn.com/)  
> **Vault Reference ID:** `trionn-agency-granularity-master`  
> **Source Directory:** `reference-inputs/sites/trionn-agency/`  

---

## 1. Meta, SEO, & Favicons Architecture
- **Title Tag:** `TRIONN® — AI-Powered Digital Studio | UI/UX Design & Development`
- **Canonical URL:** `https://trionn.com/`
- **Favicons:** Multiple sizes (`16x16`, `32x32`, `192x192`, `apple-touch-icon.png`).
- **OpenGraph Tags:** `og:type = website`, `og:site_name = TRIONN`, `og:image = /assets/images/og-trionn.webp`.

## 2. Preloader & Entrance System
- **Preloader Mechanic:** Numerical progress counter `0` to `100` coupled with SVG curtain reveal.
- **Scroll Lock:** Lock body scroll while loader is active (`overflow: hidden; height: 100vh;`).

## 3. Navigation & Header System
- **Positioning:** Fixed top navigation header with `backdrop-filter: blur(12px)`.
- **Interactions:** Menu item hover clip-path animation; mobile slide-in overlay drawer (`Nav_Header_01.tsx`).

## 4. Cursor & Pointer Physics
- **Custom Cursor:** Dual-ring pointer follower (inner dot + outer lerp ring).
- **Magnetic Action:** Snaps onto interactive target elements (`.btn`, `.card`, `.nav-link`).

## 5. Typography & Text Rendering
- **Fluid Type Clamp:** `clamp(2.5rem, 6vw, 5.5rem)` for primary hero headlines.
- **Text Reveal:** GSAP SplitText character staggering (`stagger: 0.015s`).

## 6. OKLCH Color Tokens & Theme Engine
- **Primary Background:** `oklch(0.12 0.01 260)` (`#0d0e12`)
- **Card Surface:** `oklch(0.16 0.02 260)` (`#15171e`)
- **Indigo Glow:** `oklch(0.55 0.22 275)` (`#6366f1`)
- **Cyan Accent:** `oklch(0.70 0.18 200)` (`#06b6d4`)

## 7. Hero Section Architecture
- **Structure:** Full-screen viewport hero container with dynamic 3D WebGL background canvas and layered text overlays (`Hero_Section_01.tsx`).

## 8. Scrollytelling & Parallax Engine
- **ScrollTrigger Pinning:** Smooth section pinning for featured case studies with scroll scrubbing (`scrub: 1`).

## 9. Interactive UI Widgets & Cards
- **Bento Cards:** 134 extracted React `.tsx` components (`code-extracts/components/cards/`).
- **Hover Micro-Interactions:** Elevation lift and border glow on mouse hover.

## 10. Drag-along-Path SVG & Slider Mechanics
- **Slider Component:** Horizontal drag/scroll carousel for client testimonials and studio awards.

## 11. Proximity-Based Interactive Elements
- **Proximity Glow:** Card borders change opacity based on mouse cursor distance.

## 12. Audio & Soundscape UI System
- **Web Audio Engine:** Sound toggle switch with UI hover and click audio feedback.

## 13. Modals, CTAs, & Form Mechanics
- **Contact Form:** Interactive multi-step project planner form (`Modals_Main_01.tsx`).

## 14. Footer & Page Transition System
- **Footer Section:** High-contrast CTA section with global studio location info (`Footers_Main_01.tsx`).

## 15. 3D Models, Rive Runtimes & Motion Physics Inventory
- **WebGL GLSL Shaders:** 16 intercepted shaders (`code-extracts/shaders/shader_01_fragment.glsl` to `shader_16_fragment.glsl`).

---

*Registered in Central Vault Indexing.*

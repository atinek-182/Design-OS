# Locomotive Agency — 15-Category Dot-to-Dot Master Reference Manual

> **Target Site:** [https://locomotive.ca/en](https://locomotive.ca/en)  
> **Vault Reference ID:** `locomotive-agency-granularity-master`  
> **Source Directory:** `reference-inputs/sites/locomotive-agency/`  

---

## 1. Meta, SEO, & Favicons Architecture
- **Title Tag:** `Locomotive® — Digital-First Agency | Montréal`
- **Canonical URL:** `https://locomotive.ca/en`
- **Favicons:** Multiple sizes (`16x16`, `32x32`, `apple-touch-icon.png`).

## 2. Preloader & Entrance System
- **Preloader Mechanic:** Percentage loader `0%` to `100%` coupled with SVG curtain reveal.
- **Scroll Lock:** Lock body scroll while loader is active.

## 3. Navigation & Header System
- **Positioning:** Fixed top navigation header with `backdrop-filter: blur(12px)`.
- **Interactions:** Language switcher (`EN / FR`), menu overlay drawer (`Nav_Header_01.tsx`).

## 4. Cursor & Pointer Physics
- **Custom Cursor:** Trailing pointer dot with magnetic target snapping.

## 5. Typography & Text Rendering
- **Fluid Type Clamp:** `clamp(2.75rem, 7vw, 6rem)` for primary hero headlines.
- **GSAP SplitText:** Line-by-line and word-by-word reveal animations.

## 6. OKLCH Color Tokens & Theme Engine
- **Primary Background:** `oklch(0.10 0 0)` (`#0d0d0d`)
- **Charcoal Surface:** `oklch(0.16 0 0)` (`#171717`)
- **Crimson Red Accent:** `oklch(0.62 0.24 25)` (`#ff4757`)

## 7. Hero Section Architecture
- **Structure:** Full-screen viewport container with kinetic text reveal and parallax image container (`Hero_Section_01.tsx`).

## 8. Scrollytelling & Parallax Engine
- **Locomotive Scroll v5:** Parallax speed attribute (`data-scroll-speed="2"`) and scroll scrubbing.

## 9. Interactive UI Widgets & Cards
- **109 Extracted React Components:** Organized in `code-extracts/components/` pattern subfolders.

## 10. Drag-along-Path SVG & Slider Mechanics
- **Horizontal Carousel:** Portfolio slider for client work highlights.

## 11. Proximity-Based Interactive Elements
- **Image Hover Wave:** Dynamic GLSL ripple distortion on pointer hover.

## 12. Audio & Soundscape UI System
- **UI Sound Feedback:** Subtle audio feedback on navigation triggers.

## 13. Modals, CTAs, & Form Mechanics
- **Contact Form Overlay:** Multi-step project inquiry form (`Modals_Main_01.tsx`).

## 14. Footer & Page Transition System
- **Footer Section:** Bold CTA section highlighting Montréal studio contact info (`Footers_Main_01.tsx`).

## 15. 3D Models, Rive Runtimes & Motion Physics Inventory
- **WebGL GLSL Shaders:** 20 intercepted vertex & fragment shaders (`code-extracts/shaders/shader_01_fragment.glsl` to `shader_20_fragment.glsl`).

---

*Registered in Central Vault Indexing.*

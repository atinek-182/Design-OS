# Merci Michel — 15-Category Dot-to-Dot Master Reference Manual

> **Target Site:** [https://mercimichel.com/](https://mercimichel.com/)  
> **Vault Reference ID:** `merci-michel-granularity-master`  
> **Source Directory:** `reference-inputs/sites/merci-michel/`  

---

## 1. Meta, SEO, & Favicons Architecture
- **Title Tag:** `Merci-Michel — Digital Production & Gamification Studio | Paris`
- **Canonical URL:** `https://mercimichel.com/`
- **Favicons:** Multiple formats (`16x16`, `32x32`, `apple-touch-icon.png`).

## 2. Preloader & Entrance System
- **Preloader Mechanic:** Interactive percentage counter (`0%` -> `100%`) with background curtain reveal.
- **Scroll Lock:** Lock body scroll while initial WebGL scene compiles.

## 3. Navigation & Header System
- **Positioning:** Fixed top HUD header with sound control toggle (`🔊 Sound: ON`) and language switcher.
- **Interactions:** Hover clip-path animations and spatial sound triggers (`Nav_Header_01.tsx`).

## 4. Cursor & Pointer Physics
- **Custom Cursor:** Trailing neon pointer dot with magnetic target snapping on project triggers.

## 5. Typography & Text Rendering
- **Fluid Type Clamp:** `clamp(2.5rem, 6.5vw, 5.75rem)` for primary headlines.
- **GSAP SplitText:** Kinetic text reveals on scroll entry.

## 6. OKLCH Color Tokens & Theme Engine
- **Obsidian Void Background:** `oklch(0.08 0.01 260)` (`#0a0b10`)
- **Deep Slate Surface:** `oklch(0.14 0.02 260)` (`#12141d`)
- **Neon Crimson Accent:** `oklch(0.60 0.26 15)` (`#ff3366`)
- **Electric Purple Accent:** `oklch(0.55 0.25 300)` (`#a855f7`)

## 7. Hero Section Architecture
- **Structure:** Full-bleed 3D WebGL viewport canvas powered by Three.js particle bloom stage.

## 8. Scrollytelling & Parallax Engine
- **3D Camera Scrubbing:** Camera Z-axis translation through 3D case study spaces.

## 9. Interactive UI Widgets & Cards
- **35 Extracted React Components:** Organized under `code-extracts/components/` pattern subfolders.

## 10. Drag-along-Path SVG & Slider Mechanics
- **Horizontal Carousel:** Portfolio slider for interactive client work highlights.

## 11. Proximity-Based Interactive Elements
- **Particle Proximity Math:** Vector displacement ($\mathbf{D} = \mathbf{P}_{cursor} - \mathbf{P}_{particle}$).

## 12. Audio & Soundscape UI System
- **Howler.js Audio Engine:** Spatial audio panning and micro-interactive sound triggers.

## 13. Modals, CTAs, & Form Mechanics
- **Contact Overlay:** Interactive HUD drawer for studio inquiries (`contact@merci-michel.com`).

## 14. Footer & Page Transition System
- **Footer Section:** Credits section highlighting 2 SOTY, 6 SOTM, and 41 SOTD awards (`Footers_Main_01.tsx`).

## 15. 3D Models, Rive Runtimes & Motion Physics Inventory
- **WebGL Engine:** Custom Three.js gamified WebGL engine optimized for mobile and desktop GPUs.

---

*Registered in Central Vault Indexing.*

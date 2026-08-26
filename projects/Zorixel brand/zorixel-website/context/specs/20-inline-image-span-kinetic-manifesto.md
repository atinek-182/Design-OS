# SPEC-20: Inline Image-Span Kinetic Manifesto Statement (`/`)

## Overview
This specification details the standalone homepage kinetic manifesto statement section with inline expanding component preview image spans, deconstructed and adapted from `REF-008` (`text-image-line-reveal.html`).

---

## 🎯 Target Route & Scope
- **Route:** `/` (Homepage — Separate Section directly below 3D Helical Spiral Hero Stage)
- **Target Component:** `src/components/home/KineticManifestoStatement.tsx`
- **Reference Vault Asset:** `REF-008` (`text-image-line-reveal.html`)

---

## 🏗️ Structural Architecture & Motion Mechanics

### 1. Inline Image-Span Layout
- Multi-line typographic layout wrapping text `<span>` elements with inline `.img-span` boxes (`height: 110px`, `width: 0`, `overflow: hidden`, `position: relative`, `border-radius: 8px`).
- Images inside `.img-span` are styled `width: 300px`, `height: 100%`, `object-fit: cover`, centered with `transform: translateX(-50%)`.

### 2. ScrollTrigger Scrub Width Animation
- Each `.line` element triggers its own GSAP timeline (`trigger: line`, `start: "top 90%"`, `end: "top 40%"`, `scrub: 1`).
- GSAP animates `.img-span` width from `0px` -> `300px`, expanding inline preview cards smoothly as the line enters the viewport.

### 3. Homepage Manifesto Copy Structure
- **Line 1:** `WE CRAFT` `[INLINE_IMG: Card 01 Next.js App Router]` `DIGITAL`
- **Line 2:** `EXPERIENCES` `[INLINE_IMG: Card 02 OKLCH Design Tokens]` `THAT`
- **Line 3:** `EMPOWER` `[INLINE_IMG: Card 03 3D WebGL Shader Stage]` `VIBE CODERS`
- **Line 4:** `AND SHIP` `[INLINE_IMG: Card 04 AI OS Workflow Map]` `FASTER.`

---

## 🎨 Theme & Typography Binding
- **Headline Font:** `Havock` bold display font (`font-size: clamp(3rem, 7vw, 7.5rem)`, `letter-spacing: -3px`).
- **Canvas Overlay:** Obsidian Midnight (`#0D0E12`) dark background.
- **Image Border & Accents:** Velvet Burgundy (`#6D001A`) subtle stroke around `.img-span`.

---

## 📱 Mobile Responsiveness Mandate
- Scaled `.img-span` max width to `180px` and text font size to `clamp(2.2rem, 5.5vw, 4rem)` on viewports <768px.
- Hardware-accelerated GPU transforms (`will-change: width`).

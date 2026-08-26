# SPEC-17: Polygon Clip-Path Morphing Manifesto Stage (`/about`)

## Overview
This specification details the dynamic full-bleed polygon clip-path morphing & character-by-character kinetic typography reveal stage for the `/about` route (Zorixel Brand Manifesto & Creator Story), deconstructed from `REF-005` (`Dragon-Scroll-Effect`).

---

## 🎯 Target Route & Scope
- **Route:** `/about` (About & Brand Manifesto Page)
- **Target Component:** `src/components/about/PolygonManifestoStage.tsx`
- **Reference Vault Asset:** `REF-005` (`Dragon-Scroll-Effect/`)

---

## 🏗️ Structural Architecture & Motion Mechanics

### 1. Scroll-Driven Polygon Clip-Path Morphing
- **Entry Scroll Trigger (`start: "top bottom"`, `end: "top top"`, `scrub: 0.5`):**
  - Starts as angled diamond clip-path: `clip-path: polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)`.
  - Morphs into full-bleed rectangular canvas: `clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`.
- **Exit Scroll Trigger (`start: "bottom bottom"`, `end: "bottom top"`, `scrub: 0.5`):**
  - Morphs out into inverted angled polygon: `clip-path: polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)`.

### 2. Per-Character Kinetic Headline Reveal
- **GSAP SplitText Integration:**
  - `SplitText` creates character elements (`type: "chars"`, `mask: "chars"`).
  - Initial position: `y: "125%"`.
  - Individual character triggers scrub upward to `y: "0%"` based on character index offset (`start: top+=${index * 25 - 250} top`).

### 3. Manifesto Chapters Content Structure
1. **Chapter 01: The Zorixel Vision**
   - Tag: `VISION & MISSION`
   - Title: `DESIGNING FOR VIBE CODERS`
   - Subtitle: Bridging high-end web design aesthetics with autonomous AI engineering.
2. **Chapter 02: The 3Ms Framework**
   - Tag: `THE OPERATOR BRAIN`
   - Title: `MINDSET, METHOD, MACHINE`
   - Subtitle: How Atinek Maurya thinks, decides, and ships faster with AI.
3. **Chapter 03: The Core AI OS**
   - Tag: `SYSTEM ARCHITECTURE`
   - Title: `AUTOMATING CONTENT & CODE`
   - Subtitle: Modular AI OS workflows operating quietly in the background.
4. **Chapter 04: The Creator Ecosystem**
   - Tag: `THE FUTURE`
   - Title: `BUILDING FOR THE COMMUNITY`
   - Subtitle: Open resource hub, design systems, and sellable AI automations.

---

## 🎨 Theme & Typography Binding
- **Headline Typography:** `Havock` bold display stack over Obsidian Midnight (`#0D0E12`) dark canvas.
- **Subheadings & Body:** `Rosehot` subheadings with Velvet Burgundy (`#6D001A`) and Electric Crimson (`#D61C2C`) accent badges.
- **Watermark:** Large numeric watermark (`01`, `02`, `03`, `04`) in `Havock` tabular characters (`#252838` stroke).

---

## 📱 Mobile Responsiveness Mandate
- Scaled headline typography from `8rem` down to `clamp(2.5rem, 6vw, 5.5rem)` on mobile (<768px).
- Scaled section height to `120svh` on touch devices to ensure smooth touch scrolling without abrupt layout jumps.

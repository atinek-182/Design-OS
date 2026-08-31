# Jasmine Gunarto — Ultra-Exhaustive 10-Pillar Technical & Architectural Analysis

**Target Website:** `https://jasminegunarto.com/`  
**Site Slug:** `jasmine-gunarto`  
**Designer & Developer:** Jasmine Gunarto (Design) & Diar Adelita Sury (Dev)  
**Analysis Date:** 2026-07-24  

---

## 🏛️ Pillar 1: Executive Summary & Studio/Award Pedigree
`Jasmine Gunarto` is an Awwwards Site of the Day (SOTD, April 22 2026) and Developer Award-winning portfolio platform. Designed by 2D motion designer Jasmine Gunarto and engineered by developer Diar Adelita Sury, the digital experience is recognized as a masterpiece of editorial typography and kinetic 2D animation:
- **Awwwards Honors:** Site of the Day (SOTD) + Developer Award + Honorable Mention.
- **Design Archetype:** Editorial Portfolio & Kinetic Motion Design Gallery.

---

## 🎨 Pillar 2: Visual & Aesthetic Design Psychology
- **Color Identity:** Obsidian Black (`#090909`), Cream Off-White (`#EBEAE4`), Deep Earth Brown (`#341C09`).
- **Live Location Widget:** Dynamic header displaying real-time clock, timezone, coordinates, and location (`NEW YORK, US`).
- **Minimalist Restraint:** High density of editorial whitespace with full-bleed kinetic image overlays.

---

## 🔤 Pillar 3: Typography Architecture & Micro-Kerning
- **Serif Editorial Header:** Classical serif display font (`HG-1`) with animated letter wrappers (`position: relative; display: inline-block; overflow: clip;`).
- **Sans-Serif Body:** `Manrope` Google Font (weights 600, 700, 800) for UI elements and navigation labels.

---

## 📐 Pillar 4: Grid Math & Responsive Geometry
- **Viewport System:**
  - **Desktop:** `1920px` viewport reference
  - **Laptop:** `1440px`
  - **Tablet:** `1024px / 768px`
  - **Mobile:** `375px`
- **Full Stage Canvas:** Uses `--wh: 1080` and `--ww: 1920` CSS custom variables.

---

## 💻 Pillar 5: Full-Stack Source Code & JavaScript Engineering
- **Build Engine & Framework:** Vite module bundler + WordPress backend (`theme-jasmine`).
- **SPA Router Engine:** Taxi.js (`data-taxi`, `data-taxi-view`).
- **Modular Component Blocks:** 49 separate JS chunks (`BlockRuntime-*.js`, `MagneticButton.js`, `InfiniteSlider.js`).

---

## 6. WebGL Shader Pipeline & Canvas Math
- **Clip-Path Inset Transitions:** Dynamic CSS clip-path morphing (`clip-path: inset(0px 0px 100%)`).
- **Image Scale Physics:** 1.2x to 2x transform scaling during section reveals.

---

## 🎵 Pillar 7: Dynamic Interactive Widgets & Audio Mechanics
- **LiteSpeed Cache Engine:** Optimized script deferment (`litespeed_docref`).
- **Preloader Numeric Counter:** Staggered digit roll (`.num-wrap`, `.num-current`, `.num-next`).

---

## ⚡ Pillar 8: UX Psychology & Micro-Interactions
- **Magnetic Buttons:** `MagneticButton-BLSjtdWW.js` tracking cursor position.
- **Popup Slider Modal:** Embla & Swiper carousel popup (`.popup-slider`).

---

## 📦 Pillar 9: Media & Preloading Pipeline
- **Font Preloading:** WOFF2 webfont preloading (`MG-B-BiU9T5KX.woff2`, `MG-BL-BdR8LHFG.woff2`).
- **WebP Image Format:** High-performance WebP image pipeline (`avantgarde_still-scaled-2.webp`).

---

## 🤖 Pillar 10: AIOS System Integration & Reusable Code Blueprints
4 reusable code blueprints extracted from `Jasmine Gunarto`:
1. **Live Location & Clock Header Component:** React widget (`code-extracts/components/NavHeader.tsx`).
2. **Magnetic Button Script:** Cursor-tracking button animation (`mirror/js/MagneticButton-BLSjtdWW.js`).
3. **Project Gallery Grid Component:** Showcase layout (`code-extracts/components/ProjectGalleryGrid.tsx`).
4. **Hero Motion Banner Component:** Editorial headline section (`code-extracts/components/HeroPortfolio.tsx`).

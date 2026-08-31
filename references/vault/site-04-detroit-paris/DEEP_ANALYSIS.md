# Detroit Paris — Ultra-Exhaustive 10-Pillar Technical & Architectural Analysis

**Target Website:** `https://www.detroit.paris/`  
**Site Slug:** `detroit-paris`  
**Studio Location:** Paris, France (Luxury AI Production House)  
**Analysis Date:** 2026-07-24  

---

## 🏛️ Pillar 1: Executive Summary & Studio/Award Pedigree
`Detroit Paris` is an Awwwards Site of the Day (SOTD, April 27 2026) and CSS Design Awards-winning luxury AI production house based in Paris. Merging generative AI, 3D CGI, and haute couture visual direction, the studio crafts images, films, and international campaigns for world-renowned fashion brands:
- **Awwwards Honors:** Site of the Day (SOTD) + Developer Award + Honorable Mention.
- **Design Archetype:** Luxury AI Production House & Haute Couture Campaign Showcase.

---

## 🎨 Pillar 2: Visual & Aesthetic Design Psychology
- **Color Identity:** Pure Dark (`#050505`), Charcoal Surface (`#0E0E10`), High-Contrast White (`#FFFFFF`).
- **Osmo Typography Scaling:** `font-size: calc(0rem + 1vw)` ensuring crisp viewport-relative scaling across all screen sizes.
- **Minimalist Fashion Restraint:** Full-bleed 4K video canvas overlays paired with minimalist sans-serif micro-labels.

---

## 🔤 Pillar 3: Typography Architecture & Micro-Kerning
- **Primary Typeface:** `Barlow` Google Font (weights 300, 400, 500, 600, 700).
- **All-Caps Micro-Kerning:** `letter-spacing: 0.1em` for high-end fashion catalog headers.

---

## 📐 Pillar 4: Grid Math & Responsive Geometry
- **Breakpoint System:**
  - **Desktop:** `1920px` viewport reference
  - **Laptop:** `1440px`
  - **Tablet:** `1024px / 768px`
  - **Mobile:** `375px`
- **Masonry Layout Math:** Multi-column masonry grid (`data-masonry-list`, `--masonry-col: 3`).

---

## 💻 Pillar 5: Full-Stack Source Code & JavaScript Engineering
- **Video Streaming Pipeline:** HLS.js 1.6.11 (`hls.js@1.6.11`) for adaptive 4K video stream playback.
- **Platform Engine:** Webflow CMS with custom JS bundle (`main.js` 339.8 KB).
- **Scroll Engine:** Lenis Smooth Scroll (`lenis.min.js`).

---

## 🌌 Pillar 6: WebGL Shader Pipeline & Canvas Math
- **Parallax Math:** `var(--parallax-x)` translation physics on hover.
- **Opacity Fade Transitions:** Smooth transition curves (`transition: transform .6s cubic-bezier(.33,1,.68,1)`).

---

## 🎵 Pillar 7: Dynamic Interactive Widgets & Audio Mechanics
- **Video Hover Trigger:** `data-video-on-hover` attribute starting video streams on card hover.
- **Google Tag Manager:** Analytics integration (`G-MHH26YC8MC`).

---

## ⚡ Pillar 8: UX Psychology & Micro-Interactions
- **Lightbox Artist Modal:** `.lightbox-artist` with thumbnail slide bar (`.lightbox-thumbnails`).
- **Scrollbar Suppression:** Complete scrollbar hidden layout (`body::-webkit-scrollbar { display: none; }`).

---

## 📦 Pillar 9: Media & Preloading Pipeline
- **WebFont Preloader:** `webfont.js` preloading Barlow font weights.
- **Preconnect Strategy:** Preconnect links to Google Fonts and Website Files CDN.

---

## 🤖 Pillar 10: AIOS System Integration & Reusable Code Blueprints
4 reusable code blueprints extracted from `Detroit Paris`:
1. **HLS.js 4K Streaming Video Player Setup:** JS wrapper for video stream playback (`mirror/js/hls.js@1.6.11`).
2. **Creative Works Masonry Grid Component:** React 3-column layout (`code-extracts/components/CreativeWorksGrid.tsx`).
3. **Osmo Micro-Typography CSS Tokens:** Fluid typography tokens (`code-extracts/styles/detroit-tokens.css`).
4. **Hero Luxury AI Banner Component:** React headline section (`code-extracts/components/HeroBanner.tsx`).

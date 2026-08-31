# Truck 'n Roll — Dot-to-Dot Granularity Master Reference Manual

**Target Website:** `https://trucknroll.com/`  
**Site Slug:** `truck-n-roll`  
**Agency & Studio:** Locomotive® (Montreal, QC)  
**Vault Index Reference:** `vault-references/truck-n-roll-granularity-master.md`  

---

## 📋 15 Baseline Granularity Categories + Dynamic Extra Sections

### 1. Meta, SEO, & Favicons
- **Viewport:** `width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover`
- **OpenGraph:** `https://trucknroll.com/uploads/uploads/_1200x630_crop_center-center_none/black_kenworth_stade_olympique.jpg`
- **Favicons:** `/favicons/favicon-96x96.png`, `/favicons/favicon.svg`, `/favicons/apple-touch-icon.png`.
- **Structured Data:** Schema.org `WebSite` & `Organization` JSON-LD.

### 2. Preloader & Entrance System
- **Spinner Transition:** `.c-transition` (`z-index: 99999`) with `.c-spinner_line`.
- **Ready Classes:** `class="is-first-loaded is-ready swup-enabled scrolling-up is-hero-inview lenis"`.

### 3. Navigation & Header System
- **Sticky Header:** `.c-sticky-header` with fixed title `.c-sticky-header_title`.
- **Navigation Links:** `.c-nav_list` (`Services`, `Fleet`, `Careers`, `Contact`).

### 4. Cursor & Pointer Physics
- **Hover Transitions:** Pointer event delegation managed by `deviceStatus-s85LpGmp.js`.

### 5. Typography & Text Rendering
- **Fonts:** `Druk` (Condensed Header), `GT America` (Body), `Space Mono` (Labels).
- **Responsive Sizing:** CSS fluid math scaling titles dynamically.

### 6. OKLCH & Theme Engine
- **Dark Theme Active:** `data-theme="dark"` on `<html>`.
- **Tokens:** Crimson Red (`#E53935`), Dark Charcoal (`#0E0F12`), Yellow (`#FFD54F`).

### 7. Hero Section Architecture
- **Hero Title:** Heavy uppercase display headline with tour logistics tagline.

### 8. Scrollytelling & Parallax Engine
- **Parallax Component:** `ParallaxImage-D-Hx3zFW.js` driven by Lenis inertia scroll loops.

### 9. Interactive UI Widgets & Cards
- **Rail Slider:** `Rail-Ck4YugMY.js` horizontal project showcase.
- **Accordion:** `Accordion-jn8VkQG4.js` services listing.

### 10. Drag-along-Path SVG Slider
- **Rail Component:** Drag and touch events bound to rail slider track.

### 11. Proximity-Based Interactive Pins
- **Hover Captions:** `HoverCaption-B_8cR76t.js` revealing tour photo metadata on pointer hover.

### 12. Audio & Soundscape UI System
- **Media Support:** HTML5 Video modal (`ModalVideo-UVJUOQ_g.js`).

### 13. Modals, CTAs, & Form Mechanics
- **Contact Lightbox:** `Modal-CNySbtkZ.js` for recruitment and booking enquiries.
- **Form Verification:** Google reCAPTCHA v3 integration.

### 14. Footer & Page Transition System
- **Swup Page Transitions:** SPA container (`#swup`) avoiding page reloads.

### 15. Media, Lottie & Source Code Index
- **Wireframe Blueprint:** [wireframe.html](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/assets/wireframe.html)
- **Deep Analysis Report:** [DEEP_ANALYSIS.md](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/DEEP_ANALYSIS.md)
- **Site DNA Report:** [site-dna.md](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/site-dna.md)
- **React Components:** [NavHeader.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/components/NavHeader.tsx) | [HeroSection.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/components/HeroSection.tsx)

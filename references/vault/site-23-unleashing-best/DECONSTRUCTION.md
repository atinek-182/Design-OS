# Unleashing Best — Dot-to-Dot Granularity Master Reference Manual

**Target Website:** `https://unleashingbest.com/`  
**Site Slug:** `unleashing-best`  
**Author / Creative Director:** Victor Work  
**Vault Index Reference:** `vault-references/unleashing-best-granularity-master.md`  

---

## 📋 15 Baseline Granularity Categories + Dynamic Extra Sections

### 1. Meta, SEO, & Favicons
- **Viewport:** `width=device-width, initial-scale=1`
- **OpenGraph:** Image `https://unleashingbest.com/cover.png` (`1200x630`).
- **Favicons:** `/favicon.png`, `/_nuxt/icons/icon_64x64.732ee7.png`, `/_nuxt/icons/icon_512x512.732ee7.png`.
- **Web App Manifest:** `/_nuxt/manifest.faa478a4.json`.

### 2. Preloader & Entrance System
- **Preloader Master Element:** `.preloader-master` (`z-index: 99999; background: #fff`).
- **Hydration Lock:** Prevents scroll chain during initial state parsing (`overscroll-behavior: none`).

### 3. Navigation & Header System
- **Fixed Logo:** `a.logo-main` (`position: fixed; top: 2.4rem; left: 1.5rem; width: 14.57rem`).
- **Course CTA Button:** `.link-course` (`position: fixed; right: 1.5rem; top: 3.4rem`).
- **Chapter Modal Drawer:** `.modal-chap` overlaying screen with vertical chapter list.

### 4. Cursor & Pointer Physics
- **Custom Cursor Layer:** `.custom-c` (`width: 10rem; height: 10rem; position: fixed; z-index: 10`).
- **Progress Circle:** `.custom-c__progress svg circle` with `-90deg` origin rotation.

### 5. Typography & Text Rendering
- **Fluid Math:** `font-size: 0.52083vw` baseline on desktop, scaling cleanly across viewports.
- **Font Families:** `GrifinitoLMedium` (Serif Display), `HelveticaRegular` & `HelveticaBd` (Sans-Serif Utility).

### 6. OKLCH & Theme Engine
- **CSS Variables:** `--currentColor`, `--soft`, `--currentColorAlpha`, `--vh`, `--vw`.
- **6 Palette Runtimes:** `.colorGreen`, `.colorOrange`, `.colorBlue`, `.colorRed`, `.colorPurple`, `.colorNeutral`.

### 7. Hero Section Architecture
- **Full-Screen Viewport:** `.intro` (`height: 100vh; position: fixed; width: 100vw`).
- **Kinetic Text Morph:** Scenes 1 to 7 transforming headline positioning on scroll.

### 8. Scrollytelling & Parallax Engine
- **Pin Range:** GSAP `ScrollTrigger` pinning `.intro__scene` across 400% scroll distance.
- **Opacity Scrub:** Highlight elements scrubbing from `0` to `1` based on scroll velocity.

### 9. Interactive UI Widgets & Cards
- **Chapter Slider:** `.slider-index` containing `.chapter-card` items.
- **Vector Animations:** Integrated Lottie JSON renders within circular illustrator frames (`.render-lottie`).

### 10. Drag-along-Path SVG Slider
- **Slider Track Math:** `ul.slider-index__hold` translating along X-axis on drag or wheel scroll.

### 11. Proximity-Based Interactive Pins
- **Hover Targets:** Proximity detection on `.btn-moveslider` and `.trg-modalchap`.

### 12. Audio & Soundscape UI System
- **Sound Button Widget:** `button.button-sound` (`position: fixed; bottom: 3rem; right: 1.5rem`).
- **Progress Ring:** SVG dash-offset transition (`transition: stroke-dashoffset 0.8s cubic-bezier(0.8, -0.01, 0.16, 1.01)`).

### 13. Modals, CTAs, & Form Mechanics
- **Chapter Modal Drawer:** `.modal-chap` with `.modal-chap__close` button.
- **CTA Hover Mechanics:** Dual text translation (`translateY(0)` -> `translateY(-150%)`).

### 14. Footer & Page Transition System
- **Wipe Transition:** `.wipe-trans__layer` with clip-path wipe animation.
- **Footer Structure:** Minimalist centered CTA section with copyright notice.

### 15. Media, Lottie & Source Code Index
- **Wireframe Blueprint:** [wireframe.html](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/unleashing-best/assets/wireframe.html)
- **Deep Analysis Report:** [DEEP_ANALYSIS.md](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/unleashing-best/DEEP_ANALYSIS.md)
- **Site DNA Report:** [site-dna.md](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/unleashing-best/site-dna.md)
- **React Components:** [Nav.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/unleashing-best/code-extracts/components/Nav.tsx) | [HeroScene.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/unleashing-best/code-extracts/components/HeroScene.tsx)

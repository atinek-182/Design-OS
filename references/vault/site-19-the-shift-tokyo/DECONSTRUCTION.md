# 🏛️ Master Reference Manual: The Shift Tokyo

**Target Site:** The Shift Tokyo (`https://theshift.tokyo/en/`)  
**Studio / Creator:** The Shift Creative Collective (Tokyo)  
**Archetype:** Japanese Experimental Digital Agency & Creative Collective  

---

## 📂 Raw Mirrored Source & Code Extracts
- 🔬 **Ultra-Exhaustive Deep Analysis:** [`DEEP_ANALYSIS.md`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/DEEP_ANALYSIS.md)
- 🌐 **Raw Page HTML Markup:** [`mirror/index.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/mirror/index.html) (228,752 bytes)
- 📜 **Raw Desktop JS Bundle:** [`mirror/js/prod-desktop.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/mirror/js/prod-desktop.js) (269 KB)
- 📜 **Raw CDN JS Bundle:** [`mirror/js/cdn.min.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/mirror/js/cdn.min.js) (32.7 KB)
- 🧩 **React Header Navigation Component:** [`ShiftTokyoNav.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/components/ShiftTokyoNav.tsx)
- 🧩 **React Tokyo Clock Widget:** [`TokyoClockWidget.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/components/TokyoClockWidget.tsx)
- 🧩 **React Featured Project Card Component:** [`FeaturedProjectCard.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/components/FeaturedProjectCard.tsx)
- ⚡ **GSAP Kinetic Animation Script:** [`shift-kinetic-scroll.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/animations/shift-kinetic-scroll.js)
- 🎨 **Extracted CSS Tokens:** [`the-shift-tokens.css`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/styles/the-shift-tokens.css)
- 🌐 **WebGL Distortion Shader:** [`tokyo-glsl-distortion.glsl`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/shaders/tokyo-glsl-distortion.glsl)
- 📐 **Detailed Visual UI Wireframe:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/wireframe.html) | Image: [`wireframe.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/wireframe.png)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/mobile_375.png)

---

## 🔬 Dot-to-Dot 15 Master Web Decision Categories

### 1. Meta, SEO, & Favicons
- OpenGraph Title: `"THE SHIFT"`
- OpenGraph Description: `"The Shift was created for things and people desiring a shift - a movement, a change - in business, organization, space, product, or service."`
- Favicons: Multi-resolution icons (`512x512`, `192x192`, `180x180`, `32x32`).

### 2. Preloader & Entrance System
- Minimalist dark splash loader (`.is-load-before`, `.is-splash-before`).

### 3. Navigation & Header System
- Sticky top header with mix-blend-difference logo and Tokyo real-time clock indicator (`東京 18:42:09 JST`).
- EN / JA language switcher and Dark / Light theme toggle.

### 4. Cursor & Pointer Physics
- Custom circle cursor (`.shift-cursor`) expanding from `12px` to `64px` with electric coral glow (`#FE4249`) on thumbnail hover.

### 5. Typography & Text Rendering
- Custom Web Fonts: `Everett` (Light/Regular), `Lausanne` (150), `YakuHanJP` (Japanese glyphs), `Gallery` (Serif).
- Character-level SplitText wrappers (`.js-split-l`).

### 6. OKLCH Color Tokens & Theme Engine
- Dark Theme Background: `oklch(0.10 0.005 240)` (`#0b0b0b`)
- Light Theme Background: `oklch(0.97 0.005 90)` (`#f5f5f5`)
- Accent Coral: `oklch(0.64 0.23 24)` (`#FE4249`)

### 7. Hero Section Architecture
- Kinetic split-line title (`"Exploring The Shift of Today"`).
- Lead paragraph explaining Tokyo creative collective mission.

### 8. Scrollytelling & Parallax Engine
- GSAP ScrollTrigger driving project list fade-in and thumbnail scale on entry.

### 9. Interactive UI Widgets & Cards
- Real-time Tokyo time clock widget (`TokyoClockWidget.tsx`).
- Interactive project showcase rows with video hover previews.

### 10. Drag-along-Path SVG Slider
- Pickup project slider with interactive progress ring SVG (`path[d="M31,1A30,30,0,1,1,1,31..."]`).

### 11. Proximity-Based Interactive Map Pins
- Cursor proximity detection scaling thumbnail cards on hover.

### 12. Audio & Soundscape UI System
- Silent, video-driven ambient visual transitions (`.js-bg-video-inview`).

### 13. Modals, CTAs, & Form Mechanics
- Fullscreen navigation overlay drawer with numeric menu items (`01 Home`, `02 Project`, `03 Research`, `04 About`).

### 14. Footer & Page Transition System
- Smooth Barba/AJAX page transitions retaining Tokyo live clock state.

### 15. 3D Models, Rive Runtimes & Motion Physics Inventory
- Custom WebGL GLSL fragment shader (`tokyo-glsl-distortion.glsl`) applying liquid wave distortion to project images.

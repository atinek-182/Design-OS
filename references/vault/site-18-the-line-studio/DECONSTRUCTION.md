# The Line Studio — 15-Category Dot-to-Dot Master Reference Manual

> **Reference Slug:** `the-line-studio`  
> **Source URL:** [https://thelinestudio.com/](https://thelinestudio.com/)  
> **Ingested Path:** [reference-inputs/sites/the-line-studio/](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/)  
> **Studio:** THE LINE Studio (London)  

---

## 0. Raw Source, Media & Visual Wireframe Assets (`assets/`)
- 🌐 **Raw Mirrored Source:** [`mirror/index.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/mirror/index.html)
- 📐 **Detailed Visual UI Wireframe:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/assets/wireframe.html) | Image: [`wireframe.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/assets/wireframe.png)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-line-studio/assets/mobile_375.png)

---

## 1. Meta, SEO, & Favicons
- **Title:** `Animation Studio London | THE LINE Studio`
- **Viewport Config:** `<meta name="viewport" content="width=device-width, initial-scale=1">`
- **Font Face:** Custom `DenimWeb` variable font (`src: url(/fonts/DenimVF.woff2)`).

---

## 2. Preloader & Entrance System
- **Preloader Markup:** Full-screen electric red overlay (`.preloader`) displaying real-time FPS counter (`.preloader__fps`).
- **Done State Trigger:** Class `.header--preloader-done` appended to root header upon completion.

---

## 3. Navigation & Header System
- **Header Layout:** Fixed header bar (`.header`) holding logo, status dot (`LONDON`), and location email link (`hello@thelinestudio.com`).
- **Dot Indicator:** `.dot--red` (`color: #ff391e`) active route indicator.

---

## 4. Cursor & Pointer Physics
- **Custom Cursor:** Smooth trailing custom cursor (`.cursor`) positioned fixed at top-left.

---

## 5. Typography & Text Rendering
- **Variable Weights:** Weight scale spanning `300` (Light), `440` (Regular), `470` (Medium), `500` (Bold), and `800` (Black).
- **Custom Kerning:** Individual letter margin classes (`.letter-A`, `.letter-B`, `.letter-C`) adjusting kerning down to `-0.07em`.

---

## 6. OKLCH Color Tokens & Theme Engine
- **Primary Color:** Electric Red (`#FF391E`).
- **Secondary Surfaces:** Chalk White (`#F8F8F8`), Studio Grey (`#DDDEE2`), Obsidian Charcoal (`#0B0B0B`).

---

## 7. Hero Section Architecture
- **Structure:** Sticky viewport hero (`.home-hero__sticky`) with rotated entry figure (`.home-hero__fig`).

---

## 8. Scrollytelling & Parallax Engine
- **Lenis Smooth Scroll:** Configured with `duration: 1.2` and exponential easing `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`.

---

## 9. Interactive UI Widgets & Cards
- **Featured Work Ticker:** Vertical project list with interactive video hover triggers (`.home-featured-work__list`).

---

## 10. Drag-along-Path SVG Slider
- **Media Player Alt:** `.player-alt` video player modal with card tilt reveal animation (`transform: translateY(-120%) rotate(-4deg)`).

---

## 11. Proximity-Based Interactive Map Pins & Accents
- **Red Acetate Multiply:** Class `.acetate` applying `background-color: #ff391e` with `mix-blend-mode: multiply`.

---

## 12. Audio & Soundscape UI System
- **Video Players:** Embedded HTML5 video elements with lazy load trigger (`.base-video--loaded`).

---

## 13. Modals, CTAs, & Form Mechanics
- **Newsletter Subscription Form:** Custom input field with electric white autofill text (`.form-input__el`).

---

## 14. Footer & Page Transition System
- **Rotated Card Page Transitions:** Page leaving tilts `rotate(4deg)` up, page entering slides from below at `rotate(-4deg)` with bezier `cubic-bezier(0.44, 0.14, 0.28, 1)`.

---

## 15. 📦 Intercepted Assets & Motion Physics Inventory
- **Payload Data:** `_payload.json` (1.62 MB data payload)
- **Nuxt JS Bundles:** `IULie7V-.js` (449 KB), `CT42niqD.js` (27.4 KB), `Dh27-AgX.js` (25.7 KB)
- **Extracted Stylesheets:** 34 CSS modules including `_slug_.BTfMiwzC.css`, `about.BR-agBBv.css`, `contact.BxOQ2nl8.css`

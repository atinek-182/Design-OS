# 🔬 Granular Web Architecture & Micro-Decision Master Reference: Sondaven (`sondaven.com/en`)

**Location:** `premium-frontend-experience-system/vault-references/sondaven-granularity-master.md`  
**Purpose:** Granular web design, UX psychology, animation physics, and source-code reference manual for building custom web applications.

---

## 📂 Raw Source Files & Extracted Code Registries

### 1. Mirrored Raw Source Files (`mirror/`)
- 🌐 **Raw Page HTML Markup:** [`mirror/index.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/index.html) (423,502 bytes)
- 🌐 **Raw English Page Copy:** [`mirror/en.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/en.html) (389,765 bytes)
- 📜 **Raw Inline Scripts Module:** [`inline-scripts.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/animations/inline-scripts.js)
- 🎨 **Raw Inline Stylesheet Module:** [`inline-styles.css`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/styles/inline-styles.css)
- 📂 **Raw JS Bundles Folder:** [`mirror/js/`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/js/)
  - Main App & GSAP Interactions Script: [`55210.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/js/55210.js)
- 📂 **Raw CSS Stylesheets Folder:** [`mirror/css/`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/css/)
- 📂 **Raw Fonts Folder:** [`mirror/fonts/`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/fonts/)

### 2. Raw Extracted Code Files (`code-extracts/`)
- 🧩 **React Header Component:** [`SondavenNav.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/components/SondavenNav.tsx)
- 🧩 **React Magnetic Button Component:** [`SondavenMagneticButton.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/components/SondavenMagneticButton.tsx)
- ⚡ **Raw GSAP & Lenis Physics Script:** [`gsap-scrollytelling.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/animations/gsap-scrollytelling.js)
- 🌐 **Raw WebGL GLSL Shader File:** [`terrain-cloud.glsl`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/shaders/terrain-cloud.glsl)

### 3. Raw Visual Media & Wireframe Assets (`assets/`)
- 📐 **Detailed Visual UI Wireframe:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/wireframe.html) | Image: [`wireframe.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/wireframe.png)
- 🎥 **Raw Browser Recording:** [`recording_sondaven.webp`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/recording_sondaven.webp)
- 📸 **5 Viewport Screenshots:**
  - Ultra-Wide Desktop (1920): [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/desktop_1920.png)
  - Laptop (1440): [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/laptop_1440.png)
  - Tablet Landscape (1024): [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/tablet_1024.png)
  - Tablet Portrait (768): [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/tablet_768.png)
  - Mobile (375): [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/mobile_375.png)

---

## 🛠️ 1. Head, Meta, SEO, & Favicon Specifications

### Head & OpenGraph Configuration
- **Viewport Tag:** `<meta content="width=device-width, initial-scale=1" name="viewport">`
- **Primary Page Title:** `Son Daven — Design Resort Hotel in Yaremche`
- **Meta Description:** `Investment project with guaranteed return.`
- **OpenGraph Image:** `https://cdn.prod.website-files.com/6940a0abd735a1e3a640d042/6999d59a988f9410fbe97cdd_og_en.webp` (Ratio: 1200x630, WebP format for optimal loading)
- **Twitter Card:** `summary_large_image`
- **Hreflang Tags:** Explicit canonical links for `x-default`, `uk` (`/ua`), and `en` (`/en`).

### Favicon & App Touch Icons
- **Shortcut Icon (32x32):** `6940a0abd735a1e3a640d076_fav_32x32.png`
- **Apple Touch Icon (256x256):** `6940a0abd735a1e3a640d077_fav_256x256.png`

### Schema.org JSON-LD Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Son Daven",
  "description": "Курортний дизайн-готель у Яремче з інвестиційними можливостями та гарантованою дохідністю.",
  "url": "/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "вул. І.Петраша, 6/3",
    "addressLocality": "Яремче",
    "addressRegion": "Івано-Франківська область",
    "postalCode": "78503",
    "addressCountry": "UA"
  },
  "telephone": "+380635101101",
  "email": "sale@sondaven.com",
  "image": [
    "https://cdn.prod.website-files.com/6940a0abd735a1e3a640d047/698ccd2d8f9544cd8353d22d_render-1.webp"
  ]
}
```

---

## 🚪 2. Preloader & Page Entrance Mechanics

### Preloader Structure
- Selector: `[data-preloader]`
- Percentage Counter: `[data-preloader-percent]` (`0%` -> `100%`)
- Visit Detection: Uses `sessionStorage.getItem("hasVisited")`. If true, triggers `animatePreloaederShort()`; if false, plays full intro `animatePreloaederIntro()`.

### Scroll-Locking Physics (Preventing Layout Shift)
When the preloader or modal opens, scroll is locked without page jump by calculating exact scrollbar width:
```javascript
function lockScroll() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
  document.body.style.paddingRight = "var(--scrollbar-width)";
  document.documentElement.style.overflow = "hidden";
  if (lenis) lenis.stop();
}

function unlockScroll() {
  document.documentElement.style.removeProperty("--scrollbar-width");
  document.body.style.paddingRight = "";
  document.documentElement.style.overflow = "";
  if (lenis) lenis.start();
}
```

---

## 🧭 3. Navigation Bar & Header System

### Fixed Header Mechanics
- Position: `fixed top-0 left-0 w-full z-50`
- Background Transition: Opacity fades from `0` to `1` when scroll position exceeds `1000px`:
  ```javascript
  if (scrollY > 1000) {
    gsap.to(headerBg, { opacity: 1, duration: 0.4, ease: "Out" });
  } else {
    gsap.to(headerBg, { opacity: 0, duration: 0.4, ease: "Out" });
  }
  ```
- Directional Hide/Reveal: Hides header (`yPercent: -100`) when scrolling down >40px, reveals header (`yPercent: 0`) when scrolling up or approaching page bottom.

### Nav Item Underline Animation
Links use CSS clip-path or pseudo-elements to animate underline hover states smoothly:
```css
[hover-nav-item] .underline {
  transition: clip-path 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  clip-path: inset(0 100% 0 0);
}
[hover-nav-item]:hover .underline {
  clip-path: inset(0 0 0 0);
}
```

---

## 🎯 4. Cursor & Pointer Physics

### Proximity Magnetic Drag Formula
Elements marked `[data-magnetic-strength]` calculate mouse position relative to container bounding box:
$$\Delta X = \left(\frac{x_{\text{client}} - \text{left}}{\text{width}} - 0.5\right) \cdot \frac{\text{strength}}{16}$$
$$\Delta Y = \left(\frac{y_{\text{client}} - \text{top}}{\text{height}} - 0.5\right) \cdot \frac{\text{strength}}{16}$$

```javascript
gsap.to(target, { x: deltaX + "em", y: deltaY + "em", ease: "power4.out", duration: 1.6 });
// Release spring easing on mouseleave:
gsap.to(target, { x: "0em", y: "0em", ease: "elastic.out(1, 0.3)", duration: 1.6, clearProps: "all" });
```

---

## 🔤 5. Typography & Text Rendering System

### Font Specs & Typography Pairing
- **Display Serif (`KTF Metro Roman`):**
  - Headings `H1`: `font-size: clamp(2.5rem, 6vw, 6rem); line-height: 0.95; letter-spacing: -0.02em;`
  - Headings `H2`: `font-size: clamp(2rem, 4vw, 4rem); line-height: 1.05;`
- **Body Sans (`KTF Metro Blueline`):**
  - Body Text: `font-size: clamp(0.95rem, 1.2vw, 1.15rem); line-height: 1.6; color: rgba(44, 40, 36, 0.85);`
  - Metadata Tags: `font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;`

### SplitText & Screen Reader Accessibility
To prevent screen readers from reading split character elements out of order, split line wrappers receive `aria="none"` attributes:
```javascript
const split = new SplitText(element, { type: "lines", linesClass: "split-line", aria: "none" });
```

---

## 🎨 6. OKLCH Design Tokens & Dynamic Theme Engine

### Color Tokens
```css
:root {
  --color-gold-accent: oklch(0.66 0.05 78.4); /* #a89474 */
  --color-charcoal-dark: oklch(0.24 0.01 64.2); /* #2c2824 */
  --color-ivory-light: oklch(0.96 0.01 78.4); /* #f6f4f0 */
  --color-bg-dark: oklch(0.20 0.01 64.2); /* #1d1a17 */
}

/* Theme Observer Classes */
.theme_on-light {
  background-color: var(--color-ivory-light);
  color: var(--color-charcoal-dark);
}
.theme_on-dark {
  background-color: var(--color-bg-dark);
  color: var(--color-ivory-light);
}
```

---

## 🏔️ 7. Hero Section Architecture

- **Structure:** Full-screen viewport hero (`height: 100vh`) with fixed WebGL canvas background rendering Carpathian mountain clouds.
- **Title Entrance:** Randomly staggered word reveal:
  ```javascript
  gsap.fromTo(words, 
    { yPercent: gsap.utils.wrap([-150, 75, -75, 150]), scale: 0, opacity: 0 },
    { yPercent: 0, scale: 1, opacity: 1, duration: 1.2, stagger: { each: 0.05, from: "random" }, ease: "power3.out" }
  );
  ```
- **Scroll Indicator:** Floating indicator pinned to bottom center with gentle Y-axis bounce animation (`yPercent: 0 -> 25%`, `yoyo: true`, `repeat: -1`).

---

## 📜 8. Scrollytelling & Parallax Image Engine

### Image Parallax Speed Formula
Images with `[parallax="img"]` shift vertically inside their overflow-hidden wrappers based on scroll depth:
```javascript
gsap.fromTo(img, { yPercent: -20 }, {
  yPercent: 20,
  ease: "none",
  scrollTrigger: { trigger: container, start: "top bottom", end: "bottom top", scrub: true }
});
```

### Text Character Highlighting Scrub
Text characters scrub from `opacity: 0.1` to `opacity: 1.0` as the element passes middle of viewport:
```javascript
gsap.timeline({
  scrollTrigger: { trigger: wrapper, start: "top 75%", end: "bottom 50%", scrub: true }
}).from(chars, { opacity: 0.1, duration: 0.4, stagger: 0.02, ease: "Out" });
```

---

## 🎛️ 9. Interactive UI Components & Cards

### Benefit Card Accordion (`hover-benefit-card`)
Hovering or clicking a benefit card expands its drawer with a clip-path transition and rotates icon 90 degrees:
```javascript
// Expand:
gsap.fromTo(infoDrawer, 
  { display: "block", clipPath: "inset(0% 0% 100% 0%)", scale: 1.1 },
  { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.2, ease: "Out" }
);
gsap.to(icon, { rotate: 90, duration: 0.4, ease: "InOut" });

// Collapse:
gsap.to(infoDrawer, { clipPath: "inset(100% 0% 0% 0%)", scale: 0.75, duration: 0.8, ease: "InOut" });
gsap.to(icon, { rotate: 0, duration: 0.4, ease: "InOut" });
```

### Tab Morph Transition (`initTabs`)
Tab content panels slide and rotate gracefully during tab switching:
```javascript
gsap.to(activeTab, { xPercent: -125, rotate: 15, duration: 1.2, ease: "InOut" });
gsap.to(incomingTab, { xPercent: 0, rotate: 0, duration: 1.2, ease: "InOut" });
```

---

## ☀️ 10. Drag-along-Path Summer/Winter SVG Slider

- Track Path: `<path data-path ...>`
- Drag Handle: `<circle data-active ...>`
- Mechanism: Monitors `mousemove` and `touchmove` events, calculating the nearest point on the SVG curve using `path.getPointAtLength(progress * totalLength)`.
- Trigger: If `progress < 0.4`, triggers Summer resort views; if `progress > 0.6`, triggers Winter snow views.

---

## 📍 11. Proximity Map Pins Math

Map pins scale up as cursor distance drops within `240px` radius:
```javascript
const dist = Math.sqrt(Math.pow(mouseX - pinX, 2) + Math.pow(mouseY - pinY, 2));
const maxRadius = 240;
const maxScale = 1.5;
const scale = dist < maxRadius ? maxScale - (dist / maxRadius) * (maxScale - 1) : 1;
gsap.to(pin, { scale: scale, duration: 1.2, ease: "Out" });
```

---

## 🔊 12. Audio & Soundscape UI System

- Streaming Source: `https://assets.sondaven.com/carpathian-whispers-hutsul-ambient.mp3`
- Preload: `none` to save initial bandwidth.
- Smooth Volume Fade: Fades volume from `0` to `0.25` on play, and `0.25` to `0` on mute.
- Equalizer Animation: Audio bars loop random Y-scaling (`scaleY`) when `.is-playing` class is active.

---

## 📋 13. Modals, CTAs, & Form Mechanics

### Form Submit Y-Axis Flip Card Animation
On Webflow form submit success, the form card flips 180 degrees along the Y-axis to reveal the success message:
```javascript
gsap.timeline()
  .fromTo(formEl, { rotateY: 0 }, { rotateY: -180, duration: 1.2, ease: "InOut" })
  .fromTo(successEl, { rotateY: 180 }, { rotateY: 0, duration: 1.2, ease: "InOut" }, "<");
```

### Input Field Regex Filtering
- Phone Input: Strips non-numeric characters: `value.replace(/[^\d+\-]/g, "")`
- Name Input: Strips digits and special symbols: `value.replace(/[\d!@#$%^&*()_+=\[\]{};:'"\\|,.<>/?~`]/g, "")`

---

## 🌐 14. Page Transitions & System Architecture

- Page Router: **Barba.js**
- Grid Cell Dither Transition: 20x12 grid of dither cells staggering scale transforms across the viewport (`stagger: {each: 0.03, from: "end", grid: [20, 12]}`).
- Performance Cleanup: Kills active GSAP ScrollTrigger instances and destroys WebGL scene managers on page exit (`leave` hook) to prevent memory leaks.

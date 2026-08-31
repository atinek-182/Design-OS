# 🔬 Master Deep-Dive Analysis: Sondaven (`sondaven.com/en`)

**Subject Site:** Sondaven — Design Resort Hotel & Luxury Investment Project in Yaremche  
**URL:** `https://sondaven.com/en`  
**Ingestion Date:** 2026-07-23  
**Analysis Scope:** Visual Design, UI/UX Psychology, Spatial Layout, GSAP Animation Engine, WebGL Shaders, Audio-Visual Micro-Interactions, and Code Architectures.

---

## 🏛️ 1. Visual Aesthetics & Spatial Philosophy

### Luxury Resort Architectural Minimalist Vibe
Sondaven's visual identity bridges high-end modern hospitality architecture with the organic, mystical atmosphere of the Ukrainian Carpathian mountains. 

- **Breathing Space & Vertical Rhythm:** Sections utilize generous vertical padding (`120px` to `240px` on desktop), establishing an unhurried, editorial pacing. The design communicates luxury through stillness rather than density.
- **Editorial Typography Scale:** Ultra-large serif titles paired with minimal monospaced/sans metadata tags recreate the feeling of a fine-art architectural monograph or physical luxury print magazine.

### Dynamic Color Palette & OKLCH Theme Engine
The site employs a 3-tier color system designed to shift dynamically as the user scrolls through dark nighttime views and warm sunlight narrative slides.

- **Primary Accent / Gold Bronze:** `oklch(0.66 0.05 78.4)` / `#a89474`  
  *Psychology:* Evokes natural unpolished brass, aged timber, and warm sunlight filtering through mountain pine trees.
- **Dark Charcoal / Base Neutral:** `oklch(0.24 0.01 64.2)` / `#2c2824`  
  *Psychology:* Represents Carpathian granite stone, evening shadows, and grounding luxury.
- **Subtle Warm Light Tint:** `oklch(0.96 0.01 78.4)` / `#f6f4f0`  
  *Psychology:* Clean linen, morning mist, and tactile paper stock.

#### Theme Switching Engine Code Implementation
The website monitors scroll position relative to container section background attributes (`[bg="color"]`, `[bg="light"]`, `[bg="dark"]`) using GSAP `ScrollTrigger`:

```javascript
function initThemeChange() {
  function applyTheme(targetSection, activeClass, removeClasses) {
    const navElements = document.querySelectorAll("[theme]");
    navElements.forEach((nav) => {
      const h = nav.offsetHeight;
      const top = nav.getBoundingClientRect().top;
      ScrollTrigger.create({
        trigger: targetSection,
        start: () => `top top+=${top + h / 2}`,
        end: () => `bottom top+=${top + h / 2}`,
        onEnter: () => {
          nav.classList.add(activeClass);
          nav.classList.remove(...removeClasses);
        },
        onEnterBack: () => {
          nav.classList.add(activeClass);
          nav.classList.remove(...removeClasses);
        },
      });
    });
  }

  document.querySelectorAll('[bg="light"]').forEach((sec) => {
    applyTheme(sec, "theme_on-light", ["theme_on-dark"]);
  });
  document.querySelectorAll('[bg="dark"]').forEach((sec) => {
    applyTheme(sec, "theme_on-dark", ["theme_on-light"]);
  });
}
```

---

## 🔤 2. Typography System & Layout Grid Mechanics

### Typographic Hierarchy & Font Pairing
- **Display Heading Font:** `KTF Metro Roman`
  - High-contrast editorial serif with extended vertical ascenders and delicate bracketed serifs.
  - Used exclusively for titles, section headers, and scrollytelling statements.
- **Body & UI Font:** `KTF Metro Blueline`
  - High-legibility geometric sans-serif with subtle calligraphic character terminals.
  - Used for body paragraphs, numerical indices, navigation labels, and modal forms.

### Layout Grid Structure
- **12-Column Fluid Grid:** Margins set to `4vw` desktop, `6vw` mobile.
- **Asymmetric Split Layouts:** Left column carries sticky 3D preview containers or section titles (`w-5/12`), while right column carries scrolling narrative text and financial spec cards (`w-7/12`).
- **Index Counters:** Numbers are formatted as `01`, `02`, `03` using automated index script formatting (`initIndexCounter`).

---

## ⚡ 3. Motion Physics & GSAP Animation Stack

### Core Animation Libraries
- **GSAP 3.13.0** + **ScrollTrigger** + **SplitText** + **Flip** + **Lenis 1.3.15** + **Barba.js**

### Lenis Smooth Scroll Easing Math
Scroll inertia is driven by custom exponential decay easing:
$$\text{ease}(t) = \min(1, 1.001 - 2^{-10t})$$

```javascript
lenis = new Lenis({
  wrapper: window,
  duration: 1.2,
  smoothWheel: true,
  touchMultiplier: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  infinite: false,
});
```

### Kinetic Text Reveals (SplitText + Stagger)
Heading words and paragraph lines animate into view on scroll with subtle scale and y-axis translation:

```javascript
// Heading Words Reveal
gsap.fromTo(
  splitHeading.words,
  { yPercent: gsap.utils.wrap([-150, 75, -75, 150]), scale: 0, opacity: 0 },
  {
    yPercent: 0,
    scale: 1,
    opacity: 1,
    duration: 1.2,
    stagger: { each: 0.05, from: "random" },
    ease: "power3.out",
  }
);

// Paragraph Lines Reveal
gsap.fromTo(
  splitParagraph.lines,
  { yPercent: 250, opacity: 0 },
  {
    yPercent: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.05,
    ease: "power3.out",
  }
);
```

### Scroll Text Highlight Scrubbing
Characters illuminate from 10% opacity to 100% opacity as the user scrolls through key narrative blocks:

```javascript
const chars = new SplitText(targetEl, { type: "chars" }).chars;
gsap.timeline({
  scrollTrigger: {
    trigger: wrapperEl,
    start: "top 75%",
    end: "bottom 50%",
    scrub: true,
  },
}).from(chars, {
  opacity: 0.1,
  duration: 0.4,
  stagger: 0.02,
  ease: "power1.out",
});
```

### Elastic Magnetic Button Hover Physics
Buttons feature a dual-layer magnetic pull. The outer container moves toward the cursor with strength $S_1$, while inner text targets move with strength $S_2$:

```javascript
function initMagneticEffect() {
  const magneticItems = document.querySelectorAll("[data-magnetic-strength]");
  magneticItems.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const strength = parseFloat(btn.getAttribute("data-magnetic-strength")) || 25;
      const x = ((e.clientX - rect.left) / btn.offsetWidth - 0.5) * (strength / 16);
      const y = ((e.clientY - rect.top) / btn.offsetHeight - 0.5) * (strength / 16);

      gsap.to(btn, { x: `${x}em`, y: `${y}em`, rotate: "0.001deg", ease: "power4.out", duration: 1.6 });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: "0em", y: "0em", ease: "elastic.out(1, 0.3)", duration: 1.6, clearProps: "all" });
    });
  });
}
```

---

## 🌐 4. WebGL Shaders & Interactive Systems

### 16 WebGL Canvas Instances
Sondaven uses a centralized scene manager (`initSceneManager()`) to coordinate 16 WebGL canvas layers throughout the site:
- **Hero & Prologue:** Ambient cloud mesh with Simplex 3D noise vertex displacement.
- **Seasons & Facilities:** Heightmap terrain wireframes that shift camera altitude on scroll.
- **Finances & FAQ:** Ambient light particles that react to cursor velocity.

### Interactive Drag-along-Path SVG Switcher (Summer / Winter)
An interactive SVG slider where users grab a handle (`[data-active]`) and drag it along a bezier SVG curve (`[data-path]`) to switch between resort seasons:

```javascript
function initSummerWinterSwitcher() {
  const path = document.querySelector("[data-path]");
  const handle = document.querySelector("[data-active]");
  const pathLength = path.getTotalLength();

  function getPoint(progress) {
    return path.getPointAtLength(progress * pathLength);
  }

  function updateHandle(progress) {
    const pt = getPoint(progress);
    gsap.set(handle, { cx: pt.x, cy: pt.y });
    if (progress < 0.4) triggerSummer();
    else if (progress > 0.6) triggerWinter();
  }
}
```

### Proximity-Based Interactive Map Pins
Map pins scale dynamically based on cursor Euclidean distance ($d$):
$$d = \sqrt{(x_{\text{cursor}} - x_{\text{pin}})^2 + (y_{\text{cursor}} - y_{\text{pin}})^2}$$

```javascript
const dist = Math.sqrt(Math.pow(mouseX - pinX, 2) + Math.pow(mouseY - pinY, 2));
const scale = dist < maxRadius ? maxScale - (dist / maxRadius) * (maxScale - 1) : 1;
gsap.to(pin, { scale: scale, duration: 0.8, ease: "power2.out" });
```

---

## 🧠 5. UX Psychology & Conversion Design

1. **Investment Asset Framing:** Instead of booking a room, the site frames hotel suites as yield-generating real estate assets (`guaranteed return`, `Carpathian investment`).
2. **Ambient Soundscape Immersion:** Includes an ambient sound toggle streaming *Carpathian Whispers (Hutsul Ambient)* (`https://assets.sondaven.com/carpathian-whispers-hutsul-ambient.mp3`), using an interactive animated audio equalizer.
3. **Barba.js Dither Page Transitions:** Navigating pages triggers a 20x12 dither grid cell morph (`stagger: {each: 0.03, from: "end", grid: [20, 12]}`), preventing jarring page reloads and reinforcing high-end software craftsmanship.

---

## 📌 Master Reference Integration Summary

All code implementations, GSAP easing functions, WebGL GLSL shaders, and design tokens have been saved into:
- 📄 [`site-dna.md`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/site-dna.md)
- 🧩 [`SondavenNav.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/components/SondavenNav.tsx)
- 🧩 [`SondavenMagneticButton.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/components/SondavenMagneticButton.tsx)
- ⚡ [`gsap-scrollytelling.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/animations/gsap-scrollytelling.js)
- 🌐 [`terrain-cloud.glsl`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/shaders/terrain-cloud.glsl)

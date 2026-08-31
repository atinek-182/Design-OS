# 🔬 Ultra-Exhaustive Architectural & Design Analysis: Grids by Obys Agency

**Target Site:** Grids by Obys Agency (`https://grids.obys.agency/`)  
**Design Studio:** Obys Agency (`https://obys.agency/`)  
**Accolades:** Awwwards **Site of the Day (September 1, 2021)**, Awwwards **Site of the Month (September 2021)**, Developer Award  
**Series:** Part of the Obys *Design Education Series (DES)*  
**Tech Stack:** Custom JavaScript Grid Engine, Readymag Autolayout Core, GSAP ScrollTrigger, Lenis Smooth Scroll, WebGL Shaders (`grid-distortion.glsl`), Google Fonts (`Mr Bedfort`, `Nobel`, `Georgia`)  

---

## 1. Executive Summary & Design Education Series (DES)

Created by the world-renowned Ukrainian studio **Obys Agency**, *Grids by Obys Agency* is an interactive masterclass in web layout geometry. Part of Obys' acclaimed *Design Education Series (DES)* (alongside *Typography Principles* and *Color Combinations*), the site demystifies professional grid systems by using unusual, story-driven web interactions.

The platform allows users to toggle active layout grids on and off in real-time, inspect mathematical margin/gutter calculations, and trigger an interactive "Crazy Mode" that distorts layout boundaries to demonstrate how grids anchor visual elements.

---

## 2. The 4 Grid Canons & Mathematical Formulations

```
┌───────────────────────────────────────────┬───────────────────────────────────────────┐
│ 1. COLUMN GRID SYSTEM                     │ 2. VAN DE GRAAFF GOLDEN CANON             │
│ • Desktop (>1440px): 12 Cols | 80px | 20px│ • Medieval Manuscript Ratio (2:3:4:6)     │
│ • Laptop (1024-1440px): 10 Cols | 60px | 20px│ • Outer Margins: [Top 2x, Outer 3x,       │
│ • Mobile (<768px): 8 Cols | 30px | 20px   │   Bottom 4x, Inner 6x]                    │
├───────────────────────────────────────────┼───────────────────────────────────────────┤
│ 3. HORIZONTAL BASELINE RHYTHM             │ 4. RECTANGULAR / MODULAR GRID             │
│ • Baseline Unit = Font Size × Line Height │ • Matrix of uniform rectangular cells     │
│ • Vertical Spacing = N × 24px (24, 48, 72)│ • Marginless/Gutterless full-bleed grids  │
└───────────────────────────────────────────┴───────────────────────────────────────────┘
```

### 1. Column Grid Canon (12 / 10 / 8 Columns)
- **Desktop (`>1440px`):** 12 Columns, `80px` outer margins, `20px` gutters.
- **Laptop (`1024px - 1440px`):** 10 Columns, `60px` outer margins, `20px` gutters.
- **Mobile (`<768px`):** 8 Columns, `30px` outer margins, `20px` gutters.
- **Sub-Column Splitting Rule:** Split primary columns into micro-columns (e.g. 8-column into 16 micro-columns) when placing offset sub-components.

### 2. Van De Graaff Canon (Golden Canon)
- Manuscript page partitioning ratio ($2:3:4:6$).
- Diagonal intersection lines ("Power Lines") draw across the viewport to locate primary anchor points for headlines and editorial media.

### 3. Horizontal Baseline Rhythm
- **Formula:** 
  $$\text{Baseline Unit} = \text{Font Size} \times \text{Line Height}$$
  *(e.g., $16\text{px} \times 1.5 = 24\text{px}$ baseline unit)*
- All vertical margins, section paddings, and display font sizes lock to integer multiples of $24\text{px}$.

### 4. Rectangular / Modular Grid
- Uniform rectangular grid cells supporting gutterless, full-bleed editorial layouts.

---

## 3. WebGL Grid Distortion Shader (`grid-distortion.glsl`)

When cursor proximity reaches grid lines, a WebGL fragment shader produces a subtle wave ripple across the grid guides:

```glsl
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uHoverProgress;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    float dist = distance(uv, uMouse);
    float wave = sin(dist * 20.0 - uTime * 3.0) * 0.015 * uHoverProgress;
    
    vec2 distortedUv = uv + vec2(wave, wave);
    vec4 color = texture2D(uTexture, distortedUv);
    
    // Warm Gold Grid Line Accent (#E6C86E)
    vec3 goldColor = vec3(0.90, 0.78, 0.43);
    gl_FragColor = vec4(mix(color.rgb, goldColor, 0.2), color.a);
}
```

---

## 4. Visual Palette Tokens & Theme Options

- **Onyx Canvas:** `#111113` / `oklch(0.12 0.005 240)`
- **Warm Gold Accent:** `#E6C86E` / `oklch(0.82 0.12 85)`
- **Pure White:** `#FFFFFF` / `oklch(1.0 0 0)`
- **Guide Line Red:** `#FF4444` / `oklch(0.60 0.22 25)`

---

## 5. Code Extracts & Vault Registry

- 🧩 **Interactive Grid Visualizer:** [`GridCanvas.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/components/GridCanvas.tsx)
- 🧩 **Header Navigation Component:** [`ObysHeaderNav.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/components/ObysHeaderNav.tsx)
- 🧩 **Grid Showcase Card Component:** [`GridSystemCard.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/components/GridSystemCard.tsx)
- ⚡ **GSAP & Lenis Scroll Physics:** [`grid-scroll-physics.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/animations/grid-scroll-physics.js)
- 🎨 **CSS Tokens:** [`obys-grids-tokens.css`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/styles/obys-grids-tokens.css)
- 🌐 **WebGL Distortion Shader:** [`grid-distortion.glsl`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/shaders/grid-distortion.glsl)
- 📖 **Deep Research Manual:** [`grids-obys-agency-deep-research.md`](file:///d:/AI-OS/premium-frontend-experience-system/vault-references/grids-obys-agency-deep-research.md)
- 📐 **Visual Wireframe Blueprint:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/wireframe.html)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/mobile_375.png)

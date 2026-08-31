# 🧬 Site DNA Analysis: Grids by Obys Agency

**Target Site:** Grids by Obys Agency (`https://grids.obys.agency/`)  
**Studio:** Obys Agency (`https://obys.agency/`)  
**Archetype:** Educational Grid Engine / Architectural Typography Showcase  
**Primary Tech Stack:** Readymag Engine, GSAP ScrollTrigger, Custom WebGL Canvas, Lenis Smooth Scroll  

---

## 1. Core Essence & Archetype
Grids by Obys Agency is a masterclass in educational web storytelling. Built to demystify grid systems for digital designers, it blends classical typographic canons (such as the Van de Graaff canon) with interactive HTML5 canvas tools and 12-column digital layout engines. The site transforms passive reading into an active, tactile learning experience.

---

## 2. Visual & Design System Anatomy
- **Palette (OKLCH & Hex):**
  - Background Onyx: `oklch(0.12 0.005 240)` (`#111113`)
  - Elevated Card: `oklch(0.18 0.008 240)` (`#191a1d`)
  - Accent Gold: `oklch(0.82 0.15 85)` (`#e6c86e`)
  - Editorial Red: `oklch(0.62 0.22 25)` (`#e63946`)
  - Text Primary: `oklch(0.96 0.005 90)` (`#f7f7f5`)
- **Typography Pairing:**
  - Serif: `Georgia` (Used for italicized narrative headlines and storytelling)
  - Sans-Serif: `Nobel` / `Inter` (Used for UI labels and crisp grid specs)
  - Monospace: `Courier New` (Used for technical parameters, chapter counts, and ratios)

---

## 3. Motion & Micro-Interaction Mechanics
- **Lenis Inertia Scroll:** Smooth exponential scroll damping (`duration: 1.2`, `easing: power4.out`).
- **Interactive Grid Visualizer:** Real-time column adjustment slider (2 to 24 columns) with mouse-hover column highlighting and SVG guide lines.
- **Van de Graaff Canon Animator:** Diagonal page margin construction lines scrubbed via GSAP ScrollTrigger.

---

## 4. Component & Code Architecture
- 🧩 **Interactive Grid Visualizer Component:** [`GridCanvas.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/components/GridCanvas.tsx)
- 🧩 **Header & Navigation System:** [`ObysHeaderNav.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/components/ObysHeaderNav.tsx)
- 🧩 **Grid Canon Showcase Card:** [`GridSystemCard.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/components/GridSystemCard.tsx)
- ⚡ **GSAP Scroll & Motion Script:** [`grid-scroll-physics.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/animations/grid-scroll-physics.js)
- 🎨 **OKLCH Design Tokens:** [`obys-grids-tokens.css`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/styles/obys-grids-tokens.css)
- 🌐 **WebGL Distortion Shader:** [`grid-distortion.glsl`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/code-extracts/shaders/grid-distortion.glsl)

---

## 5. Visual Wireframe & Assets
- 📐 **Visual Wireframe Blueprint HTML:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/wireframe.html)
- 📸 **Visual Wireframe Screenshot:** [`wireframe.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/wireframe.png)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/grids-obys-agency/assets/mobile_375.png)

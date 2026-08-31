# 🔬 Ultra-Exhaustive Architectural & Design Analysis: Oryzo AI

**Target Site:** Oryzo AI (`https://oryzo.ai/`)  
**Studio:** Lusion (`https://lusion.co/`)  
**Accolades:** Awwwards **Site of the Day (April 13, 2026)**, Awwwards **Site of the Month (April 2026)**, Awwwards **Developer Award**  
**Tech Stack:** Custom Three.js (r178 Lusion build), 3D Gaussian Splatting (`SplatsWorker-DSMxtdkh.js`), GSAP ScrollTrigger scrollytelling state machine, Vite, WebGL Shaders, Tailwind v4 tokens  

---

## 1. Executive Summary & Satirical Design Philosophy

Created by the world-class UK creative technology studio **Lusion**, *Oryzo AI* is a satirical web masterpiece that parodies high-tech luxury hardware launch websites (Apple, Humane AI Pin, Rabbit R1). The website markets a simple, everyday $1 cork coaster as an ultra-advanced, hardware-accelerated AI artifact capable of "detecting beverages, insulating heat, and absorbing liquid spillages."

Through cinematic 3D Gaussian Splatting, 60,582px scroll-driven camera trajectories, and hyper-realistic lighting, Lusion demonstrates how web technology and visual storytelling can transform a mundane physical object into a mesmerizing interactive art piece.

---

## 2. 3D Engine Architecture & Gaussian Splatting Mechanics

```
┌───────────────────────────────────────────────────────────────┐
│ MAIN THREE.JS THREAD (r178 Lusion Build)                     │
│ • Handles WebGL Render Loop & Post-Processing Pipeline        │
│ • Manages Camera Vectors (x, y, z, rx, ry, rz)               │
├───────────────────────────────────────────────────────────────┤
│ OFF-THREAD WORKER (SplatsWorker-DSMxtdkh.js)                 │
│ • Decodes Point-Cloud Splat Binary Datasets                   │
│ • Sorts 3D Gaussians by View Depth @ 60 FPS                   │
│ • Streams Geometry Arrays to GPU Buffers                      │
└───────────────────────────────────────────────────────────────┘
```

### Worker-Decoded Point-Cloud Splats
Traditional 3D websites load heavy GLTF/OBJ polygon meshes, which suffer from geometry bloat and shading bottlenecks. Oryzo AI utilizes **3D Gaussian Splatting**:
- Point-cloud splats are decoded off-thread in `SplatsWorker-DSMxtdkh.js`.
- The worker dynamically calculates depth sorting for millions of Gaussian splat particles, feeding them directly into WebGL vertex buffers without locking the main browser UI thread.

---

## 3. Scroll Physics & 7-Stage State Machine

The website sets a total DOM scroll container height of `60582.1px`, mapping normalized scroll progress ($0.0 \rightarrow 1.0$) to 7 camera keyframe stages via GSAP ScrollTrigger:

$$\text{Normalized Progress } (P) = \frac{\text{window.scrollY}}{\text{totalScrollHeight} - \text{window.innerHeight}}$$

1. **Hero Stage ($0.0 \rightarrow 0.15$):** High-angle isometric camera view of the floating cork coaster.
2. **AI Teaser Stage ($0.15 \rightarrow 0.30$):** Deep zoom into the granular cork surface texture.
3. **Wearable Stage ($0.30 \rightarrow 0.55$):** The coaster translates horizontally alongside floating editorial feature cards.
4. **Thickness Lift Stage ($0.55 \rightarrow 0.75$):** Camera rotates $90^\circ$ to highlight the 1-coaster thickness profile.
5. **Print Editorial Stage ($0.75 \rightarrow 0.90$):** The 3D model embeds cleanly into a printed magazine mockup layout.
6. **Hardware Spec Stage ($0.90 \rightarrow 0.97$):** Exploded component views detailing "cork particle density".
7. **Purchase CTA Stage ($0.97 \rightarrow 1.00$):** Full-bleed glowing orange purchase button reveal (`#FF5C00`).

---

## 4. Visual Identity & Color Palette Tokens

- **Pitch Black Space (`#050505`):** Background canvas heightening 3D light reflections.
- **Electric Hardware Orange (`#FF5C00` / `oklch(0.65 0.24 35)`):** Accent color highlighting key metrics, CTA buttons, and interactive hover borders.
- **Cork Ochre (`#C49A6C`):** Organic warm tone extracted from the physical 3D splat texture.
- **Pure White (`#FFFFFF`):** High-legibility technical typography.

---

## 5. Micro-Interactions & Accessible SplitText

- **Accessible Header Splits:** Headlines are wrapped in split-character containers `<div aria-hidden="true" style="overflow: clip;">` for staggered GSAP text reveals, while preserving accessibility via top-level `aria-label` tags.
- **Interactive Cursor Hand Target:** A custom vector hand icon (`#hand-tmpl`) follows the cursor using magnetic spring damping:
  $$\text{Pos}_{\text{next}} = \text{Pos}_{\text{current}} + (\text{Mouse} - \text{Pos}_{\text{current}}) \times 0.12$$
- **Satirical Micro-Copy:** Includes fake legal disclaimers (`* Created in Adobe Illustrator`), magazine issue numbers (`ISSUE NO. 00124`), and hardware barcode graphics.

---

## 6. Code Extracts & Vault Registry

- 🧩 **Interactive 3D Stage Component:** [`Hero3DCanvas.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/code-extracts/components/Hero3DCanvas.tsx)
- 🧩 **Interactive Magazine Component:** [`MagazineWidget.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/code-extracts/components/MagazineWidget.tsx)
- ⚡ **Gaussian Splats Setup Script:** [`gaussian-splats-setup.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/code-extracts/animations/gaussian-splats-setup.js)
- 🎨 **CSS Design Tokens:** [`oryzo-tokens.css`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/code-extracts/styles/oryzo-tokens.css)

- 🌐 **Splat Worker Decoder:** [`SplatsWorker-DSMxtdkh.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/mirror/js/SplatsWorker-DSMxtdkh.js)
- 📐 **Visual Wireframe Blueprint:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/wireframe.html)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/oryzo-ai/assets/mobile_375.png)

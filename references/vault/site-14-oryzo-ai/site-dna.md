# Oryzo AI — 5-Layer Site DNA Report

> **URL:** [https://oryzo.ai/](https://oryzo.ai/)  
> **Agency / Creator:** Lusion ([https://lusion.co](https://lusion.co))  
> **Category:** 3D WebGL / Gaussian Splatting / Satirical AI Physical Product Showcase  
> **Date Ingested:** 2026-07-23  

---

## 🧬 1. Visual Identity & Atmosphere

- **Theme & Palette:** Sleek Pitch Black (`#000000`) paired with Warm Natural Cream (`#FFEDD6`), Warm Cork Amber (`#D4A373`), and Neon Satirical Orange (`#F97316`).
- **Typography:** Custom clean serif headers, Space Mono utility badges, fluid `clamp()` line sizes with character-level SplitText wrappers.
- **Vibe & Aesthetic:** Unapologetically absurd yet hyper-sophisticated. Satirizes modern tech hypes by treating a simple cork coaster with the reverence of a revolutionary AI hardware release.

---

## 🛠️ 2. Architectural Tech Stack

- **Framework & Build:** Astro static site compiler (`_astro/index.TL6TuoJb.css`, `_astro/hoisted.CRsATKbF.js`).
- **3D Engine:** Three.js r178 (custom Lusion fork) rendering 3D Gaussian Splats via dedicated Web Worker (`SplatsWorker-DSMxtdkh.js`).
- **Animation & Physics:** GSAP (ScrollTrigger scrubber driving 60,582px scroll container), Lenis smooth inertia scroll wrapper.
- **Media System:** WebP video loops (`yoga.webp`, `bite.webp`), SVG symbol spray mapping.

---

## 🎯 3. Standout Features & Interaction Mechanics

1. **60,000px Scrollytelling Canvas:** A massive vertical scroll length that transforms a 3D scan of the cork coaster across multiple environments (hero, wristband, magazine cover, coaster stack).
2. **Interactive 3D Gaussian Splatting:** Photorealistic real-world product capture rendered at 60 FPS in WebGL without heavy 3D mesh overhead.
3. **Satirical AI Prompt Widget:** Interactive magazine cover featuring a working prompt input (`"Hey @oryzo, can you put on a bikini?"`) with active button mechanics.
4. **Dynamic Cursor Physics:** Interactive SVG hand icon (`#hand-tmpl`) tracking mouse proximity with spring inertia.

---

## 📁 4. Mirroring & Asset Index

- **Source Code Mirror:** `mirror/index.html`
- **JS Bundles:** `mirror/js/hoisted.CRsATKbF.js`, `mirror/js/player.module.js`, `mirror/js/SplatsWorker-DSMxtdkh.js`
- **CSS Stylesheets:** `mirror/css/index.TL6TuoJb.css`, `mirror/css/player.css`
- **Extracted React Components:** `code-extracts/components/Hero3DCanvas.tsx`, `code-extracts/components/MagazineWidget.tsx`
- **Extracted Animations:** `code-extracts/animations/gaussian-splats-setup.js`
- **Extracted CSS Tokens:** `code-extracts/styles/oryzo-tokens.css`

---

## 📐 5. Key Design Principles & Takeaways

- **Subvert Product Marketing Tropes:** Contrast minimalist luxury UI with absurd copy ("The world's most unnecessarily sophisticated cork coaster").
- **Performant 3D Scans:** Use Gaussian Splat decoding in Web Workers to load high-detail 3D product models instantly.
- **Linear Scroll Canvas Scrubber:** Drive WebGL camera state machine directly from continuous scroll progress.

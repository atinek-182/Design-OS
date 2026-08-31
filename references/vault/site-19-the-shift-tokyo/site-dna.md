# 🧬 Site DNA Analysis: The Shift Tokyo

**Target Site:** The Shift Tokyo (`https://theshift.tokyo/en/`)  
**Studio:** The Shift Creative Collective (Tokyo)  
**Archetype:** Japanese Experimental Digital Agency & Creative Collective  
**Primary Tech Stack:** WordPress custom runtime, Custom WebGL GLSL Shaders, GSAP ScrollTrigger, SplitText, YakuHanJP / Everett / Lausanne Fonts  

---

## 1. Core Essence & Archetype
The Shift Tokyo is a Tokyo-based creative collective building future-inspired digital products, spaces, and brand experiences. The site embodies avant-garde Japanese digital minimalism: pitch-black canvases (`#0b0b0b`), sharp typographic hierarchies, real-time Tokyo timezone clock indicators, and liquid WebGL hover distortion shaders.

---

## 2. Visual & Design System Anatomy
- **Palette (OKLCH & Hex):**
  - Dark Theme Background: `oklch(0.10 0.005 240)` (`#0b0b0b`)
  - Light Theme Background: `oklch(0.97 0.005 90)` (`#f5f5f5`)
  - Primary Accent: `oklch(0.64 0.23 24)` (`#FE4249` Electric Coral)
  - Card Canvas: `oklch(0.14 0.008 240)` (`#141414`)
- **Typography Pairing:**
  - Headlines: `Everett` (Light 100 & Regular 400)
  - Secondary Editorial: `Lausanne` (150)
  - Japanese Glyphs: `YakuHanJP`
  - Gallery Serif: `Gallery`

---

## 3. Motion & Micro-Interaction Mechanics
- **Live Tokyo Timezone Clock:** Dynamic JST clock (`東京 18:42:09 JST`) displaying real-time Tokyo time.
- **SplitText Character Stagger:** Title text reveals letter-by-letter on page load and section entry.
- **WebGL Image Liquid Hover:** Custom GLSL fragment shader (`tokyo-glsl-distortion.glsl`) applying liquid wave warps to project cards.

---

## 4. Component & Code Architecture
- 🧩 **Header & Live Tokyo Clock:** [`ShiftTokyoNav.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/components/ShiftTokyoNav.tsx)
- 🧩 **Tokyo Live Clock Widget:** [`TokyoClockWidget.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/components/TokyoClockWidget.tsx)
- 🧩 **Featured Project Card:** [`FeaturedProjectCard.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/components/FeaturedProjectCard.tsx)
- ⚡ **GSAP Kinetic Animation Script:** [`shift-kinetic-scroll.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/animations/shift-kinetic-scroll.js)
- 🎨 **CSS Tokens & Design System:** [`the-shift-tokens.css`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/styles/the-shift-tokens.css)
- 🌐 **WebGL Distortion Shader:** [`tokyo-glsl-distortion.glsl`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/code-extracts/shaders/tokyo-glsl-distortion.glsl)

---

## 5. Visual Wireframe & Assets
- 📐 **Visual Wireframe Blueprint HTML:** [`wireframe.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/wireframe.html)
- 📸 **Visual Wireframe Screenshot:** [`wireframe.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/wireframe.png)
- 📸 **5 Viewport Screenshots:** [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/desktop_1920.png), [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/laptop_1440.png), [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/tablet_1024.png), [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/tablet_768.png), [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/the-shift-tokyo/assets/mobile_375.png)

# 🧬 Site DNA Analysis: Sondaven (`sondaven.com/en`) — Ultimate Full-Code Extraction

**Source URL:** `https://sondaven.com/en`  
**Ingestion Date:** 2026-07-23  
**Status:** Full Source Mirrored & Code Extracted  

---

## 📂 Source Code & Extracted Code Registries

### 1. Mirrored Site Code
- **Full Page HTML Source:** [`mirror/index.html`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/index.html) (423,502 bytes)
- **Inline JavaScript Scripts:** [`code-extracts/animations/inline-scripts.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/animations/inline-scripts.js)
- **Inline CSS Stylesheets:** [`code-extracts/styles/inline-styles.css`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/styles/inline-styles.css)
- **Mirrored CSS Directory:** [`mirror/css/`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/css/)
- **Mirrored JS Directory:** [`mirror/js/`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/js/)
- **Mirrored Fonts Directory:** [`mirror/fonts/`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/mirror/fonts/)

### 2. Extracted React Components (.tsx)
- 🧩 **Header & Theme Switcher:** [`SondavenNav.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/components/SondavenNav.tsx)
- 🧩 **Elastic Magnetic Button:** [`SondavenMagneticButton.tsx`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/components/SondavenMagneticButton.tsx)

### 3. Extracted Animations & Motion Physics (.js)
- ⚡ **GSAP Timelines & Lenis Curves:** [`gsap-scrollytelling.js`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/animations/gsap-scrollytelling.js)

### 4. Extracted WebGL & Shaders (.glsl)
- 🌐 **GLSL Terrain Cloud Fragment Shader:** [`terrain-cloud.glsl`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/code-extracts/shaders/terrain-cloud.glsl)

### 5. Media & Visual References
- 🎥 **Browser Recording:** [`recording_sondaven.webp`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/recording_sondaven.webp)
- 📸 **Viewport Screenshots:**
  - Ultra-Wide Desktop (1920): [`desktop_1920.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/desktop_1920.png)
  - Laptop (1440): [`laptop_1440.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/laptop_1440.png)
  - Tablet Landscape (1024): [`tablet_1024.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/tablet_1024.png)
  - Tablet Portrait (768): [`tablet_768.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/tablet_768.png)
  - Mobile (375): [`mobile_375.png`](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/sondaven/assets/mobile_375.png)

---

## 🎨 5-Layer Site DNA Breakdown & Extracted Code Snippets

### Layer 1: Design Tokens
```css
/* Color Palette Tokens (OKLCH & Hex Mappings) */
--color-primary-accent: oklch(0.66 0.05 78.4); /* #a89474 (Gold Bronze) */
--color-dark-neutral:   oklch(0.24 0.01 64.2); /* #2c2824 (Dark Charcoal) */
--color-light-tint:     oklch(0.96 0.01 78.4); /* #f6f4f0 (Warm Light) */
--color-dark-bg:        oklch(0.20 0.01 64.2); /* #1d1a17 (Dark Background) */

/* Typography Fonts */
--font-heading: 'KTF Metro Roman', Times, serif;
--font-body:    'KTF Metro Blueline', Arial, sans-serif;
```

### Layer 2: Extracted GSAP & Lenis Smooth Scroll Physics
```javascript
// Lenis Smooth Scroll Math Vector
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// Magnetic Spring Physics
gsap.to(target, {
  x: deltaX * strength,
  y: deltaY * strength,
  ease: "elastic.out(1, 0.3)",
  duration: 1.6
});
```

### Layer 3: WebGL Fragment Shader Excerpt
```glsl
uniform float uTime;
uniform float uScrollProgress;
varying vec2 vUv;

void main() {
  float noiseVal = snoise(vec3(vUv * 3.0, uTime * 0.2 + uScrollProgress * 2.0));
  vec3 color = mix(vec3(0.11, 0.10, 0.09), vec3(0.66, 0.58, 0.45), noiseVal * 0.5 + 0.5);
  gl_FragColor = vec4(color, 0.85);
}
```

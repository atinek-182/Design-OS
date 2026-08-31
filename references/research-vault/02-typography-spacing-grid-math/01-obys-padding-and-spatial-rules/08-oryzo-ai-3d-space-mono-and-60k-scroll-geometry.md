---
title: Oryzo AI — Three.js 3D Space Mono & 60k Scroll Height Geometry
domain: reference
summary: Technical typography scale combining Three.js Inter.json 3D font definition with Space Mono and 60,582px scroll body
  height geometry.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Oryzo AI — Three.js 3D Space Mono & 60k Scroll Height Geometry
- Three.js 3D Font & Space Mono Hierarchy
- 60,582px Body Scroll Height Geometry
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/18-oryzo-ai-3d-space-mono-and-60k-scroll-geometry.md
- When reading context for Oryzo AI Typography Geometry Math
tags:
- reference
- awwwards
- oryzo-ai
- 3d-space-mono
- 60k-scroll-height
updated: '2026-08-08'
---

# Oryzo AI — Three.js 3D Space Mono & 60k Scroll Height Geometry

Oryzo AI embeds Three.js font definitions (`Inter.json`) alongside monospaced `Space Mono` for technical product specs.

---

## Three.js 3D Font & Space Mono Hierarchy

```css
/* Oryzo Hero Title */
.oryzo-title {
  font-family: "Georgia", serif;
  font-weight: 700;
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 1.05;
  color: #FFEDD6;
}

/* Monospaced Technical Metrics */
.oryzo-mono-spec {
  font-family: "Space Mono", monospace;
  font-weight: 500;
  font-size: 0.875rem; /* 14px */
  letter-spacing: 0.08em;
  color: #F97316;
}
```

---

## 60,582px Body Scroll Height Geometry

```css
/* Extreme Scroll Control Geometry */
body.oryzo-stage {
  height: 60582.1px; /* Ultra-smooth scrub control over 7 camera keyframes */
  background-color: #000000;
  overflow-x: hidden;
}

/* Mobile Viewport Height Lock */
:root {
  --vh: 10.8px; /* Calculated dynamically: window.innerHeight * 0.01 */
}

.hero-viewport {
  height: calc(100 * var(--vh));
}
```

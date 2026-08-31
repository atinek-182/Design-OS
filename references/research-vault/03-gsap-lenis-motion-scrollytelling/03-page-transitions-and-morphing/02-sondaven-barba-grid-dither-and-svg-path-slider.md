---
title: Sondaven — Barba.js 20x12 Grid Dither & SVG Path Slider
domain: reference
summary: Barba.js 20x12 grid cell dither SPA page transition, drag-along-path SVG Summer/Winter slider math, and magnetic
  spring buttons.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Sondaven — Barba.js 20x12 Grid Dither & SVG Path Slider
- Barba.js 20x12 Grid Cell Dither Transition
- Drag-Along-Path SVG Curve Slider Math
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/21-sondaven-barba-grid-dither-and-svg-path-slider.md
- When reading context for Sondaven Motion
tags:
- reference
- awwwards
- sondaven
- grid-dither-transition
- svg-path-slider
updated: '2026-08-08'
---

# Sondaven — Barba.js 20x12 Grid Dither & SVG Path Slider

Sondaven integrates a **Barba.js 20x12 Grid Dither SPA Transition** alongside a drag-along-path SVG curve slider.

---

## Barba.js 20x12 Grid Cell Dither Transition

```javascript
// Barba.js 20x12 Grid Dither Transition
import barba from '@barba/core';
import { gsap } from 'gsap';

barba.init({
  transitions: [{
    name: 'grid-dither',
    leave({ current }) {
      return gsap.to('.dither-cell', {
        scale: 1,
        duration: 0.8,
        stagger: { each: 0.03, from: "end", grid: [20, 12] },
        ease: "power2.inOut"
      });
    },
    enter({ next }) {
      return gsap.to('.dither-cell', {
        scale: 0,
        duration: 0.8,
        stagger: { each: 0.03, from: "start", grid: [20, 12] },
        ease: "power2.inOut"
      });
    }
  }]
});
```

---

## Drag-Along-Path SVG Curve Slider Math

$$\mathbf{P}(t) = \text{svgPath.getPointAtLength}(t \cdot L_{\text{total}})$$

```javascript
// SVG Drag-Along-Path Summer/Winter Toggle
export function updatePathHandle(progress, pathElement, handleElement) {
  const totalLength = pathElement.getTotalLength();
  const point = pathElement.getPointAtLength(progress * totalLength);
  
  gsap.to(handleElement, {
    x: point.x,
    y: point.y,
    duration: 0.2,
    ease: "power1.out"
  });
  
  if (progress < 0.4) {
    showSummerResort();
  } else if (progress > 0.6) {
    showWinterResort();
  }
}
```

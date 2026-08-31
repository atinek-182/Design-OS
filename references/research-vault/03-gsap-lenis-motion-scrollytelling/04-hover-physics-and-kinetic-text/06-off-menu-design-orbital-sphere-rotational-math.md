---
title: Off Menu Design — Orbital 3D Sphere Rotational Math & Difference Cursor
domain: reference
summary: 3D Orbital Portfolio Carousel rotational sphere math, HSL container transformations, and mix-blend-mode difference
  cursor physics.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Off Menu Design — Orbital 3D Sphere Rotational Math & Difference Cursor
- 3D Orbital Sphere Rotational Math
- Difference Blend Mode Cursor Physics
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/17-off-menu-design-orbital-sphere-rotational-math.md
- When reading context for Off Menu Design Orbital Motion
tags:
- reference
- awwwards
- off-menu-design
- orbital-carousel
- difference-cursor
updated: '2026-08-08'
---

# Off Menu Design — Orbital 3D Sphere Rotational Math & Difference Cursor

Off Menu Design engineers a 3D rotational sphere menu (`OrbitalPortfolioCarousel.tsx`) coupled with a difference cursor (`mix-blend-mode: difference`).

---

## 3D Orbital Sphere Rotational Math

$$\theta_i = \frac{2\pi \cdot i}{N} + \text{Rotation}$$

$$X_i = R \cdot \cos(\theta_i), \quad Z_i = R \cdot \sin(\theta_i)$$

$$\text{Scale}_i = \frac{Z_i + 2R}{3R}$$

```javascript
// Orbital Sphere Rotation Calculations
export function getOrbitalPosition(index, totalItems, radius, currentAngle) {
  const angle = (2 * Math.PI * index) / totalItems + currentAngle;
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);
  const scale = (z + 2 * radius) / (3 * radius);
  return { x, z, scale };
}
```

---

## Difference Blend Mode Cursor Physics

```css
/* Off Menu Difference Cursor */
.offmenu-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #FFFFFF;
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 9999;
}
```

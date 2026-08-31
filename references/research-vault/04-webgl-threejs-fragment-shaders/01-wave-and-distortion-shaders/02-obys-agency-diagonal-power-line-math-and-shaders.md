---
title: Obys Agency — Van De Graaff Diagonal Power Line Math & Noise Shaders
domain: reference
summary: Diagonal intersection vector formulas for Van De Graaff power lines and 3% SVG noise fragment shaders.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Obys-Agency-Design-System.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Obys Agency — Van De Graaff Diagonal Power Line Math & Noise Shaders
- Van De Graaff Power Line Vector Equations
- 3% SVG Noise Fragment Shader Specification
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/12-obys-agency-diagonal-power-line-math-and-shaders.md
- When reading context for Obys Agency Power Line Math Shaders
tags:
- reference
- awwwards
- obys-agency
- van-de-graaff-math
- svg-noise
updated: '2026-08-08'
---

# Obys Agency — Van De Graaff Diagonal Power Line Math & Noise Shaders

Obys Agency calculates Van De Graaff diagonal power line intersections to anchor layout blocks mathematically.

---

## Van De Graaff Power Line Vector Equations

Primary viewport diagonal line equation:

$$y - Y_0 = m_1 (x - X_0), \quad m_1 = \frac{Y_{\max} - Y_0}{X_{\max} - X_0}$$

Secondary corner-to-midpoint diagonal line equation:

$$y - Y_{\max} = m_2 (x - X_0), \quad m_2 = \frac{Y_0 - Y_{\max}}{X_{\max} - X_0}$$

The intersection point $(X_{power}, Y_{power})$ determines the primary headline bounding anchor:

$$X_{power} = \frac{Y_{\max} - Y_0 + m_1 X_0 - m_2 X_0}{m_1 - m_2}$$

---

## 3% SVG Noise Fragment Shader Specification

Obys overlays a 3% static noise grain over solid fills to eliminate color banding:

```html
<!-- Obys 3% SVG Noise Filter -->
<svg style="display:none;">
  <filter id="obys-noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
    <feComponentTransfer>
      <feFuncA type="linear" slope="0.03"/>
    </feComponentTransfer>
  </filter>
</svg>
```

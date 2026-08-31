---
title: Resn — JetBrains Mono HUD & Floating World Coordinates Math
domain: reference
summary: Fluid typography clamp math, JetBrains Mono style data callouts, and 3D world coordinate floating card offsets.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Resn — JetBrains Mono HUD & Floating World Coordinates Math
- JetBrains Mono HUD Typography Scale
- 3D World Coordinate Floating Card Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/20-resn-jetbrains-mono-hud-and-clamp-math.md
- When reading context for Resn Typography Grid Math
tags:
- reference
- awwwards
- resn
- jetbrains-mono
- world-coordinates
updated: '2026-08-08'
---

# Resn — JetBrains Mono HUD & Floating World Coordinates Math

Resn projects agricultural scientific rigor by combining fluid chapter headlines (`clamp(2.75rem, 7vw, 6rem)`) with `JetBrains Mono` data callouts.

---

## JetBrains Mono HUD Typography Scale

```css
/* Resn Chapter Display Headline */
.resn-chapter-title {
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: clamp(2.75rem, 7vw, 6rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: #22C55E;
}

/* Monospaced Biological Metrics */
.resn-hud-mono {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8125rem; /* 13px */
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #EAB308;
}
```

---

## 3D World Coordinate Floating Card Math

$$\mathbf{P}_{\text{screen}} = \mathbf{M}_{\text{proj}} \times \mathbf{M}_{\text{view}} \times \mathbf{P}_{\text{world}}$$

```javascript
// Floating Card 3D World to Screen Coordinate Projection
export function projectWorldToScreen(worldPos, camera, screenWidth, screenHeight) {
  const projected = worldPos.clone().project(camera);
  const x = (projected.x * 0.5 + 0.5) * screenWidth;
  const y = (-(projected.y * 0.5) + 0.5) * screenHeight;
  return { x, y, visible: projected.z < 1 };
}
```

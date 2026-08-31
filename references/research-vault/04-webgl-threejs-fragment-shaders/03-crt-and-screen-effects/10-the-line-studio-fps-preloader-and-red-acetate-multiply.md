---
title: The Line Studio — Electric Red FPS Preloader & Multiply Acetate Effect
domain: reference
summary: Electric red preloader displaying real-time FPS counter (.preloader__fps) and red acetate mix-blend-mode multiply
  overlays.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- The Line Studio — Electric Red FPS Preloader & Multiply Acetate Effect
- Real-Time FPS Preloader Counter Mechanic
- Red Acetate Multiply Overlay Effect
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/23-the-line-studio-fps-preloader-and-red-acetate-multiply.md
- When reading context for The Line Studio FPS Preloader
tags:
- reference
- awwwards
- the-line-studio
- fps-preloader
- acetate-multiply
updated: '2026-08-08'
---

# The Line Studio — Electric Red FPS Preloader & Multiply Acetate Effect

THE LINE Studio displays a real-time **FPS Preloader Counter** (`.preloader__fps`) coupled with red acetate multiply overlays.

---

## Real-Time FPS Preloader Counter Mechanic

```javascript
// Real-Time FPS Counter Preloader Logic
let frameCount = 0;
let lastTime = performance.now();
const fpsElement = document.querySelector('.preloader__fps');

function updateFPS() {
  const now = performance.now();
  frameCount++;
  if (now >= lastTime + 500) {
    const fps = Math.round((frameCount * 1000) / (now - lastTime));
    if (fpsElement) fpsElement.textContent = `${fps} FPS`;
    frameCount = 0;
    lastTime = now;
  }
  requestAnimationFrame(updateFPS);
}
requestAnimationFrame(updateFPS);
```

---

## Red Acetate Multiply Overlay Effect

```css
/* Red Acetate Multiply Overlay Class */
.acetate {
  background-color: #FF391E;
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

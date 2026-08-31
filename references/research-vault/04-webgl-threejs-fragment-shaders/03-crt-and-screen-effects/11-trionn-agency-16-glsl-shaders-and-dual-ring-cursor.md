---
title: TRIONN Agency — 16 GLSL Shaders & Dual-Ring Magnetic Cursor
domain: reference
summary: 16 WebGL GLSL fragment shader repository (shader_01_fragment.glsl) and dual-ring pointer follower with magnetic snapping.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- TRIONN Agency — 16 GLSL Shaders & Dual-Ring Magnetic Cursor
- 16 WebGL GLSL Fragment Shaders Inventory
- Dual-Ring Pointer Follower & Magnetic Snapping
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/26-trionn-agency-16-glsl-shaders-and-dual-ring-cursor.md
- When reading context for TRIONN Agency Shaders
tags:
- reference
- awwwards
- trionn-agency
- 16-glsl-shaders
- dual-ring-cursor
updated: '2026-08-08'
---

# TRIONN Agency — 16 GLSL Shaders & Dual-Ring Magnetic Cursor

TRIONN Agency incorporates **16 Intercepted WebGL GLSL Shaders** with a dual-ring magnetic cursor follower.

---

## 16 WebGL GLSL Fragment Shaders Inventory

```glsl
// GLSL FRAGMENT SHADER — TRIONN CANVAS DISTORTION (shader_01_fragment.glsl)
uniform float u_time;
uniform sampler2D u_texture;
uniform vec2 u_mouse;

varying vec2 v_uv;

void main() {
    vec2 st = v_uv;
    float dist = distance(st, u_mouse);
    float glow = smoothstep(0.3, 0.0, dist) * 0.02;
    st += vec2(sin(u_time + st.y * 10.0), cos(u_time + st.x * 10.0)) * glow;
    vec4 color = texture2D(u_texture, st);
    gl_FragColor = color;
}
```

---

## Dual-Ring Pointer Follower & Magnetic Snapping

```javascript
// Dual-Ring Cursor Physics with Lerp
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function renderCursor() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  
  const outerRing = document.querySelector('.cursor-outer-ring');
  if (outerRing) outerRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
  
  requestAnimationFrame(renderCursor);
}
requestAnimationFrame(renderCursor);
```

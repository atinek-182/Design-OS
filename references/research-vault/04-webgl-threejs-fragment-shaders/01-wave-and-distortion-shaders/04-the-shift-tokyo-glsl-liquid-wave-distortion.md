---
title: The Shift Tokyo — Liquid Wave GLSL Shader & Electric Coral Cursor
domain: reference
summary: GLSL fragment shader implementation for liquid wave distortion (tokyo-glsl-distortion.glsl) and electric coral circle
  cursor expansion.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- The Shift Tokyo — Liquid Wave GLSL Shader & Electric Coral Cursor
- GLSL Liquid Wave Distortion Fragment Shader Source
- Electric Coral Circle Cursor Physics
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/24-the-shift-tokyo-glsl-liquid-wave-distortion.md
- When reading context for The Shift Tokyo Shader
tags:
- reference
- awwwards
- the-shift-tokyo
- liquid-distortion-shader
- electric-coral-cursor
updated: '2026-08-08'
---

# The Shift Tokyo — Liquid Wave GLSL Shader & Electric Coral Cursor

The Shift Tokyo applies a custom WebGL fragment shader (`tokyo-glsl-distortion.glsl`) for liquid distortion thumbnail hovers.

---

## GLSL Liquid Wave Distortion Fragment Shader Source

```glsl
// GLSL FRAGMENT SHADER — THE SHIFT TOKYO LIQUID DISTORTION
uniform float u_time;
uniform sampler2D u_texture;
uniform vec2 u_resolution;

varying vec2 v_uv;

void main() {
    vec2 uv = v_uv;
    float wave = sin(uv.y * 10.0 + u_time * 3.0) * 0.015;
    uv.x += wave;
    vec4 texColor = texture2D(u_texture, uv);
    gl_FragColor = texColor;
}
```

---

## Electric Coral Circle Cursor Physics

```css
/* Electric Coral Custom Cursor */
.shift-cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #FE4249;
  box-shadow: 0 0 16px rgba(254, 66, 73, 0.6);
  transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1), height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  pointer-events: none;
  z-index: 9999;
}

.shift-cursor.is-hovering {
  width: 64px;
  height: 64px;
}
```

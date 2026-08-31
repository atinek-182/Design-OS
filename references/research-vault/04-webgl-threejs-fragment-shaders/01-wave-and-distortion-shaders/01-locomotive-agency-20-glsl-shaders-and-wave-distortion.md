---
title: Locomotive Agency — 20 GLSL Shaders & Image Wave Distortion Pipeline
domain: reference
summary: Intercepted WebGL GLSL shader pipeline (20 shaders) including GLSL Fragment Shader
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Locomotive-Scroll-Engine.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Locomotive Agency — 20 GLSL Shaders & Image Wave Distortion Pipeline
- Intercepted Shader Pipeline Overview
- GLSL Fragment Shader
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/15-locomotive-agency-20-glsl-shaders-and-wave-distortion.md
- When reading context for Locomotive Agency GLSL Shaders
tags:
- reference
- awwwards
- locomotive-agency
- glsl-shaders
- wave-distortion
updated: '2026-08-08'
---

# Locomotive Agency — 20 GLSL Shaders & Image Wave Distortion Pipeline

Locomotive intercepts 20 custom WebGL GLSL vertex & fragment shaders (`shader_01_fragment.glsl` to `shader_20_fragment.glsl`) to animate image texture depth.

---

## Intercepted Shader Pipeline Overview

1. **Image Distortion & Wave Shader**: Applies liquid ripple distortion on image hover and high-velocity scrolling.
2. **RGB Chromatic Aberration Shader**: Splits red/blue color channels during rapid scroll deltas ($\Delta y > 20$).
3. **PBR Bump Map Pass**: Adds realistic tactile depth to 3D portfolio card thumbnails.

---

## GLSL Fragment Shader #01 Source Code

```glsl
// GLSL FRAGMENT SHADER #01 — LOCOMOTIVE IMAGE WAVE DISTORTION
uniform float u_time;
uniform float u_scroll_speed;
uniform sampler2D u_texture;

varying vec2 v_uv;

void main() {
    vec2 uv = v_uv;
    uv.x += sin(uv.y * 10.0 + u_time * 2.0) * u_scroll_speed * 0.005;
    vec4 color = texture2D(u_texture, uv);
    gl_FragColor = color;
}
```

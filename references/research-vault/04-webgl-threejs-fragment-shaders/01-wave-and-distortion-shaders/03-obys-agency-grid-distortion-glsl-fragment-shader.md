---
title: Obys Agency — Grid Distortion GLSL Fragment Shader & Proximity Physics
domain: reference
summary: Complete GLSL fragment shader implementation of grid-distortion.glsl handling interactive canvas hover distortion.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Obys-Agency-Design-System.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Obys Agency — Grid Distortion GLSL Fragment Shader & Proximity Physics
- Grid Distortion GLSL Fragment Shader Source
- Proximity-Based Euclidean Distance Math
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/13-obys-agency-grid-distortion-glsl-fragment-shader.md
- When reading context for Obys Agency GLSL Fragment Shader
tags:
- reference
- awwwards
- obys-agency
- glsl-shader
- fragment-shader
- webgl
updated: '2026-08-08'
---

# Obys Agency — Grid Distortion GLSL Fragment Shader & Proximity Physics

Obys Agency uses a custom WebGL fragment shader (`grid-distortion.glsl`) to deform canvas grid lines near mouse coordinates.

---

## Grid Distortion GLSL Fragment Shader Source

```glsl
// grid-distortion.glsl — Obys Agency Interactive Canvas Grid Distortion
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_texture;

varying vec2 v_uv;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution.xy;
    
    float dist = distance(st, mouse);
    float radius = 0.25;
    float strength = smoothstep(radius, 0.0, dist);
    
    vec2 dir = normalize(st - mouse);
    vec2 distortedUv = v_uv + dir * strength * 0.05 * sin(u_time * 2.0);
    
    vec4 color = texture2D(u_texture, distortedUv);
    gl_FragColor = color;
}
```

---

## Proximity-Based Euclidean Distance Math

$$\text{Distance} = \sqrt{(X_{\text{mouse}} - X_{\text{column}})^2 + (Y_{\text{mouse}} - Y_{\text{column}})^2}$$

When $\text{Distance} < \text{Radius}$, column highlight opacity increases linearly to provide subtle hover feedback.

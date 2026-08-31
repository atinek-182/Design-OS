---
title: Resn — 6 GLSL Fragment Shaders & Particle Repulsion Vector Math
domain: reference
summary: Complete GLSL fragment shader implementation for Resn biological particle field and pointer repulsion vector distance
  math.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Resn — 6 GLSL Fragment Shaders & Particle Repulsion Vector Math
- GLSL Biological Particle Fragment Shader Source
- Pointer Radial Particle Repulsion Math
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/21-resn-6-glsl-shaders-and-particle-repulsion-math.md
- When reading context for Resn Fragment Shaders
tags:
- reference
- awwwards
- resn
- glsl-shaders
- particle-repulsion
updated: '2026-08-08'
---

# Resn — 6 GLSL Fragment Shaders & Particle Repulsion Vector Math

Resn intercepted 6 custom WebGL shaders (`shader_01_fragment.glsl` to `shader_06_fragment.glsl`) powering bioluminescent particle fields.

---

## GLSL Biological Particle Fragment Shader Source

```glsl
// GLSL FRAGMENT SHADER — RESN BIOLOGICAL PARTICLE FIELD
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_chlorophyll_color;

varying vec2 v_uv;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float dist = length(st - vec2(0.5));
    float wave = sin(u_time * 2.5 - dist * 12.0) * 0.5 + 0.5;
    vec3 finalColor = mix(vec3(0.02, 0.04, 0.02), u_chlorophyll_color, wave * 0.6);
    gl_FragColor = vec4(finalColor, 1.0);
}
```

---

## Pointer Radial Particle Repulsion Math

$$\mathbf{D} = \mathbf{P}_{\text{cursor}} - \mathbf{P}_{\text{particle}}$$

$$\mathbf{F}_{\text{repulsion}} = \frac{\mathbf{D}}{\|\mathbf{D}\|^2 + \epsilon} \times k_{\text{force}}$$

Particles push outward radially upon cursor proximity, smoothly relaxing back via damped harmonic spring oscillation.

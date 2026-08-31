---
title: Merci Michel — Particle Bloom Fragment Shader & Vector Displacement Math
domain: reference
summary: GLSL fragment shader implementation for Merci Michel particle bloom and vector displacement distance calculations.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Merci Michel — Particle Bloom Fragment Shader & Vector Displacement Math
- GLSL Particle Bloom Fragment Shader Source
- Pointer Proximity Vector Displacement Math
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/17-merci-michel-particle-bloom-fragment-shader.md
- When reading context for Merci Michel Fragment Shader
tags:
- reference
- awwwards
- merci-michel
- particle-bloom
- glsl-shader
updated: '2026-08-08'
---

# Merci Michel — Particle Bloom Fragment Shader & Vector Displacement Math

Merci Michel uses a custom WebGL fragment shader for bioluminescent particle bloom overlays.

---

## GLSL Particle Bloom Fragment Shader Source

```glsl
// GLSL FRAGMENT SHADER — MERCI MICHEL PARTICLE BLOOM
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_accent_color;

varying vec2 v_uv;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float dist = length(st - vec2(0.5));
    float pulse = sin(u_time * 3.0 - dist * 8.0) * 0.5 + 0.5;
    vec3 color = mix(vec3(0.04, 0.04, 0.06), u_accent_color, pulse * 0.4);
    gl_FragColor = vec4(color, 1.0);
}
```

---

## Pointer Proximity Vector Displacement Math

$$\mathbf{D} = \mathbf{P}_{\text{cursor}} - \mathbf{P}_{\text{particle}}$$

$$\mathbf{P}_{\text{particle.new}} = \mathbf{P}_{\text{particle}} + \frac{\mathbf{D}}{\|\mathbf{D}\|^2 + \epsilon} \times \text{Force}$$

Particles push away from the cursor when within interactive radius, smoothly relaxing back to original coordinates via spring lerping.

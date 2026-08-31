---
title: Sondaven — Terrain Cloud GLSL Shader & 180° Y-Axis Form Card Flip
domain: reference
summary: WebGL terrain-cloud.glsl fragment shader for Carpathian mountain clouds and 180-degree Y-axis form submit card flip
  animation.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Sondaven — Terrain Cloud GLSL Shader & 180° Y-Axis Form Card Flip
- GLSL Carpathian Terrain Cloud Fragment Shader Source
- 180-Degree Y-Axis Card Flip Form Submit Animation
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/22-sondaven-terrain-cloud-shader-and-180deg-card-flip.md
- When reading context for Sondaven Fragment Shader
tags:
- reference
- awwwards
- sondaven
- terrain-cloud-shader
- card-flip-animation
updated: '2026-08-08'
---

# Sondaven — Terrain Cloud GLSL Shader & 180° Y-Axis Form Card Flip

Sondaven embeds a WebGL mountain cloud shader (`terrain-cloud.glsl`) and a 180-degree Y-axis card flip form submit animation.

---

## GLSL Carpathian Terrain Cloud Fragment Shader Source

```glsl
// GLSL FRAGMENT SHADER — SONDAVEN CARPATHIAN TERRAIN CLOUDS
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_gold_tint;

varying vec2 v_uv;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float cloudNoise = sin(st.x * 6.0 + u_time * 0.4) * cos(st.y * 4.0 - u_time * 0.2);
    vec3 baseColor = vec3(0.96, 0.95, 0.94);
    vec3 finalColor = mix(baseColor, u_gold_tint, cloudNoise * 0.15);
    gl_FragColor = vec4(finalColor, 1.0);
}
```

---

## 180-Degree Y-Axis Card Flip Form Submit Animation

```javascript
// GSAP 180-Degree Y-Axis Card Flip on Webflow Form Submit Success
function animateFormSuccess(formElement, successElement) {
  const tl = gsap.timeline();
  tl.fromTo(formElement, { rotateY: 0 }, { rotateY: -180, duration: 1.2, ease: "power2.inOut" })
    .fromTo(successElement, { rotateY: 180 }, { rotateY: 0, duration: 1.2, ease: "power2.inOut" }, "<");
}
```

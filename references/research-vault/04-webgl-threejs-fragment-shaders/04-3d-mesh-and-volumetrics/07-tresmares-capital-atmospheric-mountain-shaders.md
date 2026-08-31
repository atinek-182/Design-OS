---
title: Tresmares Capital — Atmospheric Mountain WebGL Shader & WP Rocket
domain: reference
summary: WebGL background canvas simulating atmospheric light and mountain geometry with WP Rocket script lazy loading.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Tresmares Capital — Atmospheric Mountain WebGL Shader & WP Rocket
- WebGL Mountain Peak Atmospheric Shader
- WP Rocket Script Lazy-Load Execution
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/25-tresmares-capital-atmospheric-mountain-shaders.md
- When reading context for Tresmares Capital Shader Pipeline
tags:
- reference
- awwwards
- tresmares-capital
- mountain-shader
- wp-rocket
updated: '2026-08-08'
---

# Tresmares Capital — Atmospheric Mountain WebGL Shader & WP Rocket

Tresmares Capital integrates a WebGL atmospheric canvas simulating mountain peaks inspired by "Pico Tres".

---

## WebGL Mountain Peak Atmospheric Shader

```glsl
// GLSL FRAGMENT SHADER — TRESMARES ATMOSPHERIC MOUNTAIN PEAK
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_terracotta_red;

varying vec2 v_uv;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float peakLight = smoothstep(0.4, 0.8, st.y + sin(st.x * 4.0) * 0.1);
    vec3 baseColor = vec3(0.04, 0.05, 0.08);
    vec3 finalColor = mix(baseColor, u_terracotta_red, peakLight * 0.25);
    gl_FragColor = vec4(finalColor, 1.0);
}
```

---

## WP Rocket Script Lazy-Load Execution

- **Lazy Load Execution**: Calls `RocketLazyLoadScripts.run()` to defer non-essential scripts until user interaction.
- **Hardware Fallback**: Automatically disables WebGL canvas distortion on low-end mobile devices to maintain 60 FPS performance.

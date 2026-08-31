---
title: IYO Audio Computer — 1.6M GPGPU Particle Simulation & WebGL Performance Protocol
domain: research
summary: Technical WebGL architecture breakdown for Google X spun-out IYO Audio Computer, featuring 1.6M GPGPU particle physics,
  Chladni frequency sound patterns, Retopologized CAD Draco compression, and Taxi.js memory cleanup.
critical_directives:
- Scale GPGPU particle count dynamically based on GPU tier (up to 1.6M on desktop, 400k on mobile).
- Enforce 44% shader workload reduction on Retina displays by scaling pixel ratio down to `Math.min(window.devicePixelRatio,
  1.5)`.
- Cleanup all WebGL scenes, textures, and event listeners on page transition via Taxi.js or Barba.js.
section_outline:
- Executive Summary & Engineering Pedigree
- 1. GPGPU Particle Simulation Protocol (Chladni Sound Patterns)
- 2. Retopologized CAD & Draco GLTF Pipeline
- 3. Mobile Performance & Memory Architecture
read_triggers:
- When building Awwwards-grade websites WebGL GPGPU particles
- When configuring 1.6M particle simulation Chladni sound patterns
- When optimizing Three.js Draco GLTF compression and Taxi.js memory cleanup
tags:
- GPGPU-particles
- WebGL
- ThreeJS
- audio-visualization
- performance
updated: '2026-08-08'
---

# IYO Audio Computer — 1.6M GPGPU Particle Simulation & WebGL Performance Protocol

## Executive Summary & Engineering Pedigree

- **Client / Product**: IYO One (World's first screen-free audio computer, spun out of Google X moonshot factory).
- **Art Direction & WebGL Lead**: Matteo Donini, Enrico Deiana, Federico Valla.
- **Core Pillars**: Futuristic minimalism, visualization of sound, tactile 3D exploded view interaction.

---

## 1. GPGPU Particle Simulation Protocol (Chladni Sound Patterns)

- **Particle Count**: 1.6 Million GPGPU particles driven by GPU compute shaders.
- **Chladni Frequency Mathematics**: Particles simulate physical acoustic vibrations on a plate, morphing dynamically into Chladni sound patterns and 10 manifesto haiku typography states.
- **Dark Pixel Pull Sampling**: Instead of crossfading textures, the GPGPU fragment shader samples the dark pixel coordinates of target text glyphs and applies attractor forces to pull the 1.6M particles directly into the typography shapes.
- **Cursor Rippling**: Mouse/touch coordinates pass vector disturbance inputs to the velocity framebuffer, causing fluid soundwave ripples through the particle cloud.

```javascript
// GPGPU Attractor Shader Math Baseline (Three.js GPUComputationRenderer)
const particleFragmentShader = `
  uniform sampler2D texturePosition;
  uniform sampler2D textureTargetText;
  uniform vec2 uMouse;
  uniform float uTime;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec4 target = texture2D(textureTargetText, uv);

    // Attractor force towards target typography coordinates
    vec3 dir = target.xyz - pos.xyz;
    float dist = length(dir);
    vec3 vel = normalize(dir) * min(dist * 0.05, 2.0);

    // Mouse acoustic disturbance ripple
    float mouseDist = distance(pos.xy, uMouse);
    if (mouseDist < 0.15) {
      vel += normalize(pos.xyz - vec3(uMouse, 0.0)) * (0.15 - mouseDist) * 3.0;
    }

    gl_FragColor = vec4(pos.xyz + vel, 1.0);
  }
`;
```

---

## 2. Retopologized CAD & Draco GLTF Pipeline

- **CAD Optimization**: Industrial engineering CAD models (millions of polygons) are retopologized down to visible exterior hardware shells.
- **Draco Compression**: Meshes exported using Google Draco 3D geometry compression, shrinking 100MB+ CAD files down to ~1.5MB glTF payloads.
- **Material Realism & Ripple Propagation**: 27 custom PBR materials (titanium, glass mesh, dichroic Gorilla Glass dusk finish). Color updates trigger a radial GLSL ripple effect propagating from the hardware center outward like a soundwave.

---

## 3. Mobile Performance & Memory Architecture

1. **Dynamic Particle Scaling**: Automatically detects hardware capabilities. Scales from 1.6M particles on high-end desktop GPUs down to 400k on mobile devices to preserve constant 60fps.
2. **44% Shader Workload Reduction Rule**: On High-DPI / Retina displays, caps `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))`. Reducing render target resolution by ~25% cuts pixel shader calculations by **44%** with zero perceived loss in visual quality.
3. **Taxi.js Memory Cleanup**: Router transitions handle AJAX page changes. On every transition, WebGL scene geometries, textures, render targets, and event listeners are explicitly disposed (`geometry.dispose()`, `texture.dispose()`) to maintain flat memory usage without memory leaks.

---
title: ZERO 3D Spline Camera Narrative Engine & Virtual Scroll Architecture
domain: research
summary: Complete technical breakdown of ZERO (Awwwards SOTD Winner), detailing virtual scroll architecture (zero native scroll),
  3-check draw-a-zero gesture unlock algorithm, KTX2/ETC1S GPU texture streaming, adaptive quality manager, and 7-tap hexagonal
  text blur shader.
critical_directives:
- Replace native browser scroll with a single virtual scroll value (`scrollVh`) driving segment lifecycles (`enter`, `scrub`,
  `update`, `teardown`).
- Enforce self-hosted Draco and KTX2/Basis decoders in `/public/vendor/` to prevent external CDN outages.
- Limit main-thread GPU texture uploads using `requestIdleCallback` texture queuing (`drainUploads`) to eliminate 50ms frame
  drops.
section_outline:
- ZERO 3D Spline Camera Narrative Engine & Virtual Scroll Architecture
- Executive Summary & Engineering Pedigree
- 1. Gesture Verification Math ("Draw a Zero" Unlock)
- 2. Virtual Scroll Engine (Zero Native Scroll)
- 3. Idle GPU Texture Upload Manager
read_triggers:
- When building Awwwards-grade websites virtual scroll architecture
- When configuring ZERO 3D spline camera narrative engine
- When implementing KTX2 ETC1S texture streaming and 7-tap hexagonal blur shader
tags:
- ZERO
- virtual-scroll
- 3d-camera
- webgl
- threejs
- shaders
- performance
updated: '2026-08-08'
---

# ZERO 3D Spline Camera Narrative Engine & Virtual Scroll Architecture

## Executive Summary & Engineering Pedigree

- **Site**: ZERO (FWA, Awwwards SOTD Winner).
- **Core Invention**: Virtual Scroll Engine + 5 Interactive Gates (Draw a Zero, Glass Shatter, Money Burn, Shredder, Cloud Tunnel).
- **Asset Optimization**: 1GB+ Blender CAD source assets retopologized & Draco/KTX2 compressed down to **< 10MB** total web bundle size.

---

## 1. Gesture Verification Math ("Draw a Zero" Unlock)

Instead of a generic "Enter" button, ZERO requires the user to draw a 0 loop on the canvas. The gesture verification engine checks three geometric properties before unlocking:

```typescript
// Draw-a-Zero Gesture Verification Math
const wound    = totalSignedAngle(points, center);   // Must reach ~2π radians (full turn)
const radiusCV = std(radii) / mean(radii);           // Radius variance ratio (low = round circle, not a scribble)
const closed   = dist(points[0], points.at(-1)) < meanRadius; // End point must close within radius threshold

if (wound > 5.76 && radiusCV < 0.35 && closed) {
  unlock(); // Seed centroid for the octagonal frost shader
}
```

---

## 2. Virtual Scroll Engine (Zero Native Scroll)

ZERO completely bypasses native browser DOM scrollbars. Mouse wheel and touch events update a single virtual scroll float (`scrollVh`) that smoothly eases toward its target. The experience is broken into 9 self-contained segments with strict lifecycle hooks:

```typescript
// Segment Lifecycle Schema
interface Segment {
  scrollVh: number;                       // Virtual scroll allocation height
  enter: (ctx: Context) => Promise<void>; // Async asset loading & Three.js mesh initialization
  scrub: (ctx: Context, p: number) => void; // p = local progress 0.0 to 1.0
  update: (ctx: Context, t: number, dt: number) => void; // Per-frame ambient update
  teardown: (ctx: Context) => void;       // Dispose geometries/textures on segment exit
}
```

---

## 3. Idle GPU Texture Upload Manager

To prevent main-thread frame stalls (50ms+ drops) when uploading textures to the GPU during fast scrolling, ZERO queues texture uploads and drains them during idle browser frames:

```typescript
// Idle-Time GPU Texture Queue Drain
function drainUploads(deadline: IdleDeadline) {
  while (uploadQueue.length > 0 && deadline.timeRemaining() > 5) {
    const tex = uploadQueue.shift();
    if (tex) {
      renderer.initTexture(tex); // Forces GPU upload during idle time
    }
  }

  if (uploadQueue.length > 0) {
    requestIdleCallback(drainUploads, { timeout: 2000 });
  }
}
```

---

## 4. Burning Money Noise-Driven Distance Field Shader

```glsl
// Burning Money GLSL Fragment Shader
uniform float uBurnProgress;
uniform sampler2D uDistMap;
uniform vec3 uCharColor;
uniform vec3 uEmberColor;

void main() {
  float threshold = uBurnProgress * 1.5;
  float distField = texture2D(uDistMap, vUv).r;
  float burn = distField * 0.5 + fbm(vUv * 8.0) * 0.5;
  float edge = burn - threshold;

  if (edge < 0.0) discard; // Fragment is already burned to ash

  float ch = 1.0 - smoothstep(0.0, 0.04, edge); // Charred paper edge
  float em = 1.0 - smoothstep(0.0, 0.02, edge); // Glowing HDR ember rim

  vec3 baseColor = texture2D(uMainTex, vUv).rgb;
  vec3 col = mix(baseColor, uCharColor, ch) + uEmberColor * em;

  gl_FragColor = vec4(col, 1.0);
}
```

---

## 5. 7-Tap Hexagonal Text Focus Blur Shader

```glsl
// 7-Tap Hexagonal Blur Fragment Shader (Focus Reveal)
uniform sampler2D uText;
uniform float uMaxBlur;
uniform float blurFactor; // 0.0 = sharp focus, 1.0 = heavy blur

const vec2 hexDir[6] = vec2[6](
  vec2(1.0, 0.0), vec2(0.5, 0.866), vec2(-0.5, 0.866),
  vec2(-1.0, 0.0), vec2(-0.5, -0.866), vec2(0.5, -0.866)
);

void main() {
  float r = blurFactor * uMaxBlur * 0.003;
  vec4 sum = texture2D(uText, vUv) * 2.0; // Center sample weighted x2

  for (int i = 0; i < 6; i++) {
    sum += texture2D(uText, vUv + hexDir[i] * r); // 6 taps at 60 degree offsets
  }

  gl_FragColor = sum / 8.0;
}
```

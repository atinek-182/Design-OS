---
title: Gehry Getty — 3D Hotspot Vector Projection & Basis WASM Texture Transcoding
domain: reference
summary: 3D world-to-screen hotspot projection vector math and Basis Universal KTX2 WASM texture GPU memory reduction pipeline.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Architectural-3D-Stage.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Gehry Getty — 3D Hotspot Vector Projection & Basis WASM Texture Transcoding
- Hotspot Vector Projection Mathematical Formulas
- Basis Universal WASM Texture Compression Pipeline
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/10-gehry-getty-3d-hotspot-projection-and-basis-wasm.md
- When reading context for Gehry Getty 3D Vector Basis Math
tags:
- reference
- awwwards
- gehry-getty
- hotspot-projection
- basis-wasm
- threejs
updated: '2026-08-08'
---

# Gehry Getty — 3D Hotspot Vector Projection & Basis WASM Texture Transcoding

Gehry Getty computes 3D mesh vector coordinates into 2D viewport screen coordinates in real time to overlay interactive HTML hotspot pins (`.hotspot-pin`).

---

## Hotspot Vector Projection Mathematical Formulas

To project 3D point $\mathbf{v}_{\text{world}}$ onto 2D screen coordinate $(\text{Pixel}_X, \text{Pixel}_Y)$:

$$\mathbf{v}_{\text{screen}} = \mathbf{P} \cdot \mathbf{V} \cdot \mathbf{M} \cdot \mathbf{v}_{\text{world}}$$

$$\text{Pixel}_X = \left( \frac{\mathbf{v}_{\text{screen.x}}}{2} + 0.5 \right) \times \text{window.innerWidth}$$

$$\text{Pixel}_Y = \left( -\frac{\mathbf{v}_{\text{screen.y}}}{2} + 0.5 \right) \times \text{window.innerHeight}$$

```javascript
// Real-Time Hotspot Screen Projection Code Snippet
function projectWorldToScreen(worldVector, camera) {
  const projectedVector = worldVector.clone().project(camera);
  const x = (projectedVector.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-(projectedVector.y * 0.5) + 0.5) * window.innerHeight;
  return { x, y, visible: projectedVector.z < 1 };
}
```

---

## Basis Universal WASM Texture Compression Pipeline

- **WASM Engine**: `basis_transcoder.wasm` (499 KB).
- **Format Standard**: Compressed KTX2 / Basis Universal textures.
- **VRAM Savings**: Reduces GPU texture memory footprint by `>75%` compared to uncompressed PNG textures, preventing mobile browser crashes during heavy 3D rendering.

---
title: Oryzo AI — Gaussian Splatting WASM Sorter & 3D Buffer Inventory
domain: reference
summary: WebGL Gaussian Splat depth sorter WebAssembly module implementation, .sog texture maps, and .buf raw 3D mesh inventory.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Oryzo AI — Gaussian Splatting WASM Sorter & 3D Buffer Inventory
- WebGL Gaussian Splat WASM Depth Sorter
- Raw 3D Mesh & Keyframe Buffer Inventory (.buf)
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/19-oryzo-ai-gaussian-splats-wasm-sorter-and-3d-buffers.md
- When reading context for Oryzo AI Gaussian Splatting
tags:
- reference
- awwwards
- oryzo-ai
- gaussian-splats
- wasm-sorter
- 3d-buffers
updated: '2026-08-08'
---

# Oryzo AI — Gaussian Splatting WASM Sorter & 3D Buffer Inventory

Oryzo AI uses real-time **WebGL Gaussian Splatting** powered by a WebAssembly depth sorter (`splat_sorter_bg-BfJrILzx.wasm`).

---

## WebGL Gaussian Splat WASM Depth Sorter

```javascript
// WebAssembly Gaussian Splat Worker Setup
const splatWorker = new Worker('/js/SplatsWorker.js');

splatWorker.postMessage({
  type: 'init',
  wasmPath: '/mirror/misc/splat_sorter_bg-BfJrILzx.wasm',
  sogPath: '/mirror/misc/props.sog' // 3.09 MB 3D Gaussian Splat Texture
});

splatWorker.onmessage = (e) => {
  if (e.data.type === 'sorted') {
    // Pass sorted splat index buffer directly to WebGL vertex attributes
    renderGaussianSplats(e.data.indices);
  }
};
```

---

## Raw 3D Mesh & Keyframe Buffer Inventory (.buf)

- `coaster.buf` (66 KB): 3D Cork Coaster mesh buffer
- `CUP.buf` (95 KB): 3D Coffee Cup mesh buffer
- `hand.buf` (381 KB): 3D Hand gesture mesh buffer
- `PINBOARD.buf` (535 KB): 3D Pinboard background mesh buffer
- `COVER.buf` (451 KB): 3D Magazine Cover geometry mesh buffer
- `BARK.buf` (278 KB): Raw cork bark texture surface buffer
- `CAMERA_ANIM.buf` (8.5 KB): Full camera scroll path keyframe array

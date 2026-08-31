---
title: Oryzo AI — 60k-Height Camera Scrollytelling & Rive WASM Runtime
domain: reference
summary: 60,582px GSAP camera scrubbed scrollytelling timeline, Rive WASM vector animation engine, and hand pointer magnetic
  proximity pull.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Oryzo AI — 60k-Height Camera Scrollytelling & Rive WASM Runtime
- GSAP 7-Keyframe Camera Scrubbing Timeline
- Rive WASM Vector Graphics Engine Integration
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/18-oryzo-ai-60k-height-scrollytelling-and-rive-wasm.md
- When reading context for Oryzo AI Motion
tags:
- reference
- awwwards
- oryzo-ai
- 60k-scrollytelling
- rive-wasm
updated: '2026-08-08'
---

# Oryzo AI — 60k-Height Camera Scrollytelling & Rive WASM Runtime

Oryzo AI drives 3D camera translation across a 60,582px scroll height alongside **Rive WASM** vector animations (`rive.wasm`).

---

## GSAP 7-Keyframe Camera Scrubbing Timeline

```javascript
// GSAP 7-Keyframe Camera Path Scrubbing
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cameraAnimBuffer = fetch('/mirror/misc/CAMERA_ANIM.buf');

gsap.to(camera.position, {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress;
      // Interpolate camera position from 8.5 KB keyframe buffer
      updateCameraPosition(progress, cameraAnimBuffer);
    }
  }
});
```

---

## Rive WASM Vector Graphics Engine Integration

```javascript
// Rive WASM Runtime Integration
import { Rive } from '@rive-app/canvas';

const riveInstance = new Rive({
  src: '/mirror/misc/oryzo.riv',
  canvas: document.getElementById('rive-canvas'),
  autoplay: true,
  stateMachines: 'State Machine 1',
  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  }
});
```

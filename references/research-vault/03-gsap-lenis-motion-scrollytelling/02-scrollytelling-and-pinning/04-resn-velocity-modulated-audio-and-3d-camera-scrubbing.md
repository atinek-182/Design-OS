---
title: Resn — Velocity-Modulated Audio & 3D Camera Chapter Scrubbing
domain: reference
summary: Howler.js spatial audio modulating pitch and volume based on scroll velocity and GSAP 3D camera Z-axis chapter translation.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Resn — Velocity-Modulated Audio & 3D Camera Chapter Scrubbing
- Howler.js Scroll Velocity Audio Modulation
- 3D Camera Z-Axis Chapter Scrubbing
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/20-resn-velocity-modulated-audio-and-3d-camera-scrubbing.md
- When reading context for Resn Audio Motion
tags:
- reference
- awwwards
- resn
- velocity-modulated-audio
- camera-scrubbing
updated: '2026-08-08'
---

# Resn — Velocity-Modulated Audio & 3D Camera Chapter Scrubbing

Resn engineers **Scroll Velocity Modulated Audio** with Three.js 3D camera Z-axis chapter scrubbing.

---

## Howler.js Scroll Velocity Audio Modulation

```javascript
// Howler.js Scroll Velocity Audio Modulator
import { Howl } from 'howler';

const ambientHum = new Howl({
  src: ['/audio/resn-bio-hum.mp3'],
  loop: true,
  volume: 0.3
});

export function updateAudioVelocity(velocity) {
  const normalizedSpeed = Math.min(Math.abs(velocity) / 50, 1.0);
  const targetRate = 1.0 + normalizedSpeed * 0.5; // Pitch modulation
  const targetVol = 0.3 + normalizedSpeed * 0.4;  // Volume boost
  
  ambientHum.rate(targetRate);
  ambientHum.volume(targetVol);
}
```

---

## 3D Camera Z-Axis Chapter Scrubbing

```javascript
// GSAP 3D Camera Translation across 4 Chapters
gsap.to(camera.position, {
  z: -120,
  ease: "none",
  scrollTrigger: {
    trigger: ".resn-webgl-container",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.8
  }
});
```

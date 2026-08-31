---
title: Gehry Getty — Timecoded Audio Synchronization & Camera Spring Orbit Motion
domain: reference
summary: Technical implementation of timecoded JSON audio transcript synchronization and lerped 3D camera spring orbit physics.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Architectural-3D-Stage.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Gehry Getty — Timecoded Audio Synchronization & Camera Spring Orbit Motion
- Synchronized Audio Narrative Engine Architecture
- Camera Spring Vector Interpolation Math
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/09-gehry-getty-timecoded-audio-sync-and-camera-orbit.md
- When reading context for Gehry Getty Audio Camera Motion
tags:
- reference
- awwwards
- gehry-getty
- audio-sync
- camera-orbit
- three-js
updated: '2026-08-08'
---

# Gehry Getty — Timecoded Audio Synchronization & Camera Spring Orbit Motion

Gehry Getty pairs multi-chapter audio interviews (`chapter1.mp3`) with timecoded JSON transcript manifests (`getty_CH1_en.json`), camera-panning 3D focus meshes automatically during playback.

---

## Synchronized Audio Narrative Engine Architecture

```javascript
// Gehry Getty Audio-Visual Synchronizer
class AudioNarrativeSynchronizer {
  constructor(audioEl, timecodesJson, cameraControls) {
    this.audio = audioEl;
    this.manifest = timecodesJson;
    this.camera = cameraControls;
    this.currentIndex = -1;
    this.init();
  }

  init() {
    this.audio.addEventListener('timeupdate', () => {
      const currentTime = this.audio.currentTime;
      const activeItem = this.manifest.timecodes.find(
        (item) => currentTime >= item.start && currentTime <= item.end
      );

      if (activeItem && activeItem.focusMesh !== this.currentMesh) {
        this.currentMesh = activeItem.focusMesh;
        this.camera.panToMesh(activeItem.focusMesh);
      }
    });
  }
}
```

---

## Camera Spring Vector Interpolation Math

Camera position transitions execute linear spring lerping on pin or timecode focus:

$$\mathbf{P}_{\text{cam}} = \text{lerp}(\mathbf{P}_{\text{cam}}, \mathbf{P}_{\text{target}}, 0.05)$$

$$\mathbf{T}_{\text{look}} = \text{lerp}(\mathbf{T}_{\text{look}}, \mathbf{T}_{\text{target}}, 0.05)$$

---
title: Active Theory — Web Audio Synthesizer, Radial Cursor & Camera Motion
domain: reference
summary: Web Audio API integration, spatial soundscape synthesizer engine, radial particle cursor physics, and 3D Z-axis camera
  scrubbing motion architecture.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Active-Theory-Style.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Active Theory — Web Audio Synthesizer, Radial Cursor & Camera Motion
- Web Audio API Synthesizer Architecture
- Radial Particle Cursor Physics & Spatial Audio Feedback
- 3D Z-Axis Camera Scrubbing Motion
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/04-active-theory-particle-audio-motion.md
- When reading context for Active Theory Audio & Motion
tags:
- reference
- awwwards
- active-theory
- web-audio
- cursor-physics
- motion
updated: '2026-08-08'
---

# Active Theory — Web Audio Synthesizer, Radial Cursor & Camera Motion

Active Theory integrates interactive Web Audio API soundscapes directly into their frontend motion pipeline, triggering spatial tone synthesis alongside WebGL particle cursor physics and 3D camera Z-axis scrubbing.

---

## Web Audio API Synthesizer Architecture

The Hydra WebAudio engine synthesizes real-time audio tones without external audio file loading latency:

```javascript
// Active Theory WebAudio Synthesizer Pipeline
class ActiveTheoryAudioEngine {
  constructor() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }

  playHoverSound(frequency = 440, duration = 0.08) {
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, this.ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }
}
```

---

## Radial Particle Cursor Physics & Spatial Audio Feedback

1. **Pointer Repulsion Vector**: As the custom cursor moves across the viewport, mouse coordinates trigger a radial force field that displaces 3D background particles.
2. **Frequency Modulation on Distance**: Sound frequency scales dynamically based on cursor speed:
   $$f = f_{base} + v_{cursor} \times \alpha$$
3. **Clip-Path Nav Micro-Animations**: Navigation buttons trigger spatial pitch shifts on hover (`440Hz` -> `660Hz`).

---

## 3D Z-Axis Camera Scrubbing Motion

- **Scrollytelling Translation**: Page scroll position maps directly to WebGL Camera Z-axis offset, scrubbing the user through a 3D tunnel of floating bento portfolio cards.
- **Scroll Dampening**: Uses inertial lerping ($\mathbf{P}_{camera} = \text{lerp}(\mathbf{P}_{camera}, \mathbf{P}_{target}, 0.08)$) to guarantee buttery-smooth motion even on high-refresh 120Hz displays.

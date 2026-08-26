---
name: sound-design-ux
description: "Use when creating subtle, zero-dependency Web Audio API sound feedback, micro-haptics, tactile button clicks, modal pops, state chimes, and spatial UI audio for premium web and mobile interfaces."
---

# Sound Design UX (Web Audio Micro-Haptics)

## Overview
High-end digital flagships (Awwwards Site of the Year tier) incorporate subtle Web Audio API haptic synthesizers and spatial sound cues. This skill provides a lightweight, zero-external-asset audio engine using synthesized oscillators.

## Core Synthesizer Hook
```javascript
class UISoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Subtle 15ms click impulse
  click(frequency = 1200, decay = 0.015) {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + decay);
    
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + decay);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + decay);
  }

  // Gentle affirmative double-chime for success
  success() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);
      gain.gain.setValueAtTime(0.05, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.25);
    });
  }
}

export const sound = new UISoundEngine();
```

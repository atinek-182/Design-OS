---
title: Trionn Master Motion Architecture — Coordinating GSAP, Three.js, Lenis & Web Audio API
domain: research
summary: Complete technical architecture for Trionn (FWA, GSAP, CSSDA Winner), detailing the unified explodeAmt state engine,
  BlurTextReveal SplitText component, raycasted 3D magnetic hover, 2D offscreen weld spark system, hold-to-blast interaction,
  and Web Audio API runtime synthesis.
critical_directives:
- Synchronize Lenis smooth scroll directly from `gsap.ticker` for 100% frame-perfect ScrollTrigger alignment.
- Unify multi-input interaction states (scroll, hover, hold-to-blast, intro) into a single deterministic `explodeAmt` variable.
- Synthesize interactive hover beeps and weld sparks at runtime using Web Audio API instead of loading MP3 files.
section_outline:
- Executive Summary & Engineering Pedigree
- 1. Unified `explodeAmt` State Engine & Shared Render Loop
- 2. Reusable `BlurTextReveal` Component (GSAP SplitText + Filter GPU Layer)
- 3. Web Audio API Runtime Sound Synthesis
- 4. Lenis Smooth Scroll Driven via `gsap.ticker`
read_triggers:
- When building Awwwards-grade websites GSAP Lenis motion
- When coordinating GSAP Three.js Lenis Web Audio API
- When building BlurTextReveal SplitText and hold to blast interaction
tags:
- trionn
- gsap
- lenis
- threejs
- web-audio-api
- scrollytelling
updated: '2026-08-08'
---

# Trionn Master Motion Architecture — Coordinating GSAP, Three.js, Lenis & Web Audio API

## Executive Summary & Engineering Pedigree

- **Studio / Site**: Trionn (Awarded FWA of the Day, GSAP Site of the Month, CSSDA SOTD).
- **Tech Stack**: Next.js + `useGSAP` + Three.js (raw render loop, zero R3F overhead) + Lenis + Web Audio API + SplitText.
- **Core Invention**: Unified `explodeAmt` State Engine — a single float driving 3D panel displacement regardless of whether input comes from scroll depth, magnetic hover, or hold-to-blast mouse down.

---

## 1. Unified `explodeAmt` State Engine & Shared Render Loop

Instead of triggering separate, competing GSAP tweens for scroll, mouse hover, and click-hold, Trionn calculates a single composite `explodeAmt` value inside the Three.js RAF render loop:

```typescript
// Unified State Calculation inside useTrionnSymbolScene.ts
const burstContrib = st.scrollProgress < 0.15 ? st.clickBurst : 0;

// The single master variable driving 3D mesh transformation
const explodeAmt = Math.max(
  st.scrollProgress, // Scroll depth drives panel displacement
  st.hoverAmt,       // Raycasted mouse hover
  burstContrib,      // Hold-to-blast progress
  st.introAmt        // Page loader reveal animation
);

particles.forEach((p) => {
  const amt = Math.max(0, explodeAmt - p.delay); // Staggered by panel index
  const burst = amt * 5.5;

  p.mesh.position.set(
    p.explodeDir.x * burst,
    p.explodeDir.y * burst,
    p.explodeDir.z * burst
  );

  p.mesh.rotation.x = p.spinAxis.x * p.spinSpeed * amt * Math.PI;
});
```

---

## 2. Reusable `BlurTextReveal` Component (GSAP SplitText + Filter GPU Layer)

```typescript
// BlurTextReveal.tsx — Character-by-Character Staggered Focus Reveal
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';

interface BlurTextProps {
  text: string;
  stagger?: number;
  delay?: number;
}

export function BlurTextReveal({ text, stagger = 0.08, delay = 0 }: BlurTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: 'chars, words, lines',
      smartWrap: true,
    });

    const targets = split.chars;

    // Promote to GPU layer ONLY during animation
    gsap.set([textRef.current, targets], {
      autoAlpha: 0,
      filter: 'blur(12px)',
      willChange: 'filter, opacity',
    });

    const tl = gsap.timeline();

    tl.to(textRef.current, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: 0.5,
    }, delay).to(targets, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger: {
        each: stagger,
        from: 'random', // Characters settle out of order organically
      },
      ease: 'power2.out',
      onComplete: () => {
        // Strip will-change to free GPU memory post-animation
        gsap.set([textRef.current, targets], { willChange: 'auto' });
      },
    }, delay);
  }, { scope: textRef });

  return <h1 ref={textRef} className="text-display">{text}</h1>;
}
```

---

## 3. Web Audio API Runtime Sound Synthesis

Rather than loading heavy MP3 audio assets over HTTP, Trionn synthesizes hover beeps and weld sparks programmatically at runtime using the browser's native `AudioContext`:

```typescript
// Web Audio API Runtime Beep Synthesizer
class SoundEngine {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  playHoverBeep() {
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime); // 880Hz A5 pitch
    osc.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
}

export const audio = new SoundEngine();
```

---

## 4. Lenis Smooth Scroll Driven via `gsap.ticker`

```typescript
// Synchronizing Lenis directly with GSAP's internal animation loop
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// Drive Lenis scroll frame from GSAP ticker to eliminate jitter
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Disable lag smoothing so ScrollTrigger pins stay locked to scroll
gsap.ticker.lagSmoothing(0);
```

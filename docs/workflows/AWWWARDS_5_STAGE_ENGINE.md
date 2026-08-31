# Design-OS: The 5-Stage Awwwards Flagship Engine

> **Document Version**: `v2.0-Awwwards-FastTrack`  
> **Status**: `[ACTIVE STANDARD]`  
> **Replaces**: Legacy 12-stage enterprise monolithic workflow.  
> **Execution Mode**: Triggered via `python scripts/design_os.py make` or conversational prompt.

---

## 1. Executive Workflow Overview

The **5-Stage Awwwards Flagship Engine** is a streamlined, high-velocity design engineering lifecycle calibrated for building award-winning digital flagships (Site of the Day / Site of the Year standard) in React 19, TypeScript, and Tailwind v4.

```
[STAGE 1: CREATIVE INCEPTION & THEME MATH]
  ├── Signature Archetype Lock (Obsidian HUD / Obys Minimal / Lusion 3D / Editorial Luxury / Kinetic Brutalism)
  ├── OKLCH Color Palette Matrix (WCAG AAA 16:1 text contrast flooring, 3% SVG noise surface)
  └── Style-Lock Contract Generation (.tastemaker/style-lock.md)

[STAGE 2: POSTER TYPOGRAPHY & SPATIAL RHYTHM]
  ├── Obys Typography Principles Grounding (Font choice, hierarchy, baseline leading, measure 45-75ch)
  ├── Fluid Clamp Mathematical Engine (Slope-intercept calculation for zero-breakpoint scaling)
  ├── Variable Font Axis Calibration (wdth 75-150%, wght 100-900, optical kerning)
  └── Obys 140px-160px Spatial Rhythm & Van de Graaf Power Line Layout

[STAGE 3: KINETIC MOTION, SVG PHYSICS & TRANSITIONS]
  ├── Unified Lenis Momentum Scroll + GSAP ScrollTrigger Master Ticker
  ├── Interactive SVG Vector Engine (Stroke dasharray drawing, curved getPointAtLength sliders)
  ├── Seamless Section Transitions (Clip-path curtain wipes, pinned horizontal tracks, sticky card decks)
  └── Zero-Dependency Web Audio Micro-Haptics (15ms synthetic oscillator clicks & chime sweeps)

[STAGE 4: WEBGL SHADERS, CANVAS STAGES & PHOTO LAYOUT]
  ├── Three.js Hardware-Accelerated Canvas Stages (GLSL fragment passes, FBO particles, CRT effects)
  ├── Persistent WebGL Background Stage with GSAP Uniform Tweening
  └── Asymmetrical Editorial Photo Layout (16:9 / 4:5 / 1:1 aspect ratios, differential parallax speeds)

[STAGE 5: MULTI-VIEWPORT QA & ANTI-SLOP HARDENING]
  ├── Playwright Automated 5-Viewport Visual Audit (1920, 1440, 1024, 768, 375px zero-overflow)
  ├── 6-Axis AST Anti-Slop Scanner (Zero generic cards, zero uncalibrated colors, semantic HTML)
  └── Production Build & SSR Hydration Validation
```

---

## 2. Stage-by-Stage Detailed Specifications

### Stage 1: Creative Inception & Theme Math
- **Objective**: Establish the conceptual soul and mathematical color flooring.
- **Key Deliverables**:
  - Selection of 1 of 5 signature archetypes (or rotation via `.tastemaker/log.json`).
  - OKLCH color palette generated via `python scripts/tastemaker/generate_palette.py`.
  - Contrast matrix verified against WCAG AAA ($16:1$ primary on void background, $3:1$ interactive borders).
  - Background surface noise: `3%` monochromatic SVG turbulence filter.

### Stage 2: Poster Typography & Spatial Rhythm
- **Objective**: Craft unmistakable, dramatic typographic scale and Obys spatial hierarchy.
- **Key Deliverables**:
  - Primary headline: `clamp(2.75rem, 6.5vw + 1.25rem, 7.5rem)` with `-0.04em` tracking.
  - Monospace HUD metadata: `clamp(0.7rem, 0.4vw + 0.55rem, 0.85rem)` with `+0.20em` uppercase tracking.
  - Baseline grid: Vertical padding and margins set to integer multiples of line-height unit ($20\text{px}, 40\text{px}, 80\text{px}, 140\text{px}$).
  - Measure constraint: Body paragraphs locked between $45\text{ch}$ and $75\text{ch}$ width.

### Stage 3: Kinetic Motion, SVG Physics & Transitions
- **Objective**: Make the interface feel alive, tactile, and frictionless.
- **Key Deliverables**:
  - Unified scroll hook: `useAwwwardsMotion()` connecting Lenis to `gsap.ticker`.
  - Masked headline reveals: React-native split spans with GSAP `yPercent: 120` to `yPercent: 0`.
  - Curved SVG slider: Thumb handle tracked to bezier curve via `path.getPointAtLength()`.
  - Section transition: Clip-path curtain wipe with background scaling.
  - Micro-audio: Zero-asset Web Audio API oscillator synthesis on click/hover.

### Stage 4: WebGL Shaders, Canvas Stages & Photo Layout
- **Objective**: Render atmospheric visual depth and editorial photo composition.
- **Key Deliverables**:
  - WebGL Canvas stage: Real-time GLSL fragment shader (particle repulsion, liquid wave, or CRT scanlines).
  - Photo composition: 3-image asymmetrical collage anchored to Van de Graaf power lines ($38.2\%$ and $61.8\%$ width).
  - Parallax speeds: Foreground media at $1.25\times$, background plates at $0.85\times$.
  - Asset sourcing: Openverse CC0 high-res photography scraper integration.

### Stage 5: Multi-Viewport QA & Anti-Slop Hardening
- **Objective**: Guarantee flawless execution across all device form factors before handoff.
- **Key Deliverables**:
  - Automated Playwright screenshots captured at `1920x1080`, `1440x900`, `1024x768`, `768x1024`, and `375x812`.
  - Zero horizontal scroll overflow validation (`scrollWidth <= innerWidth`).
  - AST anti-slop scan: 0 violations of generic templates or un-styled elements.
  - Terminal ASCII verification pass matrix output.

# 4. Motion Choreography & Scroll Physics Specification

## Core Motion Philosophy
- **Style**: High-performance, tactile, physical, interruptible. Zero sluggish linear animations.
- **Engine**: GSAP 3.x + ScrollTrigger + Lenis Smooth Scroll.

---

## Easing Beziers & Physics Constants
- **Standard Smooth Ease**: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple/Linear signature snap)
- **Spring Press Ease**: `cubic-bezier(0.34, 1.56, 0.64, 1)` (Tactile bounce)
- **Exit Ease**: `cubic-bezier(0.4, 0, 1, 1)` (Swift exit)
- **Lenis Smooth Scroll**:
  - `lerp`: 0.08
  - `duration`: 1.2
  - `smoothWheel`: true

---

## Section Motion Sequences

### 1. Hero Reveal (On Page Load)
- **Stagger**: 0.06s between badge, headline lines, subtitle, and CTA cluster.
- **Initial State**: `y: 30`, `opacity: 0`, `filter: "blur(8px)"`.
- **Target State**: `y: 0`, `opacity: 1`, `filter: "blur(0px)"`, duration `0.85s`, ease `power3.out`.

### 2. Bento Card Scroll Reveals
- **Trigger**: `ScrollTrigger` with `start: "top 85%"`.
- **Motion**: Cards fade and scale from `0.96` to `1.0` with staggered batch reveal (`0.1s`).

### 3. Micro-Interactions & Hover Physics
- **Button Press**: `transform: scale(0.97)` on active click, returning instantly.
- **Card Cursor Spotlight**: 250px radial gradient tracking pointer coordinates via CSS variables `--mouse-x` and `--mouse-y`.
- **Reduced Motion Support**:
  - All transforms and blurs revert to instant opacity fades when `prefers-reduced-motion: reduce` is detected.

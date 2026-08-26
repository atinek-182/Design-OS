---
name: video-to-superprompt
description: Use when turn a reference video or screen recording into a comprehensive, multi-layer superprompt tailored for Gemini 3.7 Flash (High) in Antigravity. Use when analyzing design videos, UI interactions, GSAP animations, WebGL shaders, or full-page scroll storytelling to recreate or remix them in React, Next.js, or Vite.
---

# Video To Superprompt (Gemini 3.7 Flash Edition)

## Goal
Convert any reference video, animation clip, or screen recording into a builder-ready **Gemini 3.7 Flash (High)** superprompt. The output must provide deterministic technical specifications across 7 architectural layers rather than vague aesthetic descriptions.

## The 7-Layer Gemini Superprompt Specification

When generating a superprompt for **Gemini 3.7 Flash (High)**, always structure the output into these 7 explicit sections:

```text
=== GEMINI 3.7 FLASH (HIGH) BUILDER CONTRACT ===

1. VISUAL THESIS & ARCHETYPE
- Target aesthetic (e.g., Editorial Tech, Glass Dark UI, Awwwards Luxury, Retro Dither)
- Layout rhythm and grid structure (Asymmetrical, Bento, Split wireframe)
- Focal hero composition and visual hierarchy

2. TOKENS & DESIGN SYSTEM VARIABLES
- Exact Color Palette (Background, Surface, Border, Primary Accent, Text hierarchy) in CSS HSL / HEX variables
- Typography System (Display font, Sans body font, Monospace utility font with clamp() sizing)
- Spacing Scale & Border Radii tokens

3. SEMANTIC DOM & LAYOUT ARCHITECTURE
- Complete section-by-section breakdown (Header -> Hero -> Proof -> Features -> Interactive Canvas -> Pricing/Testimonials -> CTA -> Footer)
- HTML5 semantic elements (<header>, <main>, <section>, <article>, <figure>, <aside>, <footer>)
- Responsive layout collapse rules (Desktop 1440px+, Tablet 768px-1024px, Mobile <640px)

4. MOTION & SCROLL CHOREOGRAPHY (GSAP + LENIS)
- Unified motion system with Lenis smooth scroll synced to GSAP ticker
- Exact easing curves (e.g., power3.out, power4.out, cubic-bezier(0.16, 1, 0.3, 1))
- Stagger delays (words: 0.04s, cards: 0.08s)
- Pinned section coordinates and scrub ratios

5. WEBGL / SHADER / CANVAS SPECIFICATIONS
- Canvas role (e.g. background grid warp, liquid metal border, interactive 3D globe, cursor ripple)
- Performance safeguards: Device pixel ratio capped at 1.5/2.0, offscreen pause, context loss handling
- Framework integration (React Three Fiber / Three.js / Cobe.js / vanilla WebGL)

6. ZERO-PLACEHOLDER ASSET & CONTENT STRATEGY
- Concrete, persuasive copywriting (NO "Lorem ipsum" or "Title Here")
- Image and avatar strategy: instructions to use Antigravity generate_image or SVG vectors
- Icon system: Lucide / Solar / Iconify SVG definitions

7. ACCESSIBILITY & REDUCED-MOTION GUARDS
- Static CSS fallback for prefers-reduced-motion: reduce
- Visible focus rings and ARIA labels for interactive controls
- Unsplit accessible text for screen readers
```

## Step-by-Step Workflow

1. **Inspect the Video**:
   - Extract frame milestones (Hero entrance, primary scroll reveal, hover micro-interactions, footer transition).
   - Identify whether smooth-scroll, WebGL canvas, or 3D particles are present.

2. **Deconstruct Layers**:
   - Map timing and easing (is it physical springs or smooth cinematic power curves?).
   - Extract color swatches and typography pairings.

3. **Format Output**:
   - Output the prompt inside a single clean fenced code block for direct execution in Antigravity or chat.

# Gemini 3.7 Flash (High): Prompt Architecture & Engineering Guide

This guide explains how the **Antigravity Design OS** crafts deterministic, production-ready prompts tailored specifically for **Gemini 3.7 Flash (High)**.

---

## 1. Why Gemini 3.7 Flash (High) Needs a 7-Layer Contract

Legacy prompt generators (such as those targeting Fable 5 or standard Claude models) often rely on high-level aesthetic adjectives (*"make it look luxurious, modern, and dark"*). 

While **Gemini 3.7 Flash (High)** possesses immense reasoning capabilities, long-context comprehension, and rapid code generation speed, leaving design choices ambiguous causes the model to fall back onto generic web templates (plain blue accents, centered bootstrap heroes, and "Lorem ipsum" copy).

When supplied with a **7-Layer Technical Contract**, Gemini 3.7 Flash (High) produces bespoke, Awwwards-tier web code on the very first turn.

---

## 2. The 7-Layer Technical Contract

```text
=== GEMINI 3.7 FLASH (HIGH) BUILDER CONTRACT ===

1. VISUAL THESIS & ARCHETYPE
   - Exact aesthetic direction (Editorial Tech, Glass Dark UI, Retro Dither, Clean Beige)
   - Layout rhythm (Asymmetrical multi-column grid, sticky split wireframe, bento matrix)
   - First viewport visual moment (3D globe, liquid metal CTA, interactive shader canvas)

2. TOKENS & DESIGN SYSTEM VARIABLES
   - Precise color palette (Background, Surface, Border, Primary Accent, Glow) in CSS HSL or HEX
   - Typography system (Display serif/grotesk font with clamp() responsive scales, sans body, mono tags)
   - Elevation and border-radius tokens

3. SEMANTIC DOM & LAYOUT ARCHITECTURE
   - Exhaustive section-by-section breakdown (<header> -> <main> -> <section id="..."> -> <footer>)
   - HTML5 semantic elements without generic <div> wrapper soup
   - Explicit responsive collapse rules (Desktop 1440px+, Tablet 768px-1024px, Mobile <640px)

4. MOTION & SCROLL CHOREOGRAPHY (GSAP + LENIS)
   - Single smooth-scroll engine (Lenis) driving GSAP RAF ticker
   - Exact easing curves (power3.out, power4.out, cubic-bezier(0.16, 1, 0.3, 1))
   - Stagger delays (words: 0.04s, cards: 0.08s)
   - ScrollTrigger reveal thresholds (start: "top 82%", scrub: 0.8 to 1.2)

5. WEBGL / SHADER / CANVAS SPECIFICATIONS
   - Single clear responsibility for canvas (e.g. background warp, liquid metal border, rotating globe)
   - Device pixel ratio capped at Math.min(window.devicePixelRatio, 1.5) for 60fps performance
   - Explicit lifecycle teardown (canceling animation frames, disposing materials/textures, event cleanup)

6. ZERO-PLACEHOLDER MANDATE
   - Concrete, highly persuasive copywriting tailored to the product domain (NO "Lorem ipsum" or "Title Here")
   - Image & avatar strategy: Explicit prompt instructions for Antigravity `generate_image` or clean SVG vectors
   - Icons: Cohesive Iconify Solar Duotone or Lucide SVG definitions

7. ACCESSIBILITY & REDUCED-MOTION GUARDS
   - Static CSS fallback when window.matchMedia('(prefers-reduced-motion: reduce)') is true
   - Visible keyboard focus rings (focus-visible:ring-2) and semantic landmark tags
   - Unsplit accessible text names for screen readers
```

---

## 3. How Skills Formulate Superprompts

When using [`video-to-superprompt`](file:///d:/Design-OS/.agents/skills/video-to-superprompt/SKILL.md) or [`html-to-interaction-prompts`](file:///d:/Design-OS/.agents/skills/html-to-interaction-prompts/SKILL.md):

1. **Input**: Screen recording video, Framer template preview URL, or raw HTML reference.
2. **Deconstruction**: The skill extracts the motion curve, color tokens, layout grid, and shader logic.
3. **Synthesis**: The skill formats the output directly into the 7-Layer Contract.
4. **Execution in Antigravity**: You can immediately feed this prompt to Gemini 3.7 Flash in Antigravity to build or remix the page in React, Next.js, or Vite.

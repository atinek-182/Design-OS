# Gemini 3.7 Flash (High) 7-Layer Prompt Contract

When generating or adapting prompts for **Gemini 3.7 Flash (High)** in Antigravity, format the output using this deterministic 7-layer contract.

```text
=== GEMINI 3.7 FLASH (HIGH) BUILDER CONTRACT ===

1. VISUAL THESIS & ARCHETYPE
- Aesthetic Direction: [e.g. Editorial Tech / Modern Glass / Clean Beige / Cyber Dither / Awwwards Luxury]
- Spatial Rhythm: [e.g. Asymmetrical multi-column grid, 12-col bento, sticky split wireframe]
- Hero Visual Moment: [e.g. 3D Cobe globe, liquid metal CTA, interactive particle trail]

2. TOKENS & DESIGN SYSTEM VARIABLES
- Background: hsl(var(--bg) / <alpha>) or #hex
- Surface / Cards: hsl(var(--card)) with 1px border hsl(var(--border))
- Accent & Glow: hsl(var(--primary)) with 0.15-0.30 alpha glow
- Typography: Display serif/grotesk (Hero 64px-96px clamp), Sans body (16px), Mono metadata (12px-13px)
- Radii: sm: 6px, md: 12px, lg: 20px, full: 9999px

3. SEMANTIC DOM & LAYOUT ARCHITECTURE
- <header>: Sticky translucent top bar with logo, sparse nav links, action button
- <main>:
  - <section id="hero">: High-impact headline, subhead, primary CTA with liquid metal border, hero visual
  - <section id="proof">: Honest metric counters or brand monochrome mark strip
  - <section id="features">: Asymmetric feature modules with progressive blur and fine grid rules
  - <section id="interactive">: Canvas/WebGL interactive element (3D globe, shader, or physics tags)
  - <section id="pricing">: Clear tiered cards with highlighted primary plan
  - <section id="cta">: Final focused conversion banner
- <footer>: Multi-column sitemap, legal marks, system status badge

4. MOTION & SCROLL CHOREOGRAPHY (GSAP + LENIS)
- Smooth Scroll: Lenis initialized with lerp: 0.08, synced via GSAP ticker
- Heading Reveal: Staggered word-by-word reveal (0.04s stagger, ease: "power3.out", duration: 0.85s)
- Cards & Media: Scrubbed ScrollTrigger reveals (start: "top 85%", y: 32, opacity: 0 -> 1)
- Micro-interactions: 0.25s cubic-bezier(0.16, 1, 0.3, 1) hover lifts and border glow brightenings

5. WEBGL / SHADER / CANVAS SPECIFICATIONS
- Canvas Role: [e.g. Background grid warp / 3D Globe / Liquid metal border]
- DPR Cap: Math.min(window.devicePixelRatio, 1.5) to maintain 60fps
- Lifecycle: Automatic event listener teardown, requestAnimationFrame cancellation, WebGL context disposal

6. ZERO-PLACEHOLDER ASSET & CONTENT STRATEGY
- Persuasive, realistic copy for product domain (No "Lorem ipsum")
- Images: Specific prompt instructions for Antigravity `generate_image` or high-resolution SVG vectors
- Icons: Solar Duotone or Lucide icons via Iconify

7. ACCESSIBILITY & REDUCED-MOTION GUARDS
- Static CSS fallback when `window.matchMedia('(prefers-reduced-motion: reduce)')` is true
- Visible focus rings (`focus-visible:ring-2`)
- Screen-reader accessible markup (`aria-label`, semantic landmarks)
```

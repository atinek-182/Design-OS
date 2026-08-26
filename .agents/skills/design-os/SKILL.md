---
name: design-os
description: Use when executing the master 10-stage autonomous design engineering operating system, building high-end web interfaces, running multi-archetype Socratic discovery with 3 visual approaches per question, scaffolding 7-file context, ingesting multi-modal references into reference/MANIFEST.md, or resuming cross-session state with zero loss. Invokable directly via /design-os.
argument-hint: '[init|stage <1-10>|resume|verify|audit]'
---

# Antigravity Design OS (`/design-os`)

The master orchestration engine of the Antigravity Design OS. Coordinates all 126+ modular skills through a 10-stage sequential, non-conflicting pipeline backed by a 7-file context foundation, deterministic Python math, and multi-session state persistence.

---

## ⚡ Invocation & Tri-Mode Routing

- **Slash Command**: Explicitly run `/design-os [init|stage <1-10>|resume|verify|audit]` in chat.
- **Dynamic Intent Matching**: Triggered when designing a new web interface, landing page, app shell, or redesigning an existing UI.
- **Inter-Skill Calling**: Programmatically invokable by parent skills or subagents.

---

## 🗺️ The 10-Stage Design Engineering Pipeline

```
[Stages 1–5: Deep Planning & Analysis — Zero Code Generation]
  ├── Stage 1: Socratic Brand, Mood & Tech Stack Discovery (3 Creative Approaches per question)
  ├── Stage 2: Multi-Modal Reference Ingestion & Deconstruction (reference/MANIFEST.md)
  ├── Stage 3: Deterministic Token & Contrast Math (OKLCH, Fluid Scales, WCAG 2.2 AA)
  ├── Stage 4: Macrostructure & Information Architecture Rotation (Anti-Monoculture)
  └── Stage 5: Motion Physics & Interaction Choreography (GSAP/Lenis Scroll Specs)

[Stages 6–10: Implementation, Asset Binding & Multi-Engine Verification]
  ├── Stage 6: Layout Skeleton & Responsive Grid Scaffolding
  ├── Stage 7: Component Crafting & Visual Surface Layering (Glass, Borders, Shaders)
  ├── Stage 8: Deterministic Asset Binding (CC0 Openverse Photos, Iconify Solar Vectors)
  ├── Stage 9: Playwright 5-Viewport Visual Quality Gate (Self-Healing + User Approval)
  └── Stage 10: Multi-Engine AST Anti-Slop Audit & Final Handoff
```

---

## 🏛️ The 7-File Design Context Foundation

When initialized via `/design-os init`, the engine scaffolds:
1. `context/1-brand-and-vision.md`: Project purpose, buyer persona, 3 creative pillars, and target stack.
2. `context/2-design-tokens.json`: Mathematical OKLCH palette, contrast matrix, and fluid typography scales.
3. `context/3-ui-manifest.md`: Component specs, state matrix, and Keep-vs-Discard deconstruction.
4. `context/4-motion-choreography.md`: GSAP timelines, ScrollTrigger specs, and cubic-bezier easing curves.
5. `context/5-code-standards.md`: Stack-specific AST rules (React/Next.js/Vite/Astro/HTML5) and compilation safety.
6. `context/6-progress-tracker.md`: Active stage tracker, DoD checklist, and multi-session resume anchor.
7. `context/7-seo-and-a11y.md`: Heading hierarchy, ARIA roles, focus ring tokens, and metadata.

---

## 🎭 Socratic Discovery Questionnaire (Stages 1–5)

During Stages 1–5, the engine asks 10–20 deep Socratic questions, **always presenting 3 distinct creative/visual approaches per question**:

### Stage 1: Brand DNA & Tech Stack
1. **Target Tech Stack Selection**:
   - *Approach A*: Next.js 15 (App Router) + React 19 + Tailwind v4 + GSAP.
   - *Approach B*: Vite + React + TypeScript + Vanilla CSS Modules.
   - *Approach C*: Pure Semantic HTML5 + Modern CSS Custom Properties + Vanilla JS (Zero-dep).
   - *(Or custom: Astro, Svelte, Vue, Java/SSR, etc.)*
2. **Visual & Aesthetic Archetype**:
   - *Approach A (Dark Precision Glassmorphic)*: Deep obsidian (#090d16), frosted glass cards, subtle 1px border gradients, and mono utility badges (Linear/Raycast vibe).
   - *Approach B (Warm Editorial Neo-Brutalism)*: Warm parchment (#F7F4EE), crisp structural borders, editorial serif headlines, and tactile offset button shadows (Cosmos vibe).
   - *Approach C (High-Impact Minimalist Luxury)*: Monumental display typography, full-bleed media bands, sticky parallax storytelling, and hardware-grade finish (Apple vibe).
3. **Emotional Impact & Buyer Trigger**:
   - *Approach A*: Technical authority & instant developer confidence.
   - *Approach B*: Sophisticated craftsmanship & boutique luxury feel.
   - *Approach C*: High-energy product momentum & conversion velocity.

### Stage 2: References & Deconstruction
- Prompts for URLs, screenshots, or motion videos.
- Automatically invokes `video-to-superprompt`, `explain-interface`, or falls back to `references/vault/archetypes/`.
- Conducts Keep vs. Discard Socratic review and re-binds styles into project OKLCH tokens in `reference/MANIFEST.md`.

### Stage 3: Tokens & Contrast Floor
- Runs `python scripts/design_os.py contrast` and `python scripts/design_os.py palette`.
- Enforces strict WCAG 2.2 AA compliance ($\ge 4.5:1$ text, $\ge 3.0:1$ UI).

### Stage 4: Macrostructure & Layout Skeleton
- Rotates across 7 distinct anti-monoculture macrostructures (Bento Grid, Editorial Band, Split-Screen Canvas, Sticky Storytelling, etc.).

### Stage 5: Motion Physics & Interaction Spec
- Calibrates GSAP scroll physics, bezier curves (`[0.16, 1, 0.3, 1]`), Lenis smooth scroll, and micro-press states.

---

## 🔄 Multi-Session Zero-Loss Resume Protocol (`/design-os resume`)

When resuming work in a fresh chat session:
1. Run `/design-os resume` or `python scripts/design_os.py resume`.
2. The AI immediately reads:
   - `context/6-progress-tracker.md` (identifies active stage and completed DoD)
   - `docs/wayfinder/design-map.md` (reloads session road map)
   - `context/2-design-tokens.json` (re-loads active design tokens)
3. Outputs a crisp 3-line resumption brief and proceeds to the active stage without re-asking settled questions.

---

## 🛡️ Tri-Engine Quality Gate (Stages 9–10)

1. **Autonomous Self-Healing Loop**:
   - Automatically catches and repairs horizontal scroll bugs on 375px mobile, contrast slips, and missing image dimensions.
2. **Playwright 5-Viewport Visual Gate**:
   - Generates full-page screenshots across: Desktop (1920px), Laptop (1440px), Tablet (768px), Mobile Portrait (375px), Mobile Landscape (667px).
   - Presents clickable file links in chat for operator visual review.
3. **AST Anti-Slop Audit**:
   - Runs `python scripts/design_os.py scan` checking for generic cards, raw hex colors, missing ARIA tags, and placeholder text before final handoff.

---

## 🔒 Hard Execution Mandates

1. **Planning-First Gate**: Stages 1–5 must be complete and approved before any source code is modified in Stage 6.
2. **Deterministic Tokens**: Never emit inline hex codes. Use CSS variables bound to `context/2-design-tokens.json`.
3. **Zero Placeholders**: Only real Openverse CC0 photography or Iconify Solar Duotone vectors are permitted.
4. **Pre-Coding Backstop**: Always confirm: *"Is there anything else remaining before we touch the code?"*

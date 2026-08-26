# Antigravity Design OS: Master Workflow Engine & Refined 12-Stage Architecture

> **The Definitive Execution Manual for Orchestrating 122+ Design Engineering Skills across Enterprise Products, High-Concept Awwwards Flagships, and Micro-Component Sprints.**

---

## 1. Architectural Philosophy & Zero-Amnesia Protocol

Traditional AI-assisted design and web engineering collapses because of two fatal flaws:
1. **Context Bloat & Hallucination**: Dumping dozens of skill prompt rules and broad instructions into a single chat session causes the LLM to thrash, lose earlier constraints, and produce generic "AI slop".
2. **Cross-Session Memory Loss**: When resuming work in a fresh session, the AI has zero recollection of previous architectural decisions, overwriting intentional patterns.

**The Design OS Solution**:
- **48 Atomic Sub-Phases across 12 Discrete Stages**: Each Sub-Phase only invokes the 1–3 specific skills needed for its micro-task.
- **Persistent 8-File Context Foundation**: All state, decisions, tokens, and progress are stored in deterministic files (`context/1-brand-and-vision.md` through `context/7-seo-and-a11y.md` + `reference/MANIFEST.md`).
- **Autonomous Progress Ledger (`context/6-progress-tracker.md`)**: Records the active Stage, active Sub-Phase, consumed inputs, generated outputs, DoD checkboxes, and instant resume commands (`/design-os resume` or `npm run design:resume`).

---

## 2. The 3 Dedicated Execution Tracks

Depending on the project scope, the system executes through one of 3 specialized tracks:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ TRACK 1: --mode awwwards (Creative Digital Flagships & High-Concept Scrollytelling)    │
│ Route: 1.4 (Stack) ➔ 2.2 (Vault) ➔ 4 (Tokens) ➔ 5.2 (Obys Grid) ➔ 6.3 (Shaders) ➔      │
│        8.2 (GSAP/Lenis) ➔ 8.4 (WebGL) ➔ 9.1 (Solar Icons) ➔ 11 (Playwright/VibeSec/SEO)│
└────────────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────────────┐
│ TRACK 2: --mode product (Universal 12-Stage Enterprise Product & Design System)        │
│ Route: Full 12 Stages (Phases 1.1 through 12.4) End-to-End                             │
└────────────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────────────┐
│ TRACK 3: --mode component (Micro-Feature & Component Polish Sprint)                    │
│ Route: 4.1 (Tokens) ➔ 7.1 (Component Spec) ➔ 8.3 (Micro-Physics) ➔ 10.1 (Break Stress)│
│        ➔ 11.1 (5-Viewport Visual QA)                                                   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. The 12-Stage / 48-Phase Master Skill Allocation Matrix

Below is the complete, exhaustive mapping of all **122+ Design OS skills** organized by stage, sub-phase, trigger criteria, prerequisite inputs, and tangible output artifacts.

---

### STAGE 1: Socratic Problem Framing, UX Strategy & Stack Inception
*Objective: Uncover business goals, target audience, competitive moats, metrics, and lock the technical stack.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **1.1** | Problem Framing & Value Proposition | [`design-brief`](../../.agents/skills/design-brief/SKILL.md), [`jobs-to-be-done`](../../.agents/skills/jobs-to-be-done/SKILL.md), [`business-design`](../../.agents/skills/business-design/SKILL.md), [`workflow-frame-problem`](../../.agents/skills/workflow-frame-problem/SKILL.md) | User prompt, project brief | `context/1-brand-and-vision.md` (Part 1: Goals & JTBD) |
| **1.2** | User Personas & Mental Models | [`user-persona`](../../.agents/skills/user-persona/SKILL.md), [`cognitive-ux-laws`](../../.agents/skills/cognitive-ux-laws/SKILL.md), [`stakeholder-alignment`](../../.agents/skills/stakeholder-alignment/SKILL.md), [`workflow-discover`](../../.agents/skills/workflow-discover/SKILL.md) | Audience demographics, user interviews | `context/1-brand-and-vision.md` (Part 2: Personas & Mental Models) |
| **1.3** | Competitive Moats & Opportunity Scoring | [`competitive-analysis`](../../.agents/skills/competitive-analysis/SKILL.md), [`opportunity-framework`](../../.agents/skills/opportunity-framework/SKILL.md), [`metrics-definition`](../../.agents/skills/metrics-definition/SKILL.md), [`north-star-vision`](../../.agents/skills/north-star-vision/SKILL.md), [`workflow-benchmark`](../../.agents/skills/workflow-benchmark/SKILL.md) | Competitor URLs, product scope | `context/1-brand-and-vision.md` (Part 3: Moats & KPIs) |
| **1.4** | Target Tech Stack & Invariants | [`context/5-code-standards.md`](../../templates/context/5-code-standards.md) | Stack selection (React/Next.js/Vite/Astro/HTML5/Vanilla CSS/Svelte/Vue) | `context/5-code-standards.md` |

---

### STAGE 2: Multi-Modal Reference Ingestion, Awwwards Vault & Mood Lock
*Objective: Ingest real-world inspiration, deconstruct visual mechanisms, and lock the creative aesthetic.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **2.1** | Multi-Modal Asset Harvesting | [`video-to-superprompt`](../../.agents/skills/video-to-superprompt/SKILL.md), [`html-to-interaction-prompts`](../../.agents/skills/html-to-interaction-prompts/SKILL.md), [`explain-interface`](../../.agents/skills/explain-interface/SKILL.md), [`daily-ui-inspiration-capture`](../../.agents/skills/daily-ui-inspiration-capture/SKILL.md) | Reference videos, live URLs, screenshots | Raw component interaction recipes |
| **2.2** | Awwwards Vault Sourcing | `awwwards-research-vault`, `website-design-engine` (24-repo vault: Obys, Spylt, Mojito, Radiant shaders) | Project mood, flagship intent | Curated reference code snippets in `references/vault/` |
| **2.3** | Socratic Keep-vs-Discard & Mood Lock | [`tastemaker`](../../.agents/skills/tastemaker/SKILL.md), [`clean-minimal-beige-light-mode`](../../.agents/skills/clean-minimal-beige-light-mode/SKILL.md), [`high-contrast-skeuomorphic-clean`](../../.agents/skills/high-contrast-skeuomorphic-clean/SKILL.md), [`mesh-gradient-dark-blue-clean`](../../.agents/skills/mesh-gradient-dark-blue-clean/SKILL.md), [`editorial-tech`](../../.agents/skills/editorial-tech/SKILL.md), [`glass-dark-ui`](../../.agents/skills/glass-dark-ui/SKILL.md) | Reference manifests | `reference/MANIFEST.md` & `.tastemaker/style-lock.md` |

---

### STAGE 3: Information Architecture, Content Strategy & User Flows
*Objective: Structure all content hierarchy, navigation models, and user journeys before touching layout.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **3.1** | Content Strategy & Research Synthesis | [`content-strategy`](../../.agents/skills/content-strategy/SKILL.md), [`card-sort-analysis`](../../.agents/skills/card-sort-analysis/SKILL.md), [`affinity-diagram`](../../.agents/skills/affinity-diagram/SKILL.md), [`research-repository`](../../.agents/skills/research-repository/SKILL.md), [`workflow-synthesize`](../../.agents/skills/workflow-synthesize/SKILL.md) | User research data, copy briefs | Content taxonomy and page inventories |
| **3.2** | Information Architecture & Navigation | [`information-architecture`](../../.agents/skills/information-architecture/SKILL.md), [`navigation-patterns`](../../.agents/skills/navigation-patterns/SKILL.md), [`search-ux`](../../.agents/skills/search-ux/SKILL.md) | Page inventory, user tasks | Sitemap & navigation model |
| **3.3** | User Flows & Service Blueprints | [`user-flow-diagram`](../../.agents/skills/user-flow-diagram/SKILL.md), [`journey-map`](../../.agents/skills/journey-map/SKILL.md), [`experience-map`](../../.agents/skills/experience-map/SKILL.md), [`service-blueprint`](../../.agents/skills/service-blueprint/SKILL.md), [`workflow-design-interaction`](../../.agents/skills/workflow-design-interaction/SKILL.md) | Navigation model, core actions | Screen-level flow diagrams |
| **3.4** | Wireframe Layout & Spatial Priority | [`wireframe-spec`](../../.agents/skills/wireframe-spec/SKILL.md), [`layout-grid`](../../.agents/skills/better-layout/SKILL.md) | User flows | Wireframe specifications |

---

### STAGE 4: Mathematical Token Generation & Contrast Flooring
*Objective: Generate deterministic OKLCH color palettes, fluid typography, and verify WCAG 2.2 AA contrast.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **4.1** | OKLCH Harmony & Palette Generation | [`better-colors`](../../.agents/skills/better-colors/SKILL.md), `python scripts/design_os.py palette` | Brand mood & base hue | Procedural OKLCH palette |
| **4.2** | Mathematical Contrast Flooring | `python scripts/design_os.py contrast`, `check:contrast` | Palette candidate hex values | WCAG 2.2 AA (4.5:1 / 3:1) & APCA contrast matrix |
| **4.3** | Fluid Typography Scales & OpenType | [`better-typography`](../../.agents/skills/better-typography/SKILL.md), modular scale calculation | Target density | Fluid `clamp()` type scale tokens |
| **4.4** | Theming Architecture & Token Manifest | [`design-token`](../../.agents/skills/design-token/SKILL.md), [`theming-system`](../../.agents/skills/theming-system/SKILL.md), [`naming-convention`](../../.agents/skills/naming-convention/SKILL.md), [`gestalt-principles`](../../.agents/skills/gestalt-principles/SKILL.md) | Verified contrast tokens | `context/2-design-tokens.json` |

---

### STAGE 5: Macrostructure Rotation, Section Rhythm & Obys Grid Scaffolding
*Objective: Break the AI monoculture with dynamic layout rotations and Obys 140px spatial math.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **5.1** | Macrostructure Rotation | Anti-monoculture hero rotation from 7 archetypes (`.tastemaker/log.json`) | Project archetype | Hero & section structure decision |
| **5.2** | Obys Spatial Padding & Bento Grids | Obys 140px desktop padding math, 12-column bento grids | `context/2-design-tokens.json` | Responsive grid scaffolding |
| **5.3** | Responsive Breakpoint Matrix | 1920px (ultrawide), 1440px (desktop), 1024px (tablet landscape), 768px (tablet portrait), 375px (mobile) | Viewport standards | Grid CSS media queries |
| **5.4** | UI Component Manifest & State Matrix | [`component-spec`](../../.agents/skills/component-spec/SKILL.md) | Component inventory | `context/3-ui-manifest.md` |

---

### STAGE 6: Surface Aesthetics, Materiality & Atmospheric Shaders
*Objective: Apply tactile depth, skeuomorphic elevation, glassmorphism, and atmospheric textures.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **6.1** | Surface Materiality & Style Specialization | [`clean-minimal-beige-light-mode`](../../.agents/skills/clean-minimal-beige-light-mode/SKILL.md), [`high-contrast-skeuomorphic-clean`](../../.agents/skills/high-contrast-skeuomorphic-clean/SKILL.md), [`mesh-gradient-dark-blue-clean`](../../.agents/skills/mesh-gradient-dark-blue-clean/SKILL.md), [`editorial-tech`](../../.agents/skills/editorial-tech/SKILL.md), [`glass-dark-ui`](../../.agents/skills/glass-dark-ui/SKILL.md) | `.tastemaker/style-lock.md` | Surface styling tokens & classes |
| **6.2** | Elevation, Layered Depth & Borders | [`beautiful-shadows`](../../.agents/skills/beautiful-shadows/SKILL.md), [`css-border-gradient`](../../.agents/skills/css-border-gradient/SKILL.md), [`liquid-metal-border`](../../.agents/skills/liquid-metal-border/SKILL.md) | `context/2-design-tokens.json` | Concentric border radius & shadow rules |
| **6.3** | Atmospheric Textures & Shaders | [`dither-background`](../../.agents/skills/dither-background/SKILL.md), [`progressive-blur`](../../.agents/skills/progressive-blur/SKILL.md), 3% procedural SVG noise | Theme vibe | Backdrop filters & noise canvas overlay |

---

### STAGE 7: Component Engineering, Form UX & State Machines
*Objective: Build production-ready, type-safe components with exhaustive state coverage and resilient forms.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **7.1** | Component Specification & Props API | [`component-spec`](../../.agents/skills/component-spec/SKILL.md), [`pattern-library`](../../.agents/skills/pattern-library/SKILL.md), [`documentation-template`](../../.agents/skills/documentation-template/SKILL.md), [`workflow-create-component`](../../.agents/skills/workflow-create-component/SKILL.md) | `context/3-ui-manifest.md` | Reusable UI component modules |
| **7.2** | State Machine Logic & Transitions | [`state-machine`](../../.agents/skills/state-machine/SKILL.md), [`micro-interaction-spec`](../../.agents/skills/emil-design-eng/SKILL.md), [`workflow-map-states`](../../.agents/skills/workflow-map-states/SKILL.md) | Component spec | State transition matrices |
| **7.3** | Form UX, Validation & Feedback | [`form-design`](../../.agents/skills/form-design/SKILL.md), [`error-handling-ux`](../../.agents/skills/error-handling-ux/SKILL.md), [`ask-sonner`](../../.agents/skills/ask-sonner/SKILL.md), [`workflow-design-form`](../../.agents/skills/workflow-design-form/SKILL.md), [`workflow-error-flow`](../../.agents/skills/workflow-error-flow/SKILL.md) | Form schema | Accessible input components & toast triggers |
| **7.4** | Curated Dependency Selection | [`pick-ui-library`](../../.agents/skills/pick-ui-library/SKILL.md), Sonner, Lucide/Solar Duotone | Component needs | Verified dependency package manifest |

---

### STAGE 8: Motion Choreography, Kinetic Physics & WebGL FX
*Objective: Implement 60fps GSAP/Lenis scrollytelling, Apple-style springs, and interactive WebGL canvas stages.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **8.1** | Motion Physics & Bezier Tokens | [`context/4-motion-choreography.md`](../../templates/context/4-motion-choreography.md), spring physics parameters | Interaction goals | `context/4-motion-choreography.md` |
| **8.2** | GSAP ScrollTrigger & Lenis Scrollytelling | [`cinematic-gsap-lenis-motion-system`](../../.agents/skills/cinematic-gsap-lenis-motion-system/SKILL.md), [`build-awwwards-quality-sites`](../../.agents/skills/build-awwwards-quality-sites/SKILL.md), [`gsap-react`](../../.agents/skills/gsap-react/SKILL.md), [`staggered-word-reveal`](../../.agents/skills/staggered-word-reveal/SKILL.md) | Layout skeleton | Pinned scrollytelling timelines & text reveals |
| **8.3** | Micro-Interactions & Polish Details | [`emil-design-eng`](../../.agents/skills/emil-design-eng/SKILL.md), [`apple-design`](../../.agents/skills/apple-design/SKILL.md), [`beam-glow-states`](../../.agents/skills/beam-glow-states/SKILL.md) | Interactive components | Scale-on-press & magnetic cursor dynamics |
| **8.4** | Interactive WebGL Canvas & 2D Physics | [`threejs-webgl`](../../.agents/skills/threejs-webgl/SKILL.md), [`shader-cursor-effects`](../../.agents/skills/shader-cursor-effects/SKILL.md), [`matterjs`](../../.agents/skills/matterjs/SKILL.md), [`cobejs`](../../.agents/skills/cobejs/SKILL.md) | Hero stage & cards | Radiant WebGL shaders & physics simulations |

---

### STAGE 9: Deterministic Asset Binding & Media Pipeline
*Objective: Eliminate broken placeholders and "Lorem ipsum" with CC0 photography and Iconify vectors.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **9.1** | Vector Iconography Binding | [`solar-duotone-bold`](../../.agents/skills/solar-duotone-bold/SKILL.md), Iconify Solar Duotone Bold SVGs | UI icon requirements | Cohesive 2-tone vector icons |
| **9.2** | CC0 Photography Curation | `python scripts/design_os.py photos`, Openverse CC0 Photography API | Media keywords | High-res, authentic CC0 image assets |
| **9.3** | Concept Illustrations & Vectors | [`ideagram`](../../.agents/skills/ideagram/SKILL.md), [`illustration-style`](../../.agents/skills/illustration-style/SKILL.md), unDraw SVG library | Feature descriptions | Recolored, on-brand vector illustrations |

---

### STAGE 10: Edge-Case Stress Testing & Platform Adaptation
*Objective: Stress-test components against extreme viewports, long strings, i18n locales, and native gestures.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **10.1** | Destructive Stress Testing | [`break`](../../.agents/skills/break/SKILL.md) (320px viewport, 500-char strings, missing images) | Built components | Zero overflow & truncation hardening |
| **10.2** | Localization & Internationalization | [`localization-design`](../../.agents/skills/localization-design/SKILL.md) (RTL mirroring, string expansion) | UI layouts | Bidirectional CSS & dynamic measure bounds |
| **10.3** | Platform Adaptation & Native Gestures | [`platform-conventions`](../../.agents/skills/platform-conventions/SKILL.md), [`gesture-patterns`](../../.agents/skills/gesture-patterns/SKILL.md), [`animate-expo`](../../.agents/skills/animate-expo/SKILL.md), [`write-swift`](../../.agents/skills/write-swift/SKILL.md) | Mobile app targets | Touch hit targets (min 44x44px) & native sheets |

---

### STAGE 11: Multi-Engine Quality Gates: Visual QA, VibeSec, SEO & Self-Healing
*Objective: Automated 5-viewport screenshot capture, self-healing layout fixes, VibeSec audit, and SEO/GEO validation.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **11.1** | Playwright 5-Viewport Capture | Playwright automated visual capture (1920, 1440, 1024, 768, 375px) | Rendered web application | 5 Full-page PNG screenshot receipts |
| **11.2** | Autonomous Self-Healing Loop | Auto-detection & patching of horizontal scrollbars, clipped text, and contrast slips | Playwright audit logs | Clean, validated production CSS/DOM |
| **11.3** | Holistic Interface & A11y Review | [`better-interface`](../../.agents/skills/better-interface/SKILL.md), [`better-accessibility`](../../.agents/skills/better-accessibility/SKILL.md), [`better-layout`](../../.agents/skills/better-layout/SKILL.md), [`better-ui`](../../.agents/skills/better-ui/SKILL.md), [`better-writing`](../../.agents/skills/better-writing/SKILL.md), [`interfaces-that-feel`](../../.agents/skills/interfaces-that-feel/SKILL.md) | Visual screenshots & DOM | Ranked interface quality verdict |
| **11.4** | VibeSec & SecurityOS Hardening | `vibesec`, `security-os` (DOM XSS in WebGL, CSP headers, zero secret leaks) | Codebase files | Security compliance sign-off in `context/5-code-standards.md` |
| **11.5** | Technical SEO, Core Web Vitals & GEO | `seo-audit`, Schema.org JSON-LD, LCP < 1.2s mobile throttle | Page structure & metadata | `context/7-seo-and-a11y.md` |

---

### STAGE 12: Design Operations, Governance & Business Value Handoff
*Objective: Generate developer handoff packages, design system evolution rules, A/B experiments, and business impact decks.*

| Phase | Sub-Phase Name | Skills Invoked | Required Inputs | Output Artifacts |
| :--- | :--- | :--- | :--- | :--- |
| **12.1** | Developer Implementation Package | [`handoff-spec`](../../.agents/skills/handoff-spec/SKILL.md), [`design-review-process`](../../.agents/skills/design-review-process/SKILL.md), [`design-critique`](../../.agents/skills/design-critique/SKILL.md), [`design-rationale`](../../.agents/skills/design-rationale/SKILL.md), [`workflow-handoff`](../../.agents/skills/workflow-handoff/SKILL.md) | Validated codebase | Handoff specifications & rationale docs |
| **12.2** | Design System Governance & Adoption | [`design-system-governance`](../../.agents/skills/design-system-governance/SKILL.md), [`design-system-adoption`](../../.agents/skills/design-system-adoption/SKILL.md), [`naming-convention`](../../.agents/skills/naming-convention/SKILL.md), [`design-token-audit`](../../.agents/skills/design-token-audit/SKILL.md), [`version-control-strategy`](../../.agents/skills/version-control-strategy/SKILL.md) | Component library | System evolution rules & token registry |
| **12.3** | Quantitative Experiments & Testing | [`a-b-test-design`](../../.agents/skills/a-b-test-design/SKILL.md), [`usability-test-plan`](../../.agents/skills/usability-test-plan/SKILL.md), [`test-scenario`](../../.agents/skills/test-scenario/SKILL.md), [`diary-study-plan`](../../.agents/skills/diary-study-plan/SKILL.md), [`survey-design`](../../.agents/skills/survey-design/SKILL.md), [`workflow-experiment`](../../.agents/skills/workflow-experiment/SKILL.md) | Feature goals | A/B testing hypotheses & study protocols |
| **12.4** | Business Impact & Executive Case Studies | [`design-impact-reporting`](../../.agents/skills/design-impact-reporting/SKILL.md), [`case-study`](../../.agents/skills/case-study/SKILL.md), [`presentation-deck`](../../.agents/skills/presentation-deck/SKILL.md), [`stakeholder-alignment`](../../.agents/skills/stakeholder-alignment/SKILL.md), [`design-negotiation`](../../.agents/skills/design-negotiation/SKILL.md), [`team-workflow`](../../.agents/skills/team-workflow/SKILL.md) | Project metrics | Executive decks & portfolio case studies |

---

## 4. Cross-Session Resumption & State Management

In any new conversation session:
1. Run `/design-os resume` or `npm run design:resume`.
2. The AI reads `context/6-progress-tracker.md`.
3. The AI extracts:
   - **Active Stage & Sub-Phase** (e.g. `Stage 8.2 — GSAP Scrollytelling`).
   - **Active Track** (`--mode awwwards`, `--mode product`, or `--mode component`).
   - **Last Generated Artifact**.
4. The AI immediately resumes execution at the exact next sub-phase with zero prompt loss or hallucination.

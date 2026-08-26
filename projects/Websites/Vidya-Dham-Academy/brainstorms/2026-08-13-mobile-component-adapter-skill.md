# Mobile Component Adapter Skill: Socratic Discovery & Spec Brainstorm Notes
Date: 2026-08-13 · Goal: Design and spec new custom skill `.agents/skills/mobile-component-adapter/SKILL.md` · Operator: Atinek Maurya

## Executive Summary & Key Decisions
- Operator requested a dedicated mobile component audit and adaptation engine (`mobile-component-adapter`).
- Core capability: Audits any desktop UI component, conducts STORM 7-Lens research, runs a 3-to-5 pass `/roast` council red-teaming loop, and generates a fluid relative unit mobile code spec (`.tsx` + `styles.module.css`).

## Domain Vocabulary & Glossary (CONTEXT.md updates)
- **Mobile Component Adapter (`/mobile-component-adapter`)**: The canonical process skill for auditing and adapting third-party component references for 95% mobile-first performance.

## Q&A Log
### Q1 — Skill Trigger & Triple-Roast Architecture
- **Captured Decision**:
  - Skill Name: `mobile-component-adapter` (invokable via `/mobile-component-adapter` or dynamic intent).
  - Triple-Roast Execution: The skill invokes the full 5-pass `/roast` skill 3 SEPARATE TIMES across 3 distinct lifecycle stages:
    1. *Stage 1*: Pre-Flight & Raw Desktop Reference Audit (`/roast --domain code`).
    2. *Stage 2*: Fluid Relative Units & Touch Ergonomics Audit (`/roast --domain copy`).
    3. *Stage 3*: Final Code Spec & SecurityOS Audit (`/roast --domain code --deep`).
  - Output Reports: Generates `storm-reports/{component-slug}-mobile-briefing.html` and `context/specs/SPEC-{component-slug}.md`.
  - Auto-Triggers: Triggered automatically whenever any reference component is ingested into `reference/`.

## Q2 — Triple-Roast Failure Policy & SecurityOS Enforcement
- **Captured Decisions**:
  - Failure Verdict Policy: Option A (If any of the 3 `/roast` stages returns `RESHAPE` or `KILL`, halt execution, generate a `ROAST_REFINEMENT_SPEC`, and auto-patch before proceeding).
  - Frame Rate Rule: Option B (Allow soft non-composite CSS transitions when necessary, but output explicit inline performance warnings).
  - SecurityOS Boundary: Option A (Run SecurityOS audit on ALL mobile components - enforcing GPU memory cleanup, touch target safety, link URL sanitization, and Zod input validation).

## Q3 — WebGL/3D Mobile Fallback & Code Guide Architecture
- **Captured Decisions**:
  - WebGL Mobile GPU Rule: Option A (Clamp `devicePixelRatio` to `Math.min(window.devicePixelRatio, 1.5)`, reduce particle count by 60%, and pause rendering loops when canvas is offscreen via `IntersectionObserver`).
  - Hybrid Responsive Typography: Option A + Desktop Safeguard (Desktop typography protected via `@media (min-width: 1024px)`; mobile/tablet viewports `< 768px` use fluid `clamp(min, preferred, max)` with `rem`/`vw` units).
  - Code Spec Format: Option A (4-Module Spec: Component Architecture & Imports, Scoped CSS Module Tokens, Touch & Animation Lifecycle Guide, SecurityOS & Mobile Performance Verification Checklist).
  - Adversarial Roast Verdict: **GO (100% Approved)** logged in `brainstorms/roast_2026-08-13_mobile_adapter_skill_design.md`.




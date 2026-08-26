# Design OS Wayfinder & Multi-Session Navigational Road Map

> **Dynamic Visual State Chart, Execution Track Map, and Session Resume Protocol.**

---

## 📌 Global Project State
- **Project Name**: `[Project Name]`
- **Active Track**: `[--mode awwwards | --mode product | --mode component]`
- **Current Active Stage**: `[Stage 1 to 12]`
- **Current Sub-Phase**: `[Phase X.1 to X.4]`
- **Target Tech Stack**: `[React 19 / Next.js 15 / Vite / Astro / Pure HTML5/CSS / Svelte / Vue]`

---

## 🗺️ Cross-Session State Diagram

```mermaid
stateDiagram-v2
    [*] --> Stage1_Strategy : Problem Framing & Invariants
    Stage1_Strategy --> Stage2_References : Context 1 Locked
    Stage2_References --> Stage3_IA : MANIFEST.md & Style-Lock Saved
    Stage3_IA --> Stage4_Tokens : Sitemap & Flows Approved
    Stage4_Tokens --> Stage5_Grid : OKLCH & Contrast JSON Validated
    Stage5_Grid --> Stage6_Aesthetics : UI Manifest & Obys Grid Locked
    Stage6_Aesthetics --> Stage7_Components : Surfaces & Shaders Ready
    Stage7_Components --> Stage8_Motion : Component Specs & States Written
    Stage8_Motion --> Stage9_Assets : GSAP/Lenis & WebGL Choreographed
    Stage9_Assets --> Stage10_StressTesting : Solar Icons & CC0 Photos Bound
    Stage10_StressTesting --> Stage11_QualityGates : 320px & i18n Hardened
    Stage11_QualityGates --> Stage12_Governance : Playwright, VibeSec & SEO Passed
    Stage12_Governance --> [*] : Production Release & Handoff
```

---

## ⚡ Session Handoff Checkpoints
- **Last Active Target Artifact**: `[e.g. context/4-motion-choreography.md]`
- **Pending Decision / Operator Sign-off**: `[e.g. Awaiting review of Playwright 5-viewport screenshots]`
- **Resume Protocol**: In any fresh session, run `/design-os resume` or `npm run design:resume` to reload this roadmap and `context/6-progress-tracker.md`.

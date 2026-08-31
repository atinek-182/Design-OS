# Central Awwwards Vault Reference Manifest

This manifest tracks the deep deconstruction, mathematical token extraction, and Keep-vs-Discard decisions for the **23 curated Awwwards reference sites**.

---

## Ingested Vault Sites Index

| # | Site Name | Studio / Author | Pedigree | Primary Archetype | Status | Vault Path |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Active Theory** | Active Theory (LA / AMS) | Multiple Agency of the Year, Dev of the Year | Cyber-Minimalist Obsidian HUD & GLSL Particles | `[INGESTED]` | [`references/vault/active-theory/`](active-theory/ACTIVE_THEORY_DECONSTRUCTION.md) |
| **02** | *Pending Site #2* | *TBD* | *TBD* | *TBD* | `[PENDING]` | `references/vault/site-02/` |
| **03** | *Pending Site #3* | *TBD* | *TBD* | *TBD* | `[PENDING]` | `references/vault/site-03/` |
| ... | *Sites 04–23* | *TBD* | *TBD* | *TBD* | `[PENDING]` | `references/vault/...` |

---

## Vault 01: Active Theory Core Extractions

- **Tokens**: Cosmic Void Black (`oklch(0.06 0.01 260)`), Deep Slate (`oklch(0.12 0.02 260)`), Electric Sky Blue (`oklch(0.72 0.18 220)`), Neon Magenta (`oklch(0.65 0.25 320)`).
- **Typography**: Fluid headline clamp `clamp(2.5rem, 6.5vw + 1rem, 5.75rem)` + Monospace HUD labels (`letter-spacing: 0.2em`).
- **Kinetic Math**: Framerate-independent exponential damping `HydraMath.framerateNormalizeLerpAlpha` in [`hydra-math.ts`](active-theory/hydra-math.ts).
- **Shaders**: Particle field pointer repulsion and raymarched glow in [`particle-field.glsl`](active-theory/particle-field.glsl).
- **Audio Haptics**: 15ms synthetic oscillator sweep and dual-chord mode chime in [`hud-audio-engine.ts`](active-theory/hud-audio-engine.ts).

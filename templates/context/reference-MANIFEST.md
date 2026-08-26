# Reference Deconstruction Manifest (`reference/MANIFEST.md`)

## Ingested Reference Assets

### Reference 1: [Name / URL / Filename]
- **Source**: [e.g. `reference/assets/linear-hero.png` or `https://linear.app`]
- **Type**: [Screenshot / Video / Live URL / Component Snippet]
- **Analyzed Painting Layers**:
  1. `Background`: Deep matte black with subtle 1px border grid.
  2. `Surface`: Frosted glass card with 1px top-edge specular highlight (`oklch(1 0 0 / 0.12)`).
  3. `Typography`: High-contrast display sans paired with tight monospace metadata pills.
  4. `Motion Physics`: Smooth mouse-tracking spotlight gradient + spring-press on action buttons.

#### Socratic Keep vs. Discard Matrix
- **KEEP**:
  - [x] Asymmetrical bento grid hierarchy.
  - [x] 1px gradient border card treatment.
  - [x] Mono status badge tags.
- **DISCARD**:
  - [ ] Hardcoded purple accent (Re-bind to project OKLCH brand token).
  - [ ] Dense multi-tiered dropdown navigation.

#### Token Re-Binding Map
- `Reference Brand Color (#5E6AD2)` $\longrightarrow$ `var(--color-brand)` (`oklch(0.65 0.22 260)`)
- `Reference Background (#08090A)` $\longrightarrow$ `var(--color-bg-base)` (`oklch(0.12 0.015 260)`)
- `Reference Typography (Custom Font)` $\longrightarrow$ `var(--font-display)` (`'Space Grotesk'`)

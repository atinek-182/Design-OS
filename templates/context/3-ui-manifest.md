# 3. UI Manifest & Component Architecture

## Macrostructure Skeleton
- **Selected Layout Rotation Archetype**: [e.g. Asymmetrical Bento Grid / Editorial Magazine Tech / Full-Bleed Canvas / Minimal Tactile Flow]
- **Section Rhythm**:
  1. `Nav`: Floating glass capsule with brand mark, anchor links, and primary CTA.
  2. `Hero`: Asymmetric headline + live interactive WebGL shader demo + terminal badge.
  3. `Proof / Social`: Metric stat counters with mono tabular numbers and partner SVG vector bar.
  4. `Features (Bento)`: 4-cell asymmetric bento grid with interactive hover focus and liquid border active state.
  5. `Deep Dive / Architecture`: Interactive tabbed code/canvas switcher.
  6. `Pricing / Tiers`: Tactile elevated cards with concentric border radius and spring toggle.
  7. `FAQ`: Accordion with smooth height animation and zero layout shifts.
  8. `CTA & Footer`: Radial glow backdrop with single-input email capture and semantic multi-column footer.

---

## Component Specs & State Matrix

### 1. Button Core (`/components/ui/button`)
- **Variants**: `primary`, `secondary`, `glass`, `ghost`, `link`
- **Sizes**: `sm` (32px), `md` (40px), `lg` (48px)
- **Hover / Focus**: Scale to `0.98` on active press, 2px focus ring with `oklch(0.65 0.22 260)` offset by 2px.
- **Micro-animation**: Spring duration `0.2s`, ease `cubic-bezier(0.16, 1, 0.3, 1)`.

### 2. Card Surface (`/components/ui/card`)
- **Border**: Concentric inner radius ($R_{inner} = R_{outer} - P$).
- **Background**: Subtle glass layer with 1px border gradient highlight.
- **Shadow**: Layered elevation with inset specular highlight.

---

## Keep vs. Discard Rules (Inherited from `reference/MANIFEST.md`)
- **Keep**: [e.g. Linear's subtle border gradients, Apple's sticky scroll reveals]
- **Discard**: [e.g. Flat unstyled cards, low contrast gray-on-black text, cookie banners]

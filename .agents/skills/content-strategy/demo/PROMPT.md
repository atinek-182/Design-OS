# Content Strategy: Gemini 3.7 Flash Technical Superprompt

Use this 7-layer technical contract when prompting **Gemini 3.7 Flash (High)** in Antigravity or AI web builders.

```markdown
You are a senior design engineer implementing [COMPONENT_NAME] adhering to the "Content Strategy" specification.

### 1. Visual Thesis & Archetype
- **Aesthetic Direction**: Awwwards-tier visual craft with high intentionality. Never produce generic corporate placeholders.
- **Design Intent**: Use when define what content a product needs, how it is structured, and who owns it. Use when content itself is the problem. For the words in the interface use `ux-writing` (designer-toolkit); for structural hierarchy use `information-architecture`.

### 2. Tokens & Design System
- **Color Palette**: Neutral dark foundation (`#09090b` / `#18181b`) paired with crisp semantic accents and calibrated APCA/WCAG contrast pairs.
- **Typography Scale**: High-contrast typographic measure with tabular numbers for data alignments.
- **Surface Elevation**: Multi-stop diffuse neutral box shadows rather than harsh bounding strokes.

### 3. Layout & DOM Structure
- Semantic HTML5 structure with accessible `<main>`, `<header>`, and interactive controls.
- Responsive reflow guaranteed down to 320px width without horizontal scroll clipping.

### 4. Motion & Micro-Interactions
- Smooth micro-interactions: tactile scale-on-press (`scale(0.96)` @ 120ms `cubic-bezier(0.2, 0, 0, 1)`).
- Interruptible CSS transitions for user-triggered state switches.

### 5. Accessibility & Guards
- Full keyboard navigability with visible `:focus-visible` rings.
- Respect `prefers-reduced-motion: reduce` with instant opacity crossfades.
- Accessible ARIA labels on all icon-only actions.

### 6. Zero-Placeholder Asset Strategy
- No "Lorem Ipsum", no empty buttons, and no broken external image links. Use concrete domain copy.
```

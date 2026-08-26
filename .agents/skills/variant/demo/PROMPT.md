# Variant: Technical Gemini 3.7 Flash Superprompt Contract

Use this spec-driven prompt structure when asking Gemini 3.7 Flash to generate 3 multi-direction UI candidate variants with an in-page interactive switcher.

```markdown
You are an expert design engineer building 3 distinct variants of [COMPONENT_NAME] to answer "which of these directions works best?".

### 1. The Common Floor
- Every variant MUST clear the accessibility floor: visible focus ring (`:focus-visible`), accessible ARIA label, responsive reflow down to 320px width, and no reliance on color alone for critical status.
- Zero placeholder policy: Provide realistic, context-accurate domain copy and numeric metrics.

### 2. Multi-Direction Architectural Variations
Build 3 distinct variants selectable via an in-page floating pill switcher (`?variant=quiet|editorial|dense`):
1. **Quiet Variant**: Restrained visual weight, subtle neutral borders, minimal elevation, optimized for high-frequency daily scanning.
2. **Editorial Variant**: Bold display typography (`text-5xl`), layered ambient glow, generous whitespace padding, expressive micro-interactions.
3. **Dense Pro-Tool Variant**: High-density grid, tabular monospace numerals, structured metadata badges, optimized for financial/developer tooling.

### 3. Interactive Picker Spec
Include a lightweight, zero-dependency floating switcher bar at the top with keyboard hotkeys (`1`, `2`, `3`) to flip effortlessly between variants in live page context.
```

# Staging Area: Incoming Design Research & Assets

Drop incoming files, case studies, component code, screenshots, markdown research, or link lists here.

## Staging Folders
- `references/incoming/urls/` - Text files containing URLs to scrape and deconstruct.
- `references/incoming/case-studies/` - Markdown or PDF case studies and breakdown notes.
- `references/incoming/components/` - Code snippets, React/Vue/Svelte components, or CSS modules.
- `references/incoming/research/` - Design system teardowns, font matrices, or color palettes.

## Processing Protocol
When files are added here:
1. Extract design tokens into OKLCH format (`context/2-design-tokens.json`).
2. Catalog layout patterns & macrostructures into `references/vault/`.
3. Extract kinetic easing curves & GSAP timelines into `references/vault/motion-physics/`.
4. Update `references/MANIFEST.md` with Keep-vs-Discard decisions.

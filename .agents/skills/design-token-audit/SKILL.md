---
name: design-token-audit
description: "Use when audit token usage across a product for coverage, drift, and hard-coded values. Use when tokens exist and you suspect they are being bypassed. For defining tokens in the first place, use `design-token` (design-systems)."
---

# Design Token Audit
You are an expert in auditing design token adoption and consistency across products.
## What You Do
You audit how design tokens are used (or not used) in a product, identifying inconsistencies, gaps, and hard-coded values.
## Audit Scope
### Token Coverage
- What percentage of visual properties use tokens?
- Which properties are commonly hard-coded?
- Are the right tier of tokens used (global vs semantic vs component)?
### Token Consistency
- Are the same tokens used for the same purposes?
- Are there redundant tokens (different names, same value)?
- Are deprecated tokens still in use?
### Token Gaps
- Are there visual values that should be tokens but are not?
- Are there use cases not covered by the existing token set?
- Do custom values suggest missing token scale steps?
## Audit Process
1. **Inventory** — Extract all visual values from code/design files
2. **Categorize** — Group by type (color, spacing, typography, etc.)
3. **Map** — Match values to existing tokens
4. **Flag** — Identify hard-coded values, mismatches, and gaps
5. **Prioritize** — Rank issues by frequency and impact
6. **Recommend** — Suggest new tokens, migrations, and cleanup
## Audit Report Format
- Executive summary (token adoption percentage, key findings)
- Detailed findings by category
- Hard-coded value inventory with suggested token replacements
- Recommended new tokens
- Migration plan and priority
## Best Practices
- Audit both design files and code
- Automate detection where possible (lint rules)
- Focus on high-impact categories first (color, spacing)
- Track adoption over time
- Make the audit results actionable, not just informational

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.


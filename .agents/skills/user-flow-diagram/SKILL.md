---
name: user-flow-diagram
description: "Use when diagram screen-level paths, decision points, and branch logic. Use when specifying how a feature is traversed. For the emotional end-to-end arc, use `journey-map` (design-research)."
---

# User Flow Diagram
You are an expert in creating clear user flow diagrams that map paths through a product.
## What You Do
You create flow diagrams showing how users move through a product to accomplish goals, including decisions, branches, and error paths.
## Flow Diagram Elements
- **Entry point**: Where the user enters the flow (circle/oval)
- **Screen/page**: A view the user sees (rectangle)
- **Decision**: A branching point (diamond)
- **Action**: Something the user does (rounded rectangle)
- **System process**: Backend operation (rectangle with side bars)
- **End point**: Flow completion (circle with border)
- **Connector**: Arrow showing direction of flow
## Flow Types
- **Task flow**: Single path for a specific task (linear)
- **User flow**: Multiple paths based on user type or choice
- **Wire flow**: Flow combined with wireframe thumbnails
## Creating Effective Flows
1. Define the goal the flow accomplishes
2. Identify the entry point(s)
3. Map the happy path first
4. Add decision points and branches
5. Map error paths and recovery
6. Mark exit points
7. Note system actions happening in background
## Flow Annotations
- Screen names and key content
- Decision criteria at each branch
- Error conditions and handling
- System events and notifications
- Time delays or async processes
## Best Practices
- One flow per user goal
- Start with happy path, then add complexity
- Include error and edge case paths
- Keep flows readable (not too many branches on one diagram)
- Use consistent notation
- Label every arrow with the trigger/action

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.


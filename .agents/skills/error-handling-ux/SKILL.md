---
name: error-handling-ux
description: "Use when design error prevention, detection, and recovery across a product — message content, placement, and escape routes. Use when errors span multiple flows. For validation inside a single form, use `form-design`."
---

# Error Handling UX
You are an expert in designing error experiences that prevent, detect, and help users recover from errors.
## What You Do
You design error handling that minimizes frustration and helps users succeed.
## Error Handling Hierarchy
### 1. Prevention
- Inline validation before submission
- Smart defaults and suggestions
- Confirmation dialogs for destructive actions
- Constraint-based inputs (date pickers, dropdowns)
- Auto-save to prevent data loss
### 2. Detection
- Real-time field validation
- Form-level validation on submit
- Network error detection
- Timeout handling
- Permission and authentication checks
### 3. Communication
- Clear, human language (not error codes)
- Explain what happened and why
- Tell the user what to do next
- Place error messages near the source
- Use appropriate severity (error, warning, info)
### 4. Recovery
- Preserve user input (don't clear forms on error)
- Offer retry for transient failures
- Provide alternative paths
- Auto-retry with backoff for network errors
- Undo for accidental actions
## Error Message Format
- **What happened**: Brief, clear description
- **Why**: Context if helpful
- **What to do**: Specific action to resolve
## Error States by Context
- **Forms**: Inline per-field + summary at top
- **Pages**: Full-page error with retry/back options
- **Network**: Toast/banner with retry
- **Empty results**: Helpful empty state with suggestions
- **Permissions**: Explain what access is needed and how to get it
## Best Practices
- Never blame the user
- Be specific (not just 'Something went wrong')
- Maintain the user's context and data
- Log errors for debugging
- Test error paths as thoroughly as happy paths

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.


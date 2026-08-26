---
name: gesture-patterns
description: "Use when design gesture interactions for touch and pointer — swipe, drag, long-press, and their discoverability. Use when input is gestural. For OS-standard gestures on iOS and Android, use `platform-conventions` (ui-design)."
---

# Gesture Patterns
You are an expert in designing intuitive gesture-based interactions.
## What You Do
You design gesture interactions that feel natural and discoverable across touch and pointer devices.
## Core Gestures
- **Tap**: Select, activate, toggle
- **Double tap**: Zoom, like/favorite
- **Long press**: Context menu, reorder mode, preview
- **Swipe**: Navigate, dismiss, reveal actions
- **Pinch**: Zoom in/out
- **Rotate**: Rotate content (maps, images)
- **Drag**: Move, reorder, adjust values
- **Pull**: Refresh content (pull-to-refresh)
## Gesture Design Rules
### Discoverability
- Pair gestures with visible affordances
- Provide visual hints on first use
- Always have a non-gesture alternative (button/menu)
### Feedback
- Immediate visual response when gesture starts
- Progress indication during gesture
- Threshold indicators (snap points, rubber-banding)
- Completion confirmation
### Thresholds
- Minimum distance before gesture activates (10-15px)
- Velocity thresholds for flick/swipe
- Direction lock (horizontal vs vertical)
- Cancel zone (return to start to abort)
## Conflict Resolution
- Scroll vs swipe: direction lock after initial movement
- Tap vs long press: time threshold (500ms typical)
- Pinch vs drag: number of touch points
- System gestures take priority (back swipe, notification pull)
## Accessibility
- Every gesture must have a non-gesture alternative
- Support switch control and voice control
- Custom gestures should be documented
- Respect reduced-motion preferences for gesture animations
## Best Practices
- Follow platform conventions
- Keep gestures simple (one or two fingers)
- Provide undo for destructive gesture actions
- Test with one-handed use
- Don't require precision timing

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.


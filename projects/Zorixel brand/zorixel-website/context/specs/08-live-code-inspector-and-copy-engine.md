# SPEC-08: Live Code Inspector Drawer & One-Click Copy Engine

## 1. Feature Goal & Intent
Implement the slide-over component inspector modal drawer (`CodeInspectorDrawer.tsx`) featuring tabbed "Live Preview" vs "TSX / CSS Code" views, code highlighting, and one-click copy with toast feedback.

## 2. Technical Stack & Dependencies
- **Component:** `src/components/showcase/CodeInspectorDrawer.tsx`
- **Copy Engine:** `navigator.clipboard.writeText()` + toast notification

## 3. Verification & DoD
- Copy button successfully copies code snippet to clipboard.
- Playwright 5-viewport screenshot sweep.

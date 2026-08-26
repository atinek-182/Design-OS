# SPEC-06: Contextual Magnetic Custom Cursor & Hover Micro-Physics

## 1. Feature Goal & Intent
Create a custom smooth-inertia mouse cursor (`CustomCursor.tsx`) that translates magnetically toward buttons (`max 20px` pull) and shifts dynamic contextual modes on hover (`VIEW DEMO`, `COPY TSX`, `BUY KIT`, `PLAY VIDEO`).

## 2. Technical Stack & Dependencies
- **Component:** `src/components/common/CustomCursor.tsx`
- **Animation:** GSAP `quickTo` / Lerp follow cursor + React context state

## 3. Viewport Constraints & Verification
- Enabled on desktop (`> 1024px`). Automatically hidden on touch devices (`pointer: coarse`).
- Playwright screenshot sweep.

# SPEC-03: Component Vault & Interactive 3D Playground (`/components`)

## 1. Feature Goal & Intent
Build an interactive Component Vault page (`/components`) displaying catalog UI components, animated cards, motion presets, and design system elements with a toggle between a 3x3 Bento Grid view and an interactive 3D Spiral WebGL Gallery view (adapted from REF-002).

## 2. Technical Stack & Dependencies
- **Views:** 3x3 Bento Grid View / 3D Helical Spiral WebGL View (`SpiralShaderStage.tsx`)
- **State Management:** React `useState` / Next.js URL query params for filter tags and view mode
- **Component Sourcing:** Catalog components from Aceternity UI, Animate UI React, Forge UI, Vengence UI
- **Copy Engine:** `navigator.clipboard` with toast feedback

## 3. UI Component Breakdown & Viewport Choreography
- **View Toggle & Filter Bar:** Categories (All, Headers, Cards, Animations, Shaders, Form Elements) + View Mode Switcher ("Grid" vs "3D Spiral").
- **3D Spiral Gallery View:** Interactive Three.js spiral cylinder displaying Zorixel component cards with raycasting click listeners.
- **Preview Modal Drawer:** Fullscreen/drawer modal rendering the selected component with tabbed "Preview" vs "TSX/CSS Code" views.

## 4. Performance & Token Discipline
- All showcase components bound strictly to Zorixel OKLCH design tokens.
- Dynamic code highlighter loaded lazily to reduce initial bundle size.

## 5. Verification & DoD
- Interactive verification: Switching between Grid and 3D Spiral view renders smoothly without full page reloads.
- Playwright 5-viewport screenshot sweep.

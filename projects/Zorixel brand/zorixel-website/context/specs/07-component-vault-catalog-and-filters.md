# SPEC-07: Component Vault Catalog Grid & Filter Engine (`/components`)

## 1. Feature Goal & Intent
Build the main Component Vault page (`/components`) displaying 300+ cataloged UI components with category tabs (All, Headers, Cards, Animations, Shaders, Form Elements), real-time search, and a view mode toggle ("Bento Grid" vs "3D Spiral").

## 2. Technical Stack & Dependencies
- **Data Source:** `component_registry_cli.py` & local JSON manifests
- **View Toggle:** React state switcher between 3x3 Bento Grid and Three.js 3D Spiral

## 3. Verification & DoD
- Filtering and search update instantly without full page reloads.
- Playwright 5-viewport screenshot sweep.

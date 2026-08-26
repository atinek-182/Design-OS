# SPEC-04: 3D Helical Spiral WebGL Shader Engine (REF-002 Deconstruction)

## 1. Feature Goal & Intent
Build the parametric 3D Helical Spiral WebGL Shader stage (`SpiralShaderStage.tsx`) adapted from `reference/shader-gallary/`. Operates on both the Home Hero (`/`) and Component Vault (`/components`).

## 2. Technical Stack & Dependencies
- **Engine:** Three.js `BufferGeometry` + Custom `ShaderMaterial` (`vertexShader` & `fragmentShader`)
- **Physics:** Lenis scroll velocity spin (`spinVelocity = e.velocity * scrollRotationMultiplier`) + mouse parallax tilt
- **Tiles:** Displays Zorixel UI component previews and template cards in 3D space with raycasting click listeners

## 3. Verification & DoD
- Interactive verification: Scroll accelerates 3D rotation, clicking tiles triggers component detail drawer.
- Playwright 5-viewport screenshot sweep with zero WebGL context loss.

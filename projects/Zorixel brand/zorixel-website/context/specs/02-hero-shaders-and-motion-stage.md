# SPEC-02: Hero Visual Stage, 3D Helical Spiral Shader & Motion Architecture

## 1. Feature Goal & Intent
Create an award-winning luxury hero visual stage on the Home page (`/`) combining a parametric 3D Helical Spiral WebGL shader stage (`SpiralShaderStage.tsx`) with GSAP ScrollTrigger typography reveals (`Havock` display headline, `Rosehot` subhead, `Electric Crimson` CTA button).

## 2. Technical Stack & Deconstructed Reference (REF-002)
- **3D Spiral Engine:** Three.js `BufferGeometry` parametric cylinder + `ShaderMaterial` (`reference/shader-gallary/`)
- **Fragment Shader:** World normal camera lighting falloff (`dot(-normalize(vWorldNormal), viewDir)`) creating metallic highlights on Zorixel UI cards
- **Animation Physics:** Lenis smooth scroll velocity mapped to 3D rotation momentum (`spinVelocity = e.velocity * scrollRotationMultiplier`) + mouse parallax tilt
- **Typography:** `Havock` Display Headline, `Rosehot` Subhead, `AICON` Accent Badges

## 3. UI Component Breakdown & Viewport Choreography
- **Hero Title Block:** Big middle display title featuring Havock typography with smooth character reveal animations.
- **3D Spiral WebGL Stage:** Floating 3D spiral displaying Zorixel UI template screenshots and component previews.
- **Interactive Raycasting:** Clicking a 3D spiral tile opens a slide-over modal drawer displaying component details.
- **CTA Actions:** Primary CTA "Explore Component Vault" (`Electric Crimson` background) and Secondary CTA "Free Resources" (`Warm Linen` ghost border).

## 4. Performance & Responsiveness Constraints
- Framerate target: 60 FPS on desktop/laptop, minimum 45 FPS on mobile devices.
- Automatic DPR capping at 2.0; mobile camera `position.z = 15`; parallax tilt disabled on touch viewports.

## 5. Verification & DoD
- Playwright screenshot capture verifying typography alignment and 3D spiral rendering across 5 viewports.
- Performance metric audit: FPS stays smooth, GPU memory usage under 50MB.

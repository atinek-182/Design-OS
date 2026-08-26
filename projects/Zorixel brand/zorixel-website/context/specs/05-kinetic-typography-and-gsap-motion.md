# SPEC-05: Havock & Rosehot Kinetic Typography (GSAP ScrollTrigger)

## 1. Feature Goal & Intent
Implement kinetic headline and subhead scroll reveals on the Home hero (`/`) and manifesto section using GSAP 3 + ScrollTrigger + SplitText character animations.

## 2. Technical Stack & Dependencies
- **Typography:** `Havock` (Primary Display Headline #1), `Rosehot` (Subheadings & Editorial Tags)
- **Animation:** GSAP `ScrollTrigger` + spring physics (`cubic-bezier(0.16, 1, 0.3, 1)`)

## 3. Verification & DoD
- Staggered word/character reveal operates smoothly without layout shifts.
- Playwright 5-viewport screenshot sweep.

# SPEC-11: Frictionless Lead Magnet Modal & Morphing Transition Engine

## 1. Feature Goal & Intent
Implement the frictionless email lead capture modal (`LeadMagnetModal.tsx`) featuring a **morphing scale-up mask transition** (inspired by `REF-003: Insane-PRELOADER` wipe animation) when triggered from any 3D ribbon card (`REF-004`), single-email input, celebration confetti animation, and instant asset download.

## 2. Morphing Transition Choreography (Inspired by `REF-003` Loader Wipe)
1. **Click Coordinate Capture:**
   - Clicking a 3D ribbon card (`Curved3DResourceRibbon.tsx`) triggers Three.js Raycaster, extracting the card's 2D screen bounding rectangle `(x, y, width, height)`.
2. **Morphing Mask Scale-Up (0.0s - 0.5s):**
   - A GPU-accelerated transition mask element (`.modal-morph-wipe`) spawns over the clicked card's exact position.
   - GSAP timeline expands the mask smoothly outward, scaling 40x with a subtle 45° rotation sweep and `power2.inOut` easing (matching the `REF-003` loader exit wipe feel).
3. **Modal Content Stagger (0.4s - 0.7s):**
   - As the morphing wipe fills the screen, `.modal-container` fades in (`opacity: 1`), and content reveals vertically (`y: 30px -> 0px`) with `Rosehot` headings and an email input field.
4. **Modal Dismissal Morph (Reverse):**
   - Closing the modal shrinks and morphs the mask back down toward the origin card's coordinates before unmounting, maintaining visual continuity.

## 3. Technical Stack & Components
- **Modal Component:** `src/components/resources/LeadMagnetModal.tsx`
- **Morphing Hook:** `src/hooks/useMorphingModal.ts` (tracks origin coordinates & GSAP FLIP transform)
- **Form & Validation:** React Hook Form + Zod (`SubscribeSchema`)
- **Server Action:** Next.js Server Action (`subscribeLeadAction`) with `import 'server-only'`
- **Database & Storage:** Supabase `subscribers` table + S3 asset download link
- **Effects:** `canvas-confetti` trigger upon successful email submission

## 4. Universal Mobile Responsiveness Mandate (`390x844`)
- On mobile viewports (<640px), the morphing mask scales outward from screen center if origin coordinates fall off-screen.
- Modal container uses full-width bottom drawer layout (`width: 100%`, `border-radius: 24px 24px 0 0`) with touch swipe down dismissal gesture (`threshold: 120px`).
- Form input and submit CTA button maintain a minimum `48px` height touch target.

## 5. Verification & DoD
- [ ] Clicking any 3D ribbon card triggers the `REF-003`-inspired morphing scale-up mask animation seamlessly.
- [ ] Modal content reveals with zero layout shifts or visual glitches.
- [ ] Email validation correctly checks format via Zod before triggering Supabase server action.
- [ ] Successful submission fires confetti FX and replaces form with instant download button.
- [ ] Closing modal reverses the morphing mask smoothly back to origin.
- [ ] Playwright 5-viewport screenshot sweep across `390x844`, `768x1024`, `1280x800`, `1920x1080`, `2560x1440`.

# TKT-11: Frictionless Lead Magnet Modal & REF-003 Morphing Transition Engine

## Associated Spec
- [SPEC-11: Frictionless Lead Magnet Modal & Morphing Transition Engine](file:///d:/AI-OS/projects/Zorixel%20brand/zorixel-website/context/specs/11-frictionless-lead-modal-and-confetti.md)
- Reference Transition Model: [REF-003: Insane-PRELOADER Wipe Morph](file:///d:/AI-OS/projects/Zorixel%20brand/zorixel-website/reference/MANIFEST.md)

## Goal & Description
Build `LeadMagnetModal.tsx` and `useMorphingModal.ts` featuring a **morphing scale-up mask transition** (inspired by the `REF-003` preloader exit wipe animation). Clicking any 3D ribbon card (`REF-004`) causes a GPU-accelerated transition mask to expand 40x outward from the card's screen coordinates, revealing the modal and email capture form seamlessly.

## Technical Contract & Target Files
1. **Modal Component:** `src/components/resources/LeadMagnetModal.tsx`
2. **Morphing Hook:** `src/hooks/useMorphingModal.ts`
3. **Server Action:** `src/app/actions/subscribeLeadAction.ts`
4. **OKLCH Token Bindings:**
   - Overlay Mask: `--bg-obsidian` (`#0D0E12`) with Velvet Burgundy (`#6D001A`) accent borders
   - Accent & CTA: `--brand-crimson` (`#D61C2C`)
   - Typography: `Rosehot` (Modal Title), `AICON` (Labels)

## Morphing Animation Specs (`REF-003` Style)
- **Scale-Up Duration:** 0.5 seconds (`power2.inOut` easing, 45° rotation tilt during scale-up).
- **Reverse Scale-Down:** 0.4 seconds on dismiss back to origin card coordinates.

## Universal 5-Viewport Mobile & Responsive Mandate
- Mobile viewports (<640px) transition into a full-width bottom drawer modal (`border-radius: 24px 24px 0 0`) with touch swipe down dismissal.
- Touch target regions maintain minimum 48px height.

## Verifiable Definition of Done (DoD)
- [ ] 3D ribbon card click captures screen coordinates and fires 40x morphing mask wipe.
- [ ] Modal reveals content with staggered `Rosehot` typography and single-email input field.
- [ ] Form submission validates via Zod and triggers Supabase server action + confetti FX.
- [ ] Dismissing modal reverses the morphing wipe back to the 3D ribbon card origin.
- [ ] Playwright 5-viewport screenshot sweep confirms zero layout shifts across `390x844`, `768x1024`, `1280x800`, `1920x1080`, `2560x1440`.

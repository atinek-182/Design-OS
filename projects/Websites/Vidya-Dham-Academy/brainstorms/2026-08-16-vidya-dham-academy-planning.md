# Vidya Dham Academy: Discovery & Planning Notes
Date: 2026-08-16 · Goal: Continue architectural discovery and section-by-section planning for Vidya Dham Academy · Operator: Atinek Maurya

## Executive Summary & Current State
- **Brand System**: Solid tokens locked (#102A43 Deep Blue, #C69C45 Gold, #F7F5EF Ivory, #FFFFFF Surface, #111827 Deep Ink). Strict Zero-Gradient & Zero-Glassmorphism rules active.
- **Content Vault**: Comprehensive 26-section institutional syllabus and philosophy ingested in ACADEMY_CONTENT_VAULT.md (Classes 6-12, Board Foundation, NEET / B.Sc Nursing, 7-step pedagogy).
- **Navigation Asset**: Ingested and spec'd Osmo Side Navigation with Wipe Effect (SPEC-COMP-046-side-navigation.md).
- **Current Milestone**: Resolving Hero section archetype, 7-Step Pedagogy interaction design, Course Directory layout, and conversion funnel components.

## Domain Vocabulary & Glossary (CONTEXT.md updates)
- **7-Step Pedagogy**: Concept -> Explanation -> Examples -> Practice -> Test -> Analysis -> Improvement (Core institutional moat).
- **Dual Lead Funnel**: Immediate Demo Class booking (Digital lead) + Campus Visit & Diagnostic Consultation (Physical lead).

## Executive Summary & Current State
- **Brand System**: Solid tokens locked (#102A43 Deep Blue, #C69C45 Gold, #F7F5EF Ivory, #FFFFFF Surface, #111827 Deep Ink). Strict Zero-Gradient & Zero-Glassmorphism rules active.
- **Content Vault**: Comprehensive 26-section institutional syllabus and philosophy ingested in ACADEMY_CONTENT_VAULT.md.
- **Confirmed Components**:
  - `COMP-046`: Osmo Side Navigation with Wipe Effect (`02-navigation-and-menus`)
  - `COMP-100`: `LandingPage-Reveal` (`05-scrollytelling-and-scrolltrigger`) for Hero Section entrance/reveals (with customized solid color tokens, typography, logo, and copy).
  - `COMP-108`: `awwwards-scrolltrigger-pin-cards-main` (`05-scrollytelling-and-scrolltrigger`) for 7-Step Pedagogy section (layout customized to academy structure while preserving pinned scroll transitions).
  - `COMP-153`: `ContentLayoutTransition` (`08-full-site-clones-and-preloaders`) for Academic Programs directory.
- **Rejected / Discarded Components**:
  - `COMP-025` (SplitText), `COMP-160` (Prototype studio) -> Seeking sharper hero typography/layout alternatives.
  - `COMP-096` (3D sticky cards) -> Dropped.
  - `COMP-075` (PushGridItems) -> Seeking better course card grid replacement.
  - `COMP-085` (Draggable slider) -> Seeking better topper & results showcase replacement.

## Q&A Log
### Q1 & Q2 — Initial Focus & Server
- **Focus**: Hero Section & Above-the-Fold Proof Architecture + Reference-Gated Ingestion.
- **Server**: Running at `http://localhost:5500`.

### Q3, Q4 & Q5 — Hero Copy & Funnel Strategy
- **Q3 (Headline Copy)**: Deferred to `/humanizer` content refinement phase.
- **Q4 (Proof Metrics)**: Option 1 (Safe institutional metrics: Classes 6-12 & Medical, 7-Step Learning Loop, 100% Concept Doubts Desk, Regular Testing) selected for wireframe structure.
- **Q5 (Dual CTA Funnel)**: Option A confirmed (Primary: "Book Free Demo Class" modal, Secondary: "Explore Programs" scroll, Sticky: WhatsApp direct counseling).

### Active Component Deep-Dive & Replacement Exploration
- **Hero Typography / Layout Candidates**: `COMP-004` (ImageExpansionTypography), `COMP-012` (OnScrollTypographyAnimations), `COMP-013` (ScrollBlurTypography), `COMP-102` (OnScrollLayoutFormations), `COMP-152` (ConnectedGrid).
- **Course Card Candidates**: `COMP-057` (AnimatedGridPreviews), `COMP-072` (LinesToLayout), `COMP-071` (ItemRevealer), `COMP-168` (InlineLayoutSwitch).
- **Toppers / Results Candidates**: `COMP-115` (gsap-inertia-card-animations), `COMP-064` (DraggableImageStrip), `COMP-079` (Smooth-scroll-Slider), `COMP-118` (reverse-scrolling-columns).
- **Buttons & Interaction Candidates**: `COMP-048` (ButtonHoverStyles), `COMP-050` (LineHoverStyles), `COMP-053` (ProximityFeedback), `COMP-049` (ElasticProgress).



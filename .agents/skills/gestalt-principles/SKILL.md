---
name: gestalt-principles
description: Use when applying Gestalt psychology principles to UI layout, element grouping, hierarchy, figure-ground contrast, proximity, similarity, continuity, closure, and common region.
---

# Gestalt Psychology Principles for Interface Design

Gestalt psychology explains how human perception naturally organizes visual stimuli into unified wholes rather than disconnected parts.

## Core Gestalt Laws in UI Engineering

### 1. Law of Proximity
Elements placed close together are perceived as belonging to the same functional group.
- Spacing inside a component (`gap-2` / 8px) must be smaller than spacing between distinct components (`gap-6` / 24px).
- Labels must sit closer to their corresponding input fields than to preceding sections.

### 2. Law of Similarity
Elements that share visual attributes (color, shape, weight, typography) are perceived as related or sharing the same function.
- Primary actions share the same fill token (`bg-primary`).
- Navigation links share identical typography scale and hover behaviors.

### 3. Law of Common Region
Elements enclosed within a shared boundary or background card are perceived as a distinct unit regardless of internal spacing.
- Use subtle border framing (`border border-white/10`) or glassmorphic surface cards (`bg-white/5 backdrop-blur-md`).

### 4. Law of Figure-Ground
The human eye separates focal objects (figure) from the underlying backdrop (ground).
- Modals and popovers must establish unambiguous figure-ground separation using scrim overlays (`bg-black/60`) and multi-layer elevation shadows.

### 5. Law of Continuity
Visual elements arranged in a line or curve guide the eye along an unbroken trajectory.
- Horizontal bento grids, breadcrumb trails, and stepped onboarding flows rely on uninterrupted visual vectors.

### 6. Law of Closure
The brain perceives incomplete shapes as complete figures.
- Carousel peek states (showing 20% of the next card) leverage closure to signal scrollability without explicit arrows.

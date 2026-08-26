---
name: mobile-app-ui-design
description: "Use when designing high-quality mobile app UI/UX screens, flows, responsive mobile views, bottom sheets, 8pt spatial rhythm, thumb-zone ergonomics, and touch-optimized components."
---

# Mobile App UI/UX Design Skill

This skill guides the creation of professional, polished mobile app interfaces that follow proven design principles used by top-tier apps like Airbnb, Duolingo, Spotify, Revolut, and Phantom.

---

## Core Philosophy

Great mobile UI is about intentionality, not flashiness. Every pixel, spacing token, and color choice must serve the user. The goal is to build interfaces that feel smooth, personal, and alive while maintaining rock-solid usability and accessibility.

Before designing any screen or component, clarify three core questions:
1. **What is the user trying to accomplish?** (Eliminate friction on the critical path)
2. **How should this feel?** (Trust, clarity, momentum, delight, calm)
3. **What is the primary focal point?** (Strict visual hierarchy)

---

## 5-Step Mobile Design Process

Follow this sequence for any mobile screen or flow:

### Step 1: Understand the Context & Domain
- **App Domain**: Fitness, finance, crypto, productivity, health, commerce, social, or developer utilities.
- **User Stage**:
  - *New*: Guided onboarding, low cognitive load, explicit primary CTA.
  - *Returning*: Routine-focused, quick resume actions, subtle progress indicators.
  - *Power User*: Information density, batch actions, search/filter shortcuts.
- **Primary Goal**: Single unambiguous action per screen view.
- **Industry Conventions**: Review `references/industry-conventions.md` for industry-specific visual languages and case studies.

### Step 2: Structure First (UX Lens)
- **Flow Mapping**: Define previous screen, current screen, and destination screen.
- **Thumb Zone Ergonomics**:
  - Place primary actions and key interactive targets in the bottom 1/3 of the viewport.
  - Keep destructive or infrequent actions in top corners to prevent accidental taps.
- **F-Pattern & Z-Pattern Scanning**: Align headers, summary values, and primary badges along natural scanning paths.
- **Interaction Cost Reduction**: Expose high-frequency data directly rather than nesting behind multiple tap layers.
- **Touch Target Sizing**: Minimum **44x44pt** (iOS HIG) or **48x48dp** (Material Design) for all interactive touch targets.
- **Input Strategy**: Use bottom sheets, segment controls, or chips for fast selection; reserve text inputs for open-ended or precise data.
- **Meaningful Empty States**: Provide context, an illustrative SVG icon, actionable copy, and a primary CTA.

### Step 3: Visual Design (UI Lens)

#### Typography Hierarchy
- Use a single cohesive font family (max two for distinct brand identity).
- Maximum **4 font sizes** and **2 font weights** per view:
  - Header / Display: 24-32px (Semibold/Bold)
  - Title / Subheading: 18-20px (Medium/Semibold)
  - Body: 14-16px (Regular)
  - Caption / Metadata: 11-13px (Regular/Medium)
- Use tabular / monospace numerals (`font-mono` or `font-variant-numeric: tabular-nums`) for currency, metrics, timestamps, and counters.
- Limit text column width to under 600px for optimal line lengths.

#### Color System (60/30/10 Rule)
- **60% Neutral Base**: Background canvas (`#ffffff` / `#09090b` / `#000000`).
- **30% Secondary Structure**: Surface cards, borders, typography, subtle dividers.
- **10% Accent / Brand**: CTAs, active tab indicators, key badges, status rings.
- **Text Contrast & Opacity**:
  - Primary text: 100% opacity.
  - Secondary metadata: 70-75% opacity.
  - Tertiary / disabled: 40-50% opacity.
- Tint drop shadows with the background or brand hue rather than using harsh, dirty pure blacks.

#### Spacing System (8-Point Grid)
- All spacing, margins, padding, and layout dimensions must be multiples of **4 or 8px** (4, 8, 12, 16, 24, 32, 48, 64).
- **Group Proximity Rule**: Elements within a group share tight spacing (8-12px); spacing between distinct groups is 2x to 3x wider (24-32px).
- **Card Padding**: 16-24px baseline internal padding.
- **Safe Area Insets**: Respect top status bar (`pt-[env(safe-area-inset-top)]`) and bottom home indicator (`pb-[env(safe-area-inset-bottom)]`).

#### Elevation & Shadows
- Use layered, diffuse, soft hairline shadows or 1px hairline borders (`border-border/50` with subtle elevation).
- For elevated cards: Soft blur (16-24px), low opacity (4-8%), with a 1px inner hairline highlight for crisp depth.

#### Iconography & Visuals
- Use semantic SVG icons (Lucide React) with consistent stroke widths (1.5px or 2px).
- Never use emojis in UI controls or production code. Use semantic SVG icons, typography, or badge pills.
- Avatars: Real user image > Initials badge > Semantic user SVG icon.

### Step 4: Design for Emotion (Peak-End Rule)
Users judge an experience primarily by its **Peak** (the most intense moment) and its **End** (the final touchpoint):
- **Identify the Peak**: Core task completion, successful export, milestone unlocked, query resolved.
- **Amplify the Peak**: Micro-interactions, subtle badge glow, tactile feedback (haptics), crisp success copy.
- **Design the Ending**: Summary card, clear next step, affirmation of value delivered.
- **Mitigate Negative Peaks**:
  - Skeleton loaders instead of blank screens.
  - Inline validation with immediate, constructive recovery suggestions.
  - Informative, warm error states with direct retry buttons.

### Step 5: Polish & Edge States
- Build complete state coverage: Default, Hover/Press, Loading, Active/Selected, Empty, and Error states.
- Micro-interactions: 150-250ms ease-out transitions for press feedback, drawer reveals, and tab switches.
- High-contrast accessibility: WCAG 2.2 AA compliant contrast ratios across all text and icon assets.

---

## Smart Mobile UI Patterns

### Bottom Sheet Drawers
- Prefer bottom sheets over center modals for filter panels, actions, and selection menus.
- Include a visible grab handle indicator (`w-10 h-1 bg-muted rounded-full`) and smooth drag-to-dismiss behavior.

### Adaptive Search & Filter
- Avoid dead blank search states: show recent searches, popular tags, and quick-filter pills immediately upon focus.

### Status & Timeline Cards
- Display progress via clean vertical or horizontal stepped timelines with semantic status indicators (complete, active, pending).

### Sticky Bottom Action Bars
- Pin primary action buttons to the bottom of the viewport with safe area padding and a subtle gradient scrim or background blur to maintain readability over scrolled content.

---

## Anti-Patterns to Avoid

- Overcrowding screens with more than 4 font sizes or excessive text weights.
- Placing primary interactive triggers outside the thumb zone in top navigation bars.
- Ignoring safe area insets on notched or home-indicator mobile devices.
- Pure black or harsh grey shadow drops without contextual tinting.
- Static, unhelpful empty states without clear calls to action.
- Requiring keyboard typing for simple, predictable finite options (use pills/segment controls instead).

---

## Technical Stack Guidelines

When generating mobile UI prototypes or React components:
- **Frameworks**: React, React Native, Tailwind CSS v4, Lucide React, Recharts.
- **Mobile Viewport Baseline**: 375px width (iPhone standard) up to 430px (Max/Plus).
- **Tailwind Utility Patterns**:
  - Cards: `rounded-2xl border border-border/40 bg-card/80 backdrop-blur-md p-4 shadow-sm`
  - Touch Buttons: `min-h-[44px] px-4 py-2.5 rounded-xl font-medium transition-all active:scale-98`
  - Safe Area Utility: `pt-safe pb-safe` or `p-[env(safe-area-inset-bottom)]`

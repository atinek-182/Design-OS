---
title: Vidya Dham Academy - Project Overview
domain: architecture
summary: High-converting educational institution web platform for Vidya Dham Academy (Classes 6 to 12, NEET, B.Sc Nursing).
critical_directives:
  - Follow document guidance without bypassing established safeguards.
section_outline:
  - Overview
  - Educational Philosophy & 7-Step Pedagogy
  - Approved Core Feature Categories
  - Core User Flow & Admission Journey
  - Scope
  - Success Criteria
read_triggers:
  - When working on architecture in context/project-overview.md
  - When reading context for Vidya Dham Academy Overview
tags:
  - architecture
  - project-overview
updated: '2026-08-13'
---

# Vidya Dham Academy - Project Overview

## Overview

Vidya Dham Academy is an educational institution dedicated to providing quality academic education for students from Classes 6 to 12, alongside NEET Foundation and B.Sc Nursing entrance preparation. The platform is designed as an Awwwards-level, high-converting digital experience balancing interactive institutional storytelling with frictionless lead acquisition.

## Educational Philosophy & 7-Step Pedagogy

Vidya Dham follows a 7-step academic loop:
`Concept -> Explanation -> Examples -> Practice -> Test -> Analysis -> Improvement`

- **Concept-Based Learning**: Building clear fundamentals rather than rote memorization.
- **Regular Assessment & Analysis**: Evaluating performance to identify weak areas and conceptual gaps.
- **Doubt Resolution & Personal Attention**: Dedicated student support for continuous academic improvement.

## Approved Core Feature Categories

1. **Institutional Hero & Interactive 7-Step Pedagogy Explorer**:
   - High-impact hero section with key statistics badges (Classes 6-12, B.Sc Nursing, NEET).
   - Interactive 7-step learning loop explorer component.
2. **Filterable Program Directory & Curriculum Breakdown**:
   - Filterable catalog by grade tier (Classes 6-8 Middle School, Classes 9-10 Board Foundation, Classes 11-12 Senior Secondary, NEET & B.Sc Nursing Entrance).
   - Expandable syllabus & subject detail views.
3. **Topper & Achievement Wall + Fee & Scholarship Estimator**:
   - Showcase of verified student ranks, board percentages, and parent/student feedback.
   - Interactive scholarship & fee structure breakdown calculator.
4. **Frictionless Dual Lead Capture Systems**:
   - Multi-step "Book Free Demo Class" modal.
   - "Schedule Campus Visit & Consultation" appointment booking form.
   - 1-click WhatsApp counseling and branch map direction integration.

## Scope

### In Scope
- Next.js 15 / React 19 App Router web application.
- Solid visual design system with locked CSS custom properties (`#102A43` Primary, `#C69C45` Gold, `#F7F5EF` Ivory, `#FFFFFF` Surface).
- Interactive lead capture forms with server actions and Zod schema validation.
- Responsive layout verified across 5 device viewports.
- Technical SEO & GEO JSON-LD schemas (`EducationalOrganization`, `Course`, `FAQPage`).

### Out of Scope
- Full LMS video streaming platform (v2 phase).
- Online payment gateway processing (v2 phase).

## Success Criteria

1. Page load speed < 1.2s with 95+ Mobile Lighthouse score.
2. 100% responsive rendering without horizontal scroll or layout shifts across 5 viewports.
3. Form submissions capture inquiries accurately with immediate server-side validation.

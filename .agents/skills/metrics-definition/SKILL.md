---
name: metrics-definition
description: "Use when define UX metrics and KPIs that connect design decisions to measurable outcomes. Use when choosing what to measure. For presenting the results afterwards, use `design-impact-reporting` (design-ops)."
---

# Metrics Definition
You are an expert in defining meaningful UX metrics that demonstrate design impact.
## What You Do
You help teams define metrics connecting design work to measurable outcomes.
## Metric Categories
- **Behavioral**: Task completion, time on task, error rate, feature adoption
- **Attitudinal**: SUS, NPS, CSAT, perceived ease of use
- **Business**: Conversion, retention, support volume, onboarding completion
- **Engagement**: DAU/MAU, session duration, feature discovery, return visits
## HEART Framework
- Happiness: satisfaction, ease ratings
- Engagement: frequency, depth
- Adoption: activation, feature uptake
- Retention: return rate, churn
- Task success: completion, time, errors
## Metric Template
Name, definition, method, data source, target, frequency, owner.
## Best Practices
- Choose 3-5 primary metrics
- Balance behavioral and attitudinal
- Set baselines before measuring change
- Connect metrics to design hypotheses
- Report alongside qualitative insights

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.


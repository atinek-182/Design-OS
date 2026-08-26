---
name: affinity-diagram
description: "Use when cluster many qualitative data points into themes and insight statements. Use when synthesising across multiple sessions or sources. For a single transcript use `summarize-interview`; for one segment's inner state use `empathy-map`."
---

# Affinity Diagram

Organize qualitative research data into themed clusters and insight statements.

## Context

You are a UX researcher synthesizing qualitative data for the target context or feature requirements. If the user provides files (interview notes, observation data, survey responses), read them first.

## Instructions

1. **Extract data points**: Pull individual observations, quotes, and notes from the raw data.
2. **Bottom-up clustering**: Group related data points into natural clusters (do not start with predefined categories).
3. **Name each cluster**: Create descriptive theme labels that capture the essence of each group.
4. **Create hierarchy**: Organize clusters into higher-level themes (typically 3-5 top-level themes).
5. **Write insight statements**: For each theme, write a clear insight statement that captures the "so what?"
6. **Identify patterns**: Note frequency, intensity, and connections between themes.
7. **Prioritize**: Rank insights by impact on design decisions.
8. Present the affinity diagram as a structured hierarchy with insight statements and supporting evidence.

## Cross-Interview Sampling Principle

**Index evenly across all participants.** When working from multiple interview transcripts, process each one fully before clustering. Do not over-represent early transcripts or the most recent input.

- Treat each participant as an equal source of signal
- Tag every observation with its participant ID (P1, P2, P3...) before grouping
- After clustering, check that each participant appears at least once in the output — if any are absent, go back
- Patterns that appear in only one interview should be flagged as single-source, not discarded

This prevents the common LLM failure mode of building themes from the first one or two transcripts and fitting the rest retroactively.

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.


---
name: data-visualization
description: "Use when select chart types and design data encodings — marks, axes, labels, and accessible chart styling. Use when presenting data graphically. Owns chart selection and encoding only; the categorical colour ramp itself belongs to `color-system`."
---

# Data Visualization
You are an expert in designing clear, accessible, and informative data visualizations.
## What You Do
You design data visualizations that communicate insights effectively using appropriate chart types and styling.
## Chart Selection
### Comparison
Bar charts (categorical), grouped bars (multi-series), bullet charts (target vs actual).
### Trend Over Time
Line charts (continuous), area charts (volume), sparklines (inline).
### Part of Whole
Pie/donut (few categories), stacked bar (many categories), treemap (hierarchical).
### Distribution
Histogram, box plot, scatter plot.
### Relationship
Scatter plot, bubble chart, heat map.
## Design Principles
- Data-ink ratio: maximize data, minimize decoration
- Clear axis labels and legends
- Consistent color encoding across views
- Start y-axis at zero for bar charts
- Use annotation to highlight key insights
## Color in Data Viz
- Sequential: light to dark for ordered data
- Diverging: two-hue scale for above/below midpoint
- Categorical: distinct hues for unrelated categories
- Colorblind-safe palettes (avoid red-green only)
## Accessibility
- Don't rely on color alone — use patterns, labels, or shapes
- Provide text alternatives for charts
- Keyboard navigable interactive charts
- Sufficient contrast for data elements
## Responsive Data Viz
- Simplify at small sizes (fewer data points, larger labels)
- Consider alternative views for mobile (table instead of chart)
- Touch-friendly tooltips and interactions
## Best Practices
- Choose the simplest chart that communicates the insight
- Label directly on the chart when possible (avoid legends)
- Provide context (benchmarks, targets, trends)
- Test with real data, not idealized samples
- Allow users to explore details on demand

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.


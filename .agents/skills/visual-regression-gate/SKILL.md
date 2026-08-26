---
name: visual-regression-gate
description: "Use when running automated Playwright multi-viewport pixel-diff visual regression testing, baseline image comparisons, layout stability audits, and responsive visual QA gates before pull requests."
---

# Visual Regression Gate (Playwright Automated Pixel-Diff)

## Overview
Automated visual regression testing ensures that code refactors and design token updates do not cause unintended visual shifts, overflows, or contrast regressions across the 5 standard viewports (Desktop 1920x1080, Laptop 1440x900, Tablet 768x1024, Mobile Portrait 375x812, Mobile Landscape 667x375).

## Multi-Viewport Runner
```bash
# Run 5-viewport screenshot runner
npm run design:verify -- --url http://localhost:4173 --out .screenshots/
```

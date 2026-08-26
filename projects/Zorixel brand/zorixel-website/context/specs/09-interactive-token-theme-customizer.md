# SPEC-09: Interactive OKLCH Design Token Theme Customizer

## 1. Feature Goal & Intent
Build an interactive design token customizer toolbar allowing visitors to tweak Zorixel OKLCH color variables (Obsidian, Linen, Burgundy, Crimson, Gold) in real-time and watch the site UI dynamically re-color.

## 2. Technical Stack & Dependencies
- **State:** CSS Custom Property overrides (`document.documentElement.style.setProperty('--primary-burgundy', ...)`).

## 3. Verification & DoD
- Color sliders immediately update UI components without re-renders.
- Playwright screenshot sweep.

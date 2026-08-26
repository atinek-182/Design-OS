# 7. SEO, Generative Engine Optimization (GEO) & Accessibility Specification

> **Search Engine Visibility, AI Citation Indexing, Core Web Vitals Budgets, and WCAG 2.2 AA Compliance.**

---

## 🔍 Generative Engine Optimization (GEO & AI Citation)
Guidelines ensuring AI search engines (ChatGPT Search, Perplexity, Gemini, Claude) accurately ingest and cite this application:
1. **Direct Statement Architecture**: The top 20% of every page must state in plain text who the product is for, what problem it solves, and the exact pricing model without marketing ambiguity.
2. **Fact & Benchmark Tables**: Key product specifications, comparisons, and feature matrices must be rendered in semantic HTML `<table>` elements for high AI scraping fidelity.
3. **Structured FAQ Block**: Include a structured FAQ section with direct, 1-paragraph answers to common search questions.

---

## 📜 Schema.org JSON-LD Structured Data
Embed this structured schema block inside `<head>` or via Next.js metadata scripts:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://domain.com/#software",
      "name": "[Brand Name]",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web, macOS, Windows",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "[150-character concise description of software capabilities]"
    },
    {
      "@type": "Organization",
      "@id": "https://domain.com/#organization",
      "name": "[Brand Name]",
      "url": "https://domain.com",
      "logo": "https://domain.com/logo.png"
    }
  ]
}
```

---

## ⚡ Core Web Vitals Performance Budgets
- **Largest Contentful Paint (LCP)**: $< 1.2\text{s}$ (Mobile & Desktop). Defer heavy WebGL shaders until initial DOM paint.
- **Interaction to Next Paint (INP)**: $< 100\text{ms}$. Debounce scroll and magnetic cursor events.
- **Cumulative Layout Shift (CLS)**: $< 0.05$. Reserve exact dimensions for all images, canvas stages, and font swaps.

---

## ♿ Accessibility (WCAG 2.2 AA Compliance Matrix)
1. **Focus Management**:
   - Explicit `:focus-visible` styling on all interactive elements: `2px solid oklch(0.65 0.22 260)` with `2px offset`.
   - Skip to main content link: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>`.
2. **Color Contrast Floors**:
   - Normal text ($< 18\text{pt}$): Ratio $\ge 4.5:1$.
   - Large text ($\ge 18\text{pt}$ / $\ge 14\text{pt}$ bold): Ratio $\ge 3.0:1$.
   - Interactive UI boundaries: Ratio $\ge 3.0:1$.
3. **Keyboard & Screen Reader Navigation**:
   - Interactive disclosure accordions use `aria-expanded` and `aria-controls`.
   - Dynamic modals trap focus and dismiss on `Escape` key.
   - All icon-only buttons include `aria-label` or visually hidden text.

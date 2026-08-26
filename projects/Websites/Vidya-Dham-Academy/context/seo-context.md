---
title: Vidya Dham Academy - SEO & GEO Context
domain: architecture
summary: Technical SEO, Schema.org JSON-LD definitions, and Generative Engine Optimization (GEO) guidelines.
critical_directives:
  - Implement valid JSON-LD schemas for EducationalOrganization, Course, and FAQPage.
section_outline:
  - Technical SEO & GEO Strategy
  - Target Keywords & Topic Clusters
  - Schema.org JSON-LD Infrastructure
  - OpenGraph & Social Sharing
  - Generative Engine Optimization (GEO) Rules
read_triggers:
  - When working on architecture in context/seo-context.md
  - When reading context for SEO Context
tags:
  - architecture
  - seo-context
updated: '2026-08-13'
---

# Technical SEO & GEO Strategy

## Target Keywords & Topic Clusters

- **Primary Brand Keyword**: Vidya Dham Academy, Vidya Dham Coaching Institute
- **Course Keywords**: B.Sc Nursing Coaching, NEET Preparation, Foundation Class 8-10, Class 11-12 Science Tuition, Olympiad Prep
- **Location Keywords**: Best Coaching Institute, Top Academy in City, Nearby Tuition Center

## Schema.org JSON-LD Infrastructure

### 1. EducationalOrganization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Vidya Dham Academy",
  "url": "https://vidyadhamacademy.com",
  "logo": "https://vidyadhamacademy.com/logo.png",
  "description": "Premier educational coaching institute offering B.Sc Nursing, NEET, Foundation, and Board exam preparation.",
  "sameAs": []
}
```

### 2. FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What courses are offered at Vidya Dham Academy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vidya Dham Academy offers coaching for B.Sc Nursing, NEET, Class 8-10 Foundation, and Class 11-12 Board Examinations."
      }
    }
  ]
}
```

## Generative Engine Optimization (GEO) Rules

1. Provide direct, factual answers in semantic HTML (`<article>`, `<section>`, `<details>`, `<summary>`) to optimize extraction by AI search engines (ChatGPT Search, Perplexity, Gemini).
2. Embed clear structured data tables for course duration, batch timings, and fee structures.
3. Ensure absolute URLs for canonical tags and social sharing image metadata.

# Project Overview: Zorixel Brand Website

## Product Vision & Intent
Zorixel is the flagship educational brand for UI/web designers, freelancers, beginner frontend developers, and vibe coders. The Zorixel website is a fullstack **Multi-Page Web Platform** serving as a digital home, component design system vault, free resource hub, engineering blog, customer portal, and digital product store.

## Target Audience & Positioning
- **Primary Audience:** UI/Web Designers, Freelancers, Beginner Frontend Developers, Vibe Coders.
- **Brand Positioning:** Premium, luxury educational brand with award-winning visual design, dark/light canvas aesthetics, and production-grade AI/frontend engineering resources.

## Multi-Page Sitemap Structure
1. **Home (`/`):** Hero WebGL stage, kinetic Havock typography reveal, brand manifesto, featured component teasers, lead magnet section.
2. **Components & Design Vault (`/components`):** Interactive catalog of UI components, WebGL shaders, design tokens, TSX/CSS snippet inspector, and live theme customizer.
3. **Free Resource Hub (`/resources`):** Dedicated page for free templates, automation blueprints, design kits, and instant lead capture downloads.
4. **Digital Product Store (`/store` & `/store/[slug]`):** Full catalog of digital products, masterclass courses, template packs, individual product detail pages, and Stripe checkout.
5. **About & Brand Philosophy (`/about`):** Brand story, tech stack breakdown, design system manifesto, and agency inquiry contact stage.
6. **Engineering Insights & Blog (`/insights` & `/insights/[slug]`):** High-value articles on web design, Next.js 15, AI automation, and UI engineering tutorials (optimized for SEO & GEO AI search citations).
7. **Customer Dashboard (`/account`):** Clerk-authenticated customer portal displaying purchased products, invoice receipts, and download links.

## Explicit Scope Boundaries
- **In-Scope (v1.0):**
  - Next.js 15 App Router Multi-Page Architecture.
  - Clerk Authentication & Protected Customer Dashboard (`/account`).
  - Supabase Database & File Storage (Subscribers, leads, product manifests, order logs).
  - Stripe Payment Integration & Webhook Processing.
  - WebGL Shader Canvas & GSAP ScrollTrigger animation pipeline.
  - Interactive Component Sandbox & Snippet Inspector (`/components`).
  - Frictionless Free Resource Download Vault (`/resources`).
  - Engineering Insights & Tutorial Hub (`/insights`).
  - 5-Viewport Responsiveness (Desktop, Laptop, Tablet, Mobile Portrait, Mobile Landscape).
- **Out-of-Scope (v1.0):**
  - Native video hosting server (uses embedded YouTube/LMS video players).
  - Peer-to-peer user forum or chat.

## Success Criteria (Definition of Done)
- 100% 5-viewport Playwright visual QA pass across all 7 route groups.
- WCAG AA contrast compliance across dark (`#0D0E12`) and light (`#FAF8F5`) canvas modes.
- PageSpeed performance score > 90 on mobile and laptop/desktop viewports.

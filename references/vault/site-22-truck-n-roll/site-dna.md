# Truck 'n Roll — Site DNA Report

**URL:** `https://trucknroll.com/`  
**Site Slug:** `truck-n-roll`  
**Creative Studio & Agency:** Locomotive® (Montreal, QC)  
**Industry Pedigree:** Awwwards Site of the Day (SOTD, June 3 2026) + Developer Award  

---

## 🧬 5-Layer Site DNA Analysis

### Layer 1: Executive Brand & Aesthetic Identity
- **Visual Aesthetic:** High-octane industrial dark aesthetic built for live tour logistics. Heavy uppercase typography paired with crimson red accents and matte dark charcoal canvas backgrounds.
- **Color Palette:** Matte Black (`#0E0F12`), Tour Crimson Red (`#E53935`), Caution Yellow (`#FFD54F`), Light Charcoal (`#15181E`), Light Grey Text (`#F8F9FA`).
- **Typography Stack:** 
  - Display Headers: `Druk` (Condensed Heavy Uppercase)
  - Body Text: `GT America`
  - Technical Labels: `Space Mono`

### Layer 2: UX Structure & Layout Engineering
- **Viewport System:** Fluid responsive layout scaling cleanly across Desktop (1920px), Laptop (1440px), Tablet (1024px/768px), and Mobile (375px).
- **Navigation & Header:** Sticky top header (`.c-sticky-header`) with subtle scroll-up reveal delta threshold.
- **Swup SPA Architecture:** Page transitions handled by Swup.js container (`#swup`) avoiding full page reloads.

### Layer 3: Frontend Stack & Engineering Frameworks
- **Framework & CMS:** Craft CMS backend paired with Vite build pipeline (`src/scripts/main.ts`).
- **Page Transition Engine:** Swup.js (`swup-enabled`, `.c-transition`).
- **Scroll Engine:** Locomotive Scroll / Lenis (`class="lenis"`, `Scroll-BWTV0bRX.js`).
- **Component Manager:** Custom Locomotive ComponentManager architecture initializing components dynamically via data attributes (`data-component="Rail"`, `data-component="Accordion"`).

### Layer 4: Interactive Micro-Interactions & Motion Mechanics
- **Rail Slider:** Smooth horizontal drag-and-swipe project showcase rail (`Rail-Ck4YugMY.js`).
- **Accordion Mechanics:** Single-active section collapse with smooth height transition (`Accordion-jn8VkQG4.js`).
- **Modal Video Overlay:** Lightbox video preview for tour trailers (`ModalVideo-UVJUOQ_g.js`).

### Layer 5: Asset Inventory & Direct File Links
- **Wireframe Blueprint:** [wireframe.html](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/assets/wireframe.html) | [wireframe.png](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/assets/wireframe.png)
- **Mirrored Code:** [index.html](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/mirror/index.html) | [main-Csu8MLr1.js](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/mirror/js/main-Csu8MLr1.js)
- **React Components:** [NavHeader.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/components/NavHeader.tsx) | [HeroSection.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/components/HeroSection.tsx) | [LogisticsRailSlider.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/components/LogisticsRailSlider.tsx) | [TourAccordion.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/components/TourAccordion.tsx) | [Footer.tsx](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/components/Footer.tsx)
- **Animation Scripts:** [locomotive-scroll-setup.js](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/animations/locomotive-scroll-setup.js) | [swup-page-transition.js](file:///d:/AI-OS/premium-frontend-experience-system/reference-inputs/sites/truck-n-roll/code-extracts/animations/swup-page-transition.js)

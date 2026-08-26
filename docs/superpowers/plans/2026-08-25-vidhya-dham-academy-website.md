# Vidhya Dham Academy Multi-Page Web Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an Awwwards-tier, high-conversion multi-page educational web platform for **Vidhya Dham Academy** (Classes 6–12 CBSE, ICSE, UP Board & NEET/JEE Coaching) in `projects/Websites/vidhya-dham-academy`.

**Architecture:** Single Page Application with multi-page client-side routing via `react-router-dom`, modular component hierarchy, custom React Context for global demo booking drawer state, deterministic mathematical design tokens, and high-performance Tailwind CSS styling.

**Tech Stack:** React 18/19, TypeScript, Vite, Tailwind CSS, Lucide React icons, React Router DOM v6.

## Global Constraints
- Target Directory: `projects/Websites/vidhya-dham-academy` (never in root `Design-OS`)
- Zero-Slop & Zero-Placeholder Policy: No broken images, no lorem ipsum, rich authentic course data, realistic student scorecards, real faculty credentials.
- Contrast Flooring: WCAG 2.2 AA (>= 4.5:1 text contrast, >= 3:1 UI elements).
- Mobile-First Ergonomics: Touch hit targets >= 44px, `:active { transform: scale(0.97); }` micro-presses.

---

### Task 1: Scaffolding Vite React TypeScript Project & Tooling

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/package.json`
- Create: `projects/Websites/vidhya-dham-academy/vite.config.ts`
- Create: `projects/Websites/vidhya-dham-academy/tsconfig.json`
- Create: `projects/Websites/vidhya-dham-academy/index.html`
- Create: `projects/Websites/vidhya-dham-academy/tailwind.config.js`
- Create: `projects/Websites/vidhya-dham-academy/postcss.config.js`

- [ ] **Step 1: Scaffold Vite React TS template and install dependencies (`react-router-dom`, `lucide-react`, `tailwindcss`, `postcss`, `autoprefixer`)**
- [ ] **Step 2: Verify `npm run build` runs cleanly on initial scaffold**
- [ ] **Step 3: Commit project foundation**

---

### Task 2: Mathematical Design Token Architecture & Typography

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/index.css`
- Modify: `projects/Websites/vidhya-dham-academy/tailwind.config.js`

**Interfaces:**
- Color tokens:
  - `--color-primary`: `#102A43` (Deep Academic Navy)
  - `--color-secondary`: `#C69C45` / `#D97706` (Excellence Gold & Amber)
  - `--color-bg`: `#F7F5EF` (Warm Ivory Canvas)
  - `--color-surface`: `#FFFFFF` (Crisp Pure Surface)
  - `--color-text`: `#111827` (Deep Ink Charcoal)
  - `--color-accent-emerald`: `#059669` (Score & Success Green)
  - `--color-border`: `#E2E8F0` / `#CBD5E1` (Structured Grid Lines)

- [ ] **Step 1: Configure Tailwind theme extensions with font families (Outfit / Inter / Plus Jakarta Sans), exact color tokens, and custom box-shadows**
- [ ] **Step 2: Write `src/index.css` with CSS custom properties, smooth scrolling, button active states, and custom utility classes**
- [ ] **Step 3: Test token rendering and verify contrast ratios**
- [ ] **Step 4: Commit design token architecture**

---

### Task 3: Global Data Models & Content Engine

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/types/index.ts`
- Create: `projects/Websites/vidhya-dham-academy/src/data/courses.ts`
- Create: `projects/Websites/vidhya-dham-academy/src/data/results.ts`
- Create: `projects/Websites/vidhya-dham-academy/src/data/faculty.ts`
- Create: `projects/Websites/vidhya-dham-academy/src/data/testimonials.ts`
- Create: `projects/Websites/vidhya-dham-academy/src/data/faq.ts`

- [ ] **Step 1: Define TypeScript interfaces (`Course`, `Ranker`, `FacultyMember`, `Testimonial`, `FAQItem`, `DemoBookingData`)**
- [ ] **Step 2: Populate authentic dataset for Class 6–8 Foundation, Class 9–10 Secondary (CBSE/ICSE/UP Board), Class 11–12 Science/Commerce, and NEET/JEE Target batches**
- [ ] **Step 3: Populate top rankers (e.g. NEET 690/720, CBSE 98.6%, UP Board State Rank 4) and master faculty profiles**
- [ ] **Step 4: Commit data layer**

---

### Task 4: Global Demo Booking Modal & State Context

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/context/DemoModalContext.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/DemoBookingModal.tsx`

- [ ] **Step 1: Implement `DemoModalContext` providing `isOpen`, `openModal(defaultGrade?, defaultBoard?)`, and `closeModal()`**
- [ ] **Step 2: Build `DemoBookingModal` with 2-step lead capture form (Student Name, Parent Phone, Grade 6–12, Board: CBSE/ICSE/UP Board, Target Exam: NEET/JEE/Boards)**
- [ ] **Step 3: Add input validation, phone number verification format, and success confirmation view with direct WhatsApp connect link**
- [ ] **Step 4: Commit Demo Booking Engine**

---

### Task 5: Global Persistent Layout (Navbar, Mobile Drawer, Sticky Action Dock & Footer)

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/components/Navbar.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/MobileDock.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/Footer.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/Layout.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/ScrollToTop.tsx`

- [ ] **Step 1: Build responsive `Navbar` with grade/board dropdown, quick phone helpline, active route indicators, and "Book Free Demo" CTA**
- [ ] **Step 2: Build mobile-friendly sliding menu drawer and `MobileDock` (quick Call, WhatsApp counselor, Book Demo)**
- [ ] **Step 3: Build rich academic `Footer` with board syllabus links, center address, accreditation note, and student helpdesk**
- [ ] **Step 4: Assemble `Layout` with `ScrollToTop` trigger on route transitions**
- [ ] **Step 5: Commit global layout components**

---

### Task 6: Interactive Grade & Board Quick Navigator

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/components/InteractiveNavigator.tsx`

- [ ] **Step 1: Build 3-step interactive finder component (Step 1: Class level, Step 2: Board choice, Step 3: Recommended batch card)**
- [ ] **Step 2: Connect interactive batch outcome with instant "Book Demo for this Batch" prefill trigger**
- [ ] **Step 3: Test all permutations (Class 6-8, 9-10, 11-12, NEET/JEE across CBSE, ICSE, UP Board)**
- [ ] **Step 4: Commit Navigator component**

---

### Task 7: Flagship Home Page (`/`)

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/pages/HomePage.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/StatsTicker.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/AdvantageGrid.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/RankersMarquee.tsx`

- [ ] **Step 1: Build high-impact Hero with dynamic stats ticker, trust badges, and primary action buttons**
- [ ] **Step 2: Embed `InteractiveNavigator` for immediate visitor discovery**
- [ ] **Step 3: Build Program Cards showcase (Class 6–10 Foundation, Class 11–12 Boards, NEET/JEE Target)**
- [ ] **Step 4: Build Ranker Hall of Fame ticker and 4-Pillar Vidhya Dham Advantage section**
- [ ] **Step 5: Build Faculty Teaser, Testimonial Carousel, and Bottom High-Conversion Banner**
- [ ] **Step 6: Commit Home Page**

---

### Task 8: Courses & Programs Page (`/courses`)

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/pages/CoursesPage.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/CourseCard.tsx`

- [ ] **Step 1: Build filter bar (Level tabs: All, Class 6–8, Class 9–10, Class 11–12, NEET/JEE; Board badges: CBSE, ICSE, UP Board)**
- [ ] **Step 2: Build rich `CourseCard` with subject badges, weekly lecture hours, batch timings, batch features, and demo booking buttons**
- [ ] **Step 3: Add batch comparison summary table and syllabus download triggers**
- [ ] **Step 4: Commit Courses Page**

---

### Task 9: Hall of Fame & Results Page (`/results`)

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/pages/ResultsPage.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/RankerCard.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/TestimonialCard.tsx`

- [ ] **Step 1: Build results category switcher (All Highlights, NEET Toppers, 12th Board 95%+, 10th Board, UP Board State Rankers)**
- [ ] **Step 2: Build `RankerCard` featuring student portrait, verified score, subject breakdown, school name, and quote**
- [ ] **Step 3: Add student & parent video/text review grid with star ratings**
- [ ] **Step 4: Commit Results Page**

---

### Task 10: Faculty & Pedagogy Page (`/faculty`)

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/pages/FacultyPage.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/FacultyCard.tsx`

- [ ] **Step 1: Build faculty directory grid by subject (Physics, Chemistry, Zoology, Botany, Mathematics)**
- [ ] **Step 2: Detail teacher qualifications, alumnus background, years of experience, and teaching motto**
- [ ] **Step 3: Build 4-Pillar Pedagogy section (Visual Smart Classes, Daily DPPs, Bi-weekly OMR Mock Tests, 1-on-1 Doubt Sessions)**
- [ ] **Step 4: Commit Faculty Page**

---

### Task 11: Admissions & Scholarship Page (`/admissions`)

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/pages/AdmissionsPage.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/VdatCalculator.tsx`
- Create: `projects/Websites/vidhya-dham-academy/src/components/FaqAccordion.tsx`

- [ ] **Step 1: Build VDAT (Vidhya Dham Aptitude & Scholarship Test) registration banner with up to 100% fee waiver guide**
- [ ] **Step 2: Build step-by-step admission process workflow (1. Demo Class $\rightarrow$ 2. VDAT Test $\rightarrow$ 3. Counseling $\rightarrow$ 4. Batch Allocation)**
- [ ] **Step 3: Build interactive FAQ accordion addressing common parent/student queries**
- [ ] **Step 4: Commit Admissions Page**

---

### Task 12: Campus & Contact Page (`/contact`)

**Files:**
- Create: `projects/Websites/vidhya-dham-academy/src/pages/ContactPage.tsx`

- [ ] **Step 1: Build contact information cards (Campus Address, Counseling Helpline, WhatsApp Hotline, Office Hours: 8:00 AM – 8:00 PM)**
- [ ] **Step 2: Build Walk-in Visit Appointment & Inquiry Form**
- [ ] **Step 3: Build interactive campus map visual card with one-click directions**
- [ ] **Step 4: Commit Contact Page**

---

### Task 13: Awwwards-Level Visual Polish, Micro-interactions & Mobile Ergonomics

**Files:**
- Modify: `projects/Websites/vidhya-dham-academy/src/index.css`
- Modify: `projects/Websites/vidhya-dham-academy/src/components/*`

- [ ] **Step 1: Add subtle shimmer badges, glass highlights on hover, and smooth card lift transitions**
- [ ] **Step 2: Audit all mobile touch targets (ensure >= 44px touch ergonomics and active micro-press scaling)**
- [ ] **Step 3: Verify color contrast compliance (WCAG 2.2 AA) across all components**
- [ ] **Step 4: Commit visual polish enhancements**

---

### Task 14: Verification, Automated Build & Quality Gate

**Files:**
- Test all pages and components

- [ ] **Step 1: Run `npm run build` in `projects/Websites/vidhya-dham-academy` and verify 0 TypeScript/compilation errors**
- [ ] **Step 2: Start dev server and verify all routes (`/`, `/courses`, `/results`, `/faculty`, `/admissions`, `/contact`) render without console errors**
- [ ] **Step 3: Test Interactive Navigator and Demo Booking Modal end-to-end**
- [ ] **Step 4: Create walkthrough documentation**

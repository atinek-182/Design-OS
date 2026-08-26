# Design Specification: Vidhya Dham Academy Multi-Page Web Platform

- **Project Name**: Vidhya Dham Academy (Official Website)
- **Target Directory**: `projects/Websites/vidhya-dham-academy`
- **Date**: 2026-08-25
- **Status**: Approved Specification
- **Primary Audience**: Students (Classes 6–12 CBSE, ICSE, UP Board, NEET/JEE aspirants) and Parents seeking academic excellence, structured coaching, and proven board/competitive exam results.

---

## 1. Executive Vision & Core Value Proposition

Vidhya Dham Academy is a premier academic coaching institute catering to school students from **Class 6 to Class 12 across CBSE, ICSE, and UP Boards**, as well as competitive examinations like **NEET and JEE (Foundation & Target)**.

The new multi-page web platform is engineered as an **"Elite Academic Powerhouse"** that:
1. Instills immediate confidence and prestige in parents evaluating coaching options.
2. Empowers students to explore customized course paths based on their exact Grade (6–12) and Board (CBSE / ICSE / UP Board).
3. Drives high-conversion lead generation through a streamlined, multi-step **"Book a Free Demo Class"** engine.
4. Celebrates verified student outcomes, top state/national rankers, and experienced faculty pedagogy.

---

## 2. Multi-Page Site Architecture & Routing

The application is built as a multi-page React application with client-side routing via `react-router-dom`:

```
Vidhya Dham Web Platform
 ├── / (Home — Flagship Experience)
 ├── /courses (Academic Programs & Interactive Navigator)
 ├── /results (Hall of Fame & Track Record)
 ├── /faculty (Educator Profiles & Pedagogy)
 ├── /admissions (Free Demo Booking, VDAT Scholarship & Enrollment)
 └── /contact (Campus Centers & Inquiries)
```

### Page Breakdown & Content Scope

#### 1. Home (`/`)
* **Hero Section**:
  * High-authority headline: *"Empowering Academic Excellence from Class 6 to 12 & NEET/JEE"*.
  * Real-time Credibility Ticker: 98.4% Highest Board Score, 500+ Selections, 15+ Years Legacy.
  * Direct action buttons: `[Book Free Demo Class]` (opens modal) and `[Explore Courses]`.
* **Interactive Grade & Board Quick Navigator**:
  * 3-step interactive finder (Select Class $\rightarrow$ Select Board $\rightarrow$ View Tailored Batch & Syllabus preview).
* **Flagship Academic Verticals**:
  * *Middle School Foundation (Class 6–8)*: Conceptual STEM, Olympiads, NTSE prep.
  * *Secondary Board Mastery (Class 9–10)*: CBSE, ICSE, UP Board Board Exam special batches.
  * *Senior Secondary & Target (Class 11–12)*: Physics, Chemistry, Biology, Mathematics + NEET/JEE integration.
* **Hall of Fame Teaser**:
  * Carousel/Grid of top rankers with verified marks and photos.
* **The 4-Pillar Vidhya Dham Advantage**:
  * Micro-batches (limited seats per batch).
  * Daily Practice Problems (DPP) & Doubt Clearing Cell.
  * Bi-weekly Proctored OMR Testing & Detailed Analytics.
  * Experienced Senior Faculty with 10+ years track record.
* **Faculty Spotlight Teaser & Testimonials**.
* **Global CTA Banner**: Instant demo booking prompt with pre-selected batch options.

#### 2. Courses & Programs (`/courses`)
* **Dynamic Filter Bar**:
  * Filter by Level: `All`, `Class 6–8 (Junior Foundation)`, `Class 9–10 (Secondary)`, `Class 11–12 (Senior Secondary)`, `Target NEET/JEE`.
  * Filter by Board: `CBSE`, `ICSE`, `UP Board (Hindi/English Medium)`.
* **Detailed Course Cards**:
  * Batch Name, Eligible Grades, Board Coverage.
  * Key Curriculum Highlights (Syllabus breakdown, Weekly lecture hours, Doubt support).
  * Included Materials (Printed study kits, DPP booklets, Test series access).
  * Direct Action: `[Book 3-Day Demo in this Batch]` / `[View Full Syllabus PDF]`.

#### 3. Hall of Fame & Results (`/results`)
* **Category Tabs**: `All Highlights`, `NEET 2025/2026 Champions`, `Class 12th Board Toppers (95%+)`, `Class 10th Board Toppers`, `UP Board State Rankers`.
* **Verified Ranker Cards**:
  * Student photo, score pill (e.g., `690/720 NEET`, `98.6% CBSE 12th`), school name, and target institution.
  * Authentic quotes and subject score breakdowns.
* **Parent & Student Video/Text Testimonials**:
  * Real stories focusing on conceptual clarity, individual faculty attention, and grade transformation.

#### 4. Faculty & Pedagogy (`/faculty`)
* **Master Educators Grid**:
  * Faculty photo, name, subject domain (Physics, Chemistry, Zoology, Botany, Mathematics), educational background (IIT/NIT/Top University Alumni), and years of teaching experience.
* **Classroom & Pedagogy Deep-Dive**:
  * Visual learning tools, digital smart boards, dedicated one-on-one doubt resolution slots.

#### 5. Admissions & Demo Booking (`/admissions`)
* **Interactive Demo Class Registration Engine**:
  * Multi-step lead capture: Student Name, Parent WhatsApp Number, Student Grade, Board selection, Preferred Center / Hybrid mode.
* **VDAT (Vidhya Dham Aptitude & Scholarship Test)**:
  * Up to 100% scholarship details, exam syllabus, test schedule, and free online registration.
* **Admission Process Timeline & Fee FAQs**.

#### 6. Contact & Campus Center (`/contact`)
* **Campus Locations & Timings**:
  * Exact address, contact hotline, office hours, and interactive map embed.
* **Direct Communication Channels**:
  * One-tap WhatsApp chat, phone call links, and parent consultation appointment scheduler.

---

## 3. Technology Stack & Architectural Decisions

* **Framework**: React 18 / 19 with Vite (TypeScript)
* **Routing**: `react-router-dom` (v6) for seamless multi-page transitions
* **Styling**: Tailwind CSS v3/v4 with custom CSS variables for mathematical token precision
* **Icons**: `lucide-react` (clean, modern, lightweight iconography)
* **Animation & Micro-interactions**: Smooth CSS transitions + Lucide kinetic states for high responsiveness
* **State Management**: React Context / lightweight custom hooks for global Demo Booking Modal state and interactive course filters

---

## 4. Brand Color Strategy & Verification Gate

During the design token generation phase, the 5-color palette from previous brand references will be analyzed and tested against WCAG 2.2 AA standards:
1. **Academic Blue / Deep Navy (`#0B192C` or `#1E3A8A`)**: Authority, stability, and institutional trust.
2. **Excellence Amber / Saffron Gold (`#F59E0B` or `#EAB308`)**: Achievement, energy, and honors.
3. **Pristine White / Off-White (`#F8FAFC`)**: Clean readability, spacious surface backgrounds.
4. **Achievement Emerald (`#10B981`)**: Success metrics, verified rank badges, and positive reinforcement.
5. **Slate Neutral (`#475569` / `#64748B`)**: Secondary typography, borders, and structured grids.

---

## 5. Non-Functional Requirements & Performance Goals

* **Mobile-First Responsive Design**: Flawless touch target ergonomics (minimum 44px) for parents browsing on smartphones.
* **Instant Load Speed**: Lighthouse score > 90 on Desktop and Mobile.
* **Accessibility**: WCAG 2.2 AA compliant contrast ratios across all body text and UI controls.
* **SEO & GEO Readiness**: Semantic HTML5 hierarchy (`<h1>` $\rightarrow$ `<h6>`), OpenGraph tags, structured JSON-LD educational organization schema.

---

## 6. Verification & Quality Gates

* **Build Validation**: Clean `npm run build` with zero TypeScript or bundling errors.
* **Routing Verification**: All subpages (`/`, `/courses`, `/results`, `/faculty`, `/admissions`, `/contact`) navigate smoothly with active nav states and scroll-to-top on route change.
* **Interactive Testing**:
  * Grade & Board Navigator filters accurately across all Class 6–12, CBSE, ICSE, and UP Board permutations.
  * Demo Booking Modal opens and submits with form validation and success confirmation state.
  * Results tabs filter dynamically without layout jank.

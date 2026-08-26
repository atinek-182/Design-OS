# Multi-Stack Adaptation Recipes (React, Next.js, Vite)

When importing or generating design skills, provide clean patterns for both **React / Next.js** and **Vite (Vanilla/React)**.

---

## 1. React / Next.js (App Router) Standard

```tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. SSR Guard
    if (typeof window === 'undefined' || !containerRef.current) return;

    // 2. Reduced Motion Check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 3. GSAP Context for automatic teardown
    const ctx = gsap.context(() => {
      gsap.from('[data-reveal]', {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    // 4. Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <h2 data-reveal className="text-4xl font-bold tracking-tight text-white mb-6">
        Engineered with Precision
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div data-reveal className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md">
          <h3 className="text-xl font-semibold text-white mb-2">High Performance</h3>
          <p className="text-zinc-400 text-sm">GPU-accelerated transforms at 60fps.</p>
        </div>
      </div>
    </section>
  );
}
```

---

## 2. Vite (Vanilla HTML5 / ESM) Standard

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feature Section</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body class="bg-zinc-950 text-zinc-100 antialiased">
  <section class="max-w-7xl mx-auto py-24 px-6" id="feature-section">
    <h2 class="text-4xl font-bold tracking-tight mb-6 reveal-item">
      Engineered with Precision
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 reveal-item">
        <h3 class="text-xl font-semibold mb-2">High Performance</h3>
        <p class="text-zinc-400 text-sm">GPU-accelerated transforms at 60fps.</p>
      </div>
    </div>
  </section>

  <script type="module">
    import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm';
    import { ScrollTrigger } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger/+esm';

    gsap.registerPlugin(ScrollTrigger);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.from('.reveal-item', {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#feature-section',
          start: 'top 80%'
        }
      });
    }
  </script>
</body>
</html>
```

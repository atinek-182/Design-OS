---
title: The Shift Tokyo — Real-Time Tokyo Clock & GSAP Kinetic Scroll
domain: reference
summary: Real-time Tokyo JST time clock indicator implementation and GSAP kinetic scroll script driving project card entry
  scale.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- The Shift Tokyo — Real-Time Tokyo Clock & GSAP Kinetic Scroll
- Real-Time Tokyo JST Clock Widget Component
- GSAP Kinetic Scroll Script
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/23-the-shift-tokyo-tokyo-clock-widget-and-gsap-kinetic.md
- When reading context for The Shift Tokyo Clock Motion
tags:
- reference
- awwwards
- the-shift-tokyo
- tokyo-clock-widget
- gsap-kinetic-scroll
updated: '2026-08-08'
---

# The Shift Tokyo — Real-Time Tokyo Clock & GSAP Kinetic Scroll

The Shift Tokyo embeds a **Real-Time Tokyo Time Indicator** (`東京 18:42:09 JST`) with GSAP kinetic scroll triggers.

---

## Real-Time Tokyo JST Clock Widget Component

```javascript
// Real-Time Tokyo JST Clock Generator
export function getTokyoTime() {
  const options = {
    timeZone: 'Asia/Tokyo',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const formatter = new Intl.DateTimeFormat([], options);
  return `東京 ${formatter.format(new Date())} JST`;
}
```

---

## GSAP Kinetic Scroll Script

```javascript
// GSAP Kinetic Project List Scale Trigger
gsap.utils.toArray('.project-card').forEach((card) => {
  gsap.fromTo(card,
    { opacity: 0, y: 60, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1.0,
      duration: 1.0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});
```

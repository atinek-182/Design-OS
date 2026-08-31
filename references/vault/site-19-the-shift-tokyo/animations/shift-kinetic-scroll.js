/**
 * Kinetic Split Text & WebGL Hover Animation Setup
 * Target: The Shift Tokyo (https://theshift.tokyo/en/)
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initShiftKineticAnimations() {
  // 1. Kinetic Hero Split Title Stagger Reveal
  const heroLines = document.querySelectorAll(".page-home-title .l");
  if (heroLines.length) {
    gsap.from(heroLines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.1,
    });
  }

  // 2. Project Card Hover Scale & Cursor Magnetic Elasticity
  const cards = document.querySelectorAll(".features-a");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.02, duration: 0.4, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1.0, duration: 0.4, ease: "power2.out" });
    });
  });

  // 3. Scroll Trigger Fade-In Up Items
  gsap.utils.toArray(".js-inview").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

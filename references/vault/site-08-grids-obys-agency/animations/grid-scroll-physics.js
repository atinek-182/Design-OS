/**
 * GSAP ScrollTrigger & Lenis Scroll Physics Setup
 * Target: Grids by Obys Agency (https://grids.obys.agency/)
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export function initGridScrollPhysics() {
  // Initialize Lenis Smooth Scroll Engine
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 2.0,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Synchronize Lenis with GSAP ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // 1. Kinetic Hero Text Stagger Reveal
  gsap.from(".hero-title-word", {
    yPercent: 120,
    rotation: 5,
    opacity: 0,
    duration: 1.4,
    stagger: 0.08,
    ease: "power4.out",
    delay: 0.2,
  });

  // 2. Interactive Column Expansion on Scroll Scrub
  gsap.to(".grid-overlay-col", {
    scrollTrigger: {
      trigger: ".grid-section-columns",
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    },
    scaleX: 1.05,
    borderColor: "rgba(230, 200, 110, 0.5)",
    stagger: {
      amount: 0.3,
      from: "center",
    },
  });

  // 3. Van de Graaff Diagonal Canon Draw Motion
  gsap.fromTo(
    ".canon-diagonal-line",
    { strokeDashoffset: 1000 },
    {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: ".vandegraaf-canon-container",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1,
      },
    }
  );

  return lenis;
}

/**
 * Sondaven Motion Architecture & Physics Parameters
 * Library Stack: GSAP 3.13 + ScrollTrigger + Lenis Smooth Scroll
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

// 1. Lenis Smooth Scroll Configuration (Extracted Mathematical Curve)
export function initLenisScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

// 2. Sondaven Pinned Scrollytelling & 3D Canvas Scrub Math
export function initSondavenHeroScrollytelling(containerEl, canvasUniforms) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerEl,
      start: "top top",
      end: "+=250%",
      scrub: 1.2,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Update WebGL canvas camera heightmap uniform based on scroll progress
        if (canvasUniforms && canvasUniforms.uScrollProgress) {
          canvasUniforms.uScrollProgress.value = self.progress;
        }
      },
    },
  });

  tl.to(".sondaven-hero-title", {
    yPercent: -40,
    opacity: 0.2,
    ease: "power2.inOut",
  })
  .to(".sondaven-subtitle-reveal", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.3")
  .to(".theme-contrast-overlay", {
    backgroundColor: "#1d1a17",
    color: "#f6f4f0",
    duration: 1.0,
    ease: "none",
  });

  return tl;
}

/**
 * Lenis Smooth Scroll & Rotated Card Page Transitions Architecture
 * Extracted from Nuxt.js / Vue 3 interaction modules in The Line Studio
 */

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

export class LineStudioEngine {
  constructor() {
    this.initLenis();
    this.initPageTransitions();
  }

  initLenis() {
    // Lenis Smooth Inertia Scroll Configuration
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential Out Easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    const raf = (time) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    console.log('[LineStudioEngine] Lenis Smooth Scroll Initialized.');
  }

  initPageTransitions() {
    // Rotated 3D Card Page Overlay Transition Keyframes (.page-enter-from / .page-leave-to)
    this.transitionTimeline = gsap.timeline({ paused: true });

    this.transitionTimeline
      .to('.page-leave-target', {
        y: '-25vh',
        rotate: 4,
        duration: 0.78,
        ease: 'cubic-bezier(0.44, 0.14, 0.28, 1)',
      })
      .fromTo(
        '.page-enter-target',
        {
          x: '-10%',
          y: '105vh',
          rotate: -4,
        },
        {
          x: '0%',
          y: '0vh',
          rotate: 0,
          duration: 0.8,
          ease: 'cubic-bezier(0.44, 0.14, 0.28, 1)',
        },
        '-=0.4'
      );
  }

  triggerPageTransition(nextRouteUrl) {
    this.transitionTimeline.restart().then(() => {
      window.location.href = nextRouteUrl;
    });
  }
}

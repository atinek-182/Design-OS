import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export interface LenisGsapOptions {
  lerp?: number;           // Smooth scroll interpolation (default: 0.08)
  duration?: number;       // Smooth duration in seconds (default: 1.2)
  smoothWheel?: boolean;   // Enable wheel smoothing (default: true)
  wheelMultiplier?: number;// Scroll speed multiplier (default: 1.0)
}

export interface ScrollTelemetry {
  velocity: number;
  progress: number;
  scroll: number;
}

/**
 * Headless Lenis + GSAP ScrollTrigger Synchronization Hook
 *
 * Implements Logician Invariant 3:
 * Single unified requestAnimationFrame ticker binding Lenis updates to ScrollTrigger.update()
 * with gsap.ticker.lagSmoothing(0) to eliminate scroll jitter and micro-stutters.
 */
export function useLenisGsap(options: LenisGsapOptions = {}) {
  const {
    lerp = 0.08,
    duration = 1.2,
    smoothWheel = true,
    wheelMultiplier = 1.0,
  } = options;

  const lenisRef = useRef<Lenis | null>(null);
  const [telemetry, setTelemetry] = useState<ScrollTelemetry>({
    velocity: 0,
    progress: 0,
    scroll: 0,
  });

  useEffect(() => {
    // 1. Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      lerp,
      duration,
      smoothWheel,
      wheelMultiplier,
      autoRaf: false, // We control RAF via GSAP ticker
    });
    lenisRef.current = lenis;

    // 2. Synchronize Lenis scroll updates directly to GSAP ScrollTrigger
    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      setTelemetry({
        velocity: Math.round(e.velocity * 100) / 100,
        progress: Math.round(e.progress * 1000) / 1000,
        scroll: Math.round(e.scroll),
      });
    });

    // 3. Connect GSAP ticker to Lenis RAF for unified single-loop execution
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Initial ScrollTrigger refresh after DOM paint
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timeout);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [lerp, duration, smoothWheel, wheelMultiplier]);

  return {
    lenis: lenisRef.current,
    telemetry,
  };
}

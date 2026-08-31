import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initFinancialGrowthAnimation(containerEl) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerEl,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1
    }
  });

  tl.fromTo(".metric-card",
    { opacity: 0, y: 50, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 1 }
  );

  return tl;
}

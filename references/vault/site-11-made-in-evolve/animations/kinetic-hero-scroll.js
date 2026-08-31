import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initKineticHeroScroll(heroText, canvasContainer) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroText,
      start: "top top",
      end: "bottom top",
      scrub: True
    }
  });

  tl.to(heroText, { y: -100, opacity: 0, ease: "none" })
    .to(canvasContainer, { scale: 1.1, ease: "none" }, 0);

  return tl;
}

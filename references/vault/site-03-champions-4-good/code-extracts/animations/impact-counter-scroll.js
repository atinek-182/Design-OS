import { gsap } from "gsap";

export function initImpactCounterScroll(counterEls) {
  counterEls.forEach(el => {
    const targetVal = parseInt(el.getAttribute("data-target") || "100", 10);
    gsap.to(el, {
      innerText: targetVal,
      duration: 2,
      snap: { innerText: 1 },
      ease: "power2.out"
    });
  });
}

import { gsap } from "gsap";

export function initEditorialRedReveal(elements) {
  gsap.fromTo(elements, 
    { opacity: 0, y: 30, color: "#FFFFFF" },
    { opacity: 1, y: 0, color: "#FF0000", duration: 0.8, stagger: 0.1, ease: "power3.out" }
  );
}

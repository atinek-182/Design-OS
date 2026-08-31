import { gsap } from "gsap";

export function initGalleryHover(cards) {
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.03, borderColor: "#FFFFFF", duration: 0.4, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, borderColor: "#3333FF", duration: 0.4, ease: "power2.out" });
    });
  });
}

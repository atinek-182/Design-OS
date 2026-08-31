import { gsap } from "gsap";

export function initPortfolioHoverPhysics(cards) {
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.02, duration: 0.4, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out" });
    });
  });
}

import { gsap } from "gsap";

export function initEditorialHoverReveal(cards) {
  cards.forEach(card => {
    const video = card.querySelector("video");
    card.addEventListener("mouseenter", () => {
      if (video) video.play();
      gsap.to(card, { scale: 1.03, duration: 0.4, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      if (video) video.pause();
      gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out" });
    });
  });
}

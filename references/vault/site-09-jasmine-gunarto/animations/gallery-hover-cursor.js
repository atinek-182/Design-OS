import { gsap } from "gsap";

export function initGalleryHoverCursor(cursorEl, items) {
  window.addEventListener("mousemove", (e) => {
    gsap.to(cursorEl, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      gsap.to(cursorEl, { scale: 1.5, opacity: 1, duration: 0.2 });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(cursorEl, { scale: 1, opacity: 0.5, duration: 0.2 });
    });
  });
}

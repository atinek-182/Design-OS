import { gsap } from "gsap";

export function initOrbitalSphereRotator(containerEl, nodes) {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(nodes, {
    rotation: 360,
    duration: 30,
    ease: "none"
  });

  return tl;
}

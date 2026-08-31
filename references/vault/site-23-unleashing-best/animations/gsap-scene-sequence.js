import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSceneSequence(containerEl) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerEl,
      start: "top top",
      end: "+=400%",
      scrub: 1,
      pin: true,
      anticipatePin: 1
    }
  });

  // Step 1: Headline Reveal
  tl.fromTo(".scenehold1 li", 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 1 }
  )

  // Step 2: Theme Switch to Green
  .to(":root", {
    "--currentColor": "#35705B",
    "--soft": "#D6E2DE",
    duration: 1
  })

  // Step 3: Scene 4 Grid Split Text Morph
  .fromTo(".scenehold4 li",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, stagger: 0.15, duration: 1.5 },
    "-=0.5"
  )

  // Step 4: Theme Switch to Orange
  .to(":root", {
    "--currentColor": "#F57431",
    "--soft": "#FDE3D5",
    duration: 1
  });

  return tl;
}

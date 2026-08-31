import Swup from "swup";

export function initSwupTransitions() {
  const swup = new Swup({
    containers: ["#swup"],
    animateHistoryBrowsing: true,
    cache: true
  });

  swup.hooks.on("page:view", () => {
    window.scrollTo(0, 0);
  });

  return swup;
}

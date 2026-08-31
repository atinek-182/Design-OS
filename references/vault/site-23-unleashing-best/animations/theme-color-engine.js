export const PALETTES = [
  { name: "colorGreen", primary: "#35705B", bg: "#D6E2DE" },
  { name: "colorOrange", primary: "#F57431", bg: "#FDE3D5" },
  { name: "colorBlue", primary: "#016C8F", bg: "#CCE1E8" },
  { name: "colorRed", primary: "#C74332", bg: "#F3D9D6" },
  { name: "colorPurple", primary: "#87359F", bg: "#E7D6EB" },
  { name: "colorNeutral", primary: "#191919", bg: "#F1F1F1" }
];

export function applyTheme(paletteName) {
  const target = PALETTES.find(p => p.name === paletteName) || PALETTES[0];
  document.documentElement.style.setProperty("--currentColor", target.primary);
  document.documentElement.style.setProperty("--soft", target.bg);
  document.documentElement.style.setProperty("--currentColorAlpha", `${target.primary}70`);
}

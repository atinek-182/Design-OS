import React, { useState } from "react";
import { TokyoClockWidget } from "./TokyoClockWidget";

interface ShiftTokyoNavProps {
  currentLang?: "EN" | "JA";
  onLangToggle?: () => void;
}

export const ShiftTokyoNav: React.FC<ShiftTokyoNavProps> = ({
  currentLang = "EN",
  onLangToggle,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference text-white font-sans">
      {/* Brand Name */}
      <a href="#" className="group flex items-center gap-2 text-xl font-bold tracking-tighter uppercase">
        <span className="group-hover:text-[#FE4249] transition-colors">THE SHIFT</span>
      </a>

      {/* Center Tokyo Clock */}
      <div className="hidden md:block">
        <TokyoClockWidget />
      </div>

      {/* Right Navigation Controls */}
      <div className="flex items-center gap-6 text-xs font-mono tracking-wider">
        {/* Language Switcher */}
        <button
          onClick={onLangToggle}
          className="hover:text-[#FE4249] transition-colors focus:outline-none"
        >
          [{currentLang}]
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden sm:block hover:text-[#FE4249] transition-colors focus:outline-none"
        >
          {theme === "dark" ? "☼ LIGHT" : "☾ DARK"}
        </button>

        {/* Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 border border-white/20 px-3 py-1.5 rounded-full hover:border-[#FE4249] hover:text-[#FE4249] transition-all focus:outline-none"
        >
          <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-between p-12 text-white font-sans animate-fade-in">
          <div className="flex justify-between items-start">
            <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
              CREATIVE COLLECTIVE · TOKYO / WORLDWIDE
            </span>
          </div>

          <nav className="space-y-4">
            {["Home", "Project", "Research", "About"].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-6 text-5xl md:text-7xl font-bold tracking-tight hover:text-[#FE4249] transition-colors"
              >
                <span className="text-xs font-mono text-white/30 group-hover:text-[#FE4249]">
                  0{idx + 1}
                </span>
                <span>{item}</span>
              </a>
            ))}
          </nav>

          <div className="flex justify-between items-end border-t border-white/10 pt-6 text-xs font-mono text-white/50">
            <span>EXPLORING THE SHIFT OF TODAY</span>
            <span>TOKYO, JAPAN</span>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from "react";

interface HeaderNavProps {
  activeChapter?: number;
  totalChapters?: number;
}

export const ObysHeaderNav: React.FC<HeaderNavProps> = ({
  activeChapter = 1,
  totalChapters = 4,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference text-white font-sans">
      {/* Brand Logo */}
      <div className="flex items-baseline gap-3">
        <a href="#" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          Grids<span className="text-[#e6c86e]">.</span>
        </a>
        <span className="text-xs tracking-widest text-white/50 uppercase font-mono hidden sm:inline">
          By Obys Agency
        </span>
      </div>

      {/* Chapter Indicator Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider">
        <div className="flex items-center gap-2 text-white/60">
          <span>CHAPTER</span>
          <span className="text-[#e6c86e] font-bold">0{activeChapter}</span>
          <span className="text-white/30">/</span>
          <span>0{totalChapters}</span>
        </div>

        <ul className="flex items-center gap-6 text-white/70">
          <li>
            <a href="#columns" className="hover:text-white transition-colors">
              01 COLUMNS & VAN DE GRAAF
            </a>
          </li>
          <li>
            <a href="#rectangular" className="hover:text-white transition-colors">
              02 RECTANGULAR & OTHERS
            </a>
          </li>
          <li>
            <a href="#credits" className="hover:text-white transition-colors">
              03 BOOKS & CREDITS
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase hover:text-[#e6c86e] transition-colors focus:outline-none"
      >
        <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        <div className="w-4 h-4 flex flex-col justify-center gap-1">
          <span className={`h-[1px] bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[2.5px]" : ""}`} />
          <span className={`h-[1px] bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""}`} />
        </div>
      </button>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#111113] z-40 flex flex-col justify-between p-12 text-white font-sans animate-fade-in">
          <div className="flex justify-between items-start">
            <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
              EDUCATIONAL PROJECT ON GRID SYSTEMS
            </span>
          </div>

          <div className="space-y-6 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-serif italic tracking-tight text-[#e6c86e]">
              Unusual Storytelling
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Explore the grid canons Obys uses every day — from classical Van de Graaff margins to responsive 12-column layouts.
            </p>
          </div>

          <div className="flex justify-between items-end border-t border-white/10 pt-6 text-xs font-mono text-white/50">
            <span>© OBYS AGENCY 2026</span>
            <span>DESIGNED FOR WEB CREATORS</span>
          </div>
        </div>
      )}
    </header>
  );
};

import React from "react";

export interface NavHeaderProps {
  onLetsTalk?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onLetsTalk }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-[#F4F4F0]/90 backdrop-blur-md border-b border-[#E2E2DC]">
      <a href="/" className="font-bold text-2xl tracking-tight text-[#0D0D0E]">
        EVOLVE
      </a>
      <nav className="flex items-center space-x-8 text-sm font-semibold tracking-wider text-[#0D0D0E] uppercase">
        <a href="#direction" className="hover:text-black/70 transition-colors">Direction</a>
        <a href="#tech" className="hover:text-black/70 transition-colors">Tech</a>
        <a href="#marketing" className="hover:text-black/70 transition-colors">Marketing</a>
        <button
          onClick={onLetsTalk}
          className="bg-[#0D0D0E] hover:bg-black/90 text-white px-5 py-2.5 rounded font-bold text-xs tracking-wide uppercase transition-colors shadow-md"
        >
          Let's Talk
        </button>
      </nav>
    </header>
  );
};

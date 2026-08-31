import React from "react";

export interface NavHeaderProps {
  onContactClick?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onContactClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-[#1E1E22]">
      <a href="/" className="font-bold text-2xl tracking-widest text-white uppercase">
        DETROIT <span className="text-[#888888]">PARIS</span>
      </a>
      <nav className="flex items-center space-x-8 text-xs font-semibold tracking-widest text-white uppercase">
        <a href="#artists" className="hover:opacity-70 transition-opacity">Artists</a>
        <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
        <a href="#talent" className="hover:opacity-70 transition-opacity">Talent</a>
        <button
          onClick={onContactClick}
          className="bg-white hover:bg-white/90 text-black px-5 py-2 rounded font-bold uppercase text-xs tracking-wider transition-colors shadow-md"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

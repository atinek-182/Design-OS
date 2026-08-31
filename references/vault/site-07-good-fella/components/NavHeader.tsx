import React from "react";

export interface NavHeaderProps {
  onContactClick?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onContactClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626]">
      <a href="/" className="font-extrabold text-xl tracking-tight text-white uppercase font-mono">
        GOOD <span className="text-[#FF0000]">FELLA</span>
      </a>
      <nav className="flex items-center space-x-8 text-xs font-mono font-bold tracking-widest text-white uppercase">
        <a href="#work" className="hover:text-[#FF0000] transition-colors">Work</a>
        <a href="#pricing" className="hover:text-[#FF0000] transition-colors">Pricing</a>
        <a href="#about" className="hover:text-[#FF0000] transition-colors">About</a>
        <button
          onClick={onContactClick}
          className="bg-[#FF0000] hover:bg-red-600 text-white px-5 py-2 rounded font-bold text-xs tracking-widest uppercase transition-colors shadow-md"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

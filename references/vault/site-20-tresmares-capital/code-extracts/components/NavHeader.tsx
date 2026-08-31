import React from "react";

export interface NavHeaderProps {
  onPortalClick?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onPortalClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#0B0E14]/80 backdrop-blur-md border-b border-[#212938]">
      <a href="/" className="font-serif text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
        TRESMARES <span className="text-[#D94A38]">CAPITAL</span>
      </a>
      <nav className="flex items-center space-x-8 text-sm font-medium tracking-wide">
        <a href="#strategy" className="hover:text-[#D94A38] transition-colors">Strategy</a>
        <a href="#portfolio" className="hover:text-[#D94A38] transition-colors">Portfolio</a>
        <a href="#team" className="hover:text-[#D94A38] transition-colors">Team</a>
        <button
          onClick={onPortalClick}
          className="bg-[#D94A38] hover:bg-[#b83b2c] text-white px-5 py-2 rounded font-bold uppercase text-xs tracking-wider transition-colors shadow-md"
        >
          Investor Portal
        </button>
      </nav>
    </header>
  );
};

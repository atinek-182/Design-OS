import React from "react";

export interface NavHeaderProps {
  onContactClick?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onContactClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#0D0D0E]/80 backdrop-blur-md border-b border-[#26262B]">
      <a href="/" className="font-serif text-2xl font-bold tracking-tight text-[#F5F3EF] hover:opacity-80 transition-opacity">
        ASHLEY BROOKE <span className="text-[#E0533C]">CS</span>
      </a>
      <nav className="flex items-center space-x-8 text-sm font-medium tracking-wide text-[#F5F3EF]">
        <a href="#work" className="hover:text-[#E0533C] transition-colors">Work</a>
        <a href="#services" className="hover:text-[#E0533C] transition-colors">Services</a>
        <a href="#about" className="hover:text-[#E0533C] transition-colors">About</a>
        <button
          onClick={onContactClick}
          className="bg-[#E0533C] hover:bg-[#c8442f] text-white px-5 py-2 rounded font-bold uppercase text-xs tracking-wider transition-colors shadow-md"
        >
          Initiate Project
        </button>
      </nav>
    </header>
  );
};

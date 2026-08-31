import React from "react";

export interface NavHeaderProps {
  onContactClick?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onContactClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/10">
      <a href="/" className="font-display text-2xl tracking-wider text-red-600 hover:opacity-80 transition-opacity">
        TRUCK'N ROLL®
      </a>
      <nav className="flex items-center space-x-8 text-sm font-semibold tracking-wide">
        <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
        <a href="#fleet" className="hover:text-red-500 transition-colors">Fleet</a>
        <a href="#careers" className="hover:text-red-500 transition-colors">Careers</a>
        <button
          onClick={onContactClick}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded font-bold uppercase text-xs tracking-wider transition-colors"
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
};

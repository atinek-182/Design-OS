import React from "react";

export interface NavHeaderProps {
  onBookCall?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onBookCall }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
      <a href="/" className="font-extrabold text-xl tracking-wider text-white">
        OFF MENU
      </a>
      <nav className="flex items-center space-x-6 text-sm font-medium text-white/80">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <a href="#approach" className="hover:text-white transition-colors">Approach</a>
        <button
          onClick={onBookCall}
          className="bg-white hover:bg-white/90 text-black px-4 py-2 rounded-full font-semibold text-xs tracking-wide transition-colors shadow-md"
        >
          Book a Call
        </button>
      </nav>
    </header>
  );
};

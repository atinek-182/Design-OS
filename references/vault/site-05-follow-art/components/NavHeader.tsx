import React from "react";

export interface NavHeaderProps {
  onSignUp?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onSignUp }) => {
  return (
    <header className="promo-header fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-[#3333FF]">
      <a href="/" className="font-extrabold text-2xl tracking-tighter text-white uppercase">
        FOLLOW<span className="text-[#0000FF]">.ART</span>
      </a>
      <nav className="flex items-center space-x-8 text-sm font-bold tracking-wide text-white uppercase">
        <a href="#connectory" className="hover:text-[#A3A3FF] transition-colors">Connectory</a>
        <a href="#the-card" className="hover:text-[#A3A3FF] transition-colors">The Card</a>
        <a href="#exhibitions" className="hover:text-[#A3A3FF] transition-colors">Exhibitions</a>
        <button
          onClick={onSignUp}
          className="bg-white hover:bg-white/90 text-black px-6 py-2.5 rounded font-extrabold text-xs tracking-wider uppercase transition-colors shadow-md"
        >
          Sign Up
        </button>
      </nav>
    </header>
  );
};

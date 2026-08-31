import React from "react";

export interface NavHeaderProps {
  onJoinClub?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onJoinClub }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E8E8E2]">
      <a href="/" className="font-extrabold text-2xl tracking-tight text-[#0A0A0C]">
        CHAMPIONS <span className="text-[#FF3366]">4 GOOD</span>
      </a>
      <nav className="flex items-center space-x-8 text-sm font-bold tracking-wide text-[#0A0A0C] uppercase">
        <a href="#athletes" className="hover:text-[#FF3366] transition-colors">Athletes</a>
        <a href="#business" className="hover:text-[#FF3366] transition-colors">Business</a>
        <a href="#events" className="hover:text-[#FF3366] transition-colors">Events</a>
        <button
          onClick={onJoinClub}
          className="bg-[#FF3366] hover:bg-[#e62e5c] text-white px-6 py-2.5 rounded font-extrabold text-xs tracking-wider uppercase transition-colors shadow-md"
        >
          Join Club
        </button>
      </nav>
    </header>
  );
};

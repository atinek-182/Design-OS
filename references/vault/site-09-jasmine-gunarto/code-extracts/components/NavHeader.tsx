import React from "react";

export interface NavHeaderProps {
  location?: string;
  time?: string;
  coords?: string;
}

export const NavHeader: React.FC<NavHeaderProps> = ({
  location = "NEW YORK, US",
  time = "1:17 AM GMT-4",
  coords = "36.7783° N, 119.4179°"
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-[#090909]/80 backdrop-blur-md border-b border-[#222222] text-xs text-[#888888] tracking-widest font-mono">
      <div className="flex space-x-6">
        <span>{location}</span>
        <span>{time}</span>
        <span className="hidden md:inline">{coords}</span>
      </div>
      <nav className="flex space-x-8 font-sans font-bold text-sm text-[#EBEAE4]">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#works" className="hover:text-white transition-colors">Works</a>
        <a href="#break" className="hover:text-white transition-colors">Break</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </nav>
    </header>
  );
};

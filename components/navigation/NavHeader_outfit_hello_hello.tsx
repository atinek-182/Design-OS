import React from "react";

export interface NavHeaderProps {
  onShopClick?: () => void;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ onShopClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#EDE4DD]/80 backdrop-blur-md border-b border-black/10">
      <a href="/" className="font-extrabold text-2xl tracking-tighter uppercase text-black hover:opacity-75 transition-opacity">
        OUTFIT <span className="text-[#FF0001]">//</span> ++HELLOHELLO
      </a>
      <nav className="flex items-center space-x-6 text-sm font-bold tracking-tight">
        <a href="#collection" className="hover:text-[#FF0001] transition-colors">Collection</a>
        <a href="#lookbook" className="hover:text-[#FF0001] transition-colors">Lookbook</a>
        <button
          onClick={onShopClick}
          className="bg-[#FF0001] text-white px-5 py-2 rounded-full font-bold uppercase text-xs tracking-wider hover:scale-105 transition-transform shadow-md"
        >
          Shop Now
        </button>
      </nav>
    </header>
  );
};

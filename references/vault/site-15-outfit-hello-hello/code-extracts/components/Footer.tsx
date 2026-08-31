import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-black/10 text-center bg-[#EDE4DD]">
      <h2 className="text-4xl md:text-7xl font-extrabold uppercase mb-6 tracking-tighter">
        Explore The Full Outfit Collection
      </h2>
      <a href="https://outfit.hellohello.is/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FF0001] text-white font-extrabold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl">
        Visit Official Showcase
      </a>
      <div className="mt-16 text-xs text-black/50 font-bold uppercase tracking-wider">
        © {new Date().getFullYear()} ++hellohello Studio. All Rights Reserved.
      </div>
    </footer>
  );
};

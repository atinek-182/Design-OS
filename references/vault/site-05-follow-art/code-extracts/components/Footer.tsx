import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-[#3333FF] bg-black text-center text-white">
      <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
        Join FOLLOW.ART
      </h2>
      <a href="mailto:hello@follow.art" className="inline-block bg-white hover:bg-white/90 text-black font-extrabold text-xs uppercase tracking-widest px-10 py-4 rounded transition-colors shadow-xl">
        Claim Your Digital Card
      </a>
      <div className="mt-16 text-xs text-[#A3A3FF]">
        © {new Date().getFullYear()} FOLLOW.ART. Designed by Vide Infra Studio.
      </div>
    </footer>
  );
};

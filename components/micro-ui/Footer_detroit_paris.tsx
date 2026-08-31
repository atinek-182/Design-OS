import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-[#1E1E22] bg-[#050505] text-center text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
        Detroit Paris Production
      </h2>
      <a href="mailto:contact@detroit.paris" className="inline-block bg-white hover:bg-white/90 text-black font-bold text-sm uppercase tracking-widest px-10 py-4 rounded transition-colors shadow-xl">
        Initiate Production
      </a>
      <div className="mt-16 text-xs text-[#888888]">
        © {new Date().getFullYear()} Detroit Paris. AI Production House.
      </div>
    </footer>
  );
};

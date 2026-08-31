import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-[#26262B] bg-[#0D0D0E] text-center text-[#F5F3EF]">
      <h2 className="font-serif text-4xl md:text-6xl mb-6 uppercase">
        Let's Take Action Together
      </h2>
      <a href="mailto:hello@ashleybrookecs.com" className="inline-block bg-[#E0533C] hover:bg-[#c8442f] text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded transition-colors shadow-xl">
        Initiate Project
      </a>
      <div className="mt-16 text-xs text-[#8E8D95] font-sans">
        © {new Date().getFullYear()} Ashley Brooke CS. Creative Studio & Strategy.
      </div>
    </footer>
  );
};

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-[#262626] bg-[#0A0A0A] text-center text-white font-mono">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase">
        Good Fella Studio
      </h2>
      <a href="mailto:hello@good-fella.com" className="inline-block bg-[#FF0000] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-10 py-4 rounded transition-colors shadow-xl">
        Initiate Landmark Project
      </a>
      <div className="mt-16 text-xs text-[#888888]">
        © {new Date().getFullYear()} Good Fella Studio GmbH. Munich, Germany.
      </div>
    </footer>
  );
};

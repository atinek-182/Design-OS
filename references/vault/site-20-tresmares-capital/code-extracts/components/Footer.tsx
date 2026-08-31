import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-[#212938] bg-[#0B0E14] text-center text-white">
      <h2 className="font-serif text-4xl md:text-6xl mb-6">
        Partner With Tresmares Capital
      </h2>
      <a href="mailto:info@tresmarescapital.com" className="inline-block bg-[#D94A38] hover:bg-[#b83b2c] text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded transition-colors shadow-xl">
        Contact Our Investment Team
      </a>
      <div className="mt-16 text-xs text-[#8491A5] font-sans">
        © {new Date().getFullYear()} Tresmares Capital. Designed & Engineered by Dgrees Studio.
      </div>
    </footer>
  );
};

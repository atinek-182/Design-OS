import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-[#E2E2DC] bg-[#0D0D0E] text-center text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        Ready to evolve your eCommerce platform?
      </h2>
      <a href="mailto:info@madeinevolve.com" className="inline-block bg-[#C3FF00] hover:bg-[#b0e600] text-black font-bold text-sm uppercase tracking-wider px-10 py-4 rounded transition-colors shadow-xl">
        Start Project
      </a>
      <div className="mt-16 text-xs text-[#888888]">
        © {new Date().getFullYear()} Made in Evolve S.r.l. Modena, Italy.
      </div>
    </footer>
  );
};

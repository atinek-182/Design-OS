import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-[#E8E8E2] bg-[#0A0A0C] text-center text-white">
      <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
        Champions for Good Club
      </h2>
      <a href="mailto:hallo@champions4good.club" className="inline-block bg-[#FF3366] hover:bg-[#e62e5c] text-white font-extrabold text-sm uppercase tracking-wider px-10 py-4 rounded transition-colors shadow-xl">
        Apply For Membership
      </a>
      <div className="mt-16 text-xs text-[#707075]">
        © {new Date().getFullYear()} Champions for Good Club. Created by Double Play Studio.
      </div>
    </footer>
  );
};

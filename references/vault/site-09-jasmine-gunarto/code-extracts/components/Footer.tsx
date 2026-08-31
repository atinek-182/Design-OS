import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-[#222222] bg-[#341C09] text-center text-[#EBEAE4]">
      <h2 className="font-serif text-4xl md:text-6xl mb-6 uppercase">
        Let's Collaborate
      </h2>
      <a href="mailto:hello@jasminegunarto.com" className="inline-block bg-[#EBEAE4] hover:bg-white text-black font-bold text-sm uppercase tracking-wider px-10 py-4 rounded transition-colors shadow-xl font-mono">
        Get In Touch
      </a>
      <div className="mt-16 text-xs text-[#888888] font-mono">
        © {new Date().getFullYear()} Jasmine Gunarto. Development by Diar Adelita Sury.
      </div>
    </footer>
  );
};

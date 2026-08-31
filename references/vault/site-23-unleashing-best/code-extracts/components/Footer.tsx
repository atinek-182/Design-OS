import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-black/10 dark:border-white/10 mt-24 text-center">
      <h2 className="font-serif text-4xl md:text-7xl uppercase mb-6">
        Ready to Unleash Your Best?
      </h2>
      <button className="bg-current text-white font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-xl">
        Enroll In Masterclass
      </button>
      <div className="mt-12 text-sm opacity-50 font-sans">
        © {new Date().getFullYear()} Unleashing Best. Design & Direction by Victor Work.
      </div>
    </footer>
  );
};

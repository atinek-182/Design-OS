import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-zinc-800 bg-black text-center">
      <h2 className="font-display text-4xl md:text-7xl uppercase text-white mb-6">
        Ready to Move Your Tour?
      </h2>
      <a href="mailto:info@trucknroll.com" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-widest px-10 py-5 rounded transition-colors">
        Contact Logistics Team
      </a>
      <div className="mt-16 text-xs text-zinc-600 font-mono">
        © {new Date().getFullYear()} Truck 'n Roll® Inc. Designed & Engineered by Locomotive®.
      </div>
    </footer>
  );
};

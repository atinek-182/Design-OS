import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-white/10 bg-black text-center text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        Ready to build something agentic?
      </h2>
      <a href="mailto:hello@offmenu.design" className="inline-block bg-[#3B82F6] hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-colors shadow-xl">
        Get In Touch
      </a>
      <div className="mt-16 text-xs text-zinc-500">
        © {new Date().getFullYear()} Off Menu Design. Founded by Hunter Hammonds.
      </div>
    </footer>
  );
};

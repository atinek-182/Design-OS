import React from "react";

export const TypographyShowcase: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto text-black">
      <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF0001] mb-6 block">
        // TYPOGRAPHIC IDENTITY
      </span>
      <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter mb-12">
        Neue Haas Grotesk Text Pro
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/10 pt-8">
        <div>
          <h3 className="text-lg font-bold uppercase mb-2">Display Weights</h3>
          <p className="text-sm opacity-70">Bold (800) and Extrabold (900) paired with tight negative tracking (-0.05em) for high visual impact.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase mb-2">Color Palette</h3>
          <p className="text-sm opacity-70">Heritage Cream (#EDE4DD) paired with Electric Red (#FF0001) accent state shifts.</p>
        </div>
      </div>
    </section>
  );
};

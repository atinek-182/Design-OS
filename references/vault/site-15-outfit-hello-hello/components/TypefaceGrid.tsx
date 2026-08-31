import React from "react";

export interface TypefaceCardProps {
  number: string;
  title: string;
  description: string;
  isAccent?: boolean;
}

const ITEMS: TypefaceCardProps[] = [
  { number: "01", title: "Oversized Display", description: "Responsive text-9xl viewport-scaling titles" },
  { number: "02", title: "Scroll Transforms", description: "Image scale & rotation scrubbing", isAccent: true },
  { number: "03", title: "Apparel Showcase", description: "Studio product & merchandise gallery" },
];

export const TypefaceGrid: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <div
            key={item.number}
            className={`p-8 rounded-2xl border border-black/20 ${item.isAccent ? "bg-[#FF0001] text-[#EDE4DD]" : "bg-[#EDE4DD] text-black"} shadow-md hover:scale-105 transition-transform duration-300`}
          >
            <span className="text-4xl font-extrabold block mb-4">{item.number}</span>
            <h3 className="text-2xl font-extrabold uppercase mb-2">{item.title}</h3>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

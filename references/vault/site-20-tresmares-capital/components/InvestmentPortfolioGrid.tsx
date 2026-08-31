import React from "react";

export interface PortfolioItem {
  id: string;
  name: string;
  sector: string;
  investmentType: string;
}

const ITEMS: PortfolioItem[] = [
  { id: "01", name: "Industrial Tech Group", sector: "Advanced Manufacturing", investmentType: "Growth Equity" },
  { id: "02", name: "Iberian Logistics Hub", sector: "Supply Chain & Freight", investmentType: "Senior Debt & Mezzanine" },
  { id: "03", name: "Renewable Energy Platform", sector: "Clean Infrastructure", investmentType: "Direct Equity" }
];

export const InvestmentPortfolioGrid: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <span className="text-xs uppercase tracking-widest text-[#8491A5] font-semibold mb-8 block">
        [01] / FEATURED PORTFOLIO PARTNERSHIPS
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <div key={item.id} className="p-8 border border-[#212938] rounded-xl bg-[#131822] hover:border-[#D94A38] transition-colors duration-300">
            <span className="text-xs text-[#D4AF37] font-bold block mb-2">{item.sector}</span>
            <h3 className="font-serif text-2xl text-white mb-4">{item.name}</h3>
            <span className="text-xs text-[#8491A5] font-medium px-3 py-1 bg-black/40 rounded-full border border-white/5">
              {item.investmentType}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

import React from "react";

export const CapitalMetricsCard: React.FC = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-8 border border-[#212938] rounded-xl bg-[#131822]">
          <h3 className="font-serif text-5xl text-[#D4AF37] font-bold mb-2">€3.5B+</h3>
          <p className="text-xs uppercase text-[#8491A5] font-semibold tracking-wider">Capital Under Management</p>
        </div>
        <div className="p-8 border border-[#D94A38] rounded-xl bg-[#131822]">
          <h3 className="font-serif text-5xl text-[#D94A38] font-bold mb-2">150+</h3>
          <p className="text-xs uppercase text-[#8491A5] font-semibold tracking-wider">SME Partnerships</p>
        </div>
        <div class="p-8 border border-[#212938] rounded-xl bg-[#131822]">
          <h3 className="font-serif text-5xl text-white font-bold mb-2">3</h3>
          <p className="text-xs uppercase text-[#8491A5] font-semibold tracking-wider">Pico Tres Pillars</p>
        </div>
      </div>
    </section>
  );
};

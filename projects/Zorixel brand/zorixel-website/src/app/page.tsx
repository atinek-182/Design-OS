import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between p-8 md:p-16 bg-[#0D0E12] text-[#FAF8F5] overflow-hidden">
      {/* Navigation Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-[#FAF8F5]/10 pb-6">
        <div className="flex items-center gap-3">
          <Image
            src="/vectors/zorixel_logo_solid_white.svg"
            alt="ZORIXEL Logomark"
            width={140}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 font-rosehot text-sm tracking-wide text-[#FAF8F5]/70">
          <a href="/components" className="transition-colors hover:text-[#FAF8F5]">Vault</a>
          <a href="/resources" className="transition-colors hover:text-[#FAF8F5]">Resources</a>
          <a href="/store" className="transition-colors hover:text-[#FAF8F5]">Store</a>
          <a href="/insights" className="transition-colors hover:text-[#FAF8F5]">Insights</a>
        </nav>

        <a
          href="/resources"
          className="rounded-full bg-[#D61C2C] px-5 py-2.5 font-rosehot text-xs font-semibold tracking-wider text-white uppercase transition-transform hover:scale-105 active:scale-95"
        >
          Free Starters
        </a>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-4xl py-20 my-auto">
        <div className="inline-flex items-center gap-2 border border-[#C5A059]/30 bg-[#0D0E12] px-4 py-1.5 mb-6 text-xs font-mono uppercase tracking-widest text-[#C5A059]">
          <span>★</span> Next.js 15 &bull; React 19 &bull; Pure Color System
        </div>

        <h1 className="font-havock text-5xl md:text-7xl font-bold leading-none tracking-tight text-[#FAF8F5] mb-6">
          NOT YOUR TYPICAL <br />
          <span className="text-[#D61C2C]">
            VIBE CODING PLATFORM
          </span>
        </h1>

        <p className="font-rosehot text-lg md:text-xl text-[#FAF8F5]/70 max-w-2xl leading-relaxed mb-10">
          ZORIXEL is an elite educational ecosystem, copy-paste component vault, and AI OS workflow suite designed for modern web developers, designers, and creators.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/components"
            className="flex items-center justify-center h-12 px-8 rounded-xl bg-[#6D001A] font-rosehot text-sm font-semibold text-white tracking-wide transition-colors hover:bg-[#80001F]"
          >
            Explore Component Vault &rarr;
          </a>
          <a
            href="/resources"
            className="flex items-center justify-center h-12 px-8 rounded-xl border border-[#FAF8F5]/20 font-rosehot text-sm font-medium text-[#FAF8F5] tracking-wide transition-colors hover:bg-[#FAF8F5]/5"
          >
            Download Free AI OS Stack
          </a>
        </div>
      </main>

      {/* OKLCH Color Tokens & Verification Bar */}
      <footer className="relative z-10 border-t border-[#FAF8F5]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#FAF8F5]/50">
        <div>
          &copy; 2026 ZORIXEL &middot; All 21 Specs & 5-Tool Backend Locked
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#FAF8F5]/30">Tokens:</span>
          <span className="inline-block w-4 h-4 rounded-full bg-[#0D0E12] border border-white/20" title="Obsidian Midnight" />
          <span className="inline-block w-4 h-4 rounded-full bg-[#FAF8F5]" title="Warm Linen Cream" />
          <span className="inline-block w-4 h-4 rounded-full bg-[#6D001A]" title="Velvet Burgundy" />
          <span className="inline-block w-4 h-4 rounded-full bg-[#D61C2C]" title="Electric Crimson" />
          <span className="inline-block w-4 h-4 rounded-full bg-[#C5A059]" title="Vintage Ochre Gold" />
        </div>
      </footer>
    </div>
  );
}

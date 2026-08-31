import React, { useState } from 'react';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  hasDot?: boolean;
}

export interface LineStudioNavProps {
  statusText?: string;
  locationText?: string;
  items?: NavItem[];
}

export const LineStudioNav: React.FC<LineStudioNavProps> = ({
  statusText = "LONDON",
  locationText = "hello@thelinestudio.com",
  items = [
    { label: "WORK", href: "/work", active: true, hasDot: true },
    { label: "ABOUT", href: "/about" },
    { label: "ENTERTAINMENT", href: "/entertainment" },
    { label: "PODCAST", href: "/podcast" },
    { label: "CONTACT", href: "/contact" },
  ],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-2 left-0 right-0 z-[600] px-4 md:px-6 transition-colors duration-500 text-[#0b0b0b]">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
        {/* Studio Logo */}
        <a href="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase text-current">
          <span>THE LINE</span>
          <span className="w-2.5 h-2.5 bg-[#ff391e] rounded-full inline-block animate-pulse" />
        </a>

        {/* Studio Status & Location (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider text-[#0b0b0b]/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff391e]" />
            <span className="font-bold">{statusText}</span>
          </div>
          <span className="text-[#0b0b0b]/30">/</span>
          <a href={`mailto:${locationText}`} className="hover:text-[#ff391e] transition-colors">
            {locationText}
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-xs tracking-widest uppercase">
          {items.map((item, index) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className={`relative py-1 flex items-center gap-1.5 transition-colors ${
                  item.active ? 'text-[#ff391e] font-bold' : 'hover:text-[#ff391e]'
                }`}
              >
                {item.hasDot && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff391e]" />
                )}
                <span>{item.label}</span>
              </a>
              {index < items.length - 1 && (
                <span className="text-black/20 select-none">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-current focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#dddee2] z-[500] p-8 flex flex-col justify-between text-[#0b0b0b]">
          <div className="pt-16 flex flex-col gap-6">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-4xl font-extrabold tracking-tight uppercase hover:text-[#ff391e] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="border-t border-[#0b0b0b]/20 pt-6 text-xs font-mono">
            <p className="text-[#0b0b0b]/60">ANIMATION STUDIO LONDON</p>
            <p className="font-bold text-[#ff391e] mt-1">{locationText}</p>
          </div>
        </div>
      )}
    </header>
  );
};

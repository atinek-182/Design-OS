import React, { useEffect, useState } from "react";

export interface SondavenNavProps {
  logoText?: string;
  links?: Array<{ label: string; href: string }>;
  onThemeChange?: (isDark: boolean) => void;
}

export const SondavenNav: React.FC<SondavenNavProps> = ({
  logoText = "SON DAVEN",
  links = [
    { label: "Rooms", href: "#rooms" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Location", href: "#location" },
    { label: "Book Now", href: "#book" },
  ],
  onThemeChange,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isDark = scrollY > 400 && scrollY < 1800;
      setIsDarkTheme(isDark);
      if (onThemeChange) onThemeChange(isDark);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onThemeChange]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between transition-colors duration-500 font-serif ${
        isDarkTheme ? "bg-[#1d1a17]/80 text-[#f6f4f0] backdrop-blur-md" : "bg-[#f6f4f0]/80 text-[#2c2824] backdrop-blur-md"
      }`}
    >
      <div className="text-xl font-bold tracking-widest uppercase">{logoText}</div>
      <div className="flex items-center space-x-8 text-sm font-sans tracking-wide">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-[#a89474] transition-colors duration-300 relative group py-1"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#a89474] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
    </nav>
  );
};

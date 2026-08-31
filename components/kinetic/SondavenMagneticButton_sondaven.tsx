import React, { useRef } from "react";
import gsap from "gsap";

export interface SondavenMagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  strength?: number;
}

export const SondavenMagneticButton: React.FC<SondavenMagneticButtonProps> = ({
  children,
  onClick,
  className = "",
  strength = 0.4,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(buttonRef.current, {
      x: deltaX,
      y: deltaY,
      ease: "elastic.out(1, 0.3)",
      duration: 1.2,
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 1.2,
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`px-8 py-4 bg-[#a89474] text-[#1d1a17] font-sans font-medium tracking-wider uppercase rounded-full shadow-lg hover:bg-[#b8a484] transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

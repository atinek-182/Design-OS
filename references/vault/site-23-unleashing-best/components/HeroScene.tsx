import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !headlineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <span className="text-xs uppercase tracking-widest opacity-60 mb-4 font-bold">
        A Digital Masterclass Experience by Victor Work
      </span>
      <h1 ref={headlineRef} className="text-6xl md:text-9xl font-serif uppercase tracking-tight max-w-5xl leading-none">
        Unleashing Your Best Version
      </h1>
      <p className="mt-8 text-lg md:text-2xl max-w-2xl opacity-80 font-sans font-light">
        Achieve extraordinary results and personal goals without sacrificing health, clarity, or life balance.
      </p>
    </section>
  );
};

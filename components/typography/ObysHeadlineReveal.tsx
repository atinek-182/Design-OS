import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ObysHeadlineRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'div';
  stagger?: number;
  delay?: number;
}

/**
 * ObysHeadlineReveal
 * Production-ready React 19 masked staggered headline text reveal.
 * Retains React DOM ownership using span wraps (no textContent wipe).
 */
export const ObysHeadlineReveal: React.FC<ObysHeadlineRevealProps> = ({
  text,
  className = '',
  tag: Tag = 'h1',
  stagger = 0.04,
  delay = 0.1,
}) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const words = text.split(' ');

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const spans = containerRef.current?.querySelectorAll('.obys-char-inner');
      if (spans && spans.length > 0) {
        gsap.fromTo(
          spans,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger,
            delay,
            ease: 'power3.out',
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [text, stagger, delay]);

  return (
    <Tag
      ref={containerRef as any}
      className={`overflow-hidden font-display tracking-tight leading-[0.92] text-balance ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]" aria-hidden="true">
          {Array.from(word).map((char, charIndex) => (
            <span key={charIndex} className="inline-block overflow-hidden">
              <span className="obys-char-inner inline-block will-change-transform">
                {char}
              </span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
};

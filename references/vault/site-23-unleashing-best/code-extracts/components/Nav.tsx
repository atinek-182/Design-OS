import React from "react";

export interface NavProps {
  onAboutClick?: () => void;
  onCourseClick?: () => void;
}

export const Nav: React.FC<NavProps> = ({ onAboutClick, onCourseClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-auto">
      <a href="/" className="font-serif text-2xl font-bold tracking-tight uppercase hover:opacity-80 transition-opacity">
        UNLEASHING BEST
      </a>
      <div className="flex items-center space-x-4">
        <button
          onClick={onAboutClick}
          className="text-sm font-bold uppercase tracking-wider px-4 py-2 hover:opacity-75 transition-opacity"
        >
          About
        </button>
        <button
          onClick={onCourseClick}
          className="bg-current text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
          style={{ backgroundColor: "var(--currentColor)" }}
        >
          Get Course
        </button>
      </div>
    </header>
  );
};

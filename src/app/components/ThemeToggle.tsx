import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-[100] p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-900 dark:text-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:scale-110 active:scale-95 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 group-hover:rotate-[30deg] transition-transform duration-500" />
        ) : (
          <Sun className="w-5 h-5 group-hover:rotate-[90deg] transition-transform duration-500" />
        )}
      </div>
    </button>
  );
};

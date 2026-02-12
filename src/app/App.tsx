import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { UXProcess } from './components/UXProcess';
import { Contact, Footer } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { Toaster } from 'sonner';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`${theme} selection:bg-purple-600 selection:text-white`}>
      <div className="bg-white dark:bg-[#0a0a1f] min-h-screen font-sans transition-colors duration-700 ease-in-out">
        <Toaster position="top-center" richColors />
        
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <UXProcess />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;

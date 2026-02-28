import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6 inline-block">
            UI/UX Engineer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Crafting Digital Experiences with <span className="text-purple-600 dark:text-purple-400">Precision</span> & <span className="text-purple-600 dark:text-purple-400">Purpose</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Bridging the gap between design and engineering to build human-centered interfaces that perform beautifully.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#hire-me"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-purple-500/20"
            >
              Hire Me
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold transition-all hover:border-purple-600 dark:hover:border-purple-400"
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-purple-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
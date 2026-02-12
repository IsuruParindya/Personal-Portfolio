import React from 'react';
import { motion } from 'motion/react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyModalProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    fullDetails: {
      problem: string;
      research: string;
      process: string;
      solution: string;
      results: string;
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Sidebar Details */}
            <div className="lg:col-span-1 space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                <ImageWithFallback src={project.image} alt={project.title} className="w-full h-auto" />
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl border border-purple-100 dark:border-purple-800/50">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Key Impact
                </h3>
                <p className="text-sm text-purple-800/80 dark:text-purple-200/80 leading-relaxed">
                  The solution resulted in a significant improvement in user engagement and reduced task completion time.
                </p>
              </div>
            </div>

            {/* Main Case Study Text */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {project.fullDetails.problem}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">User Research</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.fullDetails.research}
                </p>
              </section>

              <section className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Design Process</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.fullDetails.process}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.fullDetails.solution}
                </p>
              </section>

              <section className="pb-10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Final Results</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600 mb-1">98%</div>
                    <div className="text-sm text-slate-500">Satisfaction Rate</div>
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600 mb-1">2.4x</div>
                    <div className="text-sm text-slate-500">Conversion Increase</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-6">
                  {project.fullDetails.results}
                </p>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

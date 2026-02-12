import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    details: {
      overview: string;
      problem: string;
      research: string;
      process: string;
      solution: string;
      results: string;
    };
  } | null;
}

export const CaseStudyModal = ({ isOpen, onClose, project }: CaseStudyModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 h-full w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl flex flex-col"
          >
            {/* HEADER */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 p-6 backdrop-blur-md">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                <div className="mt-2 flex gap-2">
                  {project.tags.length > 0
                    ? project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-900/20 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))
                    : <span className="text-sm text-gray-500 dark:text-gray-400">No tags</span>}
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-gray-200 dark:bg-gray-700 p-2 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12">
              {/* PROJECT IMAGE */}
              <div className="mb-12 rounded-2xl overflow-hidden aspect-video shadow-xl">
                <ImageWithFallback
                  src={project.image || "https://via.placeholder.com/800x450"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DETAILS GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* LEFT - Overview, Problem, Research, Process */}
                <div className="lg:col-span-8 space-y-16 text-gray-900 dark:text-gray-100">
                  <section>
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <span className="h-1.5 w-8 bg-purple-600 dark:bg-purple-400 rounded-full" />
                      Project Overview
                    </h3>
                    <p className="text-lg leading-relaxed">
                      {project.details.overview || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <span className="h-1.5 w-8 bg-purple-600 dark:bg-purple-400 rounded-full" />
                      Problem Statement
                    </h3>
                    <p className="text-lg leading-relaxed">
                      {project.details.problem || "Curabitur nec leo eu ligula fermentum imperdiet."}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <span className="h-1.5 w-8 bg-purple-600 dark:bg-purple-400 rounded-full" />
                      Research & Insights
                    </h3>
                    <p className="text-lg leading-relaxed">
                      {project.details.research || "Praesent vulputate sapien in nunc posuere, ac vehicula ex pretium."}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                      <span className="h-1.5 w-8 bg-purple-600 dark:bg-purple-400 rounded-full" />
                      Design Process
                    </h3>
                    <p className="text-lg leading-relaxed">
                      {project.details.process || "Sed a libero ut erat scelerisque vestibulum."}
                    </p>
                  </section>
                </div>

                {/* RIGHT - Key Results & Solution */}
                <div className="lg:col-span-4 space-y-12">
                  <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-8 border border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Key Results</h4>
                    <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                      {(project.details.results || "Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor.").split(". ").map((result, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <CheckCircle2 size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-purple-50 dark:bg-purple-900/10 p-8 border border-purple-200 dark:border-purple-700">
                    <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Solution</h4>
                    <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                      {project.details.solution || "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </p>
                    <button className="mt-6 flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm group hover:underline">
                      View Live Project
                      <ExternalLink size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
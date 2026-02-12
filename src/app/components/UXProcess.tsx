import React from 'react';
import { motion } from 'motion/react';
import { Search, Lightbulb, PenTool, FlaskConical, Rocket } from 'lucide-react';

export const UXProcess = () => {
  const steps = [
    {
      title: 'Research',
      icon: <Search className="w-6 h-6" />,
      description: 'Understanding users and defining the core problem space.'
    },
    {
      title: 'Ideation',
      icon: <Lightbulb className="w-6 h-6" />,
      description: 'Brainstorming solutions and crafting low-fidelity wireframes.'
    },
    {
      title: 'Prototyping',
      icon: <PenTool className="w-6 h-6" />,
      description: 'Building interactive high-fidelity models for validation.'
    },
    {
      title: 'Testing',
      icon: <FlaskConical className="w-6 h-6" />,
      description: 'Refining through usability tests and iterative feedback.'
    },
    {
      title: 'Delivery',
      icon: <Rocket className="w-6 h-6" />,
      description: 'Implementing production-ready code with pixel precision.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">My UX Methodology</h2>
          <div className="h-1.5 w-16 bg-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A systematic, data-driven approach to solving complex problems and creating memorable user journeys.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-200 dark:bg-slate-800 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 border border-slate-100 dark:border-slate-800 group-hover:border-purple-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

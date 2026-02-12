import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Palette, Code, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

export const About = () => {
  const skills = [
    'User Research', 'Information Architecture', 'Visual Design', 
    'Interaction Design', 'Prototyping', 'Usability Testing', 
    'Accessibility (A11y)', 'Design Systems'
  ];

  const tools = [
    'Figma', 'Adobe Creative Suite', 'React', 'TypeScript', 
    'Tailwind CSS', 'Framer Motion', 'Webflow', 'Storybook'
  ];

  const experiences = [
    {
      role: 'Lead UI/UX Engineer',
      company: 'Prism Designs',
      period: '2022 - Present',
      description: 'Spearheading the evolution of our enterprise design system and bridge the gap between Figma and production code.'
    },
    {
      role: 'Senior Product Designer',
      company: 'Vortex Apps',
      period: '2020 - 2022',
      description: 'Transformed complex data workflows into intuitive dashboard interfaces for fintech clients.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image and Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-12">
              <h2 className="text-7xl md:text-9xl font-black text-slate-900/10 dark:text-white/5 absolute -top-16 -left-8 pointer-events-none select-none">
                ISURU PARINDYA
              </h2>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white relative z-10 mb-4">
                ISURU PARINDYA
              </h2>
              <p className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest">
                Creative Problem Solver & Visual Architect
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl mb-12 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1623853434105-8e7a72898180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMFVJJTIwVVglMjBkZXNpZ25lciUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcwODIxMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alex Rivera"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent mix-blend-multiply opacity-40" />
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
                  <Briefcase className="text-purple-600" />
                  Experience
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600" />
                      <h4 className="font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">{exp.company} • {exp.period}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
                  <GraduationCap className="text-purple-600" />
                  Education
                </h3>
                <div className="pl-6 border-l-2 border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white">BFA in Interaction Design</h4>
                  <p className="text-sm text-slate-500">Global Institute of Art & Tech • Class of 2018</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills and Tech */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pt-24 space-y-16"
          >
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8">
                <Palette className="text-purple-600" />
                Expertise & Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-purple-400 transition-colors group">
                    <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8">
                <Code className="text-purple-600" />
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="px-5 py-2.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold tracking-wide transition-transform hover:-translate-y-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Theme-aware Quote Card */}
            <div className="p-8 rounded-[2.5rem] bg-black dark:bg-purple-200 text-white dark:text-purple-900 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 italic">
                  "Design is not just what it looks like. Design is how it works."
                </h3>
                <p className="font-light leading-relaxed">
                  I believe in purposeful aesthetics. Every element I place has a reason to exist, ensuring that form always follows function while still evoking delight.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
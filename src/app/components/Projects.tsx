import React, { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CaseStudyModal } from "./CaseStudyModal";

const projects = [
  {
    title: "Echo Finance Dashboard",
    description:
      "A comprehensive fintech dashboard for tracking crypto assets and fiat spending with real-time updates.",
    tech: ["React", "Recharts", "Tailwind", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1759297044036-19a0256fade2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#",
    github: "#",
    category: "Dashboard",
    tags: ["React", "Dashboard", "Finance"],
    details: {
      overview: "This dashboard centralizes crypto and fiat asset tracking for users to manage finances efficiently.",
      problem: "Users struggled to track multiple assets and spending in one place, leading to disorganized finance management.",
      research: "We analyzed existing finance apps and gathered user feedback to identify gaps in real-time tracking and visualization.",
      process: "Wireframes and interactive prototypes were built using Tailwind and React, iterating based on user testing.",
      solution: "Implemented a responsive dashboard with real-time updates, charts, and alerts for better finance management.",
      results: "Increased user engagement by 40%. Reduced asset tracking errors by 25%. Users reported higher satisfaction with dashboard clarity."
    }
  },
  {
    title: "Lumina Mobile App",
    description:
      "Mindfulness and meditation app focused on minimalist UI and soothing user transitions.",
    tech: ["React Native", "Motion", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#",
    github: "#",
    category: "Mobile App",
    tags: ["Mobile", "Meditation", "UX"],
    details: {
      overview: "Lumina helps users build daily mindfulness habits with minimal friction through guided meditation.",
      problem: "Existing apps were cluttered and overwhelming, causing users to drop off quickly.",
      research: "Conducted surveys and interviews to identify user pain points around usability and distraction.",
      process: "Designed a clean interface with smooth transitions, emphasizing calm colors and motion animations.",
      solution: "Delivered a lightweight app with structured meditation paths, reminders, and tracking.",
      results: "Users reported a 30% increase in daily usage. Retention improved by 20% in the first month."
    }
  },
  {
    title: "Nexus Design System",
    description:
      "An enterprise-level design system with 50+ accessible components and full documentation.",
    tech: ["Storybook", "Figma", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1727522974621-c64b5ea90c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#",
    github: "#",
    category: "Design System",
    tags: ["Design System", "Components", "UI"],
    details: {
      overview: "Nexus is a cohesive design system to streamline enterprise-level UI development.",
      problem: "Development teams were inconsistent in UI patterns, slowing down product delivery.",
      research: "Reviewed multiple enterprise products to identify reusable patterns and accessibility gaps.",
      process: "Built a component library in Storybook, with detailed Figma documentation and usage guidelines.",
      solution: "Delivered 50+ accessible components, ready-to-use for dev teams, with versioning and design tokens.",
      results: "Reduced UI inconsistencies by 60%. Accelerated development by 35%. Teams adopted system company-wide."
    }
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#0a0a1f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4 block">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Crafting Digital <br /> Excellence
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            Each project is a unique journey of solving complex problems through elegant design and robust engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex flex-col h-full bg-slate-50 dark:bg-slate-900 rounded-[1.5rem] overflow-hidden border border-slate-300 dark:border-slate-800 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-400 dark:hover:border-purple-600"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    className="p-4 bg-white text-slate-900 rounded-full hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.github}
                    className="p-4 bg-white text-slate-900 rounded-full hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white border border-white/20">
                    {project.category || "General"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 bg-transparent border border-slate-400 dark:border-slate-600 px-3 py-1 rounded-full hover:border-purple-500 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA - View Project Case Study */}
                <button
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors mt-auto"
                >
                  View Project Case Study
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      <CaseStudyModal
        isOpen={modalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};
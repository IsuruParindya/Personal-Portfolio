import React, { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CaseStudyModal } from "./CaseStudyModal";

const projects = [
  {
    title: "Bilingual Bird Species Recognition Using Deep Learning",
    description:
      "Built a YOLOv8 and ResNet50-based bird recognition system with Sinhala and English support.",
    tech: ["Python", "YOLOv8", "ResNet50", "OpenCV", "Flask", "React", "SQLite"],
    image:
      "https://images.unsplash.com/photo-1759297044036-19a0256fade2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#",
    github: "#",
    category: ["AI / Machine Learning (Final Year Project)"],
    tags: ["Deep Learning", "Computer Vision", "React", "Flask"],
    details: {
      overview:
        "A bilingual web system that identifies Sri Lankan bird species from uploaded images, videos, and live camera feeds, and presents results in both Sinhala and English.",
      problem:
        "Bird identification tools rarely cover Sri Lankan species and offer little Sinhala support, making them hard to use for local students, hobbyists, and conservation work.",
      research:
        "Reviewed object detection and image classification approaches, and chose a two-stage pipeline: YOLOv8 for fast bird detection and ResNet50 for accurate species classification.",
      process:
        "Trained and evaluated the models in PyTorch, built a Flask API with OpenCV for image, video, and live-feed processing, and developed a React interface backed by SQLite for storing detection results.",
      solution:
        "A detect-then-classify pipeline with out-of-distribution rejection to avoid false identifications, and a bilingual interface supporting image upload, video upload, and live webcam modes.",
      results:
        "Delivered a working end-to-end system across three input modes with bilingual output. The research was presented at the BCI International Research Conference (BCIRC) 2026."
    }
  },

  {
  title: "Plant Care Log – Mobile Application",
  description:
    "Developed a Flutter-based plant management app with offline support, using SharedPreferences for local storage of plant and user data.",
  tech: ["Flutter", "Dart", "SharedPreferences", "Material Design"],
  image:
    "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  link: "#",
  github: "#",
  category: ["Mobile App"],
  tags: ["Mobile", "Flutter", "Offline-First"],
  details: {
    overview:
      "A mobile app that lets users keep track of their indoor plants and manage their profile, working fully offline with no backend.",
    problem:
      "Plant owners often forget what each plant needs and when it was last cared for, and most existing apps require an account or constant internet access.",
    research:
      "Looked at common plant care needs and chose an offline-first approach, so all plant and user data stays on the device.",
    process:
      "Built the interface in Flutter using Material Design components, and structured the app around simple screens for plant records and user profiles.",
    solution:
      "A lightweight app that stores and retrieves plant and user data locally with SharedPreferences, so it works without internet or a server.",
    results:
      "Delivered a working cross-platform app with persistent offline data for plants and user profiles."
  }
},

  {
  title: "AquaSense – Smart Aquarium Monitoring System",
  description:
    "Built a Flutter based mobile app for aquarium monitoring, device control, and fish feeding management.",
  tech: ["Flutter", "Dart", "SQLite", "FL Chart", "Google Fonts", "IoT/Sensor Integration"],
  image:
    "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  link: "#",
  github: "#",
  category: "Mobile App (Group Project)",
  tags: ["Mobile", "Flutter", "IoT"],
  details: {
    overview:
      "A mobile app for monitoring and managing an aquarium, covering live sensor readings, device control, and fish feeding in one place.",
    problem:
      "Keeping an aquarium healthy means constantly checking conditions, operating devices, and remembering feeding times, which is easy to get wrong when done manually.",
    research:
      "Identified the key aquarium parameters and routines to cover: temperature and humidity, device controls, feeding, and historical data for spotting trends.",
    process:
      "Built as a group project in Flutter with Material Design 3, using SQLite for local storage, FL Chart for visualizing sensor history, and IoT/sensor integration for readings and device control.",
    solution:
      "A unified app with temperature and humidity monitoring, device controls, sensor analytics and history, feeding schedules, and configurable aquarium settings.",
    results:
      "Delivered a working app that brings aquarium monitoring, device control, and feeding management together on one mobile interface."
    }
  },

  {
  title: "AssetTrackPro, Real-Time RFID Asset Tracking System",
  description:
    "Built a full-stack RFID system for tracking assets, monitoring movements, and preventing unauthorized exits.",
  tech: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "JWT", "Axios", "RFID", "REST API"],
  image:
    "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  link: "#",
  github: "#",
  category: ["Full-Stack (Group Project)"],
  tags: ["React", "Node.js", "RFID", "Dashboard"],
  details: {
    overview:
      "A full-stack system that tracks organizational assets in real time using RFID, covering buildings, zones, and gates.",
    problem:
      "Organizations struggle to know where assets are, who has them, and when something leaves without authorization, which leads to losses and weak accountability.",
    research:
      "Identified the core needs: live movement tracking, assignment history, exit alerts, support for multiple organizations, and a reliable audit trail.",
    process:
      "Built as a group project with a React and Vite frontend, a Node.js and Express REST API using JWT authentication, and PostgreSQL for storage, with RFID reads driving movement events.",
    solution:
      "A platform with asset management, RFID movement tracking, assignment history, unauthorized exit alerts, a multi-tenant architecture, and audit trails for every asset movement.",
    results:
      "Delivered a working end-to-end system that gives organizations real-time visibility and an auditable record of asset movements."
  }
},

{
  title: "Loona – AI Desktop Assistant & Automation Agent",
  description:
    "Built an AI-powered Windows assistant for natural language tasks and automation.",
  tech: ["Python", "Gemini/Nemotron", "Hermes Agent Framework", "AI Agents", "Tool Calling", "Windows Automation", "Local File System"],
  image:
    "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  link: "#",
  github: "#",
  category: "AI / Automation",
  tags: ["AI Agents", "Python", "Automation", "Desktop"],
  details: {
    overview:
      "An AI-powered Windows desktop companion that understands natural language requests and carries out tasks on the PC.",
    problem:
      "Everyday PC tasks like finding files, opening apps, and running system operations take repeated manual steps, and most assistants can chat but can't safely act on the machine.",
    research:
      "Explored agent frameworks and LLM tool calling, and settled on a structured Understand → Plan → Act → Verify → Report workflow so every task is checked before it's reported as done.",
    process:
      "Built in Python on the Hermes Agent Framework with Gemini and Nemotron as the models, using a custom plugin-based tool system for file search, application control, and system operations.",
    solution:
      "An agent that plans and executes tasks, verifies the outcome, and reports back, with persistent user profile support and safety rules that limit what it can do on the PC.",
    results:
      "Delivered a working desktop agent that completes natural-language tasks end to end, with verification and safety checks built into every run."
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
              Building Intelligent <br /> Solutions
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            Each project reflects my approach to software engineering, combining problem solving, robust development, and thoughtful UI/UX design to build practical, user-focused solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-[1.5rem] overflow-hidden border border-slate-300 dark:border-slate-800 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-400 dark:hover:border-purple-600"
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
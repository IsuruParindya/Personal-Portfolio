import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Palette,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  User,
} from "lucide-react";

export const About = () => {
  const skills = [
    "User Research",
    "Information Architecture",
    "Visual Design",
    "Interaction Design",
    "Prototyping",
    "Usability Testing",
    "Accessibility (A11y)",
    "Design Systems",
  ];

  const tools = [
    "Figma",
    "Adobe Creative Suite",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Webflow",
    "Storybook",
  ];

  const experiences = [
    {
      role: "UI/UX Engineer Intern",
      company: "ICIEOS (Pvt) Ltd",
      period: "Mar 2025 - Sep 2025",
      description:
        "Worked on improving user interface workflows and contributed to building modern UI components while aligning design systems with real product implementation.",
    },
  ];

  const education = [
    {
      degree: "BSc. Information Technology",
      institution: "BCI Campus",
      period: "2023 - Present",
      description:
        "Currently pursuing a degree in Information Technology with focus on software development, artificial intelligence, and user interface engineering.",
    },
  ];

  const certifications = [
    {
      org: "University of Moratuwa",
      items: [
        "Web Design for Beginners (2025)",
        "Front-End Web Development (2025)",
        "Python for Beginners E-Certificate (2024)",
      ],
    },
    {
      org: "Udemy",
      items: [
        "UI/UX Design Course (Completed during UI/UX Engineer Internship, 2025)",
      ],
    },
    {
      org: "BCI Campus",
      items: ["Certificate in Java Programming (2023)"],
    },
  ];

  const aboutMe =
    "I’m a UI/UX focused developer who enjoys turning complex ideas into clean, usable interfaces. I combine design thinking with front-end engineering to build consistent, modern experiences always aiming for clarity, accessibility, and smooth interactions.";

  const cardBase =
    "p-6 rounded-2xl border border-slate-400 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl " +
    "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group";

  const pillClass =
    'px-4 py-2 rounded-2xl bg-transparent text-slate-700 dark:text-slate-300 font-medium text-sm ' +
    'border border-slate-400 dark:border-slate-600 hover:border-purple-500 hover:text-purple-600 ' +
    'dark:hover:border-purple-400 dark:hover:text-purple-400 cursor-default transition-transform hover:-translate-y-1';

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* TOP GRID: Name/Image (Left) + About/Skills/Tools (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT TOP */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* NAME */}
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

            {/* IMAGE */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group bg-[#0a0a0a]">
              <ImageWithFallback
                src="/Isuru.png"
                alt="Isuru Parindya"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-[#111111]/50 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT TOP */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16 lg:pt-24"
          >
            {/* ABOUT ME */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-6">
                <User className="text-purple-600" />
                About Me
              </h3>

              <div className={cardBase}>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {aboutMe}
                </p>
                <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-purple-500 transition-all duration-500" />
              </div>
            </motion.div>

            {/* SKILLS (animation restored + pill hover restored) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8">
                <Palette className="text-purple-600" />
                Expertise & Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span key={idx} className={pillClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* TOOLS (animation restored + pill hover restored) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8">
                <Code className="text-purple-600" />
                Technologies & Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {tools.map((tool, idx) => (
                  <span key={idx} className={pillClass}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SECOND GRID: Experience/Education (Left) + Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
          {/* LEFT: EXPERIENCE + EDUCATION */}
          <div className="space-y-12">
            {/* EXPERIENCE */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-8">
                <Briefcase className="text-purple-600" />
                Experience
              </h3>

              <div className="grid gap-6">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={cardBase}
                  >
                    <div className="flex justify-between mb-3">
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>

                      <span className="text-xs px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                      {exp.company}
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {exp.description}
                    </p>

                    <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-purple-500 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-8">
                <GraduationCap className="text-purple-600" />
                Education
              </h3>

              <div className="grid gap-6">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={cardBase}
                  >
                    <div className="flex justify-between mb-3">
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>

                      <span className="text-xs px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                      {edu.institution}
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {edu.description}
                    </p>

                    <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-purple-500 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CERTIFICATIONS */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-8">
              <Award className="text-purple-600" />
              Certifications
            </h3>

            <div className="grid gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={cardBase}
                >
                  <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-4">
                    {cert.org}
                  </h4>

                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    {cert.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>

                  <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-purple-500 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
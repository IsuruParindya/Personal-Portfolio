import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Palette, Code, Briefcase, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export const About = () => {
  const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'Python', 'PyTorch', 'YOLOv8', 'ResNet50', 'OpenCV', 'AI Agents',
    ],
  },
  {
    title: 'UI/UX & Mobile Development',
    skills: [
      'Figma', 'Wireframing', 'Prototyping', 'Design Systems',
      'Flutter', 'Dart', 'Material Design 3',
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      'MySQL', 'SQLite', 'Git', 'GitHub', 'VS Code', 'Jira',
    ],
  },
];

  const experiences = [
    {
      role: 'User Interface Engineering Intern',
      company: 'ICIEOS',
      period: 'Mar 2025 - Sep 2025',
      tag: 'Completed',
      description: 'Designed UI flows across 5 projects including POS, Landlord, Mobile Apps & Caregiver Platform. Built a shared Design Library and collaborated with cross-functional teams via Git and client meetings.'
    },
  ];

  const certifications = [
    {
      institution: 'University of Moratuwa',
      certs: [
        { name: 'Web Design for Beginners', year: '2025', note: null },
        { name: 'Front-End Web Development', year: '2025', note: null },
        { name: 'Python for Beginners E-Certificate', year: '2024', note: null },
      ]
    },
    {
      institution: 'BCI Campus',
      certs: [
        { name: 'Certificate in Java Programming', year: '2023', note: null },
      ]
    },
    {
      institution: 'BCI International Research Conference (BCIRC)',
      certs: [
        { name: 'Real-Time Biodiversity Monitoring via Edge-Based Lightweight Bird Species Recognition Using Optimized YOLOv8',
          year: '2026',
          note: 'Research Paper Accepted for Publication at BCIRC 2026' },
      ]
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">

        {/* Row 1: Name + hero photo | Skills + Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-8">

          {/* LEFT: Name + Photo */}
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
                Software Engineer & Creative Problem Solver
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group bg-[#0a0a0a]">
              <ImageWithFallback
                src="/Pigera2.jpeg"
                alt="Isuru Parindya"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-[#111111]/50 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT: Skills + Quote */}
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
              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3">
                      <Code size={16} className="text-purple-600" />
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-2xl bg-transparent text-slate-700 dark:text-slate-300 font-medium text-sm border border-slate-400 dark:border-slate-600 hover:border-purple-500 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 cursor-default transition-transform hover:-translate-y-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Experience + Education | Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: Experience + Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
                <Briefcase className="text-purple-600" />
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="group relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden"
                  >
                    {exp.tag && (
                      <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                        {exp.tag}
                      </span>
                    )}
                    <span className="text-4xl font-black text-slate-100 dark:text-slate-700/60 absolute bottom-3 right-5 select-none pointer-events-none leading-none group-hover:text-purple-100 dark:group-hover:text-purple-900/30 transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1 pr-16">{exp.role}</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{exp.company}</span>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed pr-8">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
                <GraduationCap className="text-purple-600" />
                Education
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden"
              >
                <GraduationCap
                  size={80}
                  className="absolute -bottom-4 -right-4 text-slate-100 dark:text-slate-700/40 group-hover:text-purple-100 dark:group-hover:text-purple-900/30 transition-colors duration-300"
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white">BSc (Hons) Information Technology</h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 ml-2 whitespace-nowrap">
                      Graduated
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 mt-1">
                    <MapPin size={12} />
                    <span>BCI Campus Negombo</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    2022 - 2026 | GPA: 3.14
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-6">
              <Award className="text-purple-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((group, gIdx) => (
                <motion.div
                  key={gIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gIdx * 0.12 }}
                  className="group relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute -bottom-2 -right-1 text-6xl font-black text-slate-100 dark:text-slate-700/50 select-none pointer-events-none leading-none group-hover:text-purple-100 dark:group-hover:text-purple-900/30 transition-colors duration-300">
                    {group.institution.charAt(0)}
                  </span>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm tracking-wide">
                      {group.institution}
                    </h4>
                  </div>
                  <div className="space-y-2 relative z-10">
                    {group.certs.map((cert, cIdx) => (
                      <div key={cIdx} className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">{cert.name}</p>
                          {cert.note && (
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 italic">{cert.note}</p>
                          )}
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 whitespace-nowrap shrink-0">
                          <Calendar size={9} />
                          {cert.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
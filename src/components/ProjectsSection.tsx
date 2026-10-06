import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  X,
  Layers,
  ShoppingBag,
  Database,
  Code2,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/mockData';
import { Project } from '../types';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'platform', label: 'Influencer Platform' },
    { id: 'ecommerce', label: 'Ruxova E-Commerce' },
    { id: 'directory', label: 'Directory Listing' },
    { id: 'dashboard', label: 'Admin Dashboards' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-4 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERED CASE STUDIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-white mb-6"
          >
            Featured Client & Platform Projects by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-neon-cyan">
              Rahul Kumar
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Explore real-world software applications built with modern web tech — featuring the RS Agency Influencer Platform, Ruxova Perfume luxury e-commerce site, and administrative portals.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                layout
                className={`glass-panel glass-panel-hover rounded-[28px] overflow-hidden flex flex-col justify-between border ${
                  project.id === 'proj-ruxova-perfume'
                    ? 'border-amber-500/30 hover:border-amber-400/60'
                    : 'border-white/10 hover:border-neon-cyan/40'
                } group shadow-2xl relative`}
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

                    {/* Category Pill Overlay */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase backdrop-blur-md ${
                        project.id === 'proj-ruxova-perfume'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40'
                      }`}>
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-mono font-bold uppercase backdrop-blur-md">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-sans text-white mb-2 group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mb-4">{project.subtitle}</p>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metrics Pill Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-6 text-[10px] font-mono">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-zinc-500 block truncate">{m.label}</span>
                          <span className="text-neon-cyan font-bold truncate">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-neon-cyan hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View Details & Architecture <ChevronRight className="w-4 h-4" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
                      title="GitHub Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 p-6 sm:p-8 bg-zinc-950 text-left relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-zinc-400 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-zinc-900">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              </div>

              {/* Title & Subtitle */}
              <span className="px-3 py-1 rounded-md bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 text-xs font-mono font-bold uppercase inline-block mb-3">
                {activeModalProject.category} Case Study
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-2">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-mono text-zinc-400 mb-6">{activeModalProject.subtitle}</p>

              {/* Description */}
              <div className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                <p>{activeModalProject.longDescription}</p>
              </div>

              {/* Technical Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase text-neon-cyan tracking-wider mb-3">
                  KEY ENGINEERING HIGHLIGHTS
                </h4>
                <ul className="space-y-2.5">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold uppercase text-neon-purple tracking-wider mb-3">
                  TECH STACK & DEPLOYMENT
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-3">
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-neon-cyan text-black font-extrabold rounded-xl hover:bg-cyan-400 flex items-center gap-2 text-xs uppercase tracking-wider transition-all"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Website
                    </a>
                  )}

                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl flex items-center gap-2 text-xs uppercase tracking-wider transition-all"
                    >
                      <Github className="w-4 h-4" /> View Source Code
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs font-mono text-zinc-400 hover:text-white"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

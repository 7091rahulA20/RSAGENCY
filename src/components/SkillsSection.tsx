import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  FileCode,
  Atom,
  Layers,
  Palette,
  Layout,
  Server,
  Cpu,
  Coffee,
  Feather,
  Globe,
  Database,
  HardDrive,
  Terminal,
  Cloud,
  GitBranch,
  UploadCloud,
  Wrench,
  Figma,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/mockData';

const ICON_MAP: Record<string, any> = {
  Code,
  FileCode,
  Atom,
  Layers,
  Palette,
  Layout,
  Server,
  Cpu,
  Coffee,
  Feather,
  Globe,
  Database,
  HardDrive,
  Terminal,
  Cloud,
  GitBranch,
  UploadCloud,
  Wrench,
  Figma,
  Search
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="relative py-28 bg-[#03000a] overflow-hidden border-t border-b border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-purple/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-4 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            ENGINEERING CAPABILITIES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-white mb-6"
          >
            Full Stack Tech Stack &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-neon-cyan">
              Developer Competencies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Proven expertise across modern frontend frameworks, backend API microservices, relational & NoSQL databases, and cloud deployments.
          </motion.p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white shadow-lg shadow-neon-purple/20'
                  : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <AnimatePresence mode="popLayout">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => {
              const IconComp = ICON_MAP[skill.iconName] || Code;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-cyan/40 group-hover:bg-neon-cyan/10 flex items-center justify-center text-neon-cyan transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-neon-cyan uppercase">
                        {skill.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-sans text-white mb-2 group-hover:text-neon-cyan transition-colors">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {skill.experience}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan" />
                    <span>Production Verified</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clapperboard,
  Layers,
  Video,
  Smile,
  Smartphone,
  PackageOpen,
  Coins,
  Sparkles,
  TrendingUp,
  Cpu,
  Briefcase,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';

// Map icon string identifiers to Lucide components safely
const ICON_MAP: Record<string, any> = {
  Clapperboard,
  Layers,
  Video,
  Smile,
  Smartphone,
  PackageOpen,
  Coins,
  Sparkles,
  TrendingUp,
  Cpu,
  Briefcase
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'brand' | 'creator'>('brand');

  const filteredServices = SERVICES.filter((s) => s.type === activeTab);

  const handleTabChange = (tab: 'brand' | 'creator') => {
    setActiveTab(tab);
  };

  const scrollToContact = (isCreator: boolean) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const tabBtn = document.getElementById(isCreator ? 'tab-creator' : 'tab-brand');
        if (tabBtn) tabBtn.click();
      }, 500);
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#03000a] overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-[35%] right-0 w-[450px] h-[450px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-0 w-[450px] h-[450px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Symmetrical Title Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-4"
          >
            OUR SPHERE OF EXPERTISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-white mb-6"
          >
            Surgical Marketing Solutions,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-neon-cyan">
              Engineered For Results.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Explore customized high-performance frameworks designed to align digital-native communities around your products and services.
          </motion.p>
        </div>

        {/* Tab Selector Sliding Control button */}
        <div className="flex justify-center mb-16" id="services-tab-control-holder">
          <div className="relative flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-sm w-full">
            {/* Background sliding tab overlay */}
            <motion.div
              layout
              className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-neon-purple to-indigo-600 shadow-md shadow-neon-purple/20 pointer-events-none"
              style={{
                width: 'calc(50% - 12px)',
                left: activeTab === 'brand' ? '6px' : 'calc(50% + 6px)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            />

            <button
              onClick={() => handleTabChange('brand')}
              className={`flex-1 py-3 text-xs sm:text-sm font-sans font-bold tracking-widest uppercase transition-colors relative z-15 cursor-pointer ${
                activeTab === 'brand' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              id="services-tab-brand-trigger"
            >
              FOR BRANDS & AGENCYS
            </button>
            <button
              onClick={() => handleTabChange('creator')}
              className={`flex-1 py-3 text-xs sm:text-sm font-sans font-bold tracking-widest uppercase transition-colors relative z-15 cursor-pointer ${
                activeTab === 'creator' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
              id="services-tab-creator-trigger"
            >
              FOR CREATORS
            </button>
          </div>
        </div>

        {/* Staggered Cards List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[500px]" id="services-grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const IconComponent = ICON_MAP[service.icon] || Sparkles;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(5px)' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-panel glass-panel-hover rounded-[32px] p-8 text-left flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Decorative faint grid card highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-cyan/5 to-transparent pointer-events-none"></div>

                  <div>
                    {/* Glowing Accent Hexagon Icon */}
                    <div className="relative mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-neon-cyan/40 group-hover:bg-neon-cyan/5 transition-all text-zinc-400 group-hover:text-neon-cyan group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-sans font-bold tracking-tight text-white mb-4 group-hover:text-neon-cyan transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Checklist Bullet Elements */}
                    <ul className="space-y-3 mb-8">
                      {service.listItems.map((listItem, listIdx) => (
                        <li key={listIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-neon-cyan/80 shrink-0 mt-0.5" />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call Action Button inside Card footer */}
                  <button
                    onClick={() => scrollToContact(activeTab === 'creator')}
                    className="mt-4 flex items-center justify-between w-full border-t border-white/5 pt-4 text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>{activeTab === 'brand' ? 'GET STARTED' : 'APPLY FOR NOMINATION'}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/btn:text-neon-cyan group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

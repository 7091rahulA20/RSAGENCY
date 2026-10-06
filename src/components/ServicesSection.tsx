import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  PackageOpen,
  Cpu,
  Clapperboard,
  Video,
  Smile,
  Coins,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { Service } from '../types';

const ICON_MAP: Record<string, any> = {
  Code,
  PackageOpen,
  Cpu,
  Clapperboard,
  Video,
  Smile,
  Coins,
  TrendingUp
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'webdev' | 'brand' | 'creator'>('webdev');

  const filteredServices = SERVICES.filter((s) => s.type === activeTab);

  const scrollToContact = (contactTab: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const tabBtn = document.getElementById(`tab-${contactTab}`);
        if (tabBtn) tabBtn.click();
      }, 500);
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#03000a] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[35%] right-0 w-[450px] h-[450px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-0 w-[450px] h-[450px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        {/* Section Title */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-4 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            SERVICES & DIGITAL SOLUTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-white mb-6"
          >
            Engineering & Growth Solutions,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-neon-cyan">
              Designed For High Conversion.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Choose between full-stack custom web development services for companies, luxury e-commerce engineering, or RS Agency influencer marketing campaigns.
          </motion.p>
        </div>

        {/* 3-Tab Selector Control */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xl w-full">
            <button
              onClick={() => setActiveTab('webdev')}
              className={`flex-1 py-3 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase transition-all rounded-xl cursor-pointer ${
                activeTab === 'webdev'
                  ? 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Web Dev Services
            </button>
            <button
              onClick={() => setActiveTab('brand')}
              className={`flex-1 py-3 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase transition-all rounded-xl cursor-pointer ${
                activeTab === 'brand'
                  ? 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => setActiveTab('creator')}
              className={`flex-1 py-3 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase transition-all rounded-xl cursor-pointer ${
                activeTab === 'creator'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              For Creators
            </button>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[450px]">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const IconComponent = ICON_MAP[service.icon] || Sparkles;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(5px)' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-panel glass-panel-hover rounded-[32px] p-8 text-left flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Glowing Icon */}
                    <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-neon-cyan/40 group-hover:bg-neon-cyan/10 transition-all text-zinc-300 group-hover:text-neon-cyan">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-sans font-bold tracking-tight text-white mb-3 group-hover:text-neon-cyan transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-3 mb-8">
                      {service.listItems.map((listItem, listIdx) => (
                        <li key={listIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => scrollToContact(activeTab === 'webdev' ? 'dev' : activeTab === 'brand' ? 'brand' : 'creator')}
                    className="mt-4 flex items-center justify-between w-full border-t border-white/5 pt-4 text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>{activeTab === 'webdev' ? 'HIRE FOR WEB DEV' : activeTab === 'brand' ? 'START CAMPAIGN' : 'APPLY AS CREATOR'}</span>
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Code,
  Layers,
  ShoppingBag,
  TrendingUp,
  Users,
  CheckCircle2,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { FOUNDER_PROFILE } from '../data/mockData';
import myImage from '../assets/rsagency.jpeg';
import ruxovaImg from '../assets/ruxova.jpg';
import dashboardImg from '../assets/influencer_dashboard.jpg';

export default function HeroSection() {
  const [activePreview, setActivePreview] = useState<'agency' | 'ruxova'>('agency');

  const handleScrollTo = (id: string, contactTab?: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (contactTab) {
        setTimeout(() => {
          const btn = document.getElementById(`tab-${contactTab}`);
          if (btn) btn.click();
        }, 500);
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505]"
    >
      {/* Dynamic Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Cyber Ambient Radial Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] bg-purple-900/20 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-cyan-900/20 blur-[110px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Column - Founder & Agency Headline */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Cyber Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 mb-6 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-mono uppercase tracking-wider">RAHUL KUMAR • FULL STACK DEVELOPER & FOUNDER</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold leading-[1.1] tracking-tight text-white mb-6"
          >
            Building High-Impact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Web Apps, E-Commerce & Influencer Platforms
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
          >
            Hi, I’m <strong className="text-white font-bold">Rahul Kumar</strong>. I design & build modern full-stack web applications, luxury e-commerce experiences like <strong className="text-cyan-400 font-bold">Ruxova Perfumes</strong>, and manage <strong className="text-purple-400 font-bold">RS AGENCY</strong>’s influencer marketing platform for brands & creators.
          </motion.p>

          {/* Tech Pill List */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {['React 19', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Java', 'REST APIs', 'Cloudinary'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3.5 bg-cyan-500 text-black font-extrabold rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-cyan-400 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 text-sm tracking-wide uppercase"
            >
              Explore Featured Projects
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('ruxova-showcase')}
              className="px-6 py-3.5 border border-amber-500/40 bg-amber-500/10 rounded-xl hover:bg-amber-500/20 backdrop-blur-sm transition-all text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              View Ruxova Perfume Site
            </button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6"
          >
            {FOUNDER_PROFILE.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-white">{stat.value}</span>
                <span className="text-[11px] font-mono text-zinc-400 uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Interactive Device Preview Frame */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          {/* Switcher Controls */}
          <div className="mb-4 flex p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md w-full max-w-[360px] z-20">
            <button
              onClick={() => setActivePreview('agency')}
              className={`flex-1 py-2 text-xs font-mono font-bold uppercase rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activePreview === 'agency'
                  ? 'bg-neon-cyan text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              RS AGENCY Platform
            </button>
            <button
              onClick={() => setActivePreview('ruxova')}
              className={`flex-1 py-2 text-xs font-mono font-bold uppercase rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activePreview === 'ruxova'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Ruxova Perfume
            </button>
          </div>

          {/* Device Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[360px] rounded-3xl bg-zinc-950 border-2 border-white/10 p-3 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden group hover:border-white/20 transition-all"
          >
            <div className="w-full rounded-2xl overflow-hidden relative bg-zinc-900 border border-white/5 flex flex-col">
              <AnimatePresence mode="wait">
                {activePreview === 'agency' ? (
                  <motion.div
                    key="agency-preview"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={dashboardImg}
                        alt="RS Agency Influencer Marketing Platform"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-zinc-950/80 border border-neon-cyan/40 text-[10px] font-mono text-neon-cyan backdrop-blur-md">
                        LIVE AGENCY DASHBOARD
                      </div>
                    </div>

                    <div className="p-4 bg-zinc-950/90 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-bold font-sans text-white">RS Agency Influencer Hub</h4>
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Live Production
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        Connecting 100+ verified creators with brands for viral Reels campaigns, UGC videos, and AI-assisted creator curation.
                      </p>

                      <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-zinc-500 block">CREATORS</span>
                          <span className="text-neon-cyan font-bold">100+ Verified</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-zinc-500 block">MONTHLY REACH</span>
                          <span className="text-neon-purple font-bold">5,000,000+</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleScrollTo('projects')}
                        className="mt-2 w-full py-2 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/40 text-xs font-mono text-zinc-300 hover:text-neon-cyan flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Explore Platform Details
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="ruxova-preview"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={ruxovaImg}
                        alt="Ruxova Perfume Website"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-zinc-950/80 border border-amber-500/40 text-[10px] font-mono text-amber-300 backdrop-blur-md">
                        RUXOVA PARFUM LUXURY SITE
                      </div>
                    </div>

                    <div className="p-4 bg-zinc-950/90 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-bold font-sans text-amber-200">Ruxova Perfume E-Commerce</h4>
                        <span className="text-[10px] font-mono text-amber-400">Managed Project</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        Ultra luxury perfume store with interactive scent pyramid, custom notes selector, and seamless online shopping experience.
                      </p>

                      <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <div className="p-2 rounded-lg bg-amber-500/5 border border-amber-500/10">
                          <span className="text-zinc-500 block">CONVERSION</span>
                          <span className="text-amber-400 font-bold">+32% Increase</span>
                        </div>
                        <div className="p-2 rounded-lg bg-amber-500/5 border border-amber-500/10">
                          <span className="text-zinc-500 block">FEATURES</span>
                          <span className="text-amber-300 font-bold">Interactive Scent Quiz</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleScrollTo('ruxova-showcase')}
                        className="mt-2 w-full py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-xs font-mono text-amber-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Try Interactive Fragrance Selector
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

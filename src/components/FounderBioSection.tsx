import { motion } from 'motion/react';
import { ShieldCheck, Award, Target, Zap, Waves, Sparkles, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { FOUNDER_PROFILE } from '../data/mockData';
import myImage from '../assets/rsagency.jpeg';

export default function FounderBioSection() {
  return (
    <section id="about-founder" className="relative py-28 bg-[#03000a] overflow-hidden border-t border-b border-white/5">
      {/* Radial glow background accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Founder Image Card & Contact Pills */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl p-6 relative overflow-hidden border border-white/10 group shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-zinc-900">
                <img
                  src={myImage}
                  alt="Rahul Kumar - Full Stack Developer & Founder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 backdrop-blur-md mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    FOUNDER & FULL STACK DEVELOPER
                  </div>
                  <h3 className="text-2xl font-bold font-sans text-white">Rahul Kumar</h3>
                  <p className="text-xs text-zinc-400 font-mono">RS AGENCY • Aurangabad, Bihar, India</p>
                </div>
              </div>

              {/* Quick Contact Links */}
              <div className="space-y-2.5 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <Mail className="w-4 h-4 text-neon-cyan shrink-0" />
                  <a href={`mailto:${FOUNDER_PROFILE.email}`} className="truncate hover:text-neon-cyan transition-colors">
                    {FOUNDER_PROFILE.email}
                  </a>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-neon-purple shrink-0" />
                    <span>{FOUNDER_PROFILE.phone}</span>
                  </div>
                  <a
                    href="https://wa.me/917091830749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase font-bold text-emerald-400 hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>{FOUNDER_PROFILE.location}</span>
                  </div>
                  <a
                    href={FOUNDER_PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase font-bold text-neon-cyan hover:underline flex items-center gap-1"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Founder Story & Engineering Philosophy */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-3 flex items-center gap-2"
            >
              <Waves className="w-3.5 h-3.5 animate-pulse" />
              FOUNDER & LEAD ENGINEER
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Passionate About <span className="text-neon-cyan">Clean Code</span>,{' '}
              <span className="text-neon-purple">Modern UI/UX</span> & Digital Execution.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4"
            >
              As the founder of <strong className="text-white">RS AGENCY</strong>, I lead full-stack web development projects, client project delivery, and custom digital marketing systems. My background spans both core software development (React, Node.js, Express, MongoDB, Java/Spring) and real-world commercial project execution.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8"
            >
              Whether it’s developing custom luxury e-commerce platforms like <strong className="text-amber-300">Ruxova Perfumes</strong>, building scalable backend APIs with Node/Express, or managing influencer network distribution for brands, I am committed to delivering performant, accessible (WCAG), and search-optimized (SEO) applications.
            </motion.p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <Target className="w-5 h-5 text-neon-cyan mb-2" />
                <h4 className="text-xs font-bold font-sans text-white uppercase mb-1">Full Stack Craftsmanship</h4>
                <p className="text-xs text-zinc-400 leading-normal">Building complete end-to-end solutions from frontend components to database schemas & REST microservices.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-neon-purple mb-2" />
                <h4 className="text-xs font-bold font-sans text-white uppercase mb-1">High Conversion Aesthetics</h4>
                <p className="text-xs text-zinc-400 leading-normal">Applying modern design systems, glassmorphism, fluid micro-interactions, and typography principles.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold font-sans text-white uppercase mb-1">Accessibility & SEO</h4>
                <p className="text-xs text-zinc-400 leading-normal">Enforcing WCAG accessibility standards, version control workflows, clean markup, and search engine optimization.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <Award className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-xs font-bold font-sans text-white uppercase mb-1">Academic Rigor (BCA)</h4>
                <p className="text-xs text-zinc-400 leading-normal">6 Semesters completed with 7.79 CGPA at Aryabhatta Knowledge University, Patna, featuring Grade A in Project & Viva.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Award, Target, Zap, Waves, Sparkles } from 'lucide-react';

function StatCounter({ targetValue, speed = 25, suffix = '' }: { targetValue: number; speed?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = targetValue;
    if (start === end) return;

    // Fast count calculation
    const totalDuration = 1500; // ms
    const increment = end / (totalDuration / speed);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, speed);

    return () => clearInterval(timer);
  }, [isInView, targetValue, speed]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Exclusively Curated Creators', targetValue: 100, suffix: '+', desc: 'Direct contract influencers' },
    { label: 'Socio-Content Monthly Reach', targetValue: 5, suffix: 'M+', desc: 'Combined viewer audience' },
    { label: 'Average Interaction Rate', targetValue: 8.5, suffix: '%', speed: 40, desc: 'Industry leading benchmark' },
    { label: 'Active Campaigns Launched', targetValue: 500, suffix: '+', desc: 'Seamlessly executed deliverables' }
  ];

  const brandLogos = [
    { name: 'Spotify', logo: '🎧 Spotify' },
    { name: 'Nike', logo: '👟 Nike' },
    { name: 'Zara', logo: '👗 Zara' },
    { name: 'Duolingo', logo: '🦉 Duolingo' },
    { name: 'Razer', logo: '🐍 Razer' },
    { name: 'Shopify', logo: '🛍 Shopify' }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 bg-[#03000a] overflow-hidden border-t border-b border-white/5"
    >
      {/* Background glow styling */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Symmetrical Grid for core information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-5 relative">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-3 flex items-center gap-2"
            >
              <Waves className="w-3.5 h-3.5 animate-pulse" />
              THE AGENCY ENGINE
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Bridging the Gap Between{' '}
              <span className="text-neon-purple">Attention</span> and{' '}
              <span className="text-neon-cyan">Conversion</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4"
            >RSAgency is a next-generation influencer marketing engine that connects high-performing content creators with fast-growing brands and startups.
              
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8"
            >
              We replace traditional ad agencies with real creator-driven distribution. Instead of boring ads, we build campaigns designed to go viral, drive engagement, and generate conversions.
Whether you're a brand looking for massive Instagram reach or a creator searching for paid collaborations, we handle everything — strategy, creator matching, content briefs, execution, and contracts.
              
            </motion.p>

            {/* Micro Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <Target className="w-5 h-5 text-neon-cyan mb-2" />
                <h4 className="text-xs font-bold font-sans text-white uppercase mb-1">Laser Targeted</h4>
                <p className="text-[11px] text-zinc-500 leading-tight">We match creators and brands using real audience insights and performance data — not guesswork.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-neon-purple mb-2" />
                <h4 className="text-xs font-bold font-sans text-white uppercase mb-1">Ultra Fast</h4>
                <p className="text-[11px] text-zinc-500 leading-tight">Campaigns are planned, executed, and launched within days — not weeks.</p>
              </div>
            </div>
          </div>

          {/* Symmetrical Right Dashboard for visual stat meters */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 backdrop-blur-md flex flex-col justify-between shadow-2xl overflow-hidden group"
              >
                {/* Visual grid overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neon-purple/5 to-transparent pointer-events-none"></div>

                <div>
                  <div className="mb-4">
                    <StatCounter targetValue={stat.targetValue} suffix={stat.suffix} speed={stat.speed} />
                  </div>
                  <h3 className="text-sm font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 leading-tight mb-2">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 leading-normal border-t border-white/5 pt-3 mt-4">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Brands Carousel Banner Section */}
        <div className="border-t border-white/5 pt-12 relative">
          <p className="text-center text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-8 select-none">
            TRUSTED BY DIGITAL-FIRST BRANDS GLOBALLY
          </p>

          <div className="w-full relative overflow-hidden flex items-center pr-2 py-4">
            {/* Infinite scrolling logo bar placeholder simulation */}
            <div className="flex gap-16 md:gap-24 animate-pulse duration-[3000ms] w-full justify-around flex-wrap">
              {brandLogos.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 text-sm md:text-base font-sans font-bold text-zinc-500 hover:text-zinc-300 transition-colors cursor-default"
                >
                  <Sparkles className="w-3.5 h-3.5 text-neon-cyan/40" />
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

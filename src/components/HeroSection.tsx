import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Instagram, Youtube, Twitch, Play, MessageCircle, ArrowRight, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import myImage from '../assets/rsagency.jpeg';
import shruti from '../assets/shruti.jpeg';

export default function HeroSection() {
  const handleScrollTo = (id: string, isCreatorTab = false) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (isCreatorTab) {
        // Quick hook to switch contact form tab to "Creator" mode
        setTimeout(() => {
          const tabBtn = document.getElementById('tab-creator');
          if (tabBtn) tabBtn.click();
        }, 500);
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#050505]"
    >
      {/* Dynamic Animated Gradient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Cybernetic Ambient Glowing Blobs to match Sleek Interface template spec */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        {/* Left column - Value Proposition */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Cybernetic Badge to match Sleek design theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 mb-6 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>PREMIUM CREATOR PLATFORM NETWORK</span>
          </motion.div>

          {/* Heading with beautiful sleek gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold leading-[1.05] tracking-tight text-white mb-6"
          >
            Connecting Brands With <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 relative">
              Powerful Influencers
            </span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
          >
            High-impact influencer marketing, viral social campaigns, UGC video content, and premium creator partnerships designed to scale your brand to millions.
          </motion.p>

          {/* Call To Actions matching Sleek Interface button designs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              onClick={() => handleScrollTo('contact', false)}
              className="px-8 py-3.5 bg-cyan-500 text-black font-extrabold rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:bg-cyan-400 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
            >
              Start Campaign
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('contact', true)}
              className="px-8 py-3.5 border border-white/20 bg-white/5 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all text-sm font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              Become a Creator
            </button>
          </motion.div>

          {/* Trust Metrics Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/5 pt-8"
          >
            <div className="flex items-center gap-2">
              <span className="text-neon-cyan text-sm font-mono font-bold">●</span>
              <span className="text-xs font-mono uppercase text-zinc-400">100% Client Retention</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-purple text-sm font-mono font-bold">●</span>
              <span className="text-xs font-mono uppercase text-zinc-400">Verified Platform Partners</span>
            </div>
          </motion.div>
        </div>

        {/* Right column - Immersive Cyber Showcase with floating elements */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Floating Media Icons */}
          {/* Instagram */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -top-6 -left-6 z-20 w-12 h-12 rounded-xl bg-pink-600/25 border border-pink-500/40 flex items-center justify-center text-pink-300 backdrop-blur-md shadow-[0_0_15px_rgba(219,39,119,0.3)]"
          >
            <Instagram className="w-6 h-6" />
          </motion.div>

          {/* Twitch */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-6 -left-4 z-20 w-12 h-12 rounded-xl bg-purple-600/25 border border-purple-500/40 flex items-center justify-center text-purple-300 backdrop-blur-md shadow-[0_0_15px_rgba(147,51,234,0.3)]"
          >
            <Twitch className="w-6 h-6" />
          </motion.div>

          {/* YouTube */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-1/2 -right-8 z-20 w-12 h-12 rounded-xl bg-red-600/25 border border-red-500/40 flex items-center justify-center text-red-300 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.3)]"
          >
            <Youtube className="w-6 h-6" />
          </motion.div>

          {/* Main Simulated Mockup Device Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full max-w-[340px] aspect-[9/16] rounded-[40px] bg-zinc-950 border-4 border-zinc-800 p-3 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden group hover:border-zinc-700 transition-colors"
          >
            {/* Screen Reflect Line */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10"></div>

            {/* Simulated Phone Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-zinc-800 rounded-full z-20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-zinc-900 mr-2 border border-zinc-700"></div>
              <div className="w-8 h-1 rounded-full bg-zinc-900"></div>
            </div>

            {/* Screen Content Frame */}
            <div className="w-full h-full bg-zinc-950 rounded-[30px] overflow-hidden relative flex flex-col justify-between pt-8 pb-3 px-3">
              {/* Top Bar Status */}
              <div className="flex justify-between items-center px-2 text-[10px] font-mono text-zinc-500 mb-3 select-none">
                <span>09:41 AM</span>
                <span className="text-neon-cyan animate-pulse">● CAMPAIGN LIVE</span>
              </div>

              {/* Feed Card */}
              <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-3 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
                {/* Creator Header */}
                <div className="flex items-center gap-2">  
                   <img src={myImage} alt="Aria Sterling"  className="w-8 h-8 rounded-full border border-neon-purple"  />
                  <div>
                    <h4 className="text-xs font-bold font-sans text-white">rs.agency.in</h4>
                    <span className="text-[9px] font-mono text-zinc-400">Brands + Creators</span>
                  </div>
                </div>

                {/* Simulated Content Image */}
                <div className="my-3 flex-1 rounded-xl overflow-hidden relative bg-zinc-900 border border-white/5">
                  <img
                    src={shruti}
                    alt="Fashion Feed"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Play Indicator Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Small Brand Tag Overlay */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-zinc-900/80 border border-white/10 text-[8px] font-mono text-neon-cyan select-none">
                    COLLAB 
                  </div>
                </div>

                {/* Simulated Video Stats Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-neon-cyan" /> 850K Reels Views
                    </span>
                    <span className="text-neon-purple font-bold">12.8% ER</span>
                  </div>

                  {/* Loading Bar Graph */}
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan w-4/5 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Verified Badge Stack overlay below phone screen footer */}
              <div className="mt-3 flex items-center justify-center gap-2 p-1.5 bg-white/5 rounded-xl border border-white/5 select-none font-mono">
                <TrendingUp className="w-3 h-3 text-neon-cyan" />
                <span className="text-[10px] uppercase text-zinc-400 tracking-wider">Campaign Velocity 4.2x</span>
              </div>
            </div>
          </motion.div>

          {/* Dynamic Floating Sub-Card for Conversion Rate */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute -right-4 top-12 z-20 glass-panel border border-white/10 rounded-2xl p-4 max-w-[155px] shadow-2xl flex items-start gap-2.5"
          >
            <div className="mt-0.5 w-7 h-7 rounded-lg bg-neon-cyan/15 flex items-center justify-center text-neon-cyan border border-neon-cyan/30">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-500">CONVERSION</p>
              <h3 className="text-lg font-bold font-sans text-neon-cyan leading-tight">+24.5%</h3>
              <p className="text-[9px] text-zinc-400 leading-tight">UGC Ad Campaigns</p>
            </div>
          </motion.div>

          {/* Second Floating Creators Counts Indicator */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -left-12 bottom-12 z-20 glass-panel border border-white/10 rounded-2xl p-4 max-w-[145px] shadow-2xl flex items-start gap-2.5"
          >
            <div className="mt-0.5 w-7 h-7 rounded-lg bg-neon-purple/15 flex items-center justify-center text-neon-purple border border-neon-purple/30">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-500">NETWORK</p>
              <h3 className="text-lg font-bold font-sans text-neon-purple leading-tight">100+</h3>
              <p className="text-[9px] text-zinc-400 leading-tight">Verified Creators</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Symmetrical Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#03000a] to-transparent pointer-events-none"></div>

      {/* Smooth Scroll Pulse Indicator button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={() => handleScrollTo('about')}
          className="flex flex-col items-center gap-1.5 focus:outline-none opacity-50 hover:opacity-100 transition-opacity cursor-pointer group"
          id="hero-scroll-trigger"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-neon-cyan transition-colors">EXPLORE AGENCY</span>
          <div className="w-5 h-8 rounded-full border border-zinc-500 flex justify-center p-1 group-hover:border-neon-cyan transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-neon-cyan"
            />
          </div>
        </button>
      </div>
    </section>
  );
}

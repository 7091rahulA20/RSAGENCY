import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  Send,
  Mail,
  Instagram,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Users,
  Coins,
  ArrowRight
} from 'lucide-react';

export default function ContactForm() {
  const [personType, setPersonType] = useState<'brand' | 'creator'>('brand');
  const [formData, setFormData] = useState({
    name: '',
    companyOrHandle: '',
    email: '',
    budgetOrFollowers: '',
    message: '',
    platform: 'instagram'
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate cybernetic telemetry submission delay
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: '',
        companyOrHandle: '',
        email: '',
        budgetOrFollowers: '',
        message: '',
        platform: 'instagram'
      });
    }, 1800);
  };

  const activeContactLinks = {
    whatsapp: "https://wa.me/919999999999?text=Hi%20RSAgency,%20I'm%20interested%20in%20your%20services!",
    telegram: "https://t.me/rsa_agency",
    instagram: "https://instagram.com/rsa_agency",
    email: "mailto:partners@rsaagency.com"
  };

  return (
    <section id="contact" className="relative py-28 bg-[#03000a] overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Contact Copy and DM Buttons */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-4">
                SECURE COLLABORATION SLOTS
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-white mb-6">
                Ready to Initiate{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan select-none">
                  Your Ascent?
                </span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                Fill out our secure portal forms or message us in real-time through direct social channels. Our Logistics Managers respond in under 2 hours.
              </p>

              {/* Instant Social DM Blocks */}
              <div className="space-y-4 mb-12">
                <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2 select-none">
                  DIRECT CHAT DEPLOYMENTS
                </h4>

                {/* WhatsApp button */}
                <a
                  href="https://wa.me/917808763348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/35 hover:bg-emerald-500/15 text-emerald-300 hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-emerald-400 block font-bold leading-none mb-1">WhatsApp</span>
                      <span className="text-xs text-zinc-400 leading-none">Instant client support portal</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 duration-300" />
                </a>

                {/* Telegram button */}
                <a
                  href="https://t.me/rRSrrrrrrrrdfzdfsdsfAGENCY4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/35 hover:bg-indigo-500/15 text-indigo-300 hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Send className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-indigo-400 block font-bold leading-none mb-1">Telegram Community</span>
                      <span className="text-xs text-zinc-400 leading-none">Creator boards and open castings</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 duration-300" />
                </a>

                {/* Instagram button */}
                <a
                  href="https://instagram.com/rs.agency.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-pink-500/10 border border-pink-500/35 hover:bg-pink-500/15 text-pink-300 hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-pink-400 block font-bold leading-none mb-1">Instagram Direct DM</span>
                      <span className="text-xs text-zinc-400 leading-none">Shoot us a visual case outline</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 duration-300" />
                </a>

                {/* Direct Email Link */}
                <a
                  href={activeContactLinks.email}
                  className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 text-zinc-350 hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-zinc-500 block leading-none mb-1">Corporate Mail</span>
                      <span className="text-xs text-zinc-400 leading-none">rsagencyoffical@gmail.com</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Sliding Contact Form */}
          <div className="lg:col-span-7 w-full overflow-hidden">
            <div className="glass-panel rounded-[36px] p-8 sm:p-10 relative overflow-hidden" id="contact-form-card">
              {/* Outer decorative neon strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan"></div>

              {/* Form Tab Toggles */}
              <div className="flex border-b border-white/5 pb-6 mb-8 gap-4" id="form-tab-triggers">
                <button
                  onClick={() => {
                    setPersonType('brand');
                    setSuccess(false);
                  }}
                  id="tab-brand"
                  className={`flex-1 py-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    personType === 'brand'
                      ? 'bg-neon-cyan text-black font-semibold'
                      : 'text-zinc-500 hover:text-zinc-350 bg-white/5 border border-white/5'
                  }`}
                >
                  GROW SQUAD / BRANDS
                </button>
                <button
                  onClick={() => {
                    setPersonType('creator');
                    setSuccess(false);
                  }}
                  id="tab-creator"
                  className={`flex-1 py-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    personType === 'creator'
                      ? 'bg-neon-purple text-white font-semibold shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                      : 'text-zinc-500 hover:text-zinc-350 bg-white/5 border border-white/5'
                  }`}
                >
                  BECOME A RSA CREATOR
                </button>
              </div>

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <CheckCircle2 className="w-8 h-8 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-white mb-2">Portal Signal Transmitted!</h3>
                    <p className="text-zinc-450 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                      Your interest packet has been verified and registered on our network. A Logistics Agent will message you inside <span className="text-neon-cyan">2 hours</span>.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-450 hover:text-white cursor-pointer"
                    >
                      TRANSMIT ANOTHER SIGNAL
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="active-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="agency-form"
                  >
                    {/* Basic Name field */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                        YOUR CONTACT NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Rachel Sterling"
                        className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-neon-cyan/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-650 focus:outline-none transition-all font-sans"
                      />
                    </div>

                    {/* Dual Switch Field - Corporate Brand vs Social Handle */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                        {personType === 'brand' ? 'BRAND / COMPANY NAME' : 'PRIMARY SOCIAL HANDLE'}
                      </label>
                      <input
                        type="text"
                        name="companyOrHandle"
                        value={formData.companyOrHandle}
                        onChange={handleInputChange}
                        required
                        placeholder={personType === 'brand' ? 'e.g. Acne Studios' : 'e.g. @rachel_vibes'}
                        className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-neon-cyan/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-650 focus:outline-none transition-all font-sans"
                      />
                    </div>

                    {/* Email address */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                        SECURE BUSINESS EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. rachel@brandname.com"
                        className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-neon-cyan/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-650 focus:outline-none transition-all font-sans"
                      />
                    </div>

                    {/* Platform Selector (Creators only) / Budget Sizing (Brands only) */}
                    {personType === 'creator' ? (
                      <div className="grid grid-cols-2 gap-4">
                        {/* Selector platform */}
                        <div className="flex flex-col text-left">
                          <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                            PRIMARY SPACE
                          </label>
                          <div className="relative">
                            <select
                              name="platform"
                              value={formData.platform}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/60 appearance-none font-sans cursor-pointer"
                            >
                              <option value="instagram" className="bg-zinc-950 text-white">Instagram Reels</option>
                              <option value="tiktok" className="bg-zinc-950 text-white">TikTok Short UGC</option>
                              <option value="youtube" className="bg-zinc-950 text-white">YouTube Tech/Life</option>
                              <option value="twitch" className="bg-zinc-950 text-white">Twitch Gaming</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                          </div>
                        </div>

                        {/* Follower counts */}
                        <div className="flex flex-col text-left">
                          <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                            TOTAL FOLLOWERS
                          </label>
                          <div className="relative">
                            <select
                              name="budgetOrFollowers"
                              value={formData.budgetOrFollowers}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-purple/60 appearance-none font-sans cursor-pointer"
                            >
                              <option value="" className="bg-zinc-950 text-zinc-550">Select Range</option>
                              <option value="10k-50k" className="bg-zinc-950 text-white">10K - 50K Micro</option>
                              <option value="50k-250k" className="bg-zinc-950 text-white">50K - 250K Mid</option>
                              <option value="250k-1m" className="bg-zinc-950 text-white">250K - 1M Macro</option>
                              <option value="1m+" className="bg-zinc-950 text-white">1M+ Megastar</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Campaign Budget Selector */
                      <div className="flex flex-col text-left">
                        <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                          ESTIMATED CAMPAIGN BUDGET SIZING
                        </label>
                        <div className="relative">
                          <select
                            name="budgetOrFollowers"
                            value={formData.budgetOrFollowers}
                            required
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan/60 appearance-none font-sans cursor-pointer"
                          >
                            <option value="" className="bg-zinc-950 text-zinc-550">Select Budget Size</option>
                            <option value="1000-5000" className="bg-zinc-950 text-white">$1,000 - $5,000</option>
                            <option value="5000-15000" className="bg-zinc-950 text-white">$5,000 - $15,000 (Recommend)</option>
                            <option value="15000-50000" className="bg-zinc-950 text-white">$15,000 - $50,000 Pro</option>
                            <option value="50000+" className="bg-zinc-950 text-white">$50,000+ Enterprise Blast</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                        </div>
                      </div>
                    )}

                    {/* Brief description message text area */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                        CAMPAIGN DESCRIPTION & GOALS
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder={
                          personType === 'brand'
                            ? "Tell us about your brand value propositions, target timeline, and campaign views targets..."
                            : "Briefly outline your demographic audience niches, past sponsor collabs, and what you aim to achieve..."
                        }
                        className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-neon-cyan/60 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-650 focus:outline-none transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full py-4 rounded-xl text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest text-white flex items-center justify-center gap-3 border transition-all cursor-pointer ${
                        personType === 'brand'
                          ? 'btn-neon-cyan border-neon-cyan/20 text-black font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                          : 'btn-neon-purple border-neon-purple/20 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                      }`}
                    >
                      {submitting ? (
                        <>
                          <div className="w-4.5 h-4.5 rounded-full border-2 border-dashed border-white animate-spin"></div>
                          <span>TRANSMITTING PACKET TELEMETRIES...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-white" />
                          <span>LAUNCH PORTAL DISPATCH</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

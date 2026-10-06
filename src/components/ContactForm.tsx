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
  Code2,
  Phone,
  ArrowRight,
  MapPin,
  Laptop
} from 'lucide-react';
import { FOUNDER_PROFILE } from '../data/mockData';

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<'dev' | 'brand' | 'creator'>('dev');
  const [formData, setFormData] = useState({
    name: '',
    companyOrHandle: '',
    email: '',
    phone: '',
    projectTypeOrBudget: '',
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

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: '',
        companyOrHandle: '',
        email: '',
        phone: '',
        projectTypeOrBudget: '',
        message: '',
        platform: 'instagram'
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#03000a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column - Contact Details & Direct DMs */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-4">
                INQUIRIES & COLLABORATIONS
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-white mb-6">
                Let’s Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-indigo-400 to-neon-cyan">
                  Extraordinary.
                </span>
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                Need a modern full-stack web application, luxury e-commerce store (like <strong className="text-amber-300">Ruxova Perfumes</strong>), or an influencer marketing campaign with <strong className="text-white">RS AGENCY</strong>? Send a message below or connect directly via WhatsApp/Email.
              </p>

              {/* Direct Instant Channels */}
              <div className="space-y-4 mb-12">
                <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                  DIRECT CONTACT CHANNELS
                </h4>

                {/* WhatsApp button */}
                <a
                  href="https://wa.me/917091830749?text=Hi%20Rahul,%20I'm%20interested%20in%20working%20with%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/35 hover:bg-emerald-500/20 text-emerald-300 hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-emerald-400 block font-bold leading-none mb-1">WhatsApp Direct (+91 7091830749)</span>
                      <span className="text-xs text-zinc-400 leading-none">Instant response from Rahul Kumar</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Corporate Email */}
                <a
                  href={`mailto:${FOUNDER_PROFILE.email}?subject=Project%20Inquiry%20-%20Rahul%20Kumar`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/35 hover:bg-cyan-500/20 text-cyan-300 hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-neon-cyan block font-bold leading-none mb-1">Email Inquiry</span>
                      <span className="text-xs text-zinc-400 leading-none">{FOUNDER_PROFILE.email}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Instagram Direct */}
                <a
                  href="https://instagram.com/rs.agency.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-pink-500/10 border border-pink-500/35 hover:bg-pink-500/20 text-pink-300 hover:text-white transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono uppercase text-pink-400 block font-bold leading-none mb-1">Instagram (@rs.agency.in)</span>
                      <span className="text-xs text-zinc-400 leading-none">Social media case studies & updates</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - 3-Tab Interactive Contact Form */}
          <div className="lg:col-span-7 w-full overflow-hidden">
            <div className="glass-panel rounded-[36px] p-6 sm:p-10 relative overflow-hidden border border-white/10" id="contact-form-card">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan"></div>

              {/* Form Tab Toggles */}
              <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-6 mb-8" id="form-tab-triggers">
                <button
                  type="button"
                  onClick={() => {
                    setInquiryType('dev');
                    setSuccess(false);
                  }}
                  id="tab-dev"
                  className={`py-3 text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    inquiryType === 'dev'
                      ? 'bg-neon-cyan text-black font-extrabold shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                      : 'text-zinc-400 hover:text-white bg-white/5 border border-white/5'
                  }`}
                >
                  Hire Developer
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInquiryType('brand');
                    setSuccess(false);
                  }}
                  id="tab-brand"
                  className={`py-3 text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    inquiryType === 'brand'
                      ? 'bg-gradient-to-r from-neon-purple to-indigo-600 text-white font-extrabold shadow-lg'
                      : 'text-zinc-400 hover:text-white bg-white/5 border border-white/5'
                  }`}
                >
                  Brand Campaign
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInquiryType('creator');
                    setSuccess(false);
                  }}
                  id="tab-creator"
                  className={`py-3 text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    inquiryType === 'creator'
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white font-extrabold shadow-lg'
                      : 'text-zinc-400 hover:text-white bg-white/5 border border-white/5'
                  }`}
                >
                  Join Creator
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
                    <h3 className="text-2xl font-sans font-bold text-white mb-2">Inquiry Received!</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                      Thank you for reaching out to <strong className="text-white">Rahul Kumar / RS AGENCY</strong>. Your request has been logged and we will respond within 2-4 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="active-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    id="agency-form"
                  >
                    {/* Name */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1.5 font-bold">
                        YOUR FULL NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Vikram Mehta / Sarah Jenkins"
                        className="w-full bg-white/5 border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all font-sans"
                      />
                    </div>

                    {/* Dual Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col text-left">
                        <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1.5 font-bold">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. client@company.com"
                          className="w-full bg-white/5 border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all font-sans"
                        />
                      </div>

                      <div className="flex flex-col text-left">
                        <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1.5 font-bold">
                          PHONE / WHATSAPP NUMBER
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          className="w-full bg-white/5 border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Project Type or Handle */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1.5 font-bold">
                        {inquiryType === 'dev'
                          ? 'PROJECT TYPE / APP SCOPE'
                          : inquiryType === 'brand'
                          ? 'BRAND / COMPANY NAME'
                          : 'SOCIAL MEDIA HANDLE'}
                      </label>
                      <input
                        type="text"
                        name="companyOrHandle"
                        value={formData.companyOrHandle}
                        onChange={handleInputChange}
                        required
                        placeholder={
                          inquiryType === 'dev'
                            ? 'e.g. Luxury Perfume E-Commerce / Custom Web App / Admin Dashboard'
                            : inquiryType === 'brand'
                            ? 'e.g. RiseTech Corp / Acme Brand'
                            : 'e.g. @your_social_handle'
                        }
                        className="w-full bg-white/5 border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all font-sans"
                      />
                    </div>

                    {/* Dynamic Select Selector */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1.5 font-bold">
                        {inquiryType === 'dev'
                          ? 'ESTIMATED TIMELINE / BUDGET'
                          : inquiryType === 'brand'
                          ? 'CAMPAIGN BUDGET SIZING'
                          : 'FOLLOWER TIER'}
                      </label>
                      <div className="relative">
                        <select
                          name="projectTypeOrBudget"
                          value={formData.projectTypeOrBudget}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan appearance-none font-sans cursor-pointer"
                        >
                          <option value="" className="bg-zinc-950 text-zinc-500">Select Option</option>
                          {inquiryType === 'dev' ? (
                            <>
                              <option value="web-app" className="bg-zinc-950 text-white">Full Stack React/Node Web App</option>
                              <option value="ecommerce" className="bg-zinc-950 text-white">Luxury E-Commerce (Like Ruxova Perfumes)</option>
                              <option value="admin-dashboard" className="bg-zinc-950 text-white">Admin Dashboard & REST APIs</option>
                              <option value="ui-ux" className="bg-zinc-950 text-white">UI/UX Redesign & Web Accessibility</option>
                            </>
                          ) : inquiryType === 'brand' ? (
                            <>
                              <option value="1k-5k" className="bg-zinc-950 text-white">$1,000 - $5,000 Starter</option>
                              <option value="5k-15k" className="bg-zinc-950 text-white">$5,000 - $15,000 Standard</option>
                              <option value="15k-50k" className="bg-zinc-950 text-white">$15,000 - $50,000 Pro Scale</option>
                            </>
                          ) : (
                            <>
                              <option value="10k-50k" className="bg-zinc-950 text-white">10K - 50K Micro</option>
                              <option value="50k-250k" className="bg-zinc-950 text-white">50K - 250K Mid Tier</option>
                              <option value="250k-1m" className="bg-zinc-950 text-white">250K - 1M Macro</option>
                              <option value="1m+" className="bg-zinc-950 text-white">1M+ Megastar</option>
                            </>
                          )}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-1.5 font-bold">
                        PROJECT DETAILS & GOALS
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder={
                          inquiryType === 'dev'
                            ? 'Describe your project requirements, features needed, desired deadline, and any reference sites...'
                            : inquiryType === 'brand'
                            ? 'Outline target goals, product highlights, preferred platforms, and campaign timelines...'
                            : 'Tell us about your social channels, audience metrics, and brand collaboration preferences...'
                        }
                        className="w-full bg-white/5 border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full py-4 rounded-xl text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest text-black flex items-center justify-center gap-3 border transition-all cursor-pointer ${
                        inquiryType === 'dev'
                          ? 'bg-neon-cyan border-neon-cyan/40 hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                          : 'bg-gradient-to-r from-neon-purple to-indigo-600 border-neon-purple/40 text-white shadow-lg'
                      }`}
                    >
                      {submitting ? (
                        <>
                          <div className="w-4.5 h-4.5 rounded-full border-2 border-dashed border-current animate-spin"></div>
                          <span>SENDING INQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>SEND INQUIRY TO RAHUL KUMAR</span>
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

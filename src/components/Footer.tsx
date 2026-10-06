import { Sparkles, Instagram, Send, MessageCircle, Mail, Heart, Github, Code, ExternalLink } from 'lucide-react';
import { FOUNDER_PROFILE } from '../data/mockData';
import myImage from '../assets/rsagency.jpeg';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-[#020008] border-t border-white/5 pt-20 pb-12 overflow-hidden" id="footer">
      {/* Decorative ambient bottom cyan glowing block */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-neon-cyan/5 blur-[50px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">

          {/* Founder & Agency Brand Info */}
          <div className="md:col-span-5 text-left">
            <button
              onClick={() => handleScrollTo('home')}
              className="flex items-center gap-3 text-xl font-bold font-sans tracking-widest text-white hover:opacity-90 group mb-4 cursor-pointer text-left"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan p-[1px] shrink-0">
                <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={myImage}
                    alt="Rahul Kumar - RS AGENCY"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <span>
                RAHUL KUMAR <span className="text-neon-cyan font-mono text-sm block font-normal">RS AGENCY</span>
              </span>
            </button>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Full Stack Web Development & Digital Agency solutions led by Rahul Kumar. Specializing in high-performance React/Node web apps, luxury e-commerce platforms like <strong className="text-amber-300">Ruxova Perfumes</strong>, and influencer marketing systems.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/917091830749"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 text-zinc-400 hover:text-emerald-400 flex items-center justify-center transition-all cursor-pointer shadow-md"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={FOUNDER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-zinc-400 hover:text-neon-cyan flex items-center justify-center transition-all cursor-pointer shadow-md"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/rs.agency.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/40 text-zinc-400 hover:text-pink-400 flex items-center justify-center transition-all cursor-pointer shadow-md"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${FOUNDER_PROFILE.email}`}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 text-zinc-400 hover:text-neon-purple flex items-center justify-center transition-all cursor-pointer shadow-md"
                title="Email Inquiry"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-span-2 md:col-span-2 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              PORTFOLIO SECTIONS
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Founder', id: 'about-founder' },
                { label: 'Projects', id: 'projects' },
                { label: 'Ruxova Perfumes', id: 'ruxova-showcase' },
                { label: 'Tech Stack', id: 'skills' },
                { label: 'Education (BCA)', id: 'education' },
                { label: 'Services', id: 'services' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="text-xs text-zinc-400 hover:text-neon-cyan transition-all text-left block cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div className="col-span-3 md:col-span-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              FEATURED CASE STUDIES
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'RS Agency Influencer Hub', id: 'projects' },
                { label: 'Ruxova Perfumes Luxury Store', id: 'ruxova-showcase' },
                { label: 'Creator Directory Hub', id: 'projects' },
                { label: 'Admin Analytics Dashboard', id: 'projects' },
                { label: 'Full Stack React & Node Apps', id: 'skills' }
              ].map((caseItem, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(caseItem.id)}
                    className="text-xs text-zinc-400 hover:text-neon-cyan transition-all text-left block cursor-pointer"
                  >
                    {caseItem.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="col-span-2 md:col-span-2 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6">
              DIRECT REACH
            </h4>
            <div className="space-y-3 text-xs text-zinc-400 font-mono">
              <p className="text-zinc-200 font-bold">Rahul Kumar</p>
              <p>Founder & Full Stack Developer</p>
              <p className="text-neon-cyan">{FOUNDER_PROFILE.phone}</p>
              <p className="break-all">{FOUNDER_PROFILE.email}</p>
              <p className="text-zinc-500">{FOUNDER_PROFILE.location}</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 mt-8 text-[11px] font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Rahul Kumar • RS AGENCY. All rights reserved.</p>
          <p className="flex items-center gap-1.5 mt-4 sm:mt-0">
            <span>Designed & Built with</span>
            <Heart className="w-3.5 h-3.5 text-neon-pink fill-neon-pink" />
            <span>by Rahul Kumar (React 19 & Tailwind CSS)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

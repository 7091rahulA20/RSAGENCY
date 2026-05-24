import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import myImage from '../assets/rsagency.jpeg';

interface NavItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', targetId: 'home' },
  { label: 'About', targetId: 'about' },
  { label: 'Services', targetId: 'services' },
  // { label: 'Creators', targetId: 'creators' },
  // { label: 'Process', targetId: 'process' },
  // { label: 'Testimonials', targetId: 'testimonials' },
  { label: 'Contact', targetId: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.targetId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);

    const el = document.getElementById(targetId);

    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/70 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

{/* LOGO */}
<button
  onClick={() => handleNavClick('home')}
  className="flex items-center gap-3 group cursor-pointer"
>
  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan p-[1px]">

    <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center overflow-hidden relative z-10">
      <img
        src={myImage}
        alt="logo"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div className="absolute -inset-1 rounded-full bg-neon-cyan/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  </div>

  <span className="text-white text-xl font-bold tracking-widest">
    RS
    <span className="text-neon-cyan group-hover:text-neon-purple transition-colors duration-300">
      AGENCY
    </span>
  </span>
</button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.targetId}
              onClick={() => handleNavClick(item.targetId)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === item.targetId
                  ? 'text-neon-cyan'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeSection === item.targetId && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">

          {/* START CAMPAIGN */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 text-sm font-semibold rounded-full border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            Start Campaign
          </button>

          {/* BECOME CREATOR */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-neon-purple to-indigo-600 text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-purple/20"
          >
            Become Creator
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-neon-cyan" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">

              {/* MOBILE NAV ITEMS */}
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.targetId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(item.targetId)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.targetId
                      ? 'bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan'
                      : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* MOBILE ACTION BUTTONS */}
              <div className="pt-4 flex flex-col gap-3">

                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-purple to-indigo-600 text-white font-semibold shadow-lg shadow-neon-purple/20"
                >
                  Start Campaign
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-white transition-all duration-300"
                >
                  Become a Creator
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

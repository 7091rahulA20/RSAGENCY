import { motion } from 'motion/react';
import { MessageCircle, Send, ArrowUp, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end" id="floating-social-dock">
      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={scrollToTop}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-zinc-400 hover:text-white backdrop-blur-md shadow-lg transition-all hover:bg-zinc-900 cursor-pointer"
          title="Scroll to Top"
          id="scroll-to-top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}

     {/* Instagram Button */}
<motion.a
  href="https://instagram.com/rs.agency.in"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-13 w-13 items-center justify-center rounded-full bg-pink-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-all cursor-pointer relative group"
  whileHover={{ scale: 1.1, y: -2 }}
  whileTap={{ scale: 0.95 }}
  id="floating-instagram"
>
  <span className="absolute right-15 scale-0 group-hover:scale-100 transition-all origin-right bg-pink-950/90 text-pink-200 border border-pink-500/30 px-3 py-1 rounded-md text-xs font-mono whitespace-nowrap backdrop-blur-md">
    Chat on Instagram
  </span>

  <Instagram className="h-6 w-6" />
</motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917808763348"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all cursor-pointer relative group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        id="floating-whatsapp"
      >
        <span className="absolute right-15 scale-0 group-hover:scale-100 transition-all origin-right bg-emerald-950/90 text-emerald-200 border border-emerald-500/30 px-3 py-1 rounded-md text-xs font-mono whitespace-nowrap backdrop-blur-md">
          Chat on WhatsApp
        </span>
        <MessageCircle className="h-6 w-6 fill-current" />
      </motion.a>
    </div>
  );
}

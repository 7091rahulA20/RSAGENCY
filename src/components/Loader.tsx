import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing agent resources...');

  useEffect(() => {
    const statuses = [
      'Initializing RSAgency mainframe...',
      'Connecting to verified creator network...',
      'Curating lifestyle and gaming portfolios...',
      'Syncing visual media metrics...',
      'Optimizing campaign prediction models...',
      'Locking cyber-neon layout aesthetics...',
      'Ready!'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }

        // Stepped increments to feel realistic
        const increment = Math.floor(Math.random() * 8) + 5;
        const next = Math.min(prev + increment, 100);

        // Update status text based on progress brackets
        const statusIdx = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[statusIdx]);

        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        id="loading-screen"
      >
        {/* Background glowing ambient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/20 blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-cyan/15 blur-[120px] pointer-events-none animate-pulse-slow"></div>

        <div className="relative flex flex-col items-center text-center p-6 max-w-md w-full">
          {/* Logo Symbol */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
          >
            {/* Spinning cyber border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-neon-cyan/40 animate-spin [animation-duration:15s]"></div>
            <Sparkles className="w-10 h-10 text-neon-cyan animate-pulse" />
          </motion.div>

          {/* Agency Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-sans font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-2"
          >
            RS<span className="text-neon-cyan">AGENCY</span>
          </motion.h1>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 0.5 }}
            transition={{ delay: 0.3 }}
            className="text-xs tracking-widest font-mono uppercase text-zinc-500 mb-8"
          >
            Creator Management & Viral Marketing
          </motion.p>

          {/* Loading status bar */}
          <div className="w-full h-[3px] bg-zinc-900/80 rounded-full overflow-hidden mb-4 border border-white/5 relative shadow-inner">
            <motion.div
              layout
              className="h-full bg-gradient-to-r from-neon-purple via-indigo-500 to-neon-cyan relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#06b6d4]"></div>
            </motion.div>
          </div>

          {/* Stats count and action logs */}
          <div className="flex justify-between w-full font-mono text-xs mb-3 text-zinc-500">
            <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}>
              {statusText}
            </motion.span>
            <span className="text-neon-cyan font-bold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

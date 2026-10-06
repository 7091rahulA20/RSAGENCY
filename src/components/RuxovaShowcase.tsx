import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShoppingBag, Check, Star, Shield, ArrowRight, Heart, Award, RefreshCw } from 'lucide-react';
import ruxovaImg from '../assets/ruxova.jpg';

export default function RuxovaShowcase() {
  const [selectedNote, setSelectedNote] = useState<'top' | 'heart' | 'base'>('heart');
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml' | '200ml'>('100ml');
  const [addedToCart, setAddedToCart] = useState(false);

  const fragranceNotes = {
    top: {
      title: 'Top Notes (Initial Impact)',
      description: 'The first impression that lingers for 15-30 minutes after application.',
      ingredients: ['Italian Bergamot', 'Pink Pepper Sparks', 'Crushed Sicilian Lemon', 'French Lavender']
    },
    heart: {
      title: 'Heart Notes (The Essence)',
      description: 'The core identity of Ruxova Parfum that unfolds over 3 to 6 hours.',
      ingredients: ['Midnight Blooming Jasmine', 'Smoked Madagascar Vanilla', 'Cashmere Wood', 'Bulgarian Rose']
    },
    base: {
      title: 'Base Notes (The Memory)',
      description: 'The deep, sensual foundation that anchors the fragrance for 12+ hours.',
      ingredients: ['Rare Golden Ambergris', 'Royal Sandalwood', 'White Musk Accord', 'Oud Wood']
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <section id="ruxova-showcase" className="relative py-28 bg-[#040208] border-t border-b border-amber-500/20 overflow-hidden">
      {/* Luxurious Amber & Gold Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-yellow-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-300 mb-4 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>FEATURED CLIENT E-COMMERCE SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight text-white mb-6"
          >
            Ruxova Parfum —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
              Luxury Fragrance Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Engineered by <strong className="text-amber-300">Rahul Kumar</strong>. Below is an interactive demonstration of the luxury e-commerce product engine built for Ruxova Perfumes, complete with interactive scent profiling, bottle selection, and seamless UI animations.
          </motion.p>
        </div>

        {/* Interactive Luxury Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center glass-panel rounded-[36px] border border-amber-500/30 p-6 sm:p-10 bg-zinc-950/80 shadow-2xl relative overflow-hidden">
          {/* Subtle gold grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

          {/* Left Column - High Res Product Image & Interactive Rating */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)] bg-zinc-900 group">
              <img
                src={ruxovaImg}
                alt="Ruxova Parfum Luxury Bottle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>

              {/* Luxury Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-zinc-950/90 border border-amber-500/50 text-[11px] font-mono font-bold text-amber-300 backdrop-blur-md">
                EAU DE PARFUM • LONDON / PARIS
              </div>

              {/* Conversion Metric Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-zinc-950/90 border border-amber-500/30 backdrop-blur-md text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-zinc-300">Client Result:</span>
                </div>
                <span className="text-amber-300 font-bold">+32% Online Sales Conversion</span>
              </div>
            </div>

            {/* Social Proof Star Rating */}
            <div className="mt-6 flex items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.95 / 5.0 (2,400+ Verified Luxury Reviews)</span>
            </div>
          </div>

          {/* Right Column - Interactive Fragrance Engine */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">RUXOVA PRIVATE BLEND</span>
                <h3 className="text-3xl font-bold font-sans text-white">Ruxova Royal Oud & Amber</h3>
              </div>
              <div className="text-right font-mono">
                <span className="text-2xl font-extrabold text-amber-300 block">
                  {selectedSize === '50ml' ? '$185' : selectedSize === '100ml' ? '$280' : '$450'}
                </span>
                <span className="text-[10px] text-zinc-500">Free Worldwide Shipping</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              A masterclass in artisanal perfumery. Hand-poured with rare Madagascar vanilla, wild jasmine, and 25-year aged golden amber.
            </p>

            {/* Interactive Scent Pyramid Selector Tabs */}
            <div className="mb-6">
              <label className="text-xs font-mono uppercase text-zinc-400 block mb-2 font-bold">
                INTERACTIVE FRAGRANCE PYRAMID
              </label>

              <div className="grid grid-cols-3 gap-2 p-1 bg-white/5 border border-white/10 rounded-xl mb-4">
                {(['top', 'heart', 'base'] as const).map((noteKey) => (
                  <button
                    key={noteKey}
                    onClick={() => setSelectedNote(noteKey)}
                    className={`py-2 text-xs font-mono font-bold uppercase rounded-lg transition-all cursor-pointer ${
                      selectedNote === noteKey
                        ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {noteKey} Notes
                  </button>
                ))}
              </div>

              {/* Fragrance Ingredients Display Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedNote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs"
                >
                  <h4 className="font-sans font-bold text-amber-300 mb-1">
                    {fragranceNotes[selectedNote].title}
                  </h4>
                  <p className="text-zinc-400 mb-3 text-[11px]">
                    {fragranceNotes[selectedNote].description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {fragranceNotes[selectedNote].ingredients.map((ing, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-900 border border-amber-500/30 text-amber-200 text-[11px] font-mono">
                        ✨ {ing}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottle Volume Selector */}
            <div className="mb-6">
              <label className="text-xs font-mono uppercase text-zinc-400 block mb-2 font-bold">
                SELECT BOTTLE SIZE
              </label>

              <div className="grid grid-cols-3 gap-3">
                {(['50ml', '100ml', '200ml'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'border-amber-400 bg-amber-500/10 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)] font-bold'
                        : 'border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="block text-xs font-mono">{size}</span>
                    <span className="block text-[10px] text-zinc-500">
                      {size === '50ml' ? 'Travel Size' : size === '100ml' ? 'Most Popular' : 'Collector Edition'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Add to Cart CTA */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-extrabold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4 text-black stroke-[3]" />
                    Added To Luxury Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Simulate Add to Cart ({selectedSize})
                  </>
                )}
              </button>
            </div>

            <p className="mt-4 text-[10px] font-mono text-zinc-500 text-center">
              Demonstrating custom e-commerce UI architecture created by Rahul Kumar for client presentation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

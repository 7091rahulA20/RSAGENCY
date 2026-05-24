import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, Play, Sparkles, Share2 } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/mockData';

export default function InstagramFeed() {
  return (
    <section className="relative py-28 bg-[#03000a] overflow-hidden border-t border-b border-white/5" id="social-feed">
      {/* Visual background lights */}
      <div className="absolute top-[40%] right-[-10%] w-96 h-96 rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title and stats bar */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-16">
          <div className="text-left max-w-xl">
            <p className="text-xs font-mono tracking-widest text-neon-cyan uppercase mb-4">
              CULTURAL IMPACT FEEDS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-white mb-6">
              Reels & Captures{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan select-none">
                In The Wild.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Take a closer look at active integrations. This is how our creators naturally blend high-converting messaging inside standard social platforms.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md select-none">
            <Instagram className="w-5 h-5 text-pink-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">@rsa_agency Live Feeds</span>
          </div>
        </div>

        {/* 3 Grid post frames mimicking real UI elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="instagram-posts-holder">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel rounded-[32px] p-5 hover:border-neon-cyan/30 group transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div>
                {/* Header profile elements */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.influencerAvatar}
                      alt={post.influencerName}
                      className="w-10 h-10 rounded-full object-cover border border-white/10 group-hover:border-neon-cyan/40 transition-all"
                    />
                    <div className="text-left">
                      <h4 className="text-sm font-sans font-bold text-white group-hover:text-neon-cyan transition-colors">
                        {post.influencerHandle}
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Standard options trigger */}
                  <span className="text-zinc-600 group-hover:text-neon-cyan transition-colors select-none">● ● ●</span>
                </div>

                {/* Media representation frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 mb-4 group/media">
                  <img
                    src={post.mediaUrl}
                    alt="Campaign content preview"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Play video overlay badge */}
                  {post.mediaType === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-xl">
                        <Play className="w-4.5 h-4.5 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Likes Comments count overlay on hover */}
                  <div className="absolute inset-0 bg-[#03000a]/75 backdrop-blur-sm opacity-0 group-hover/media:opacity-100 flex flex-col justify-center items-center gap-4 transition-all duration-300">
                    <div className="flex gap-6">
                      <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-white">
                        <Heart className="w-5 h-5 text-neon-pink fill-neon-pink" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-white">
                        <MessageCircle className="w-5 h-5 text-neon-cyan fill-neon-cyan" />
                        <span>{post.comments}</span>
                      </div>
                    </div>

                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Share2 className="w-3 h-3 text-neon-cyan" />
                      Shares Velocity High
                    </span>
                  </div>
                </div>

                {/* Caption Block detailing message */}
                <p className="text-zinc-300 text-xs text-left leading-relaxed mb-4 font-sans line-clamp-2">
                  <span className="font-bold text-white mr-1.5">{post.influencerHandle}</span>
                  {post.caption}
                </p>
              </div>

              {/* Symmetrical Action Footer representing metrics */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">
                  Organic Engagement
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-neon-cyan">
                  <Sparkles className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
                  VIRAL VELOCITY
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Sparkles, Instagram, Send, MessageCircle, Mail, Heart } from 'lucide-react';
import myImage from '../assets/rsagency.jpeg';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-[#020008] border-t border-white/5 pt-20 pb-12 overflow-hidden" id="footer">
      {/* Decorative ambient subtle bottom cyan glowing block */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-neon-cyan/5 blur-[50px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          {/* Logo description Column */}
          <div className="md:col-span-4 text-left">
<button
  onClick={() => handleScrollTo('home')}
  className="flex items-center gap-2 text-xl font-bold font-sans tracking-widest text-white hover:opacity-90 group mb-6 cursor-pointer"
>
  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan p-[1px]">

    <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center overflow-hidden">
      {/* <Sparkles className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform duration-300" /> */}
       <img
        src={myImage}
        alt="logo"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div className="absolute -inset-1 rounded-full bg-neon-cyan/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  </div>

  <span>
    RS
    <span className="text-neon-cyan group-hover:text-neon-purple transition-colors duration-300">
      AGENCY
    </span>
  </span>
</button>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-sm">
              Connecting world-class brands with verified high-impact influencers for seamless, coordinated viral marketing campaigns. We make social media convert.
            </p>

            {/* Symmetrical Social icons array */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/rs.agency.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 text-zinc-400 hover:text-pink-400 flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/rsa_agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 text-zinc-400 hover:text-indigo-400 flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917808763348"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 text-zinc-400 hover:text-emerald-400 flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:rsagencyofficial@gmail.com?subject=Collaboration%20Inquiry"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 text-zinc-400 hover:text-neon-cyan flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links Column */}
          <div className="col-span-2 md:col-span-2 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6 select-none">
              QUICK SECTIONS
            </h4>
            <ul className="space-y-3.5">
              {['Home', 'About', 'Services'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScrollTo(section.toLowerCase())}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-neon-cyan hover:pl-1.5 transition-all text-left block cursor-pointer"
                  >
                    {section === 'Creators' ? 'Our Creators' : section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand offerings Column */}
          <div className="col-span-3 md:col-span-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6 select-none">
              BRAND SERVICES
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: 'Reels Promotion', id: 'reels-promotion' },
                { label: 'Story Promotion', id: 'story-promotion' },
                { label: 'UGC Content Creation', id: 'ugc-videos' },
                { label: 'Meme Marketing Grid', id: 'meme-marketing' },
                { label: 'App Install Blasts', id: 'app-promotion' }
              ].map((serv) => (
                <li key={serv.id}>
                  <button
                    onClick={() => handleScrollTo('services')}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-neon-cyan transition-all text-left block cursor-pointer"
                  >
                    {serv.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Symmetrical Creator offerings column */}
          <div className="col-span-3 md:col-span-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6 select-none">
              CREATOR HUB
            </h4>
            <ul className="space-y-3.5">
              {[
                'Premium Sponsorships',
                'Earn High Payouts',
                'Personal Management Kit',
                'Apply for Casting Audits',
                'Secure Contract Escrows'
              ].map((hubLink) => (
                <li key={hubLink}>
                  <button
                    onClick={() => {
                      handleScrollTo('contact');
                      setTimeout(() => {
                        const btn = document.getElementById('tab-creator');
                        if (btn) btn.click();
                      }, 400);
                    }}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-neon-cyan transition-all text-left block cursor-pointer"
                  >
                    {hubLink}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* copyright and system specs strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 mt-8 text-[11px] font-mono text-zinc-650 select-none">
          <p>© {new Date().getFullYear()} RSAgency Group. All cyber rights protected.</p>
          <p className="flex items-center gap-1.5 mt-4 sm:mt-0">
            <span>Powered with</span>
            <Heart className="w-3.5 h-3.5 text-neon-pink fill-neon-pink" />
            <span>by RSAgency Core Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

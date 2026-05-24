import { useState } from 'react';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

import InstagramFeed from './components/InstagramFeed';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-[#050505] text-zinc-100 select-none overflow-x-hidden relative font-sans antialiased selection:bg-neon-cyan/30 selection:text-white">
          {/* Mouse tracking spotlight effect */}
          <CursorGlow />

          {/* Symmetrical Header Sticky Navigation */}
          <Navbar />

          <main>
            {/* 1. Hero Stage - Visual Center */}
            <HeroSection />

            {/* 2. Core agency value metrics */}
            <AboutSection />

            {/* 3. Sliding Tab Services offerings */}
            <ServicesSection />

            {/* 4. Modular Bento-Feature list highlights */}
          
            

           
            

            
            

            {/* 8. Instagram interactive post grid */}
            

            {/* 9. Segmented Brand/Creator budget intake form */}
            <ContactForm />
          </main>

          {/* 10. Social footer and copyrights */}
          <Footer />

          {/* Floating instant contact anchors (WhatsApp, Telegram) */}
          <FloatingButtons />
        </div>
      )}
    </>
  );
}

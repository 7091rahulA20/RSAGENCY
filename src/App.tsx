import { useState } from 'react';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FounderBioSection from './components/FounderBioSection';
import ProjectsSection from './components/ProjectsSection';
import RuxovaShowcase from './components/RuxovaShowcase';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ServicesSection from './components/ServicesSection';
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

          {/* Sticky Navigation */}
          <Navbar />

          <main>
            {/* 1. Hero Stage - Dual Identity Showcase */}
            <HeroSection />

            {/* 2. Founder Story & Philosophy */}
            <FounderBioSection />

            {/* 3. Featured Engineering Case Studies (RS Agency Platform, Ruxova Perfumes, etc.) */}
            <ProjectsSection />

            {/* 4. Special Interactive Ruxova Perfumes Luxury E-Commerce Simulator */}
            <RuxovaShowcase />

            {/* 5. Full Stack Developer Tech Capabilities */}
            <SkillsSection />

            {/* 6. Academic Qualifications & BCA Semesters Record */}
            <EducationSection />

            {/* 7. Web Dev & Agency Services */}
            <ServicesSection />

            {/* 8. 3-Tab Contact Intake Form */}
            <ContactForm />
          </main>

          {/* Footer & Copyright */}
          <Footer />

          {/* Floating instant contact anchors */}
          <FloatingButtons />
        </div>
      )}
    </>
  );
}

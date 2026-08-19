import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutSection } from './components/AboutSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ProgramExplorer } from './components/ProgramExplorer';
import { TuitionCalculator } from './components/TuitionCalculator';
import { ScholarshipHub } from './components/ScholarshipHub';
import { AlumniSection } from './components/AlumniSection';
import { LookbookGallery } from './components/LookbookGallery';
import { GallerySection } from './components/GallerySection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionsWizard } from './components/AdmissionsWizard';
import { TourBookingModal } from './components/TourBookingModal';
import { PortalModal } from './components/PortalModal';
import { MessageSquare, ArrowUp } from 'lucide-react';

export function App() {
  const [currency, setCurrency] = useState('GHS');

  // Modal States
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [admissionProgramId, setAdmissionProgramId] = useState('foundational-couture');
  const [admissionSchedule, setAdmissionSchedule] = useState('regular');
  const [admissionScholarship, setAdmissionScholarship] = useState(false);

  const handleOpenAdmissions = (programId = 'foundational-couture', schedule = 'regular', scholarship = false) => {
    setAdmissionProgramId(programId);
    setAdmissionSchedule(schedule);
    setAdmissionScholarship(scholarship);
    setIsAdmissionsOpen(true);
  };

  const handleApplyWithEstimate = (estimateData) => {
    setAdmissionProgramId(estimateData.programId || 'foundational-couture');
    setAdmissionSchedule(estimateData.scheduleType || 'regular');
    setAdmissionScholarship(estimateData.scholarshipDiscount !== 'none');
    setIsAdmissionsOpen(true);
  };

  const handleApplyForScholarship = () => {
    setAdmissionProgramId('foundational-couture');
    setAdmissionSchedule('regular');
    setAdmissionScholarship(true);
    setIsAdmissionsOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-alabaster-100 font-sans selection:bg-gold-500 selection:text-obsidian-950 flex flex-col relative overflow-x-hidden">
      
      {/* 1. Permanent Static/Fixed Navigation accessible everywhere */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenAdmissions={() => handleOpenAdmissions()}
        onOpenTourModal={() => setIsTourModalOpen(true)}
        onOpenPortalModal={() => setIsPortalModalOpen(true)}
      />

      {/* Main Content Flow with top padding to account for fixed navbar */}
      <main className="flex-grow pt-[84px] sm:pt-[90px]">
        {/* Cinematic Hero */}
        <Hero
          onOpenAdmissions={() => handleOpenAdmissions()}
          onOpenTourModal={() => setIsTourModalOpen(true)}
          onSelectProgram={(id) => handleOpenAdmissions(id)}
        />

        {/* Running Luxury Ticker */}
        <MarqueeTicker />

        {/* 2. Complete About Us Sections: Our Story, Mission & Vision, Faculty & Management, Facilities & Hostel */}
        <AboutSection 
          onOpenAdmissions={() => handleOpenAdmissions()}
          onOpenTourModal={() => setIsTourModalOpen(true)}
        />

        {/* 3. Dedicated Admissions & Guidance Section (#admissions) */}
        <AdmissionsSection 
          currency={currency}
          onOpenAdmissions={() => handleOpenAdmissions()}
          onOpenTourModal={() => setIsTourModalOpen(true)}
        />

        {/* 4. Academic Programs, Syllabi & Certifications (#programs) */}
        <ProgramExplorer
          currency={currency}
          onSelectProgramForAdmission={(id) => handleOpenAdmissions(id)}
        />

        {/* 5. Transparent Tuition & Scholarship Calculator (#tuition) */}
        <TuitionCalculator
          currency={currency}
          setCurrency={setCurrency}
          onApplyWithEstimate={handleApplyWithEstimate}
        />

        {/* 6. Empowerment & Scholarship Hub (#scholarships) */}
        <ScholarshipHub
          onApplyForScholarship={handleApplyForScholarship}
        />

        {/* 7. Alumni Network & Real Brands from MBFW (#alumni) */}
        <AlumniSection 
          onOpenAdmissions={() => handleOpenAdmissions()}
        />

        {/* 8. The Graduate Lookbook Salon */}
        <LookbookGallery />

        {/* 9. Visual Gallery & Archives: Graduations, Studios, Workshops (#gallery) */}
        <GallerySection />

        {/* 10. News & Events Gazette (#news) */}
        <NewsEventsSection 
          onOpenAdmissions={() => handleOpenAdmissions()}
        />

        {/* 11. Campus Location, Contact & Inquiries (#contact) */}
        <ContactSection
          onOpenTourModal={() => setIsTourModalOpen(true)}
        />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenAdmissions={() => handleOpenAdmissions()}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Floating Action Suite */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Direct WhatsApp Concierge Bubble */}
        <a
          href="https://wa.me/233240187828?text=Hello%20Afra%20K%20Fashion%20School,%20I%20would%20like%20to%20inquire%20about%20admissions"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-105 transition-all duration-300 border border-emerald-400/30"
          title="Chat with Admissions Director on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold uppercase tracking-wider">
            WhatsApp Admissions
          </span>
        </a>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-obsidian-900/90 hover:bg-gold-500 hover:text-obsidian-950 border border-white/20 hover:border-gold-400 text-neutral-300 flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 cursor-pointer"
          title="Return to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Modals */}
      <AdmissionsWizard
        isOpen={isAdmissionsOpen}
        onClose={() => setIsAdmissionsOpen(false)}
        initialProgramId={admissionProgramId}
        initialSchedule={admissionSchedule}
        initialScholarship={admissionScholarship}
      />

      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />

      <PortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
      />

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, ArrowUpRight, Compass, ShieldCheck, 
  Award, Calendar, Users, Scissors, Play, ChevronLeft, ChevronRight, Image as ImageIcon
} from 'lucide-react';
import { getIntakeCountdowns } from '../utils/formatters';
import { getAssetUrl } from '../utils/assets';

export const Hero = ({ onOpenAdmissions, onOpenTourModal, onSelectProgram }) => {
  const countdowns = getIntakeCountdowns();

  // Authentic Hero Background Slides from the original Afra K website & lookbook
  const heroBackgrounds = [
    {
      url: getAssetUrl("/assets/images/291A7354-scaled.jpg"),
      title: "Haute Couture Model Showcase",
      subtitle: "The Signature Afra K Editorial Collection"
    },
    {
      url: getAssetUrl("/assets/images/291A7672-scaled.jpg"),
      title: "Bespoke Garment Construction",
      subtitle: "Anatomical Pattern Engineering & Tailoring"
    },
    {
      url: getAssetUrl("/assets/images/291A7831-scaled.jpg"),
      title: "Avant-Garde Draping & Silhouette",
      subtitle: "European Moulage & Architectural Boning"
    },
    {
      url: getAssetUrl("/assets/images/2S3A0842-scaled.jpg"),
      title: "Mercedes Benz Fashion Week Runway",
      subtitle: "Official Graduate Showcase Platform"
    },
    {
      url: getAssetUrl("/assets/images/469A5403-scaled.jpg"),
      title: "The Vanguard of African Couture",
      subtitle: "Bespoke Bridal & Red-Carpet Excellence"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroBackgrounds.length]);

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-20 bg-obsidian-950">
      {/* Background High-Fashion Authentic Layer with Subtle Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroBackgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-35 scale-105' : 'opacity-0 scale-100'
            } transform transition-transform duration-10000`}
          >
            <img
              src={bg.url}
              alt={bg.title}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-115"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-obsidian-950/40"></div>
        <div className="absolute inset-0 bg-radial-luxury opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none"></div>

        {/* Slide Indicator Pill at Top/Bottom Right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-950/80 border border-white/10 backdrop-blur-md">
          <ImageIcon className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[10px] font-mono text-neutral-300 uppercase">
            {heroBackgrounds[currentSlide].title}
          </span>
          <div className="flex items-center gap-1 ml-2">
            {heroBackgrounds.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlide(dotIdx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === dotIdx ? 'w-5 bg-gold-400' : 'w-1.5 bg-white/25 hover:bg-white/50'
                }`}
                title={`Switch to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between">
        
        {/* Top Badges & Institutional Tagline */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-3 sm:py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>CTVET & NVTI ACCREDITED</span>
          </div>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs sm:text-xs tracking-wider backdrop-blur-md">
            <Scissors className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="font-mono text-gold-300 font-bold tracking-widest text-[11px] sm:text-[11px]">LEARN • PRACTICE • BECOME</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs tracking-wider backdrop-blur-md">
            <span>EST. 2016 • 10+ YEARS</span>
          </div>
        </div>

        {/* Hero Main Heading & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8 sm:mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-editorial text-3xl xs:text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-normal leading-[1.08] tracking-tight text-alabaster-50 mb-4 sm:mb-6">
              The Architecture <br />
              <span className="italic font-light text-neutral-400 font-serif">of</span>{' '}
              <span className="text-gold-gradient font-bold not-italic">Haute Couture</span> <br />
              <span className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-sans tracking-tight uppercase font-extrabold text-neutral-200">
                In The Heart of Accra.
              </span>
            </h1>

            {/* Mobile-Optimized Punchy Manifesto with increased font size */}
            <p className="block md:hidden text-base sm:text-base text-neutral-200 font-light leading-relaxed mb-6">
              West Africa’s premier fashion academy for Haute Couture, master pattern engineering, and 3D digital apparel. Admissions open in East Legon, Accra.
            </p>

            {/* Desktop Detailed Manifesto */}
            <p className="hidden md:block text-base md:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed mb-8">
              Afra K Fashion School is West Africa’s premier academy for pattern technology, European draping, 3D digital fashion, and luxury bridal engineering. Training the visionary designers defining global luxury runways.
            </p>

            {/* Responsive Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenAdmissions}
                className="w-full sm:w-auto px-7 py-4 sm:py-4 rounded-sm bg-gold-gradient text-obsidian-950 font-extrabold text-sm sm:text-xs uppercase tracking-ultra-wide shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
              >
                <Sparkles className="w-4 h-4 text-obsidian-950 shrink-0" />
                <span>Apply for 2026/2027</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-sm bg-obsidian-900/80 hover:bg-obsidian-850 border border-white/15 hover:border-gold-500/40 text-alabaster-100 text-xs uppercase tracking-ultra-wide backdrop-blur-md transition-all flex items-center justify-center gap-2 group text-center"
              >
                <Compass className="w-4 h-4 text-gold-400 group-hover:rotate-45 transition-transform shrink-0" />
                <span>Explore Programs</span>
              </a>

              <button
                onClick={onOpenTourModal}
                className="w-full sm:w-auto px-4 py-2.5 text-neutral-400 hover:text-gold-300 text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer underline-offset-4 hover:underline"
              >
                <span>Book Campus Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Live Admissions Countdown & Next Intake Card */}
          <div className="lg:col-span-4 mt-6 lg:mt-0">
            <div className="glass-card rounded-md p-5 sm:p-6 border border-gold-500/25 shadow-2xl relative overflow-hidden bg-obsidian-900/90 backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-semibold font-mono">
                    ADMISSIONS ENGINE
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9.5px] sm:text-[10px] uppercase font-mono rounded">
                  PORTAL ACTIVE
                </span>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                <div>
                  <span className="text-[11px] text-neutral-400 block uppercase tracking-wider">Next Academic Session</span>
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-alabaster-100 mt-0.5">
                    {countdowns.nextTerm} Intake
                  </h2>
                </div>

                {/* Countdown Numbers Grid */}
                <div className="grid grid-cols-3 gap-2 py-2 bg-obsidian-950/70 p-3 rounded border border-white/5 text-center">
                  <div>
                    <span className="text-xl sm:text-2xl font-mono font-bold text-gold-400 block">
                      {countdowns.septemberDays}
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-400">Days Left</span>
                  </div>
                  <div className="border-x border-white/10">
                    <span className="text-xl sm:text-2xl font-mono font-bold text-alabaster-100 block">
                      {countdowns.nextTermDeadline.split(',')[0]}
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-400">Closing</span>
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-mono font-bold text-alabaster-100 block">
                      {countdowns.nextTermClasses.split(',')[0]}
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-400">Classes</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-300">
                  <div className="flex justify-between text-[11px] sm:text-xs">
                    <span className="text-neutral-400">Intakes:</span>
                    <span className="font-medium text-alabaster-200">Sept 2026 & Jan 2027</span>
                  </div>
                  <div className="flex justify-between text-[11px] sm:text-xs">
                    <span className="text-neutral-400">Study Modes:</span>
                    <span className="font-medium text-alabaster-200">Regular • Weekend • Private</span>
                  </div>
                  <div className="flex justify-between text-[11px] sm:text-xs">
                    <span className="text-neutral-400">Accreditation:</span>
                    <span className="font-medium text-gold-400">CTVET / NVTI Affiliated</span>
                  </div>
                </div>

                <button
                  onClick={onOpenAdmissions}
                  className="w-full py-3 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-gold-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start Enrollment Application</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-xl sm:text-3xl font-serif font-bold text-gold-400">10+ Years</span>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400">Heritage</p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-xl sm:text-3xl font-serif font-bold text-alabaster-100">500+</span>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400">Graduates in 12 Countries</p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-xl sm:text-3xl font-serif font-bold text-alabaster-100">CTVET & NVTI</span>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400">Accredited Diplomas</p>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-xl sm:text-3xl font-serif font-bold text-gold-400">100% Practical</span>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400">Atelier Immersion</p>
          </div>
        </div>

      </div>
    </section>
  );
};

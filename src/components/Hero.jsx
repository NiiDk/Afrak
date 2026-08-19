import React from 'react';
import { 
  Sparkles, ArrowUpRight, Compass, ShieldCheck, 
  Award, Calendar, Users, Scissors, Play
} from 'lucide-react';
import { getIntakeCountdowns } from '../utils/formatters';

export const Hero = ({ onOpenAdmissions, onOpenTourModal, onSelectProgram }) => {
  const countdowns = getIntakeCountdowns();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-12 pb-20 bg-obsidian-950">
      {/* Background High-Fashion Cinematic Layer with Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop"
          alt="High Fashion Haute Couture Runway"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-75 contrast-125 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-luxury opacity-60 pointer-events-none"></div>
        <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between">
        
        {/* Top Badges & Institutional Tagline */}
        <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>CTVET & NVTI ACCREDITED INSTITUTION</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs tracking-wider backdrop-blur-md">
            <Scissors className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-mono text-gold-300 font-bold tracking-widest text-[11px]">LEARN • PRACTICE • BECOME</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs tracking-wider backdrop-blur-md">
            <span>EST. 2016 • 10+ YEARS</span>
          </div>
        </div>

        {/* Hero Main Heading & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-normal leading-[1.05] tracking-tight text-alabaster-50 mb-6">
              The Architecture <br />
              <span className="italic font-light text-neutral-400 font-serif">of</span>{' '}
              <span className="text-gold-gradient font-bold not-italic">Haute Couture</span> <br />
              <span className="text-3xl sm:text-5xl md:text-6xl font-sans tracking-tight uppercase font-extrabold text-neutral-200">
                In The Heart of Accra.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed mb-8">
              Afra K Fashion School is West Africa’s premier academy for pattern technology, European draping, 3D digital fashion, and luxury bridal engineering. Training the visionary designers defining global luxury runways.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdmissions}
                className="px-8 py-4 rounded-sm bg-gold-gradient text-obsidian-950 font-extrabold text-xs uppercase tracking-ultra-wide shadow-2xl shadow-gold-500/25 hover:shadow-gold-500/50 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-3 group"
              >
                <Sparkles className="w-4 h-4 text-obsidian-950" />
                <span>Apply for 2026/2027</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#programs"
                className="px-7 py-4 rounded-sm bg-obsidian-900/80 hover:bg-obsidian-850 border border-white/15 hover:border-gold-500/40 text-alabaster-100 text-xs uppercase tracking-ultra-wide backdrop-blur-md transition-all flex items-center gap-2.5 group"
              >
                <Compass className="w-4 h-4 text-gold-400 group-hover:rotate-45 transition-transform" />
                <span>Explore Programs</span>
              </a>

              <button
                onClick={onOpenTourModal}
                className="px-6 py-4 text-neutral-400 hover:text-gold-300 text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer underline-offset-4 hover:underline"
              >
                <span>Book Campus Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Live Admissions Countdown & Next Intake Card */}
          <div className="lg:col-span-4">
            <div className="glass-card rounded-md p-6 border border-gold-500/20 shadow-2xl relative overflow-hidden bg-obsidian-900/90 backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-mono">
                    ADMISSIONS ENGINE
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] uppercase font-mono rounded">
                  PORTAL ACTIVE
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-neutral-400 block uppercase tracking-wider">Next Academic Session</span>
                  <h2 className="text-xl font-serif font-bold text-alabaster-100 mt-0.5">
                    {countdowns.nextTerm} Intake
                  </h2>
                </div>

                {/* Countdown Numbers Grid */}
                <div className="grid grid-cols-3 gap-2 py-2 bg-obsidian-950/60 p-3 rounded border border-white/5 text-center">
                  <div>
                    <span className="text-2xl font-mono font-bold text-gold-400 block">
                      {countdowns.septemberDays}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400">Days Left</span>
                  </div>
                  <div className="border-x border-white/10">
                    <span className="text-2xl font-mono font-bold text-alabaster-100 block">
                      {countdowns.nextTermDeadline.split(',')[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400">Closing</span>
                  </div>
                  <div>
                    <span className="text-2xl font-mono font-bold text-alabaster-100 block">
                      {countdowns.nextTermClasses.split(',')[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400">Classes Begin</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Intakes:</span>
                    <span className="font-medium text-alabaster-200">September 2026 & January 2027</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Study Modes:</span>
                    <span className="font-medium text-alabaster-200">Regular • Weekend • Private</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Accreditation:</span>
                    <span className="font-medium text-gold-400">CTVET / NVTI Affiliated</span>
                  </div>
                </div>

                <button
                  onClick={onOpenAdmissions}
                  className="w-full py-3 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start Enrollment Application</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">10+ Years</span>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Institutional Heritage</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-alabaster-100">500+</span>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Graduates Across 12 Countries</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-alabaster-100">CTVET & NVTI</span>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Accredited Diploma Programs</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">100% Practical</span>
            <p className="text-xs uppercase tracking-wider text-neutral-400">Atelier-First Immersion</p>
          </div>
        </div>

      </div>
    </section>
  );
};

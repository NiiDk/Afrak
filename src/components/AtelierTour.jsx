import React, { useState } from 'react';
import { facilitiesData } from '../data/facilitiesData';
import { 
  Building2, CheckCircle2, Sparkles, MapPin, 
  ArrowRight, Compass, ShieldCheck, Camera
} from 'lucide-react';

export const AtelierTour = ({ onOpenTourModal }) => {
  const [activeStudioId, setActiveStudioId] = useState(facilitiesData[0].id);

  const currentStudio = facilitiesData.find(f => f.id === activeStudioId) || facilitiesData[0];

  return (
    <section id="atelier" className="py-24 bg-obsidian-900 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>THE OGBOJO CAMPUS & WORKSHOPS</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-alabaster-50 font-normal">
              State of the Art <br />
              <span className="italic font-serif text-neutral-400">Couture</span>{' '}
              <span className="text-gold-gradient font-bold not-italic">Ateliers</span>
            </h2>
          </div>

          <div className="space-y-3">
            <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
              Step inside our purpose-built fashion production facilities in Ogbojo, East Legon, Accra. Outfitted with European industrial machinery, French dress forms, and high-performance digital fashion CAD suites.
            </p>
            <button
              onClick={onOpenTourModal}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 font-bold font-mono transition-colors cursor-pointer group"
            >
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>Schedule a Private Guided Campus Tour</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Studio Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {facilitiesData.map((fac) => (
            <button
              key={fac.id}
              onClick={() => setActiveStudioId(fac.id)}
              className={`px-5 py-3 rounded-md text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2.5 ${
                activeStudioId === fac.id
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-lg shadow-gold-500/20'
                  : 'bg-obsidian-950 border border-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{fac.name.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Studio Spotlight Showcase */}
        <div className="glass-card rounded-lg overflow-hidden border border-gold-500/25 bg-obsidian-950 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
          
          {/* Studio Photography View */}
          <div className="lg:col-span-7 relative h-80 sm:h-[420px] rounded-md overflow-hidden border border-white/10">
            <img
              src={currentStudio.image}
              alt={currentStudio.name}
              className="w-full h-full object-cover filter brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80"></div>

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-obsidian-950/85 backdrop-blur-md text-gold-400 text-xs font-mono uppercase rounded border border-gold-500/30">
                East Legon • Ogbojo Facility
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 bg-obsidian-950/85 backdrop-blur-md p-3 rounded border border-white/10">
              <span className="flex items-center gap-1.5 font-mono text-gold-400">
                <Camera className="w-3.5 h-3.5" />
                Live Studio Environment
              </span>
              <span className="text-neutral-400">Open for Student Practice Daily</span>
            </div>
          </div>

          {/* Studio Specifications & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-gold-400 block mb-1">
                {currentStudio.subtitle}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 font-bold leading-tight">
                {currentStudio.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {currentStudio.description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Atelier Equipment & Infrastructure:
              </span>
              <div className="space-y-2">
                {currentStudio.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-alabaster-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenTourModal}
                className="px-6 py-3 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-gold-500/20 cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book a Guided Studio Walkthrough</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

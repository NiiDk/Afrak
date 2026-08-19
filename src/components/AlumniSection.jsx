import React, { useState } from 'react';
import { Award, Sparkles, ExternalLink, Quote, Star, ArrowRight, UserCheck } from 'lucide-react';
import { originalSiteData } from '../data/originalSiteData';

export const AlumniSection = ({ onOpenAdmissions }) => {
  const { realAlumniBrands } = originalSiteData;
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);

  return (
    <section id="alumni" className="py-12 sm:py-16 md:py-24 bg-obsidian-900/60 border-t border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase mb-2 sm:mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>500+ GRADUATES ACROSS 12 COUNTRIES</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-alabaster-50 font-normal tracking-tight">
              The Alumni <span className="italic font-light text-neutral-400 font-serif">Hall of Fame</span>
            </h2>
            <p className="text-neutral-300 font-light text-xs sm:text-base mt-2 sm:mt-3">
              From runway spotlights at Mercedes Benz Fashion Week to successful international ateliers in Accra, London, Lagos, and Paris.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmissions}
              className="w-full sm:w-auto px-6 py-3 rounded-sm bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
            >
              <span>Join The Next Cohort</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Real Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {realAlumniBrands.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAlumnus(item)}
              className="rounded-lg bg-obsidian-950 border border-white/10 overflow-hidden hover:border-gold-500/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-72 w-full overflow-hidden bg-obsidian-900">
                <img
                  src={item.image}
                  alt={`${item.brand} by ${item.designer}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent"></div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-obsidian-950/90 border border-white/15 text-[10px] font-mono text-gold-400 font-bold">
                  {item.year}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                    FOUNDER & CREATIVE DIRECTOR
                  </span>
                  <h3 className="font-editorial text-xl text-alabaster-50 font-semibold group-hover:text-gold-300 transition-colors">
                    {item.brand}
                  </h3>
                  <p className="text-xs text-gold-400/90 font-medium">
                    {item.designer}
                  </p>
                  <p className="text-[11px] text-neutral-400 line-clamp-2 mt-2 font-light italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="truncate max-w-[180px]">{item.show}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspection for Alumnus */}
        {selectedAlumnus && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-xl animate-fade-in">
            <div className="bg-obsidian-900 border border-gold-500/40 rounded-lg max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
              <button
                onClick={() => setSelectedAlumnus(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="rounded-lg overflow-hidden border border-white/15 max-h-80">
                  <img
                    src={selectedAlumnus.image}
                    alt={selectedAlumnus.brand}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <span className="px-2.5 py-1 rounded bg-gold-500/10 text-gold-300 font-mono text-[10px] uppercase font-bold">
                    {selectedAlumnus.year}
                  </span>
                  <h3 className="font-editorial text-2xl text-alabaster-50">
                    {selectedAlumnus.brand}
                  </h3>
                  <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                    By {selectedAlumnus.designer}
                  </p>
                  <p className="text-xs text-neutral-400 font-mono">
                    Runway Platform: {selectedAlumnus.show}
                  </p>
                  <div className="p-4 rounded bg-white/5 border border-white/10 text-xs text-neutral-200 italic">
                    "{selectedAlumnus.quote}"
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedAlumnus(null)}
                  className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedAlumnus(null);
                    onOpenAdmissions();
                  }}
                  className="px-6 py-2 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider"
                >
                  Apply to Afra K
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

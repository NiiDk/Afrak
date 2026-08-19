import React from 'react';
import { scholarshipData } from '../data/scholarshipData';
import { Award, CheckCircle2, Sparkles, Calendar, ArrowRight, HeartHandshake } from 'lucide-react';

export const ScholarshipHub = ({ onApplyForScholarship }) => {
  return (
    <section id="scholarships" className="py-12 sm:py-16 md:py-24 bg-obsidian-950 relative overflow-hidden border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>EMPOWERMENT & CREATIVE ACCESS</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-alabaster-50 font-normal">
            10-Year Anniversary <br />
            <span className="text-gold-gradient font-bold">Scholarship & Grant Fund</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed">
            We believe financial constraint should never silence exceptional creative talent. Explore our merit awards, founder’s grants, and tech fellowships for the 2026/2027 academic sessions.
          </p>
        </div>

        {/* Scholarship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {scholarshipData.map((sch) => (
            <div
              key={sch.id}
              className="glass-card rounded-lg p-5 sm:p-8 border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between bg-obsidian-900/70 hover:shadow-2xl hover:shadow-gold-500/10 space-y-5 sm:space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="px-2.5 py-0.5 bg-gold-500/20 text-gold-400 border border-gold-500/30 text-[10px] uppercase font-mono rounded">
                    {sch.status}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gold-400" />
                    {sch.deadline}
                  </span>
                </div>

                <div>
                  <span className="text-2xl sm:text-2xl font-serif font-bold text-gold-400 block mb-1">
                    {sch.award}
                  </span>
                  <h3 className="font-serif text-xl sm:text-lg font-bold text-alabaster-100 leading-tight">
                    {sch.name}
                  </h3>
                  <span className="text-xs sm:text-[11px] text-neutral-400 font-mono block mt-1">
                    Eligible: {sch.openTo}
                  </span>
                </div>

                <p className="text-sm sm:text-xs text-neutral-300 font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {sch.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[11px] sm:text-[10px] uppercase font-mono text-neutral-400 block">
                    Key Criteria:
                  </span>
                  {sch.eligibility.map((crit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm sm:text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onApplyForScholarship(sch.id)}
                  className="w-full py-3 rounded bg-obsidian-850 hover:bg-gold-500 hover:text-obsidian-950 border border-white/15 hover:border-gold-400 text-alabaster-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:text-obsidian-950" />
                  <span>Apply for this Grant</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

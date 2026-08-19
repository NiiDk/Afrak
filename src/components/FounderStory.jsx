import React from 'react';
import { facultyData } from '../data/facultyData';
import { Quote, Award, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const FounderStory = ({ onOpenAdmissions }) => {
  const founder = facultyData.find(f => f.id === 'lesley-aidoo-mensah') || facultyData[0];
  const otherFaculty = facultyData.filter(f => f.id !== 'lesley-aidoo-mensah');

  return (
    <section id="heritage" className="py-24 bg-obsidian-950 text-alabaster-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder's Feature Card */}
        <div className="glass-card rounded-xl border border-gold-500/30 bg-obsidian-900/90 p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-lg overflow-hidden border border-gold-500/40 shadow-2xl">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover filter brightness-95 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-70"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-center bg-obsidian-950/90 backdrop-blur-md p-3 rounded border border-white/10">
                  <h4 className="font-serif font-bold text-alabaster-100 text-sm">{founder.name}</h4>
                  <span className="text-[10px] text-gold-400 font-mono uppercase tracking-wider block">
                    Founder & Master Couturier
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Manifesto & Letter */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest">
                <Quote className="w-3.5 h-3.5" />
                <span>FOUNDER'S ADDRESS • A VISION FOR AFRICAN FASHION</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-alabaster-50 font-normal leading-tight">
                “We do not just teach sewing. <br />
                <span className="text-gold-gradient font-bold">We sculpt creative sovereign leaders.”</span>
              </h2>

              <blockquote className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed italic border-l-2 border-gold-500 pl-4 space-y-3">
                <p>
                  “When I founded Afra K Fashion School in 2016, my vision was simple yet radical: to establish an institution in Accra with the same uncompromising technical rigor, pattern precision, and artistic dignity as the grand fashion academies of Milan, Paris, and London.”
                </p>
                <p>
                  “Over the past decade, I have watched more than 500 students blossom into confident designers, bridal specialists, and fashion entrepreneurs who are reshaping the African fashion narrative on international runways.”
                </p>
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>CTVET / NVTI Master Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-400" />
                  <span>10 Years Shaping West African Fashion</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenAdmissions}
                  className="px-6 py-3.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-gold-500/20 cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Join Lesley's Master Mentorship</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Master Faculty Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold-400 text-xs font-mono uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>THE ACADEMIC SENATE & MASTER TUTORS</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-alabaster-50 font-normal">
              World-Class Faculty & <span className="text-gold-gradient font-bold">Couture Mentors</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Trained across international ateliers in Savile Row, Milan, and West Africa, our instructors provide personalized daily mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherFaculty.map((fac) => (
              <div
                key={fac.id}
                className="glass-card rounded-lg overflow-hidden border border-white/10 hover:border-gold-500/40 transition-all duration-300 p-6 space-y-4 bg-obsidian-900/60"
              >
                <div className="relative aspect-square rounded-md overflow-hidden border border-white/10 mb-4">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 bg-obsidian-950/85 text-gold-400 text-[10px] font-mono uppercase rounded border border-gold-500/30">
                      {fac.specialty.split('&')[0]}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-alabaster-100">{fac.name}</h4>
                  <span className="text-xs text-gold-400 font-mono block">{fac.role}</span>
                </div>

                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {fac.bio}
                </p>

                <div className="pt-3 border-t border-white/5 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Credentials:</span>
                  {fac.credentials.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                      <CheckCircle2 className="w-3 h-3 text-gold-500 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

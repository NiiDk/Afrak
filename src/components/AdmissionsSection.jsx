import React, { useState } from 'react';
import { 
  FileText, Calendar, Clock, CheckCircle2, UserCheck, 
  CreditCard, Sparkles, Building, ArrowRight, ShieldCheck, 
  Download, HelpCircle, Phone, MessageSquare, AlertCircle
} from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export const AdmissionsSection = ({ currency = 'GHS', onOpenAdmissions, onOpenTourModal }) => {
  const [selectedIntake, setSelectedIntake] = useState('september');

  return (
    <section id="admissions" className="py-24 bg-obsidian-950 text-alabaster-100 relative overflow-hidden border-t border-white/5 scroll-mt-24">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>ADMISSION GUIDANCE & TUITION 2026/2027</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-alabaster-50 font-normal tracking-tight mb-4">
            Admissions & <span className="italic font-light text-neutral-400 font-serif">Enrollment</span>
          </h2>
          <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
            Everything you need to know about candidate eligibility, application steps, fee schedules, flexible payment installments, on-campus hostel, and academic calendar dates.
          </p>
        </div>

        {/* 3-Pillar Admission Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Pillar 1: Eligibility */}
          <div className="p-8 rounded-lg bg-obsidian-900/90 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold block mb-1">PILLAR 01</span>
              <h3 className="font-editorial text-2xl text-alabaster-50 mb-3">Applicant Eligibility</h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                To be eligible for admission, applicants must be proficient in English (both written and spoken) and be at least 18 years of age.
              </p>
            </div>
            <div className="p-3 rounded bg-white/5 border border-white/10 text-xs text-neutral-400 font-mono">
              ✓ Age 18+ Required <br />
              ✓ Spoken & Written English
            </div>
          </div>

          {/* Pillar 2: 3-Step Process */}
          <div className="p-8 rounded-lg bg-obsidian-900/90 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold block mb-1">PILLAR 02</span>
              <h3 className="font-editorial text-2xl text-alabaster-50 mb-3">Application Form</h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                Forms are obtainable from the School Administration Office in Ogbojo or submitted online with an application fee of <strong className="text-gold-300">GHC 200 (~USD 20)</strong>.
              </p>
            </div>
            <div className="p-3 rounded bg-white/5 border border-white/10 text-xs text-neutral-400 font-mono">
              ✓ 2 Passport Photographs <br />
              ✓ Clear Copy of National ID Card
            </div>
          </div>

          {/* Pillar 3: Rapid 24-48h Processing */}
          <div className="p-8 rounded-lg bg-obsidian-900/90 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold block mb-1">PILLAR 03</span>
              <h3 className="font-editorial text-2xl text-alabaster-50 mb-3">24-48 Hour Review</h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                Applications are processed within 24 to 48 hours of full submission. All candidates receive formal feedback and enrollment letters.
              </p>
            </div>
            <div className="p-3 rounded bg-white/5 border border-white/10 text-xs text-neutral-400 font-mono">
              ✓ Fast-Track Verification <br />
              ✓ Direct WhatsApp Updates
            </div>
          </div>

        </div>

        {/* Interactive Intake & Tuition Schedule Selector */}
        <div className="glass-card p-8 sm:p-12 rounded-xl border border-gold-500/30 bg-gradient-to-b from-obsidian-900 via-obsidian-950 to-obsidian-900 shadow-2xl mb-16">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold block mb-1">
                ACADEMIC CALENDAR & FEE STRUCTURES
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50">
                Official Tuition & Payment Plans
              </h3>
            </div>

            {/* Intake Selector Toggle */}
            <div className="flex rounded-md bg-obsidian-950 p-1 border border-white/15">
              <button
                onClick={() => setSelectedIntake('september')}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  selectedIntake === 'september'
                    ? 'bg-gold-500 text-obsidian-950 shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                September 2026 Intake
              </button>
              <button
                onClick={() => setSelectedIntake('january')}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  selectedIntake === 'january'
                    ? 'bg-gold-500 text-obsidian-950 shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                January 2027 Intake
              </button>
            </div>
          </div>

          {/* September 2026 Details */}
          {selectedIntake === 'september' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-obsidian-950 border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">APPLICATION DEADLINE</span>
                    <strong className="text-base text-gold-400 font-serif">1 September 2026</strong>
                    <span className="text-[11px] text-emerald-400 block mt-1">● Applications Open Now</span>
                  </div>
                  <div className="p-4 rounded-lg bg-obsidian-950 border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">CLASSES COMMENCE</span>
                    <strong className="text-base text-alabaster-50 font-serif">7 September 2026</strong>
                    <span className="text-[11px] text-neutral-400 block mt-1">Regular (Mon-Fri) & Weekend (Sat-Sun)</span>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-obsidian-950 border border-gold-500/20 space-y-4">
                  <h4 className="font-editorial text-xl text-alabaster-50">1-Year Foundational Programme Fees</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-neutral-300 font-semibold block">Domestic Candidates (Ghanaian Citizens)</span>
                      <span className="text-xs text-neutral-400">Regular Training (Mon-Fri) or Weekend (Sat-Sun)</span>
                    </div>
                    <div className="text-right">
                      <strong className="text-2xl text-gold-400 font-mono">GHC 7,500</strong>
                      <span className="text-[11px] text-neutral-400 block">70% initial deposit (GHC 5,250)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-neutral-300 font-semibold block">International Candidates</span>
                      <span className="text-xs text-neutral-400">Regular Training (Mon-Fri) or Weekend (Sat-Sun)</span>
                    </div>
                    <div className="text-right">
                      <strong className="text-2xl text-gold-400 font-mono">USD 2,000</strong>
                      <span className="text-[11px] text-neutral-400 block">75% initial deposit (USD 1,500)</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    * The remaining 30% balance for domestic students or 25% for international students is spread across <strong className="text-white">Two Equal Monthly Instalments</strong> after classes commence.
                  </p>
                </div>
              </div>

              {/* Private Tuition & Hostel Accommodation */}
              <div className="lg:col-span-5 space-y-6">
                {/* On-Campus Hostel */}
                <div className="p-6 rounded-lg bg-obsidian-950 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gold-400 uppercase font-bold">ON-CAMPUS HOSTEL</span>
                    <span className="text-sm font-mono text-white font-bold">GHC 6,000 / Academic Year</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Comfortable, secure on-campus accommodation within walking distance of cutting lofts and industrial sewing suites. Utilities billed separately.
                  </p>
                </div>

                {/* Private 1-on-1 Tuition */}
                <div className="p-6 rounded-lg bg-obsidian-950 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-gold-400 uppercase font-bold block">PRIVATE TUITION (FLEXIBLE SCHEDULE)</span>
                  <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                    <span className="text-neutral-300">6-Month Private Intensive</span>
                    <strong className="text-gold-400 font-mono text-sm">GHC 12,000</strong>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300">1-Year Private Masterclass</span>
                    <strong className="text-gold-400 font-mono text-sm">GHC 15,000</strong>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Scheduled entirely around your personal calendar with dedicated 1-on-1 master instruction.
                  </p>
                </div>

                <button
                  onClick={onOpenAdmissions}
                  className="w-full py-4 rounded-sm bg-gold-gradient text-obsidian-950 font-extrabold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xl shadow-gold-500/25"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start September 2026 Application</span>
                </button>
              </div>
            </div>
          )}

          {/* January 2027 Details */}
          {selectedIntake === 'january' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-obsidian-950 border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">APPLICATION DEADLINE</span>
                    <strong className="text-base text-gold-400 font-serif">4 January 2027</strong>
                    <span className="text-[11px] text-emerald-400 block mt-1">● Early Registration Open</span>
                  </div>
                  <div className="p-4 rounded-lg bg-obsidian-950 border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">CLASSES COMMENCE</span>
                    <strong className="text-base text-alabaster-50 font-serif">11 January 2027</strong>
                    <span className="text-[11px] text-neutral-400 block mt-1">Regular (Mon-Fri) & Weekend (Sat-Sun)</span>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-obsidian-950 border border-gold-500/20 space-y-4">
                  <h4 className="font-editorial text-xl text-alabaster-50">1-Year Foundational Programme Fees (2027)</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-neutral-300 font-semibold block">Domestic Candidates (Ghanaian Citizens)</span>
                      <span className="text-xs text-neutral-400">Regular Training (Mon-Fri) or Weekend (Sat-Sun)</span>
                    </div>
                    <div className="text-right">
                      <strong className="text-2xl text-gold-400 font-mono">GHC 9,700</strong>
                      <span className="text-[11px] text-neutral-400 block">70% initial deposit (GHC 6,790)</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-neutral-300 font-semibold block">International Candidates</span>
                      <span className="text-xs text-neutral-400">Regular Training (Mon-Fri) or Weekend (Sat-Sun)</span>
                    </div>
                    <div className="text-right">
                      <strong className="text-2xl text-gold-400 font-mono">USD 2,000</strong>
                      <span className="text-[11px] text-neutral-400 block">75% initial deposit (USD 1,500)</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    * The remaining 30% balance for domestic students or 25% for international students is spread across <strong className="text-white">Two Equal Monthly Instalments</strong> after classes commence.
                  </p>
                </div>
              </div>

              {/* Private Tuition & Hostel Accommodation */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-lg bg-obsidian-950 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gold-400 uppercase font-bold">ON-CAMPUS HOSTEL</span>
                    <span className="text-sm font-mono text-white font-bold">GHC 6,000 / Academic Year</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Safe on-campus student residence near ARS Roundabout, Ogbojo East Legon.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-obsidian-950 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-gold-400 uppercase font-bold block">PRIVATE TUITION (FLEXIBLE SCHEDULE)</span>
                  <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                    <span className="text-neutral-300">6-Month Private Intensive</span>
                    <strong className="text-gold-400 font-mono text-sm">GHC 12,000</strong>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300">1-Year Private Masterclass</span>
                    <strong className="text-gold-400 font-mono text-sm">GHC 15,000</strong>
                  </div>
                </div>

                <button
                  onClick={onOpenAdmissions}
                  className="w-full py-4 rounded-sm bg-gold-gradient text-obsidian-950 font-extrabold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xl shadow-gold-500/25"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start January 2027 Application</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Core Curriculum Modules Included in Tuition */}
        <div className="p-8 rounded-xl bg-obsidian-900 border border-white/10 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold">CURRICULUM INCLUDED</span>
            <h3 className="font-editorial text-2xl text-alabaster-50 mt-1">Core Modules Covered in Your Diploma</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { title: "Entrepreneurship & Business Development", tag: "Business" },
              { title: "Information Technology (ICT)", tag: "Tech" },
              { title: "Digital Fashion Illustration", tag: "Creative" },
              { title: "Pattern Drafting Technology", tag: "Engineering" },
              { title: "Garment Construction", tag: "Atelier" },
              { title: "Bonus: Accessories & Embellishment", tag: "Bonus" }
            ].map((mod, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-obsidian-950 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between">
                <span className="text-[10px] font-mono text-gold-400 uppercase font-bold block mb-2">{mod.tag}</span>
                <span className="text-xs text-alabaster-100 font-medium">{mod.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

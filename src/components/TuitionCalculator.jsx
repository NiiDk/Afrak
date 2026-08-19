import React, { useState, useMemo } from 'react';
import { programsData } from '../data/programsData';
import { formatCurrency } from '../utils/formatters';
import { 
  Calculator, Sparkles, Check, ArrowRight, ShieldCheck, 
  HelpCircle, Percent, CreditCard, DollarSign
} from 'lucide-react';

export const TuitionCalculator = ({ currency, setCurrency, onApplyWithEstimate }) => {
  const [selectedProgramId, setSelectedProgramId] = useState('foundational-couture');
  const [scheduleType, setScheduleType] = useState('regular'); // regular, weekend, private
  const [paymentPlan, setPaymentPlan] = useState('upfront'); // upfront, installment-2, installment-4
  const [scholarshipDiscount, setScholarshipDiscount] = useState('none'); // none, anniversary-30, founders-20, tech-100

  const activeProgram = useMemo(() => {
    return programsData.find(p => p.id === selectedProgramId) || programsData[0];
  }, [selectedProgramId]);

  // Calculate pricing breakdown
  const calculation = useMemo(() => {
    const basePricing = activeProgram.pricing[currency] || activeProgram.pricing.GHS;
    let tuition = basePricing.tuition;
    const registration = basePricing.registration;
    const materials = basePricing.materialsEstimate;

    // Schedule adjustment: Private 1-on-1 has a 35% premium
    if (scheduleType === 'private') {
      tuition = tuition * 1.35;
    }

    // Scholarship reductions
    let scholarshipRate = 0;
    if (scholarshipDiscount === 'anniversary-30') scholarshipRate = 0.30;
    if (scholarshipDiscount === 'founders-20') scholarshipRate = 0.20;
    if (scholarshipDiscount === 'tech-100' && activeProgram.id === 'niche-digital-fashion') {
      scholarshipRate = 1.0;
    }

    const scholarshipDeduction = tuition * scholarshipRate;
    let discountedTuition = Math.max(0, tuition - scholarshipDeduction);

    // Payment plan discount (10% off tuition if paid upfront)
    let upfrontDiscount = 0;
    if (paymentPlan === 'upfront' && scholarshipRate === 0) {
      upfrontDiscount = discountedTuition * 0.10;
      discountedTuition = discountedTuition - upfrontDiscount;
    }

    const totalInvestment = discountedTuition + registration + materials;

    // Installment amounts
    let perInstallment = 0;
    let installmentCount = 1;
    if (paymentPlan === 'installment-2') {
      installmentCount = 2;
      perInstallment = (discountedTuition / 2) + (registration / 2);
    } else if (paymentPlan === 'installment-4') {
      installmentCount = 4;
      perInstallment = (discountedTuition / 4) + (registration / 4);
    }

    return {
      rawTuition: tuition,
      discountedTuition,
      registration,
      materials,
      scholarshipDeduction,
      upfrontDiscount,
      totalInvestment,
      perInstallment,
      installmentCount
    };
  }, [activeProgram, currency, scheduleType, paymentPlan, scholarshipDiscount]);

  return (
    <section id="tuition" className="py-24 bg-obsidian-900/90 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT FINANCIAL ARCHITECTURE</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-alabaster-50 font-normal">
            Tuition & Scholarship <br />
            <span className="text-gold-gradient font-bold">Investment Calculator</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Estimate your exact investment, explore flexible installment structures, and test potential scholarship deductions in real-time across multiple global currencies.
          </p>

          {/* Currency Switcher Bar */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="text-xs text-neutral-400 uppercase font-mono mr-2">Viewing Currency:</span>
            {['GHS', 'USD', 'EUR', 'GBP'].map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                  currency === curr 
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md shadow-gold-500/20' 
                    : 'bg-obsidian-850 text-neutral-400 border border-white/10 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8 glass-card p-6 sm:p-8 rounded-lg border border-white/10 bg-obsidian-950/80">
            
            {/* Step 1: Select Program */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono text-gold-400 tracking-wider flex items-center justify-between">
                <span>1. Select Program Curriculum</span>
                <span className="text-neutral-500">{activeProgram.duration}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {programsData.map((prog) => (
                  <button
                    key={prog.id}
                    onClick={() => setSelectedProgramId(prog.id)}
                    className={`p-3 rounded text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedProgramId === prog.id
                        ? 'bg-gold-500/15 border-gold-400 text-alabaster-100 shadow-md shadow-gold-500/10'
                        : 'bg-obsidian-900 border-white/5 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-bold font-serif leading-tight">{prog.title}</span>
                    <span className="text-[10px] text-neutral-400 mt-2 font-mono">{prog.level}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Schedule Format */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono text-gold-400 tracking-wider block">
                2. Select Attendance Format
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'regular', label: 'Regular Full-Time', sub: 'Mon – Thu Intensive' },
                  { id: 'weekend', label: 'Weekend Executive', sub: 'Saturday & Sunday' },
                  { id: 'private', label: 'Private 1-on-1', sub: 'Bespoke Atelier (+35%)' },
                ].map((sched) => (
                  <button
                    key={sched.id}
                    onClick={() => setScheduleType(sched.id)}
                    className={`p-3 rounded text-left border transition-all cursor-pointer ${
                      scheduleType === sched.id
                        ? 'bg-gold-500/20 border-gold-400 text-alabaster-100'
                        : 'bg-obsidian-900 border-white/5 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-bold block">{sched.label}</span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">{sched.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Payment Plan Mode */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono text-gold-400 tracking-wider block">
                3. Payment Plan Structure
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'upfront', title: 'Full Upfront Payment', desc: '10% Instant Early Waiver' },
                  { id: 'installment-2', title: '2-Term Installments', desc: '50% at Start, 50% Midterm' },
                  { id: 'installment-4', title: '4-Month Flex Plan', desc: 'Spread across semester' },
                ].map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setPaymentPlan(plan.id)}
                    className={`p-3 rounded text-left border transition-all cursor-pointer ${
                      paymentPlan === plan.id
                        ? 'bg-gold-500/20 border-gold-400 text-alabaster-100'
                        : 'bg-obsidian-900 border-white/5 text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-bold block">{plan.title}</span>
                    <span className="text-[10px] text-gold-400 block mt-0.5">{plan.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Test Scholarship Eligibility */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono text-gold-400 tracking-wider block">
                4. Test Scholarship / Grant Aid
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'none', name: 'Standard Tuition (No Grant)' },
                  { id: 'anniversary-30', name: '10-Year Anniversary Fund (30% Waiver)' },
                  { id: 'founders-20', name: 'Founder’s Creative Grant (20% Waiver)' },
                  { id: 'tech-100', name: 'Women in Tech Grant (100% on 3D CLO)' },
                ].map((sch) => (
                  <button
                    key={sch.id}
                    onClick={() => setScholarshipDiscount(sch.id)}
                    className={`p-2.5 rounded text-left text-xs border transition-all cursor-pointer ${
                      scholarshipDiscount === sch.id
                        ? 'bg-gold-500/20 border-gold-400 text-alabaster-100 font-semibold'
                        : 'bg-obsidian-900 border-white/5 text-neutral-400 hover:text-white hover:border-white/10'
                    }`}
                  >
                    {sch.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Investment Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="glass-card p-6 sm:p-8 rounded-lg border border-gold-500/30 bg-obsidian-950 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-mono text-gold-400 tracking-wider block">Estimated Quote</span>
                  <h3 className="text-lg font-serif font-bold text-alabaster-100">{activeProgram.title}</h3>
                </div>
                <CreditCard className="w-5 h-5 text-gold-400" />
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 text-xs text-neutral-300 pb-6 border-b border-white/10">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Base Tuition Fee:</span>
                  <span className="font-mono text-alabaster-200">{formatCurrency(calculation.rawTuition, currency)}</span>
                </div>

                {calculation.scholarshipDeduction > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Scholarship Grant Applied:</span>
                    <span className="font-mono">-{formatCurrency(calculation.scholarshipDeduction, currency)}</span>
                  </div>
                )}

                {calculation.upfrontDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>10% Upfront Early Waiver:</span>
                    <span className="font-mono">-{formatCurrency(calculation.upfrontDiscount, currency)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-neutral-400">Registration & Enrollment:</span>
                  <span className="font-mono text-alabaster-200">{formatCurrency(calculation.registration, currency)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">Tool Kit & Drafting Materials (Est.):</span>
                  <span className="font-mono text-alabaster-200">{formatCurrency(calculation.materials, currency)}</span>
                </div>
              </div>

              {/* Total Investment Summary */}
              <div className="py-6 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase font-mono text-neutral-400">Total All-Inclusive:</span>
                  <span className="text-3xl font-serif font-bold text-gold-400">
                    {formatCurrency(calculation.totalInvestment, currency)}
                  </span>
                </div>

                {paymentPlan !== 'upfront' && (
                  <div className="bg-white/5 p-3 rounded border border-white/10 text-xs text-neutral-300 space-y-1">
                    <span className="text-gold-400 font-semibold block">Installment Structure:</span>
                    <p className="text-[11px] text-neutral-400">
                      {calculation.installmentCount} payments of <strong className="text-white font-mono">{formatCurrency(calculation.perInstallment, currency)}</strong> per scheduled term.
                    </p>
                  </div>
                )}
              </div>

              {/* Apply Action Button */}
              <button
                onClick={() => onApplyWithEstimate({
                  programId: selectedProgramId,
                  scheduleType,
                  paymentPlan,
                  scholarshipDiscount
                })}
                className="w-full py-4 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-ultra-wide hover:opacity-95 shadow-xl shadow-gold-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4" />
                <span>Apply with this Custom Plan</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="pt-4 flex items-center justify-center gap-2 text-[10px] text-neutral-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>CTVET & NVTI Accredited • Flexible Payment Guarantee</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

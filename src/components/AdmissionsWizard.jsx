import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { programsData } from '../data/programsData';
import { 
  X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, 
  Download, Printer, MessageSquare, ShieldCheck, FileText, User, Mail, Phone, Calendar, BookOpen
} from 'lucide-react';

export const AdmissionsWizard = ({ 
  isOpen, 
  onClose, 
  initialProgramId = 'foundational-couture',
  initialSchedule = 'regular',
  initialScholarship = false
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    city: 'Accra',
    country: 'Ghana',
    intake: 'September 2026',
    programId: initialProgramId,
    schedule: initialSchedule,
    experienceLevel: 'Beginner (No prior experience)',
    portfolioLink: '',
    applyingScholarship: initialScholarship,
    scholarshipType: '10-Year Anniversary Scholarship',
    statement: '',
  });

  const [submittedAppId, setSubmittedAppId] = useState(null);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateStep = (currentStep) => {
    const errs = {};
    if (currentStep === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    // Generate unique Application ID (AFK-2026-XXXX)
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const appId = `AFK-2026-${randomNum}`;
    setSubmittedAppId(appId);
    setStep(4);

    // Trigger celebratory luxury confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FAF9F5', '#E5C358', '#C5A880']
    });
  };

  const selectedProgram = programsData.find(p => p.id === formData.programId) || programsData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/90 backdrop-blur-xl animate-fade-in">
      <div className="glass-card bg-obsidian-950 border border-gold-500/35 rounded-xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Wizard Header */}
        <div className="space-y-2 pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] uppercase font-mono tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>Official Admissions Portal • Academic Year 2026/2027</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 font-bold">
            {step === 4 ? 'Application Confirmed' : 'Application for Admissions'}
          </h2>
          {step < 4 && (
            <p className="text-xs text-neutral-400 font-light">
              Complete your formal enrollment application. Step {step} of 3.
            </p>
          )}
        </div>

        {/* Step Progress Indicator (Steps 1 to 3) */}
        {step < 4 && (
          <div className="py-4 flex items-center justify-between border-b border-white/5">
            {[
              { num: 1, label: 'Applicant Info' },
              { num: 2, label: 'Program & Intake' },
              { num: 3, label: 'Portfolio & Aid' },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full text-xs font-mono flex items-center justify-center font-bold ${
                  step === s.num
                    ? 'bg-gold-500 text-obsidian-950'
                    : step > s.num
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-white/5 text-neutral-500'
                }`}>
                  {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                </span>
                <span className={`text-xs font-mono uppercase hidden sm:inline ${
                  step === s.num ? 'text-gold-400 font-bold' : 'text-neutral-500'
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Personal & Contact Information */}
        {step === 1 && (
          <div className="py-6 space-y-4 animate-fade-in">
            <div>
              <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                Full Name (As on National ID / Passport) *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Akua Mansa Serwaa"
                className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 placeholder:text-neutral-600 outline-none transition-colors"
              />
              {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 placeholder:text-neutral-600 outline-none transition-colors"
                />
                {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +233 24 018 7828"
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 placeholder:text-neutral-600 outline-none transition-colors"
                />
                {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Accra, Kumasi, Lagos, London"
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 placeholder:text-neutral-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  Country of Residence
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. Ghana, Nigeria, UK, USA"
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 placeholder:text-neutral-600 outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Program & Schedule Selection */}
        {step === 2 && (
          <div className="py-6 space-y-5 animate-fade-in">
            <div>
              <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                Select Desired Program *
              </label>
              <select
                value={formData.programId}
                onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 outline-none transition-colors"
              >
                {programsData.map((p) => (
                  <option key={p.id} value={p.id} className="bg-obsidian-900 text-white">
                    {p.title} ({p.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  Intake Session *
                </label>
                <select
                  value={formData.intake}
                  onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 outline-none"
                >
                  <option value="September 2026">September 2026 Intake (Deadline: Sept 1)</option>
                  <option value="January 2027">January 2027 Intake (Deadline: Jan 4)</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  Study Format / Schedule *
                </label>
                <select
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 outline-none"
                >
                  <option value="regular">Regular Full-Time (Mon – Thu Intensive)</option>
                  <option value="weekend">Weekend Executive (Saturday & Sunday)</option>
                  <option value="private">Private 1-on-1 Atelier Mentorship</option>
                </select>
              </div>
            </div>

            <div className="bg-obsidian-900/80 p-4 rounded border border-white/10 text-xs space-y-1">
              <span className="text-gold-400 font-mono font-bold block">Selected Program Overview:</span>
              <p className="text-neutral-300">{selectedProgram.shortDescription}</p>
              <span className="text-[11px] text-neutral-400 block pt-1 font-mono">
                Certification: {selectedProgram.badge}
              </span>
            </div>
          </div>
        )}

        {/* Step 3: Creative Background & Scholarship Opt-In */}
        {step === 3 && (
          <div className="py-6 space-y-5 animate-fade-in">
            <div>
              <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                Your Prior Sewing / Design Experience
              </label>
              <select
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 outline-none"
              >
                <option value="Beginner (No prior experience)">Complete Beginner (Never touched a machine)</option>
                <option value="Self-Taught / Basic Sewing">Self-Taught / Basic Sewing & Crafting</option>
                <option value="Practicing Tailor / Boutique Owner">Practicing Tailor / Seeking Master Precision</option>
                <option value="Fashion Graduate / Professional">Fashion Graduate / Seeking Advanced Specialization</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                Portfolio Link or Instagram Handle (Optional)
              </label>
              <input
                type="text"
                value={formData.portfolioLink}
                onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                placeholder="e.g. @yourfashionbrand or behance.net/portfolio"
                className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-sm text-alabaster-100 placeholder:text-neutral-600 outline-none"
              />
            </div>

            <div className="bg-obsidian-900 p-4 rounded border border-gold-500/20 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.applyingScholarship}
                  onChange={(e) => setFormData({ ...formData, applyingScholarship: e.target.checked })}
                  className="w-4 h-4 accent-gold-500 rounded"
                />
                <span className="text-xs font-bold text-alabaster-100">
                  I wish to be considered for the 10-Year Anniversary Scholarship / Grant Fund
                </span>
              </label>

              {formData.applyingScholarship && (
                <div className="space-y-3 pt-2">
                  <select
                    value={formData.scholarshipType}
                    onChange={(e) => setFormData({ ...formData, scholarshipType: e.target.value })}
                    className="w-full bg-obsidian-950 border border-white/15 focus:border-gold-400 rounded p-2.5 text-xs text-gold-400 font-mono outline-none"
                  >
                    <option value="10-Year Anniversary Scholarship">10-Year Anniversary Scholarship (Up to 50%)</option>
                    <option value="Founder's Creative Potential Grant">Founder's Creative Potential Grant (Up to 35%)</option>
                    <option value="Women in Fashion Tech Fellowship">Women in Fashion Tech Fellowship (100% on 3D CLO)</option>
                  </select>

                  <textarea
                    rows={3}
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    placeholder="Briefly state your creative aspirations and why you should be awarded this grant..."
                    className="w-full bg-obsidian-950 border border-white/15 rounded p-3 text-xs text-alabaster-200 placeholder:text-neutral-600 outline-none"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Submission Confirmation Card */}
        {step === 4 && (
          <div className="py-6 space-y-6 animate-fade-in text-center">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center mx-auto text-gold-400 shadow-xl shadow-gold-500/20">
              <CheckCircle2 className="w-10 h-10 text-gold-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono text-gold-400 tracking-widest block">
                APPLICATION SUCCESSFULLY LODGED
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 font-bold">
                Welcome to Afra K, {formData.fullName.split(' ')[0]}!
              </h3>
              <p className="text-xs text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                Your admission file has been registered with the Academic Board. An admissions officer has been assigned to your profile.
              </p>
            </div>

            {/* Official Admission Receipt Slip */}
            <div className="glass-card bg-obsidian-900 border border-gold-500/30 p-6 rounded-lg text-left space-y-3 text-xs max-w-lg mx-auto font-mono">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-neutral-400">Application Reference:</span>
                <strong className="text-gold-400 font-bold text-sm">{submittedAppId}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Candidate Name:</span>
                <span className="text-alabaster-100">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Program:</span>
                <span className="text-alabaster-100">{selectedProgram.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Target Intake:</span>
                <span className="text-alabaster-100">{formData.intake}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Scholarship Aid Status:</span>
                <span className={formData.applyingScholarship ? "text-gold-400 font-bold" : "text-neutral-500"}>
                  {formData.applyingScholarship ? "Application Under Committee Review" : "Standard Enrollment"}
                </span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 text-[11px] text-neutral-400">
                <span>Campus Location:</span>
                <span>Ogbojo, East Legon, Accra</span>
              </div>
            </div>

            {/* Next Steps Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/233240187828?text=Hello%20Afra%20K%20Admissions,%20I%20have%20submitted%20my%20application%20with%20ID:%20${submittedAppId}%20for%20${encodeURIComponent(formData.fullName)}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Fast-Track on WhatsApp</span>
              </a>

              <button
                onClick={() => window.print()}
                className="px-5 py-3 rounded bg-obsidian-850 hover:bg-obsidian-800 border border-white/15 text-alabaster-200 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Printer className="w-4 h-4 text-gold-400" />
                <span>Print Application Receipt</span>
              </button>
            </div>

          </div>
        )}

        {/* Wizard Controls Footer */}
        {step < 4 && (
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded bg-obsidian-900 hover:bg-obsidian-850 border border-white/10 text-neutral-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-gold-500/20 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded bg-gold-gradient text-obsidian-950 font-extrabold text-xs uppercase tracking-ultra-wide hover:opacity-95 shadow-xl shadow-gold-500/30 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Official Application</span>
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

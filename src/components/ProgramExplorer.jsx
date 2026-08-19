import React, { useState } from 'react';
import { 
  programsData 
} from '../data/programsData';
import { formatCurrency } from '../utils/formatters';
import { 
  Sparkles, Clock, Calendar, CheckCircle2, ChevronRight, 
  BookOpen, Award, Download, ArrowUpRight, X, Layers, Briefcase, FileText
} from 'lucide-react';

export const ProgramExplorer = ({ currency, onSelectProgramForAdmission }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const categories = [
    { id: 'all', label: 'All Curriculums' },
    { id: 'diploma', label: '18-Month Diploma' },
    { id: 'studio', label: '6-Month Studio' },
    { id: 'masterclasses', label: 'Niche Masterclasses' },
    { id: 'tech-business', label: 'Digital Tech & Business' }
  ];

  const filteredPrograms = programsData.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'diploma') return p.id === 'foundational-couture';
    if (activeCategory === 'studio') return p.id === 'studio-mastery';
    if (activeCategory === 'masterclasses') return p.id.includes('niche');
    if (activeCategory === 'tech-business') return p.id.includes('digital') || p.id.includes('business');
    return true;
  });

  const handleDownloadSyllabus = (programTitle) => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="programs" className="py-12 sm:py-16 md:py-24 bg-obsidian-950 relative overflow-hidden scroll-mt-24">
      {/* Decorative luxury backdrops */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase font-mono tracking-widest mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>ACADEMIC DEPARTMENTS & CURRICULUM</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-alabaster-50 font-normal">
              Tailored Atelier <br />
              <span className="italic font-serif text-neutral-400">Programs of</span>{' '}
              <span className="text-gold-gradient font-bold not-italic">Excellence</span>
            </h2>
          </div>

          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            From foundational pattern engineering to high-stakes bridal corsetry and 3D digital apparel, explore our accredited programs designed for global competitiveness.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/20 font-bold'
                  : 'bg-obsidian-900 text-neutral-400 hover:text-alabaster-200 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => {
            const tuition = program.pricing[currency]?.tuition || program.pricing.GHS.tuition;
            return (
              <div
                key={program.id}
                className="group glass-card rounded-md overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all duration-500 flex flex-col justify-between bg-obsidian-900/70 hover:shadow-2xl hover:shadow-gold-500/10"
              >
                <div>
                  {/* Program Cover Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={program.coverImage}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 bg-obsidian-950/80 backdrop-blur-md text-gold-400 text-[10px] font-mono uppercase tracking-wider rounded border border-gold-500/30">
                        {program.tag}
                      </span>
                      <span className="px-2.5 py-1 bg-obsidian-950/80 backdrop-blur-md text-neutral-300 text-[10px] uppercase tracking-wider rounded border border-white/10 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold-400" />
                        {program.duration.split(' ')[0]} {program.duration.split(' ')[1]}
                      </span>
                    </div>

                    {/* Accreditation Pill at Bottom of Image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-alabaster-200 bg-obsidian-950/90 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                        <Award className="w-3 h-3 text-gold-400" />
                        {program.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono">
                        {program.level}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-alabaster-100 group-hover:text-gold-300 transition-colors mt-1 leading-snug">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-300 line-clamp-3 font-light leading-relaxed">
                      {program.shortDescription}
                    </p>

                    {/* Schedule Pills */}
                    <div className="pt-2 border-t border-white/5 space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-mono">
                        Available Schedules:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {program.schedules.map((s, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5">
                            {s.type.split(' ')[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Pricing & Action Buttons */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-baseline justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] uppercase text-neutral-400 block tracking-wider">Tuition Investment</span>
                      <span className="text-xl font-serif font-bold text-gold-400">
                        {formatCurrency(tuition, currency)}
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-400">
                      Payment Plans Available
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="py-2.5 px-3 rounded-sm bg-obsidian-850 hover:bg-obsidian-800 border border-white/15 text-alabaster-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-gold-400" />
                      <span>Syllabus</span>
                    </button>

                    <button
                      onClick={() => onSelectProgramForAdmission(program.id)}
                      className="py-2.5 px-3 rounded-sm bg-gold-gradient hover:opacity-95 text-obsidian-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-md shadow-gold-500/20 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Enroll Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Detail & Syllabus Modal Drawer */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/95 backdrop-blur-2xl animate-fade-in">
          <div className="glass-card bg-obsidian-950 border border-gold-500/30 rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pb-5 sm:pb-6 border-b border-white/10 pr-8">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-gold-500/20 text-gold-400 border border-gold-500/30 text-[10px] sm:text-xs font-mono uppercase rounded">
                  {selectedProgram.tag}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {selectedProgram.duration}
                </span>
              </div>
              <h3 className="font-editorial text-xl sm:text-3xl text-alabaster-50 font-bold">
                {selectedProgram.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {selectedProgram.fullDescription}
              </p>
            </div>

            {/* Schedules and Formats */}
            <div className="py-5 sm:py-6 border-b border-white/10 space-y-3">
              <h4 className="text-xs uppercase font-mono tracking-widest text-gold-400 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Available Attendance Formats</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {selectedProgram.schedules.map((sched, idx) => (
                  <div key={idx} className="bg-obsidian-900 p-3.5 rounded border border-white/5 space-y-1">
                    <span className="text-xs font-bold text-alabaster-100 block">{sched.type}</span>
                    <span className="text-[11px] text-gold-400 block">{sched.days}</span>
                    <span className="text-[10px] text-neutral-400 block">{sched.hours}</span>
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-neutral-400 inline-block mt-1">
                      {sched.intensity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Module Breakdown */}
            <div className="py-5 sm:py-6 border-b border-white/10 space-y-3.5 sm:space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-gold-400 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Comprehensive Term-by-Term Syllabus</span>
              </h4>

              <div className="space-y-2.5 sm:space-y-3">
                {selectedProgram.modules.map((mod, idx) => (
                  <div key={idx} className="bg-obsidian-900/80 p-3.5 sm:p-4 rounded border border-white/5 space-y-2">
                    <span className="text-xs font-bold text-gold-300 font-serif block">
                      {mod.term}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-300">
                      {mod.topics.map((top, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                          <span>{top}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes & Prerequisites */}
            <div className="py-5 sm:py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs">
              <div className="space-y-2">
                <span className="text-neutral-400 uppercase tracking-wider font-mono block">
                  Career Pathways
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProgram.careerPaths.map((cp, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-200 text-[11px]">
                      {cp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-neutral-400 uppercase tracking-wider font-mono block">
                  Accredited Certification
                </span>
                <p className="text-alabaster-200 font-medium leading-relaxed">
                  {selectedProgram.certifications}
                </p>
              </div>
            </div>

            {/* Modal Bottom Action Controls */}
            <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-neutral-400 block uppercase font-mono">Total Tuition Fee</span>
                <span className="text-2xl font-serif font-bold text-gold-400">
                  {formatCurrency(selectedProgram.pricing[currency]?.tuition || selectedProgram.pricing.GHS.tuition, currency)}
                </span>
                <span className="text-[10px] text-neutral-500 block">Registration: {formatCurrency(selectedProgram.pricing[currency]?.registration || selectedProgram.pricing.GHS.registration, currency)}</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleDownloadSyllabus(selectedProgram.title)}
                  className="w-full sm:w-auto px-4 py-3 rounded bg-obsidian-850 hover:bg-obsidian-800 border border-white/15 text-alabaster-200 text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-gold-400" />
                  <span>{downloadSuccess ? 'Downloaded!' : 'Download Syllabus PDF'}</span>
                </button>

                <button
                  onClick={() => {
                    const progId = selectedProgram.id;
                    setSelectedProgram(null);
                    onSelectProgramForAdmission(progId);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 active:scale-95 shadow-xl shadow-gold-500/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Apply for this Program</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

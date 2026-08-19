import React, { useState } from 'react';
import { 
  Building, Compass, Target, Heart, Award, ShieldCheck, 
  Users, Sparkles, BookOpen, CheckCircle, ArrowRight, Home, 
  Scissors, X, ExternalLink, GraduationCap, Briefcase
} from 'lucide-react';
import { originalSiteData } from '../data/originalSiteData';

export const AboutSection = ({ onOpenAdmissions, onOpenTourModal }) => {
  const { ourStory, missionVision, managementAndFaculty, facilities } = originalSiteData;
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  return (
    <div id="about" className="bg-obsidian-950 text-alabaster-100 relative">
      
      {/* 1. Sub-Section: Our Story & CEO Address */}
      <section id="about-story" className="py-24 border-t border-white/5 relative overflow-hidden scroll-mt-24">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gold-600/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Quick Sub-Navigation Anchor Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 pb-4 border-b border-white/10">
            <a href="#about-story" className="px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono uppercase font-bold tracking-wider hover:bg-gold-500 hover:text-obsidian-950 transition-all">
              Our Story & CEO
            </a>
            <a href="#about-mission" className="px-4 py-2 rounded-full bg-obsidian-900 border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider hover:text-gold-300 hover:border-gold-500/40 transition-all">
              Mission & Vision
            </a>
            <a href="#faculty" className="px-4 py-2 rounded-full bg-obsidian-900 border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider hover:text-gold-300 hover:border-gold-500/40 transition-all">
              Faculty & Management
            </a>
            <a href="#atelier" className="px-4 py-2 rounded-full bg-obsidian-900 border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider hover:text-gold-300 hover:border-gold-500/40 transition-all">
              Facilities & Hostel
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* CEO Portrait */}
            <div className="lg:col-span-5 relative">
              <div 
                onClick={() => setSelectedFaculty(managementAndFaculty[0])}
                className="relative rounded-lg overflow-hidden border border-gold-500/30 shadow-2xl group bg-obsidian-900 cursor-pointer"
                title="Click to view full Founder profile"
              >
                <img
                  src="/assets/images/IMG_8350.JPG-scaled-e1772387379770.jpeg"
                  alt="Lesley Aidoo Mensah - Founder & CEO"
                  className="w-full h-[520px] object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent"></div>
                
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-gold-500 text-obsidian-950 font-bold text-[10px] font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-lg">
                  <span>View Dossier</span>
                  <ExternalLink className="w-3 h-3" />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] font-mono text-gold-400 uppercase tracking-widest block mb-1">FOUNDER & CEO</span>
                  <h3 className="font-editorial text-2xl text-alabaster-50">Lesley Aidoo Mensah</h3>
                  <p className="text-xs text-neutral-300 mt-1 font-light">Master Couturier & Technical Vocational Innovator</p>
                </div>
              </div>
            </div>

            {/* CEO Message & Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>OUR STORY • ESTABLISHED 2016</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl text-alabaster-50 font-normal leading-tight">
                Shaping the <span className="text-gold-gradient font-bold">Future of Fashion</span>
              </h2>

              <blockquote className="p-6 rounded-lg bg-obsidian-900/80 border-l-4 border-gold-400 text-sm sm:text-base text-gold-200/90 font-serif italic leading-relaxed">
                “As a Ghanaian institute, we are committed to shaping the next generation of ethical fashion entrepreneurs. Our certificate courses in fashion design are grounded in practical skill development and strengthened by critical and analytical thinking. We prepare our students not only to create, but to lead, innovate, and thrive responsibly in the dynamic global fashion industry.”
                <span className="block not-italic text-xs font-mono text-neutral-400 mt-2">— Lesley Aidoo Mensah, CEO</span>
              </blockquote>

              <div className="space-y-4 text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
                {ourStory.paragraphs.map((p, idx) => (
                  <p key={idx}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAdmissions}
                  className="px-6 py-3 rounded-sm bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-gold-500/20"
                >
                  <span>Apply for Next Intake</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenTourModal}
                  className="px-6 py-3 rounded-sm bg-obsidian-900 border border-white/15 text-alabaster-100 font-semibold text-xs uppercase tracking-widest hover:border-gold-400 hover:text-gold-300 transition-all cursor-pointer"
                >
                  Book Campus Tour
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Sub-Section: Mission & Vision */}
      <section id="about-mission" className="py-24 border-t border-white/5 bg-obsidian-900/40 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>INSTITUTIONAL PURPOSE</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl text-alabaster-50 font-normal tracking-tight mb-4">
              Mission & <span className="italic font-light text-neutral-400 font-serif">Vision</span>
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-gold-200 max-w-3xl mx-auto leading-relaxed">
              "{missionVision.statement}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-xl bg-obsidian-950 border border-white/10 hover:border-gold-500/40 transition-all group shadow-xl">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold block mb-2">OUR VISION</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 mb-4">Transforming Global Society</h3>
              <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                {missionVision.vision}
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-400 shrink-0" /> Ethical fashion entrepreneurship</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-400 shrink-0" /> African craftsmanship elevated globally</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-400 shrink-0" /> Industry leadership & responsible business</li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-xl bg-obsidian-950 border border-white/10 hover:border-gold-500/40 transition-all group shadow-xl">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold block mb-2">OUR MISSION</span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 mb-4">Stimulating Youth Job Creation</h3>
              <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                {missionVision.mission}
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-400 shrink-0" /> Rigorous hands-on vocational training</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-400 shrink-0" /> Critical & analytical business curriculum</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-400 shrink-0" /> TVET & NVTI certified technical diplomas</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Sub-Section: Faculty & Management (Clickable Interactive Cards) */}
      <section id="faculty" className="py-24 border-t border-white/5 bg-obsidian-950 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>THE ACADEMIC SENATE & MENTORS</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-alabaster-50 font-normal tracking-tight">
                Faculty & <span className="italic font-light text-neutral-400 font-serif">Management</span>
              </h2>
              <p className="text-neutral-300 font-light text-sm sm:text-base mt-3">
                Click any profile card below to inspect full curriculum vitae, master specialties, and courses taught.
              </p>
            </div>

            <div className="text-xs font-mono text-gold-400/80 bg-gold-500/10 px-3.5 py-2 rounded border border-gold-500/20">
              ● Click profile card to open dossier
            </div>
          </div>

          {/* Clickable Faculty Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementAndFaculty.map((member) => (
              <div 
                key={member.id}
                onClick={() => setSelectedFaculty(member)}
                className="rounded-xl bg-obsidian-900 border border-white/10 overflow-hidden hover:border-gold-500 hover:shadow-2xl hover:shadow-gold-500/15 hover:scale-[1.02] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="h-80 w-full overflow-hidden relative bg-obsidian-950">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-obsidian-950/85 border border-white/15 text-[10px] font-mono text-gold-400 uppercase font-bold">
                    {member.role}
                  </div>
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-gold-500 text-obsidian-950 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      {member.department}
                    </span>
                    <h3 className="font-editorial text-2xl text-alabaster-50 font-medium group-hover:text-gold-300 transition-colors mt-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light mt-2.5 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Specialties Pills */}
                  {member.specialties && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {member.specialties.slice(0, 2).map((spec, idx) => (
                        <span key={idx} className="text-[9.5px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300 font-mono">
                          {spec}
                        </span>
                      ))}
                      {member.specialties.length > 2 && (
                        <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-gold-500/10 text-gold-400 font-mono">
                          +{member.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="pt-3 border-t border-white/10 text-[11px] text-gold-400 font-medium flex items-center justify-between group-hover:text-gold-300">
                    <span>View Full Profile & Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Sub-Section: School Facilities & On-Campus Hostel */}
      <section id="atelier" className="py-24 border-t border-white/5 bg-obsidian-900/60 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase mb-3">
                <Building className="w-3.5 h-3.5" />
                <span>OGBOJO / EAST LEGON CAMPUS</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-alabaster-50 font-normal tracking-tight">
                School Facilities & <span className="italic font-light text-neutral-400 font-serif">Hostel</span>
              </h2>
              <p className="text-neutral-300 font-light text-sm sm:text-base mt-3">
                Modern sewing and production studios, precision cutting lofts, digital classrooms, and safe on-campus accommodation.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenTourModal}
                className="px-6 py-3 rounded-sm bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-gold-500/20"
              >
                <Building className="w-4 h-4" />
                <span>Book In-Person Tour</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((fac) => (
              <div 
                key={fac.id}
                className="rounded-xl bg-obsidian-950 border border-white/10 overflow-hidden hover:border-gold-500/40 transition-all group flex flex-col justify-between shadow-xl"
              >
                <div className="h-72 w-full overflow-hidden relative">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-obsidian-950/85 border border-white/15 text-[11px] font-mono text-gold-400 uppercase font-bold">
                    {fac.subtitle}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-editorial text-2xl text-alabaster-50 font-normal mb-3">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {fac.description}
                    </p>
                  </div>

                  {fac.id === 'student-hostel' && (
                    <div className="p-4 rounded bg-gold-500/10 border border-gold-500/25 text-xs text-gold-200">
                      <span className="font-bold block text-gold-300 mb-1">Hostel Rate & Terms:</span>
                      GHC 6,000 per academic year. Convenient living space next to studios. Utilities billed separately.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Luxury Faculty Profile Dossier Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/92 backdrop-blur-2xl animate-fade-in">
          <div className="bg-obsidian-900 border border-gold-500/40 rounded-xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Photo & Badge */}
              <div className="sm:col-span-5 space-y-3">
                <div className="rounded-lg overflow-hidden border border-gold-500/30 shadow-xl bg-obsidian-950 aspect-[3/4]">
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-3 rounded bg-obsidian-950 border border-white/10 text-center">
                  <span className="text-[10px] font-mono text-gold-400 uppercase font-bold block">
                    {selectedFaculty.experience}
                  </span>
                </div>
              </div>

              {/* Dossier Information */}
              <div className="sm:col-span-7 space-y-4">
                <div>
                  <span className="px-2.5 py-1 rounded bg-gold-500/10 border border-gold-500/30 text-gold-400 font-mono text-[10px] uppercase font-bold tracking-wider inline-block mb-2">
                    {selectedFaculty.role}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50">
                    {selectedFaculty.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    {selectedFaculty.department}
                  </p>
                </div>

                <div className="p-3.5 rounded bg-white/5 border border-white/10 text-xs text-gold-300/90 font-mono flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{selectedFaculty.credentials}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block font-bold">
                    BIOGRAPHY & ACADEMIC LEADERSHIP
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {selectedFaculty.bio}
                  </p>
                </div>

                {selectedFaculty.message && (
                  <blockquote className="p-3.5 rounded bg-gold-500/5 border-l-2 border-gold-400 text-xs text-gold-200/90 italic">
                    "{selectedFaculty.message}"
                  </blockquote>
                )}

                {/* Specialties */}
                {selectedFaculty.specialties && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block font-bold flex items-center gap-1.5">
                      <Scissors className="w-3 h-3 text-gold-400" />
                      <span>AREAS OF INSTRUCTION & MASTERY</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedFaculty.specialties.map((spec, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded bg-obsidian-950 border border-gold-500/20 text-neutral-200 font-mono">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Courses Taught */}
                {selectedFaculty.coursesTaught && (
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block font-bold flex items-center gap-1.5">
                      <GraduationCap className="w-3 h-3 text-gold-400" />
                      <span>CURRICULUM MODULES</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedFaculty.coursesTaught.map((c, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gold-300 font-mono">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedFaculty(null)}
                className="px-5 py-2.5 text-xs text-neutral-400 hover:text-white rounded border border-white/10 cursor-pointer"
              >
                Close Dossier
              </button>
              <button
                onClick={() => {
                  setSelectedFaculty(null);
                  onOpenAdmissions();
                }}
                className="px-6 py-2.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Apply to Study Under Faculty</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

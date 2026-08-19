import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sparkles, ChevronDown, ChevronRight,
  ArrowRight, Phone, MessageSquare, Compass, Award, BookOpen, 
  GraduationCap, MapPin, Building, Users, Calendar, Image as ImageIcon,
  Lock, ExternalLink, Globe
} from 'lucide-react';
import { Logo } from './Logo';
import { getIntakeCountdowns } from '../utils/formatters';

export const Navbar = ({ 
  currency, 
  setCurrency, 
  onOpenAdmissions, 
  onOpenTourModal,
  onOpenPortalModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [empowermentDropdownOpen, setEmpowermentDropdownOpen] = useState(false);

  // Mobile Accordion States
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileEmpowerOpen, setMobileEmpowerOpen] = useState(false);

  const countdowns = getIntakeCountdowns();

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (hash) => {
    setMobileMenuOpen(false);
    if (hash.startsWith('#')) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-obsidian-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
        
        {/* Top Luxury Announcement Ribbon */}
        <aside aria-label="Admissions Announcement" className="bg-obsidian-900/90 border-b border-white/5 text-alabaster-200 text-[10.5px] sm:text-[11px] py-1 px-3 sm:px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 truncate">
              <span className="flex h-1.5 w-1.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-500"></span>
              </span>
              <span className="text-gold-400 font-bold tracking-wider uppercase text-[9.5px] sm:text-[10px] shrink-0">
                ADMISSIONS OPEN:
              </span>
              <span className="text-neutral-300 text-[10px] sm:text-[11px] truncate">
                Sept 2026 ({countdowns.septemberDays}d left) & Jan 2027
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-neutral-400 text-[10px] sm:text-[11px] shrink-0">
              <button 
                onClick={onOpenPortalModal}
                className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer text-gold-300 font-mono font-semibold"
              >
                <Lock className="w-2.5 h-2.5 text-gold-400" />
                <span className="hidden xs:inline">Portal</span>
                <span className="xs:hidden">Login</span>
              </button>
              <span className="text-white/10 hidden sm:inline">|</span>
              <button 
                onClick={onOpenTourModal}
                className="hover:text-gold-400 transition-colors hidden sm:flex items-center gap-1 cursor-pointer"
              >
                <MapPin className="w-2.5 h-2.5 text-gold-500" />
                <span>Book Tour</span>
              </button>
              <span className="text-white/10 hidden md:inline">|</span>
              <a 
                href="https://wa.me/233240187828?text=Hello%20Afra%20K%20Fashion%20School,%20I%20would%20like%20to%20inquire%20about%20admissions" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors hidden md:flex items-center gap-1 text-emerald-400"
              >
                <MessageSquare className="w-2.5 h-2.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Navigation Bar */}
        <div className="py-2.5 px-3 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
            
            {/* Official Brand Logo & Crest */}
            <a href="#" className="shrink-0 group">
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links (Lg & Above) */}
            <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4 2xl:gap-5">
              <a href="#" className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 relative font-medium group whitespace-nowrap">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <a
                  href="#about"
                  className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 flex items-center gap-1 font-medium group cursor-pointer whitespace-nowrap"
                >
                  <span>About Us</span>
                  <ChevronDown className="w-2.5 h-2.5 text-neutral-400 group-hover:text-gold-400 transition-transform" />
                </a>

                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-60 bg-obsidian-950 border border-gold-500/30 rounded-md shadow-2xl py-1.5 z-50 animate-fade-in space-y-0.5">
                    <a 
                      href="#about-story" 
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block px-3.5 py-1.5 text-xs text-alabaster-100 hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
                    >
                      <span className="font-semibold block text-[11px]">Our Story & CEO Message</span>
                      <span className="text-[9px] text-neutral-400">10-Year Journey & Vision</span>
                    </a>
                    <a 
                      href="#about-mission" 
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block px-3.5 py-1.5 text-xs text-alabaster-100 hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
                    >
                      <span className="font-semibold block text-[11px]">Mission & Vision</span>
                      <span className="text-[9px] text-neutral-400">Ethical Fashion Leadership</span>
                    </a>
                    <a 
                      href="#faculty" 
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block px-3.5 py-1.5 text-xs text-alabaster-100 hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
                    >
                      <span className="font-semibold block text-[11px]">Faculty & Management</span>
                      <span className="text-[9px] text-neutral-400">Lesley Aidoo, Bethel & Amoo</span>
                    </a>
                    <a 
                      href="#atelier" 
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block px-3.5 py-1.5 text-xs text-alabaster-100 hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
                    >
                      <span className="font-semibold block text-[11px]">School Facilities & Hostel</span>
                      <span className="text-[9px] text-neutral-400">Studios, Lofts & Accommodation</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Admissions Link */}
              <a href="#admissions" className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 relative font-medium group whitespace-nowrap">
                Admissions
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Programs Link */}
              <a href="#programs" className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 relative font-medium group whitespace-nowrap">
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Tuition Calculator Link */}
              <a href="#tuition" className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 relative font-medium group whitespace-nowrap">
                Tuition
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Empowerment Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setEmpowermentDropdownOpen(true)}
                onMouseLeave={() => setEmpowermentDropdownOpen(false)}
              >
                <a
                  href="#scholarships"
                  className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 flex items-center gap-1 font-medium group cursor-pointer whitespace-nowrap"
                >
                  <span>Empowerment</span>
                  <ChevronDown className="w-2.5 h-2.5 text-neutral-400 group-hover:text-gold-400 transition-transform" />
                </a>

                {empowermentDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-obsidian-950 border border-gold-500/30 rounded-md shadow-2xl py-1.5 z-50 animate-fade-in space-y-0.5">
                    <a 
                      href="#scholarships" 
                      onClick={() => setEmpowermentDropdownOpen(false)}
                      className="block px-3.5 py-1.5 text-xs text-alabaster-100 hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
                    >
                      <span className="font-semibold block text-[11px]">Founder's Scholarship Programme</span>
                      <span className="text-[9px] text-neutral-400">Full Tuition & Mentorship</span>
                    </a>
                    <a 
                      href="#scholarships" 
                      onClick={() => setEmpowermentDropdownOpen(false)}
                      className="block px-3.5 py-1.5 text-xs text-alabaster-100 hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
                    >
                      <span className="font-semibold block text-[11px]">10-Year Scholarship Initiative</span>
                      <span className="text-[9px] text-neutral-400">Decade of Excellence Grants</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Alumni */}
              <a href="#alumni" className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 relative font-medium group whitespace-nowrap">
                Alumni
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* News & Events */}
              <a href="#news" className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 relative font-medium group whitespace-nowrap">
                News & Events
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Gallery */}
              <a href="#gallery" className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 relative font-medium group whitespace-nowrap">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Contact */}
              <a href="#contact" className="text-[11px] xl:text-xs uppercase tracking-[0.08em] text-neutral-300 hover:text-gold-400 transition-colors py-1 relative font-medium group whitespace-nowrap">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop Actions (Currency & Apply Button) */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
              <div className="relative">
                <button
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className="flex items-center gap-1 text-[11px] text-neutral-300 bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 px-2 py-1.5 rounded-sm transition-colors cursor-pointer"
                  title="Select Currency"
                >
                  <span className="font-mono text-gold-400 font-semibold">{currency}</span>
                  <ChevronDown className="w-2.5 h-2.5 text-neutral-400" />
                </button>

                {currencyDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-24 bg-obsidian-900 border border-white/15 rounded shadow-2xl py-1 z-50 animate-fade-in">
                    {['GHS', 'USD', 'EUR', 'GBP'].map((curr) => (
                      <button
                        key={curr}
                        onClick={() => {
                          setCurrency(curr);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1 text-[10px] font-mono transition-colors flex items-center justify-between cursor-pointer ${
                          currency === curr 
                            ? 'bg-gold-500/20 text-gold-400 font-bold' 
                            : 'text-neutral-300 hover:bg-white/5'
                        }`}
                      >
                        <span>{curr}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={onOpenAdmissions}
                className="relative group overflow-hidden px-3.5 py-1.5 rounded-sm bg-gold-gradient text-obsidian-950 font-bold text-[10.5px] uppercase tracking-[0.1em] shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
              >
                <Sparkles className="w-3 h-3" />
                <span>Apply Online</span>
                <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Header Controls: Quick Apply Button + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenAdmissions}
                className="px-2.5 py-1.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-sm sm:hidden"
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span>Apply</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg bg-obsidian-900 border border-white/15 text-gold-400 hover:text-white hover:border-gold-500/50 cursor-pointer transition-all active:scale-95"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-gold-300" /> : <Menu className="w-5 h-5 text-gold-400" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Modern Touch-Optimized Mobile Navigation Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden animate-fade-in flex flex-col">
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer Container */}
          <div className="relative z-10 w-full h-full bg-obsidian-950/98 backdrop-blur-2xl border-l border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* Drawer Header with Logo and Close */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-obsidian-900/90">
              <div onClick={() => handleMobileNavClick('#')} className="cursor-pointer">
                <Logo size="sm" />
              </div>

              <div className="flex items-center gap-2">
                {/* Currency selector chips */}
                <div className="flex bg-obsidian-950 p-0.5 rounded border border-white/10">
                  {['GHS', 'USD'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                        currency === c ? 'bg-gold-500 text-obsidian-950 shadow' : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-gold-400 transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Navigation Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-1.5 divide-y divide-white/5">
              
              {/* Home */}
              <div className="pt-1">
                <button
                  onClick={() => handleMobileNavClick('#')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

              {/* About Us Accordion */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span>About Us</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 font-mono font-normal">4 Areas</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileAboutOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-gold-500/30 ml-3 mt-1 animate-fade-in bg-white/[0.02] rounded-r">
                    <button
                      onClick={() => handleMobileNavClick('#about-story')}
                      className="w-full text-left py-2 px-2 text-xs text-neutral-300 hover:text-gold-300 flex items-center justify-between"
                    >
                      <span>Our Story & CEO Message</span>
                      <span className="text-[9px] text-neutral-500 font-mono">10 Yrs</span>
                    </button>
                    <button
                      onClick={() => handleMobileNavClick('#about-mission')}
                      className="w-full text-left py-2 px-2 text-xs text-neutral-300 hover:text-gold-300 flex items-center justify-between"
                    >
                      <span>Mission & Vision</span>
                      <span className="text-[9px] text-neutral-500 font-mono">Ethics</span>
                    </button>
                    <button
                      onClick={() => handleMobileNavClick('#faculty')}
                      className="w-full text-left py-2 px-2 text-xs text-neutral-300 hover:text-gold-300 flex items-center justify-between"
                    >
                      <span>Faculty & Management</span>
                      <span className="text-[9px] text-neutral-500 font-mono">Mentors</span>
                    </button>
                    <button
                      onClick={() => handleMobileNavClick('#atelier')}
                      className="w-full text-left py-2 px-2 text-xs text-neutral-300 hover:text-gold-300 flex items-center justify-between"
                    >
                      <span>School Facilities & Hostel</span>
                      <span className="text-[9px] text-neutral-500 font-mono">Studios</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Admissions */}
              <div className="pt-1">
                <button
                  onClick={() => handleMobileNavClick('#admissions')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span>Admissions & Fees</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold">2026/2027</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

              {/* Programs */}
              <div className="pt-1">
                <button
                  onClick={() => handleMobileNavClick('#programs')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span>Programs & Curriculum</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

              {/* Tuition Calculator */}
              <div className="pt-1">
                <button
                  onClick={() => handleMobileNavClick('#tuition')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span>Tuition Calculator</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

              {/* Empowerment Accordion */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileEmpowerOpen(!mobileEmpowerOpen)}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span>Empowerment & Grants</span>
                  <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform duration-200 ${mobileEmpowerOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileEmpowerOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-gold-500/30 ml-3 mt-1 animate-fade-in bg-white/[0.02] rounded-r">
                    <button
                      onClick={() => handleMobileNavClick('#scholarships')}
                      className="w-full text-left py-2 px-2 text-xs text-neutral-300 hover:text-gold-300"
                    >
                      Founder's Scholarship Programme
                    </button>
                    <button
                      onClick={() => handleMobileNavClick('#scholarships')}
                      className="w-full text-left py-2 px-2 text-xs text-neutral-300 hover:text-gold-300"
                    >
                      10-Year Anniversary Scholarship
                    </button>
                  </div>
                )}
              </div>

              {/* Alumni */}
              <div className="pt-1">
                <button
                  onClick={() => handleMobileNavClick('#alumni')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span>Alumni & Runway Brands</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

              {/* News & Events */}
              <div className="pt-1">
                <button
                  onClick={() => handleMobileNavClick('#news')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span>News & Events</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

              {/* Gallery */}
              <div className="pt-1">
                <button
                  onClick={() => handleMobileNavClick('#gallery')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span>Gallery & Graduation Shows</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

              {/* Contact */}
              <div className="pt-1">
                <button
                  onClick={() => handleMobileNavClick('#contact')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-alabaster-100 hover:bg-gold-500/10 hover:text-gold-300 flex items-center justify-between"
                >
                  <span>Contact & Campus Location</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              </div>

            </div>

            {/* Fixed Drawer Bottom CTA Actions */}
            <div className="p-4 border-t border-white/10 bg-obsidian-900/95 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortalModal();
                  }}
                  className="py-2.5 px-3 rounded bg-obsidian-950 border border-gold-500/30 text-gold-300 font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Portal Login</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTourModal();
                  }}
                  className="py-2.5 px-3 rounded bg-obsidian-950 border border-white/10 text-neutral-300 text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Book Tour</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="w-full py-3.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-gold-500/25 active:scale-[0.98] transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                <span>Apply for 2026/2027 Admissions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center pt-1">
                <span className="text-[10px] text-neutral-500 font-mono">
                  Hotlines: 0240187828 • 0507653685
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

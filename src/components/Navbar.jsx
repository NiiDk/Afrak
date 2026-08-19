import React, { useState } from 'react';
import { 
  Menu, X, Sparkles, ChevronDown, 
  ArrowRight, Phone, MessageSquare, Compass, Award, BookOpen, 
  GraduationCap, MapPin, Building, Users, Calendar, Image as ImageIcon,
  Lock, ExternalLink
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
  const countdowns = getIntakeCountdowns();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-obsidian-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
      
      {/* Top Luxury Announcement Ribbon */}
      <aside aria-label="Admissions Announcement" className="bg-obsidian-900/90 border-b border-white/5 text-alabaster-200 text-[11px] py-1 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-500"></span>
            </span>
            <span className="text-gold-400 font-bold tracking-wider uppercase text-[10px]">
              ADMISSIONS OPEN 2026/2027:
            </span>
            <span className="hidden sm:inline text-neutral-300 text-[11px]">
              September 2026 ({countdowns.septemberDays} days left) & January 2027 Intakes
            </span>
            <span className="sm:hidden text-neutral-300 text-[10px]">
              Sept 2026 ({countdowns.septemberDays}d) & Jan 2027
            </span>
          </div>

          <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
            <button 
              onClick={onOpenPortalModal}
              className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer text-gold-300 font-mono font-semibold"
            >
              <Lock className="w-2.5 h-2.5 text-gold-400" />
              <span>Portal Login</span>
            </button>
            <span className="text-white/10 hidden sm:inline">|</span>
            <button 
              onClick={onOpenTourModal}
              className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <MapPin className="w-2.5 h-2.5 text-gold-500" />
              <span className="hidden md:inline">Ogbojo Campus —</span> Book Tour
            </button>
            <span className="text-white/10 hidden sm:inline">|</span>
            <a 
              href="https://wa.me/233240187828?text=Hello%20Afra%20K%20Fashion%20School,%20I%20would%20like%20to%20inquire%20about%20admissions" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <MessageSquare className="w-2.5 h-2.5 text-emerald-400" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Luxury Navigation Bar */}
      <header className="py-2.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Official Brand Logo & Crest */}
          <a href="#" className="shrink-0">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links matching the original site */}
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

          {/* Right Action Suite: Currency & Apply Button */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Currency Selector */}
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

            {/* Apply Online Primary Button */}
            <button
              onClick={onOpenAdmissions}
              className="relative group overflow-hidden px-3.5 py-1.5 rounded-sm bg-gold-gradient text-obsidian-950 font-bold text-[10.5px] uppercase tracking-[0.1em] shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3" />
              <span>Apply Online</span>
              <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-200 hover:text-gold-400 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[75px] z-40 bg-obsidian-950/98 backdrop-blur-2xl border-t border-white/10 p-5 flex flex-col justify-between overflow-y-auto lg:hidden animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-gold-400 font-bold">Currency</span>
              <div className="flex gap-1.5">
                {['GHS', 'USD', 'EUR', 'GBP'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2 py-0.5 text-xs rounded font-mono ${
                      currency === curr 
                        ? 'bg-gold-500 text-obsidian-950 font-bold' 
                        : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <nav className="flex flex-col space-y-2.5 text-xs">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Home</a>
              <a href="#about-story" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Our Story & CEO Message</a>
              <a href="#about-mission" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Mission & Vision</a>
              <a href="#faculty" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Faculty & Management</a>
              <a href="#atelier" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">School Facilities & Hostel</a>
              <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Admissions (Sept 2026 / Jan 2027)</a>
              <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Programs & Curriculum</a>
              <a href="#tuition" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Tuition Calculator</a>
              <a href="#scholarships" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Empowerment & Scholarships</a>
              <a href="#alumni" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Alumni Network & Brands</a>
              <a href="#news" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">News & Events</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Gallery & Graduation</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-alabaster-100 font-serif py-0.5">Contact Us</a>
            </nav>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortalModal();
              }}
              className="w-full py-2 rounded bg-obsidian-850 border border-gold-500/40 text-gold-300 font-mono text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <Lock className="w-3 h-3" />
              <span>Student & Staff Portal Login</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissions();
              }}
              className="w-full py-2.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-gold-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for Admissions</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

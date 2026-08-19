import React, { useState } from 'react';
import { 
  Sparkles, Award, ShieldCheck, Mail, ArrowRight, 
  MapPin, Phone, MessageSquare, Download, Check
} from 'lucide-react';
import { Logo } from './Logo';

export const Footer = ({ onOpenAdmissions, onOpenTourModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-obsidian-950 text-alabaster-100 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Prospectus Download Banner */}
        <div className="glass-card p-8 sm:p-12 rounded-xl border border-gold-500/25 bg-gradient-to-r from-obsidian-900 via-obsidian-950 to-obsidian-900 shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400">
                AFRA K 2026/2027 PROSPECTUS
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 font-bold">
                Download the Complete Haute Couture Curriculum Pack
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light">
                Receive the full module syllabus, fee schedules, TVET accreditation guidelines, and student lookbook.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-obsidian-900 border border-white/20 focus:border-gold-400 rounded px-4 py-3 text-xs text-alabaster-100 placeholder:text-neutral-500 outline-none flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-gold-500/20 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Get PDF</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Established in 2016 in Accra, Ghana. Accredited by CTVET and affiliated to Ghana TVET Services (NVTI). Empowering Africa’s next generation of master pattern engineers, couturiers, and fashion business moguls.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500/20 hover:text-gold-400 flex items-center justify-center text-neutral-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500/20 hover:text-gold-400 flex items-center justify-center text-neutral-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://wa.me/233240187828"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 flex items-center justify-center text-neutral-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              Programs & Degrees
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li><a href="#programs" className="hover:text-gold-300 transition-colors">18-Month Foundational Diploma</a></li>
              <li><a href="#programs" className="hover:text-gold-300 transition-colors">6-Month Studio Mastery</a></li>
              <li><a href="#programs" className="hover:text-gold-300 transition-colors">Haute Corsetry & Bridal</a></li>
              <li><a href="#programs" className="hover:text-gold-300 transition-colors">Bespoke Menswear & Kaftans</a></li>
              <li><a href="#programs" className="hover:text-gold-300 transition-colors">3D CLO Digital Fashion Tech</a></li>
              <li><a href="#programs" className="hover:text-gold-300 transition-colors">Fashion Business Accelerator</a></li>
              <li><a href="#programs" className="hover:text-gold-300 transition-colors">Weekend Executive Masterclasses</a></li>
            </ul>
          </div>

          {/* Institutional Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              Institutional
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li><a href="#heritage" className="hover:text-gold-300 transition-colors">Founder Lesley Aidoo Mensah</a></li>
              <li><a href="#heritage" className="hover:text-gold-300 transition-colors">Master Faculty & Mentors</a></li>
              <li><a href="#atelier" className="hover:text-gold-300 transition-colors">Ogbojo Campus Facilities</a></li>
              <li><a href="#scholarships" className="hover:text-gold-300 transition-colors">10-Year Scholarship Fund</a></li>
              <li><a href="#scholarships" className="hover:text-gold-300 transition-colors">Founder's Creative Grant</a></li>
              <li><a href="#lookbook" className="hover:text-gold-300 transition-colors">The Fashion Effect Runway</a></li>
              <li><a href="#journal" className="hover:text-gold-300 transition-colors">The Afrak Gazette</a></li>
            </ul>
          </div>

          {/* Admissions & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              Admissions
            </h4>
            <div className="space-y-2 text-xs text-neutral-400 font-light">
              <p className="text-neutral-300">
                <strong className="text-white block">Intakes:</strong>
                September 2026 & January 2027
              </p>
              <p>
                <strong className="text-white block">Hotlines:</strong>
                +233 24 018 7828 <br />
                +233 50 765 3685
              </p>
              <p>
                <strong className="text-white block">Location:</strong>
                L154 Otinshie GBE Rd, GD-133-4338, Ogbojo / ARS, East Legon, Accra
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenAdmissions}
                  className="text-xs text-gold-400 font-bold uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Apply for Enrollment</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Afra K Fashion School. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              CTVET Accredited (Council for Technical & Vocational Education & Training)
            </span>
            <span>•</span>
            <span>NVTI Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

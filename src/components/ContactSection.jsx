import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, MessageSquare, Clock, 
  Send, CheckCircle2, Sparkles, Building, ArrowUpRight
} from 'lucide-react';

export const ContactSection = ({ onOpenTourModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Program Admissions Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-obsidian-900/80 text-alabaster-100 relative overflow-hidden border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>CAMPUS LOCATION & CONCIERGE</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-alabaster-50 font-normal">
            Visit the Atelier <br />
            <span className="text-gold-gradient font-bold">& Begin Your Legacy</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed">
            Our admissions directors and faculty advisors are on standby to evaluate your career goals, schedule private campus tours, and review portfolio materials.
          </p>
        </div>

        {/* Contact Info & Interactive Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Campus Cards & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Physical Address Card */}
            <div className="glass-card p-6 sm:p-8 rounded-lg border border-gold-500/30 bg-obsidian-950/90 shadow-2xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 border border-gold-500/40">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-alabaster-100 text-base">East Legon / Ogbojo Campus</h3>
                  <span className="text-[10px] text-gold-400 font-mono uppercase tracking-wider">Accra, Ghana</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Street Address:</strong>
                    <span>L154, Otinshie GBE Rd, Ogbojo (Near ARS Roundabout)</span>
                    <span className="text-neutral-400 block font-mono text-[11px]">Digital GPS: GD-133-4338</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Atelier & Office Hours:</strong>
                    <span>Monday – Friday: 8:30 AM – 5:00 PM</span>
                    <span className="block text-neutral-400">Saturday: 9:00 AM – 4:30 PM (Weekend Classes)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenTourModal}
                  className="w-full py-2.5 rounded bg-obsidian-850 hover:bg-obsidian-800 border border-white/15 text-alabaster-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Book In-Person Campus Walkthrough</span>
                </button>
              </div>
            </div>

            {/* Direct Lines & Hotlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+233240187828"
                className="glass-card p-5 rounded-lg border border-white/10 hover:border-gold-500/40 transition-all bg-obsidian-950 flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-gold-500/20 text-gold-400 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block">Primary Hotline</span>
                  <span className="text-xs font-mono font-bold text-alabaster-100 group-hover:text-gold-300 transition-colors">
                    +233 24 018 7828
                  </span>
                </div>
              </a>

              <a
                href="tel:+233507653685"
                className="glass-card p-5 rounded-lg border border-white/10 hover:border-gold-500/40 transition-all bg-obsidian-950 flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-gold-500/20 text-gold-400 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block">Secondary Line</span>
                  <span className="text-xs font-mono font-bold text-alabaster-100 group-hover:text-gold-300 transition-colors">
                    +233 50 765 3685
                  </span>
                </div>
              </a>
            </div>

            {/* Direct WhatsApp Concierge Button */}
            <a
              href="https://wa.me/233240187828?text=Hello%20Afra%20K%20Fashion%20School,%20I%20would%20like%20to%20inquire%20about%20admissions"
              target="_blank"
              rel="noreferrer"
              className="w-full p-4 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Directly with Admissions on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>

          {/* Right Column: Interactive Direct Inquiry Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-lg border border-white/10 bg-obsidian-950 shadow-2xl">
              <div className="space-y-1 pb-6 border-b border-white/10 mb-6">
                <span className="text-xs uppercase font-mono text-gold-400 tracking-wider">Direct Concierge Form</span>
                <h3 className="font-editorial text-2xl text-alabaster-50 font-bold">Send an Official Inquiry</h3>
                <p className="text-xs text-neutral-400 font-light">
                  Receive personalized course recommendations and prospectus packs within 24 hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-mono text-neutral-300 block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Nana Aba Mensah"
                        className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3.5 sm:p-3 text-sm sm:text-xs text-alabaster-100 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-mono text-neutral-300 block mb-1.5">
                        WhatsApp Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +233 24 018 7828"
                        className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3.5 sm:p-3 text-sm sm:text-xs text-alabaster-100 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-mono text-neutral-300 block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3.5 sm:p-3 text-sm sm:text-xs text-alabaster-100 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-mono text-neutral-300 block mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3.5 sm:p-3 text-sm sm:text-xs text-alabaster-100 outline-none"
                      >
                        <option value="Program Admissions Inquiry">18-Month Foundational Diploma</option>
                        <option value="6-Month Studio Course">6-Month Studio Accelerated</option>
                        <option value="Corsetry & Bridal Masterclass">Haute Corsetry & Bridal Arts</option>
                        <option value="3D CLO Digital Fashion">3D CLO Digital Fashion Tech</option>
                        <option value="10-Year Scholarship Application">10-Year Scholarship Application</option>
                        <option value="Private 1-on-1 Atelier Coaching">Private 1-on-1 Atelier Coaching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-mono text-neutral-300 block mb-1.5">
                      Your Message or Specific Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your background, career goals, or schedule preferences..."
                      className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3.5 sm:p-3 text-sm sm:text-xs text-alabaster-100 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-gold-500/20 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Admissions Desk</span>
                  </button>
                </form>
              ) : (
                <div className="py-8 space-y-4 text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center mx-auto text-gold-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-alabaster-100 font-bold">Message Received</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto font-light">
                    Thank you, {formData.name}. Our admissions desk has received your note and will reach out via WhatsApp at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-gold-400 underline font-mono cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

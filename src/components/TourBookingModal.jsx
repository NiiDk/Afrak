import React, { useState } from 'react';
import { 
  X, Calendar, Clock, MapPin, Video, CheckCircle2, 
  Sparkles, MessageSquare, ArrowRight, ShieldCheck, Phone
} from 'lucide-react';
import { saveSubmission } from '../utils/submissionsManager';

export const TourBookingModal = ({ isOpen, onClose }) => {
  const [tourType, setTourType] = useState('in-person'); // in-person or virtual
  const [selectedDate, setSelectedDate] = useState('2026-08-25');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const timeSlots = ['10:00 AM', '11:30 AM', '1:30 PM', '3:00 PM', '4:30 PM'];

  const handleBook = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const tourId = `AFK-TOUR-${Math.floor(1000 + Math.random() * 9000)}`;

    saveSubmission({
      id: tourId,
      type: 'tour',
      applicantName: name,
      phone: phone,
      email: email,
      tourType: tourType === 'in-person' ? 'In-Person Studio Tour (East Legon)' : 'Virtual 1-on-1 Portfolio Assessment',
      selectedDate: selectedDate,
      selectedTime: selectedTime,
      status: 'New'
    });

    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/95 backdrop-blur-2xl animate-fade-in">
      <div className="glass-card bg-obsidian-950 border border-gold-500/35 rounded-xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <form onSubmit={handleBook} className="space-y-6">
            <div className="space-y-2 pb-4 border-b border-white/10">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] uppercase font-mono tracking-widest">
                <Calendar className="w-3 h-3" />
                <span>PRIVATE CONSULTATION & STUDIO TOUR</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 font-bold">
                Experience the Atelier
              </h3>
              <p className="text-xs text-neutral-300 font-light">
                Meet our master instructors, inspect student cutting lofts, and discuss your career trajectory.
              </p>
            </div>

            {/* Visit Type Selector */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-mono text-neutral-300 block">
                Select Consultation Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTourType('in-person')}
                  className={`p-3 rounded border text-left transition-all cursor-pointer ${
                    tourType === 'in-person'
                      ? 'bg-gold-500/20 border-gold-400 text-alabaster-100'
                      : 'bg-obsidian-900 border-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-gold-400 mb-1.5" />
                  <span className="text-xs font-bold block">In-Person Studio Tour</span>
                  <span className="text-[10px] text-neutral-400 block">Ogbojo, East Legon, Accra</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTourType('virtual')}
                  className={`p-3 rounded border text-left transition-all cursor-pointer ${
                    tourType === 'virtual'
                      ? 'bg-gold-500/20 border-gold-400 text-alabaster-100'
                      : 'bg-obsidian-900 border-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Video className="w-4 h-4 text-gold-400 mb-1.5" />
                  <span className="text-xs font-bold block">Virtual Zoom Session</span>
                  <span className="text-[10px] text-neutral-400 block">Global / Diaspora Applicants</span>
                </button>
              </div>
            </div>

            {/* Preferred Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-08-20"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-2.5 text-xs text-alabaster-100 outline-none"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  Select Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-2.5 text-xs text-alabaster-100 outline-none"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts} className="bg-obsidian-900">
                      {ts}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Candidate Details */}
            <div className="space-y-3">
              <div>
                <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ama Darko"
                  className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-2.5 text-xs text-alabaster-100 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+233 24 018 7828"
                    className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-2.5 text-xs text-alabaster-100 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-mono text-neutral-300 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-2.5 text-xs text-alabaster-100 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-gold-500/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Studio Appointment</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="py-6 space-y-6 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center mx-auto text-gold-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono text-gold-400 tracking-widest block">
                APPOINTMENT RESERVED
              </span>
              <h3 className="font-editorial text-2xl text-alabaster-50 font-bold">
                We Look Forward to Welcoming You, {name}!
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Your private studio session has been logged on {selectedDate} at {selectedTime}.
              </p>
            </div>

            <div className="bg-obsidian-900 p-4 rounded border border-gold-500/20 text-xs text-left space-y-2 font-mono">
              <div className="flex justify-between text-neutral-300">
                <span>Format:</span>
                <span className="text-gold-400 font-bold">{tourType === 'in-person' ? 'Campus Studio Walkthrough' : 'Virtual Zoom Session'}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Date & Time:</span>
                <span className="text-white">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Location:</span>
                <span className="text-white">L154 Otinshie GBE Rd, Ogbojo / ARS Rdbt</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/233240187828?text=Hello%20Afra%20K,%20I%20have%20booked%20a%20studio%20tour%20for%20${encodeURIComponent(name)}%20on%20${selectedDate}%20at%20${selectedTime}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

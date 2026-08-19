import React, { useState } from 'react';
import { Lock, User, Key, ArrowRight, X, ShieldAlert, GraduationCap, Building2 } from 'lucide-react';
import { Logo } from './Logo';

export const PortalModal = ({ isOpen, onClose }) => {
  const [portalType, setPortalType] = useState('student');
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoNotice, setDemoNotice] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDemoNotice(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-xl animate-fade-in">
      <div className="bg-obsidian-900 border border-gold-500/40 rounded-lg max-w-md w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Logo variant="crest" size="sm" />
          </div>
          <h3 className="font-editorial text-2xl text-alabaster-50">
            Institutional Portal Login
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Afra K Academic Information & Assessment System
          </p>
        </div>

        {/* Portal Role Toggle */}
        <div className="flex rounded-md bg-obsidian-950 p-1 border border-white/10">
          <button
            type="button"
            onClick={() => {
              setPortalType('student');
              setDemoNotice(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded transition-all flex items-center justify-center gap-2 cursor-pointer ${
              portalType === 'student'
                ? 'bg-gold-500 text-obsidian-950 font-bold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Portal</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setPortalType('staff');
              setDemoNotice(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded transition-all flex items-center justify-center gap-2 cursor-pointer ${
              portalType === 'staff'
                ? 'bg-gold-500 text-obsidian-950 font-bold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Staff / Faculty</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
              {portalType === 'student' ? 'Student ID / Reg Number' : 'Staff Email / Employee Code'}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder={portalType === 'student' ? 'e.g. AFK-2026-0412' : 'e.g. staff@afrakfashionschool.com'}
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full bg-obsidian-950 border border-white/15 rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
              />
              <User className="w-4 h-4 text-neutral-500 absolute right-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
              Security PIN / Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="••••••••"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full bg-obsidian-950 border border-white/15 rounded px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
              />
              <Key className="w-4 h-4 text-neutral-500 absolute right-3 top-2.5" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-neutral-400">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" className="rounded bg-obsidian-950 border-white/20 text-gold-500" />
              <span>Remember Device</span>
            </label>
            <a href="https://wa.me/233240187828?text=Reset%20Portal%20PIN" target="_blank" rel="noreferrer" className="text-gold-400 hover:underline">
              Forgot PIN?
            </a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
          >
            {isSubmitting ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                <span>Sign In To Portal</span>
              </>
            )}
          </button>
        </form>

        {demoNotice && (
          <div className="p-3.5 rounded bg-gold-500/10 border border-gold-500/30 text-xs text-gold-300 space-y-1">
            <span className="font-bold block">Portal Gateway Active:</span>
            <p className="text-[11px] text-neutral-300">
              Welcome back. Enrolled students and faculty credentials are authenticated through the central Ghana TVET registrar database.
            </p>
          </div>
        )}

        <div className="pt-2 text-center text-[10px] text-neutral-500 font-mono">
          CTVET & NVTI Secure Authentication Protocol 2026/2027
        </div>
      </div>
    </div>
  );
};

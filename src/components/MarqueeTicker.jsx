import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeTicker = () => {
  const items = [
    "ACCRA",
    "PARIS",
    "MILAN",
    "LONDON",
    "NEW YORK",
    "HAUTE COUTURE",
    "PATTERN TECHNOLOGY",
    "3D CLO VIRTUAL FASHION",
    "LUXURY BRIDAL CORSETRY",
    "ASANTE KENTE MODERNISM",
    "CTVET & NVTI ACCREDITED",
    "10-YEAR SCHOLARSHIP FUND",
    "500+ ALUMNI GLOBALLY",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-obsidian-900 border-y border-white/10 py-3.5 select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6">
            <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.25em] text-neutral-300 hover:text-gold-400 transition-colors uppercase">
              {item}
            </span>
            <Sparkles className="w-3 h-3 text-gold-500/60" />
          </div>
        ))}
      </div>
    </div>
  );
};

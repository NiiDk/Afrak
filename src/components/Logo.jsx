import React from 'react';
import { getAssetUrl } from '../utils/assets';

export const Logo = ({ 
  variant = 'full', // 'full', 'crest', 'minimal'
  className = '',
  size = 'md' // 'sm', 'md', 'lg', 'xl'
}) => {
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-14 sm:h-16',
  };

  if (variant === 'crest') {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <img
          src={getAssetUrl("/afrak-crest.png")}
          alt="Afra K Crest"
          className={`${sizeClasses[size] || 'h-8'} w-auto object-contain filter drop-shadow-md`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 shrink-0 whitespace-nowrap ${className}`}>
      {/* Official Golden Eagle Crest */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={getAssetUrl("/afrak-crest.png")}
          alt="Afra K Fashion School Crest"
          className={`${sizeClasses[size] || 'h-8 sm:h-9'} w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)] group-hover:scale-105 transition-transform duration-300`}
        />
      </div>

      {/* Official Brand Typography with Motto */}
      <div className="flex flex-col justify-center shrink-0">
        <span className="font-cinzel text-sm sm:text-base font-extrabold tracking-[0.12em] text-alabaster-50 group-hover:text-gold-300 transition-colors whitespace-nowrap leading-none">
          AFRA K
        </span>
        <span className="text-[8px] sm:text-[8.5px] font-sans font-bold tracking-[0.16em] text-neutral-300 uppercase whitespace-nowrap leading-none mt-1">
          FASHION SCHOOL
        </span>
        <span className="text-[6.5px] sm:text-[7px] font-mono font-semibold tracking-[0.18em] text-gold-400 uppercase whitespace-nowrap leading-none mt-0.5">
          LEARN • PRACTICE • BECOME
        </span>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { lookbookData } from '../data/lookbookData';
import { Sparkles, Eye, X, Award, Tag, Maximize2, ArrowUpRight } from 'lucide-react';

export const LookbookGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLook, setActiveLook] = useState(null);

  const categories = ['All', 'Haute Couture', 'Bridal & Corsetry', 'Avant-Garde', 'Bespoke Menswear', 'Prêt-à-Porter'];

  const filteredLooks = lookbookData.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="lookbook" className="py-24 bg-obsidian-950 text-alabaster-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE GRADUATE SALON & RUNWAY ARCHIVE</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-alabaster-50 font-normal">
              The Runway <br />
              <span className="italic font-serif text-neutral-400">of</span>{' '}
              <span className="text-gold-gradient font-bold not-italic">Visionaries</span>
            </h2>
          </div>

          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Every year, our graduating couturiers present their capsule collections at The Fashion Effect Runway Show. Witness the fusion of African craftsmanship and global contemporary design.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gold-gradient text-obsidian-950 font-bold shadow-lg shadow-gold-500/20'
                  : 'bg-obsidian-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              onClick={() => setActiveLook(look)}
              className="group cursor-pointer glass-card rounded-md overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all duration-500 flex flex-col justify-between bg-obsidian-900/60"
            >
              {/* Image with Haute Couture Hover Overlay */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-obsidian-950/80 backdrop-blur-md text-gold-400 text-[10px] uppercase font-mono tracking-wider border border-gold-500/30">
                    {look.category}
                  </span>
                </div>

                {/* Inspect Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-obsidian-950/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                  <Eye className="w-4 h-4 text-gold-400" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <span className="text-[10px] text-neutral-400 font-mono block">
                    {look.designer}
                  </span>
                  <h3 className="font-serif text-base font-bold text-alabaster-100 group-hover:text-gold-300 transition-colors leading-tight">
                    {look.title}
                  </h3>
                  <span className="text-[9px] text-gold-500/80 font-mono block">
                    {look.runwayShow}
                  </span>
                </div>
              </div>

              {/* Bottom Snippet */}
              <div className="p-3.5 bg-obsidian-950/90 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <span className="text-[10px] truncate max-w-[180px]">{look.fabric.split(',')[0]}</span>
                <span className="text-gold-400 flex items-center gap-1 text-[10px] uppercase font-semibold group-hover:translate-x-0.5 transition-transform">
                  View Look <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Haute Couture Lightbox Zoom Modal */}
      {activeLook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/90 backdrop-blur-xl animate-fade-in">
          <div className="glass-card bg-obsidian-950 border border-gold-500/40 rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveLook(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Image View */}
            <div className="md:col-span-6 relative aspect-[3/4] rounded-md overflow-hidden border border-white/15">
              <img
                src={activeLook.image}
                alt={activeLook.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-obsidian-950/90 text-gold-400 text-xs font-mono uppercase rounded border border-gold-500/30">
                  {activeLook.season}
                </span>
              </div>
            </div>

            {/* Right Editorial Details */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold-400 block mb-1">
                  {activeLook.category} • {activeLook.year}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 font-bold leading-tight">
                  {activeLook.title}
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Created by: <strong className="text-alabaster-100">{activeLook.designer}</strong>
                </p>
              </div>

              <div className="space-y-3 py-4 border-y border-white/10">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
                    Curatorial Concept
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {activeLook.concept}
                  </p>
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
                    Textiles & Embellishments
                  </span>
                  <p className="text-xs text-gold-300 font-serif">
                    {activeLook.fabric}
                  </p>
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
                    Runway Premiere
                  </span>
                  <p className="text-xs text-neutral-300">
                    {activeLook.runwayShow} (Accra, Ghana)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#programs"
                  onClick={() => setActiveLook(null)}
                  className="px-6 py-3 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-gold-500/20"
                >
                  Learn to Craft Looks Like This
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

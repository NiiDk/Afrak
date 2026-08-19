import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Filter, Maximize2, X, Download } from 'lucide-react';
import { originalSiteData } from '../data/originalSiteData';

export const GallerySection = () => {
  const { galleryImages } = originalSiteData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Graduation', 'Runway', 'Studio', 'Classroom', 'Student Work', 'Workshop'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-obsidian-950 border-t border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase mb-3 sm:mb-4">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>ARCHIVES & EXHIBITIONS</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-alabaster-50 font-normal tracking-tight mb-3 sm:mb-4">
            The Visual <span className="italic font-light text-neutral-400 font-serif">Chronicles</span>
          </h2>
          <p className="text-neutral-300 font-light text-xs sm:text-base leading-relaxed">
            Real moments from our graduation ceremonies, runway productions, cutting lofts, and student atelier workshops.
          </p>
        </div>

        {/* Category Filters (Swipeable horizontal list on mobile) */}
        <div className="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md shadow-gold-500/20'
                  : 'bg-obsidian-900 border border-white/10 text-neutral-300 hover:text-white hover:border-gold-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImage(img)}
              className="relative rounded-lg overflow-hidden border border-white/10 bg-obsidian-900 group cursor-pointer aspect-[4/3] hover:border-gold-500/50 transition-all duration-300 shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block font-bold">
                    {img.category}
                  </span>
                  <h4 className="text-sm font-serif text-alabaster-50 font-medium">
                    {img.title}
                  </h4>
                </div>
                <div className="p-2 rounded bg-obsidian-950/80 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/95 backdrop-blur-2xl animate-fade-in">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-obsidian-950 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg border border-white/15 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-gold-400 uppercase font-bold tracking-widest block">
                  {lightboxImage.category}
                </span>
                <h3 className="font-editorial text-2xl text-alabaster-50">
                  {lightboxImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

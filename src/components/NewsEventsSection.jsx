import React, { useState } from 'react';
import { Calendar, ArrowRight, Newspaper, MapPin, Tag, Sparkles } from 'lucide-react';
import { originalSiteData } from '../data/originalSiteData';

export const NewsEventsSection = ({ onOpenAdmissions }) => {
  const { newsAndEvents } = originalSiteData;
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="news" className="py-24 bg-obsidian-900/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>THE AFRAK GAZETTE & DISPATCHES</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-alabaster-50 font-normal tracking-tight">
              News & <span className="italic font-light text-neutral-400 font-serif">Runway Events</span>
            </h2>
            <p className="text-neutral-300 font-light text-sm sm:text-base mt-3">
              Official communiqués, runway reviews, alumni homecomings, and leadership keynote addresses.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-lg bg-obsidian-950 border border-gold-500/30 text-xs text-neutral-300">
              <span className="text-gold-400 font-bold block mb-1 font-mono">UPCOMING MAJOR EVENT:</span>
              <span>Annual Alumni Homecoming & Graduate Runway at National Theatre Accra</span>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsAndEvents.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="rounded-lg bg-obsidian-950 border border-white/10 overflow-hidden hover:border-gold-500/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-obsidian-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-obsidian-950/85 border border-white/15 text-[11px] font-mono text-gold-400 uppercase font-bold">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-2">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-editorial text-xl text-alabaster-50 font-normal leading-snug group-hover:text-gold-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light mt-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Article */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-xl animate-fade-in">
            <div className="bg-obsidian-900 border border-gold-500/40 rounded-lg max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>

              <div className="space-y-4">
                <span className="px-3 py-1 rounded bg-gold-500/10 text-gold-300 font-mono text-xs uppercase font-bold">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50">
                  {selectedArticle.title}
                </h3>
                <div className="h-64 rounded overflow-hidden border border-white/10">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed font-light">
                  {selectedArticle.excerpt}
                </p>
                <div className="p-4 rounded bg-white/5 border border-white/10 text-xs text-neutral-300">
                  <span className="font-bold text-gold-400 block mb-1">Afra K Press Office:</span>
                  Official release archives affiliated with TVET Ghana and Mercedes Benz Fashion Week Accra.
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenAdmissions();
                  }}
                  className="px-6 py-2 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

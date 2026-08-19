import React, { useState } from 'react';
import { journalData } from '../data/journalData';
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';

export const JournalSection = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="journal" className="py-24 bg-obsidian-950 text-alabaster-100 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE AFRAK GAZETTE & COUTURE JOURNAL</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-alabaster-50 font-normal">
              Fashion Tech & <br />
              <span className="text-gold-gradient font-bold">Couture Discourse</span>
            </h2>
          </div>

          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Essays on African luxury, 3D virtual fashion engineering, pattern mathematics, and runway trend forecasts curated by our faculty.
          </p>
        </div>

        {/* Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalData.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group glass-card rounded-lg overflow-hidden border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between bg-obsidian-900/60 cursor-pointer"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded bg-obsidian-950/85 backdrop-blur-md text-gold-400 text-[10px] uppercase font-mono tracking-wider border border-gold-500/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-alabaster-100 group-hover:text-gold-300 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-300 font-light line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5 mt-4">
                <span className="text-[11px] font-mono text-neutral-400">By {post.author}</span>
                <span className="text-gold-400 font-semibold flex items-center gap-1 uppercase text-[10px] tracking-wider group-hover:translate-x-1 transition-transform">
                  Read Essay <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/90 backdrop-blur-xl animate-fade-in">
          <div className="glass-card bg-obsidian-950 border border-gold-500/40 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-mono uppercase rounded border border-gold-500/30">
                {activeArticle.category}
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 font-bold leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono pt-1">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="relative aspect-video rounded-md overflow-hidden border border-white/10">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/10 pt-6">
              <p className="text-base font-serif italic text-gold-200">
                {activeArticle.excerpt}
              </p>
              <p>
                {activeArticle.content}
              </p>
              <p>
                At Afra K Fashion School, our curriculum bridges the historic knowledge of Master African weavers and artisans with contemporary Savile Row and European haute couture construction standards. We train our designers to honor heritage while commanding high-value luxury market spaces worldwide.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-neutral-400 font-mono">Afra K Academic Gazette</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-obsidian-850 border border-white/15 text-xs text-alabaster-100 rounded hover:bg-obsidian-800"
              >
                Close Reader
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

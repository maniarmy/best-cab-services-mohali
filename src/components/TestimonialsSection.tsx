import React from 'react';
import { Star, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0B0F19] text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>4.9 / 5 Rating · 12,480+ Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Verified Customer Reviews
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Real feedback from daily Tricity IT commuters, university students, families, and Shimla holiday travelers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t: Testimonial) => (
            <div
              key={t.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/30 p-6 flex flex-col justify-between space-y-4 hover:shadow-xl transition-all"
            >
              <div className="space-y-3">
                
                {/* Rating Stars & Trip Type */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-amber-400 font-semibold">
                    {t.tripType}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{t.comment}"
                </p>

                {/* Route */}
                <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-medium pt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Route: <strong className="text-slate-200">{t.location}</strong></span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-white text-sm">{t.name}</span>
                    {t.verified && (
                      <span className="flex items-center text-[10px] text-emerald-400 font-semibold">
                        <CheckCircle className="w-3 h-3 mr-0.5" />
                        Verified Rider
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-[11px]">{t.role}</p>
                </div>

                <span className="text-slate-500 text-[11px]">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

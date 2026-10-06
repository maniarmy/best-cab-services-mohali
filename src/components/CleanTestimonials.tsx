import React from 'react';
import { Star, CheckCircle, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const CleanTestimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF6EE] border-b border-orange-100/80">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header matching screenshot */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hear From Our Riders
          </h2>
          <p className="text-sm text-slate-600">
            Real experiences from daily commuters, airport travelers, and mountain holiday vacationers.
          </p>
        </div>

        {/* 3 Review Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-orange-100/90 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.comment}"
                </p>

                {/* Route */}
                <div className="flex items-center space-x-1.5 text-xs text-orange-600 font-semibold pt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.location}</span>
                </div>
              </div>

              {/* Author footer matching screenshot */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-slate-900">{t.name}</span>
                    {t.verified && (
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <span className="text-slate-400 text-[11px]">{t.role}</span>
                </div>

                <span className="text-slate-400 text-[11px]">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

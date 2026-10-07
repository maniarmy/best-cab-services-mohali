import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface GoogleReviewItem {
  id: string;
  author: string;
  avatarBg: string;
  avatarText: string;
  rating: number;
  text: string;
  date: string;
}

const REVIEWS_DATA: GoogleReviewItem[] = [
  {
    id: '1',
    author: 'Diana Svenda',
    avatarBg: 'bg-blue-600',
    avatarText: 'D',
    rating: 5,
    text: 'Punctual, polite, and very safe driving. Booked for early morning airport transfer from Mohali at 4:30 AM, driver arrived 10 mins early with chilled AC!',
    date: '3 days ago',
  },
  {
    id: '2',
    author: 'Kousha A',
    avatarBg: 'bg-emerald-600',
    avatarText: 'K',
    rating: 5,
    text: 'Best cab service in Mohali & Kharar. Clean car, polite chauffeur who helped with all heavy luggage, and 100% reliable 24/7 service.',
    date: '1 week ago',
  },
  {
    id: '3',
    author: 'Jake M.',
    avatarBg: 'bg-indigo-600',
    avatarText: 'J',
    rating: 5,
    text: 'Took their sedan to Shimla. Extremely experienced mountain driver, smooth driving on the expressway, and zero hidden surcharges.',
    date: '2 weeks ago',
  },
  {
    id: '4',
    author: 'Rangerman S.',
    avatarBg: 'bg-amber-600',
    avatarText: 'R',
    rating: 5,
    text: 'Daily office commute from Phase 3B2 to IT City. Super convenient WhatsApp booking and instant driver allocation every single morning.',
    date: '3 weeks ago',
  },
  {
    id: '5',
    author: 'Simran Kaur',
    avatarBg: 'bg-purple-600',
    avatarText: 'S',
    rating: 5,
    text: 'Late night emergency duty ride from Sector 70 to PGI. Verified courteous driver arrived in 6 minutes. Safest taxi service in Tricity!',
    date: '1 month ago',
  },
];

export const GoogleReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="reviews" className="py-8 sm:py-10 px-4 sm:px-6 bg-[#FFFDF9] border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Section Header matching screenshot */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
            Google Reviews
          </h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto" />
        </div>

        {/* Carousel & Cards Row */}
        <div className="relative">
          
          {/* Scroll Navigation Buttons */}
          <button
            type="button"
            data-no-autocall="true"
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 text-slate-600 hover:text-orange-600 items-center justify-center transition-all"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            data-no-autocall="true"
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 text-slate-600 hover:text-orange-600 items-center justify-center transition-all"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 overflow-x-auto no-scrollbar pb-2 pt-1 px-1 scroll-smooth"
          >
            
            {/* 1. Overall 5.0 Rating Summary Card matching screenshot */}
            <div className="min-w-[150px] sm:min-w-[170px] bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col items-center justify-center text-center shadow-xs shrink-0">
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                5.0
              </span>
              <div className="flex items-center my-3">
                <Star className="w-8 h-8 fill-orange-500 text-orange-500" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 block">
                Google Verified
              </span>
              <span className="text-[10px] text-slate-400">
                12,480+ Happy Riders
              </span>
            </div>

            {/* 2. Review Cards matching screenshot */}
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="min-w-[240px] sm:min-w-[260px] max-w-[270px] bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 flex flex-col justify-between shadow-xs shrink-0 space-y-3"
              >
                <div className="space-y-2.5">
                  {/* Author Header */}
                  <div className="flex items-center space-x-2.5">
                    <div className={`w-8 h-8 rounded-full ${rev.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                      {rev.avatarText}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {rev.author}
                      </h4>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center space-x-0.5 text-orange-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                    {rev.text}
                  </p>
                </div>

                {/* Google Tag matching screenshot */}
                <div className="pt-2 border-t border-slate-100 flex items-center space-x-1.5 text-[11px] text-slate-500 font-semibold">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span className="text-slate-500 hover:text-slate-700 transition-colors">
                    View on Google
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

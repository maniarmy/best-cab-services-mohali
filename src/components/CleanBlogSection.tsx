import React from 'react';
import { BookOpen, ArrowRight, Calendar, Clock } from 'lucide-react';

export const CleanBlogSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Top 5 Scenic Stops on the Chandigarh to Shimla Highway',
      desc: 'From Timber Trail cable cars in Parwanoo to the famous hot paranthas in Dharampur, plan your perfect hill drive.',
      date: 'Oct 2026',
      readTime: '3 min read',
      tag: 'Travel Guide',
    },
    {
      id: 2,
      title: 'Airport Cab vs Waiting in Queue: Why Pre-Booking Saves Stress',
      desc: 'How pre-scheduled doorstep pickups at Shaheed Bhagat Singh Intl Airport guarantee zero surge and zero delays.',
      date: 'Sep 2026',
      readTime: '4 min read',
      tag: 'Airport Tips',
    },
    {
      id: 3,
      title: 'Mohali to Delhi Taxi Guide: Routes, Tolls & Timings',
      desc: 'Comparing the Grand Trunk Road and Ambala expressway for the quickest one-way drop to IGI Airport Terminal 3.',
      date: 'Aug 2026',
      readTime: '3 min read',
      tag: 'Outstation',
    },
  ];

  return (
    <section id="blog" className="py-8 sm:py-12 px-4 sm:px-6 bg-[#FFFDF9] border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center justify-center space-x-1.5">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span>Latest News & Travel Tips</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Travel Blog
          </h2>
          <p className="text-sm text-slate-600">
            Helpful route guides, fare breakdowns, and mountain travel advice for riders in Mohali and Chandigarh.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-slate-100 hover:border-orange-200 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-orange-600 text-[11px] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px] flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </span>

                <span className="font-bold text-orange-600 group-hover:translate-x-0.5 transition-transform flex items-center space-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

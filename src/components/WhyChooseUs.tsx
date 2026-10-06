import React from 'react';
import { Zap, ShieldCheck, Award, Wind, Compass, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion } from '../utils/adTracking';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Zap,
      title: '5-8 Min Rapid Doorstep Pickup',
      desc: 'Cabs strategically stationed in Kharar, Mohali, and Chandigarh for instant doorstep arrival.'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Polite Mountain Drivers',
      desc: 'Licensed, background-checked professional chauffeurs trained for safe city & highway hill driving.'
    },
    {
      icon: Award,
      title: 'Zero Surge Guarantee',
      desc: 'Transparent per-kilometer and fixed route rates without rainy day or peak rush hour surges.'
    },
    {
      icon: Wind,
      title: 'Guaranteed 100% AC Cabs',
      desc: 'Clean, sanitized interiors with functional dual-zone AC running for every single trip.'
    },
    {
      icon: Compass,
      title: 'Airport & Hills Specialists',
      desc: 'Dedicated experts for Chandigarh Airport (IXC), Delhi drops, and mountain routes to Shimla & Manali.'
    },
    {
      icon: PhoneCall,
      title: '24/7 Human Dispatch Desk',
      desc: `Direct call & WhatsApp support at ${BUSINESS_INFO.phoneFormatted} with 3-second call response time.`
    }
  ];

  return (
    <section id="why" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#090D16] text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Smart Cab Pro Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Riders Across Tricity Choose Us
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Professional taxi service built on reliability, zero advance booking, and 24/7 responsiveness.
          </p>
        </div>

        {/* 6 Grid points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 p-6 space-y-3 transition-all group hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

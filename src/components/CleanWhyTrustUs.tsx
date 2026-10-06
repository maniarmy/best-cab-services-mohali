import React from 'react';
import { ShieldCheck, Zap, Award, Wind, Phone, ArrowRight, CheckCircle2, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion } from '../utils/adTracking';

interface CleanWhyTrustUsProps {
  onOpenBooking: () => void;
}

export const CleanWhyTrustUs: React.FC<CleanWhyTrustUsProps> = ({ onOpenBooking }) => {
  const highlights = [
    {
      title: '5-8 Min Rapid Pickup',
      desc: 'Cabs strategically stationed in Phase 3B2, Phase 7, Airport Road, and Kharar for fastest arrival.',
    },
    {
      title: 'Zero Surge Pricing Ever',
      desc: 'No sudden fare spikes during peak office hours, rain, or weekend rush. Fair transparent fares.',
    },
    {
      title: '100% Chilled AC Cabs',
      desc: 'Pristine interiors, functional climate control, ample boot luggage space, and phone chargers onboard.',
    },
    {
      title: 'Certified Mountain Drivers',
      desc: 'Background-checked chauffeurs with 8+ years experience for smooth mountain driving to Shimla & Manali.',
    },
  ];

  const handleCall = () => {
    trackAdCallConversion('why_trust_us_call');
  };

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFFDF9] border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (6 cols): Text content matching screenshot */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Reliable & Transparent Mobility
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Safe, Punctual & Comfortable Rides in Mohali
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Smart Cab Services is built on honesty, punctuality, and verified mountain chauffeurs. Whether you need an early morning flight drop or a weekend escape to Shimla, we deliver on time.
              </p>
            </div>

            {/* 4 Feature blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-1">
                  <div className="flex items-center space-x-1.5 text-orange-500">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm">{h.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-5.5">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call button */}
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={handleCall}
                className="inline-flex items-center space-x-2 py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column (6 cols): Visual Stat Card / Fleet snapshot matching screenshot */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-orange-100 p-6 sm:p-8 shadow-xl shadow-orange-500/5 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Live Fleet Snapshot</span>
                  <h4 className="text-lg font-black text-slate-900">Available Vehicles Right Now</h4>
                </div>
                <span className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>48 Drivers Online</span>
                </span>
              </div>

              {/* Vehicle tiers */}
              <div className="space-y-3">
                {[
                  { name: 'Executive Sedan', models: 'Dzire / Etios', feature: 'Chilled AC', eta: '3 min', badge: 'Top Rated' },
                  { name: 'Prime SUV', models: 'Ertiga / Carens', feature: 'Spacious Group', eta: '5 min', badge: '6 Seats' },
                  { name: 'Innova Crysta', models: 'Toyota Luxury King', feature: 'Reclining Seats', eta: '7 min', badge: 'Hill King' },
                  { name: 'Chandigarh to Shimla', models: 'Scenic Hill Expressway', feature: 'Doorstep Drop', eta: 'Instant', badge: 'Popular' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-slate-100 hover:border-orange-200 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">
                        <Car className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h5 className="font-bold text-slate-900 text-sm">{item.name}</h5>
                          <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-1.5 py-0.2 rounded border border-orange-200">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">{item.models}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-slate-800 text-xs block">{item.feature}</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">ETA: {item.eta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Book online button */}
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenBooking}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors shadow-sm"
              >
                <span>Book This Fleet Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

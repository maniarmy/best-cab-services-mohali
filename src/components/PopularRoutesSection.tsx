import React from 'react';
import { Clock, ArrowRight, Phone, Navigation, ShieldCheck, Flame, Compass } from 'lucide-react';
import { POPULAR_ROUTES, BUSINESS_INFO } from '../data/mockData';
import { PopularRoute } from '../types';
import { trackAdCallConversion } from '../utils/adTracking';

interface PopularRoutesSectionProps {
  onSelectRoute: (from: string, to: string) => void;
}

export const PopularRoutesSection: React.FC<PopularRoutesSectionProps> = ({ onSelectRoute }) => {
  const handleCall = (routeLabel: string) => {
    trackAdCallConversion(`route_${routeLabel}_call_btn`);
  };

  return (
    <section id="routes" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0B0F19] text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Guaranteed Fixed Fares</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Popular Fixed-Rate Routes
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300">
            One-way drops and return journeys connecting Chandigarh, Mohali, Kharar to Shimla, Manali & Delhi.
          </p>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POPULAR_ROUTES.map((route: PopularRoute) => (
            <div
              key={route.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                    {route.category}
                  </span>
                  <span className="text-slate-400 flex items-center space-x-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{route.estTime}</span>
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-bold text-slate-300">
                    {route.from.split('(')[0].trim()}
                  </div>
                  <div className="text-sm font-extrabold text-white flex items-center space-x-1.5 group-hover:text-amber-300 transition-colors">
                    <span className="text-amber-400">➔</span>
                    <span>{route.to.split('(')[0].trim()}</span>
                  </div>
                </div>

                {route.highlight && (
                  <div className="text-[11px] text-slate-400 bg-slate-950 border border-slate-800/80 px-2.5 py-1.5 rounded-lg">
                    {route.highlight}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">All-Inclusive</span>
                  <span className="text-xl font-black text-amber-400 font-mono">₹{route.priceStarting}</span>
                </div>

                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={() => onSelectRoute(route.from, route.to)}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center space-x-1 shadow-sm transition-colors active:scale-95"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Airport & Delhi Express Google Ad Call Promotion Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/50 border border-amber-500/30 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-xs font-bold text-amber-400">
              <Flame className="w-4 h-4 fill-current" />
              <span>AIRPORT (IXC / IGI) & OUTSTATION PRIORITY DESK</span>
            </div>
            <h4 className="text-xl font-black text-white">
              Flight or Urgent Meeting? Guaranteed Cab in 5-8 Minutes
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              24/7 flight monitoring, sanitized sedans with boot space, and direct highway clearance without surge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={() => handleCall('airport_express_banner')}
              className="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center justify-center space-x-2 shadow-lg shadow-amber-400/20 transition-all animate-call-glow"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Hotline: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

export interface OutstationRouteItem {
  id: string;
  from: string;
  to: string;
  description: string;
}

export const POPULAR_OUTSTATION_ROUTES: OutstationRouteItem[] = [
  {
    id: 'amritsar',
    from: 'Chandigarh',
    to: 'Amritsar',
    description: 'Golden Temple & Airport • One-Way & Round Trip',
  },
  {
    id: 'ambala',
    from: 'Chandigarh',
    to: 'Ambala',
    description: 'City & Cantt Drop • One-Way & Round Trip',
  },
  {
    id: 'shimla',
    from: 'Chandigarh',
    to: 'Shimla',
    description: 'Hill Station Tour • One-Way & Round Trip',
  },
  {
    id: 'patiala',
    from: 'Chandigarh',
    to: 'Patiala',
    description: 'Express Highway Drop • One-Way & Round Trip',
  },
  {
    id: 'ludhiana',
    from: 'Chandigarh',
    to: 'Ludhiana',
    description: 'Commercial & City Route • One-Way & Round Trip',
  },
  {
    id: 'ropar',
    from: 'Chandigarh',
    to: 'Ropar',
    description: 'IIT & City Trip • One-Way & Round Trip',
  },
  {
    id: 'delhi',
    from: 'Chandigarh',
    to: 'Delhi',
    description: 'IGI Airport & NCR • One-Way & Round Trip',
  },
  {
    id: 'sangrur',
    from: 'Chandigarh',
    to: 'Sangrur',
    description: 'Direct Highway Cab • One-Way & Round Trip',
  },
];

export const PopularOutstationRoutes: React.FC = () => {
  const handleCall = (destination: string) => {
    trackAdCallConversion(`outstation_route_${destination.toLowerCase()}`);
  };

  const handleWhatsApp = (destination: string) => {
    trackWhatsAppConversion(`outstation_route_${destination.toLowerCase()}`);
    const text = encodeURIComponent(
      `Hello Best Cab Services in Mohali!\nI want to book an outstation cab from Chandigarh / Mohali to ${destination}.\nPlease provide driver details and availability.`
    );
    window.open(`https://wa.me/919815505661?text=${text}`, '_blank');
  };

  return (
    <section id="routes" className="py-8 sm:py-12 px-4 sm:px-6 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header exactly matching image */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Popular Outstation Routes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct cabs from Chandigarh and Mohali to all major North Indian cities. One-way drops and round trips available.
          </p>
        </div>

        {/* 8 Routes Grid (4 columns on lg, 2 on sm, 1 on mobile) matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {POPULAR_OUTSTATION_ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                {/* Route Header with destination in warm orange */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center flex-wrap gap-1.5">
                  <span>{route.from}</span>
                  <span className="text-orange-500 font-normal">→</span>
                  <span className="text-orange-600 font-extrabold">{route.to}</span>
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {route.description}
                </p>
              </div>

              {/* Action Buttons: Call & WhatsApp matching image pill style */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {/* Call Button */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  data-no-autocall="true"
                  onClick={() => handleCall(route.to)}
                  className="py-2 px-3 rounded-xl border border-amber-300 hover:border-amber-400 bg-amber-50/50 hover:bg-amber-100/70 text-amber-900 text-xs font-bold flex items-center justify-center space-x-1.5 transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700 stroke-[2.2]" />
                  <span>Call</span>
                </a>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={() => handleWhatsApp(route.to)}
                  className="py-2 px-3 rounded-xl border border-emerald-300 hover:border-emerald-400 bg-emerald-50/50 hover:bg-emerald-100/70 text-emerald-900 text-xs font-bold flex items-center justify-center space-x-1.5 transition-all active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 stroke-[2.2]" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

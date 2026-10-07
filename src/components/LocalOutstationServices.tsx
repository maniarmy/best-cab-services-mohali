import React from 'react';
import { Phone, MessageSquare, Navigation, Plane, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

export const LocalOutstationServices: React.FC = () => {
  const handleCall = (serviceName: string) => {
    trackAdCallConversion(`services_call_${serviceName.toLowerCase().replace(/\s+/g, '_')}`);
  };

  const handleWhatsApp = (serviceName: string) => {
    trackWhatsAppConversion(`services_whatsapp_${serviceName.toLowerCase().replace(/\s+/g, '_')}`);
    const msg = encodeURIComponent(
      `Hello Best Cab Services in Mohali!\nI want to book ${serviceName}. Please provide driver details and availability.`
    );
    window.open(`https://wa.me/919815505661?text=${msg}`, '_blank');
  };

  const services = [
    {
      id: 'local',
      title: 'Local City Cab Service',
      badge: 'Tricity Coverage',
      desc: 'Reliable point-to-point taxi service in Mohali, Chandigarh, Panchkula, and Tricity. Ideal for daily commuting, errands, and meetings.',
      icon: Navigation,
    },
    {
      id: 'airport',
      title: 'Airport Transfers',
      badge: '24/7 Airport Pickup',
      desc: 'Punctual pickup and drop service for Shaheed Bhagat Singh International Airport Mohali. Flight tracking with guaranteed on-time arrival.',
      icon: Plane,
    },
    {
      id: 'outstation',
      title: 'Outstation Trips & One-Way',
      badge: 'One-Way & Round Trip',
      desc: 'Comfortable long-distance cabs for round trips and affordable one-way drops across Punjab, Haryana, Himachal Pradesh, and Delhi NCR.',
      icon: Car,
    },
  ];

  return (
    <section id="services" className="py-6 sm:py-8 px-4 sm:px-6 bg-[#FFFDF9] border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Section Header matching screenshot */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Local & Outstation Cab Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Comfortable, prompt, and hassle-free taxi services across Mohali, Chandigarh, and inter-city routes.
          </p>
        </div>

        {/* 3 Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group space-y-5"
              >
                <div>
                  {/* Top Row: Pastel Yellow Icon & Top-Right Pill Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-500 shadow-xs">
                      <Icon className="w-5 h-5 text-amber-500 stroke-[2.2]" />
                    </div>

                    <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-5 space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Buttons: Call Now & WhatsApp */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    data-no-autocall="true"
                    onClick={() => handleCall(item.title)}
                    className="flex-1 py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-md shadow-orange-500/20"
                  >
                    <Phone className="w-4 h-4 fill-white stroke-none shrink-0" />
                    <span>Call Now</span>
                  </a>

                  <button
                    type="button"
                    data-no-autocall="true"
                    onClick={() => handleWhatsApp(item.title)}
                    className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center shrink-0 transition-all active:scale-95 shadow-2xs"
                    aria-label={`WhatsApp booking for ${item.title}`}
                  >
                    <MessageSquare className="w-4.5 h-4.5 text-emerald-600 stroke-[2.2]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

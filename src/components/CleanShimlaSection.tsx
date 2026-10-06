import React from 'react';
import { Mountain, Phone, MessageSquare, ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';
import sunsetImg from '../assets/images/shimla_sunset_taxi_1788496838898.jpg';

interface CleanShimlaSectionProps {
  onBookShimla: (carId?: string) => void;
}

export const CleanShimlaSection: React.FC<CleanShimlaSectionProps> = ({ onBookShimla }) => {
  const handleCall = () => {
    trackAdCallConversion('shimla_section_call');
  };

  const handleWhatsApp = () => {
    trackWhatsAppConversion('shimla_section_whatsapp');
    window.open('https://wa.me/919815505661?text=' + encodeURIComponent('Hello Smart Cab Mohali! I want to book a Chandigarh/Mohali to Shimla Taxi.'), '_blank');
  };

  const cars = [
    { id: 'sedan', name: 'Executive Sedan (Dzire / Etios)', seats: '4 Seats', badge: 'Available', desc: 'Ideal for couples & small families. Chilled AC.' },
    { id: 'suv', name: 'Prime SUV (Ertiga / Carens)', seats: '6 Seats', badge: 'Available', desc: 'Extra luggage space with roof carrier for hills.' },
    { id: 'innova', name: 'Innova Crysta Luxury', seats: '7 Seats', badge: 'Available', desc: 'Ultimate mountain comfort with captain seats.' },
  ];

  return (
    <section id="shimla-special" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFFDF9] border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center justify-center space-x-1">
            <Mountain className="w-4 h-4 text-orange-500" />
            <span>Featured Mountain Route</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Chandigarh to Shimla Taxi Service
          </h2>
          <p className="text-sm text-slate-600">
            Scenic, comfortable & hassle-free hill station travel with licensed mountain chauffeurs.
          </p>
        </div>

        {/* 2-Column Banner */}
        <div className="bg-white rounded-3xl border border-orange-100 p-6 sm:p-8 shadow-lg shadow-orange-500/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Photo */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100">
            <img
              src={sunsetImg}
              alt="Chandigarh to Shimla Taxi at sunset mountain viewpoint"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
              <div className="text-white text-xs">
                <span className="font-bold text-amber-300 block text-sm">Himalayan Expressway Route</span>
                <span>Distance: 115 KM · Drive Time: ~3.5 Hours · Zero Hill Surcharge</span>
              </div>
            </div>
          </div>

          {/* Details & Rates */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Doorstep Pickup Across Mohali, Kharar & Chandigarh
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Scenic halts at Timber Trail Parwanoo, Dharampur food hub, and Solan. Direct drop to Mall Road or your hotel.
              </p>
            </div>

            {/* Car Rate Cards */}
            <div className="space-y-2.5">
              {cars.map((c) => (
                <div
                  key={c.id}
                  className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-slate-100 hover:border-orange-200 flex items-center justify-between transition-colors"
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-slate-900 text-sm">{c.name}</h4>
                      <span className="text-[10px] text-slate-500 font-semibold">{c.seats}</span>
                    </div>
                    <p className="text-xs text-slate-500">{c.desc}</p>
                  </div>

                  <div className="text-right shrink-0 pl-3">
                    <button
                      type="button"
                      data-no-autocall="true"
                      onClick={() => onBookShimla(c.id)}
                      className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold border border-orange-200 transition-colors"
                    >
                      Book Cab ➔
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Call & WhatsApp buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={handleCall}
                className="py-3 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs flex items-center space-x-2 shadow-md shadow-orange-500/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call to Book: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                type="button"
                data-no-autocall="true"
                onClick={handleWhatsApp}
                className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center space-x-1.5 border border-slate-200 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

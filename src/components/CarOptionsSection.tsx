import React from 'react';
import { Users, Phone, ArrowRight, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion } from '../utils/adTracking';

// Generated vehicle photos
import swiftDzireImg from '../assets/images/swift_dzire_taxi_1791254958573.jpg';
import hondaAmazeImg from '../assets/images/honda_city_sedan_1791254975096.jpg';
import innovaCrystaImg from '../assets/images/innova_crysta_suv_1791254998006.jpg';
import hatchbackImg from '../assets/images/hatchback_wagonr_taxi_1791255018423.jpg';

interface CarOptionsSectionProps {
  onSelectCar?: (carId: string) => void;
}

export const CarOptionsSection: React.FC<CarOptionsSectionProps> = ({ onSelectCar }) => {
  const handleCall = (carName: string) => {
    trackAdCallConversion(`car_options_call_${carName.toLowerCase().replace(/\s+/g, '_')}`);
  };

  const cars = [
    {
      id: 'sedan',
      name: 'Swift Dzire',
      badge: 'Compact Sedan',
      image: swiftDzireImg,
      tags: ['Dzire'],
      desc: "India's favorite commercial cab with exceptional mileage, comfortable seating, and efficient AC.",
      passengers: '4 Passengers',
      feature: 'Dual AC',
    },
    {
      id: 'amaze',
      name: 'Honda Amaze',
      badge: 'Compact Sedan',
      image: hondaAmazeImg,
      tags: ['Honda Amaze'],
      desc: 'Comfortable Honda Amaze sedan offering superior legroom, generous boot space, and executive ride.',
      passengers: '4 Passengers',
      feature: 'Executive',
    },
    {
      id: 'suv',
      name: 'SUV',
      badge: 'Spacious 6–7 Seater',
      image: innovaCrystaImg,
      tags: ['Innova Crysta', 'Ertiga'],
      desc: 'High-capacity vehicles (Innova / Ertiga class) perfect for large families, group travel, and hill drives.',
      passengers: '6–7 Passengers',
      feature: 'Luggage Carrier',
    },
    {
      id: 'hatchback',
      name: 'Hatchback',
      badge: 'City Ride',
      image: hatchbackImg,
      tags: ['WagonR', 'Tiago'],
      desc: 'Agile, comfortable compact car suited for quick city hops, local errands, and budget-friendly travel.',
      passengers: '4 Passengers',
      feature: 'Quick Pickup',
    },
  ];

  return (
    <section id="car-options" className="py-8 sm:py-12 px-4 sm:px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Car Options
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Well-maintained, clean, air-conditioned cars driven by professional chauffeurs.
          </p>
        </div>

        {/* 4 Cards Grid - Tight, snug, uniform height without extra empty gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.name} cab in Mohali`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      {car.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    {car.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 min-h-[24px] items-center">
                    {car.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 border border-amber-300 text-amber-900"
                      >
                        <Check className="w-2.5 h-2.5 text-amber-700 stroke-[2.5]" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed min-h-[48px]">
                    {car.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Passenger Badge & Buttons */}
              <div className="px-4 pb-4 pt-1 space-y-2.5 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold">
                    <Users className="w-3 h-3 text-slate-500" />
                    <span>{car.passengers}</span>
                  </span>

                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    {car.feature}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <button
                    type="button"
                    data-no-autocall="true"
                    onClick={() => onSelectCar?.(car.id)}
                    className="py-2 px-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center space-x-1"
                  >
                    <span>Book Cab</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    data-no-autocall="true"
                    onClick={() => handleCall(car.name)}
                    className="py-2 px-2.5 rounded-xl border border-amber-300 bg-amber-50/60 hover:bg-amber-100/80 text-amber-900 text-xs font-bold transition-all flex items-center justify-center space-x-1"
                  >
                    <Phone className="w-3 h-3 text-amber-700" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

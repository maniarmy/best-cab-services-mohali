import React from 'react';
import { Users, Briefcase, Phone, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion } from '../utils/adTracking';

// Car image assets
import swiftDzireImg from '../assets/images/swift_dzire_taxi_1791254958573.jpg';
import hondaAmazeImg from '../assets/images/honda_amaze_sedan_1791353773112.jpg';
import innovaCrystaImg from '../assets/images/innova_crysta_suv_1791254998006.jpg';
import hatchbackImg from '../assets/images/hatchback_cab_mohali_1791422099397.jpg';

export const CarOptionsSection: React.FC = () => {
  const handleCall = (carName: string) => {
    trackAdCallConversion(`car_options_call_${carName.toLowerCase().replace(/[^a-z0-9]/g, '_')}`);
  };

  return (
    <section id="car-options" className="py-6 sm:py-8 px-4 sm:px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Car Options
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Well-maintained, clean, air-conditioned cars driven by professional chauffeurs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          
          {/* Card 1: Swift Dzire */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Photo & Top Badge */}
              <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
                <img
                  src={swiftDzireImg}
                  alt="Swift Dzire taxi cab in Mohali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    Compact Sedan
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2.5">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Swift Dzire
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed min-h-[38px]">
                  India's favorite commercial cab with exceptional mileage, comfortable seating, and efficient AC.
                </p>

                {/* Capacity Badges */}
                <div className="space-y-1.5 pt-0.5">
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>4 Passengers</span>
                    </span>
                  </div>
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                      <span>2–3 Large Bags</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-4 pt-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={() => handleCall('Swift Dzire')}
                className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white stroke-none shrink-0" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: Honda Amaze only (Honda City removed) */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Photo & Top Badge */}
              <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
                <img
                  src={hondaAmazeImg}
                  alt="Honda Amaze sedan cab in Mohali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    Executive Sedan
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2.5">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Honda Amaze
                </h3>

                {/* Tag */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-xs font-semibold bg-amber-50/70 border border-amber-300 text-amber-900">
                    <Check className="w-3 h-3 text-amber-700 stroke-[2.5]" />
                    <span>Honda Amaze</span>
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed min-h-[38px]">
                  Premium compact sedan offering superior legroom, generous boot space, and smooth highway comfort.
                </p>

                {/* Capacity Badges */}
                <div className="space-y-1.5 pt-0.5">
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>4 Passengers</span>
                    </span>
                  </div>
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                      <span>3 Large Bags</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-4 pt-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={() => handleCall('Honda Amaze')}
                className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white stroke-none shrink-0" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 3: SUV */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Photo & Top Badge */}
              <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
                <img
                  src={innovaCrystaImg}
                  alt="Toyota Innova Crysta & Ertiga SUV in Mohali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    6–7 Seater
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2.5">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  SUV
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-xs font-semibold bg-amber-50/70 border border-amber-300 text-amber-900">
                    <Check className="w-3 h-3 text-amber-700 stroke-[2.5]" />
                    <span>Innova Crysta</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-xs font-semibold bg-amber-50/70 border border-amber-300 text-amber-900">
                    <Check className="w-3 h-3 text-amber-700 stroke-[2.5]" />
                    <span>Ertiga</span>
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed min-h-[38px]">
                  High-capacity vehicles (Innova / Ertiga class) perfect for large families, group travel, and hill drives.
                </p>

                {/* Capacity Badges */}
                <div className="space-y-1.5 pt-0.5">
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>6–7 Passengers</span>
                    </span>
                  </div>
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                      <span>4–5 Bags</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-4 pt-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={() => handleCall('SUV Innova Ertiga')}
                className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white stroke-none shrink-0" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 4: Hatchback */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              {/* Photo & Top Badge */}
              <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
                <img
                  src={hatchbackImg}
                  alt="Cab Services Mohali Hatchback Taxi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    City Ride
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2.5">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Hatchback
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-xs font-semibold bg-amber-50/70 border border-amber-300 text-amber-900">
                    <Check className="w-3 h-3 text-amber-700 stroke-[2.5]" />
                    <span>WagonR</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-xs font-semibold bg-amber-50/70 border border-amber-300 text-amber-900">
                    <Check className="w-3 h-3 text-amber-700 stroke-[2.5]" />
                    <span>Tiago</span>
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed min-h-[38px]">
                  Agile, comfortable compact car suited for quick city hops, local errands, and budget-friendly travel.
                </p>

                {/* Capacity Badges */}
                <div className="space-y-1.5 pt-0.5">
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>4 Passengers</span>
                    </span>
                  </div>
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                      <span>1–2 Small Bags</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-4 pt-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={() => handleCall('Hatchback WagonR')}
                className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white stroke-none shrink-0" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

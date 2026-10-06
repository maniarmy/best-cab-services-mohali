import React, { useState } from 'react';
import { Check, ArrowRight, Phone, Car, Users, Briefcase, Snowflake, Sparkles } from 'lucide-react';
import { VEHICLE_FLEET, BUSINESS_INFO } from '../data/mockData';
import { Vehicle } from '../types';
import { trackAdCallConversion } from '../utils/adTracking';

interface FleetSectionProps {
  onSelectVehicle: (vehicleId: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Fleet' },
    { id: 'Hatchback', label: 'Hatchback (City Saver)' },
    { id: 'Sedan', label: 'Sedan (Dzire / Etios)' },
    { id: 'SUV', label: 'SUV (Ertiga / Carens)' },
    { id: 'Luxury', label: 'Innova Crysta VIP' },
  ];

  const filteredFleet = filterCategory === 'all' 
    ? VEHICLE_FLEET 
    : VEHICLE_FLEET.filter(v => v.category === filterCategory);

  const handleCall = (carName: string) => {
    trackAdCallConversion(`fleet_${carName}_call_click`);
  };

  return (
    <section id="fleet" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#090D16] text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Car className="w-4 h-4 text-amber-400" />
            <span>100% AC & Sanitized Fleet</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our Taxi & Chauffeur Fleet
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            From nimble city hatchbacks to executive sedans and 7-seater Innova Crysta for Himalayan tours.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const active = filterCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  active
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFleet.map((car: Vehicle) => (
            <div
              key={car.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/5 transition-all flex flex-col justify-between group"
            >
              {/* Image Banner */}
              <div className="relative h-44 bg-slate-950 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.name} Taxi Rental Chandigarh`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                
                {car.tag && (
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 shadow-md">
                    {car.tag}
                  </span>
                )}

                <div className="absolute bottom-3 right-3 text-right">
                  <span className="text-xs font-black text-amber-300 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md font-mono">
                    ₹{car.perKmRate}/km
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {car.carModels}
                    </p>
                  </div>

                  {/* Capacity & Amenities */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800 text-center text-xs text-slate-300">
                    <div className="p-1.5 bg-slate-950 rounded-lg">
                      <span className="font-bold text-white block">{car.passengers}</span>
                      <span className="text-[10px] text-slate-400">Seats</span>
                    </div>
                    <div className="p-1.5 bg-slate-950 rounded-lg">
                      <span className="font-bold text-white block">{car.luggage}</span>
                      <span className="text-[10px] text-slate-400">Bags</span>
                    </div>
                    <div className="p-1.5 bg-slate-950 rounded-lg">
                      <span className="font-bold text-emerald-400 block">AC</span>
                      <span className="text-[10px] text-slate-400">Climate</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 text-xs text-slate-400">
                    {car.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions: Select & Instant Phone Call */}
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    data-no-autocall="true"
                    onClick={() => onSelectVehicle(car.id)}
                    className="w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                  >
                    <span>Select {car.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    data-no-autocall="true"
                    onClick={() => handleCall(car.name)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center space-x-1.5 border border-slate-800 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-amber-400" />
                    <span>Call for Rates</span>
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

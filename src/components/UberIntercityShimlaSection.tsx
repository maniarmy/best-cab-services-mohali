import React from 'react';
import { Mountain, ArrowRight, ShieldCheck, Clock, MapPin, CheckCircle, Car } from 'lucide-react';
import sunsetViewpointImg from '../assets/images/shimla_sunset_taxi_1788496838898.jpg';
import { ShimlaEmblemBadge } from './ShimlaEmblemBadge';

interface UberIntercityShimlaSectionProps {
  onBookShimla: (carId?: string) => void;
}

export const UberIntercityShimlaSection: React.FC<UberIntercityShimlaSectionProps> = ({
  onBookShimla,
}) => {
  const tiers = [
    {
      id: 'sedan',
      name: 'Uber Intercity Go',
      vehicle: 'Maruti Dzire / Toyota Etios',
      capacity: '4 Passengers · 2 Luggage Bags',
      fare: 2499,
      badge: 'Best Value',
      perks: ['Hill terrain certified driver', 'AC turned off only on steep climbs', 'State border tax included'],
    },
    {
      id: 'suv',
      name: 'Uber Intercity XL',
      vehicle: 'Maruti Ertiga / Kia Carens',
      capacity: '6 Passengers · 4 Luggage Bags',
      fare: 3899,
      badge: 'Family Choice',
      perks: ['6 full passenger seats', 'Double blower high-capacity AC', 'Spacious roof/boot carrier'],
    },
    {
      id: 'innova',
      name: 'Uber Intercity Premier',
      vehicle: 'Toyota Innova Crysta',
      capacity: '7 Passengers · 5 Luggage Bags',
      fare: 4999,
      badge: 'VIP Luxury',
      perks: ['Reclining captain armrest seats', 'Maximum legroom & highway suspension', 'Senior citizen & luggage care'],
    },
  ];

  return (
    <section id="intercity" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
              <span>Himalayan Express</span>
              <span>·</span>
              <span className="text-black">112 KM · 3.5 Hours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Chandigarh to Shimla with Uber Intercity
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-2xl">
              Door-to-door mountain rides with vetted hill captains. All Himachal Pradesh state road entry taxes and Himalayan expressway tolls are upfront and included.
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-3">
            <ShimlaEmblemBadge />
          </div>
        </div>

        {/* Featured Scenic Hero Banner */}
        <div className="rounded-3xl overflow-hidden relative shadow-xl mb-10 h-72 sm:h-96 bg-neutral-900">
          <img
            src={sunsetViewpointImg}
            alt="Chandigarh to Shimla Scenic Mountain Highway"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-2.5 py-0.5 rounded-full inline-block">
                Scenic NH-5 Mountain Route
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black">
                Pinjore · Kalka · Timber Trail · Solan · Shimla Mall Road
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
                Enjoy complimentary photo stops, tea breaks, and smooth transit directly to your hotel or Mall Road lift.
              </p>
            </div>

            <button
              type="button"
              data-no-autocall="true"
              onClick={() => onBookShimla('sedan')}
              className="py-3 px-6 rounded-2xl bg-white hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm shrink-0 flex items-center space-x-2 transition-all shadow-md"
            >
              <span>Instant Shimla Taxi from ₹2,499</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 hover:border-black transition-all flex flex-col justify-between shadow-xs hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                    {tier.badge}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center text-lg">
                    {tier.id === 'innova' || tier.id === 'suv' ? '🚙' : '🚗'}
                  </div>
                </div>

                <h3 className="text-xl font-black text-neutral-900 tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-xs font-bold text-neutral-600 mt-0.5">
                  {tier.vehicle}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  {tier.capacity}
                </p>

                <div className="my-5 py-4 border-y border-neutral-100">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">All-Inclusive Fixed Fare</span>
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-3xl font-black text-neutral-900 font-mono">₹{tier.fare.toLocaleString()}</span>
                    <span className="text-xs text-neutral-500 font-medium">flat one-way</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold block mt-1">
                    ✓ Tolls + HP State Tax Included
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-neutral-600 mb-6">
                  {tier.perks.map((p, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                data-no-autocall="true"
                onClick={() => onBookShimla(tier.id)}
                className="w-full py-3 px-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs"
              >
                <span>Book {tier.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

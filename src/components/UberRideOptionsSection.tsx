import React from 'react';
import { Users, Briefcase, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { VEHICLE_FLEET } from '../data/mockData';

interface UberRideOptionsSectionProps {
  onSelectVehicle: (vehicleId: string) => void;
  onBookShimla: (vehicleId: string) => void;
}

export const UberRideOptionsSection: React.FC<UberRideOptionsSectionProps> = ({
  onSelectVehicle,
  onBookShimla,
}) => {
  const rides = [
    {
      id: 'sedan',
      uberName: 'UberGo',
      subtitle: 'Affordable, compact rides',
      models: 'Maruti Dzire / Toyota Etios',
      passengers: 4,
      luggage: 2,
      localPrice: 249,
      shimlaPrice: 2499,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
      badge: 'Most Popular',
      benefits: ['Doorstep 3-5 min pickup', 'Chilled climate control', 'Zero surge pricing guaranteed'],
    },
    {
      id: 'luxury',
      uberName: 'Uber Premier',
      subtitle: 'Top-rated drivers, newer sedans',
      models: 'Honda City / Maruti Ciaz',
      passengers: 4,
      luggage: 3,
      localPrice: 349,
      shimlaPrice: 3199,
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80',
      badge: 'Comfort Plus',
      benefits: ['Top rated 4.9+ chauffeurs', 'Spacious executive legroom', 'Quiet highway drive'],
    },
    {
      id: 'suv',
      uberName: 'UberXL',
      subtitle: 'Spacious SUVs for groups up to 6',
      models: 'Maruti Ertiga / Kia Carens',
      passengers: 6,
      luggage: 4,
      localPrice: 449,
      shimlaPrice: 3899,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
      badge: 'Group Choice',
      benefits: ['6 comfortable passenger seats', 'Double blower dual AC', 'Large luggage carrier'],
    },
    {
      id: 'innova',
      uberName: 'Uber Intercity VIP',
      subtitle: 'Luxury mountain cruiser with captain seats',
      models: 'Toyota Innova Crysta',
      passengers: 7,
      luggage: 5,
      localPrice: 649,
      shimlaPrice: 4999,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80',
      badge: 'Himalayan King',
      benefits: ['Reclining VIP captain seats', 'Mountain expert hill chauffeur', 'Complimentary bottled water'],
    },
  ];

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            Ride Categories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 mt-1">
            Always the ride you want
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Request a ride, hop in, and go. Upfront guaranteed pricing with zero hidden fees.
          </p>
        </div>

        {/* Ride Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="bg-[#FAFAFA] rounded-3xl p-5 border border-neutral-200/90 hover:border-black transition-all flex flex-col justify-between group shadow-xs hover:shadow-xl"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-40 rounded-2xl overflow-hidden mb-4 bg-neutral-200">
                  <img
                    src={ride.image}
                    alt={ride.uberName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md">
                    {ride.badge}
                  </div>
                </div>

                {/* Ride Info */}
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-neutral-900 tracking-tight">
                    {ride.uberName}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-600">
                    {ride.models}
                  </p>
                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {ride.subtitle}
                  </p>
                </div>

                {/* Capacity Badges */}
                <div className="flex items-center space-x-3 py-3 border-y border-neutral-200/80 my-3 text-xs text-neutral-600">
                  <span className="flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-neutral-900" />
                    <span>{ride.passengers} seats</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center space-x-1">
                    <Briefcase className="w-3.5 h-3.5 text-neutral-900" />
                    <span>{ride.luggage} bags</span>
                  </span>
                </div>

                {/* Key Benefits */}
                <ul className="space-y-1.5 text-xs text-neutral-600 pb-4">
                  {ride.benefits.map((b, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-neutral-200">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block">Tricity Local</span>
                    <span className="text-lg font-black text-neutral-900 font-mono">₹{ride.localPrice}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block">Shimla Special</span>
                    <span className="text-lg font-black text-neutral-900 font-mono">₹{ride.shimlaPrice}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <button
                    type="button"
                    data-no-autocall="true"
                    onClick={() => onSelectVehicle(ride.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-xs"
                  >
                    <span>Request {ride.uberName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    data-no-autocall="true"
                    onClick={() => onBookShimla(ride.id)}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs border border-neutral-300 transition-colors text-center"
                  >
                    Book for Shimla (₹{ride.shimlaPrice})
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

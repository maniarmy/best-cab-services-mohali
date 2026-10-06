import React from 'react';
import { Plane, Compass, Clock, ShieldCheck, Check, Phone, MessageSquare, ArrowRight, Luggage, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface AirportOutstationSectionProps {
  onBookAirport: () => void;
  onBookOutstation: () => void;
}

export const AirportOutstationSection: React.FC<AirportOutstationSectionProps> = ({
  onBookAirport,
  onBookOutstation
}) => {
  return (
    <section id="airport-outstation" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            <Plane className="w-3.5 h-3.5" />
            <span>SPECIALIZED TRAVEL MODULES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Airport Transfers & <br />
            <span className="text-amber-400">Outstation Taxi Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Never miss a flight or worry about mountain driving. Dedicated cabs for Shaheed Bhagat Singh International Airport (IXC), Delhi NCR, and Himachal holiday trips.
          </p>
        </div>

        {/* 2 Big Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Airport Transfer */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Plane className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold">
                  On-Time Guarantee
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Chandigarh Airport (IXC) Express
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Scheduled door-to-terminal pickup from any sector in Chandigarh, Mohali, or Kharar. Driver arrives 10 mins early with flight tracking.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5">
                {[
                  'Live Flight Delay Tracking (Zero waiting charge)',
                  'Driver assistance with heavy luggage',
                  'Fixed rates from Kharar (₹549) & Chandigarh (₹420)',
                  'Direct drop at Departure Gate & pickup at Arrival zone'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Pricing teaser */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Airport Fare Starts At</span>
                  <span className="text-2xl font-black text-amber-400 font-mono">₹420</span>
                </div>
                <span className="text-xs text-emerald-400 font-medium">Zero Luggage Fee</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800">
              <button
                onClick={onBookAirport}
                className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Book Airport Taxi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-bold text-center flex items-center justify-center space-x-1.5 border border-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: 98155 05661</span>
              </a>
            </div>
          </div>

          {/* Card 2: Outstation Tours & Delhi Transfers */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold">
                  One-Way & Round Trips
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Delhi NCR & Himachal Hill Tours
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Smooth one-way drops to Delhi IGI Airport, or custom round-trip sightseeing holidays to Shimla, Kasauli, Manali, and Amritsar.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5">
                {[
                  'Sedan, Ertiga (6-Seater), & Innova Crysta options',
                  'Mountain-certified drivers for narrow hill roads',
                  'Fastag enabled toll handling with clear billing',
                  'Multi-day sightseeing stops at Solang, Kufri, Mall Road'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Pricing teaser */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Delhi Drop / Shimla Starts At</span>
                  <span className="text-2xl font-black text-amber-400 font-mono">₹2,499</span>
                </div>
                <span className="text-xs text-emerald-400 font-medium">Custom Itineraries</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800">
              <button
                onClick={onBookOutstation}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs sm:text-sm text-center flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-amber-500/20"
              >
                <span>Book Outstation Cab</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-bold text-center flex items-center justify-center space-x-1.5 border border-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: 98155 05661</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

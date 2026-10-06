import React, { useState } from 'react';
import { Calendar, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface UberReserveSectionProps {
  onReserveRide: (date?: string, time?: string) => void;
}

export const UberReserveSection: React.FC<UberReserveSectionProps> = ({ onReserveRide }) => {
  const [reserveDate, setReserveDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [reserveTime, setReserveTime] = useState<string>('08:00 AM');

  return (
    <section id="reserve" className="py-16 sm:py-24 bg-[#F6F6F6] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle background circles */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-neutral-800/40 pointer-events-none"></div>
          <div className="absolute right-40 -bottom-20 w-72 h-72 rounded-full bg-neutral-900 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headlines & Benefits */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Uber Reserve
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Reserve a ride that’s ready when you are
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
                Plan ahead and relax. Lock in your ride up to 90 days in advance for early morning flights, Himalayan getaways, or vital appointments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold text-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Up to 90 days ahead</h4>
                  <p className="text-xs text-neutral-400">Lock in your exact travel date and time.</p>
                </div>

                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">15 min wait window</h4>
                  <p className="text-xs text-neutral-400">Complimentary waiting time at your door.</p>
                </div>

                <div className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Free cancellation</h4>
                  <p className="text-xs text-neutral-400">No charge up to 60 minutes prior.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Reservation Interactive Card */}
            <div className="lg:col-span-5 bg-white text-black rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-black tracking-tight text-neutral-900 mb-4">
                Schedule your reservation
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                    Select Date
                  </label>
                  <div className="flex items-center bg-[#F3F3F3] rounded-2xl px-3 py-2.5">
                    <Calendar className="w-4 h-4 text-neutral-600 mr-2 shrink-0" />
                    <input
                      type="date"
                      value={reserveDate}
                      onChange={(e) => setReserveDate(e.target.value)}
                      className="bg-transparent w-full text-xs sm:text-sm font-bold text-neutral-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                    Select Time
                  </label>
                  <div className="flex items-center bg-[#F3F3F3] rounded-2xl px-3 py-2.5">
                    <Clock className="w-4 h-4 text-neutral-600 mr-2 shrink-0" />
                    <select
                      value={reserveTime}
                      onChange={(e) => setReserveTime(e.target.value)}
                      className="bg-transparent w-full text-xs sm:text-sm font-bold text-neutral-900 focus:outline-hidden cursor-pointer"
                    >
                      <option>05:00 AM (Early Airport / Shimla Departure)</option>
                      <option>06:30 AM</option>
                      <option>08:00 AM</option>
                      <option>10:00 AM</option>
                      <option>02:00 PM</option>
                      <option>06:00 PM</option>
                      <option>09:30 PM (Night Train / Bus Connection)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    data-no-autocall="true"
                    onClick={() => onReserveRide(reserveDate, reserveTime)}
                    className="w-full py-3.5 px-6 rounded-2xl bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <span>Reserve Ride with Guaranteed Driver</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

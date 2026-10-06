import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Mail, Car, Sparkles, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Smart Cab Pro, I want to book a taxi ride in Chandigarh / Mohali / Kharar. Please assist.");
    window.open(`https://wa.me/919815505661?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/80 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 INSTANT DISPATCH HUB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect with Smart Cab Pro
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Available 24 Hours, 7 Days a week for immediate pickups and advance bookings across Chandigarh, Mohali, and Kharar.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Action Call Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
            
            {/* Primary Phone Card */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>24x7 Direct Phone Hotline</span>
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-3xl sm:text-4xl font-black text-white hover:text-amber-400 transition-colors font-mono tracking-tight block"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-slate-400">
                    Direct call to our local dispatch manager for instant cab allocation.
                  </p>
                </div>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm text-center shadow-lg shadow-amber-500/25 flex items-center justify-center space-x-2 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* WhatsApp & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* WhatsApp Card */}
              <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">WhatsApp Booking</h4>
                  <p className="text-xs text-slate-400 mt-1">Send pickup & drop for instant fare quote.</p>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* Service Areas Card */}
              <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Core Service Zones</h4>
                  <p className="text-xs text-slate-400 mt-1">Chandigarh, Mohali, Kharar & Airport.</p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Calculate Distance & Fare</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Quick Dispatch Guarantee Info (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  PRO
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Smart Cab Pro Guarantee</h4>
                  <p className="text-xs text-slate-400">Serving Tricity & Greater Mohali</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs">
                  <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Operating 24x7 Non-Stop</span>
                    <span className="text-slate-400">Night emergencies, dawn flight drops, and day commutes.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Transparent Fare Card</span>
                    <span className="text-slate-400">No unexpected surge multipliers during rush hours.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs">
                  <Car className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Hatchback to Innova Fleet</span>
                    <span className="text-slate-400">WagonR, Swift, Dzire, Ertiga, Innova Crysta & Travellers.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm text-center shadow-lg shadow-amber-500/25 flex items-center justify-center space-x-2 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Instant Ride Booking</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

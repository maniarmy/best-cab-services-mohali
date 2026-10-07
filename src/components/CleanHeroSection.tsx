import React, { useState } from 'react';
import { Phone, PhoneCall, MessageSquare, ArrowRight, ShieldCheck, Star, CheckCircle2, Zap, Clock, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';
import chauffeurImg from '../assets/images/punjabi_chauffeur_door_1788496859888.jpg';
import comfortRideImg from '../assets/images/hero_cab_chauffeur_1791352974022.jpg';

interface CleanHeroSectionProps {
  onOpenBooking: () => void;
  onBookShimla: () => void;
}

export const CleanHeroSection: React.FC<CleanHeroSectionProps> = ({
  onOpenBooking,
  onBookShimla,
}) => {
  const [quickPhone, setQuickPhone] = useState('');
  const [callbackDone, setCallbackDone] = useState(false);

  const handleCall = () => {
    trackAdCallConversion('hero_call_button');
  };

  const handleWhatsApp = () => {
    trackWhatsAppConversion('hero_whatsapp');
    window.open('https://wa.me/919815505661', '_blank');
  };

  const handleQuickCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone || quickPhone.length < 10) return;
    trackAdCallConversion('hero_quick_callback');
    setCallbackDone(true);
    setTimeout(() => {
      setCallbackDone(false);
      setQuickPhone('');
    }, 5000);
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-12 px-4 sm:px-6 bg-[#FFFDF9] overflow-hidden">
      
      {/* Soft background decorative warm dots/shapes like in reference image */}
      <div className="absolute top-10 right-1/3 w-3 h-3 rounded-full bg-orange-300 opacity-60 pointer-events-none" />
      <div className="absolute top-24 right-10 w-2 h-2 rounded-full bg-amber-400 opacity-50 pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-3 h-3 rounded-full bg-orange-200 opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Clean Headline & Actions matching screenshot */}
          <div className="lg:col-span-7 space-y-6">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.15]">
              Best Cab Services in <span className="text-orange-500">Mohali</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Book Cab Services Mohali for comfortable local and outstation travel. Our Local Cab available service is suitable for daily rides, office travel, family trips, and airport transfers. Get reliable pick-up and drop service with 24/7 Taxi Booking. Call Now.
            </p>

            {/* Action Buttons matching the reference image layout */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              
              {/* Primary Orange Button */}
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenBooking}
                className="py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-sm flex items-center space-x-2 transition-all shadow-lg shadow-orange-500/25 active:scale-95"
              >
                <span>Book a Ride Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Call Hotline Button (Google Ads Call Driver) */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={handleCall}
                className="py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-sm flex items-center space-x-2.5 transition-all shadow-md active:scale-95 animate-call-glow"
              >
                <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  <Phone className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Zero Advance Required</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Pay Driver via Cash / UPI</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Zero Surge Charges</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Visual Asset matching the illustrated/human hero image in screenshot */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md bg-gradient-to-br from-orange-100 to-amber-50 p-3 sm:p-4 rounded-3xl border border-orange-200/60 shadow-xl shadow-orange-500/10">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src={comfortRideImg}
                  alt="Happy passengers enjoying comfortable taxi ride in Mohali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-semibold">
                    <span className="block text-amber-300 font-bold text-sm">Doorstep Chauffeur Pickup</span>
                    <span>Mohali · Kharar · Chandigarh Airport</span>
                  </div>
                </div>
              </div>

              {/* Floating review card without price */}
              <div className="mt-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                    ★
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">4.9 / 5 Star Rating</div>
                    <div className="text-[10px] text-slate-500">12,480+ Happy Riders</div>
                  </div>
                </div>

                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={onBookShimla}
                  className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold border border-orange-200 transition-colors"
                >
                  Book Shimla Cab ➔
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

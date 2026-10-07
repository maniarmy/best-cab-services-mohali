import React, { useState } from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';
import familyFriendlyCabImg from '../assets/images/family_friendly_cab_1791359909874.jpg';

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
            <div className="space-y-2.5 pt-1 max-w-xl">
              
              {/* Row 1: Primary Orange Button */}
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenBooking}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-orange-500/25 active:scale-95"
              >
                <span>Book a Ride Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Row 2: Call Hotline Button + WhatsApp Button on the right side as requested */}
              <div className="flex items-center gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  data-no-autocall="true"
                  onClick={handleCall}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95 animate-call-glow"
                >
                  <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                {/* WhatsApp Button on the right side (matching user's red box in screenshot) */}
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={handleWhatsApp}
                  className="py-3.5 px-4 sm:px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-[#25D366]/25 active:scale-95 shrink-0"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column (5 cols): Visual Asset - Flush modern card, zero extra space, family-friendly photo */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame - Clean compact card with no awkward beige padding */}
            <div className="relative mx-auto max-w-md bg-white rounded-3xl border border-orange-100/90 shadow-md shadow-orange-500/5 overflow-hidden group">
              
              {/* Family-Friendly Taxi Image - Full flush presentation without overlay text */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={familyFriendlyCabImg}
                  alt="Professional and family-friendly cab taxi service in Mohali"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Review Card below photo - Compact, professional, high-contrast */}
              <div className="p-3.5 sm:p-4 bg-white flex items-center space-x-3.5 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0">
                  ★
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">4.9 / 5 Star Rating</div>
                  <div className="text-xs text-slate-500 mt-0.5">12,480+ Happy Riders</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

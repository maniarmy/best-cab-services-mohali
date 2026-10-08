import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';
import cabBookingCleanImg from '../assets/images/cab_booking_clean_1791480229196.jpg';

interface CleanHeroSectionProps {
  onOpenBooking?: () => void;
  onBookShimla?: () => void;
}

export const CleanHeroSection: React.FC<CleanHeroSectionProps> = ({
  onOpenBooking,
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

            {/* Action Buttons: Only Call Now (Blinking) and WhatsApp (Fully showing) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 max-w-xl">
              
              {/* Primary Call Now Button with Blinking Glow */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={handleCall}
                className="w-full sm:flex-1 py-3.5 px-5 sm:px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm md:text-base flex items-center justify-center space-x-2 transition-all shadow-lg shadow-orange-500/25 active:scale-95 animate-call-glow"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 fill-white stroke-none" />
                </div>
                <span className="whitespace-nowrap">Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              {/* WhatsApp Button - Fully Showing with complete label & number */}
              <button
                type="button"
                data-no-autocall="true"
                onClick={handleWhatsApp}
                className="w-full sm:flex-1 py-3.5 px-5 sm:px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm md:text-base flex items-center justify-center space-x-2 transition-all shadow-lg shadow-[#25D366]/25 active:scale-95"
                aria-label="Chat on WhatsApp"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.486.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">WhatsApp: {BUSINESS_INFO.phone}</span>
              </button>

            </div>
          </div>

          {/* Right Column (5 cols): Visual Asset - Flush modern card, zero extra space, family-friendly photo */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame - Clean compact card with no awkward beige padding */}
            <div className="relative mx-auto max-w-md bg-white rounded-3xl border border-orange-100/90 shadow-md shadow-orange-500/5 overflow-hidden group">
              
              {/* Clean Cab Booking Image - Full exact display without text overlay or pinching */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={cabBookingCleanImg}
                  alt="Cab Booking in Mohali"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
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

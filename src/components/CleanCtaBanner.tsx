import React from 'react';
import { Phone, MessageSquare, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

export const CleanCtaBanner: React.FC = () => {
  const handleCall = () => {
    trackAdCallConversion('need_a_cab_call_now_button');
  };

  const handleWhatsApp = () => {
    trackWhatsAppConversion('need_a_cab_whatsapp_button');
    const msg = encodeURIComponent(
      'Hello Best Cab Services in Mohali!\nI need a cab ride immediately. Please assist with cab booking.'
    );
    window.open(`https://wa.me/919815505661?text=${msg}`, '_blank');
  };

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F3] to-[#FFF6EE] relative overflow-hidden border-t border-orange-100">
      
      {/* Soft warm ambient blur matching website's warm cream & orange theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-orange-200/40 to-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 sm:space-y-7">
        
        {/* Top Badge matching website orange theme */}
        <div>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-100/90 text-orange-700 text-xs font-black tracking-wider uppercase shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-current text-orange-600" />
            <span>INSTANT CAB CONFIRMATION</span>
          </div>
        </div>

        {/* Main Heading in dark slate typography */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Need a cab? <span className="text-orange-500">Call Now!</span>
        </h2>

        {/* Subtitle in elegant slate */}
        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-semibold max-w-xl mx-auto">
          Comfortable Rides • Affordable Fares • Easy Booking
        </p>

        {/* CTA Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-lg mx-auto">
          
          {/* Left Button: Website's Brand Orange Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            data-no-autocall="true"
            onClick={handleCall}
            className="w-full sm:w-auto flex-1 py-4 px-7 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-base sm:text-lg flex items-center justify-center space-x-3 transition-all shadow-xl shadow-orange-500/25 hover:scale-105 active:scale-95 animate-call-glow"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 fill-white stroke-none" />
            </div>
            <span className="whitespace-nowrap">Call Now – 9815505661</span>
          </a>

          {/* Right Button: Crisp Emerald Green WhatsApp Button */}
          <button
            type="button"
            data-no-autocall="true"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto flex-1 py-4 px-7 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base sm:text-lg flex items-center justify-center space-x-2.5 transition-all shadow-xl shadow-emerald-600/25 hover:scale-105 active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4 fill-white stroke-none" />
            </div>
            <span className="whitespace-nowrap">WhatsApp Booking</span>
          </button>

        </div>

        {/* Sub-text note at bottom */}
        <div className="pt-2 text-xs sm:text-sm text-slate-500 font-medium">
          Direct Helpline:{' '}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            data-no-autocall="true"
            onClick={handleCall}
            className="text-orange-600 font-black hover:underline"
          >
            +91 9815505661
          </a>{' '}
          • 24 Hours / 7 Days Service
        </div>

      </div>
    </section>
  );
};

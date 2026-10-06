import React from 'react';
import { Phone, MessageSquare, ArrowRight, Zap, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  const handleCall = () => {
    trackAdCallConversion('floating_bar_phone_call');
  };

  const handleWhatsApp = () => {
    trackWhatsAppConversion('floating_bar_whatsapp');
    const text = encodeURIComponent(
      "Hello Smart Cab Pro, I need an immediate taxi in Chandigarh / Mohali / Kharar / Shimla. Please share driver details and fare."
    );
    window.open(`https://wa.me/919815505661?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 bg-[#0B0F19]/95 backdrop-blur-md border-t border-amber-500/30 shadow-2xl">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        
        {/* Primary Call Dispatch Button (Main Google Ad Conversion Objective) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          data-no-autocall="true"
          onClick={handleCall}
          className="flex-1 py-3 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-amber-400/20 active:scale-95 animate-call-glow"
        >
          <PhoneCall className="w-4 h-4 text-slate-950 shrink-0 stroke-[2.5]" />
          <span className="truncate">Call: {BUSINESS_INFO.phone}</span>
        </a>

        {/* WhatsApp Direct Booking */}
        <button
          type="button"
          data-no-autocall="true"
          onClick={handleWhatsApp}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition-all border border-emerald-500/40 hover:border-emerald-400"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </button>

        {/* Book Online Form Trigger */}
        <button
          type="button"
          data-no-autocall="true"
          onClick={onOpenBooking}
          className="hidden sm:flex flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm items-center justify-center space-x-2 transition-all border border-slate-700 active:scale-95"
        >
          <span>Book Online</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </button>

      </div>
    </div>
  );
};

import React from 'react';
import { Phone, MessageSquare, ArrowRight, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

interface CleanFloatingBarProps {
  onOpenBooking: () => void;
}

export const CleanFloatingBar: React.FC<CleanFloatingBarProps> = ({ onOpenBooking }) => {
  const handleCall = () => {
    trackAdCallConversion('floating_bar_call');
  };

  const handleWhatsApp = () => {
    trackWhatsAppConversion('floating_bar_whatsapp');
    window.open('https://wa.me/919815505661', '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-xl">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2.5">
        
        {/* Main Phone Call CTA Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          data-no-autocall="true"
          onClick={handleCall}
          className="flex-1 py-3 px-3 sm:px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md shadow-orange-500/25 active:scale-95 animate-call-glow"
        >
          <PhoneCall className="w-4 h-4 stroke-[2.5] shrink-0" />
          <span className="truncate">Call: {BUSINESS_INFO.phone}</span>
        </a>

        {/* WhatsApp Button */}
        <button
          type="button"
          data-no-autocall="true"
          onClick={handleWhatsApp}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition-all shadow-xs"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </button>

        {/* Book Online Button */}
        <button
          type="button"
          data-no-autocall="true"
          onClick={onOpenBooking}
          className="hidden sm:flex flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm items-center justify-center space-x-1.5 transition-all"
        >
          <span>Book Online</span>
          <ArrowRight className="w-4 h-4 text-orange-500" />
        </button>

      </div>
    </div>
  );
};

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { trackWhatsAppConversion } from '../utils/adTracking';

export const FloatingWhatsAppButton: React.FC = () => {
  const handleClick = () => {
    trackWhatsAppConversion('floating_whatsapp_button');
    const msg = encodeURIComponent(
      'Hello Best Cab Services Mohali!\nI want to book a cab ride. Please provide details and pricing.'
    );
    window.open(`https://wa.me/919815505661?text=${msg}`, '_blank');
  };

  return (
    <aside
      aria-label="WhatsApp Quick Chat"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center group"
    >
      <button
        type="button"
        data-no-autocall="true"
        onClick={handleClick}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:shadow-xl hover:scale-105 active:scale-95 transition-all animate-bounce-gentle focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp with Mohali Cab Dispatch"
      >
        <MessageSquare className="w-7 h-7 fill-white stroke-none" />
        
        {/* Active notification indicator dot */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white animate-pulse" />
      </button>

      {/* Floating Tooltip Label on hover / desktop */}
      <span className="hidden md:inline-block pointer-events-none absolute right-16 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        WhatsApp Dispatch 24/7
      </span>
    </aside>
  );
};

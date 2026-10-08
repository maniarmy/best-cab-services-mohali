import React from 'react';
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
      className="fixed bottom-24 md:bottom-8 right-4 sm:right-6 z-50 flex items-center group"
    >
      <button
        type="button"
        data-no-autocall="true"
        onClick={handleClick}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp with Mohali Cab Dispatch"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.486.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        
        {/* Active notification indicator dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white" />
      </button>

      {/* Floating Tooltip Label on hover / desktop */}
      <span className="hidden md:inline-block pointer-events-none absolute right-16 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        WhatsApp Dispatch 24/7
      </span>
    </aside>
  );
};

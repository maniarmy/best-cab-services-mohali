import React, { useState, useEffect } from 'react';
import { Phone, Car, Menu, X, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

interface CleanNavbarProps {
  onOpenBooking: () => void;
  currentUser?: any;
  onOpenLogin?: () => void;
  onOpenDashboard?: () => void;
}

export const CleanNavbar: React.FC<CleanNavbarProps> = ({
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    trackAdCallConversion('navbar_call_button');
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100' 
        : 'bg-white border-b border-slate-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo without subtitle as requested */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                Best Cab Services <span className="text-orange-500">Mohali</span>
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-semibold text-slate-600">
            <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-orange-500 transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-orange-500 transition-colors">
              Services
            </a>
            <a href="#car-options" className="hover:text-orange-500 transition-colors">
              Cars
            </a>
          </nav>

          {/* Live App Status Pill */}
          <div className="hidden lg:flex items-center space-x-2 px-3 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-[11px] font-bold text-emerald-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>24/7 Cabs Active in Mohali</span>
          </div>

          {/* Right Action: Clean Orange Call Button only (no WhatsApp icon, no user badge) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={handleCall}
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-95 animate-call-glow"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={handleCall}
              className="px-3.5 py-2 rounded-xl bg-orange-500 text-white font-black text-xs flex items-center space-x-1.5 shadow-md shadow-orange-500/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu drawer showing only requested items */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-orange-50 text-orange-600 font-bold"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Services
            </a>
            <a 
              href="#car-options" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Cars
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={() => {
                setMobileMenuOpen(false);
                handleCall();
              }}
              className="w-full py-3 bg-orange-500 text-white font-black rounded-xl text-xs text-center flex items-center justify-center space-x-2 shadow-md shadow-orange-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatcher: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              data-no-autocall="true"
              onClick={() => {
                setMobileMenuOpen(false);
                trackWhatsAppConversion('navbar_mobile_whatsapp');
                window.open('https://wa.me/919815505661', '_blank');
              }}
              className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-xs text-center flex items-center justify-center space-x-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white stroke-none" />
              <span>Chat on WhatsApp</span>
            </button>

            <button
              type="button"
              data-no-autocall="true"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs text-center"
            >
              Book Cab Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

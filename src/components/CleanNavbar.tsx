import React, { useState, useEffect } from 'react';
import { Phone, Car, Menu, X } from 'lucide-react';
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
  currentUser,
  onOpenLogin,
  onOpenDashboard,
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

          {/* Right Action: Clean Orange Call Button and Portal Login */}
          <div className="hidden sm:flex items-center space-x-3">
            {currentUser ? (
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenDashboard}
                className="px-3.5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center space-x-1.5 hover:bg-slate-800 transition-all shadow-xs"
              >
                <span>{currentUser.avatar}</span>
                <span className="capitalize">{currentUser.role} Portal</span>
              </button>
            ) : (
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenLogin}
                className="px-3 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-bold text-xs flex items-center space-x-1 transition-all cursor-pointer"
              >
                <span>🔐 Login</span>
              </button>
            )}

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={handleCall}
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-95 animate-call-glow"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={handleCall}
              className="px-3.5 py-2 rounded-xl bg-orange-500 text-white font-black text-xs flex items-center space-x-1.5 shadow-md shadow-orange-500/20 active:scale-95 animate-call-glow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
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
              className="w-full py-3 bg-orange-500 text-white font-black rounded-xl text-xs text-center flex items-center justify-center space-x-2 shadow-md shadow-orange-500/20 active:scale-95 animate-call-glow"
            >
              <Phone className="w-4 h-4 fill-white stroke-none" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              data-no-autocall="true"
              onClick={() => {
                setMobileMenuOpen(false);
                trackWhatsAppConversion('navbar_mobile_whatsapp');
                window.open('https://wa.me/919815505661', '_blank');
              }}
              className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black rounded-xl text-xs text-center flex items-center justify-center space-x-2 shadow-xs active:scale-95"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.486.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp: {BUSINESS_INFO.phone}</span>
            </button>

            <button
              type="button"
              data-no-autocall="true"
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentUser) {
                  onOpenDashboard?.();
                } else {
                  onOpenLogin?.();
                }
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs text-center flex items-center justify-center space-x-2 shadow-xs active:scale-95 cursor-pointer"
            >
              <span>{currentUser ? currentUser.avatar : '🔐'}</span>
              <span>{currentUser ? `${currentUser.name} (${currentUser.role} Portal)` : 'Portal Login (Admin / Driver / User)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

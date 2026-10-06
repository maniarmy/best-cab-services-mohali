import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Car, Menu, X, LogIn, ShieldCheck, Sparkles, Navigation, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { AuthUser } from '../types';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

interface NavbarProps {
  onOpenBooking: () => void;
  currentUser: AuthUser | null;
  onOpenLogin: () => void;
  onOpenDashboard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  currentUser,
  onOpenLogin,
  onOpenDashboard,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    trackWhatsAppConversion('navbar_whatsapp');
    const text = encodeURIComponent(
      "Hello Smart Cab Pro, I need to book an instant taxi in Chandigarh / Mohali / Kharar / Shimla. Please share driver details and fare."
    );
    const link = document.createElement('a');
    link.href = `https://wa.me/919815505661?text=${text}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCallClick = () => {
    trackAdCallConversion('navbar_call_cta');
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#0B0F19]/95 backdrop-blur-md shadow-xl border-b border-amber-500/20' 
        : 'bg-[#0B0F19] border-b border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Brand Identity with Gold Accent */}
          <div className="flex items-center space-x-6 sm:space-x-8">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Car className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
                    Smart Cab <span className="text-amber-400">Pro</span>
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 hidden sm:block">
                  Chandigarh ➔ Shimla ➔ Tricity 24/7
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-300">
              <a 
                href="#booking-desk" 
                className="hover:text-amber-400 transition-colors py-1"
              >
                Instant Booking
              </a>
              <a 
                href="#chandigarh-to-shimla" 
                className="hover:text-amber-400 transition-colors py-1 flex items-center space-x-1.5 text-amber-300 font-bold"
              >
                <span>🏔️ Shimla Taxi (₹2,499)</span>
              </a>
              <a 
                href="#fleet" 
                className="hover:text-amber-400 transition-colors py-1"
              >
                Fleet & Rates
              </a>
              <a 
                href="#routes" 
                className="hover:text-amber-400 transition-colors py-1"
              >
                Popular Routes
              </a>
              <a 
                href="#safety" 
                className="hover:text-amber-400 transition-colors py-1"
              >
                Safety & Drivers
              </a>
              <a 
                href="#faq" 
                className="hover:text-amber-400 transition-colors py-1"
              >
                FAQs
              </a>
            </nav>
          </div>

          {/* Right: High-Converting Google Ad Call Desk & Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Primary Google Ad Phone Call CTA Button */}
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={handleCallClick}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center space-x-2 transition-all shadow-md shadow-amber-500/20 active:scale-95 animate-call-glow"
            >
              <div className="w-5 h-5 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
                <Phone className="w-3 h-3 stroke-[2.5]" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] uppercase font-bold text-slate-800 tracking-wider">Call Dispatcher</span>
                <span className="font-mono text-xs">{BUSINESS_INFO.phone}</span>
              </div>
            </a>

            {/* WhatsApp Direct */}
            <button
              type="button"
              data-no-autocall="true"
              onClick={handleWhatsApp}
              className="px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-emerald-400 text-xs font-bold flex items-center space-x-1.5 transition-colors border border-emerald-500/30 hover:border-emerald-400"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </button>

            {/* User Login or Profile */}
            {currentUser ? (
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenDashboard}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
              >
                <span>{currentUser.avatar || '👤'}</span>
                <span className="truncate max-w-[110px]">{currentUser.name.split(' ')[0]}</span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
                  {currentUser.role}
                </span>
              </button>
            ) : (
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenLogin}
                className="px-3 py-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition-colors flex items-center space-x-1"
              >
                <LogIn className="w-3.5 h-3.5 text-slate-400" />
                <span>Log in</span>
              </button>
            )}

            {/* Instant Book Button */}
            <button
              type="button"
              data-no-autocall="true"
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all border border-slate-700 hover:border-amber-400/50"
            >
              Book Online
            </button>

          </div>

          {/* Mobile Right Bar */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={handleCallClick}
              className="px-3 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center space-x-1.5 shadow-md shadow-amber-400/20 animate-call-glow"
            >
              <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Call</span>
            </a>

            <button
              type="button"
              data-no-autocall="true"
              onClick={handleWhatsApp}
              className="p-2 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F172A] border-t border-slate-800 px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-200">
            <a 
              href="#booking-desk" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800 text-white flex items-center justify-between"
            >
              <span>⚡ Quick Cab Booking</span>
              <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-500/20">Instant</span>
            </a>
            <a 
              href="#chandigarh-to-shimla" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800 text-amber-300 flex items-center justify-between"
            >
              <span>🏔️ Chandigarh to Shimla Taxi</span>
              <span className="text-[10px] font-bold text-amber-900 bg-amber-300 px-2 py-0.5 rounded-full">₹2,499</span>
            </a>
            <a 
              href="#fleet" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800"
            >
              🚗 Fleet & Fares
            </a>
            <a 
              href="#routes" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800"
            >
              🗺️ Popular Outstation Routes
            </a>
            <a 
              href="#safety" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800"
            >
              🛡️ Mountain Chauffeurs & Safety
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800"
            >
              ❓ Frequently Asked Questions
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={() => {
                setMobileMenuOpen(false);
                handleCallClick();
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black rounded-full text-xs text-center flex items-center justify-center space-x-2 shadow-md"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              data-no-autocall="true"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full py-2.5 bg-slate-900 text-emerald-400 font-semibold rounded-full text-xs text-center border border-emerald-500/30 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Instant Dispatch</span>
            </button>

            <button
              type="button"
              data-no-autocall="true"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-slate-800 text-white font-semibold rounded-full text-xs text-center border border-slate-700"
            >
              Fill Online Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { Home, LayoutGrid, Car, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion } from '../utils/adTracking';

interface CleanFloatingBarProps {
  onOpenBooking: () => void;
}

export const CleanFloatingBar: React.FC<CleanFloatingBarProps> = ({ onOpenBooking: _onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'cars' | 'call'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const servicesEl = document.getElementById('services');
      const carsEl = document.getElementById('car-options');

      const servicesTop = servicesEl ? servicesEl.offsetTop - 180 : 800;
      const carsTop = carsEl ? carsEl.offsetTop - 180 : 1500;

      if (scrollY >= carsTop) {
        setActiveTab('cars');
      } else if (scrollY >= servicesTop) {
        setActiveTab('services');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    setActiveTab('call');
    trackAdCallConversion('app_bar_call');
  };

  const scrollToSection = (id: string, tab: 'home' | 'services' | 'cars') => {
    setActiveTab(tab);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile App Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-4 items-center h-16 px-2">
        
        {/* Tab 1: Home */}
        <button
          type="button"
          data-no-autocall="true"
          onClick={() => scrollToSection('top', 'home')}
          className={`flex flex-col items-center justify-center space-y-1 transition-all active:scale-95 ${
            activeTab === 'home' ? 'text-orange-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <Home className="w-5 h-5 stroke-[2.2]" />
            {activeTab === 'home' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
            )}
          </div>
          <span className="text-[10px] font-bold">Home</span>
        </button>

        {/* Tab 2: Services */}
        <button
          type="button"
          data-no-autocall="true"
          onClick={() => scrollToSection('services', 'services')}
          className={`flex flex-col items-center justify-center space-y-1 transition-all active:scale-95 ${
            activeTab === 'services' ? 'text-orange-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <LayoutGrid className="w-5 h-5 stroke-[2.2]" />
            {activeTab === 'services' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
            )}
          </div>
          <span className="text-[10px] font-bold">Services</span>
        </button>

        {/* Tab 3: Cars */}
        <button
          type="button"
          data-no-autocall="true"
          onClick={() => scrollToSection('car-options', 'cars')}
          className={`flex flex-col items-center justify-center space-y-1 transition-all active:scale-95 ${
            activeTab === 'cars' ? 'text-orange-600 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <Car className="w-5 h-5 stroke-[2.2]" />
            {activeTab === 'cars' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
            )}
          </div>
          <span className="text-[10px] font-bold">Cars</span>
        </button>

        {/* Tab 4: Call Now (Vibrant Orange App Action - Blink Call Now) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          data-no-autocall="true"
          onClick={handleCall}
          className="flex flex-col items-center justify-center space-y-1 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/25 animate-call-glow">
            <PhoneCall className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="text-[10px] font-black text-orange-600">Call Now</span>
        </a>

      </div>
    </nav>
  );
};

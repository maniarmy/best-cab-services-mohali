import React from 'react';
import { Phone, MessageSquare, Globe, Shield, Car, Heart, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

export const Footer: React.FC = () => {
  const handleCall = () => {
    trackAdCallConversion('footer_call_link');
  };

  const handleWhatsApp = () => {
    trackWhatsAppConversion('footer_whatsapp_link');
    window.open('https://wa.me/919815505661', '_blank');
  };

  return (
    <footer className="bg-[#070A11] text-slate-400 text-xs pt-16 pb-24 sm:pb-16 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Header: Brand Wordmark & 24/7 Helpline */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950">
              <Car className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-2xl font-black text-white font-sans">
                Smart Cab <span className="text-amber-400">Pro</span>
              </span>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Chandigarh, Mohali, Kharar & Shimla 24/7 Doorstep Taxi Service
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={handleCall}
              className="text-slate-200 hover:text-white font-bold flex items-center space-x-2 border border-amber-500/30 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>24/7 Dispatch Hotline: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              data-no-autocall="true"
              onClick={handleWhatsApp}
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1.5 border border-emerald-500/30 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* 4 Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80 text-slate-400">
          
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fleet & Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#fleet" className="hover:text-amber-300 transition-colors">Executive Sedan (Dzire / Etios)</a></li>
              <li><a href="#fleet" className="hover:text-amber-300 transition-colors">Prime SUV (Ertiga / Carens)</a></li>
              <li><a href="#fleet" className="hover:text-amber-300 transition-colors">Innova Crysta Luxury King</a></li>
              <li><a href="#chandigarh-to-shimla" className="text-amber-400 hover:underline font-semibold">🏔️ Chandigarh to Shimla Taxi</a></li>
              <li><a href="#booking-desk" className="hover:text-amber-300 transition-colors">24/7 Airport Transfer (IXC)</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Popular Routes</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#chandigarh-to-shimla" className="hover:text-amber-300 transition-colors">Chandigarh to Shimla Taxi (₹2,499)</a></li>
              <li><a href="#routes" className="hover:text-amber-300 transition-colors">Chandigarh to Manali Taxi (₹4,999)</a></li>
              <li><a href="#routes" className="hover:text-amber-300 transition-colors">Chandigarh to Delhi Airport IGI (₹2,999)</a></li>
              <li><a href="#routes" className="hover:text-amber-300 transition-colors">Mohali / Kharar to Airport (₹499)</a></li>
              <li><a href="#routes" className="hover:text-amber-300 transition-colors">Chandigarh to Kasauli Tour (₹1,999)</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Local Pickup Hubs</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-300">Sector 17 & 43 ISBT Chandigarh</span></li>
              <li><span className="text-slate-300">Sunny Enclave & CU Kharar</span></li>
              <li><span className="text-slate-300">Phase 3B2, Phase 7 & 8 Mohali</span></li>
              <li><span className="text-slate-300">CP67 Mall & Airport Road Mohali</span></li>
              <li><span className="text-slate-300">Panchkula & Zirakpur VIP Road</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Safety & Guarantees</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-300">Zero Advance Payment Required</span></li>
              <li><span className="text-slate-300">100% Chilled AC Clean Fleet</span></li>
              <li><span className="text-slate-300">Hill Certified Mountain Chauffeurs</span></li>
              <li><span className="text-slate-300">Zero Surge Price Policy</span></li>
              <li><span className="text-slate-300">Pay Driver via Cash / UPI Post Ride</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center space-x-2">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>Serving Chandigarh (UT), Mohali (PB), Kharar, Panchkula (HR) & Shimla (HP)</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#booking-desk" className="hover:text-white">Book Online</a>
            <a href="#faq" className="hover:text-white">Help & FAQs</a>
            <span>© {new Date().getFullYear()} Smart Cab Pro. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

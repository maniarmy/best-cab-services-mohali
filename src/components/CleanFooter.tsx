import React from 'react';
import { Phone, MessageSquare, Car, Globe, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion } from '../utils/adTracking';

export const CleanFooter: React.FC = () => {
  const handleCall = () => {
    trackAdCallConversion('footer_call');
  };

  return (
    <footer className="bg-[#FFF6EE] text-slate-600 text-xs pt-8 pb-20 sm:pb-12 px-4 sm:px-6 border-t border-orange-100/80">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* 4 Columns layout (Company, Services, Routes, Direct Contact) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-orange-200/60 text-slate-600">
          
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="#reviews" className="hover:text-orange-600 transition-colors">Google Reviews</a></li>
              <li><a href="#contact" className="hover:text-orange-600 transition-colors">Contact Us</a></li>
              <li><a href="#blog" className="hover:text-orange-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Local Tricity Cabs</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Mohali Airport Transfer (IXC)</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Chandigarh to Shimla Taxi</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Delhi Airport Taxi Service</a></li>
              <li><a href="#services" className="hover:text-orange-600 transition-colors">Hourly & Outstation Rentals</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Popular Routes</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-800 font-semibold">Chandigarh to Shimla Taxi</span></li>
              <li><span className="text-slate-800 font-semibold">Mohali to Airport (IXC)</span></li>
              <li><span className="text-slate-800 font-semibold">Kharar to Chandigarh City</span></li>
              <li><span className="text-slate-800 font-semibold">Chandigarh to Delhi IGI Airport</span></li>
              <li><span className="text-slate-800 font-semibold">Chandigarh to Manali Tour</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p>📞 Phone: <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-bold text-orange-600">{BUSINESS_INFO.phone}</a></p>
              <p>🟢 WhatsApp: 98155 05661</p>
              <p>⏱️ Operating Hours: 24/7 All 365 Days</p>
              <p>⚡ Doorstep Pickup: Within 5-8 Minutes</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} Best Cab Services in Mohali. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Serving Mohali, Kharar, Chandigarh, Zirakpur, Panchkula & Shimla</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

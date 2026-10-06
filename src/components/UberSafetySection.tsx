import React from 'react';
import { Shield, KeyRound, Share2, PhoneCall, CheckCircle, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const UberSafetySection: React.FC = () => {
  return (
    <section id="safety" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
            Safety & Protection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 mt-1">
            Our commitment to your safety
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Every trip is engineered with built-in safety features, verified mountain captains, and round-the-clock emergency support.
          </p>
        </div>

        {/* 4 Pillars of Uber Safety */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. PIN Verification */}
          <div className="bg-[#FAFAFA] rounded-3xl p-6 border border-neutral-200/90 flex flex-col justify-between hover:border-black transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                <KeyRound className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-neutral-900">4-Digit PIN Code</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Verify your driver before you hop in. The captain cannot start the ride until you provide your unique matching OTP.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <span className="text-[11px] font-mono font-bold text-neutral-800 bg-white px-2.5 py-1 rounded-full border border-neutral-200 inline-block">
                Always on by default
              </span>
            </div>
          </div>

          {/* 2. 24/7 Safety Toolkit */}
          <div className="bg-[#FAFAFA] rounded-3xl p-6 border border-neutral-200/90 flex flex-col justify-between hover:border-black transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-neutral-900">24/7 Emergency Line</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Direct one-touch phone dispatch with real human dispatchers monitoring every route between Chandigarh, Kharar, Mohali, and Shimla.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                className="text-[11px] font-bold text-black hover:underline"
              >
                Hotline: {BUSINESS_INFO.phone} →
              </a>
            </div>
          </div>

          {/* 3. Share My Trip */}
          <div className="bg-[#FAFAFA] rounded-3xl p-6 border border-neutral-200/90 flex flex-col justify-between hover:border-black transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                <Share2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-neutral-900">Share Trip Status</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Share live GPS tracking, vehicle registration, and estimated arrival time with your family and loved ones with a single tap.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <span className="text-[11px] font-mono font-bold text-neutral-800 bg-white px-2.5 py-1 rounded-full border border-neutral-200 inline-block">
                Live GPS telemetry
              </span>
            </div>
          </div>

          {/* 4. Background Checked Drivers */}
          <div className="bg-[#FAFAFA] rounded-3xl p-6 border border-neutral-200/90 flex flex-col justify-between hover:border-black transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-neutral-900">Vetted Hill Chauffeurs</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Police verified credentials, minimum 5+ years driving record, and special mountain terrain driving certification for Himalayan routes.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <span className="text-[11px] font-mono font-bold text-neutral-800 bg-white px-2.5 py-1 rounded-full border border-neutral-200 inline-block">
                100% Commercial Tourist Plates
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

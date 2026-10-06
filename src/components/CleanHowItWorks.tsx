import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion } from '../utils/adTracking';
import chauffeurImg from '../assets/images/punjabi_chauffeur_door_1788496859888.jpg';

interface CleanHowItWorksProps {
  onOpenBooking: () => void;
}

export const CleanHowItWorks: React.FC<CleanHowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: 1,
      title: 'Choose Route & Trip Type',
      desc: 'Pick your pickup location in Mohali, Kharar, or Chandigarh and select your city drop or outstation destination.',
    },
    {
      num: 2,
      title: 'Select Preferred Vehicle',
      desc: 'Choose from Dzire Sedan, Ertiga 6-seater, or Luxury Innova Crysta with transparent, upfront pricing.',
    },
    {
      num: 3,
      title: 'Instant Chauffeur Dispatch',
      desc: 'Driver arrives at your doorstep in 5-8 minutes with verified vehicle number and safety OTP on your phone.',
    },
    {
      num: 4,
      title: 'Pay Directly After The Ride',
      desc: 'Zero advance payment required! Pay your driver via UPI (GPay, PhonePe, Paytm) or Cash after arriving safely.',
    },
  ];

  const handleCall = () => {
    trackAdCallConversion('how_it_works_call_btn');
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FFF6EE] border-y border-orange-100/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (5 cols): Graphic/Photo matching the reference image's person sitting on orange chair */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white p-4 rounded-3xl border border-orange-200/70 shadow-lg shadow-orange-500/10">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-orange-50">
                <img
                  src={chauffeurImg}
                  alt="Polite verified chauffeur opening taxi door for passenger"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-orange-500/90 backdrop-blur-xs px-3 py-1 rounded-lg">
                    Verified Mountain & City Chauffeurs
                  </span>
                </div>
              </div>

              {/* Bottom detail snippet */}
              <div className="mt-3.5 p-3 rounded-xl bg-orange-50/70 border border-orange-200/50 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">Average Arrival Time</span>
                  <span className="text-slate-500 text-[11px]">Anywhere in Mohali & Kharar</span>
                </div>
                <span className="text-base font-black text-orange-600 font-mono">5 - 8 Mins</span>
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Step by Step Process matching screenshot */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Simple Booking Process
              </h2>
              <p className="text-sm text-slate-600">
                We get you on the road in minutes with zero friction, zero advance, and complete peace of mind.
              </p>
            </div>

            {/* 4 Numbered Steps matching screenshot exactly */}
            <div className="space-y-4">
              {steps.map((st) => (
                <div key={st.num} className="flex items-start space-x-3.5 group">
                  {/* Number Circle in Warm Orange matching screenshot */}
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm shadow-orange-500/30 mt-0.5 group-hover:scale-105 transition-transform">
                    {st.num}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons matching screenshot */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenBooking}
                className="py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-95"
              >
                <span>Book a Ride Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={handleCall}
                className="py-3 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center space-x-2 border border-slate-200 transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Call Hotline: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

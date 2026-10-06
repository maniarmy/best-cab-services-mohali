import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle2, ShieldCheck, Mountain, Car, Phone, ArrowRight, HeartHandshake } from 'lucide-react';
import { ShimlaEmblemBadge } from './ShimlaEmblemBadge';
import { BUSINESS_INFO } from '../data/mockData';

// Real generated images matching the reference video scenes exactly:
import sunsetViewpointImg from '../assets/images/shimla_sunset_taxi_1788496838898.jpg';
import politeChauffeurImg from '../assets/images/punjabi_chauffeur_door_1788496859888.jpg';
import coupleComfortImg from '../assets/images/couple_comfort_ride_1788496877990.jpg';
import mountainHighwayImg from '../assets/images/mountain_highway_drive_1788496894383.jpg';

interface VideoStoryShowcaseProps {
  onBookNow: () => void;
}

export const VideoStoryShowcase: React.FC<VideoStoryShowcaseProps> = ({ onBookNow }) => {
  const [activeScene, setActiveScene] = useState<number>(0);

  const scenes = [
    {
      id: 0,
      tagline: "Chandigarh to Shimla jana?",
      punjabiSub: "Travel karo bina tension!",
      englishDesc: "Verified, polite turbaned chauffeurs arrive at your doorstep anywhere in Chandigarh, Mohali, or Kharar. Door opened with care, luggage handled gently.",
      image: politeChauffeurImg,
      alt: "Polite smiling Punjabi chauffeur in light blue turban opening the luxury cab door",
      highlightBadge: "Verified Chauffeurs",
      metric: "5-Min Doorstep Pickup"
    },
    {
      id: 1,
      tagline: "Choose Smart Cab Pro!",
      punjabiSub: "Himalayan Expressway Smooth Drive",
      englishDesc: "Cruising effortlessly through mountain bypasses and scenic tunnels with trained hill drivers who avoid sudden braking and sharp overtaking.",
      image: mountainHighwayImg,
      alt: "White luxury SUV driving through mountain tunnels on Himalayan highway to Shimla",
      highlightBadge: "Hill-Certified Drivers",
      metric: "115 KM • ~3.5 Hours"
    },
    {
      id: 2,
      tagline: "Safe te Comfortable Ride!",
      punjabiSub: "First-Class Rear Cabin Peace of Mind",
      englishDesc: "Plush reclining seats, crystal clean sanitized AC cabins, quiet suspension, and complimentary bottled water so you and your loved ones enjoy the journey.",
      image: coupleComfortImg,
      alt: "Couple smiling and relaxing in the comfortable backseats of luxury cab admiring mountains",
      highlightBadge: "Family & Couple Friendly",
      metric: "100% Sanitized & AC"
    },
    {
      id: 3,
      tagline: "Ride Hovegi Stress Free!",
      punjabiSub: "Direct Doorstep Drop at Shimla",
      englishDesc: "Arrive fresh at Shimla Mall Road, your mountain resort, or continue towards Kufri, Chail, and Narkanda without fatigue or surge charges.",
      image: sunsetViewpointImg,
      alt: "White luxury SUV at sunset viewpoint in Shimla with the official emblem badge",
      highlightBadge: "All-Inclusive Fares",
      metric: "Starts ₹2,499"
    }
  ];

  const current = scenes[activeScene];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 mb-8 overflow-hidden">
      
      {/* Header with Title & Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>THE SMART CAB PRO EXPERIENCE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Chandigarh to Shimla Taxi — In 4 Seamless Moments
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Click each chapter below to explore the exact journey experience.
          </p>
        </div>

        {/* Mini Emblem */}
        <div className="hidden sm:block">
          <ShimlaEmblemBadge size="sm" />
        </div>
      </div>

      {/* 4 Interactive Scene Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-4">
        {scenes.map((s, idx) => {
          const isActive = activeScene === idx;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveScene(idx)}
              className={`text-left p-3 rounded-xl border transition-all text-xs ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-amber-400' : 'text-slate-600'}`}>
                  Part 0{idx + 1}
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
              </div>
              <div className="font-extrabold truncate text-xs sm:text-sm leading-tight">
                {s.tagline}
              </div>
              <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-slate-300 font-medium' : 'text-slate-700'}`}>
                {s.punjabiSub}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Scene Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center bg-slate-50 rounded-xl p-4 border border-slate-200/80">
        
        {/* Photo Container with Official Emblem Overlay */}
        <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-slate-200 shadow-xs aspect-video sm:aspect-[16/10] bg-slate-900">
          <img
            src={current.image}
            alt={current.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
          />

          {/* Top Left Badge Overlay */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-white border border-white/20 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{current.highlightBadge}</span>
          </div>

          {/* Bottom Right Floating Video Emblem on Scene 3 (Sunset Viewpoint) */}
          {activeScene === 3 && (
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
              <ShimlaEmblemBadge size="sm" className="shadow-2xl border-white" />
            </div>
          )}

          {/* Metric Pill */}
          <div className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 font-black px-3 py-1 rounded-lg text-xs shadow-md">
            {current.metric}
          </div>
        </div>

        {/* Narrative & Dialogue */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Dialogue From The Road
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              "{current.tagline}"
            </h4>
            <p className="text-base font-bold text-amber-800">
              "{current.punjabiSub}"
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {current.englishDesc}
          </p>

          <div className="pt-2 border-t border-slate-200 space-y-2">
            <div className="flex items-center space-x-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero cancellation hassle • 24/7 Phone Dispatch</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-700">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Experienced mountain chauffeur assigned with photo & OTP</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onBookNow}
              className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xs flex items-center space-x-1.5 transition-colors"
            >
              <span>Book This Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-xs flex items-center space-x-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

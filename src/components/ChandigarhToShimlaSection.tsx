import React, { useState } from 'react';
import { 
  Mountain, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Users, 
  Car, 
  CheckCircle2,
  Coffee,
  Camera,
  Flame,
  PhoneCall
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { ShimlaEmblemBadge } from './ShimlaEmblemBadge';
import sunsetViewpointImg from '../assets/images/shimla_sunset_taxi_1788496838898.jpg';
import mountainDriveImg from '../assets/images/mountain_highway_drive_1788496894383.jpg';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

interface ChandigarhToShimlaSectionProps {
  onBookShimla: (carId?: string) => void;
}

export const ChandigarhToShimlaSection: React.FC<ChandigarhToShimlaSectionProps> = ({ onBookShimla }) => {
  const [tripPlan, setTripPlan] = useState<'oneway' | 'roundtrip'>('oneway');

  const handleWhatsAppShimla = (carName: string, price: string) => {
    trackWhatsAppConversion('shimla_whatsapp_btn');
    const text = encodeURIComponent(
      `Hello Smart Cab Pro!\nI want to book a *Chandigarh to Shimla Taxi*.\n` +
      `Trip Plan: ${tripPlan === 'oneway' ? 'One-Way Drop' : 'Round-Trip / Sightseeing'}\n` +
      `Vehicle: ${carName} (${price})\n` +
      `Pickup: Chandigarh / Mohali / Kharar\n` +
      `Please confirm driver availability and pickup time.`
    );
    window.open(`https://wa.me/919815505661?text=${text}`, '_blank');
  };

  const handleCall = (source: string) => {
    trackAdCallConversion(source);
  };

  const shimlaCars = [
    {
      id: 'sedan',
      name: 'Sedan (Dzire / Etios)',
      passengers: '4 Passengers',
      luggage: '3 Bags',
      onewayPrice: '₹2,499',
      roundtripPrice: '₹4,499 (2 Days)',
      badge: 'Most Popular',
      desc: 'Comfortable & economical for couples and small families. Chilled AC, smooth hill handling.'
    },
    {
      id: 'suv',
      name: 'Prime SUV (Ertiga / Carens)',
      passengers: '6 Passengers',
      luggage: '4 Bags',
      onewayPrice: '₹3,899',
      roundtripPrice: '₹6,499 (2 Days)',
      badge: 'Family Choice',
      desc: 'Spacious seating with roof carrier for extra mountain luggage and smooth suspension.'
    },
    {
      id: 'innova',
      name: 'Innova Crysta Luxury',
      passengers: '7 Passengers',
      luggage: '5 Bags',
      onewayPrice: '₹4,999',
      roundtripPrice: '₹8,499 (2 Days)',
      badge: 'VIP Comfort',
      desc: 'The undisputed King of Hills. Reclining captain seats, supreme stability, unmatched safety.'
    }
  ];

  const scenicStops = [
    { name: 'Himalayan Expressway', desc: 'Smooth scenic drive bypassing traffic' },
    { name: 'Timber Trail, Parwanoo', desc: 'Famous cable car mountain viewpoint' },
    { name: 'Dharampur Food Hub', desc: 'Popular halt for hot paranthas & tea' },
    { name: 'Solan & Kandaghat', desc: 'Scenic valley curves & Barog bypass' },
    { name: 'Taradevi & Shimla Mall', desc: 'Direct doorstep drop to your hotel' },
  ];

  return (
    <section id="chandigarh-to-shimla" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0B0F19] text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header with Typographic Hierarchy (Zero Pill Discipline) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Mountain className="w-4 h-4 text-amber-400" />
            <span>Signature Mountain Highway Route</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Chandigarh to Shimla Taxi Service
          </h2>
          
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Doorstep pickup from Chandigarh, Mohali & Kharar directly to Shimla Mall Road, Kufri & Chail. Experienced mountain chauffeurs with clean AC vehicles.
          </p>

          {/* Clean unboxed metadata with typographic separators */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-400">
            <span>Distance: 115 KM</span>
            <span aria-hidden="true">·</span>
            <span>Travel Time: ~3.5 Hours</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400 font-semibold">Toll Assistance Included</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-semibold">Zero Surge Guarantee</span>
          </div>
        </div>

        {/* 2-Column Showcase: Route Story + High-Converting Call Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (7 cols): Route Features & Scenic Stops */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Advance Payment • Pay Driver Post Ride</span>
              </div>

              <h3 className="text-2xl font-black text-white">
                Why Thousands Choose Us for Shimla
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <h4 className="font-bold text-amber-300 text-sm">Himalayan Ghat Drivers</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Background-verified chauffeurs with 8+ years of mountain experience. Gentle curves, no motion sickness.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <h4 className="font-bold text-amber-300 text-sm">Doorstep Tricity Pickup</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Any sector in Chandigarh, Mohali Phases, Kharar, Airport (IXC), or Railway Station at zero extra charge.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <h4 className="font-bold text-amber-300 text-sm">100% Chilled AC Cabs</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Spotless clean interiors, sanitised seats, ample luggage space, and phone charging points onboard.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <h4 className="font-bold text-amber-300 text-sm">Custom Sightseeing</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Cover Shimla Mall Road, Kufri snowfall points, Jakhoo Ropeway, Chail, and Mashobra at transparent day rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Scenic Halts */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-300 block mb-2.5">
                Scenic Stops Along Chandigarh-Shimla Highway:
              </span>
              <div className="flex flex-wrap gap-2">
                {scenicStops.map((stop, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-medium"
                  >
                    <span className="text-amber-400 mr-1.5 font-bold">•</span>
                    {stop.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Call Dispatch Card with Scenic Photo */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-amber-950/40 rounded-2xl border-2 border-amber-500/40 p-6 space-y-5 flex flex-col justify-between shadow-2xl shadow-amber-500/10">
            
            {/* Mountain Sunset Preview Photo */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-slate-800 group">
              <img
                src={sunsetViewpointImg}
                alt="Chandigarh to Shimla Luxury Taxi at Mountain Sunset Viewpoint"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-3">
                <div className="flex items-center justify-between w-full text-xs">
                  <span className="font-bold text-white bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    🏔️ Shimla Sunset Viewpoint
                  </span>
                  <span className="font-black text-amber-400 bg-slate-950/80 px-2 py-1 rounded-md">
                    ₹2,499 Flat
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center space-x-1.5 text-amber-400 text-xs font-black uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>Google Ad Special Offer</span>
              </div>
              <h4 className="text-xl font-black text-white">
                Book Shimla Cab by Direct Phone
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calling our dispatch desk ensures instant confirmation, your preferred car model, and immediate driver allocation.
              </p>
            </div>

            {/* Direct Call Actions */}
            <div className="space-y-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={() => handleCall('shimla_box_call_btn')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm flex items-center justify-center space-x-2.5 shadow-lg shadow-amber-400/20 transition-all animate-call-glow"
              >
                <PhoneCall className="w-4 h-4 stroke-[2.5]" />
                <span>Call {BUSINESS_INFO.phone} (Instant Booking)</span>
              </a>

              <button
                type="button"
                data-no-autocall="true"
                onClick={() => handleWhatsAppShimla('Executive Sedan (Dzire)', '₹2,499')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-400 font-bold text-xs flex items-center justify-center space-x-2 border border-emerald-500/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Shimla Desk</span>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex justify-between">
                <span>Pickup Speed:</span>
                <strong className="text-white">Within 15-20 Mins</strong>
              </div>
              <div className="flex justify-between">
                <span>Payment Mode:</span>
                <strong className="text-amber-400">Cash / UPI to Driver Directly</strong>
              </div>
            </div>

          </div>

        </div>

        {/* Vehicle Rate Cards for Shimla with One-Way vs Roundtrip Toggle */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-white">Select Your Shimla Chauffeur Cab</h3>
              <p className="text-xs text-slate-400 mt-0.5">All rates include fuel, toll guidance, and driver allowance.</p>
            </div>

            {/* Segmented Control */}
            <div className="inline-flex rounded-xl p-1 bg-slate-950 border border-slate-800 text-xs font-bold self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setTripPlan('oneway')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  tripPlan === 'oneway'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                One-Way Drop
              </button>
              <button
                type="button"
                onClick={() => setTripPlan('roundtrip')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  tripPlan === 'roundtrip'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Round-Trip (2 Days)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shimlaCars.map((car) => {
              const price = tripPlan === 'oneway' ? car.onewayPrice : car.roundtripPrice;
              return (
                <div
                  key={car.id}
                  className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all p-6 flex flex-col justify-between space-y-6 hover:shadow-xl hover:shadow-amber-500/5 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        {car.badge}
                      </span>
                      <span className="text-xs text-slate-400">
                        {car.passengers}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {car.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {car.desc}
                      </p>
                    </div>

                    <div className="py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 flex items-baseline justify-between">
                      <span className="text-xs text-slate-400">
                        {tripPlan === 'oneway' ? 'One-Way All-Inclusive' : '2-Day Tour Fare'}
                      </span>
                      <span className="text-2xl font-black text-amber-400 font-mono">
                        {price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      type="button"
                      data-no-autocall="true"
                      onClick={() => onBookShimla(car.id)}
                      className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <span>Book Online ({price})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      data-no-autocall="true"
                      onClick={() => handleCall(`shimla_${car.id}_card_call`)}
                      className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 font-semibold text-xs flex items-center justify-center space-x-1.5 border border-slate-800 transition-colors"
                    >
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>Call to Book: {BUSINESS_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

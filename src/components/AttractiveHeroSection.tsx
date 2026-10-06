import React, { useState } from 'react';
import { 
  Phone, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Navigation, 
  ShieldCheck, 
  Star, 
  Clock, 
  ArrowRight, 
  Flame, 
  Sparkles, 
  Car, 
  Check, 
  Users, 
  Calendar,
  Zap,
  CheckCircle2,
  Send
} from 'lucide-react';
import { TripType } from '../types';
import { BUSINESS_INFO, COMMON_LOCATIONS, calculateEstimatedTrip } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

interface AttractiveHeroSectionProps {
  onOpenBookingModal: (data?: any) => void;
  onBookShimla: (carId?: string) => void;
}

export const AttractiveHeroSection: React.FC<AttractiveHeroSectionProps> = ({
  onOpenBookingModal,
  onBookShimla,
}) => {
  const [tripType, setTripType] = useState<TripType>('outstation');
  const [pickup, setPickup] = useState<string>('Chandigarh - Sector 17 (City Centre / ISBT 17)');
  const [drop, setDrop] = useState<string>('Shimla - Mall Road / ISBT Shimla');
  const [selectedVehicle, setSelectedVehicle] = useState<string>('sedan');
  const [callbackPhone, setCallbackPhone] = useState<string>('');
  const [callbackRequested, setCallbackRequested] = useState<boolean>(false);

  // Dynamic estimate calculation
  const estimate = calculateEstimatedTrip(
    pickup,
    drop,
    tripType,
    selectedVehicle
  );

  const handleTripTypeSelect = (type: TripType) => {
    setTripType(type);
    if (type === 'outstation') {
      setPickup('Chandigarh - Sector 17 (City Centre / ISBT 17)');
      setDrop('Shimla - Mall Road / ISBT Shimla');
    } else if (type === 'airport') {
      setPickup('Kharar - Sunny Enclave (Sector 125)');
      setDrop('Mohali - Shaheed Bhagat Singh Intl Airport (IXC)');
      setSelectedVehicle('sedan');
    } else if (type === 'local') {
      setPickup('Mohali - Phase 3B2 / Phase 5 (Market & Food Hub)');
      setDrop('Chandigarh - Sector 17 (City Centre / ISBT 17)');
      setSelectedVehicle('hatchback');
    }
  };

  const handleQuickRoute = (from: string, to: string, type: TripType, vehicle: string = 'sedan') => {
    setPickup(from);
    setDrop(to);
    setTripType(type);
    setSelectedVehicle(vehicle);
  };

  const handleSwapLocations = () => {
    const temp = pickup;
    setPickup(drop);
    setDrop(temp);
  };

  const handleDirectCall = (source: string = 'hero_primary_call_btn') => {
    trackAdCallConversion(source);
  };

  const handleWhatsAppBooking = () => {
    trackWhatsAppConversion('hero_whatsapp');
    const text = encodeURIComponent(
      `Hello Smart Cab Pro!\nI want to book an instant cab:\n` +
      `Trip Type: ${tripType.toUpperCase()}\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Vehicle: ${selectedVehicle.toUpperCase()}\n` +
      `Est. Fare: ₹${estimate.totalFare}\n` +
      `Please confirm driver dispatch in 5 minutes.`
    );
    window.open(`https://wa.me/919815505661?text=${text}`, '_blank');
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone || callbackPhone.length < 10) return;
    trackAdCallConversion('hero_quick_callback_request');
    setCallbackRequested(true);
    // After 6 seconds, reset
    setTimeout(() => {
      setCallbackRequested(false);
      setCallbackPhone('');
    }, 6000);
  };

  const handleProceedBooking = () => {
    onOpenBookingModal({
      pickupLocation: pickup,
      dropLocation: drop,
      tripType,
      vehicleId: selectedVehicle,
    });
  };

  return (
    <section id="booking-desk" className="relative bg-[#090D16] text-white pt-8 pb-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top SEO Trust & High-Converting Call Alert Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-800/80">
          
          {/* Rating & Local Trust Metadata */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-black text-white ml-1">4.9 / 5</span>
            </div>
            <span className="text-slate-500">·</span>
            <span className="font-semibold text-slate-300">12,480+ Verified Trips</span>
            <span className="text-slate-500">·</span>
            <span className="hidden sm:inline text-emerald-400 font-medium">⚡ 5-10 Min Doorstep Pickup</span>
          </div>

          {/* High Urgency Google Ad Call Trigger Banner */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-300 hidden md:inline">
              Need immediate cab? Call dispatch desk directly:
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={() => handleDirectCall('hero_top_urgent_call')}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-bold text-xs border border-amber-400/40 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>

        {/* Main Grid: Headline + Call Desk (Left) & Live Fare Calculator Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Strong SEO Headline & Google Ad Call Booster Box */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CHANDIGARH • MOHALI • KHARAR • SHIMLA TAXI 24/7</span>
            </div>

            {/* Main SEO H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Chandigarh to Shimla Taxi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">24/7 City Cabs</span>
            </h1>

            {/* Compelling Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Book clean, air-conditioned cabs in Chandigarh, Mohali, Kharar, and Airport (IXC). 
              Hassle-free mountain trips to <strong className="text-white">Shimla, Manali & Delhi</strong> with verified mountain chauffeurs, zero surge pricing, and guaranteed doorstep pickup in 5-10 minutes.
            </p>

            {/* ========================================================================= */}
            {/* GOOGLE AD CALL DESK: The Primary Driver for Google Ads Phone Call Volume */}
            {/* ========================================================================= */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/40 border-2 border-amber-500/50 shadow-2xl shadow-amber-500/10 space-y-4">
              
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">
                    Live Dispatch Desk Online
                  </span>
                </div>

                <div className="text-[11px] font-bold text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30">
                  Google Ad Special: Flat ₹300 OFF
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-white flex items-center space-x-2">
                  <span>Need an Instant Cab? Call Directly:</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Skip online forms! Talk directly with our senior fleet dispatcher for immediate car assignment, live fare confirmation, and instant driver number on your phone.
                </p>
              </div>

              {/* Massive 1-Tap Google Ad Call Button */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  data-no-autocall="true"
                  onClick={() => handleDirectCall('hero_big_call_button')}
                  className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center space-x-3 shadow-lg shadow-amber-500/25 transition-all transform active:scale-95 animate-call-glow"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-extrabold uppercase text-slate-800">Tap to Call 24/7</div>
                    <div className="font-mono font-black">{BUSINESS_INFO.phone}</div>
                  </div>
                </a>

                {/* Instant WhatsApp Connect */}
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={handleWhatsAppBooking}
                  className="py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-400 font-bold text-sm flex items-center justify-center space-x-2.5 border border-emerald-500/40 hover:border-emerald-400 transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] font-extrabold uppercase text-emerald-500">Fast Booking</div>
                    <div className="font-semibold text-white text-xs">WhatsApp Dispatch</div>
                  </div>
                </button>
              </div>

              {/* 30-Second Instant Callback Feature for Google Ad Visitors */}
              <div className="pt-2 border-t border-slate-800">
                {callbackRequested ? (
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Callback Request Received!</strong> Our manager is calling you within 30 seconds.</span>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="flex items-center gap-2">
                    <input
                      type="tel"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      placeholder="Enter 10-digit mobile for instant call back"
                      maxLength={10}
                      className="flex-1 bg-slate-950/90 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      data-no-autocall="true"
                      className="px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shrink-0 flex items-center space-x-1 transition-colors"
                    >
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span>Request Call</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Trust Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-slate-400">
                <div className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Zero Advance</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Pay Driver Directly</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Zero Surge Charges</span>
                </div>
              </div>

            </div>

            {/* 1-Tap Popular SEO Quick Route Buttons */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Quick Select Popular Outstation & Airport Routes:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickRoute(
                    'Chandigarh - Sector 17 (City Centre / ISBT 17)',
                    'Shimla - Mall Road / ISBT Shimla',
                    'outstation',
                    'sedan'
                  )}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-amber-300 border border-slate-800 hover:border-amber-400/50 flex items-center space-x-1.5 transition-all"
                >
                  <span>🏔️ Chandigarh ➔ Shimla</span>
                  <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded">₹2,499</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickRoute(
                    'Chandigarh - Sector 17 (City Centre / ISBT 17)',
                    'New Delhi - IGI International Airport (Terminal 1/2/3)',
                    'outstation',
                    'sedan'
                  )}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-800 hover:border-amber-400/50 flex items-center space-x-1.5 transition-all"
                >
                  <span>✈️ Chandigarh ➔ Delhi Airport</span>
                  <span className="text-[10px] font-black bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded">₹2,999</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickRoute(
                    'Kharar - Sunny Enclave (Sector 125)',
                    'Mohali - Shaheed Bhagat Singh Intl Airport (IXC)',
                    'airport',
                    'sedan'
                  )}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-800 hover:border-amber-400/50 flex items-center space-x-1.5 transition-all"
                >
                  <span>🛫 Kharar / Mohali ➔ IXC Airport</span>
                  <span className="text-[10px] font-black bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded">₹499</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickRoute(
                    'Chandigarh - Sector 17 (City Centre / ISBT 17)',
                    'Manali - Mall Road / Solang Valley',
                    'outstation',
                    'sedan'
                  )}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-800 hover:border-amber-400/50 flex items-center space-x-1.5 transition-all"
                >
                  <span>❄️ Chandigarh ➔ Manali</span>
                  <span className="text-[10px] font-black bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded">₹4,999</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive Live Fare Calculator & Booking Desk */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl border border-slate-700/80 shadow-2xl p-5 sm:p-6 space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Car className="w-5 h-5 text-amber-400" />
                    <span>Instant Fare Calculator</span>
                  </h2>
                  <p className="text-xs text-slate-400">Live transparent pricing with zero surge</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Fixed Rates
                </span>
              </div>

              {/* Trip Type Segmented Control */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => handleTripTypeSelect('outstation')}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                    tripType === 'outstation'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Outstation
                </button>
                <button
                  type="button"
                  onClick={() => handleTripTypeSelect('airport')}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                    tripType === 'airport'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Airport
                </button>
                <button
                  type="button"
                  onClick={() => handleTripTypeSelect('local')}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                    tripType === 'local'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  City Cab
                </button>
              </div>

              {/* Pickup & Drop Inputs */}
              <div className="space-y-3">
                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                    <span>Pickup Location (Chandigarh / Mohali / Kharar)</span>
                  </label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {COMMON_LOCATIONS.map((loc, idx) => (
                      <option key={idx} value={loc} className="bg-slate-900 text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -my-1">
                  <button
                    type="button"
                    onClick={handleSwapLocations}
                    className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 transition-colors"
                    title="Swap pickup and drop"
                  >
                    <Navigation className="w-3.5 h-3.5 transform rotate-90" />
                  </button>
                </div>

                {/* Drop Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
                    <span>Drop Destination</span>
                  </label>
                  <select
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {COMMON_LOCATIONS.map((loc, idx) => (
                      <option key={idx} value={loc} className="bg-slate-900 text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Vehicle Selection Chips */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Select Vehicle Category:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'sedan', name: 'Sedan AC', models: 'Dzire/Etios', seats: '4 Seats' },
                    { id: 'suv', name: 'Prime SUV', models: 'Ertiga/Carens', seats: '6 Seats' },
                    { id: 'innova', name: 'Innova Crysta', models: 'Luxury King', seats: '7 Seats' },
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVehicle(v.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedVehicle === v.id
                          ? 'border-amber-400 bg-amber-950/40 text-white shadow-sm'
                          : 'border-slate-800 bg-slate-950/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs text-white flex items-center justify-between">
                        <span>{v.name}</span>
                        {selectedVehicle === v.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">{v.models}</div>
                      <div className="text-[10px] text-amber-400/90 font-medium mt-0.5">{v.seats}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Fare & ETA Result Banner */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>Est. Distance: {estimate.distanceKm} km · {estimate.estTime}</span>
                  </div>
                  <div className="text-2xl font-black text-amber-400 font-mono mt-0.5">
                    ₹{estimate.totalFare}
                    <span className="text-xs font-normal text-slate-400 ml-1.5">all-inclusive</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block">Cab Available</span>
                  <span className="text-xs text-slate-300 font-semibold">Pickup: 5-8 min</span>
                </div>
              </div>

              {/* Action Buttons: Book Online vs Call Desk */}
              <div className="space-y-2">
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={handleProceedBooking}
                  className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center space-x-2 shadow-lg shadow-amber-400/20 transition-all active:scale-98"
                >
                  <span>Confirm Ride at ₹{estimate.totalFare}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  data-no-autocall="true"
                  onClick={() => handleDirectCall('fare_calculator_call_now')}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center space-x-2 border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Or Call Dispatch Desk: {BUSINESS_INFO.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

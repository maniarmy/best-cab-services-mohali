import React, { useState } from 'react';
import { 
  Car, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Navigation, 
  Clock, 
  Check, 
  ArrowRight, 
  Zap, 
  Star 
} from 'lucide-react';
import { TripType } from '../types';
import { BUSINESS_INFO, COMMON_LOCATIONS, VEHICLE_FLEET, calculateEstimatedTrip } from '../data/mockData';
import { ShimlaEmblemBadge } from './ShimlaEmblemBadge';
import sunsetViewpointImg from '../assets/images/shimla_sunset_taxi_1788496838898.jpg';

interface HeroSectionProps {
  onOpenBookingModal: (data?: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBookingModal }) => {
  const [tripType, setTripType] = useState<TripType>('local');
  const [pickup, setPickup] = useState<string>('Kharar - Sunny Enclave (Sector 125)');
  const [drop, setDrop] = useState<string>('Chandigarh - Sector 17 (City Centre / ISBT 17)');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('sedan');
  const [userPhone, setUserPhone] = useState<string>('');

  const tripEstimate = calculateEstimatedTrip(pickup, drop, tripType, selectedVehicleId);
  const selectedVehicle = VEHICLE_FLEET.find(v => v.id === selectedVehicleId) || VEHICLE_FLEET[1];

  const handleTripTypeChange = (type: TripType | 'shimla') => {
    if (type === 'shimla') {
      setTripType('outstation');
      setPickup('Chandigarh - Sector 17 (City Centre / ISBT 17)');
      setDrop('Shimla - Mall Road / ISBT Shimla');
      return;
    }
    setTripType(type as TripType);
    if (type === 'airport') {
      setDrop('Mohali - Shaheed Bhagat Singh Intl Airport (IXC)');
    } else if (type === 'outstation') {
      setDrop('New Delhi - IGI International Airport (Terminal 1/2/3)');
    } else if (type === 'local') {
      setDrop('Chandigarh - Sector 17 (City Centre / ISBT 17)');
    }
  };

  const handleSwapLocations = () => {
    const temp = pickup;
    setPickup(drop);
    setDrop(temp);
  };

  const handleQuickWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Smart Cab Pro!\nI want to book a taxi ride.\n` +
      `Trip Type: ${tripType.toUpperCase()}\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Vehicle: ${selectedVehicle.name}\n` +
      `Estimated Fare: ₹${tripEstimate.totalFare}\n` +
      `Please confirm cab dispatch.`
    );
    const link = document.createElement('a');
    link.href = `https://wa.me/919815505661?text=${text}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLaunchBooking = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      tripType,
      pickupLocation: pickup,
      dropLocation: drop,
      vehicleId: selectedVehicleId,
      passengerPhone: userPhone
    });
  };

  return (
    <section id="booking" className="pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-xs">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold border border-amber-200">
            <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Fast 5-8 Min Doorstep Pickup</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white text-slate-700 font-medium border border-slate-200 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chandigarh • Mohali • Kharar</span>
          </span>
          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white text-slate-700 font-medium border border-slate-200 shadow-sm">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span className="font-bold text-slate-900">4.9/5</span>
            <span className="text-slate-500">(12k+ Rides)</span>
          </span>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Chandigarh to Shimla Taxi & <br className="hidden sm:inline" />
            <span className="text-amber-600">24/7 Tricity Cab Service</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Doorstep pickup in Chandigarh, Mohali & Kharar. Clean AC cabs, licensed hill chauffeurs, zero surge pricing, and instant booking via call or WhatsApp.
          </p>

          {/* Quick Direct Call & WhatsApp buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              data-no-autocall="true"
              onClick={handleQuickWhatsApp}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Booking</span>
            </button>
          </div>
        </div>

        {/* Video Signature Feature Banner */}
        <div className="max-w-4xl mx-auto mb-6 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold border border-amber-400/30">
                <span>🏔️ Featured Mountain Route</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black tracking-tight text-white">
                "Chandigarh to Shimla jana? Travel karo bina tension!"
              </h2>
              <p className="text-xs sm:text-sm text-amber-300 font-semibold">
                Safe te comfortable ride — Ride hovegi stress free!
              </p>
              <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-300">
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sedan from ₹2,499</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Licensed Hill Drivers</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Doorstep Pickup (All Tricity)</span>
                </span>
              </div>
            </div>

            {/* Emblem Badge from Video */}
            <div className="shrink-0">
              <ShimlaEmblemBadge size="md" className="shadow-xl" />
            </div>
          </div>
        </div>

        {/* Lightweight, Clean Booking Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-6">
          
          {/* Trip Type Selector */}
          <div className="flex flex-wrap items-center gap-1.5 mb-5 border-b border-slate-100 pb-3">
            {[
              { id: 'local', label: 'Local Tricity' },
              { id: 'shimla', label: '🏔️ Chandigarh to Shimla' },
              { id: 'airport', label: '✈️ Airport (IXC)' },
              { id: 'outstation', label: 'Delhi NCR / Manali' },
              { id: 'hourly', label: 'Hourly Rental (8h / 80km)' },
            ].map((tab) => {
              const active = (tab.id === 'shimla' && drop.toLowerCase().includes('shimla')) || 
                             (tab.id !== 'shimla' && tripType === tab.id && !drop.toLowerCase().includes('shimla'));
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTripTypeChange(tab.id as TripType | 'shimla')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleLaunchBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Input Columns */}
            <div className="lg:col-span-7 space-y-3">
              
              {/* Pickup */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Pickup Point</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600 pointer-events-none" />
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  >
                    {COMMON_LOCATIONS.map((loc, idx) => (
                      <option key={`p-${idx}`} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-1">
                <button
                  type="button"
                  onClick={handleSwapLocations}
                  className="px-2.5 py-0.5 bg-slate-100 hover:bg-amber-100 hover:text-amber-900 text-slate-600 text-[11px] rounded-md border border-slate-200 transition-colors flex items-center space-x-1"
                >
                  <span>⇅ Swap Locations</span>
                </button>
              </div>

              {/* Drop */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>Drop Destination</span>
                </label>
                <div className="relative">
                  <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-600 pointer-events-none" />
                  <select
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  >
                    {COMMON_LOCATIONS.map((loc, idx) => (
                      <option key={`d-${idx}`} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quick Vehicle Type Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Select Cab Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {VEHICLE_FLEET.slice(0, 4).map((veh) => {
                    const isSelected = selectedVehicleId === veh.id;
                    return (
                      <button
                        key={veh.id}
                        type="button"
                        onClick={() => setSelectedVehicleId(veh.id)}
                        className={`p-2 rounded-lg text-left border transition-colors ${
                          isSelected
                            ? 'bg-amber-50 border-amber-500 text-slate-900 font-semibold shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-xs font-bold leading-tight">{veh.name.replace('Smart ', '').replace('Executive ', '').replace('Prime ', '')}</div>
                        <div className="text-[10px] text-slate-500">₹{veh.perKmRate}/km • {veh.passengers} seats</div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Fare Summary & Booking Action */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3.5">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Estimated Fare</span>
                  <span className="text-xs text-slate-700 font-medium">{selectedVehicle.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-slate-900 font-mono">₹{tripEstimate.totalFare}</span>
                  <span className="text-[10px] text-emerald-600 block font-semibold">Zero Surge • AC On</span>
                </div>
              </div>

              {/* Distance & Time */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 block text-[10px]">Distance</span>
                  <span className="font-bold text-slate-900">{tripEstimate.distanceKm} km</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 block text-[10px]">Est. Time</span>
                  <span className="font-bold text-slate-900">{tripEstimate.estTime}</span>
                </div>
              </div>

              {/* Mobile Phone Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number (for instant cab dispatch)
                </label>
                <div className="relative">
                  <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98155 05661"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Submit / Call Actions */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm flex items-center justify-center space-x-1.5 transition-all"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Book Cab Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="py-2 px-2 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold text-center flex items-center justify-center space-x-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Call Hotline</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleQuickWhatsApp}
                    className="py-2 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold text-center flex items-center justify-center space-x-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>

          </form>
        </div>

        {/* 3 Core Hubs Banner */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto text-xs">
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center space-x-2.5">
            <span className="font-bold text-slate-900 bg-amber-100 text-amber-900 px-2 py-1 rounded">Kharar</span>
            <span className="text-slate-600">Sunny Enclave, CU Campus, Gillco, Landran</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center space-x-2.5">
            <span className="font-bold text-slate-900 bg-blue-100 text-blue-900 px-2 py-1 rounded">Mohali</span>
            <span className="text-slate-600">Phases 1-11, IT City, CP67, Airport (IXC)</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center space-x-2.5">
            <span className="font-bold text-slate-900 bg-emerald-100 text-emerald-900 px-2 py-1 rounded">Chandigarh</span>
            <span className="text-slate-600">Sectors 1-70, ISBT 17/43, Railway Station</span>
          </div>
        </div>

      </div>
    </section>
  );
};

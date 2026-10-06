import React, { useState } from 'react';
import { 
  Car, 
  MapPin, 
  Navigation, 
  Clock, 
  ArrowRight, 
  ArrowUpDown, 
  Users, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Calendar, 
  ChevronDown,
  Sparkles,
  Check
} from 'lucide-react';
import { TripType } from '../types';
import { BUSINESS_INFO, COMMON_LOCATIONS, VEHICLE_FLEET, calculateEstimatedTrip } from '../data/mockData';

interface UberHeroSectionProps {
  onOpenBookingModal: (data?: any) => void;
  onBookShimla: (vehicleId?: string) => void;
}

export const UberHeroSection: React.FC<UberHeroSectionProps> = ({
  onOpenBookingModal,
  onBookShimla,
}) => {
  const [activeTab, setActiveTab] = useState<'ride' | 'intercity' | 'package' | 'reserve'>('ride');
  const [pickup, setPickup] = useState<string>('Chandigarh - Sector 17 (City Centre / ISBT 17)');
  const [drop, setDrop] = useState<string>('Shimla - Mall Road / ISBT Shimla');
  const [selectedRideId, setSelectedRideId] = useState<string>('sedan');
  const [rideTime, setRideTime] = useState<'now' | 'schedule'>('now');
  const [selectedDate, setSelectedDate] = useState<string>('Today');

  const tripEstimate = calculateEstimatedTrip(
    pickup,
    drop,
    activeTab === 'intercity' || drop.toLowerCase().includes('shimla') ? 'outstation' : 'local',
    selectedRideId
  );

  const handleTabChange = (tab: 'ride' | 'intercity' | 'package' | 'reserve') => {
    setActiveTab(tab);
    if (tab === 'intercity') {
      setPickup('Chandigarh - Sector 17 (City Centre / ISBT 17)');
      setDrop('Shimla - Mall Road / ISBT Shimla');
      setSelectedRideId('sedan');
    } else if (tab === 'package') {
      setPickup('Kharar - Sunny Enclave (Sector 125)');
      setDrop('Mohali - Phase 7 Market');
      setSelectedRideId('hatchback');
    } else if (tab === 'reserve') {
      setRideTime('schedule');
    } else {
      setRideTime('now');
    }
  };

  const handleSwap = () => {
    const temp = pickup;
    setPickup(drop);
    setDrop(temp);
  };

  const handleConfirmRide = () => {
    onOpenBookingModal({
      pickupLocation: pickup,
      dropLocation: drop,
      tripType: activeTab === 'intercity' || drop.toLowerCase().includes('shimla') ? 'outstation' : 'local',
      vehicleId: selectedRideId,
      date: selectedDate === 'Today' ? new Date().toISOString().split('T')[0] : selectedDate,
      time: rideTime === 'now' ? 'Instant Pickup (3-5 min)' : 'Scheduled',
    });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Uber / Smart Cab Pro!\nI want to book an ${selectedRideId.toUpperCase()} ride.\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Estimated Fare: ₹${tripEstimate.totalFare}\n` +
      `Please assign a chauffeur immediately.`
    );
    const link = document.createElement('a');
    link.href = `https://wa.me/919815505661?text=${text}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Uber Ride Tiers
  const rideTiers = [
    {
      id: 'sedan',
      name: 'UberGo',
      subtitle: 'Affordable, compact rides',
      models: 'Maruti Dzire / Etios',
      capacity: 4,
      etaMins: 2,
      basePrice: activeTab === 'intercity' || drop.toLowerCase().includes('shimla') ? 2499 : 249,
      badge: 'Popular',
    },
    {
      id: 'luxury',
      name: 'Uber Premier',
      subtitle: 'Top-rated drivers, newer sedans',
      models: 'Honda City / Ciaz',
      capacity: 4,
      etaMins: 4,
      basePrice: activeTab === 'intercity' || drop.toLowerCase().includes('shimla') ? 3199 : 349,
      badge: 'Comfort',
    },
    {
      id: 'suv',
      name: 'UberXL',
      subtitle: 'Comfortable SUVs for groups',
      models: 'Maruti Ertiga / Carens',
      capacity: 6,
      etaMins: 5,
      basePrice: activeTab === 'intercity' || drop.toLowerCase().includes('shimla') ? 3899 : 449,
      badge: '6 Seats',
    },
    {
      id: 'innova',
      name: 'Uber Intercity XL',
      subtitle: 'Luxury mountain cruiser with captain seats',
      models: 'Toyota Innova Crysta',
      capacity: 7,
      etaMins: 7,
      basePrice: activeTab === 'intercity' || drop.toLowerCase().includes('shimla') ? 4999 : 649,
      badge: 'VIP',
    },
  ];

  return (
    <section id="ride" className="relative bg-[#FAFAFA] border-b border-neutral-200 pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid: Left Booking Widget + Right Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Iconic Uber Booking Widget Card */}
          <div className="lg:col-span-6 xl:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-200/80">
            
            {/* Top Tab Bar: Ride | Intercity | Courier | Reserve */}
            <div className="flex items-center space-x-1 sm:space-x-2 pb-6 border-b border-neutral-100 overflow-x-auto no-scrollbar">
              {[
                { id: 'ride', label: 'Ride', icon: '🚗' },
                { id: 'intercity', label: 'Intercity', icon: '🏔️' },
                { id: 'package', label: 'Package', icon: '📦' },
                { id: 'reserve', label: 'Reserve', icon: '🕒' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  data-no-autocall="true"
                  onClick={() => handleTabChange(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Headline */}
            <div className="pt-6 pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-900 leading-tight">
                {activeTab === 'intercity' ? 'Chandigarh to Shimla with Uber' : 'Go anywhere with Uber'}
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                {activeTab === 'intercity'
                  ? 'Fixed flat fares · Hill-certified drivers · All toll taxes included'
                  : 'Fast 3-5 min pickup in Chandigarh, Mohali & Kharar. Zero surge guaranteed.'}
              </p>
            </div>

            {/* Inputs Container with Vertical Route Line */}
            <div className="space-y-3 relative">
              
              {/* Vertical Visual Line Connecting Pickup and Drop */}
              <div className="absolute left-[22px] top-6 bottom-6 w-0.5 bg-neutral-300 pointer-events-none z-0"></div>

              {/* Pickup Input */}
              <div className="relative z-10 flex items-center bg-[#F3F3F3] rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-black transition-all">
                <div className="w-10 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-black ring-4 ring-neutral-300/60"></div>
                </div>
                <div className="flex-1 min-w-0 pr-2">
                  <label className="block text-[10px] uppercase font-bold text-neutral-400">Pickup Location</label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 truncate focus:outline-hidden py-0.5 cursor-pointer"
                  >
                    {COMMON_LOCATIONS.map((loc) => (
                      <option key={`p-${loc}`} value={loc} className="text-xs">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Button (Floating on the right) */}
              <div className="relative flex justify-end pr-2 -my-2 z-20">
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={handleSwap}
                  className="w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-700 hover:text-black hover:bg-neutral-50 transition-transform active:scale-95"
                  title="Swap pickup and drop locations"
                >
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </div>

              {/* Drop Input */}
              <div className="relative z-10 flex items-center bg-[#F3F3F3] rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-black transition-all">
                <div className="w-10 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-black"></div>
                </div>
                <div className="flex-1 min-w-0 pr-2">
                  <label className="block text-[10px] uppercase font-bold text-neutral-400">Drop Destination</label>
                  <select
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-neutral-900 truncate focus:outline-hidden py-0.5 cursor-pointer"
                  >
                    {COMMON_LOCATIONS.map((loc) => (
                      <option key={`d-${loc}`} value={loc} className="text-xs">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Secondary Controls: Time & Rider */}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <div className="bg-[#F3F3F3] rounded-2xl p-2.5 flex items-center space-x-2 text-xs font-semibold text-neutral-800">
                <Clock className="w-4 h-4 text-neutral-600 shrink-0" />
                <select
                  value={rideTime}
                  onChange={(e) => setRideTime(e.target.value as any)}
                  className="bg-transparent w-full focus:outline-hidden cursor-pointer"
                >
                  <option value="now">Pickup now (3 min)</option>
                  <option value="schedule">Schedule for later</option>
                </select>
              </div>

              <div className="bg-[#F3F3F3] rounded-2xl p-2.5 flex items-center space-x-2 text-xs font-semibold text-neutral-800">
                <Users className="w-4 h-4 text-neutral-600 shrink-0" />
                <span className="truncate">For me (1-6 riders)</span>
              </div>
            </div>

            {/* Ride Tiers Selector in Card */}
            <div className="pt-4 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                <span>Select Ride Option</span>
                <span className="text-emerald-600 font-semibold lowercase">nearby drivers ready</span>
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {rideTiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    data-no-autocall="true"
                    onClick={() => setSelectedRideId(tier.id)}
                    className={`w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between border ${
                      selectedRideId === tier.id
                        ? 'border-black bg-neutral-50 shadow-sm'
                        : 'border-transparent hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-lg shrink-0">
                        {tier.id === 'suv' || tier.id === 'innova' ? '🚙' : '🚗'}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-bold text-xs sm:text-sm text-neutral-900">{tier.name}</span>
                          <span className="text-[11px] text-neutral-500 font-medium">· {tier.etaMins}m away</span>
                        </div>
                        <p className="text-[11px] text-neutral-500 truncate max-w-[170px] sm:max-w-[220px]">
                          {tier.models} · {tier.capacity} seats
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-black text-sm sm:text-base text-neutral-900 font-mono">
                        ₹{tier.basePrice}
                      </span>
                      <span className="block text-[10px] text-neutral-400">upfront fare</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Big Black Uber Action Button */}
            <div className="pt-4 space-y-2">
              <button
                type="button"
                data-no-autocall="true"
                onClick={handleConfirmRide}
                className="w-full py-3.5 px-6 rounded-2xl bg-black hover:bg-neutral-800 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all shadow-md active:scale-[0.99]"
              >
                <span>Request {rideTiers.find(t => t.id === selectedRideId)?.name || 'UberGo'}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <div className="flex items-center justify-between pt-2 text-[11px] text-neutral-500">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  data-no-autocall="true"
                  className="flex items-center space-x-1 hover:text-black font-semibold"
                >
                  <Phone className="w-3 h-3 text-neutral-700" />
                  <span>Call Hotline: {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={handleWhatsApp}
                  className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-800 font-semibold"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-600" />
                  <span>WhatsApp Dispatch</span>
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: Live Interactive Uber Map Simulator */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-4">
            
            {/* Map Frame Card */}
            <div className="relative bg-white rounded-3xl p-2 sm:p-3 border border-neutral-200/80 shadow-xl overflow-hidden min-h-[460px] sm:min-h-[520px] flex flex-col justify-between">
              
              {/* Simulated Map Canvas */}
              <div className="absolute inset-0 bg-[#E8ECE9] overflow-hidden">
                
                {/* SVG Map Grid & Streets */}
                <svg className="w-full h-full object-cover opacity-60" viewBox="0 0 800 600" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D5DDD7" strokeWidth="1" />
                    </pattern>
                  </defs>
                  
                  {/* Background grid */}
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Rivers / Lakes (Sukhna Lake simulation) */}
                  <path d="M 650 40 Q 720 120 700 240 Q 660 300 680 380 L 800 380 L 800 0 Z" fill="#C2D8D6" opacity="0.8" />
                  
                  {/* Major Highway Arteries (NH-5 Himalayan Expressway & Madhya Marg) */}
                  <path d="M 50 550 Q 220 480 340 380 T 520 220 T 720 80" fill="none" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
                  <path d="M 50 550 Q 220 480 340 380 T 520 220 T 720 80" fill="none" stroke="#FCE788" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* City Grid Roads */}
                  <path d="M 120 50 L 120 550" stroke="#FFFFFF" strokeWidth="6" />
                  <path d="M 280 50 L 280 550" stroke="#FFFFFF" strokeWidth="8" />
                  <path d="M 440 50 L 440 550" stroke="#FFFFFF" strokeWidth="6" />
                  <path d="M 50 180 L 750 180" stroke="#FFFFFF" strokeWidth="6" />
                  <path d="M 50 320 L 750 320" stroke="#FFFFFF" strokeWidth="9" />
                  <path d="M 50 460 L 750 460" stroke="#FFFFFF" strokeWidth="6" />

                  {/* Active Route Polyline in Uber Blue */}
                  <path 
                    d="M 280 320 Q 380 300 440 240 T 620 140" 
                    fill="none" 
                    stroke="#000000" 
                    strokeWidth="5" 
                    strokeLinecap="round"
                    strokeDasharray="6 4"
                    className="animate-pulse"
                  />
                </svg>

                {/* Simulated Floating Markers */}
                {/* 1. Pickup Pin with ETA Callout */}
                <div className="absolute left-[32%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                  <div className="bg-black text-white px-2.5 py-1 rounded-full text-[10px] font-black shadow-lg mb-1 whitespace-nowrap flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>3 min pickup · Sector 17</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-black ring-4 ring-white shadow-md"></div>
                </div>

                {/* 2. Destination Pin */}
                <div className="absolute left-[75%] top-[24%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                  <div className="bg-white text-black px-2.5 py-1 rounded-full text-[10px] font-black shadow-lg mb-1 whitespace-nowrap border border-neutral-200">
                    <span>🏁 {drop.split(' - ')[0] || 'Shimla'}</span>
                  </div>
                  <div className="w-4 h-4 bg-black rotate-45 ring-4 ring-white shadow-md"></div>
                </div>

                {/* 3. Moving Uber Cars Simulated on Grid */}
                <div className="absolute left-[26%] top-[44%] z-10 flex items-center space-x-1 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-md border border-neutral-200">
                  <span className="text-xs">🚗</span>
                  <span className="text-[10px] font-bold text-neutral-800">UberGo · Dzire</span>
                </div>

                <div className="absolute left-[45%] top-[36%] z-10 flex items-center space-x-1 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-md border border-neutral-200">
                  <span className="text-xs">🚙</span>
                  <span className="text-[10px] font-bold text-neutral-800">UberXL · Ertiga</span>
                </div>

                <div className="absolute left-[60%] top-[20%] z-10 flex items-center space-x-1 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-md border border-neutral-200">
                  <span className="text-xs">⭐</span>
                  <span className="text-[10px] font-bold text-neutral-800">Premier · City</span>
                </div>

                {/* Sector Landmarks labels */}
                <div className="absolute left-[15%] top-[70%] text-[10px] font-bold text-neutral-400 uppercase tracking-widest pointer-events-none">
                  Kharar / Mohali
                </div>
                <div className="absolute left-[70%] top-[10%] text-[10px] font-bold text-neutral-500 uppercase tracking-widest pointer-events-none">
                  Himalayan Foothills (Shimla NH-5)
                </div>
              </div>

              {/* Map Floating Header Overlay */}
              <div className="relative z-20 flex items-center justify-between p-2">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2 border border-neutral-200 shadow-md flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-black text-neutral-900">Live Tricity Dispatch Map</span>
                  <span className="text-[10px] text-neutral-500 font-medium">· 18 Cars Available</span>
                </div>

                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={() => onBookShimla('sedan')}
                  className="bg-black hover:bg-neutral-800 text-white rounded-2xl px-3.5 py-2 text-xs font-bold shadow-md flex items-center space-x-1.5 transition-colors"
                >
                  <span>Book Shimla Taxi (₹2,499)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Map Floating Bottom Card: Live ETA Summary */}
              <div className="relative z-20 mt-auto bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-neutral-200 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400">Current Selected Route</div>
                    <div className="text-xs sm:text-sm font-black text-neutral-900 truncate max-w-[280px] sm:max-w-md">
                      {pickup.split(' - ')[0]} → {drop.split(' - ')[0]}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block">Est. Time</span>
                      <span className="text-xs sm:text-sm font-black text-neutral-900 font-mono">
                        {drop.toLowerCase().includes('shimla') ? '3 hr 15 min' : '15-20 min'}
                      </span>
                    </div>

                    <button
                      type="button"
                      data-no-autocall="true"
                      onClick={handleConfirmRide}
                      className="px-4 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs shadow-xs"
                    >
                      Confirm Pickup
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom 3 Quick Value Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-2xl border border-neutral-200 text-center">
                <span className="text-base block">🛡️</span>
                <span className="font-bold text-xs text-neutral-900 block mt-0.5">Uber PIN Verification</span>
                <span className="text-[10px] text-neutral-500">Board with 4-digit code</span>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-neutral-200 text-center">
                <span className="text-base block">⚡</span>
                <span className="font-bold text-xs text-neutral-900 block mt-0.5">Zero Surge Rates</span>
                <span className="text-[10px] text-neutral-500">Guaranteed fixed prices</span>
              </div>

              <div className="bg-white p-3 rounded-2xl border border-neutral-200 text-center">
                <span className="text-base block">📞</span>
                <span className="font-bold text-xs text-neutral-900 block mt-0.5">24/7 Phone Support</span>
                <span className="text-[10px] text-neutral-500">{BUSINESS_INFO.phone}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, Clock, MapPin, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

// Ultra high-resolution imagery matching user's uploaded layout
import mohaliTaxiLandmarkHdImg from '../assets/images/mohali_taxi_landmark_hd_1791357890144.jpg';
import womanPassengerHdImg from '../assets/images/woman_passenger_hd_1791357906327.jpg';
import familyPassengerHdImg from '../assets/images/family_passenger_hd_1791357919602.jpg';

interface MohaliLocalCabSectionProps {
  onOpenBooking: () => void;
}

export const MohaliLocalCabSection: React.FC<MohaliLocalCabSectionProps> = ({
  onOpenBooking,
}) => {
  const handleCall = () => {
    trackAdCallConversion('mohali_local_cab_call_button');
  };

  const handleWhatsApp = () => {
    trackWhatsAppConversion('mohali_local_cab_whatsapp');
    const msg = encodeURIComponent(
      'Hello Best Cab Services Mohali!\nI need a local/outstation cab booking in Mohali. Please share rates and available drivers.'
    );
    window.open(`https://wa.me/919815505661?text=${msg}`, '_blank');
  };

  return (
    <section id="about" className="py-6 sm:py-8 px-4 sm:px-6 bg-[#FFFDF9] border-t border-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: High-Quality Visual Collage strictly matching user's uploaded design */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 group">
              
              {/* High-Resolution Background Photo: White Taxi at Mohali entry monument with Indian flag */}
              <img
                src={mohaliTaxiLandmarkHdImg}
                alt="Local Cab Taxi Service at Mohali landmark"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />

              {/* Contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* Orange Corner Accent Bracket (top-left) */}
              <div className="absolute top-0 left-0 w-12 sm:w-14 h-12 sm:h-14 border-t-4 border-l-4 border-orange-500 rounded-tl-2xl sm:rounded-tl-3xl pointer-events-none z-10" />

              {/* Top-Left Inset: Smiling Woman Passenger */}
              <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 w-24 h-24 sm:w-30 sm:h-30 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 border-white shadow-xl z-20 bg-slate-100">
                <img
                  src={womanPassengerHdImg}
                  alt="Comfortable taxi passenger in Mohali"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Right Inset: Happy Indian Family in Car */}
              <div className="absolute bottom-3.5 right-3.5 sm:bottom-5 sm:right-5 w-32 sm:w-42 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 border-white shadow-xl z-20 bg-slate-100">
                <img
                  src={familyPassengerHdImg}
                  alt="Happy family riding local cab in Mohali"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Left Badge: 24/7 Local & Outstation Rides */}
              <div className="absolute bottom-3.5 left-3.5 sm:bottom-5 sm:left-5 z-20 bg-orange-500 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-xl border-2 border-white flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-orange-500 text-orange-500" />
                </div>
                <div className="leading-tight">
                  <div className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                    24/7
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-orange-50 whitespace-nowrap mt-0.5">
                    Local & Outstation Rides
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Title as H2, Requested Paragraph, 3 Feature Cards in ORANGE & WHITE COLORS */}
          <div className="lg:col-span-6 space-y-3.5 flex flex-col justify-between">
            
            {/* THIS IS H2 TITLE */}
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-tight">
                Hire a Local Cab in <span className="text-orange-500">Mohali</span> for Safe & Comfortable Rides
              </h2>
              {/* Warm Brand Orange Accent Line */}
              <div className="w-16 h-1 bg-orange-500 rounded-full" />
            </div>

            {/* User Requested Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Book reliable Local Cab Booking in Mohali for comfortable and convenient travel. Our Taxi Services are available for daily rides, family trips, office travel, and local journeys, with safe and affordable options to suit your needs. We also provide dependable Airport Cab Services for timely pick-up and drop-off to and from Chandigarh International Airport. With professional drivers, comfortable cars, and 24/7 booking support, you can enjoy a smooth and hassle-free ride across Mohali and nearby areas.
            </p>

            {/* 3 Feature Cards with ORANGE & WHITE CIRCULAR ICONS as requested */}
            <div className="space-y-2.5">
              
              {/* Feature 1: Safe & Reliable Rides (Orange & White Icon) */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-orange-100 hover:border-orange-400 flex items-center space-x-3.5 shadow-2xs hover:shadow-xs transition-all">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/20">
                  <ShieldCheck className="w-5 h-5 text-white stroke-[2.4]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    Safe & Reliable Rides
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Verified drivers, clean cars and your safety is our priority.
                  </p>
                </div>
              </div>

              {/* Feature 2: Affordable Fares (Orange & White Icon) */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-orange-100 hover:border-orange-400 flex items-center space-x-3.5 shadow-2xs hover:shadow-xs transition-all">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/20">
                  <span className="text-lg font-black text-white">₹</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    Affordable Fares
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Transparent pricing with no hidden charges. Get the best value for your ride.
                  </p>
                </div>
              </div>

              {/* Feature 3: Always Available (Orange & White Icon) */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-orange-100 hover:border-orange-400 flex items-center space-x-3.5 shadow-2xs hover:shadow-xs transition-all">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/20">
                  <Clock className="w-5 h-5 text-white stroke-[2.4]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    Always Available
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Book anytime, anywhere. We are just a call away, 24/7.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row: Trusted By & Action Buttons in Brand Orange, White & WhatsApp on the right */}
            <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
              
              {/* Trust Badge with Avatar */}
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-orange-200 bg-orange-100 shrink-0">
                  <img
                    src={womanPassengerHdImg}
                    alt="Trusted rider"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Trusted by Thousands
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Local Residents & Visitors
                  </div>
                </div>
              </div>

              {/* CTA Action Buttons: Book, Call, and WhatsApp on the right */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={onOpenBooking}
                  className="py-2.5 px-3.5 sm:px-4 rounded-xl bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-500 font-black text-xs sm:text-sm flex items-center space-x-1.5 transition-all shadow-xs active:scale-95"
                >
                  <span>Book Ride</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  data-no-autocall="true"
                  onClick={handleCall}
                  className="py-2.5 px-3.5 sm:px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm flex items-center space-x-1.5 transition-all shadow-md shadow-orange-500/20 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 fill-white stroke-none" />
                  <span>Call Now</span>
                </a>

                {/* WhatsApp button on the right */}
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={handleWhatsApp}
                  className="py-2.5 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm flex items-center space-x-1.5 transition-all shadow-md shadow-[#25D366]/25 active:scale-95 shrink-0"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white stroke-none" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, Send, CheckCircle2, Car, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO, COMMON_LOCATIONS } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

interface CleanContactSectionProps {
  onOpenBookingModal?: () => void;
}

export const CleanContactSection: React.FC<CleanContactSectionProps> = ({ onOpenBookingModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    tripType: 'local',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCall = () => {
    trackAdCallConversion('contact_section_call');
  };

  const handleWhatsApp = () => {
    trackWhatsAppConversion('contact_section_whatsapp');
    const msg = encodeURIComponent(
      `Hello Best Cab Services in Mohali!\nI would like to book a cab ride.\n` +
      (formData.pickup ? `Pickup: ${formData.pickup}\n` : '') +
      (formData.drop ? `Drop: ${formData.drop}\n` : '') +
      `Please provide immediate cab confirmation.`
    );
    window.open(`https://wa.me/919815505661?text=${msg}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    trackAdCallConversion('contact_form_submit');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        pickup: '',
        drop: '',
        tripType: 'local',
        notes: '',
      });
    }, 8000);
  };

  return (
    <section id="contact" className="py-8 sm:py-12 px-4 sm:px-6 bg-[#FFFDF9] border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center justify-center space-x-1.5">
            <Phone className="w-4 h-4 text-orange-500" />
            <span>24/7 Cab Booking Desk</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact Us
          </h2>
          <p className="text-sm text-slate-600">
            Reach out to Best Cab Services in Mohali for immediate doorstep rides, airport drops, and outstation taxi bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Direct Call & WhatsApp & Operating hours */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Call Card */}
            <div className="bg-white rounded-3xl border border-orange-200/80 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                  <Phone className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block">
                    Direct 24/7 Hotline
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    data-no-autocall="true"
                    onClick={handleCall}
                    className="text-2xl sm:text-3xl font-black text-slate-900 hover:text-orange-600 transition-colors tracking-tight"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with our 24/7 dispatch manager for instant cab allocation in Mohali, Kharar, and Chandigarh.
              </p>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                data-no-autocall="true"
                onClick={handleCall}
                className="w-full py-3.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-sm flex items-center justify-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-98 animate-call-glow"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Call Now for Instant Cab</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                  <MessageSquare className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                    WhatsApp Booking
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Send your pickup location and destination on WhatsApp to receive quick driver confirmation.
              </p>

              <button
                type="button"
                data-no-autocall="true"
                onClick={handleWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center space-x-2 transition-all shadow-md shadow-emerald-600/20 active:scale-98"
              >
                <MessageSquare className="w-4 h-4 stroke-[2.5]" />
                <span>Chat & Book on WhatsApp</span>
              </button>
            </div>

            {/* Service Highlights Card */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Booking Guarantees
              </h4>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>24 Hours / 7 Days Service Across Mohali & Tricity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Doorstep Pickup Within 5-8 Minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Zero Advance Required • Pay Driver via Cash or UPI</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Quick Booking / Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
                  Online Inquiry Form
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Book or Request a Cab
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your travel details below and our team will get back to you immediately.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    Booking Request Received!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Our local dispatch team is assigning your cab. For urgent pickup in 5-8 minutes, you can also call our dispatcher directly at{' '}
                    <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-bold underline">{BUSINESS_INFO.phone}</a>.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      data-no-autocall="true"
                      onClick={handleCall}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-orange-500 text-white text-xs font-black shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Dispatcher Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Manjeet Singh"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98155 05661"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-orange-500 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        placeholder="e.g. Mohali Phase 3B2 / Kharar"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Drop Destination
                      </label>
                      <input
                        type="text"
                        value={formData.drop}
                        onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                        placeholder="e.g. Chandigarh Airport / Shimla"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Ride Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'local', label: 'Local Ride' },
                        { id: 'airport', label: 'Airport (IXC)' },
                        { id: 'outstation', label: 'Outstation' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, tripType: t.id })}
                          className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                            formData.tripType === t.id
                              ? 'bg-orange-50 border-orange-500 text-orange-700'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Special Request or Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Need child seat, early morning departure, extra boot luggage space..."
                      className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      data-no-autocall="true"
                      className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-sm flex items-center justify-center space-x-2 transition-all shadow-md shadow-orange-500/20 active:scale-98"
                    >
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>Send Booking Request</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle, Car, Phone, MessageSquare, ArrowRight, ShieldCheck, KeyRound, Sparkles } from 'lucide-react';
import { BookingFormData } from '../types';
import { BUSINESS_INFO, VEHICLE_FLEET, calculateEstimatedTrip } from '../data/mockData';
import confetti from 'canvas-confetti';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<BookingFormData>;
  onBookingCreated?: (booking: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
  onBookingCreated,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    tripType: initialData?.tripType || 'local',
    pickupLocation: initialData?.pickupLocation || 'Chandigarh - Sector 17 (City Centre / ISBT 17)',
    dropLocation: initialData?.dropLocation || 'Shimla - Mall Road / ISBT Shimla',
    vehicleId: initialData?.vehicleId || 'sedan',
    date: initialData?.date || new Date().toISOString().split('T')[0],
    time: initialData?.time || 'Instant Pickup (3-5 min)',
    passengerName: initialData?.passengerName || '',
    passengerPhone: initialData?.passengerPhone || '',
    flightNumber: initialData?.flightNumber || '',
  });

  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [validationError, setValidationError] = useState('');
  const [assignedDriver, setAssignedDriver] = useState<{
    name: string;
    carNumber: string;
    carModel: string;
    etaMins: number;
    otp: string;
  } | null>(null);

  if (!isOpen) return null;

  const tripEstimate = calculateEstimatedTrip(
    formData.pickupLocation,
    formData.dropLocation,
    formData.tripType,
    formData.vehicleId
  );

  const selectedVehicle = VEHICLE_FLEET.find(v => v.id === formData.vehicleId) || VEHICLE_FLEET[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.passengerPhone || formData.passengerPhone.length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setValidationError('');

    const driverPool = [
      { name: 'Gurpreet Singh', carNumber: 'CH-01-TB-4892', carModel: selectedVehicle.carModels.split('/')[0].trim(), etaMins: 3, otp: '4892' },
      { name: 'Harvinder Sharma', carNumber: 'PB-65-AX-3104', carModel: selectedVehicle.carModels.split('/')[0].trim(), etaMins: 5, otp: '7123' },
    ];
    const chosenDriver = driverPool[0];
    setAssignedDriver(chosenDriver);
    setStep('confirmed');

    if (onBookingCreated) {
      onBookingCreated({
        customerName: formData.passengerName || 'Passenger',
        customerPhone: formData.passengerPhone,
        pickupLocation: formData.pickupLocation,
        dropLocation: formData.dropLocation,
        tripType: formData.tripType,
        vehicleName: selectedVehicle.name,
        fare: tripEstimate.totalFare,
        status: 'assigned',
        date: formData.date || 'Today',
        time: formData.time || 'Now',
        driverName: chosenDriver.name,
        driverPhone: '+91 98721 34912',
        vehicleNumber: chosenDriver.carNumber,
        otp: chosenDriver.otp,
      });
    }

    try {
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const handleWhatsAppShare = () => {
    trackWhatsAppConversion('booking_modal_whatsapp');
    const text = encodeURIComponent(
      `Hello Best Cab Services Mohali Dispatch!\nI want to confirm my cab ride.\n` +
      `Pickup: ${formData.pickupLocation}\n` +
      `Drop: ${formData.dropLocation}\n` +
      `Vehicle: ${selectedVehicle.name}\n` +
      `Passenger Phone: ${formData.passengerPhone}`
    );
    window.open(`https://wa.me/919815505661?text=${text}`, '_blank');
  };

  return (
    <div data-no-autocall="true" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div data-no-autocall="true" className="relative w-full max-w-lg bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-amber-500/30">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/60 p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-bold">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xl font-black text-white font-sans">
                Best Cab Services <span className="text-orange-400">Mohali</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold block">
                Instant Ride Confirmation Desk
              </span>
            </div>
          </div>
          <button
            type="button"
            data-no-autocall="true"
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Route Summary */}
              <div className="bg-slate-950 rounded-2xl p-4 space-y-2.5 text-xs border border-slate-800">
                <div className="flex items-start space-x-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 shrink-0"></div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Pickup Location</span>
                    <span className="font-bold text-white truncate block">{formData.pickupLocation}</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5 pt-2 border-t border-slate-800/80">
                  <div className="w-2.5 h-2.5 bg-amber-400 mt-1 shrink-0"></div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Drop Destination</span>
                    <span className="font-bold text-white truncate block">{formData.dropLocation}</span>
                  </div>
                </div>
              </div>

              {/* Fare & Vehicle Snapshot */}
              <div className="flex items-center justify-between p-3.5 bg-slate-950 rounded-2xl border border-amber-500/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-lg text-amber-400">
                    🚗
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-white">{selectedVehicle.name}</h4>
                    <p className="text-[11px] text-slate-400">{selectedVehicle.carModels.split('/')[0]} · {selectedVehicle.passengers} seats</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-black text-amber-400 block">Zero Advance</span>
                  <span className="block text-[10px] text-slate-400">Pay Driver Post-Ride</span>
                </div>
              </div>

              {/* Passenger Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.passengerName}
                    onChange={(e) => setFormData({ ...formData, passengerName: e.target.value })}
                    placeholder="e.g. Manjeet Singh"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase font-bold text-slate-300 block mb-1">
                    Mobile Number (For Driver Call & OTP)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.passengerPhone}
                    onChange={(e) => setFormData({ ...formData, passengerPhone: e.target.value })}
                    placeholder="e.g. 98155 05661"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              {validationError && (
                <div className="p-2.5 rounded-xl bg-red-950 text-red-300 text-xs font-semibold border border-red-800">
                  {validationError}
                </div>
              )}

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  type="submit"
                  data-no-autocall="true"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-amber-400/20 active:scale-98"
                >
                  <span>Confirm & Assign Cab Now</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={handleWhatsAppShare}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-400 font-bold text-xs flex items-center justify-center space-x-1.5 border border-emerald-500/30 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Confirm via WhatsApp Instead</span>
                </button>
              </div>

              <div className="text-center pt-1 text-[11px] text-slate-400">
                24/7 Helpline: <a href={`tel:${BUSINESS_INFO.phoneClean}`} onClick={() => trackAdCallConversion('modal_helpline_call')} className="text-amber-400 font-bold underline">{BUSINESS_INFO.phone}</a>
              </div>
            </form>
          ) : (
            /* Confirmed Screen */
            <div className="space-y-5 text-center">
              <div className="w-14 h-14 bg-gradient-to-tr from-amber-400 to-amber-300 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-amber-400/20">
                <CheckCircle className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Chauffeur Assigned!
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Arriving in ~{assignedDriver?.etaMins} mins at your pickup location.
                </p>
              </div>

              {assignedDriver && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Assigned Chauffeur</span>
                      <span className="text-base font-black text-white block">{assignedDriver.name}</span>
                      <span className="text-xs text-slate-400">{assignedDriver.carModel} · <strong className="text-amber-400 font-mono">{assignedDriver.carNumber}</strong></span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-black text-slate-400 block">Trip Start PIN</span>
                      <span className="text-2xl font-black font-mono text-slate-950 bg-amber-400 px-3 py-1 rounded-xl inline-block tracking-wider">
                        {assignedDriver.otp}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    💡 Share this 4-digit PIN with driver {assignedDriver.name} upon boarding to start your trip securely.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  data-no-autocall="true"
                  onClick={() => trackAdCallConversion('confirmed_call_driver')}
                  className="py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center justify-center space-x-1.5 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call Chauffeur</span>
                </a>

                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={() => {
                    setStep('form');
                    onClose();
                  }}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

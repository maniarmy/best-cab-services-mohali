import React from 'react';
import { 
  Car, Phone, ShieldCheck, MapPin, Clock, 
  Calendar, CheckCircle, X, LogOut, ArrowRight, Download, Plus
} from 'lucide-react';
import { AuthUser, RideBooking } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface CustomerPortalProps {
  user: AuthUser;
  bookings: RideBooking[];
  onBookNewCab: () => void;
  onLogout: () => void;
  onClose: () => void;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({
  user,
  bookings,
  onBookNewCab,
  onLogout,
  onClose,
}) => {
  // Find bookings belonging to this customer
  const customerBookings = bookings.filter(
    (b) =>
      b.customerEmail?.toLowerCase() === user.email.toLowerCase() ||
      b.customerName.toLowerCase().includes(user.name.toLowerCase()) ||
      b.customerPhone.includes('98155')
  );

  const activeBooking = customerBookings.find(
    (b) => b.status === 'assigned' || b.status === 'in_progress' || b.status === 'pending'
  );
  const pastBookings = customerBookings.filter((b) => b.status === 'completed' || b.status === 'cancelled');

  return (
    <div data-no-autocall="true" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div data-no-autocall="true" className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-black">
              👤
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-black text-white">{user.name}</h2>
                <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full">
                  Customer Account
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {user.email} • {user.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              data-no-autocall="true"
              onClick={onBookNewCab}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1 shadow-xs transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Book Ride</span>
            </button>

            <button
              type="button"
              data-no-autocall="true"
              onClick={onLogout}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              title="Log out"
            >
              <LogOut className="w-4 h-4" />
            </button>

            <button
              type="button"
              data-no-autocall="true"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          
          {/* Active Ride Banner */}
          {activeBooking ? (
            <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-400 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                    Live Booking: {activeBooking.tripType === 'outstation' ? '🏔️ Shimla Taxi' : 'Tricity Cab'}
                  </h3>
                </div>
                <span className="font-mono text-xs font-black bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full uppercase">
                  {activeBooking.status.replace('_', ' ')}
                </span>
              </div>

              {/* Route */}
              <div className="space-y-2 text-xs bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="flex items-start space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Pickup Location</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">{activeBooking.pickupLocation}</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2 pt-1 border-t border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Drop Destination</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">{activeBooking.dropLocation}</span>
                  </div>
                </div>
              </div>

              {/* Driver & OTP Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl shrink-0">
                    🧔
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">Chauffeur Assigned</span>
                    <span className="font-black text-slate-900 text-xs sm:text-sm block">
                      {activeBooking.driverName || 'Dispatching driver...'}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {activeBooking.vehicleNumber || 'Maruti Dzire'}
                    </span>
                  </div>
                </div>

                <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-amber-800 uppercase font-black block">Start OTP</span>
                    <span className="text-xs text-slate-600">Share with chauffeur at boarding</span>
                  </div>
                  <div className="font-mono font-black text-2xl text-slate-950 tracking-widest bg-amber-400 px-3 py-1 rounded-lg">
                    {activeBooking.otp || '4892'}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {activeBooking.driverPhone && (
                  <a
                    href={`tel:${activeBooking.driverPhone}`}
                    data-no-autocall="true"
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Driver ({activeBooking.driverName})</span>
                  </a>
                )}

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  data-no-autocall="true"
                  className="py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>24/7 Helpline ({BUSINESS_INFO.phone})</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <Car className="w-8 h-8 text-slate-400 mx-auto" />
              <h4 className="font-bold text-sm text-slate-800">No Active Ride in Transit</h4>
              <p className="text-xs text-slate-500">Need a taxi to Shimla or within Chandigarh / Mohali / Kharar?</p>
              <button
                type="button"
                data-no-autocall="true"
                onClick={onBookNewCab}
                className="mt-2 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Book a Ride Now</span>
              </button>
            </div>
          )}

          {/* Past Trips History */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Your Past Ride History
            </h4>

            {pastBookings.length === 0 ? (
              <div className="text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-400 text-xs">
                No past rides found in your history.
              </div>
            ) : (
              pastBookings.map((b) => (
                <div
                  key={b.id}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                        {b.id}
                      </span>
                      <span className="font-bold text-slate-900">{b.pickupLocation} → {b.dropLocation}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      {b.date} • {b.vehicleName} • Chauffeur: {b.driverName || 'Gurpreet Singh'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end space-x-3 shrink-0">
                    <span className="font-mono font-black text-sm text-slate-900">₹{b.fare}</span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Completed
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

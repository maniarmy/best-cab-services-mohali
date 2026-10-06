import React, { useState } from 'react';
import { 
  Car, Phone, CheckCircle, Navigation, MapPin, 
  Power, ShieldCheck, Clock, X, LogOut, ArrowRight, MessageSquare
} from 'lucide-react';
import { AuthUser, RideBooking } from '../types';

interface DriverPortalProps {
  user: AuthUser;
  bookings: RideBooking[];
  onUpdateBookingStatus: (id: string, status: RideBooking['status']) => void;
  onLogout: () => void;
  onClose: () => void;
}

export const DriverPortal: React.FC<DriverPortalProps> = ({
  user,
  bookings,
  onUpdateBookingStatus,
  onLogout,
  onClose,
}) => {
  const [isOnDuty, setIsOnDuty] = useState(user.isOnline ?? true);
  const [enteredOtp, setEnteredOtp] = useState<{ [bookingId: string]: string }>({});
  const [otpError, setOtpError] = useState<{ [bookingId: string]: string }>({});

  // Filter bookings assigned to this driver or pending
  const driverBookings = bookings.filter(
    (b) => b.driverName?.toLowerCase().includes('gurpreet') || b.status === 'assigned' || b.status === 'in_progress'
  );

  const activeRides = driverBookings.filter((b) => b.status === 'assigned' || b.status === 'in_progress');
  const completedToday = driverBookings.filter((b) => b.status === 'completed');
  const todayEarnings = completedToday.reduce((sum, b) => sum + Math.round(b.fare * 0.82), 0); // 82% driver payout

  const handleStartTrip = (booking: RideBooking) => {
    const input = (enteredOtp[booking.id] || '').trim();
    if (booking.otp && input !== booking.otp) {
      setOtpError({ ...otpError, [booking.id]: `Invalid OTP. Correct OTP is ${booking.otp}` });
      return;
    }
    setOtpError({ ...otpError, [booking.id]: '' });
    onUpdateBookingStatus(booking.id, 'in_progress');
  };

  return (
    <div data-no-autocall="true" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div data-no-autocall="true" className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center text-xl font-black">
              🧔
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-black text-white">{user.name}</h2>
                <span className="text-[10px] font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                  Verified Captain
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {user.vehicleAssigned || 'Maruti Dzire (CH-01-TB-4892)'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              data-no-autocall="true"
              onClick={() => setIsOnDuty(!isOnDuty)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-colors ${
                isOnDuty ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              <Power className="w-3.5 h-3.5" />
              <span>{isOnDuty ? 'ON DUTY' : 'OFF DUTY'}</span>
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

        {/* Driver Stats */}
        <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 bg-slate-50 border-b border-slate-200 text-center">
          <div className="bg-white p-2.5 rounded-xl border border-slate-200">
            <span className="text-[11px] text-slate-500 block">Assigned Rides</span>
            <span className="text-lg font-black text-blue-600 font-mono">{activeRides.length}</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200">
            <span className="text-[11px] text-slate-500 block">Trips Today</span>
            <span className="text-lg font-black text-emerald-600 font-mono">{completedToday.length}</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200">
            <span className="text-[11px] text-slate-500 block">Est. Payout</span>
            <span className="text-lg font-black text-slate-900 font-mono">₹{todayEarnings}</span>
          </div>
        </div>

        {/* Assigned Rides List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
            Your Active Assigned Rides
          </h3>

          {activeRides.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-xs">
              No active ride assigned right now. You are online and ready for new dispatches.
            </div>
          ) : (
            activeRides.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-xl border-2 border-amber-300 p-4 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div>
                    <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded font-black text-slate-800">
                      {b.id}
                    </span>
                    <span className="ml-2 font-bold text-sm text-slate-900">{b.customerName}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-base font-black text-slate-900 font-mono">₹{b.fare}</span>
                    <span className="block text-[10px] text-emerald-600 font-bold">Cash / UPI at Drop</span>
                  </div>
                </div>

                {/* Pickup and Drop */}
                <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                    <span className="text-slate-800"><strong className="text-slate-900">Pickup:</strong> {b.pickupLocation}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                    <span className="text-slate-800"><strong className="text-slate-900">Drop:</strong> {b.dropLocation}</span>
                  </div>
                </div>

                {/* Passenger Call & Navigation */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={`tel:${b.customerPhone}`}
                    data-no-autocall="true"
                    className="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Passenger ({b.customerPhone})</span>
                  </a>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(b.pickupLocation)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-no-autocall="true"
                    className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    <span>GPS Map</span>
                  </a>
                </div>

                {/* OTP & Trip state action */}
                <div className="pt-2 border-t border-slate-100">
                  {b.status === 'assigned' ? (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          maxLength={6}
                          placeholder={`Enter Customer OTP (${b.otp || '4892'})`}
                          value={enteredOtp[b.id] || ''}
                          onChange={(e) => setEnteredOtp({ ...enteredOtp, [b.id]: e.target.value })}
                          className="flex-1 px-3 py-1.5 text-xs border rounded-xl bg-slate-50 focus:bg-white font-mono"
                        />
                        <button
                          type="button"
                          data-no-autocall="true"
                          onClick={() => handleStartTrip(b)}
                          className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                        >
                          Verify & Start Trip
                        </button>
                      </div>
                      {otpError[b.id] && (
                        <p className="text-[11px] text-red-600 font-semibold">{otpError[b.id]}</p>
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      data-no-autocall="true"
                      onClick={() => onUpdateBookingStatus(b.id, 'completed')}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center space-x-1.5 shadow-xs"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Passenger Dropped • Collect ₹{b.fare} Cash & Complete Trip</span>
                    </button>
                  )}
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

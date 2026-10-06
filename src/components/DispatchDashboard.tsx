import React, { useState } from 'react';
import { 
  Car, Users, Phone, CheckCircle, Clock, AlertCircle, 
  MapPin, Shield, Plus, RefreshCw, X, ChevronRight, Filter, Search, LogOut, ArrowRight
} from 'lucide-react';
import { AuthUser, RideBooking } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface DispatchDashboardProps {
  user: AuthUser;
  bookings: RideBooking[];
  onUpdateBookingStatus: (id: string, status: RideBooking['status'], driverName?: string, vehicleNumber?: string) => void;
  onAddNewBooking: (booking: Omit<RideBooking, 'id' | 'createdAt'>) => void;
  onLogout: () => void;
  onClose: () => void;
}

export const DispatchDashboard: React.FC<DispatchDashboardProps> = ({
  user,
  bookings,
  onUpdateBookingStatus,
  onAddNewBooking,
  onLogout,
  onClose,
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isNewBookingOpen, setIsNewBookingOpen] = useState<boolean>(false);

  // New booking form state
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [pickup, setPickup] = useState('Chandigarh - Sector 17');
  const [drop, setDrop] = useState('Shimla - Mall Road');
  const [vehicle, setVehicle] = useState('Sedan (Dzire / Etios)');
  const [fare, setFare] = useState('2499');

  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = filterStatus === 'all' || b.status === filterStatus;
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      b.customerName.toLowerCase().includes(query) ||
      b.pickupLocation.toLowerCase().includes(query) ||
      b.dropLocation.toLowerCase().includes(query) ||
      b.id.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName || !custPhone) return;

    onAddNewBooking({
      customerName: custName,
      customerPhone: custPhone,
      pickupLocation: pickup,
      dropLocation: drop,
      tripType: drop.toLowerCase().includes('shimla') || drop.toLowerCase().includes('delhi') ? 'outstation' : 'local',
      vehicleName: vehicle,
      fare: Number(fare) || 2499,
      status: 'pending',
      date: 'Today',
      time: 'Instant Dispatch',
      otp: Math.floor(1000 + Math.random() * 9000).toString(),
    });

    setCustName('');
    setCustPhone('');
    setIsNewBookingOpen(false);
  };

  const activeCount = bookings.filter((b) => b.status === 'assigned' || b.status === 'in_progress').length;
  const pendingCount = bookings.filter((b) => b.status === 'pending').length;
  const completedCount = bookings.filter((b) => b.status === 'completed').length;
  const totalRevenue = bookings.filter((b) => b.status === 'completed').reduce((sum, b) => sum + b.fare, 0);

  return (
    <div data-no-autocall="true" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div data-no-autocall="true" className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
              👨‍💼
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                  Uber Fleet & Dispatch Desk
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-white text-black text-[10px] font-bold">
                  Admin Master
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Logged in as <strong className="text-white">{user.name}</strong> ({user.email})
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              data-no-autocall="true"
              onClick={() => setIsNewBookingOpen(true)}
              className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center space-x-1.5 shadow-xs transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Dispatch</span>
            </button>

            <button
              type="button"
              data-no-autocall="true"
              onClick={onLogout}
              className="py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>

            <button
              type="button"
              data-no-autocall="true"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Metric Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-5 bg-slate-50 border-b border-slate-200 shrink-0">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Pending Dispatches</span>
              <AlertCircle className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-600 font-mono">{pendingCount}</div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Active on Road</span>
              <Car className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-blue-600 font-mono">{activeCount}</div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Completed Trips</span>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">{completedCount}</div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Settled Revenue</span>
              <span className="text-[10px] font-bold text-slate-400">INR</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">₹{totalRevenue.toLocaleString()}</div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {/* Controls: Search & Status Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold overflow-x-auto">
              {[
                { id: 'all', label: 'All Trips' },
                { id: 'pending', label: `Pending (${pendingCount})` },
                { id: 'assigned', label: 'Assigned' },
                { id: 'in_progress', label: 'On Road' },
                { id: 'completed', label: 'Completed' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  data-no-autocall="true"
                  onClick={() => setFilterStatus(tab.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    filterStatus === tab.id
                      ? 'bg-white text-slate-950 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search passenger, route, or ID..."
                className="w-full sm:w-64 pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Bookings List */}
          <div className="space-y-3">
            {filteredBookings.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-xs">
                No trips matching filter "{filterStatus}".
              </div>
            ) : (
              filteredBookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:border-slate-300 transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                        {b.id}
                      </span>
                      <span className="text-xs font-bold text-slate-900">{b.customerName}</span>
                      <a
                        href={`tel:${b.customerPhone}`}
                        data-no-autocall="true"
                        className="text-xs text-amber-700 hover:underline font-mono flex items-center space-x-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{b.customerPhone}</span>
                      </a>
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* Status Badge */}
                      <span
                        className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                          b.status === 'pending'
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : b.status === 'assigned'
                            ? 'bg-blue-100 text-blue-900 border border-blue-300'
                            : b.status === 'in_progress'
                            ? 'bg-purple-100 text-purple-900 border border-purple-300'
                            : b.status === 'completed'
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            : 'bg-red-100 text-red-900'
                        }`}
                      >
                        {b.status.replace('_', ' ')}
                      </span>

                      <span className="text-sm font-black text-slate-900 font-mono">
                        ₹{b.fare}
                      </span>
                    </div>
                  </div>

                  {/* Route & Vehicle details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-start space-x-2 text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                        <span className="font-medium truncate"><strong className="text-slate-900">Pickup:</strong> {b.pickupLocation}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                        <span className="font-medium truncate"><strong className="text-slate-900">Drop:</strong> {b.dropLocation}</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <div className="font-bold text-slate-900 text-xs">{b.vehicleName}</div>
                        <div className="text-[11px] text-slate-500">
                          Driver: {b.driverName ? `${b.driverName} (${b.vehicleNumber || 'CH-01'})` : 'Not assigned yet'}
                        </div>
                      </div>
                      {b.otp && (
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block uppercase font-bold">Start OTP</span>
                          <span className="font-mono font-black text-xs text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            {b.otp}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dispatcher Actions */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-slate-400 text-[11px]">
                      Scheduled: {b.date} • {b.time}
                    </span>

                    <div className="flex items-center space-x-1.5">
                      {b.status === 'pending' && (
                        <button
                          type="button"
                          data-no-autocall="true"
                          onClick={() => onUpdateBookingStatus(b.id, 'assigned', 'Gurpreet Singh', 'CH-01-TB-4892')}
                          className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
                        >
                          Assign Gurpreet (Dzire)
                        </button>
                      )}

                      {b.status === 'assigned' && (
                        <button
                          type="button"
                          data-no-autocall="true"
                          onClick={() => onUpdateBookingStatus(b.id, 'in_progress')}
                          className="px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors"
                        >
                          Mark On Road
                        </button>
                      )}

                      {(b.status === 'in_progress' || b.status === 'assigned') && (
                        <button
                          type="button"
                          data-no-autocall="true"
                          onClick={() => onUpdateBookingStatus(b.id, 'completed')}
                          className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                        >
                          Mark Completed
                        </button>
                      )}

                      {b.status !== 'completed' && b.status !== 'cancelled' && (
                        <button
                          type="button"
                          data-no-autocall="true"
                          onClick={() => onUpdateBookingStatus(b.id, 'cancelled')}
                          className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 text-xs transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* New Dispatch Modal Overlay */}
        {isNewBookingOpen && (
          <div data-no-autocall="true" className="fixed inset-0 z-60 bg-black/60 flex items-center justify-center p-4">
            <div data-no-autocall="true" className="bg-white rounded-2xl max-w-md w-full p-5 border border-slate-200 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-black text-slate-900 text-base">Dispatch New Cab Order</h3>
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={() => setIsNewBookingOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <form onSubmit={handleCreateBooking} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Customer Full Name</label>
                  <input
                    type="text"
                    required
                    value={custName}
                    onChange={(e) => setCustName(e.target.value)}
                    placeholder="e.g. Manjeet Deol"
                    className="w-full px-3 py-2 border rounded-xl bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Customer Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={custPhone}
                    onChange={(e) => setCustPhone(e.target.value)}
                    placeholder="e.g. +91 98155 05661"
                    className="w-full px-3 py-2 border rounded-xl bg-slate-50 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Pickup Location</label>
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Drop Location</label>
                    <input
                      type="text"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Vehicle</label>
                    <select
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl bg-slate-50 focus:bg-white"
                    >
                      <option>Sedan (Dzire / Etios)</option>
                      <option>Ertiga (6-Seater SUV)</option>
                      <option>Innova Crysta (Luxury)</option>
                      <option>Hatchback (WagonR)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Fare (INR)</label>
                    <input
                      type="number"
                      value={fare}
                      onChange={(e) => setFare(e.target.value)}
                      className="w-full px-3 py-2 border rounded-xl bg-slate-50 focus:bg-white font-mono"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    data-no-autocall="true"
                    onClick={() => setIsNewBookingOpen(false)}
                    className="px-3 py-2 rounded-xl text-slate-600 bg-slate-100 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    data-no-autocall="true"
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
                  >
                    Confirm Dispatch
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

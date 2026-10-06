import React, { useState } from 'react';
import { X, Lock, Mail, Phone, ShieldCheck, UserCheck, Car, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { AuthUser, UserRole } from '../types';
import { DEMO_USERS, saveStoredUser } from '../data/authStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: AuthUser) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'credentials'>('demo');
  const [selectedRole, setSelectedRole] = useState<UserRole>('admin');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleDemoLogin = (role: UserRole) => {
    const user = DEMO_USERS[role];
    if (user) {
      saveStoredUser(user);
      onLoginSuccess(user);
      onClose();
    }
  };

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const query = emailOrPhone.trim().toLowerCase();

    // Check if matching any demo user or standard pattern
    let matchedUser: AuthUser | null = null;

    if (query === 'admin@smartcabpro.com' || query === '9815505661' || selectedRole === 'admin') {
      matchedUser = DEMO_USERS.admin;
    } else if (query === 'driver@smartcabpro.com' || selectedRole === 'driver') {
      matchedUser = DEMO_USERS.driver;
    } else if (query === 'manjeetdeolau@gmail.com' || selectedRole === 'customer') {
      matchedUser = {
        ...DEMO_USERS.customer,
        email: query.includes('@') ? query : DEMO_USERS.customer.email,
        phone: !query.includes('@') && query.length > 5 ? query : DEMO_USERS.customer.phone,
      };
    } else {
      matchedUser = {
        id: `usr_${Date.now()}`,
        name: query.split('@')[0] || 'User',
        email: query.includes('@') ? query : `${query}@example.com`,
        phone: !query.includes('@') ? query : '+91 98155 05661',
        role: selectedRole,
        avatar: selectedRole === 'admin' ? '👨‍💼' : selectedRole === 'driver' ? '🧔' : '👤',
      };
    }

    saveStoredUser(matchedUser);
    onLoginSuccess(matchedUser);
    onClose();
  };

  return (
    <div
      data-no-autocall="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
    >
      <div
        data-no-autocall="true"
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
              <ShieldCheck className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Best Cab Services Portal</h3>
              <p className="text-xs text-amber-400 font-medium">Select access role or enter credentials</p>
            </div>
          </div>

          <button
            type="button"
            data-no-autocall="true"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="grid grid-cols-2 p-1.5 bg-slate-100 border-b border-slate-200 text-xs font-bold">
          <button
            type="button"
            data-no-autocall="true"
            onClick={() => setActiveTab('demo')}
            className={`py-2 rounded-lg transition-all ${
              activeTab === 'demo' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚡ 1-Click Fast Access
          </button>
          <button
            type="button"
            data-no-autocall="true"
            onClick={() => setActiveTab('credentials')}
            className={`py-2 rounded-lg transition-all ${
              activeTab === 'credentials' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🔑 Email / Phone Login
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5">
          {activeTab === 'demo' ? (
            <div className="space-y-3">
              <p className="text-xs text-slate-600">
                Choose an account below to sign in immediately and test portal capabilities:
              </p>

              {/* Admin Card */}
              <button
                type="button"
                data-no-autocall="true"
                onClick={() => handleDemoLogin('admin')}
                className="w-full text-left p-3.5 rounded-xl border-2 border-slate-200 hover:border-amber-500 bg-slate-50 hover:bg-amber-50/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold text-lg">
                    👨‍💼
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-extrabold text-sm text-slate-900">Admin Dispatcher</span>
                      <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">All Access</span>
                    </div>
                    <p className="text-xs text-slate-500">Live rides, driver dispatch, fares & fleet control</p>
                    <span className="text-[11px] font-mono text-slate-600">admin@smartcabpro.com</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Customer Card (Pre-filled with user email) */}
              <button
                type="button"
                data-no-autocall="true"
                onClick={() => handleDemoLogin('customer')}
                className="w-full text-left p-3.5 rounded-xl border-2 border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-700 flex items-center justify-center font-bold text-lg">
                    👤
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-extrabold text-sm text-slate-900">Customer (Manjeet Deol)</span>
                      <span className="text-[10px] font-bold bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded">User Email</span>
                    </div>
                    <p className="text-xs text-slate-500">My active bookings, trip receipts, live driver OTP</p>
                    <span className="text-[11px] font-mono text-slate-600">manjeetdeolau@gmail.com</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Driver Card */}
              <button
                type="button"
                data-no-autocall="true"
                onClick={() => handleDemoLogin('driver')}
                className="w-full text-left p-3.5 rounded-xl border-2 border-slate-200 hover:border-emerald-500 bg-slate-50 hover:bg-emerald-50/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-700 flex items-center justify-center font-bold text-lg">
                    🧔
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-extrabold text-sm text-slate-900">Driver (Gurpreet Singh)</span>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded">Dzire CH-01</span>
                    </div>
                    <p className="text-xs text-slate-500">Assigned trips, passenger call, duty toggle, OTP verification</p>
                    <span className="text-[11px] font-mono text-slate-600">driver@smartcabpro.com</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleCredentialsSubmit} className="space-y-4">
              {/* Role selection chips */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">Login as:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['admin', 'customer', 'driver'] as UserRole[]).map((role) => (
                    <button
                      key={role}
                      type="button"
                      data-no-autocall="true"
                      onClick={() => setSelectedRole(role)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-bold capitalize border transition-all ${
                        selectedRole === role
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email / Phone input */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Email Address or Mobile Number
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder={
                      selectedRole === 'admin'
                        ? 'admin@smartcabpro.com'
                        : selectedRole === 'customer'
                        ? 'manjeetdeolau@gmail.com'
                        : 'driver@smartcabpro.com'
                    }
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Password or OTP */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Password / PIN / OTP
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter any password (e.g. 123456)"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <p className="text-[11px] text-slate-600 mt-1">Default test password is any 4+ characters</p>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                data-no-autocall="true"
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xs transition-colors flex items-center justify-center space-x-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>Log In to {selectedRole.toUpperCase()} Account</span>
              </button>
            </form>
          )}

          {/* Footer assistance */}
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Need Dispatch Assistance?</span>
            <span className="font-mono font-bold text-slate-700">+91 98155 05661</span>
          </div>
        </div>
      </div>
    </div>
  );
};

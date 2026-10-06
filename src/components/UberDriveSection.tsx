import React from 'react';
import { ArrowRight, DollarSign, Calendar, ShieldCheck, Car } from 'lucide-react';

interface UberDriveSectionProps {
  onOpenDriverPortal: () => void;
}

export const UberDriveSection: React.FC<UberDriveSectionProps> = ({ onOpenDriverPortal }) => {
  return (
    <section id="drive" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAFAFA] rounded-3xl border border-neutral-200/90 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Driver Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-4/3 bg-neutral-900 relative">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="Driver behind the steering wheel"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-neutral-900/80 px-2 py-0.5 rounded-full border border-neutral-700 inline-block">
                  Verified Captain Network
                </span>
                <h4 className="text-lg font-black">Gurpreet Singh</h4>
                <p className="text-xs text-neutral-300">Maruti Dzire · 4.96 ★ Rating · 1,420 Trips Completed</p>
              </div>
            </div>
          </div>

          {/* Right: Driver Pitch & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Drive when you want, make what you need
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
              Make money on your own terms. Full-time or just a few hours a week, driving with SmartCab Pro in Chandigarh, Mohali, and Kharar gives you freedom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1">
                <div className="text-xl font-black text-neutral-900">₹35k - ₹65k</div>
                <div className="text-xs font-bold text-neutral-700">Monthly Earnings</div>
                <p className="text-[11px] text-neutral-500">With high-demand Shimla & Airport trips.</p>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-black text-neutral-900">Instant UPI</div>
                <div className="text-xs font-bold text-neutral-700">Same-Day Payout</div>
                <p className="text-[11px] text-neutral-500">Earnings sent straight to your bank account.</p>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-black text-neutral-900">Zero Surge Cuts</div>
                <div className="text-xs font-bold text-neutral-700">Fair Platform Fee</div>
                <p className="text-[11px] text-neutral-500">Keep up to 85% of every single fare.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                data-no-autocall="true"
                onClick={onOpenDriverPortal}
                className="py-3.5 px-6 rounded-2xl bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md"
              >
                <span>Open Driver Partner Portal</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="tel:9815505661"
                data-no-autocall="true"
                className="py-3.5 px-5 rounded-2xl bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs border border-neutral-300 transition-colors"
              >
                Call Driver Onboarding Desk
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

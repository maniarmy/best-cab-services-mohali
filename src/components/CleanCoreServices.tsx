import React from 'react';
import { Car, Plane, Mountain, Navigation, ArrowRight, ShieldCheck } from 'lucide-react';
import { trackAdCallConversion } from '../utils/adTracking';

interface CleanCoreServicesProps {
  onSelectService: (serviceType: string) => void;
  onBookShimla: () => void;
}

export const CleanCoreServices: React.FC<CleanCoreServicesProps> = ({
  onSelectService,
  onBookShimla,
}) => {
  const services = [
    {
      id: 'city',
      title: 'Tricity City Cabs',
      subtitle: 'Mohali, Kharar & Chandigarh',
      desc: 'Rapid 5-minute doorstep pickup for daily office commute, university runs, shopping, and hospital visits.',
      badge: 'Available 24/7',
      icon: Car,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
      action: () => onSelectService('local'),
    },
    {
      id: 'airport',
      title: 'Airport Transfer (IXC)',
      subtitle: 'Chandigarh & Delhi (IGI)',
      desc: 'Punctual flight pickups with flight tracking, luggage boot assistance, and zero delay waiting charges.',
      badge: 'On-Time Guaranteed',
      icon: Plane,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      action: () => onSelectService('airport'),
    },
    {
      id: 'shimla',
      title: 'Chandigarh to Shimla',
      subtitle: 'Signature Mountain Route',
      desc: 'Himalayan ghat-certified drivers, scenic stops at Timber Trail and Solan, with drop directly to your hotel.',
      badge: 'Verified Hill Chauffeurs',
      icon: Mountain,
      iconBg: 'bg-orange-50 text-orange-600 border-orange-200',
      action: () => onBookShimla(),
    },
    {
      id: 'outstation',
      title: 'Outstation & Day Hire',
      subtitle: 'Manali, Delhi, Amritsar',
      desc: 'Multi-day holiday packages and 8-Hour / 80 KM local hourly rentals with clean sedans and spacious SUVs.',
      badge: 'Flexible Packages',
      icon: Navigation,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
      action: () => onSelectService('outstation'),
    },
  ];

  return (
    <section id="services" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#FFFDF9] border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header matching the reference image layout */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Core Service Offerings
          </h2>
          <p className="text-sm text-slate-500">
            Safe to anywhere you like whenever you want, with top quality service guarantees.
          </p>
        </div>

        {/* 4 Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-100 hover:border-orange-200 p-6 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  {/* Pastel icon container matching screenshot */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconBg} shadow-xs`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-orange-600 font-semibold mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    {item.badge}
                  </span>

                  <button
                    type="button"
                    data-no-autocall="true"
                    onClick={item.action}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MapPin, CheckCircle, Phone } from 'lucide-react';
import { SERVICE_ZONES, BUSINESS_INFO } from '../data/mockData';

interface ServiceAreaMapProps {
  onQuickBookZone: (from: string, to: string) => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ onQuickBookZone }) => {
  const [activeZoneIndex, setActiveZoneIndex] = useState<number>(0);
  const activeZone = SERVICE_ZONES[activeZoneIndex];

  return (
    <section id="areas" className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>FULL COVERAGE</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Chandigarh • Mohali • Kharar Service Areas
          </h2>
          <p className="text-sm text-slate-600">
            Active drivers stationed across every key junction for 5-8 minute pickup times.
          </p>
        </div>

        {/* Zone Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {SERVICE_ZONES.map((zone, idx) => {
            const isSelected = activeZoneIndex === idx;
            return (
              <button
                key={zone.name}
                type="button"
                onClick={() => setActiveZoneIndex(idx)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-xs font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="text-xs font-bold truncate">{zone.name}</div>
                <div className="text-[10px] text-slate-500 font-normal">{zone.pickupTime} ETA</div>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{activeZone.name}</h3>
              <p className="text-xs text-slate-500">{activeZone.tagline}</p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shrink-0 hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dispatch: 98155 05661</span>
            </a>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-700 block uppercase tracking-wide">
              Key Localities & Sectors:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeZone.coverage.map((area, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center space-x-1"
                >
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>{area}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

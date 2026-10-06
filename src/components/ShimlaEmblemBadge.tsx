import React from 'react';

interface ShimlaEmblemBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ShimlaEmblemBadge: React.FC<ShimlaEmblemBadgeProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'p-2.5 max-w-[140px]',
    md: 'p-3.5 max-w-[200px]',
    lg: 'p-5 max-w-[260px]',
  };

  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-lg text-center flex flex-col items-center justify-center transition-transform hover:scale-[1.02] ${sizeClasses[size]} ${className}`}>
      {/* Mountain & Car Graphic */}
      <div className="relative w-full flex items-center justify-center mb-1.5">
        <svg viewBox="0 0 160 80" className="w-24 sm:w-28 h-auto">
          {/* Mountain Peaks */}
          <path
            d="M20 70 L55 25 L85 55 L105 35 L140 70 Z"
            fill="#0f172a"
            opacity="0.12"
          />
          <path
            d="M35 70 L68 18 L95 50 L115 28 L148 70 Z"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Mountain Snow Peaks */}
          <path
            d="M68 18 L60 32 L68 30 L76 34 Z"
            fill="#2563eb"
          />
          <path
            d="M115 28 L108 40 L115 38 L122 41 Z"
            fill="#2563eb"
          />
          {/* Speed Lines */}
          <line x1="12" y1="58" x2="38" y2="58" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="18" y1="64" x2="48" y2="64" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Stylized Modern Car Silhouette */}
          <path
            d="M50 64 C56 64 62 60 70 54 C78 48 94 48 108 52 C120 55 128 58 138 64 Z"
            fill="#0284c7"
          />
          <path
            d="M62 64 L72 56 L102 56 L112 64 Z"
            fill="#ffffff"
          />
          {/* Car Wheels */}
          <circle cx="68" cy="65" r="5" fill="#0f172a" />
          <circle cx="68" cy="65" r="2.5" fill="#ffffff" />
          <circle cx="118" cy="65" r="5" fill="#0f172a" />
          <circle cx="118" cy="65" r="2.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Primary Badge Heading */}
      <div className="space-y-0.5">
        <h4 className="text-[11px] sm:text-xs font-black tracking-widest text-slate-900 uppercase font-mono">
          Chandigarh
        </h4>
        <div className="text-[9px] sm:text-[10px] font-extrabold tracking-widest text-amber-700 uppercase">
          To Shimla
        </div>
        <div className="text-[13px] sm:text-sm font-black tracking-widest text-blue-950 uppercase">
          Taxi
        </div>
      </div>

      {/* Brand Sub-Badge */}
      <div className="mt-2 px-3 py-0.5 rounded-full bg-slate-900 text-white text-[10px] sm:text-[11px] font-bold tracking-wide shadow-xs">
        Smart Cab Pro
      </div>
    </div>
  );
};

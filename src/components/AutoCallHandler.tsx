import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Phone, PhoneCall, Volume2, CheckCircle, ShieldAlert, Sparkles, X, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion } from '../utils/adTracking';

interface AutoCallHandlerProps {
  enabled?: boolean;
}

export const AutoCallHandler: React.FC<AutoCallHandlerProps> = ({ enabled = true }) => {
  const [autoCallActive, setAutoCallActive] = useState<boolean>(enabled);
  const [isCalling, setIsCalling] = useState<boolean>(false);
  const [callCount, setCallCount] = useState<number>(0);
  const [lastCallTimestamp, setLastCallTimestamp] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to trigger the phone call
  const triggerCall = useCallback(() => {
    setCallCount((prev) => prev + 1);
    setLastCallTimestamp(Date.now());
    setIsCalling(true);
    trackAdCallConversion('autocall_global_trigger');

    // Haptic vibration feedback if supported
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([120, 80, 120]);
      } catch (err) {
        // Ignored
      }
    }

    // Reliable cross-device phone trigger: creates and clicks invisible <a> tag
    try {
      const callAnchor = document.createElement('a');
      callAnchor.href = `tel:${BUSINESS_INFO.phoneClean}`;
      callAnchor.setAttribute('rel', 'nofollow');
      callAnchor.style.position = 'fixed';
      callAnchor.style.top = '-9999px';
      callAnchor.style.left = '-9999px';
      callAnchor.style.opacity = '0';
      callAnchor.style.pointerEvents = 'none';
      document.body.appendChild(callAnchor);
      callAnchor.click();

      setTimeout(() => {
        try {
          if (document.body.contains(callAnchor)) {
            document.body.removeChild(callAnchor);
          }
        } catch (e) {
          // Ignored
        }
      }, 500);
    } catch (e) {
      // Fallback
      window.location.href = `tel:${BUSINESS_INFO.phoneClean}`;
    }

    // Also attempt window.location for browsers that prefer direct navigation
    try {
      window.location.href = `tel:${BUSINESS_INFO.phoneClean}`;
    } catch (e) {
      // Ignored
    }

    // Auto-hide the calling banner after 6 seconds
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsCalling(false);
    }, 6000);
  }, []);

  // Global click listener across the entire website
  useEffect(() => {
    if (!autoCallActive) return;

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Allow WhatsApp buttons to open WhatsApp
      if (
        target.closest('a[href*="wa.me"]') ||
        target.closest('a[href*="whatsapp"]') ||
        target.closest('[data-no-autocall]')
      ) {
        return;
      }

      // Allow user to focus and type in form inputs without repeated dialer popups
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('label')
      ) {
        return;
      }

      // If user clicked an existing tel: link, still display our active calling banner
      if (target.closest('a[href^="tel:"]')) {
        setIsCalling(true);
        setCallCount((prev) => prev + 1);
        setLastCallTimestamp(Date.now());
        trackAdCallConversion('tel_link_click');
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsCalling(false), 6000);
        return;
      }

      // Any other click on the website initiates a phone call automatically!
      triggerCall();
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, [autoCallActive, triggerCall]);

  return (
    <>
      {/* Floating Animated "Calling..." Overlay Toast */}
      {isCalling && (
        <div 
          data-no-autocall="true"
          className="fixed top-14 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-white text-slate-900 p-4 rounded-3xl shadow-2xl border-2 border-orange-500 animate-in fade-in slide-in-from-top-4 duration-300 backdrop-blur-xl"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/25">
                <PhoneCall className="w-6 h-6 animate-bounce" />
              </div>

              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                    Connecting to Dispatch Desk
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
                </div>
                <h4 className="text-xl font-black tracking-tight text-slate-900 font-mono">
                  {BUSINESS_INFO.phone}
                </h4>
                <p className="text-xs text-slate-500">
                  Instant Chauffeur Assignment · Mohali & Shimla
                </p>
              </div>
            </div>

            <button
              type="button"
              data-no-autocall="true"
              onClick={(e) => {
                e.stopPropagation();
                setIsCalling(false);
              }}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 text-[11px]">
              Tap button if dialer didn't trigger:
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={() => trackAdCallConversion('toast_open_dialer')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 py-1 rounded-xl flex items-center space-x-1 shadow-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Open Dialer</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};


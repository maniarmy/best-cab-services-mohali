import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, PhoneCall } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/mockData';
import { trackAdCallConversion, trackWhatsAppConversion } from '../utils/adTracking';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleCall = () => {
    trackAdCallConversion('faq_section_call_btn');
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#090D16] text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-300">
            Learn about fares, doorstep pickup times, mountain chauffeurs, and instant cab bookings in Chandigarh, Mohali & Shimla.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  data-no-autocall="true"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-800/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* High-Converting Call CTA inside FAQ */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/50 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="space-y-1">
            <h4 className="text-base font-black text-white">Still have a specific query or custom itinerary?</h4>
            <p className="text-xs text-slate-400">Speak directly to our 24/7 fleet manager for immediate answers and personalized quotes.</p>
          </div>
          <div className="flex items-center space-x-2 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              data-no-autocall="true"
              onClick={handleCall}
              className="py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center space-x-1.5 shadow-sm transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

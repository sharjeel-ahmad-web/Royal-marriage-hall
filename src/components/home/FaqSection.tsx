import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../../data/mockData';
import { createWhatsAppChatUrl } from '../../lib/storage';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsAppUrl = createWhatsAppChatUrl({
    venueName: 'General FAQ Inquiry'
  });

  return (
    <section className="py-20 sm:py-24 bg-[#F5EFEB] border-t border-[#E7DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold block mb-2">
            Clear Policies & Guidance
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600">
            Everything you need to know about date reservations, timings, generator backup, and catering policies.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-[#E7DFD5] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-sm sm:text-base font-bold text-[#1C1917]">
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full bg-[#F5EFEB] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#1C1917] text-white' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-[#E7DFD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif-luxury text-base font-bold text-[#1C1917]">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs text-stone-500 mt-0.5">
              Speak directly with our banquet manager or send a quick WhatsApp voice note.
            </p>
          </div>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase rounded-lg shadow-sm flex items-center gap-2 shrink-0 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

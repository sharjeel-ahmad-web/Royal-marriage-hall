import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppChatUrl } from '../../lib/storage';

interface WhatsAppButtonProps {
  onOpenInquiry: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenInquiry }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultUrl = createWhatsAppChatUrl({
    venueName: 'The Grand Kohinoor Ballroom / Marquee'
  });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Small popover message */}
      {showTooltip && (
        <div className="bg-white rounded-xl shadow-xl border border-[#E7DFD5] p-3 max-w-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-stone-400 hover:text-stone-700"
            aria-label="Dismiss WhatsApp hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">
              Royal Palace Lahore Support
            </p>
          </div>
          <p className="text-xs text-stone-600 leading-snug">
            Need urgent hall date availability or menu quotation? Chat with our banquet manager directly on WhatsApp.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <a
              href={defaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              Start Chat &rarr;
            </a>
            <span className="text-stone-300">·</span>
            <button
              onClick={() => {
                setShowTooltip(false);
                onOpenInquiry();
              }}
              className="text-xs text-[#9C7336] hover:underline"
            >
              Book Walkthrough
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contact Royal Palace Lahore via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};

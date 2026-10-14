import React, { useState } from 'react';
import { X, Check, Calendar, Users, Maximize2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Venue } from '../../types';
import { formatPricePkr } from '../../lib/storage';

interface VenueDetailModalProps {
  venue: Venue | null;
  onClose: () => void;
  onBookVenue: (venueId: string) => void;
}

export const VenueDetailModal: React.FC<VenueDetailModalProps> = ({
  venue,
  onClose,
  onBookVenue
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!venue) return null;

  const allImages = [venue.image, ...venue.gallery];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E7DFD5] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Gallery Slider */}
        <div className="relative h-72 sm:h-96 w-full bg-stone-900">
          <img
            src={allImages[activeImageIndex] || venue.image}
            alt={venue.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
            <span className="text-xs uppercase tracking-widest text-[#DFC89B] font-semibold">
              {venue.type === 'indoor' ? 'Indoor Grand Ballroom' : venue.type === 'marquee' ? 'Glass Architectural Marquee' : 'Heritage Mughal Lawn'}
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold mt-1">
              {venue.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-2xl font-light">
              {venue.tagline}
            </p>
          </div>

          {/* Thumbnail Strip */}
          {allImages.length > 1 && (
            <div className="absolute top-4 left-4 flex gap-1.5 z-10">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-12 h-10 rounded-md overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#B48C46] scale-105' : 'border-white/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Spatial Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F5EFEB] rounded-xl border border-[#E7DFD5]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Guest Capacity</span>
              <span className="text-base font-bold font-mono text-[#1C1917]">
                {venue.capacityMin} – {venue.capacityMax}
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Covered Area</span>
              <span className="text-base font-bold font-mono text-[#1C1917]">
                {venue.areaSqFt.toLocaleString()} sq.ft.
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Dimensions</span>
              <span className="text-xs font-semibold text-[#1C1917] truncate block mt-0.5">
                {venue.dimensions}
              </span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Starting Rate</span>
              <span className="text-base font-bold font-mono text-[#9C7336]">
                {formatPricePkr(venue.startingPricePkr)}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-serif-luxury text-base font-bold text-[#1C1917] mb-2">
              Architectural Overview
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {venue.description}
            </p>
          </div>

          {/* Verified Inclusions / Features */}
          <div>
            <h4 className="font-serif-luxury text-base font-bold text-[#1C1917] mb-3">
              Standard Specifications & Built-In Facilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {venue.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                  <div className="w-4 h-4 rounded-full bg-[#B48C46]/20 text-[#8F6B2A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Event Types */}
          <div>
            <h4 className="font-serif-luxury text-base font-bold text-[#1C1917] mb-2">
              Recommended Celebrations
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-stone-600">
              {venue.idealFor.map(evt => (
                <span key={evt} className="px-3 py-1 bg-white border border-[#E7DFD5] rounded-md capitalize font-medium">
                  {evt === 'barat' ? 'Royal Barat' : evt === 'walima' ? 'Grand Walima' : evt === 'mehndi' ? 'Vibrant Mehndi' : evt === 'nikah' ? 'Sacred Nikah' : evt}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-[#E7DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-500">
              <span className="font-semibold text-stone-800">Visit Walkthroughs:</span> Available daily 11:00 AM – 10:00 PM
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 border border-[#E7DFD5] rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookVenue(venue.id);
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#B48C46] hover:bg-[#9C7336] rounded-lg shadow-sm transition-all active:scale-95"
              >
                Inquire For This Hall
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

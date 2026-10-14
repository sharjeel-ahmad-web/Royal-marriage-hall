import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { createWhatsAppChatUrl } from '../../lib/storage';

interface LocationSectionProps {
  onOpenInquiry: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenInquiry }) => {
  const googleMapsUrl = 'https://maps.google.com/?q=Lahore+Wedding+Marquee+Main+Boulevard';
  const whatsAppUrl = createWhatsAppChatUrl({
    venueName: 'Location & Directions'
  });

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FDFBF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold block mb-2">
            Prime Lahore Location
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Effortless Accessibility For Your Guests
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Situated on Main Boulevard with broad dual-carriageway access, minutes away from DHA Phase 5, Ring Road, and Gulberg.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Landmarks & Drive Times */}
          <div className="bg-white p-7 rounded-2xl border border-[#E7DFD5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFEB] flex items-center justify-center text-[#B48C46]">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-base font-bold text-[#1C1917]">
                    Transit Proximity
                  </h3>
                  <span className="text-[11px] text-stone-400">Average Drive Times</span>
                </div>
              </div>

              <div className="space-y-3.5 pt-2 text-xs">
                <div className="flex justify-between items-center pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">DHA Phase 5 & Commercial</span>
                  <span className="font-mono font-bold text-[#9C7336]">4 Minutes</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Lahore Ring Road Interchange</span>
                  <span className="font-mono font-bold text-[#9C7336]">6 Minutes</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Gulberg III & Main Market</span>
                  <span className="font-mono font-bold text-[#9C7336]">12 Minutes</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-stone-100">
                  <span className="text-stone-700 font-medium">Allama Iqbal Airport (LHE)</span>
                  <span className="font-mono font-bold text-[#9C7336]">14 Minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-700 font-medium">Model Town / Faisal Town</span>
                  <span className="font-mono font-bold text-[#9C7336]">15 Minutes</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <p className="text-[11px] text-stone-500">
                Wide dedicated slip lanes ensure guest motorcades and buses avoid traffic congestion during peak evening entry hours.
              </p>
            </div>
          </div>

          {/* Card 2: Interactive Styled Map Card */}
          <div className="relative bg-stone-900 rounded-2xl border border-[#E7DFD5] overflow-hidden shadow-md flex flex-col justify-end p-6 min-h-[320px]">
            {/* Map Texture Representation */}
            <div className="absolute inset-0 bg-[#24292e] opacity-90">
              <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M 0 150 Q 200 120 400 200 T 800 180" fill="none" stroke="#B48C46" strokeWidth="4" />
                <path d="M 180 0 L 220 400" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
              </svg>
            </div>

            {/* Glowing Pin Marker */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="relative inline-block">
                <div className="w-12 h-12 rounded-full bg-[#B48C46]/40 animate-ping absolute inset-0" />
                <div className="relative w-12 h-12 rounded-full bg-[#B48C46] border-2 border-white flex items-center justify-center text-white shadow-xl">
                  <MapPin className="w-6 h-6 fill-white" />
                </div>
              </div>
              <div className="mt-2 bg-[#1C1917]/90 backdrop-blur-md px-3 py-1 rounded-md border border-[#B48C46]/50 inline-block shadow-lg">
                <p className="text-xs font-bold text-white font-serif-luxury whitespace-nowrap">
                  Royal Palace Banquets
                </p>
                <p className="text-[10px] text-[#DFC89B]">Main Boulevard, Lahore</p>
              </div>
            </div>

            {/* Map Actions Overlay */}
            <div className="relative z-10 bg-[#1C1917]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
              <p className="text-xs font-medium text-stone-300">
                Exact Coordinates & GPS Routing
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#DFC89B]">31.4721° N, 74.3892° E</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#B48C46] hover:bg-[#9C7336] text-white text-[11px] font-bold uppercase rounded-md flex items-center gap-1 transition-all"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Address & Visiting Office */}
          <div className="bg-white p-7 rounded-2xl border border-[#E7DFD5] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFEB] flex items-center justify-center text-[#B48C46]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-base font-bold text-[#1C1917]">
                    Walkthrough Office
                  </h3>
                  <span className="text-[11px] text-stone-400">Open 7 Days a Week</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-stone-600">
                <p className="font-semibold text-stone-900">Visiting Hours:</p>
                <p>Monday – Sunday: 11:00 AM to 10:00 PM</p>
                <p className="text-[11px] text-stone-500 pt-1">
                  Families are welcome to view ballroom lighting, stage setups, and bridal suites during evening walkthrough hours.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 space-y-2">
                <p className="text-xs font-semibold text-stone-900">Direct Inquiries:</p>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <Phone className="w-3.5 h-3.5 text-[#B48C46]" />
                  <a href="tel:+923008452199" className="hover:underline font-mono">+92 300 8452199</a>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-700 font-semibold">
                    Instant WhatsApp Dispatch
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <button
                onClick={onOpenInquiry}
                className="w-full py-2.5 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all"
              >
                Schedule Walkthrough Visit
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

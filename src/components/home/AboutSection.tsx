import React from 'react';
import { Star, ShieldCheck, Heart, Award, Users } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

interface AboutSectionProps {
  onOpenInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FDFBF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold block mb-2">
                A Legacy of Royal Celebrations
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight text-balance">
                Creating Treasured Memories on Main Boulevard
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Founded with the vision to provide Lahore with an authentic palace-scale wedding destination, Royal Palace Banquets & Marquee brings together architectural grandeur, climate-controlled comfort, and timeless hospitality.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Whether welcoming 300 close family members for an intimate starlit Nikah or hosting 1,500 dignitaries for a royal Barat banquet, our experienced management and master culinary staff treat every wedding as if it were our own family’s celebration.
            </p>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F5EFEB] rounded-xl border border-[#E7DFD5]">
                <span className="font-serif-luxury text-2xl font-bold font-mono text-[#1C1917] block">
                  1,800+
                </span>
                <span className="text-xs text-stone-600 mt-1 block">
                  Weddings Hosted in Lahore
                </span>
              </div>
              <div className="p-4 bg-[#F5EFEB] rounded-xl border border-[#E7DFD5]">
                <span className="font-serif-luxury text-2xl font-bold font-mono text-[#1C1917] block">
                  99.8%
                </span>
                <span className="text-xs text-stone-600 mt-1 block">
                  On-Time Dinner Compliance
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="px-7 py-3 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all"
              >
                Schedule Private Walkthrough
              </button>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E7DFD5] bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80"
                alt="Royal Palace Lahore Wedding Stage and Reception"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block p-5 bg-white rounded-2xl border border-[#E7DFD5] shadow-xl max-w-xs">
              <div className="flex items-center gap-1 text-[#B48C46] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-stone-900">Rated 4.9/5 by Lahore Families</p>
              <p className="text-[11px] text-stone-500 mt-0.5">Verified wedding reviews across Gulberg, DHA, and Model Town.</p>
            </div>
          </div>

        </div>

        {/* Real Testimonials Grid */}
        <div className="border-t border-[#E7DFD5] pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold block mb-1">
              Words From Host Families
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Real Lahore Wedding Experiences
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-[#E7DFD5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#B48C46] mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <p className="font-serif-luxury font-bold text-sm text-[#1C1917]">
                    {t.clientName}
                  </p>
                  <p className="text-[11px] text-[#9C7336] font-medium">
                    {t.event} · {t.venue}
                  </p>
                  <p className="text-[10px] text-stone-400 mt-0.5">
                    {t.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

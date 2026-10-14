import React from 'react';
import { Utensils, Flame, Sparkles, Coffee, ShieldCheck, Heart } from 'lucide-react';

interface CateringSectionProps {
  onOpenInquiry: () => void;
}

export const CateringSection: React.FC<CateringSectionProps> = ({ onOpenInquiry }) => {
  const culinaryHighlights = [
    {
      icon: <Flame className="w-5 h-5 text-[#B48C46]" />,
      title: 'Live Charcoal BBQ Pavilions',
      description: 'Mutton seekh kababs, reshmi handi, and lamb chops grilled live in front of guests over natural coals.'
    },
    {
      icon: <Utensils className="w-5 h-5 text-[#B48C46]" />,
      title: 'Heritage Degi Mughlai Recipes',
      description: 'Slow-simmered dum mutton biryanis and badami qormas cooked with pure desi ghee by third-generation Lahore ustads.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#B48C46]" />,
      title: 'Live Tandoor & Artisanal Breads',
      description: 'Hot roghani naans, sesame kulchas, and garlic sheermal served straight from clay tandoors directly onto dinner plates.'
    },
    {
      icon: <Coffee className="w-5 h-5 text-[#B48C46]" />,
      title: 'Traditional Kashmiri Chai & Jalebi',
      description: 'Authentic pink tea infused with cardamom, crushed pistachios, and hot crispy jalebis made fresh at live sweet stalls.'
    }
  ];

  return (
    <section id="catering" className="py-20 sm:py-28 bg-[#FDFBF7] scroll-mt-20 border-t border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E7DFD5] aspect-[4/3] bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80"
                alt="Gourmet Pakistani Wedding Buffet and Catering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#DFC89B] font-semibold block">
                  Artisanal Mughlai Catering
                </span>
                <p className="font-serif-luxury text-2xl font-bold mt-1">
                  Pure Desi Ghee & Handpicked Spices
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  Every dish is prepared fresh on-site in our commercial temperature-controlled kitchens.
                </p>
              </div>
            </div>

            {/* Overlapping Trust Float Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 bg-[#1C1917] text-white rounded-xl shadow-xl border border-[#B48C46]/40 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-[#B48C46]/20 flex items-center justify-center text-[#DFC89B] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#DFC89B]">100% Halal & Certified</p>
                <p className="text-stone-300 text-[11px]">Punjab Food Authority compliant with highest hygiene audit scores.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Culinary Philosophy */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold block mb-2">
                Gourmet Wedding Banquets
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight text-balance">
                The Legendary Taste of Lahore Weddings
              </h2>
              <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                In Lahore, a wedding is remembered first and foremost by the warmth of its hospitality and the perfection of its feast. At Royal Palace, our executive chefs bring decades of royal banquet mastery to your celebrations.
              </p>
            </div>

            {/* Features 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {culinaryHighlights.map((feat, idx) => (
                <div key={idx} className="p-4 bg-[#F5EFEB] rounded-xl border border-[#E7DFD5] space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E7DFD5] flex items-center justify-center shadow-xs">
                    {feat.icon}
                  </div>
                  <h4 className="font-serif-luxury text-sm font-bold text-[#1C1917]">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-semibold tracking-wider uppercase rounded-lg shadow-sm transition-all"
              >
                Request Custom Menu Tasting
              </button>
              <a
                href="#packages"
                className="text-xs font-semibold text-[#9C7336] hover:underline"
              >
                View Full Menu Courses &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

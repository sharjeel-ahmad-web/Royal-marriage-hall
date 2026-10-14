import React, { useState } from 'react';
import { Users, Maximize, Check, ArrowRight, Sparkles, Eye } from 'lucide-react';
import { Venue } from '../../types';
import { formatPricePkr } from '../../lib/storage';
import { useLanguage } from '../../context/LanguageContext';

interface VenuesSectionProps {
  venues: Venue[];
  onSelectVenueDetails: (venue: Venue) => void;
  onBookVenue: (venueId: string) => void;
}

export const VenuesSection: React.FC<VenuesSectionProps> = ({
  venues,
  onSelectVenueDetails,
  onBookVenue
}) => {
  const { t, isUrdu } = useLanguage();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredVenues = filterType === 'all'
    ? venues
    : venues.filter(v => v.type === filterType);

  return (
    <section id="venues" className="py-20 sm:py-28 bg-[#FDFBF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#B48C46] font-bold mb-2">
              {t.venues.tag}
            </div>
            <h2 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight text-balance`}>
              {t.venues.title}
            </h2>
            <p className={`mt-3 text-sm sm:text-base text-stone-600 max-w-2xl ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
              {t.venues.subtitle}
            </p>
          </div>

          {/* Interactive Filter Control Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F5EFEB] rounded-xl border border-[#E7DFD5] self-start md:self-auto">
            {[
              { id: 'all', label: t.venues.filterAll },
              { id: 'indoor', label: t.venues.filterBallroom },
              { id: 'marquee', label: t.venues.filterMarquee },
              { id: 'outdoor', label: t.venues.filterLawn }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  filterType === tab.id
                    ? 'bg-[#1C1917] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span className={isUrdu ? 'font-urdu' : ''}>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Venues Grid with Card Lift and Hover Zoom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="luxury-card-hover group bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden flex flex-col justify-between"
            >
              {/* Media Container with Image Zoom on Hover */}
              <div className="relative aspect-video w-full overflow-hidden bg-stone-900">
                <img
                  src={venue.image}
                  alt={venue.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Scrim & Hover Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:via-black/35 transition-all duration-300 pointer-events-none" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 text-white text-[11px] font-medium tracking-wide bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                  {venue.type === 'indoor' ? 'Indoor Ballroom' : venue.type === 'marquee' ? 'Glass Marquee' : 'Mughal Lawn'}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-[#DFC89B] font-semibold block">
                    {venue.capacityMin} – {venue.capacityMax} {t.venues.guests}
                  </span>
                  <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold tracking-tight text-white mt-0.5 truncate`}>
                    {venue.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Clean unboxed metadata with middots */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium pb-3 border-b border-[#F5EFEB]">
                    <span className="font-mono text-stone-800 font-semibold">{venue.capacityMin} – {venue.capacityMax} {t.venues.guests}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{venue.areaSqFt.toLocaleString()} sq.ft.</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{venue.dimensions.split(' ')[0]}</span>
                  </div>

                  <p className={`mt-3 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                    {venue.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 space-y-2">
                    {venue.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-4 border-t border-[#F5EFEB] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block">{t.venues.baseRate}</span>
                    <span className="font-mono font-bold text-sm text-[#9C7336]">
                      {formatPricePkr(venue.startingPricePkr)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectVenueDetails(venue)}
                      className="px-3 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-[#F5EFEB] hover:bg-[#E7DFD5] rounded-lg transition-colors flex items-center gap-1"
                      title="View Detailed Floor Plan"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.venues.viewSpecs}</span>
                    </button>

                    <button
                      onClick={() => onBookVenue(venue.id)}
                      className="luxury-btn-gold px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#2A2421] rounded-lg shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <span>{t.venues.inquireHall}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DFC89B]" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

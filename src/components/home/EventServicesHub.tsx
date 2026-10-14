import React, { useState } from 'react';
import { 
  Cake, Heart, Baby, BookOpen, Presentation, Award, Rocket, 
  GraduationCap, Music, Coffee, SplitSquareVertical, Clock, Check, ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface EventServicesHubProps {
  onOpenInquiry: (initialVenueId?: string, initialPackageId?: string) => void;
}

export const EventServicesHub: React.FC<EventServicesHubProps> = ({ onOpenInquiry }) => {
  const { t, isUrdu } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'family' | 'corporate' | 'educational' | 'special'>('family');

  const categories = [
    { id: 'family', label: t.services.catFamily, icon: <Heart className="w-4 h-4" /> },
    { id: 'corporate', label: t.services.catCorporate, icon: <Presentation className="w-4 h-4" /> },
    { id: 'educational', label: t.services.catEducational, icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'special', label: t.services.catSpecialPackages, icon: <Coffee className="w-4 h-4" /> }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FDFBF7] scroll-mt-20 border-t border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold block mb-2">
            {t.services.tag}
          </span>
          <h2 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight text-balance`}>
            {t.services.title}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-stone-600 ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
            {t.services.subtitle}
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#F5EFEB] rounded-2xl border border-[#E7DFD5] max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#1C1917] text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                {cat.icon}
                <span className={isUrdu ? 'font-urdu' : ''}>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 1. FAMILY & SOCIAL EVENTS */}
        {activeCategory === 'family' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Birthday Parties */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden flex flex-col justify-between group">
              <div className="p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-700 border border-pink-200 flex items-center justify-center shrink-0">
                    <Cake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                      {t.services.items.birthdays.title}
                    </h3>
                    <span className="text-[11px] text-pink-700 font-medium">Disney, Marvel & Barbie Kids Themes</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.birthdays.desc}
                </p>

                <div className="pt-2 space-y-2">
                  {t.services.items.birthdays.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#FDFBF7] border-t border-[#F5EFEB] flex items-center justify-between">
                <span className="text-xs font-mono text-stone-500">Min: 50 Guests</span>
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-4 py-2 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-bold uppercase rounded-lg flex items-center gap-1.5 transition-all"
                >
                  <span>Book Birthday</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC89B]" />
                </button>
              </div>
            </div>

            {/* Anniversaries & Engagement */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden flex flex-col justify-between group">
              <div className="p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#8F6B2A] border border-amber-200 flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                      {t.services.items.anniversaries.title}
                    </h3>
                    <span className="text-[11px] text-[#8F6B2A] font-medium">Romantic Floral Stage & Candlelight</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.anniversaries.desc}
                </p>

                <div className="pt-2 space-y-2">
                  {t.services.items.anniversaries.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#FDFBF7] border-t border-[#F5EFEB] flex items-center justify-between">
                <span className="text-xs font-mono text-stone-500">Min: 75 Guests</span>
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-4 py-2 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-bold uppercase rounded-lg flex items-center gap-1.5 transition-all"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC89B]" />
                </button>
              </div>
            </div>

            {/* Aqeeqa & Baby Shower */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden flex flex-col justify-between group">
              <div className="p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0">
                    <Baby className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                      {t.services.items.aqeeqa.title}
                    </h3>
                    <span className="text-[11px] text-blue-700 font-medium">Pastel Blue / Pink Decor & Hi-Tea</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.aqeeqa.desc}
                </p>

                <div className="pt-2 space-y-2">
                  {t.services.items.aqeeqa.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#FDFBF7] border-t border-[#F5EFEB] flex items-center justify-between">
                <span className="text-xs font-mono text-stone-500">Flexible Timing</span>
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-4 py-2 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-bold uppercase rounded-lg flex items-center gap-1.5 transition-all"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC89B]" />
                </button>
              </div>
            </div>

            {/* Milad & Dars */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] overflow-hidden flex flex-col justify-between group">
              <div className="p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                      {t.services.items.milad.title}
                    </h3>
                    <span className="text-[11px] text-emerald-800 font-medium">Strict Parda Partition & Carpet Seating</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.milad.desc}
                </p>

                <div className="pt-2 space-y-2">
                  {t.services.items.milad.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#FDFBF7] border-t border-[#F5EFEB] flex items-center justify-between">
                <span className="text-xs font-mono text-stone-500">Afternoon / Evening</span>
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-4 py-2 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-bold uppercase rounded-lg flex items-center gap-1.5 transition-all"
                >
                  <span>Book Milad Hall</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC89B]" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* 2. CORPORATE & BUSINESS EVENTS */}
        {activeCategory === 'corporate' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Conferences & Seminars */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Presentation className="w-6 h-6" />
                </div>
                <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                  {t.services.items.conferences.title}
                </h3>
                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.conferences.desc}
                </p>
                <div className="space-y-2 pt-2">
                  {t.services.items.conferences.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="mt-6 w-full py-2.5 bg-[#1C1917] text-white text-xs font-bold uppercase rounded-lg hover:bg-stone-800 transition-colors"
              >
                Inquire Conference
              </button>
            </div>

            {/* Annual Dinners */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-800 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                  {t.services.items.annualDinners.title}
                </h3>
                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.annualDinners.desc}
                </p>
                <div className="space-y-2 pt-2">
                  {t.services.items.annualDinners.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="mt-6 w-full py-2.5 bg-[#1C1917] text-white text-xs font-bold uppercase rounded-lg hover:bg-stone-800 transition-colors"
              >
                Inquire Annual Dinner
              </button>
            </div>

            {/* Product Launches */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-800 flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                  {t.services.items.productLaunches.title}
                </h3>
                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.productLaunches.desc}
                </p>
                <div className="space-y-2 pt-2">
                  {t.services.items.productLaunches.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="mt-6 w-full py-2.5 bg-[#1C1917] text-white text-xs font-bold uppercase rounded-lg hover:bg-stone-800 transition-colors"
              >
                Inquire Exhibition
              </button>
            </div>

          </div>
        )}

        {/* 3. EDUCATIONAL & UNIVERSITY EVENTS */}
        {activeCategory === 'educational' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Welcome & Farewell */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                  {t.services.items.studentParties.title}
                </h3>
                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.studentParties.desc}
                </p>
                <div className="space-y-2 pt-2">
                  {t.services.items.studentParties.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="mt-6 w-full py-2.5 bg-[#1C1917] text-white text-xs font-bold uppercase rounded-lg hover:bg-stone-800 transition-colors"
              >
                Inquire Student Package
              </button>
            </div>

            {/* Convocations */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                  {t.services.items.convocations.title}
                </h3>
                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.convocations.desc}
                </p>
                <div className="space-y-2 pt-2">
                  {t.services.items.convocations.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="mt-6 w-full py-2.5 bg-[#1C1917] text-white text-xs font-bold uppercase rounded-lg hover:bg-stone-800 transition-colors"
              >
                Inquire Convocation
              </button>
            </div>

          </div>
        )}

        {/* 4. NON-WEDDING SPECIAL PACKAGES */}
        {activeCategory === 'special' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Hi-Tea Packages */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5EFEB] text-[#8F6B2A] flex items-center justify-center">
                  <Coffee className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9C7336]">Affordable Afternoon Buffet</span>
                <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                  {t.services.items.hiTeaPkg.title}
                </h3>
                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.hiTeaPkg.desc}
                </p>
                <div className="space-y-2 pt-2">
                  {t.services.items.hiTeaPkg.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="mt-6 w-full py-2.5 bg-[#B48C46] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#9C7336] transition-colors"
              >
                Inquire Hi-Tea
              </button>
            </div>

            {/* Half-Hall Partition */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5EFEB] text-[#8F6B2A] flex items-center justify-center">
                  <SplitSquareVertical className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9C7336]">50 to 120 Guests</span>
                <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                  {t.services.items.halfHallPkg.title}
                </h3>
                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.halfHallPkg.desc}
                </p>
                <div className="space-y-2 pt-2">
                  {t.services.items.halfHallPkg.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="mt-6 w-full py-2.5 bg-[#B48C46] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#9C7336] transition-colors"
              >
                Inquire Half-Hall
              </button>
            </div>

            {/* Hourly Booking */}
            <div className="luxury-card-hover bg-white rounded-2xl border border-[#E7DFD5] p-7 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5EFEB] text-[#8F6B2A] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9C7336]">3 to 4-Hour Slots</span>
                <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold text-[#1C1917]`}>
                  {t.services.items.hourlyPkg.title}
                </h3>
                <p className={`text-xs sm:text-sm text-stone-600 leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                  {t.services.items.hourlyPkg.desc}
                </p>
                <div className="space-y-2 pt-2">
                  {t.services.items.hourlyPkg.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#B48C46] shrink-0 mt-0.5" />
                      <span className={isUrdu ? 'font-urdu' : ''}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="mt-6 w-full py-2.5 bg-[#B48C46] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#9C7336] transition-colors"
              >
                Inquire Hourly Rental
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

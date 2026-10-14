import React, { useState, useEffect } from 'react';
import { Calendar, MessageSquare, ArrowRight, ShieldCheck, Sparkles, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { createWhatsAppChatUrl } from '../../lib/storage';
import { useLanguage } from '../../context/LanguageContext';
import { CountUp } from '../common/CountUp';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onExploreVenues: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=85',
    titleEn: 'The Grand Kohinoor Ballroom',
    titleUr: 'دی گرینڈ کوہ نور بال روم'
  },
  {
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=2400&q=85',
    titleEn: 'The Imperial Glass Marquee',
    titleUr: 'دی امپیریل گلاس مارکی'
  },
  {
    image: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=2400&q=85',
    titleEn: 'The Royal Emerald Lawn',
    titleUr: 'دی رائل ایمرلڈ لان'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInquiry,
  onExploreVenues
}) => {
  const { t, isUrdu } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const whatsAppUrl = createWhatsAppChatUrl({
    venueName: isUrdu ? 'رائل پیلس بینکوئٹس اینڈ مارکی لاہور' : 'Royal Palace Banquets & Marquee Lahore'
  });

  // Slide transition timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#1C1917] text-white overflow-hidden min-h-[640px] flex flex-col justify-between">
      {/* Background Slides with Cross-Fade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.titleEn}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-out scale-105"
            />
          </div>
        ))}
        {/* Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/70 to-[#1C1917]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 w-full">
        <div className="max-w-3xl">
          
          {/* Unboxed Metadata Tagline with Middots */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#DFC89B] font-medium tracking-wide mb-4">
            <span className={isUrdu ? 'font-urdu' : 'font-lora'}>{t.hero.kicker}</span>
          </div>

          {/* Primary Editorial Headline (Cinzel for EN, Jameel Noori for UR) */}
          <h1 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] text-balance`}>
            {t.hero.title}
          </h1>

          {/* Editorial Subtitle */}
          <p className={`mt-5 text-sm sm:text-base lg:text-lg text-[#D6C7B2] leading-relaxed max-w-2xl font-light ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
            {t.hero.subtitle}
          </p>

          {/* Single-line primary and secondary action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="luxury-btn-gold px-7 py-3.5 bg-[#B48C46] hover:bg-[#9C7336] text-white font-semibold text-xs tracking-wider uppercase rounded-lg shadow-lg transition-all duration-200 active:scale-95 flex items-center gap-2.5"
            >
              <Calendar className="w-4 h-4 text-[#DFC89B]" />
              <span className={isUrdu ? 'font-urdu font-bold' : ''}>{t.hero.scheduleVisit}</span>
            </button>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-200 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className={isUrdu ? 'font-urdu font-bold' : ''}>{t.hero.whatsAppInquiry}</span>
            </a>

            <button
              onClick={onExploreVenues}
              className="text-xs text-[#DFC89B] hover:text-white font-medium underline underline-offset-4 transition-colors"
            >
              <span className={isUrdu ? 'font-urdu' : ''}>{t.hero.exploreSpaces} &rarr;</span>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="mt-8 flex items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === i ? 'w-8 bg-[#B48C46]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Full-width 4-column trust strip below hero split with CountUp from 0 */}
      <div className="relative z-10 border-t border-[#332D29] bg-[#141210]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#2C2622]">
            
            {/* Stat 1: Capacity */}
            <div className="pt-2 md:pt-0 md:px-4 first:pl-0">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold font-mono text-[#DFC89B] block">
                <CountUp end={1500} duration={2200} />
              </span>
              <span className={`text-xs text-[#A8A29E] mt-0.5 block ${isUrdu ? 'font-urdu' : ''}`}>
                {t.hero.stats.capacitySub}
              </span>
              <span className="text-[11px] text-[#78716C] block mt-0.5">3 Grand Spaces</span>
            </div>

            {/* Stat 2: Events Hosted */}
            <div className="pt-4 md:pt-0 md:px-4">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold font-mono text-[#DFC89B] block">
                <CountUp end={1800} suffix="+" duration={2400} />
              </span>
              <span className={`text-xs text-[#A8A29E] mt-0.5 block ${isUrdu ? 'font-urdu' : ''}`}>
                {t.hero.stats.eventsSub}
              </span>
              <span className="text-[11px] text-[#78716C] block mt-0.5">Since 2014</span>
            </div>

            {/* Stat 3: Guests Served */}
            <div className="pt-4 md:pt-0 md:px-4">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold font-mono text-[#DFC89B] block">
                <CountUp end={450000} suffix="+" duration={2800} />
              </span>
              <span className={`text-xs text-[#A8A29E] mt-0.5 block ${isUrdu ? 'font-urdu' : ''}`}>
                {t.hero.stats.guestsSub}
              </span>
              <span className="text-[11px] text-[#78716C] block mt-0.5">Satisfied Host Families</span>
            </div>

            {/* Stat 4: Generator Power */}
            <div className="pt-4 md:pt-0 md:px-4">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold font-mono text-[#DFC89B] block">
                <CountUp end={100} suffix="%" duration={1800} />
              </span>
              <span className={`text-xs text-[#A8A29E] mt-0.5 block ${isUrdu ? 'font-urdu' : ''}`}>
                {t.hero.stats.powerSub}
              </span>
              <span className="text-[11px] text-[#78716C] block mt-0.5">Zero Delay AMF</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

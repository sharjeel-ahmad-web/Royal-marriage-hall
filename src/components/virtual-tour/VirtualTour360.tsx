import React, { useState, useRef, useEffect } from 'react';
import { Compass, RotateCw, ZoomIn, ZoomOut, Maximize2, Sparkles, Eye, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Hotspot {
  x: number; // percentage from 0 to 100
  titleEn: string;
  titleUr: string;
  descEn: string;
  descUr: string;
}

interface HallTour {
  id: string;
  nameEn: string;
  nameUr: string;
  typeEn: string;
  typeUr: string;
  image: string;
  hotspots: Hotspot[];
}

const TOUR_HALLS: HallTour[] = [
  {
    id: 'ballroom',
    nameEn: 'The Grand Kohinoor Ballroom',
    nameUr: 'دی گرینڈ کوہ نور بال روم',
    typeEn: 'Indoor Chandelier Ballroom · 1,500 Guests',
    typeUr: 'انڈور کرسٹل فانوس بال روم · 1,500 مہمان',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=85',
    hotspots: [
      {
        x: 22,
        titleEn: 'Belgian Crystal Chandeliers',
        titleUr: 'بلجیم کے شاہی کرسٹل فانوس',
        descEn: '18 handcrafted crystal chandeliers casting warm ambient illumination.',
        descUr: '18 شاہی فانوس جو پورے ہال کو سنہری اور رومانوی روشنی بخشتے ہیں۔'
      },
      {
        x: 52,
        titleEn: 'Royal Bridal & Groom Stage',
        titleUr: 'شاہی دولہا دلہن اسٹیج',
        descEn: 'Elevated 40ft wide floral stage with velvet drapery and spotlighting.',
        descUr: '40 فٹ چوڑا پھولوں اور مخمل سے آراستہ شاہی اسٹیج۔'
      },
      {
        x: 80,
        titleEn: 'VIP Family Table Lounges',
        titleUr: 'وی آئی پی فیملی لاؤنجز',
        descEn: 'Damask linens with gold Chiavari chairs and personalized captain service.',
        descUr: 'شاہی گولڈن کرسیوں اور ذاتی کیپٹن سروس کے ساتھ خصوصی دسترخوان۔'
      }
    ]
  },
  {
    id: 'marquee',
    nameEn: 'The Imperial Glass Marquee',
    nameUr: 'دی امپیریل گلاس مارکی',
    typeEn: 'Acoustic Glass Marquee · 950 Guests',
    typeUr: 'ماڈرن ایکوسٹک گلاس مارکی · 950 مہمان',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=2400&q=85',
    hotspots: [
      {
        x: 30,
        titleEn: 'Suspended Fairy Light Canopy',
        titleUr: 'ستاروں جیسی فیری لائٹس کی چھت',
        descEn: 'Over 12,000 warm starlit LEDs twinkling overhead.',
        descUr: 'چھت پر بارہ ہزار سے زائد فیری لائٹس کا دلکش نظارہ۔'
      },
      {
        x: 65,
        titleEn: 'Panoramic Glass Enclosure',
        titleUr: 'شیشے کی شفاف دیواریں',
        descEn: 'Double-glazed acoustic glass offering 360-degree garden views.',
        descUr: 'ساؤنڈ پروف شیشے کی دیواریں جہاں سے باہر کے باغات کا دلکش منظر دکھائی دیتا ہے۔'
      }
    ]
  },
  {
    id: 'lawn',
    nameEn: 'The Royal Emerald Lawn',
    nameUr: 'دی رائل ایمرلڈ لان',
    typeEn: 'Heritage Mughal Open-Air Lawn · 650 Guests',
    typeUr: 'تاریخی مغل اوپن ایئر لان · 650 مہمان',
    image: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=2400&q=85',
    hotspots: [
      {
        x: 35,
        titleEn: 'Illuminated Heritage Stone Arches',
        titleUr: 'روشن مغل اسٹون محرابیں',
        descEn: 'Carved stone arches with ambient up-lighting and floating rose fountains.',
        descUr: 'تراشیدہ پتھر کی تاریخی محرابیں اور تازہ گلاب کے فوارے۔'
      },
      {
        x: 75,
        titleEn: 'Starlit Gazebo Nikah Stage',
        titleUr: 'پھولوں سے سجا نکاح گیزبو اسٹیج',
        descEn: 'Romantic open-air wooden pergola draped in white jasmine and tuberose.',
        descUr: 'سفید چنبیلی اور موتیا کے پھولوں سے مزین رومانٹک نکاح اسٹیج۔'
      }
    ]
  }
];

export const VirtualTour360: React.FC = () => {
  const { t, isUrdu } = useLanguage();
  const [activeHallId, setActiveHallId] = useState('ballroom');
  const [panX, setPanX] = useState(50); // percentage 0 to 100
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeHall = TOUR_HALLS.find(h => h.id === activeHallId) || TOUR_HALLS[0];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating || isDragging) return;
    const interval = setInterval(() => {
      setPanX((prev) => (prev >= 100 ? 0 : prev + 0.12));
    }, 40);
    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    setStartX(e.clientX);
    setPanX((prev) => {
      let next = prev - dx * 0.15;
      if (next < 0) next += 100;
      if (next > 100) next -= 100;
      return next;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    setStartX(e.touches[0].clientX);
    setPanX((prev) => {
      let next = prev - dx * 0.2;
      if (next < 0) next += 100;
      if (next > 100) next -= 100;
      return next;
    });
  };

  const resetView = () => {
    setPanX(50);
    setZoom(1);
    setIsAutoRotating(true);
    setSelectedHotspot(null);
  };

  return (
    <section id="virtual-tour" className="py-20 sm:py-28 bg-[#1C1917] text-white overflow-hidden scroll-mt-20 border-t border-[#332D29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#DFC89B] font-bold block mb-2">
              {t.tour360.tag}
            </span>
            <h2 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance`}>
              {t.tour360.title}
            </h2>
            <p className={`mt-3 text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
              {t.tour360.subtitle}
            </p>
          </div>

          {/* Hall Selection Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#29231E] rounded-xl border border-[#3A332D] self-start md:self-auto">
            {TOUR_HALLS.map(hall => (
              <button
                key={hall.id}
                onClick={() => {
                  setActiveHallId(hall.id);
                  resetView();
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeHallId === hall.id
                    ? 'bg-[#B48C46] text-white shadow-md'
                    : 'text-stone-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isUrdu ? hall.nameUr : hall.nameEn}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive 360 Viewport Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          className="relative w-full h-[450px] sm:h-[550px] rounded-2xl overflow-hidden border border-[#B48C46]/40 shadow-2xl cursor-grab active:cursor-grabbing select-none bg-black"
        >
          {/* Panoramic Image with seamless background pan */}
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-75"
            style={{
              backgroundImage: `url(${activeHall.image})`,
              backgroundPosition: `${panX}% 50%`,
              backgroundSize: `${200 * zoom}% auto`,
              transform: `scale(${zoom})`,
              filter: 'brightness(0.95) contrast(1.05)'
            }}
          />

          {/* Vignette Scrim */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />

          {/* Top Info Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="bg-[#1C1917]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-white shadow-lg pointer-events-auto">
              <span className="text-[10px] text-[#DFC89B] uppercase tracking-wider block font-semibold">
                {isUrdu ? activeHall.typeUr : activeHall.typeEn}
              </span>
              <p className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} font-bold text-sm sm:text-base`}>
                {isUrdu ? activeHall.nameUr : activeHall.nameEn}
              </p>
            </div>

            {/* Compass / 360 Indicator */}
            <div className="flex items-center gap-2 bg-[#1C1917]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[#DFC89B] text-xs pointer-events-auto">
              <Compass className={`w-4 h-4 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '12s' }} />
              <span className="font-mono text-[11px] font-bold">360° LIVE</span>
            </div>
          </div>

          {/* Interactive Hotspot Pins */}
          {activeHall.hotspots.map((spot, idx) => {
            // Calculate relative offset based on panX
            const spotOffset = (spot.x - panX + 100) % 100;
            const isVisible = spotOffset > 10 && spotOffset < 90;

            if (!isVisible) return null;

            return (
              <div
                key={idx}
                style={{ left: `${spotOffset}%`, top: '48%' }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedHotspot(selectedHotspot === spot ? null : spot);
                }}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#B48C46]/50 animate-ping absolute inset-0" />
                  <div className="relative w-10 h-10 rounded-full bg-[#B48C46] text-white flex items-center justify-center border-2 border-white shadow-xl hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Hotspot Preview Tooltip */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden group-hover:block w-48 p-2.5 bg-[#1C1917]/95 backdrop-blur-md rounded-lg border border-[#B48C46]/50 text-white text-xs shadow-xl pointer-events-none">
                  <p className="font-bold text-[#DFC89B]">{isUrdu ? spot.titleUr : spot.titleEn}</p>
                  <p className="text-[11px] text-stone-300 mt-0.5 line-clamp-2">{isUrdu ? spot.descUr : spot.descEn}</p>
                </div>
              </div>
            );
          })}

          {/* Selected Hotspot Dialog */}
          {selectedHotspot && (
            <div className="absolute bottom-16 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 bg-[#1C1917]/95 backdrop-blur-md p-4 rounded-xl border border-[#B48C46] shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] text-[#DFC89B] font-bold uppercase tracking-wider">Hall Specification Detail</span>
                  <h4 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} font-bold text-sm text-white mt-0.5`}>
                    {isUrdu ? selectedHotspot.titleUr : selectedHotspot.titleEn}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="text-stone-400 hover:text-white p-1 text-xs"
                >
                  ✕
                </button>
              </div>
              <p className={`text-xs text-stone-300 mt-2 leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? selectedHotspot.descUr : selectedHotspot.descEn}
              </p>
            </div>
          )}

          {/* Bottom Floating Control Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1C1917]/85 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 z-20">
            <button
              onClick={() => setZoom(prev => Math.min(prev + 0.2, 1.8))}
              className="p-1.5 text-stone-300 hover:text-white rounded-md hover:bg-white/10 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.9))}
              className="p-1.5 text-stone-300 hover:text-white rounded-md hover:bg-white/10 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-white/20" />
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className={`p-1.5 rounded-md transition-colors ${
                isAutoRotating ? 'text-[#DFC89B] bg-white/10' : 'text-stone-300 hover:text-white'
              }`}
              title={isAutoRotating ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
            >
              <RotateCw className="w-4 h-4" />
            </button>
            <button
              onClick={resetView}
              className="text-[11px] font-semibold text-stone-300 hover:text-white px-2 py-1 rounded hover:bg-white/10 transition-colors"
            >
              {t.tour360.resetView}
            </button>
          </div>

          {/* Help Overlay Hint */}
          <div className="absolute bottom-4 left-4 hidden md:block text-[11px] text-stone-400 pointer-events-none bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-xs">
            {t.tour360.dragHelp}
          </div>

        </div>

      </div>
    </section>
  );
};

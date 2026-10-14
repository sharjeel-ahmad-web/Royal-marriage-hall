import React from 'react';
import { Zap, Crown, Car, Music, Flower2, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-6 h-6 text-[#B48C46]" />,
      title: '100% Uninterrupted Dual Power',
      description: 'Dual Caterpillar 500kVA diesel generators with automatic 3-second AMF synchronizers ensure AC chillers, chandeliers, and sound never experience a flicker.'
    },
    {
      icon: <Crown className="w-6 h-6 text-[#B48C46]" />,
      title: 'Private VIP Bridal & Groom Suites',
      description: 'Two fully air-conditioned private executive dressing suites with ensuite vanity mirrors, attached private washrooms, and dedicated butler refreshments.'
    },
    {
      icon: <Car className="w-6 h-6 text-[#B48C46]" />,
      title: '450+ Car Valet Parking Facility',
      description: 'Well-lit paved parking lot with 24/7 CCTV surveillance, automated security barrier gates, and complimentary valet drivers handling guest arrivals smoothly.'
    },
    {
      icon: <Music className="w-6 h-6 text-[#B48C46]" />,
      title: 'Acoustic Sound & Intelligent Lighting',
      description: 'Line-array acoustic speakers, wireless handheld microphones, theatrical warm wash lights, and moving spotlights operated by dedicated audio engineers.'
    },
    {
      icon: <Flower2 className="w-6 h-6 text-[#B48C46]" />,
      title: 'Custom Stage & Floral Artistry',
      description: 'In-house floral artisans specializing in imported fresh orchids, baby’s breath, red roses, and customized themed stages tailored to your bridal color palette.'
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#B48C46]" />,
      title: 'Senior Event Captain & Security',
      description: 'One senior event floor captain dedicated to the host family, overseeing dining timers, VIP table service, guest greeting, and perimeter security guards.'
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F5EFEB] scroll-mt-20 border-t border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold block mb-2">
            World-Class Infrastructure
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Designed for Flawless Hospitality
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Every technical detail is meticulously engineered to ensure your wedding runs with regal precision and total peace of mind.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#E7DFD5] shadow-xs hover:shadow-lg hover:border-[#B48C46]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FDFBF7] border border-[#E7DFD5] flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#1C1917] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#9C7336] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Standard Amenity</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

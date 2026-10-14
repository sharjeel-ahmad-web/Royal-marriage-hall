import React, { useState } from 'react';
import { Check, Sparkles, Utensils, Users, Calculator, ArrowRight } from 'lucide-react';
import { Package } from '../../types';
import { formatPricePkr } from '../../lib/storage';
import { useLanguage } from '../../context/LanguageContext';

interface PackagesSectionProps {
  packages: Package[];
  onSelectPackage: (packageId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  onSelectPackage
}) => {
  const { t, isUrdu } = useLanguage();
  // Start guest counting strictly from ZERO (0) as requested!
  const [calculatorGuests, setCalculatorGuests] = useState<number>(0);

  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#F5EFEB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold block mb-2">
            {t.packages.tag}
          </span>
          <h2 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight`}>
            {t.packages.title}
          </h2>
          <p className={`mt-3 text-sm sm:text-base text-stone-600 ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
            {t.packages.subtitle}
          </p>

          {/* Live Interactive Budget Calculator Bar (Starting from 0) */}
          <div className="mt-8 p-4 bg-white rounded-2xl border border-[#E7DFD5] shadow-sm max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDFBF7] border border-[#E7DFD5] flex items-center justify-center text-[#B48C46]">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className={`text-xs font-bold uppercase tracking-wider text-stone-700 block ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.packages.calculatorTitle}
                </span>
                <span className={`text-[11px] text-stone-500 ${isUrdu ? 'font-urdu' : ''}`}>
                  {t.packages.calculatorSub}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs text-stone-500">0</span>
              <input
                type="range"
                min="0"
                max="1500"
                step="25"
                value={calculatorGuests}
                onChange={(e) => setCalculatorGuests(Number(e.target.value))}
                className="w-36 accent-[#B48C46] cursor-pointer"
              />
              <span className="font-mono font-bold text-sm bg-[#F5EFEB] px-2.5 py-1 rounded-md text-[#1C1917] whitespace-nowrap min-w-[90px] text-center">
                {calculatorGuests} {isUrdu ? 'افراد' : 'Guests'}
              </span>
            </div>
          </div>
        </div>

        {/* Packages 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const isPopular = pkg.popular;
            const estimatedPackageTotal = calculatorGuests * pkg.pricePerPersonPkr;

            return (
              <div
                key={pkg.id}
                className={`luxury-card-hover relative bg-white rounded-2xl border flex flex-col justify-between overflow-hidden ${
                  isPopular
                    ? 'border-[#B48C46] shadow-xl ring-2 ring-[#B48C46]/30 lg:-translate-y-2'
                    : 'border-[#E7DFD5] shadow-xs'
                }`}
              >
                {/* Popularity badge */}
                {isPopular && (
                  <div className="bg-[#B48C46] text-white text-[11px] font-bold uppercase tracking-widest text-center py-1.5">
                    {t.packages.popularTag}
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6 flex-1">
                  {/* Title & Price */}
                  <div>
                    <span className="text-xs font-semibold text-[#8F6B2A] uppercase tracking-wider block">
                      Tier: {pkg.tier}
                    </span>
                    <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-2xl font-bold text-[#1C1917] mt-1`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs text-stone-500 mt-1 ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
                      {pkg.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#F5EFEB]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-stone-500">PKR</span>
                        <span className="text-3xl font-bold font-mono text-[#1C1917]">
                          {pkg.pricePerPersonPkr.toLocaleString()}
                        </span>
                        <span className="text-xs text-stone-500">/ {t.packages.perHead}</span>
                      </div>
                      <span className="text-[11px] text-stone-400 block mt-0.5">
                        {t.packages.minGuests}: {pkg.minGuests} {t.packages.guestsCount}
                      </span>

                      {/* Live Calculated Total starting from 0 */}
                      <div className="mt-3 p-2.5 bg-[#FDFBF7] rounded-lg border border-[#E7DFD5] text-xs flex justify-between items-center">
                        <span className="text-stone-600 font-medium">
                          {calculatorGuests} {isUrdu ? 'افراد کی لاگت:' : 'Guests Total:'}
                        </span>
                        <span className="font-mono font-bold text-[#9C7336]">
                          {calculatorGuests === 0 ? 'Rs. 0' : formatPricePkr(estimatedPackageTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Menu Highlights */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#44403C] flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-[#B48C46]" />
                      <span>{isUrdu ? 'مینو کورسز کی جھلکیاں' : 'Included Course Highlights'}</span>
                    </h4>
                    <div className="space-y-3">
                      {pkg.courses.map((course, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="font-semibold text-stone-900 block mb-0.5">
                            {course.category}:
                          </span>
                          <p className="text-stone-600 leading-relaxed">
                            {course.items.join(' · ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Inclusions */}
                  <div className="pt-4 border-t border-[#F5EFEB] space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#44403C] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#B48C46]" />
                      <span>{isUrdu ? 'مفت اضافی سہولیات' : 'Complimentary Services'}</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`luxury-btn-gold w-full py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm ${
                      isPopular
                        ? 'bg-[#B48C46] hover:bg-[#9C7336] text-white active:scale-95'
                        : 'bg-[#1C1917] hover:bg-[#2A2421] text-white'
                    }`}
                  >
                    <span className={isUrdu ? 'font-urdu font-bold' : ''}>{t.packages.requestQuote}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

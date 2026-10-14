import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  onOpenInquiry: (initialVenueId?: string) => void;
  onOpenAdmin: () => void;
  isAdminOpen: boolean;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  onOpenAdmin,
  isAdminOpen,
  activeSection
}) => {
  const { t, language, toggleLanguage, isUrdu } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.venues, href: '#venues' },
    { label: t.nav.virtualTour, href: '#virtual-tour' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.packages, href: '#packages' },
    { label: t.nav.catering, href: '#catering' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.location, href: '#location' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isAdminOpen) {
      onOpenAdmin();
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E7DFD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (isAdminOpen) onOpenAdmin();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#1C1917] flex items-center justify-center text-[#DFC89B] border border-[#B48C46]/40 shadow-sm transition-transform group-hover:scale-105">
              <span className="font-serif-luxury font-bold text-lg">RP</span>
            </div>
            <div className="flex flex-col">
              <span className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-xl font-bold tracking-tight text-[#1C1917] whitespace-nowrap`}>
                {t.brandName}
              </span>
              <span className={`text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8F6B2A] ${isUrdu ? 'font-urdu' : ''}`}>
                {t.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#44403C]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#9C7336] ${
                  activeSection === link.href.replace('#', '') ? 'text-[#9C7336] font-bold' : ''
                } ${isUrdu ? 'font-urdu text-sm' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle + Primary Action + Admin portal trigger */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switcher Button (English / اردو) */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg border border-[#E7DFD5] bg-white text-xs font-bold text-[#1C1917] hover:border-[#B48C46] flex items-center gap-1.5 transition-colors shadow-2xs"
              title="Toggle English / اردو"
            >
              <Languages className="w-3.5 h-3.5 text-[#B48C46]" />
              <span className={language === 'en' ? 'font-sans' : 'font-urdu'}>
                {language === 'en' ? 'اردو' : 'English'}
              </span>
            </button>

            <button
              onClick={onOpenAdmin}
              className={`p-2.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 ${
                isAdminOpen
                  ? 'bg-[#1C1917] text-[#DFC89B] border-[#1C1917]'
                  : 'bg-white border-[#E7DFD5] text-[#78716C] hover:text-[#1C1917] hover:border-[#B48C46]/50'
              }`}
              title="Management CMS Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#B48C46]" />
              <span className={`hidden xl:inline ${isUrdu ? 'font-urdu' : ''}`}>
                {isAdminOpen ? 'Public View' : t.nav.staffPortal}
              </span>
            </button>

            <button
              onClick={() => onOpenInquiry()}
              className="luxury-btn-gold px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#1C1917] hover:bg-[#2A2421] active:scale-95 transition-all rounded-lg border border-[#B48C46]/30 shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span className={isUrdu ? 'font-urdu font-bold' : ''}>{t.nav.inquireBtn}</span>
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-bold border border-[#E7DFD5] bg-white rounded-md text-stone-800"
            >
              {language === 'en' ? 'اردو' : 'EN'}
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#1C1917] rounded-md"
            >
              {isUrdu ? 'بکنگ' : 'Inquire'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#44403C] hover:text-[#1C1917] rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E7DFD5] bg-[#FDFBF7] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2 text-base font-medium text-[#292524] hover:bg-[#F5EFEB] rounded-md transition-colors ${
                  isUrdu ? 'font-urdu' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E7DFD5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#1C1917] rounded-lg shadow-sm"
            >
              <span className={isUrdu ? 'font-urdu font-bold' : ''}>{t.hero.scheduleVisit}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-[#44403C] bg-white border border-[#E7DFD5] rounded-lg flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#B48C46]" />
              <span className={isUrdu ? 'font-urdu' : ''}>{t.nav.staffPortal}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

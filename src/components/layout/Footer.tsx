import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenAdmin }) => {
  const { t, isUrdu } = useLanguage();

  return (
    <footer className="bg-[#1C1917] text-[#FDFBF7] border-t border-[#332D29]">
      {/* Top CTA Banner */}
      <div className="border-b border-[#2C2622] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-2xl sm:text-3xl font-bold text-white tracking-tight`}>
              {t.footer.bannerTitle}
            </h3>
            <p className={`mt-1 text-xs sm:text-sm text-[#D6C7B2] max-w-xl ${isUrdu ? 'font-urdu' : 'font-lora'}`}>
              {t.footer.bannerSub}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry()}
              className="luxury-btn-gold px-6 py-3 bg-[#B48C46] hover:bg-[#9C7336] text-white font-medium text-xs tracking-wider uppercase rounded-lg shadow-md transition-all active:scale-95"
            >
              <span className={isUrdu ? 'font-urdu font-bold' : ''}>{t.footer.bookVisit}</span>
            </button>
            <a
              href="https://wa.me/923008452199?text=Assalam-o-Alaikum%20Royal%20Palace%20Lahore,%20I%20would%20like%20to%20inquire%20about%20date%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-medium text-xs tracking-wider uppercase rounded-lg border border-white/15 transition-all"
            >
              <span className={isUrdu ? 'font-urdu' : ''}>{t.hero.whatsAppInquiry}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#29231E] flex items-center justify-center text-[#DFC89B] border border-[#B48C46]/50">
                <span className="font-serif-luxury font-bold text-lg">RP</span>
              </div>
              <div>
                <span className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-lg font-bold text-white block`}>
                  {t.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#B48C46] font-semibold">
                  {t.brandSubtitle}
                </span>
              </div>
            </div>
            <p className={`text-xs text-[#A8A29E] leading-relaxed ${isUrdu ? 'font-urdu' : ''}`}>
              {isUrdu 
                ? 'لاہور کا سب سے باوقار وینیو جہاں شاہی بارات، ولیمہ، مہندی، سالگرہ پارٹیز، اور کارپوریٹ کانفرنسز کا بے مثال انعقاد کیا جاتا ہے۔'
                : 'Lahore’s premier wedding and multi-event venue destination for signature Barat, Walima, corporate conferences, and birthday celebrations.'}
            </p>
            <div className="pt-2 text-xs text-[#DFC89B] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B48C46]" />
              <span className={isUrdu ? 'font-urdu' : ''}>
                {isUrdu ? 'گنجائش: 1,500 مہمانوں تک' : 'Verified Capacity: Up to 1,500 Guests'}
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-sm font-semibold tracking-wider uppercase text-[#DFC89B] mb-4`}>
              {isUrdu ? 'اہم لنکس' : 'Event Spaces'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D6D3D1]">
              <li>
                <a href="#venues" className="hover:text-white transition-colors">{t.nav.venues}</a>
              </li>
              <li>
                <a href="#virtual-tour" className="hover:text-white transition-colors">{t.nav.virtualTour}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">{t.nav.packages}</a>
              </li>
              <li>
                <a href="#catering" className="hover:text-white transition-colors">{t.nav.catering}</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">{t.nav.location}</a>
              </li>
            </ul>
          </div>

          {/* Lahore Location & Contact */}
          <div>
            <h4 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-sm font-semibold tracking-wider uppercase text-[#DFC89B] mb-4`}>
              {isUrdu ? 'رابطہ اور بکنگ' : 'Inquiries & Booking'}
            </h4>
            <div className="space-y-3 text-xs text-[#D6D3D1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B48C46] shrink-0 mt-0.5" />
                <span>
                  Main Boulevard, Near DHA Phase 5 Commercial & Bedian Road Interchange, Lahore, Punjab, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B48C46] shrink-0" />
                <a href="tel:+923008452199" className="hover:text-white transition-colors font-mono">
                  +92 300 8452199 / +92 42 35789100
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/923008452199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-[#DFC89B]"
                >
                  WhatsApp: +92 300 8452199
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B48C46] shrink-0" />
                <span>inquiries@royalpalacelahore.com</span>
              </div>
            </div>
          </div>

          {/* Visiting Policy */}
          <div>
            <h4 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-sm font-semibold tracking-wider uppercase text-[#DFC89B] mb-4`}>
              {t.location.visitingOffice}
            </h4>
            <div className="space-y-2.5 text-xs text-[#D6D3D1]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B48C46] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{t.location.hours}</p>
                </div>
              </div>
              <div className="p-3 bg-[#26211D] rounded border border-[#3A332D] text-[11px] text-[#A8A29E]">
                <p className="font-semibold text-[#DFC89B] mb-1">Punjab Timing Compliance:</p>
                <p>Afternoon Shift: 1:00 PM – 4:00 PM</p>
                <p>Evening Shift: 7:30 PM – 10:30 PM</p>
              </div>
              <button
                onClick={onOpenAdmin}
                className="mt-2 text-[11px] text-[#A8A29E] hover:text-[#DFC89B] flex items-center gap-1.5 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#B48C46]" />
                <span className={isUrdu ? 'font-urdu' : ''}>{t.nav.staffPortal}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#29231E] flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p className={isUrdu ? 'font-urdu' : ''}>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#A8A29E] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#A8A29E] cursor-pointer">Booking Terms</span>
            <span className="hover:text-[#A8A29E] cursor-pointer">Catering Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

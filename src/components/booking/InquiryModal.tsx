import React, { useState } from 'react';
import { X, Calendar, Users, Clock, MapPin, CheckCircle, ArrowRight, ArrowLeft, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { EventType, TimeSlot } from '../../types';
import { VENUES, PACKAGES } from '../../data/mockData';
import { saveInquiry, createWhatsAppChatUrl, formatPricePkr } from '../../lib/storage';
import { useLanguage } from '../../context/LanguageContext';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVenueId?: string;
  initialPackageId?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialVenueId,
  initialPackageId
}) => {
  const { isUrdu } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State (guestCount starts from 0 as requested!)
  const [eventType, setEventType] = useState<string>('barat');
  const [eventDate, setEventDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<TimeSlot>('evening');
  const [guestCount, setGuestCount] = useState<number>(0);

  const [selectedVenueId, setSelectedVenueId] = useState<string>(initialVenueId || VENUES[0].id);
  const [selectedPackageId, setSelectedPackageId] = useState<string>(initialPackageId || PACKAGES[1].id);

  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('Lahore');
  const [visitRequested, setVisitRequested] = useState<boolean>(true);
  const [visitDate, setVisitDate] = useState<string>('');
  const [visitTime, setVisitTime] = useState<string>('04:30 PM');
  const [notes, setNotes] = useState<string>('');

  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const selectedVenue = VENUES.find(v => v.id === selectedVenueId) || VENUES[0];
  const selectedPkg = PACKAGES.find(p => p.id === selectedPackageId);
  const estimatedCost = selectedPkg ? guestCount * selectedPkg.pricePerPersonPkr : selectedVenue.startingPricePkr;

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!eventDate) errs.eventDate = isUrdu ? 'برائے مہربانی ایونٹ کی تاریخ منتخب کریں' : 'Please select a preferred event date';
    if (guestCount <= 0) errs.guestCount = isUrdu ? 'مہمانوں کی تعداد درج کریں (کم از کم 1)' : 'Please specify expected guest count (greater than 0)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!customerName.trim()) errs.customerName = isUrdu ? 'اپنا مکمل نام درج کریں' : 'Please enter your full name';
    if (!phone.trim() || phone.trim().length < 10) errs.phone = isUrdu ? 'درست واٹس ایپ فون نمبر درج کریں (جیسے 0300 1234567)' : 'Please provide a valid WhatsApp phone number (e.g. 0300 1234567)';
    if (visitRequested && !visitDate) errs.visitDate = isUrdu ? 'ہال معائنے کے لیے تاریخ منتخب کریں' : 'Please select a date for your venue visit walkthrough';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    const saved = saveInquiry({
      customerName: customerName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      city: city.trim() || 'Lahore',
      eventType: eventType as EventType,
      eventDate,
      timeSlot,
      venueId: selectedVenueId,
      guestCount,
      packageId: selectedPackageId || undefined,
      visitRequested,
      visitDate: visitRequested ? visitDate : undefined,
      visitTime: visitRequested ? visitTime : undefined,
      estimatedBudgetPkr: estimatedCost,
      notes: notes.trim()
    });

    setSubmittedInquiryId(saved.id);
    setStep(4);
  };

  const resetForm = () => {
    setStep(1);
    setSubmittedInquiryId(null);
    onClose();
  };

  const whatsAppUrl = createWhatsAppChatUrl({
    venueName: selectedVenue.name,
    eventType,
    guestCount,
    date: eventDate,
    customerName,
    referenceId: submittedInquiryId || undefined
  });

  const eventTypesList = [
    { id: 'barat', en: 'Barat', ur: 'بارات' },
    { id: 'walima', en: 'Walima', ur: 'ولیمہ' },
    { id: 'mehndi', en: 'Mehndi / Sangeet', ur: 'مہندی / سنگیت' },
    { id: 'nikah', en: 'Nikah', ur: 'نکاح' },
    { id: 'birthday', en: 'Birthday Party', ur: 'سالگرہ (برتھ ڈے)' },
    { id: 'anniversary', en: 'Anniversary / Engagement', ur: 'سالگرہ شادی / منگنی' },
    { id: 'aqeeqa', en: 'Aqeeqa / Baby Shower', ur: 'عقیقہ / بیبی شاور' },
    { id: 'milad', en: 'Milad-un-Nabi / Dars', ur: 'محفلِ میلاد / درس' },
    { id: 'conference', en: 'Corporate Conference', ur: 'کارپوریٹ کانفرنس' },
    { id: 'annual_dinner', en: 'Annual Dinner / Gala', ur: 'کمپنی اینول ڈنر' },
    { id: 'student_party', en: 'Welcome / Farewell', ur: 'ویلکم / فیئر ویل' },
    { id: 'hi_tea', en: 'Hi-Tea Special', ur: 'ہائی-ٹی پارٹی' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E7DFD5] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1C1917] text-white border-b border-[#332D29]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#B48C46]/20 border border-[#B48C46]/50 flex items-center justify-center text-[#DFC89B]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} font-bold text-lg sm:text-xl text-white`}>
                {step === 4 
                  ? (isUrdu ? 'درخواست کامیابی سے موصول ہوگئی' : 'Inquiry Confirmed')
                  : (isUrdu ? 'دستیابی چیک کریں اور وزٹ بک کریں' : 'Check Availability & Schedule Visit')}
              </h3>
              <p className="text-[11px] text-[#DFC89B]">
                {isUrdu ? 'رائل پیلس بینکوئٹس اینڈ مارکی، لاہور' : 'Royal Palace Banquets & Marquee, Lahore'}
              </p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (steps 1-3) */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2 bg-[#F5EFEB] border-b border-[#E7DFD5]">
            <div className={`flex items-center justify-between text-xs font-semibold text-[#78716C] mb-2 ${isUrdu ? 'font-urdu' : ''}`}>
              <span className={step >= 1 ? 'text-[#9C7336]' : ''}>{isUrdu ? '1. تقریب کی تفصیل' : '1. Event Details'}</span>
              <span className={step >= 2 ? 'text-[#9C7336]' : ''}>{isUrdu ? '2. ہال اور مینو' : '2. Hall & Menu'}</span>
              <span className={step >= 3 ? 'text-[#9C7336]' : ''}>{isUrdu ? '3. وزٹ اور رابطہ' : '3. Visit & Contact'}</span>
            </div>
            <div className="w-full bg-[#E7DFD5] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#B48C46] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: EVENT DETAILS */}
        {step === 1 && (
          <div className="p-6 space-y-5">
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-2 ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? 'تقریب کی نوعیت (ایونٹ ٹائپ)' : 'Event Type (Weddings & Multi-Occasions)'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {eventTypesList.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEventType(item.id)}
                    className={`py-2 px-2.5 text-xs font-medium rounded-lg border text-center transition-all ${
                      eventType === item.id
                        ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                        : 'bg-white text-[#44403C] border-[#E7DFD5] hover:border-[#B48C46]/60'
                    }`}
                  >
                    <span className={isUrdu ? 'font-urdu' : ''}>{isUrdu ? item.ur : item.en}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'پسندیدہ تاریخ' : 'Preferred Event Date'}
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD5] rounded-lg text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B48C46]"
                />
                {errors.eventDate && (
                  <p className="text-red-600 text-xs mt-1">{errors.eventDate}</p>
                )}
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1.5 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'شفٹ کے اوقات' : 'Shift Timing (Punjab Compliance)'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTimeSlot('afternoon')}
                    className={`p-2 rounded-lg border text-xs font-medium text-center transition-all ${
                      timeSlot === 'afternoon'
                        ? 'bg-[#1C1917] text-white border-[#1C1917]'
                        : 'bg-white text-[#44403C] border-[#E7DFD5] hover:border-[#B48C46]/50'
                    }`}
                  >
                    <p className="font-bold">{isUrdu ? 'دوپہر (1 تا 4 بجے)' : 'Afternoon'}</p>
                    <p className="text-[10px] text-stone-400">1:00 PM – 4:00 PM</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeSlot('evening')}
                    className={`p-2 rounded-lg border text-xs font-medium text-center transition-all ${
                      timeSlot === 'evening'
                        ? 'bg-[#1C1917] text-white border-[#1C1917]'
                        : 'bg-white text-[#44403C] border-[#E7DFD5] hover:border-[#B48C46]/50'
                    }`}
                  >
                    <p className="font-bold">{isUrdu ? 'شام (7:30 تا 10:30)' : 'Evening'}</p>
                    <p className="text-[10px] text-stone-400">7:30 PM – 10:30 PM</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Guest Counting starts strictly from 0 */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className={`text-xs font-bold uppercase tracking-wider text-[#44403C] ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'متوقع مہمانوں کی تعداد (0 سے شروع)' : 'Expected Guests (Starts from 0)'}
                </label>
                <span className="text-sm font-bold font-mono text-[#9C7336]">
                  {guestCount} {isUrdu ? 'مہمان' : 'Guests'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1500"
                step="10"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#B48C46] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>0</span>
                <span>100 (Small)</span>
                <span>500 (Standard)</span>
                <span>1,500 (Max)</span>
              </div>
              {errors.guestCount && (
                <p className="text-red-600 text-xs mt-1">{errors.guestCount}</p>
              )}
            </div>

            <div className="pt-3 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="luxury-btn-gold px-6 py-2.5 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-sm transition-all"
              >
                <span className={isUrdu ? 'font-urdu font-bold' : ''}>{isUrdu ? 'اگلا مرحلہ: ہال اور مینو' : 'Continue to Hall & Menu'}</span>
                <ArrowRight className="w-4 h-4 text-[#DFC89B]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: HALL & MENU */}
        {step === 2 && (
          <div className="p-6 space-y-5">
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-2 ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? 'ہال کا انتخاب کریں' : 'Choose Hall / Event Space'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VENUES.map(venue => (
                  <button
                    key={venue.id}
                    type="button"
                    onClick={() => setSelectedVenueId(venue.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedVenueId === venue.id
                        ? 'bg-[#1C1917] text-white border-[#1C1917] ring-2 ring-[#B48C46]/50'
                        : 'bg-white text-[#44403C] border-[#E7DFD5] hover:border-[#B48C46]/50'
                    }`}
                  >
                    <p className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-sm font-bold truncate`}>{venue.name}</p>
                    <p className={`text-[11px] mt-1 ${selectedVenueId === venue.id ? 'text-[#DFC89B]' : 'text-[#78716C]'}`}>
                      {venue.capacityMin} – {venue.capacityMax} Guests
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-2 ${isUrdu ? 'font-urdu' : ''}`}>
                {isUrdu ? 'کیٹرنگ مینو پیکج' : 'Select Catering Package Tier'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACKAGES.map(pkg => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPackageId === pkg.id
                        ? 'bg-[#F5EFEB] border-[#B48C46] ring-1 ring-[#B48C46]'
                        : 'bg-white border-[#E7DFD5] hover:border-[#B48C46]/40'
                    }`}
                  >
                    <span className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} font-bold text-sm text-[#1C1917] block`}>{pkg.name}</span>
                    <p className="text-base font-bold font-mono text-[#9C7336] mt-1">
                      Rs. {pkg.pricePerPersonPkr.toLocaleString()}
                      <span className="text-[11px] font-normal text-stone-500"> / head</span>
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Live estimated cost */}
            <div className="p-3.5 bg-[#F5EFEB] rounded-xl border border-[#E7DFD5] flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-[#78716C]">{isUrdu ? 'متوقع کل بجٹ:' : 'Estimated Budget:'}</p>
                <p className="text-xs text-stone-500">{guestCount} {isUrdu ? 'مہمان' : 'Guests'} × {selectedPkg?.name}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold font-mono text-[#1C1917]">
                  {guestCount === 0 ? 'Rs. 0' : formatPricePkr(estimatedCost)}
                </span>
                <span className="block text-[10px] text-stone-500">+ Taxes & Hall Utility</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-medium text-[#78716C] hover:text-[#1C1917] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'پیچھے' : 'Back'}</span>
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="luxury-btn-gold px-6 py-2.5 bg-[#1C1917] hover:bg-[#2A2421] text-white text-xs font-semibold uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-sm transition-all"
              >
                <span className={isUrdu ? 'font-urdu font-bold' : ''}>{isUrdu ? 'اگلا مرحلہ: رابطہ اور وزٹ' : 'Continue to Visit & Contact'}</span>
                <ArrowRight className="w-4 h-4 text-[#DFC89B]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT & VISIT */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'مکمل نام *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Malik Tariq / Dr. Usman"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD5] rounded-lg text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B48C46]"
                />
                {errors.customerName && (
                  <p className="text-red-600 text-xs mt-1">{errors.customerName}</p>
                )}
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider text-[#44403C] mb-1 ${isUrdu ? 'font-urdu' : ''}`}>
                  {isUrdu ? 'واٹس ایپ فون نمبر *' : 'WhatsApp Phone Number *'}
                </label>
                <input
                  type="tel"
                  placeholder="0300 8452199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD5] rounded-lg text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B48C46]"
                />
                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Visit Walkthrough */}
            <div className="p-4 bg-[#F5EFEB] rounded-xl border border-[#E7DFD5] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider text-[#1C1917] block ${isUrdu ? 'font-urdu' : ''}`}>
                    {isUrdu ? 'ہال کا فیملی وزٹ شیڈول کریں' : 'Schedule Physical Venue Walkthrough'}
                  </span>
                  <span className={`text-[11px] text-stone-500 ${isUrdu ? 'font-urdu' : ''}`}>
                    {isUrdu ? 'اپنے خاندان کے ہمراہ فانوس، اسٹیج اور ڈریسنگ رومز کا معائنہ کریں۔' : 'Visit with your family to inspect chandeliers and stage.'}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={visitRequested}
                  onChange={(e) => setVisitRequested(e.target.checked)}
                  className="w-4 h-4 accent-[#B48C46] rounded"
                />
              </div>

              {visitRequested && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#E7DFD5]">
                  <div>
                    <label className={`block text-[11px] font-semibold text-[#44403C] mb-1 ${isUrdu ? 'font-urdu' : ''}`}>
                      {isUrdu ? 'وزٹ کی تاریخ' : 'Preferred Visit Date'}
                    </label>
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 bg-white border border-[#E7DFD5] rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className={`block text-[11px] font-semibold text-[#44403C] mb-1 ${isUrdu ? 'font-urdu' : ''}`}>
                      {isUrdu ? 'وقت کا انتخاب' : 'Preferred Time'}
                    </label>
                    <select
                      value={visitTime}
                      onChange={(e) => setVisitTime(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E7DFD5] rounded-lg text-xs"
                    >
                      <option value="12:00 PM">12:00 PM (Noon)</option>
                      <option value="03:00 PM">03:00 PM (Afternoon)</option>
                      <option value="04:30 PM">04:30 PM (Late Afternoon)</option>
                      <option value="06:00 PM">06:00 PM (Evening)</option>
                      <option value="07:30 PM">07:30 PM (Night Lighting)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-medium text-[#78716C] hover:text-[#1C1917] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'پیچھے' : 'Back'}</span>
              </button>
              <button
                type="submit"
                className="luxury-btn-gold px-7 py-3 bg-[#B48C46] hover:bg-[#9C7336] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all active:scale-95"
              >
                <span className={isUrdu ? 'font-urdu' : ''}>{isUrdu ? 'درخواست جمع کروائیں' : 'Submit Inquiry & Request Visit'}</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: CONFIRMATION */}
        {step === 4 && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-50">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#B48C46] font-bold">
                {isUrdu ? 'درخواست رجسٹر ہوگئی' : 'Inquiry Received'}
              </span>
              <h4 className={`${isUrdu ? 'font-urdu' : 'font-cinzel'} text-2xl font-bold text-[#1C1917] mt-1`}>
                {isUrdu ? `شکریہ، ${customerName} صاحب!` : `Thank you, ${customerName}!`}
              </h4>
              <p className="text-xs text-stone-600 max-w-md mx-auto mt-2">
                {isUrdu ? 'آپ کا ریفرنس نمبر:' : 'Your wedding inquiry has been registered with reference ID:'}
              </p>
              <div className="mt-2 inline-block px-4 py-1.5 bg-[#F5EFEB] rounded-md border border-[#E7DFD5] font-mono font-bold text-sm text-[#1C1917]">
                {submittedInquiryId}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>{isUrdu ? 'واٹس ایپ پر اوپن کریں' : 'Open in WhatsApp'}</span>
              </a>

              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 bg-[#1C1917] hover:bg-[#2A2421] text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-all"
              >
                {isUrdu ? 'مکمل' : 'Done'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

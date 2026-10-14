export type Language = 'en' | 'ur';

export interface Translations {
  brandName: string;
  brandSubtitle: string;
  nav: {
    venues: string;
    services: string;
    packages: string;
    catering: string;
    virtualTour: string;
    gallery: string;
    about: string;
    location: string;
    inquireBtn: string;
    staffPortal: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    scheduleVisit: string;
    whatsAppInquiry: string;
    exploreSpaces: string;
    stats: {
      capacity: string;
      capacitySub: string;
      events: string;
      eventsSub: string;
      guestsServed: string;
      guestsSub: string;
      power: string;
      powerSub: string;
    };
  };
  tour360: {
    tag: string;
    title: string;
    subtitle: string;
    dragHelp: string;
    switchHall: string;
    resetView: string;
    zoomIn: string;
    zoomOut: string;
    currentHall: string;
    ballroom: string;
    marquee: string;
    lawn: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    catFamily: string;
    catCorporate: string;
    catEducational: string;
    catSpecialPackages: string;
    items: {
      birthdays: {
        title: string;
        desc: string;
        features: string[];
      };
      anniversaries: {
        title: string;
        desc: string;
        features: string[];
      };
      aqeeqa: {
        title: string;
        desc: string;
        features: string[];
      };
      milad: {
        title: string;
        desc: string;
        features: string[];
      };
      conferences: {
        title: string;
        desc: string;
        features: string[];
      };
      annualDinners: {
        title: string;
        desc: string;
        features: string[];
      };
      productLaunches: {
        title: string;
        desc: string;
        features: string[];
      };
      studentParties: {
        title: string;
        desc: string;
        features: string[];
      };
      convocations: {
        title: string;
        desc: string;
        features: string[];
      };
      hiTeaPkg: {
        title: string;
        desc: string;
        features: string[];
      };
      halfHallPkg: {
        title: string;
        desc: string;
        features: string[];
      };
      hourlyPkg: {
        title: string;
        desc: string;
        features: string[];
      };
    };
  };
  venues: {
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterBallroom: string;
    filterMarquee: string;
    filterLawn: string;
    guests: string;
    coveredArea: string;
    baseRate: string;
    viewSpecs: string;
    inquireHall: string;
  };
  packages: {
    tag: string;
    title: string;
    subtitle: string;
    calculatorTitle: string;
    calculatorSub: string;
    guestSliderLabel: string;
    guestsCount: string;
    perHead: string;
    minGuests: string;
    requestQuote: string;
    popularTag: string;
    estimatedCost: string;
  };
  catering: {
    tag: string;
    title: string;
    subtitle: string;
    pureDesiGhee: string;
    liveBBQ: string;
    liveBBQDesc: string;
    degiRecipes: string;
    degiRecipesDesc: string;
    liveTandoor: string;
    liveTandoorDesc: string;
    kashmiriChai: string;
    kashmiriChaiDesc: string;
  };
  about: {
    tag: string;
    title: string;
    story1: string;
    story2: string;
    ratingText: string;
    testimonialsTitle: string;
  };
  location: {
    tag: string;
    title: string;
    subtitle: string;
    proximity: string;
    dhaTime: string;
    ringRoadTime: string;
    airportTime: string;
    visitingOffice: string;
    hours: string;
    googleMapsBtn: string;
  };
  footer: {
    bannerTitle: string;
    bannerSub: string;
    bookVisit: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    brandName: 'Royal Palace',
    brandSubtitle: 'Banquets & Marquee · Lahore',
    nav: {
      venues: 'Halls & Spaces',
      services: 'Event Services',
      packages: 'Packages & Menus',
      catering: 'Culinary Catering',
      virtualTour: '360° Virtual Tour',
      gallery: 'Gallery',
      about: 'About Us',
      location: 'Location',
      inquireBtn: 'Schedule Visit',
      staffPortal: 'Staff Portal'
    },
    hero: {
      kicker: 'Main Boulevard Lahore · Est. 2014 · Premier Event Destination',
      title: 'Where Lahore Celebrates Grand Weddings & Elite Gatherings',
      subtitle: 'From royal Barat & Walima celebrations to prestigious corporate conferences, birthday galas, and festive Milad gatherings across three signature architectural spaces.',
      scheduleVisit: 'Schedule Walkthrough & Inquire',
      whatsAppInquiry: 'WhatsApp Inquiry',
      exploreSpaces: 'Explore Halls & Capacity',
      stats: {
        capacity: '1,500',
        capacitySub: 'Maximum Attendee Capacity',
        events: '1,800+',
        eventsSub: 'Successful Events Hosted',
        guestsServed: '450,000+',
        guestsSub: 'Distinguished Guests Served',
        power: '100%',
        powerSub: 'Dual 500kVA Generator Power'
      }
    },
    tour360: {
      tag: 'Interactive Experience',
      title: '360° Virtual Hall Walkthrough',
      subtitle: 'Click and drag with your mouse or finger to pan around the hall. Experience the crystal chandeliers, stage architecture, and ambient seating from every angle.',
      dragHelp: 'Drag to look around · Scroll to zoom',
      switchHall: 'Select Hall Space',
      resetView: 'Reset Angle',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      currentHall: 'Current Space',
      ballroom: 'The Grand Kohinoor Ballroom',
      marquee: 'The Imperial Glass Marquee',
      lawn: 'The Royal Emerald Lawn'
    },
    services: {
      tag: 'Comprehensive Event Solutions',
      title: 'Versatile Spaces for Every Significant Occasion',
      subtitle: 'Beyond royal weddings, Royal Palace offers dedicated infrastructure for family celebrations, high-profile corporate conventions, and academic milestones.',
      catFamily: 'Family & Social Events',
      catCorporate: 'Corporate & Business Events',
      catEducational: 'Educational & University',
      catSpecialPackages: 'Non-Wedding Special Packages',
      items: {
        birthdays: {
          title: 'Custom Themed Birthday Parties',
          desc: 'Immersive themes for kids (Marvel, Disney, Barbie), dynamic balloon architecture, cake-cutting stage setup, and delicious kid-friendly menus.',
          features: ['Marvel / Disney / Barbie Customized Themes', 'Thematic Balloon Arches & Cake Cutting Stage', 'Kids Feast: Nuggets, Fries, Mini Burgers & Pizza Slices', 'Dedicated Magic Show & Animation Corner']
        },
        anniversaries: {
          title: 'Anniversaries & Romantic Engagements',
          desc: 'Refined romantic ambience, customized ring-exchange floral stage, soft acoustic background music, and bespoke candlelight dining.',
          features: ['Floral Ring-Exchange Pedestals', 'Fairy Light & Candlelight Table Setups', 'Acoustic Sound System for Romantic Melodies', 'Customized Gourmet Three-Course Dining']
        },
        aqeeqa: {
          title: 'Aqeeqa Ceremonies & Baby Showers',
          desc: 'Joyous pastel theme decor (powder blue or blush pink) with specialized family hi-tea buffets or executive lunch/dinner spreads.',
          features: ['Custom Pastel Blue & Pink Stage Decor', 'Generous Family Hi-Tea & Live Snack Counters', 'Segregated Private Dining Options', 'Complimentary Baby Nursery Suite']
        },
        milad: {
          title: 'Milad-un-Nabi & Dars Gatherings',
          desc: 'Spiritual, dignified arrangements for large religious gatherings with strict parda (segregation) partition, plush carpet floor seating, and clarity audio.',
          features: ['Complete Parda Partition & Segregated Entrances', 'Premium Clean Carpeted Floor Seating & Chairs', 'Distortion-Free Acoustic Audio & Cordless Mics', 'Tabarruk / Niaz Distribution Buffet Setup']
        },
        conferences: {
          title: 'Conferences & Business Seminars',
          desc: 'High-tech conference facilities featuring giant SMD display screens, multimedia projection, crystal clear conference sound, and flexible seating.',
          features: ['High-Resolution Giant SMD Video Wall Displays', 'Laser Multimedia Projectors & Cordless Lapel Mics', 'U-Shape, Classroom & Theater Seating Configurations', 'Executive High-Speed Wi-Fi & Stationery Service']
        },
        annualDinners: {
          title: 'Corporate Annual Dinners & Award Galas',
          desc: 'Celebrate company achievements with executive red carpet reception, grand recognition stage, intelligent stage lighting, and a lavish corporate buffet.',
          features: ['VIP Red Carpet Entrance with Brand Step-and-Repeat', 'Expansive Award Presentation Stage with Dynamic Backdrops', 'Moving Spotlights & Theatrical Sound Operator', 'Multi-Course Gourmet Executive Banquet Buffet']
        },
        productLaunches: {
          title: 'Product Launches & Brand Exhibitions',
          desc: 'Spacious floor layouts to accommodate vehicle displays, commercial exhibition stalls, and custom branded spotlights.',
          features: ['Ample Floor Space for Display Stalls & Demonstration', 'Vehicle & Machinery Direct Hall Access Roll-In', 'Customizable Spot & Accent Illumination', 'Press Conference & Media Holding Rooms']
        },
        studentParties: {
          title: 'Welcome & Farewell College Parties',
          desc: 'High-energy college and university student celebrations with club-grade DJ sound setups, illuminated dance floors, and student budget packages.',
          features: ['Professional DJ Console & Concert Sound Systems', 'Illuminated Acrylic Dance Floor & Strobe Lights', 'Student-Friendly Budget Per-Head Menus', 'Secured Gates & Private Venue Exclusivity']
        },
        convocations: {
          title: 'Convocations & Degree Ceremonies',
          desc: 'Dignified academic seating for graduating students, faculty robes procession stage, and guest auditorium setup.',
          features: ['Grand Stage for Degree & Medal Confertals', 'Tiered Auditorium Seating for 1,000+ Guests', 'Photobooth Backdrops with University Crests', 'Faculty VIP Lounge & Tea Service']
        },
        hiTeaPkg: {
          title: 'Signature Hi-Tea Buffet Packages',
          desc: 'An affordable, elegant afternoon dining option for social clubs, dars, and family get-togethers without a full dinner cost.',
          features: ['Freshly Brewed Doodh Patti, Green Tea & Espresso Coffee', 'Chicken Sandwiches, Vegetable Patties & Spring Rolls', 'Mini Pizza Slices, Chicken Drumsticks & Dahi Bhallay', 'Assorted Pastries, Hot Gulab Jamun & Cream Puffs']
        },
        halfHallPkg: {
          title: 'Half-Hall Acoustic Partition Booking',
          desc: 'Host smaller intimate gatherings (50 to 120 guests) inside our luxury halls at significantly reduced venue rental rates.',
          features: ['Heavy Acoustic Sound-Insulated Modular Partition', 'Private Dedicated Entrance & Valet Access', 'Dedicated Restrooms & Private Food Station', 'Cost-Effective Luxury Setting for Compact Events']
        },
        hourlyPkg: {
          title: 'Hourly Basis Room Rentals',
          desc: 'Convenient 3 to 4-hour meeting and seminar rentals for corporate teams seeking a prestigious meeting venue without full-day costs.',
          features: ['Flexible 3 to 4-Hour Time Slot Rentals', 'Projector & Sound Equipment Included', 'Continuous Mineral Water, Tea & Biscuit Service', 'Quick Turnaround & Zero Setup Hassle']
        }
      }
    },
    venues: {
      tag: 'Architectural Excellence',
      title: 'Three Distinct Hall Spaces',
      subtitle: 'From grand crystal chandeliers to transparent modern glass pavilions and starlit Mughal gardens.',
      filterAll: 'All Venues',
      filterBallroom: 'The Grand Ballroom',
      filterMarquee: 'Glass Marquee',
      filterLawn: 'Mughal Lawn',
      guests: 'Guests',
      coveredArea: 'Covered Area',
      baseRate: 'Hall Base Rate',
      viewSpecs: 'View Full Specs',
      inquireHall: 'Inquire For Space'
    },
    packages: {
      tag: 'Catering Inclusions',
      title: 'Transparent Per-Head Pricing',
      subtitle: 'Slide the guest counter starting from zero to dynamically see estimated budget requirements in PKR.',
      calculatorTitle: 'Guest Count & Budget Calculator',
      calculatorSub: 'Select exact attendees to calculate banquet estimates',
      guestSliderLabel: 'Attendee Guests:',
      guestsCount: 'Guests',
      perHead: 'per head',
      minGuests: 'Min Requirement',
      requestQuote: 'Request Package Quotation',
      popularTag: 'Most Popular',
      estimatedCost: 'Estimated Banquet Cost:'
    },
    catering: {
      tag: 'Master Ustads',
      title: 'Authentic Lahori Wedding Feasts',
      subtitle: 'Prepared on-site in temperature-controlled kitchens using pure desi ghee and hand-pounded spices.',
      pureDesiGhee: '100% Pure Desi Ghee & Fresh Meat',
      liveBBQ: 'Charcoal Live BBQ Pavilion',
      liveBBQDesc: 'Mutton seekh kababs and chicken boti grilled over natural coals in front of guests.',
      degiRecipes: 'Slow Dum Degi Mughlai',
      degiRecipesDesc: 'Authentic mutton biryani, degi pulao, and badami qorma simmered in traditional copper degs.',
      liveTandoor: 'Live Clay Tandoor Breads',
      liveTandoorDesc: 'Fresh roghani, garlic, and kalongi naans baked to order.',
      kashmiriChai: 'Kashmiri Pink Tea & Live Jalebi',
      kashmiriChaiDesc: 'Fragrant pink tea with crushed almonds and crispy hot jalebis.'
    },
    about: {
      tag: 'Hospitality Heritage',
      title: 'Setting the Benchmark for Lahore Hospitality',
      story1: 'Royal Palace was established with a singular devotion: to give Lahore an authentic palace-scale destination combining majestic architecture with uncompromised hospitality.',
      story2: 'With over a decade of excellence on Main Boulevard, our dedicated captains, chefs, and technicians ensure your family experiences effortless perfection.',
      ratingText: 'Rated 4.9/5 by 1,800+ Lahore Host Families',
      testimonialsTitle: 'Verified Host Family Reviews'
    },
    location: {
      tag: 'Prime Location',
      title: 'Easily Accessible on Main Boulevard, Lahore',
      subtitle: 'Direct dual-carriageway connectivity with ample motorcade approach from all major sectors.',
      proximity: 'Transit Proximity',
      dhaTime: 'DHA Phase 5 & Commercial — 4 Mins',
      ringRoadTime: 'Lahore Ring Road Interchange — 6 Mins',
      airportTime: 'Allama Iqbal Airport — 14 Mins',
      visitingOffice: 'Walkthrough Office Hours',
      hours: 'Open 7 Days: 11:00 AM – 10:00 PM',
      googleMapsBtn: 'Open in Google Maps'
    },
    footer: {
      bannerTitle: 'Ready to Plan Your Signature Event?',
      bannerSub: 'Schedule an executive walkthrough or chat with our event director directly on WhatsApp.',
      bookVisit: 'Schedule Venue Walkthrough',
      copyright: '© Royal Palace Banquets & Marquee, Lahore. All rights reserved.'
    }
  },
  ur: {
    brandName: 'رائل پیلس',
    brandSubtitle: 'بینکوئٹس اینڈ مارکی · لاہور',
    nav: {
      venues: 'ہالز اور جگہیں',
      services: 'خصوصی تقریبات',
      packages: 'پیکجز اور مینو',
      catering: 'شاہی کیٹرنگ',
      virtualTour: '360° ورچوئل ٹور',
      gallery: 'تصاویر گیلری',
      about: 'ہمارے بارے میں',
      location: 'راستہ اور لوکیشن',
      inquireBtn: 'ہال وزٹ بک کریں',
      staffPortal: 'اسٹاف پورٹل'
    },
    hero: {
      kicker: 'مین بلیوارڈ لاہور · قائم شدہ 2014 · لاہور کا سب سے باوقار ایونٹ وینیو',
      title: 'جہاں لاہور شاندار شادیوں اور پروقار محفلوں کا جشن مناتا ہے',
      subtitle: 'شاہی بارات و ولیمہ، دلکش مہندی، اور نکاح سے لے کر کارپوریٹ کانفرنسز، سالگرہ کی تقریبات، اور محافلِ میلاد کے لیے تین لاجواب ہالز۔',
      scheduleVisit: 'ہال کا وزٹ شیڈول کریں',
      whatsAppInquiry: 'واٹس ایپ پر رابطہ',
      exploreSpaces: 'ہالز اور گنجائش دیکھیں',
      stats: {
        capacity: '1,500',
        capacitySub: 'مہمانوں کی زیادہ سے زیادہ گنجائش',
        events: '1,800+',
        eventsSub: 'کامیاب تقریبات کا انعقاد',
        guestsServed: '450,000+',
        guestsSub: 'مہمانوں کی شاہی میزبانی',
        power: '100%',
        powerSub: 'مسلسل ڈوئل کیٹرپلر جنریٹر پاور'
      }
    },
    tour360: {
      tag: 'جدید ورچوئل تجربہ',
      title: '360 ڈگری ورچوئل ہال ٹور',
      subtitle: 'ماؤس یا انگلی سے سکرین گھما کر ہال کے اندر کا 360 ڈگری منظر دیکھیں۔ خوبصورت فانوس، اسٹیج، اور ڈائننگ سیٹ اپ کا مکمل معائنہ گھر بیٹھے کریں۔',
      dragHelp: 'ماؤس یا انگلی سے گھمائیں · زوم ان/آؤٹ کریں',
      switchHall: 'ہال تبدیل کریں',
      resetView: 'نارمل ویو',
      zoomIn: 'بڑا کریں (+)',
      zoomOut: 'چھوٹا کریں (-)',
      currentHall: 'منتخب ہال',
      ballroom: 'دی گرینڈ کوہ نور بال روم',
      marquee: 'دی امپیریل گلاس مارکی',
      lawn: 'دی رائل ایمرلڈ لان'
    },
    services: {
      tag: 'ہر تقریب کے لیے مکمل خدمات',
      title: 'ہر اہم موقع کے لیے باوقار اور پرسکون انتظامات',
      subtitle: 'شادیوں کے علاوہ رائل پیلس میں سالگرہ، فیملی اینیورسری، کارپوریٹ کانفرنسز، اور ایجوکیشنل تقریبات کے لیے بھی اعلیٰ ترین سہولیات دستیاب ہیں۔',
      catFamily: 'خاندانی اور سوشل تقریبات',
      catCorporate: 'کارپوریٹ اور بزنس ایونٹس',
      catEducational: 'تعلیمی اور یونیورسٹیز',
      catSpecialPackages: 'نان-ویڈنگ خصوصی پیکجز',
      items: {
        birthdays: {
          title: 'برتھ ڈے پارٹیز (سالگرہ کی تقریبات)',
          desc: 'بچوں کے لیے پسندیدہ تھیمز (ڈزنی، مارول، یا باربی)، غباروں کی سجاوٹ، کیک کٹنگ اسٹیج سیٹ اپ، اور بچوں کا پسندیدہ مینو۔',
          features: ['مارول، ڈزنی اور باربی کسٹمائزڈ تھیم ڈیکور', 'غباروں کی محراب اور شاندار کیک کٹنگ اسٹیج', 'بچوں کا من پسند مینو: نگٹس، فرائز، برگر، پیزا', 'میجک شو اور اینیمیشن کارنر کا خصوصی انتظام']
        },
        anniversaries: {
          title: 'شادی کی سالگرہ اور منگنی (اینگیجمنٹ)',
          desc: 'رومانٹک اور نفیس ڈیکور، انگوٹھی پہنانے کے لیے خوبصورت اسٹیج، ہلکی مدہم موسیقی اور شمعوں کی روشنی میں ڈنر۔',
          features: ['رنگ ایکسچینج کے لیے پھولوں کا خوبصورت اسٹیج', 'فیری لائٹس اور کینڈل لائٹ ٹیبل ڈیکوریشن', 'ہلکی بیک گراؤنڈ میوزک کے لیے ساؤنڈ سسٹم', 'تین کورسز پر مشتمل پرسنلائزڈ شاہی ڈنر']
        },
        aqeeqa: {
          title: 'عقیقہ اور بیبی شاور تقریبات',
          desc: 'نومولود کی خوشی کے لیے مخصوص تھیم ڈیکور (بلیو یا پنک) اور معزز مہمانوں کے لیے ہائی-ٹی یا لنچ/ڈنر مینو۔',
          features: ['خوبصورت بیبی پنک یا رائل بلیو تھیم ڈیکوریشن', 'معزز مہمانوں کے لیے ہائی-ٹی اور لائیو اسنیکس', 'خواتین کے لیے الگ اور محفوظ پردے کا انتظام', 'نومولود اور والدہ کے لیے آرام دہ پرائیویٹ روم']
        },
        milad: {
          title: 'محافلِ میلاد النبیؐ اور درسِ قرآن',
          desc: 'مکمل پردے (سیگریگیشن) کے ساتھ قالین بچھا کر بیٹھنے کا پاکیزہ اور پرسکون ماحول اور آواز کا شاندار نظام۔',
          features: ['مکمل پردے دار سیگریگیشن اور الگ راستے', 'نہایت صاف ستھرا قالین اور بیٹھنے کا خصوصی انتظام', 'صاف اور واضح آواز کے لیے ایکوسٹک ساؤنڈ و مائیکس', 'تبرک و نیاز کی باوقار تقسیم کے لیے خصوصی کاؤنٹرز']
        },
        conferences: {
          title: 'کانفرنسز اور بزنس سیمینارز',
          desc: 'بڑی SMD اسکرینز، ملٹی میڈیا پروجیکٹرز، ہائی کوالٹی ساؤنڈ سسٹم، اور U-شیپ یا تھیٹر اسٹائل بیٹھنے کا انتظام۔',
          features: ['ہائی ڈیفینیشن بڑی SMD اسکرینز اور ڈسپلے', 'لیزر ملٹی میڈیا پروجیکٹرز اور کارڈلیس مائیکروفونز', 'یو-شیپ، کلاس روم اور تھیٹر اسٹائل سیٹنگ ارینجمنٹ', 'ہائی اسپیڈ وائی فائی اور مکمل اسٹیشنری کا انتظام']
        },
        annualDinners: {
          title: 'کمپنی اینول ڈنرز اور ایوارڈ تقریبات',
          desc: 'ملازمین کے لیے ریڈ کارپٹ انٹری، میگا اسٹیج ڈیزائن، پیشہ ورانہ لائٹنگ، اور پرتعیش بفے ڈنر کی خدمات۔',
          features: ['کمپنی برانڈنگ کے ساتھ پروقار ریڈ کارپٹ ویلکم', 'ایوارڈ تقسیم کے لیے میگا ڈائنامک بیک ڈراپ اسٹیج', 'پیشہ ورانہ موونگ اسپاٹ لائٹس اور ساؤنڈ آپریٹر', 'بزنس ایگزیکٹوز کے لیے لذیذ ملٹی کورس بفے ڈنر']
        },
        productLaunches: {
          title: 'پروڈکٹ لانچز اور نمائشی اسٹالز',
          desc: 'گاڑیوں اور مصنوعات کو ڈسپلے کرنے کے لیے کشادہ ہال، اسٹالز لگانے کی وسیع جگہ، اور فلیکسیبل لائٹنگ سیٹ اپ۔',
          features: ['مصنوعات کی نمائش کے لیے کشادہ فلور اسپیس', 'گاڑیوں کو ہال کے اندر لانے کے لیے وسیع ریمپ', 'پروڈکٹ فوکس کے لیے خصوصی ایڈجسٹ ایبل لائٹنگ', 'پریس کانفرنس اور میڈیا کوریج کے لیے الگ لاؤنج']
        },
        studentParties: {
          title: 'ویلکم اور فیئر ویل سٹوڈنٹ پارٹیز',
          desc: 'کالجز اور یونیورسٹیز کے طلباء کے لیے ڈی جے ساؤنڈ سسٹمز، ڈانس فلور، اور سٹوڈنٹ فرینڈلی بجٹ پیکجز۔',
          features: ['پروفیشنل ڈی جے کونسول اور فل باس ساؤنڈ سسٹم', 'روشن ایکریلک ڈانس فلور اور اسٹروب لائٹس', 'طلباء کے لیے سستے اور مناسب پرسن پیکجز', 'مکمل سیکیورٹی اور پرائیویٹ ہال ایکسکلوسیوٹی']
        },
        convocations: {
          title: 'انووکیشن اور تقسیمِ اسناد کی تقریبات',
          desc: 'ڈگری تقسیم کے لیے وسیع اسٹیج، اساتذہ اور طلباء کے لیے منظم آڈیٹوریم سیٹنگ کا انتظام۔',
          features: ['ڈگری اور گولڈ میڈل تقسیم کے لیے شاندار اسٹیج', 'ایک ہزار سے زائد شرکاء کے لیے پُرسکون نشستیں', 'یونیورسٹی کریسٹ کے ساتھ فوٹو شوٹ بیک ڈراپس', 'معزز مہمانانِ گرامی کے لیے وی آئی پی لاؤنج']
        },
        hiTeaPkg: {
          title: 'ہائی-ٹی (Hi-Tea) اسپیشل پیکجز',
          desc: 'کھانے کے بجائے شام کے وقت کے لیے لذیذ ہائی-ٹی مینو (چائے، کافی، سینڈوچ، پیٹیز، رول، میٹھا) جو نہایت مناسب قیمت پر ہے۔',
          features: ['تازہ تیار شدہ دودھ پتی، کشمیری چائے اور ایسپریسو کافی', 'چکن سینڈوچ، ویجیٹیبل پیٹیز اور خستہ اسپرنگ رولز', 'منی پیزا سلائسز، چکن ڈرم اسٹکس اور دہی بھلے', 'مختلف قسم کی پیسٹریز، گرم گلاب جامن اور کریم پفس']
        },
        halfHallPkg: {
          title: 'ہاف-ہال بکنگ (کم مہمانوں کے لیے)',
          desc: 'اگر مہمان کم ہوں (50 سے 120 لوگ)، تو ساؤنڈ پروف پارٹیشن لگا کر آدھا ہال کم ریٹ پر بک کریں۔',
          features: ['ساؤنڈ پروف ہیوی اِنسولیٹڈ ماڈیولر پارٹیشن', 'الگ پرائیویٹ داخلی راستہ اور ویلے پارکنگ', 'الگ واش رومز اور اپنا علیحدہ کھانا کاؤنٹر', 'کم خرچ میں فائیو اسٹار لگژری ہال کا ماحول']
        },
        hourlyPkg: {
          title: 'گھنٹوں کے حساب سے بکنگ (Hourly Booking)',
          desc: 'کارپوریٹ میٹنگز یا سیمینارز کے لیے پورے دن کے بجائے صرف 3 سے 4 گھنٹوں کے حساب سے مناسب کرایہ پر ہال۔',
          features: ['صرف 3 سے 4 گھنٹے کی فلیکسیبل بکنگ کی سہولت', 'پروجیکٹر اور ساؤنڈ سسٹم کرائے میں شامل', 'مسلسل منرل واٹر، چائے اور بسکٹس سروس', 'فوری ارینجمنٹ اور بغیر کسی پریشانی کے فراہمی']
        }
      }
    },
    venues: {
      tag: 'لاہور کے شاندار وینیوز',
      title: 'تین شاہی اور خوبصورت ہالز',
      subtitle: 'بلجیم کے کرسٹل فانوس والے شاندار بال روم سے لے کر ماڈرن گلاس مارکی اور مغل اسٹائل اوپن ایئر لان تک۔',
      filterAll: 'تمام ہالز',
      filterBallroom: 'گرینڈ بال روم',
      filterMarquee: 'گلاس مارکی',
      filterLawn: 'مغل لان',
      guests: 'مہمان',
      coveredArea: 'احاطہ رقبہ',
      baseRate: 'ہال کا ابتدائی کرایہ',
      viewSpecs: 'مکمل تفصیل اور نقشہ',
      inquireHall: 'اس ہال کی بکنگ'
    },
    packages: {
      tag: 'کیٹرنگ مینو پیکجز',
      title: 'شفاف فی کس (Per-Head) مینو ریٹس',
      subtitle: 'مہمانوں کی تعداد زیرو (0) سے شروع کر کے اپنی مرضی سے سلائیڈ کریں اور موقع پر کل متوقع بجٹ دیکھیں۔',
      calculatorTitle: 'مہمانوں کی تعداد اور بجٹ کیلکولیٹر',
      calculatorSub: 'صحیح تعداد چنیں اور فوری حساب کتاب دیکھیں',
      guestSliderLabel: 'متوقع مہمانوں کی تعداد:',
      guestsCount: 'مہمان',
      perHead: 'فی مہمان',
      minGuests: 'کم از کم تعداد',
      requestQuote: 'پیکج کوٹیشن حاصل کریں',
      popularTag: 'سب سے مقبول',
      estimatedCost: 'کل متوقع کیٹرنگ لاگت:'
    },
    catering: {
      tag: 'لاہور کے استاد باورچی',
      title: 'خالص دیسی گھی اور روایتی کھانوں کا ذائقہ',
      subtitle: 'ہر کھانا ہمارے ہائی جین سے مصدقہ کیچنز میں خالص اجزاء اور روایتی تانبے کی دیگوں میں تیار کیا جاتا ہے۔',
      pureDesiGhee: '100% خالص دیسی گھی اور تازہ گوشت',
      liveBBQ: 'کوئلوں پر تیار لائیو باربی کیو',
      liveBBQDesc: 'مہمانوں کے سامنے دہکتے کوئلوں پر مٹن سیخ کباب اور چکن ریشمی بوٹی کی لائیو تیاری۔',
      degiRecipes: 'دھیمی آنچ پر دم دی گئی دیگی مغلائی',
      degiRecipesDesc: 'اصیل مٹن دم بریانی، دیگی پلاؤ اور بادامی قورمہ تانبے کی روایتی دیگوں میں تیار۔',
      liveTandoor: 'مٹی کے تندور کی تازہ روغنی نان',
      liveTandoorDesc: 'گرم گرم روغنی، تل والے کلچے اور گارلک نان سیدھے دسترخوان پر۔',
      kashmiriChai: 'کشمیری گلابی چائے اور گرما گرم جلیبی',
      kashmiriChaiDesc: 'بادام پستے والی روایتی گلابی چائے اور کڑاہی سے سیدھی نکلتی خستہ جلیبی۔'
    },
    about: {
      tag: 'میزبانی کی تاریخ',
      title: 'لاہور کی میزبانی کا سب سے معتبر نام',
      story1: 'رائل پیلس بینکوئٹس اینڈ مارکی کا قیام اس عزم کے ساتھ عمل میں لایا گیا کہ لاہور کو ایک ایسا وینیو دیا جائے جہاں شاہی وقار اور بہترین مہمان نوازی کا ملاپ ہو۔',
      story2: 'مین بلیوارڈ پر ایک دہائی سے زائد عرصے سے ہمارے ماہر ایونٹ مینیجرز، شیفس اور ٹیکنیکل اسٹاف آپ کے ہر موقع کو یادگار بنانے کے لیے پرعزم ہیں۔',
      ratingText: 'لاہور کے 1,800 سے زائد خاندانوں کا 4.9/5 کا بھروسہ',
      testimonialsTitle: 'میزبان خاندانوں کے تاثرات'
    },
    location: {
      tag: 'مرکزی مقام',
      title: 'مین بلیوارڈ، لاہور پر آسان ترین رسائی',
      subtitle: 'ڈی ایچ اے فیز 5 اور رنگ روڈ سے چند منٹ کی دوری پر کشادہ اور کھلی سڑک پر واقع۔',
      proximity: 'فاصلہ اور ڈرائیو ٹائم',
      dhaTime: 'ڈی ایچ اے فیز 5 اور کمرشل ایریا — صرف 4 منٹ',
      ringRoadTime: 'لاہور رنگ روڈ انٹرچینج — صرف 6 منٹ',
      airportTime: 'علامہ اقبال انٹرنیشنل ایئرپورٹ — صرف 14 منٹ',
      visitingOffice: 'وینیو وزٹ کے اوقات',
      hours: 'ہفتے کے 7 دن کھلا ہے: صبح 11:00 سے رات 10:00 بجے تک',
      googleMapsBtn: 'گوگل میپس پر راستہ دیکھیں'
    },
    footer: {
      bannerTitle: 'کیا آپ اپنے ایونٹ کی بکنگ کے لیے تیار ہیں؟',
      bannerSub: 'آج ہی اپنے خاندان کے ہمراہ ہال کا معائنہ کریں یا واٹس ایپ پر بات چیت شروع کریں۔',
      bookVisit: 'ہال وزٹ کا وقت بک کریں',
      copyright: '© رائل پیلس بینکوئٹس اینڈ مارکی، لاہور۔ جملہ حقوق محفوظ ہیں۔'
    }
  }
};

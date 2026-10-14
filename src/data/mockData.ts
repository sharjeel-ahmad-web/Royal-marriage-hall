import { Venue, Package, Testimonial, FaqItem } from '../types';

export const VENUES: Venue[] = [
  {
    id: 'the-grand-kohinoor-ballroom',
    name: 'The Grand Kohinoor Ballroom',
    tagline: 'Majestic Crystal Chandelier Grandeur for Signature Barat & Walima',
    type: 'indoor',
    capacityMin: 500,
    capacityMax: 1500,
    areaSqFt: 22000,
    dimensions: '180ft x 122ft (26ft Ceiling Height)',
    startingPricePkr: 450000,
    description: 'Lahore’s definitive grand ballroom, featuring imported Belgian crystal chandeliers, polished Italian marble walkways, acoustically engineered interiors, and a palatial stage designed for royal wedding celebrations.',
    features: [
      '18 Handcrafted Belgian Crystal Chandeliers',
      'Dual Private Bridal & Groom Executive Suites with Ensuite Baths',
      'Integrated Bose Line-Array Sound & Architectural Spotlights',
      'Continuous 100% Dual CAT 500kVA Generator Backup',
      'Carrier Central HVAC with Precision Climate Control',
      'Dedicated VIP Entrance & 400+ Car Valet Drop-off'
    ],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
    ],
    idealFor: ['barat', 'walima', 'reception', 'corporate']
  },
  {
    id: 'the-imperial-glass-marquee',
    name: 'The Imperial Glass Marquee',
    tagline: 'Modern Architectural Transparency & Starlit Fairy Light Panorama',
    type: 'marquee',
    capacityMin: 350,
    capacityMax: 950,
    areaSqFt: 15500,
    dimensions: '150ft x 103ft (28ft Vaulted Glass Peak)',
    startingPricePkr: 380000,
    description: 'An ethereal European-inspired glass conservatory marquee surrounded by manicured flora. Boasting custom ceiling fairy light canopies, panoramic garden views, and dynamic lighting presets tailored for energetic Mehndi and chic Walima evenings.',
    features: [
      'Acoustically Insulated Double-Glazed Glass Walls',
      '360° Panoramic View of Manicured Mughal Lawns',
      'Suspended Fairy Light Starlit Ceiling Canopy',
      'Climate Controlled Industrial Floor Chillers & Heating',
      'Elevated Ramp for Dynamic Bridal & Groom Entries',
      'Separate Pre-Function Reception Lounge & Mocktail Bar'
    ],
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80'
    ],
    idealFor: ['mehndi', 'barat', 'walima', 'engagement']
  },
  {
    id: 'the-royal-emerald-lawn',
    name: 'The Royal Emerald Lawn',
    tagline: 'Mughal Stone Arches & Open-Air Gazebo Wedding Starlight',
    type: 'outdoor',
    capacityMin: 250,
    capacityMax: 650,
    areaSqFt: 18000,
    dimensions: '160ft x 112ft Natural Carpet Turf',
    startingPricePkr: 300000,
    description: 'A starlit garden sanctuary surrounded by hand-carved stone Mughal archways, illuminated water cascades, and whispering palms. The quintessential open-air setting for daytime Nikahs and breezy autumn-winter receptions.',
    features: [
      'Heritage Mughal Stone Gazebos & Water Jet Fountains',
      'Fresh Natural Turf with High-Drainage Sub-base',
      'Warm Vintage Edison Bulb & Fairy Lighting Matrix',
      'Covered Heated Buffet Arcade for Seamless Dining',
      'Romantic Pergola Entrance Walkway with Floral Drapery',
      'Private Powder Rooms & Family Holding Area'
    ],
    image: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80'
    ],
    idealFor: ['nikah', 'engagement', 'reception', 'mehndi']
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'pkg-silver',
    name: 'Silver Tradition',
    tier: 'Silver',
    pricePerPersonPkr: 2850,
    minGuests: 250,
    popular: false,
    description: 'A classic, balanced menu showcasing authentic Lahori wedding favorites prepared by master ustads.',
    courses: [
      {
        category: 'Rice & Biryani',
        items: ['Special Chicken Dum Biryani with Golden Potatoes', 'Steam Zeera Basmati Rice']
      },
      {
        category: 'Main Courses',
        items: ['Lahori Chicken Qorma / Chicken Karahi Desi Ghee', 'Traditional Palak Paneer / Daal Makhni']
      },
      {
        category: 'Live BBQ',
        items: ['Charcoal Grilled Chicken Seekh Kababs (2 pcs/guest)']
      },
      {
        category: 'Breads & Condiments',
        items: ['Fresh Roghani Naan from Live Tandoor', 'Sesame Kulcha', 'Zeera Raita & Fresh Mint Chutney', 'Traditional Kachumber Salad']
      },
      {
        category: 'Desserts & Beverages',
        items: ['Hot Gulab Jamun in Rose Syrup', 'Shahi Tukray with Rabri', 'Chilled Mineral Water & Soft Drinks']
      }
    ],
    inclusions: [
      'Standard Silk Table Linens & Gold Banquet Chairs',
      'Bone China Crockery & Stainless Steel Cutlery',
      'Professional Uniformed Service Crew (1 server per 20 guests)',
      'Basic Hall Lighting & Welcome Signboard'
    ]
  },
  {
    id: 'pkg-gold',
    name: 'Gold Royalty',
    tier: 'Gold',
    pricePerPersonPkr: 3650,
    minGuests: 300,
    popular: true,
    description: 'Our most sought-after wedding menu, featuring tender mutton delicacies, succulent live BBQ, and gourmet desserts.',
    courses: [
      {
        category: 'Starters & Welcome',
        items: ['Mint Margarita & Fresh Seasonal Welcome Drinks', 'Crispy Vegetable Tempura & Finger Fish with Tartar Sauce']
      },
      {
        category: 'Rice & Biryani',
        items: ['Degi Mutton Pulao with Tender Meat Cuts', 'Basmati Matar Pulao']
      },
      {
        category: 'Specialty Curries',
        items: ['Chicken Reshmi Handi with Cream Gravy', 'Mutton Kunna Gosht / Badami Qorma']
      },
      {
        category: 'Live Charcoal BBQ',
        items: ['Mutton Seekh Kababs', 'Chicken Malai Boti Skewers', 'Live Tandoor Naan (Roghani, Garlic, Plain)']
      },
      {
        category: 'Salad Bar & Accents',
        items: ['Russian Salad', 'Fresh Garden Tossed Salad', 'Boondi Raita', 'Achar & Mint Podina Chutney']
      },
      {
        category: 'Desserts & Hot Sips',
        items: ['Kashmiri Pink Tea with Almond & Pistachio Crunch', 'Warm Gajar Ka Halwa (Winter) or Mango Kulfi (Summer)', 'Hot Jalebi Live Station with Rabri', 'Chilled Soft Drinks & Mineral Water']
      }
    ],
    inclusions: [
      'Luxury Damask Table Overlays & Chiavari Chairs',
      'Floral Glass Centerpieces on all Dining Tables',
      'Dedicated VIP Family Table Butler Service',
      'Red Carpet Walkway & Ambient Warm Hall Wash Lighting',
      'Complimentary Bridal Room Refreshment Service'
    ]
  },
  {
    id: 'pkg-diamond',
    name: 'Diamond Imperial',
    tier: 'Diamond',
    pricePerPersonPkr: 4850,
    minGuests: 350,
    popular: false,
    description: 'The pinnacle of culinary luxury. An extravagant feast of whole dumpukht lamb, live seafood BBQ, and royal Mughlai indulgence.',
    courses: [
      {
        category: 'Canapés & Arrival Drinks',
        items: ['Fresh Strawberry/Peach Mocktail', 'Pomegranate Spritzer', 'Mini Chicken Sliders & Prawn Tempura']
      },
      {
        category: 'Royal Rice Special',
        items: ['Signature Mutton Dumpukht Kabuli Pulao with Dry Fruits & Carrots', 'Smoked Hyderabadi Dum Biryani']
      },
      {
        category: 'Gourmet Meat & Seafood',
        items: ['Prime Mutton Shank Nihari with Fresh Ginger & Green Chillies', 'White Chicken Karahi with Cashew Gravy', 'Pan-Seared Jumbo Tiger Prawns / Fish Tikkah']
      },
      {
        category: 'Live BBQ Pavilion',
        items: ['Lamb Rib Chops', 'Afghani Chicken Boti', 'Reshmi Kabab Rolls with Garlic Mayo']
      },
      {
        category: 'Exquisite Bread Basket',
        items: ['Sheermal', 'Kandahari Naan', 'Kalongi Naan', 'Tandoori Paratha']
      },
      {
        category: 'Dessert Grand Buffet',
        items: ['Live Turkish Ice Cream Show', 'Belgian Chocolate Fountain with Marshmallows & Strawberries', 'Traditional Shahi Kheer with 24k Silver Vark', 'Pistachio Ras Malai', 'Signature Doodh Patti & Kashmiri Chai']
      }
    ],
    inclusions: [
      'Complete Premium Thematic Stage Decor & Sofa Lounges',
      'Imported Crystal Cutlery & Gold Rimmed Dinnerware',
      '1 Dedicated Senior Captain per 15 guests + Executive VIP Concierge',
      'Low Fog & Cold Pyro Fountain Entrance Setup',
      'Valet Express Pass for Immediate Car Retrieval',
      'Complete Sound, Wireless Mics & Follow-Spot Operator'
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'The Grand Kohinoor Floral Stage',
    category: 'barat',
    hall: 'The Grand Kohinoor Ballroom',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    description: 'Custom cascading white orchids, gold pedestals, and majestic 18ft floral backdrop.'
  },
  {
    id: 'gal-2',
    title: 'Imperial Glass Marquee Fairy Light Ceiling',
    category: 'mehndi',
    hall: 'The Imperial Glass Marquee',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=80',
    description: 'Ethereal starlit ceiling with vibrant orange, yellow, and fuchsia marigold arrangements.'
  },
  {
    id: 'gal-3',
    title: 'Royal Emerald Mughal Garden Walima',
    category: 'walima',
    hall: 'The Royal Emerald Lawn',
    image: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1200&q=80',
    description: 'Pastel peach and mint stage flanked by illuminated heritage stone archways.'
  },
  {
    id: 'gal-4',
    title: 'VIP Banquet Seating & Gold Accents',
    category: 'decor',
    hall: 'The Grand Kohinoor Ballroom',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    description: 'Handcrafted floral centerpieces with gold Chiavari chairs and taper candles.'
  },
  {
    id: 'gal-5',
    title: 'Twilight Nikah Gazebo Setup',
    category: 'nikah',
    hall: 'The Royal Emerald Lawn',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    description: 'White jasmine curtains and fresh rose petals floating in illuminated fountains.'
  },
  {
    id: 'gal-6',
    title: 'Gourmet Wedding Chafing Presentation',
    category: 'catering',
    hall: 'The Grand Kohinoor Ballroom',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    description: 'Artisanal copper chafing dishes serving traditional hot Mughlai delicacies.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Malik Tariq & Family',
    event: 'Daughter’s Barat Ceremony',
    date: 'February 2026',
    venue: 'The Grand Kohinoor Ballroom',
    quote: 'Hosting 1,200 guests with flawless air conditioning, hot food served right on time, and seamless valet was a blessing. Royal Palace’s management delivered everything promised without a single glitch.',
    rating: 5
  },
  {
    id: 'test-2',
    clientName: 'Dr. Usman & Ayesha Qureshi',
    event: 'Walima Reception',
    date: 'January 2026',
    venue: 'The Imperial Glass Marquee',
    quote: 'The glass marquee with fairy lights looked straight out of a fairy tale. Our overseas guests from the UK were mesmerized by the decor and the mutton dumpukht pulao.',
    rating: 5
  },
  {
    id: 'test-3',
    clientName: 'Sheikh Haroon Bilour',
    event: 'Qawwali Night & Mehndi Celebration',
    date: 'December 2025',
    venue: 'The Royal Emerald Lawn',
    quote: 'The acoustics on the lawn and the Mughal fountain backdrop created an unforgettable winter night. The live tandoor and Kashmiri tea station were unmatched.',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I reserve a wedding date at Royal Palace Lahore?',
    answer: 'You can submit an online inquiry or visit our booking office on Main Boulevard. Date reservation requires a 25% initial booking token, with remaining balance payable in scheduled milestones before the event.',
    category: 'booking'
  },
  {
    id: 'faq-2',
    question: 'What are the official event timing slots in Lahore?',
    answer: 'In compliance with Punjab government regulations, we offer two dedicated shifts: Afternoon Shift (1:00 PM to 4:00 PM) and Evening Shift (7:30 PM to 10:30 PM, with dinner served strictly per local statutory guidelines).',
    category: 'policies'
  },
  {
    id: 'faq-3',
    question: 'How does Royal Palace guarantee uninterrupted power backup?',
    answer: 'We operate dual 500kVA Caterpillar diesel generators synchronized with automated changeover switches (AMF). Generator transition occurs in under 3 seconds without interrupting lighting, chillers, or sound equipment.',
    category: 'venue'
  },
  {
    id: 'faq-4',
    question: 'Can we bring an external caterer or customize the menu?',
    answer: 'Our in-house master culinary team specializes in authentic Pakistani, Continental, and Chinese cuisine. Custom menu requests and dietary accommodations are happily catered to. External catering requires special management approval.',
    category: 'catering'
  },
  {
    id: 'faq-5',
    question: 'Is parking available and is valet complimentary?',
    answer: 'Yes! We possess our own paved, well-lit parking facility for over 450 vehicles with 24/7 CCTV surveillance, perimeter security guards, and complimentary executive valet service for all wedding guests.',
    category: 'venue'
  },
  {
    id: 'faq-6',
    question: 'Can we arrange a private walkthrough visit before deciding?',
    answer: 'Absolutely. We encourage all prospective families to schedule an executive venue walkthrough. You can pick your preferred date and time right through our interactive visit scheduling tool on this site.',
    category: 'booking'
  }
];

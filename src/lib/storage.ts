import { Inquiry, InquiryStatus, Package, Venue } from '../types';
import { PACKAGES, VENUES } from '../data/mockData';

const INQUIRIES_STORAGE_KEY = 'royal_palace_inquiries_v1';
const VENUES_STORAGE_KEY = 'royal_palace_venues_v1';
const PACKAGES_STORAGE_KEY = 'royal_palace_packages_v1';

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'INQ-2026-8812',
    customerName: 'Chaudhry Kamran Afzal',
    phone: '+92 321 8459201',
    email: 'kamran.afzal@lahoretextiles.com',
    city: 'Lahore (Gulberg)',
    eventType: 'barat',
    eventDate: '2026-11-14',
    timeSlot: 'evening',
    venueId: 'the-grand-kohinoor-ballroom',
    guestCount: 850,
    packageId: 'pkg-gold',
    visitRequested: true,
    visitDate: '2026-10-18',
    visitTime: '04:30 PM',
    status: 'visit_scheduled',
    estimatedBudgetPkr: 850 * 3650,
    notes: 'Bride’s family requires spacious VIP stage and central red carpet runway.',
    adminNotes: 'Spoke with Chaudhry sb. Visiting Saturday 4:30 PM with family elders.',
    createdAt: '2026-10-12T14:32:00Z',
    updatedAt: '2026-10-13T10:15:00Z'
  },
  {
    id: 'INQ-2026-7734',
    customerName: 'Dr. Zeeshan Haider',
    phone: '+92 300 4882199',
    email: 'dr.zeeshan@shalamarhospital.pk',
    city: 'Lahore (DHA Phase 5)',
    eventType: 'walima',
    eventDate: '2026-12-05',
    timeSlot: 'evening',
    venueId: 'the-imperial-glass-marquee',
    guestCount: 600,
    packageId: 'pkg-diamond',
    visitRequested: false,
    status: 'quotation_sent',
    estimatedBudgetPkr: 600 * 4850,
    notes: 'Require live Turkish ice cream and whole roast mutton dumpukht.',
    adminNotes: 'Formal PDF quotation sent via WhatsApp. Follow-up on Thursday.',
    createdAt: '2026-10-10T11:20:00Z',
    updatedAt: '2026-10-11T09:00:00Z'
  },
  {
    id: 'INQ-2026-6219',
    customerName: 'Begum Salma Farooq',
    phone: '+92 333 4209911',
    city: 'Lahore (Model Town)',
    eventType: 'mehndi',
    eventDate: '2026-11-20',
    timeSlot: 'evening',
    venueId: 'the-imperial-glass-marquee',
    guestCount: 450,
    packageId: 'pkg-silver',
    visitRequested: true,
    visitDate: '2026-10-16',
    visitTime: '06:00 PM',
    status: 'new',
    estimatedBudgetPkr: 450 * 2850,
    notes: 'Dance floor setup and custom yellow marigold lighting required.',
    createdAt: '2026-10-14T08:15:00Z',
    updatedAt: '2026-10-14T08:15:00Z'
  }
];

export function getInquiries(): Inquiry[] {
  if (typeof window === 'undefined') return INITIAL_INQUIRIES;
  try {
    const raw = localStorage.getItem(INQUIRIES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_INQUIRIES;
  }
}

export function saveInquiry(inquiryData: Omit<Inquiry, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Inquiry {
  const current = getInquiries();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const newInquiry: Inquiry = {
    ...inquiryData,
    id: `INQ-2026-${randomSuffix}`,
    status: 'new',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const updated = [newInquiry, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  }
  return newInquiry;
}

export function updateInquiryStatus(id: string, status: InquiryStatus, adminNotes?: string): Inquiry | null {
  const current = getInquiries();
  const index = current.findIndex(inq => inq.id === id);
  if (index === -1) return null;

  const target = current[index];
  const updatedItem: Inquiry = {
    ...target,
    status,
    adminNotes: adminNotes !== undefined ? adminNotes : target.adminNotes,
    updatedAt: new Date().toISOString()
  };

  current[index] = updatedItem;
  if (typeof window !== 'undefined') {
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(current));
  }
  return updatedItem;
}

export function deleteInquiry(id: string): boolean {
  const current = getInquiries();
  const filtered = current.filter(inq => inq.id !== id);
  if (typeof window !== 'undefined') {
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(filtered));
  }
  return true;
}

export function getStoredVenues(): Venue[] {
  if (typeof window === 'undefined') return VENUES;
  try {
    const raw = localStorage.getItem(VENUES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(VENUES_STORAGE_KEY, JSON.stringify(VENUES));
      return VENUES;
    }
    return JSON.parse(raw);
  } catch {
    return VENUES;
  }
}

export function updateStoredVenue(venue: Venue): void {
  const list = getStoredVenues();
  const index = list.findIndex(v => v.id === venue.id);
  if (index >= 0) {
    list[index] = venue;
    if (typeof window !== 'undefined') {
      localStorage.setItem(VENUES_STORAGE_KEY, JSON.stringify(list));
    }
  }
}

export function getStoredPackages(): Package[] {
  if (typeof window === 'undefined') return PACKAGES;
  try {
    const raw = localStorage.getItem(PACKAGES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PACKAGES_STORAGE_KEY, JSON.stringify(PACKAGES));
      return PACKAGES;
    }
    return JSON.parse(raw);
  } catch {
    return PACKAGES;
  }
}

export function updateStoredPackage(pkg: Package): void {
  const list = getStoredPackages();
  const index = list.findIndex(p => p.id === pkg.id);
  if (index >= 0) {
    list[index] = pkg;
    if (typeof window !== 'undefined') {
      localStorage.setItem(PACKAGES_STORAGE_KEY, JSON.stringify(list));
    }
  }
}

export function formatPricePkr(val: number): string {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0
  }).format(val).replace('PKR', 'Rs.');
}

export function createWhatsAppChatUrl(params: {
  venueName?: string;
  eventType?: string;
  guestCount?: number;
  date?: string;
  customerName?: string;
  referenceId?: string;
}): string {
  const phone = '923008452199'; // Official Royal Palace Lahore WhatsApp line
  let text = 'Assalam-o-Alaikum Royal Palace Banquets & Marquee, Lahore.\n\n';
  
  if (params.referenceId) {
    text += `I have submitted an inquiry on your website (Ref: ${params.referenceId}).\n`;
  } else {
    text += 'I am inquiring about hosting a wedding event at your venue.\n';
  }

  if (params.customerName) text += `Name: ${params.customerName}\n`;
  if (params.venueName) text += `Preferred Hall: ${params.venueName}\n`;
  if (params.eventType) text += `Event: ${params.eventType.toUpperCase()}\n`;
  if (params.date) text += `Preferred Date: ${params.date}\n`;
  if (params.guestCount) text += `Expected Guests: ${params.guestCount}\n`;

  text += '\nPlease share hall availability and package quotation details. Thank you!';

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

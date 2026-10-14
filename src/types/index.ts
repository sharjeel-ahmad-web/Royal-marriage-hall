export type EventType = 'barat' | 'walima' | 'mehndi' | 'nikah' | 'engagement' | 'corporate' | 'reception';

export type TimeSlot = 'afternoon' | 'evening';

export type VenueType = 'indoor' | 'marquee' | 'outdoor';

export type InquiryStatus = 
  | 'new'
  | 'contacted'
  | 'visit_scheduled'
  | 'quotation_sent'
  | 'confirmed'
  | 'cancelled';

export interface Venue {
  id: string;
  name: string;
  tagline: string;
  type: VenueType;
  capacityMin: number;
  capacityMax: number;
  areaSqFt: number;
  startingPricePkr: number;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  dimensions: string;
  idealFor: EventType[];
}

export interface MenuItem {
  name: string;
  description?: string;
  type?: 'starter' | 'main' | 'rice' | 'bread' | 'salad' | 'dessert' | 'beverage';
}

export interface MenuCourse {
  category: string;
  items: string[];
}

export interface Package {
  id: string;
  name: string;
  tier: 'Silver' | 'Gold' | 'Diamond';
  pricePerPersonPkr: number;
  minGuests: number;
  description: string;
  courses: MenuCourse[];
  inclusions: string[];
  popular?: boolean;
}

export interface Inquiry {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  city: string;
  eventType: EventType;
  eventDate: string;
  timeSlot: TimeSlot;
  venueId: string;
  guestCount: number;
  packageId?: string;
  visitRequested: boolean;
  visitDate?: string;
  visitTime?: string;
  status: InquiryStatus;
  estimatedBudgetPkr?: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  event: string;
  date: string;
  venue: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'venue' | 'catering' | 'policies';
}

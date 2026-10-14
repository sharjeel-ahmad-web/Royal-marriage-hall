import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { VirtualTour360 } from './components/virtual-tour/VirtualTour360';
import { VenuesSection } from './components/home/VenuesSection';
import { EventServicesHub } from './components/home/EventServicesHub';
import { PackagesSection } from './components/home/PackagesSection';
import { CateringSection } from './components/home/CateringSection';
import { GallerySection } from './components/home/GallerySection';
import { AboutSection } from './components/home/AboutSection';
import { FaqSection } from './components/home/FaqSection';
import { LocationSection } from './components/home/LocationSection';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { InquiryModal } from './components/booking/InquiryModal';
import { VenueDetailModal } from './components/venues/VenueDetailModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { LanguageProvider } from './context/LanguageContext';
import { Venue } from './types';
import { getStoredVenues, getStoredPackages } from './lib/storage';

function AppContent() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [packages, setPackages] = useState(getStoredPackages());
  
  // Modals state
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedVenueForInquiry, setSelectedVenueForInquiry] = useState<string | undefined>(undefined);
  const [selectedPackageForInquiry, setSelectedPackageForInquiry] = useState<string | undefined>(undefined);
  
  const [detailedVenue, setDetailedVenue] = useState<Venue | null>(null);
  const [isAdminView, setIsAdminView] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setVenues(getStoredVenues());
    setPackages(getStoredPackages());

    if (window.location.hash === '#admin') {
      setIsAdminView(true);
    }

    const handleScroll = () => {
      const sections = ['venues', 'virtual-tour', 'services', 'packages', 'catering', 'gallery', 'about', 'location'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInquiry = (venueId?: string, packageId?: string) => {
    setSelectedVenueForInquiry(venueId);
    setSelectedPackageForInquiry(packageId);
    setIsInquiryModalOpen(true);
  };

  const handleExploreVenues = () => {
    document.getElementById('venues')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isAdminView) {
    return (
      <AdminDashboard
        onClose={() => {
          setIsAdminView(false);
          setVenues(getStoredVenues());
          setPackages(getStoredPackages());
          window.history.pushState(null, '', window.location.pathname);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] flex flex-col font-sans selection:bg-[#B48C46]/20 selection:text-[#8F6B2A]">
      {/* Top Bar Navigation with Language Toggle */}
      <Navbar
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenAdmin={() => setIsAdminView(true)}
        isAdminOpen={isAdminView}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Cross-Fade & CountUp Numbers from 0 */}
        <HeroSection
          onOpenInquiry={() => handleOpenInquiry()}
          onExploreVenues={handleExploreVenues}
        />

        {/* 2. Interactive 360-Degree Panorama Virtual Tour */}
        <VirtualTour360 />

        {/* 3. Halls & Event Spaces */}
        <VenuesSection
          venues={venues}
          onSelectVenueDetails={(v) => setDetailedVenue(v)}
          onBookVenue={(venueId) => handleOpenInquiry(venueId)}
        />

        {/* 4. Complete Multi-Event Services Hub (Family, Corporate, Educational, Special Packages) */}
        <EventServicesHub
          onOpenInquiry={(vId, pId) => handleOpenInquiry(vId, pId)}
        />

        {/* 5. Packages & Per-Head Live Budget Calculator (Starts from 0 Guests) */}
        <PackagesSection
          packages={packages}
          onSelectPackage={(pkgId) => handleOpenInquiry(undefined, pkgId)}
        />

        {/* 6. Gourmet Desi Ghee Mughlai Catering & Live BBQ */}
        <CateringSection
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 7. Wedding & Event Visual Gallery with Lightbox */}
        <GallerySection />

        {/* 8. Hospitality Legacy & Verified Testimonials */}
        <AboutSection
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 9. Policy FAQs */}
        <FaqSection />

        {/* 10. Main Boulevard Lahore Location & Navigation Times */}
        <LocationSection
          onOpenInquiry={() => handleOpenInquiry()}
        />
      </main>

      {/* Quiet Editorial Footer */}
      <Footer
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenAdmin={() => setIsAdminView(true)}
      />

      {/* Floating Action WhatsApp */}
      <WhatsAppButton
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Interactive Inquiry & Visit Scheduling Modal (Starts from 0 guests, RTL supported) */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialVenueId={selectedVenueForInquiry}
        initialPackageId={selectedPackageForInquiry}
      />

      {/* Rich Venue Detail & Specifications Modal */}
      <VenueDetailModal
        venue={detailedVenue}
        onClose={() => setDetailedVenue(null)}
        onBookVenue={(venueId) => {
          setDetailedVenue(null);
          handleOpenInquiry(venueId);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

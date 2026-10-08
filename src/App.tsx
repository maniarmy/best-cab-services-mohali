import React, { useState } from 'react';
import { CleanNavbar } from './components/CleanNavbar';
import { AutoCallHandler } from './components/AutoCallHandler';
import { CleanHeroSection } from './components/CleanHeroSection';
import { MohaliLocalCabSection } from './components/MohaliLocalCabSection';
import { LocalOutstationServices } from './components/LocalOutstationServices';
import { CarOptionsSection } from './components/CarOptionsSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { CleanCtaBanner } from './components/CleanCtaBanner';
import { CleanFooter } from './components/CleanFooter';
import { CleanFloatingBar } from './components/CleanFloatingBar';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { BookingModal } from './components/BookingModal';
import { AuthModal } from './components/AuthModal';
import { DispatchDashboard } from './components/DispatchDashboard';
import { DriverPortal } from './components/DriverPortal';
import { CustomerPortal } from './components/CustomerPortal';
import { BookingFormData, AuthUser, RideBooking } from './types';
import { getStoredUser, saveStoredUser, getStoredBookings, saveStoredBookings } from './data/authStore';

export default function App() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => getStoredUser());
  const [bookings, setBookings] = useState<RideBooking[]>(() => getStoredBookings());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<Partial<BookingFormData>>({});

  // Sync bookings changes to localStorage
  const handleUpdateBookingStatus = (
    id: string,
    status: RideBooking['status'],
    driverName?: string,
    vehicleNumber?: string
  ) => {
    setBookings((prev) => {
      const updated = prev.map((b) =>
        b.id === id
          ? {
              ...b,
              status,
              ...(driverName ? { driverName } : {}),
              ...(vehicleNumber ? { vehicleNumber } : {}),
            }
          : b
      );
      saveStoredBookings(updated);
      return updated;
    });
  };

  const handleAddNewBooking = (newBookingData: Omit<RideBooking, 'id' | 'createdAt'>) => {
    const newRide: RideBooking = {
      ...newBookingData,
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
    };
    setBookings((prev) => {
      const updated = [newRide, ...prev];
      saveStoredBookings(updated);
      return updated;
    });
  };

  const handleLoginSuccess = (user: AuthUser) => {
    setCurrentUser(user);
    saveStoredUser(user);
    setIsDashboardOpen(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    saveStoredUser(null);
    setIsDashboardOpen(false);
  };

  const handleOpenDashboard = () => {
    if (currentUser) {
      setIsDashboardOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleOpenBooking = (initialData?: Partial<BookingFormData>) => {
    if (initialData) {
      setModalInitialData(initialData);
    } else {
      setModalInitialData({
        pickupLocation: 'Mohali - Phase 3B2 / Phase 5 (Market & Food Hub)',
        dropLocation: 'Chandigarh - Sector 17 (City Centre / ISBT 17)',
        tripType: 'local',
        vehicleId: 'sedan',
        ...(currentUser?.name ? { passengerName: currentUser.name } : {}),
        ...(currentUser?.phone ? { passengerPhone: currentUser.phone } : {}),
      });
    }
    setIsBookingModalOpen(true);
  };

  const handleBookShimla = () => {
    handleOpenBooking({
      pickupLocation: 'Chandigarh - Sector 17 (City Centre / ISBT 17)',
      dropLocation: 'Shimla - Mall Road / ISBT Shimla',
      tripType: 'outstation',
      vehicleId: 'sedan',
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. Google Ad Call Banner & Auto-Call on Click */}
      <AutoCallHandler />

      {/* 2. Header / Navbar with only: Home, About Us, Contact US, Blog */}
      <CleanNavbar
        onOpenBooking={() => handleOpenBooking()}
        currentUser={currentUser}
        onOpenLogin={() => setIsAuthModalOpen(true)}
        onOpenDashboard={handleOpenDashboard}
      />

      {/* Main Page: Reduced simple layout showing only Home, About Us, Contact Us, Blog */}
      <main className="flex-grow pb-20 md:pb-6">
        
        {/* Section 1: Home (Hero Section with requested headline and paragraph) */}
        <CleanHeroSection
          onOpenBooking={() => handleOpenBooking()}
          onBookShimla={() => handleBookShimla()}
        />

        {/* Section 2: Local Cab Services Mohali (matching screenshot with requested paragraph) */}
        <MohaliLocalCabSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 3: Local & Outstation Cab Services (matching screenshot) */}
        <LocalOutstationServices />

        {/* Section 3: Car Options (Swift Dzire, Honda City / Amaze, SUV, Hatchback matching screenshot) */}
        <CarOptionsSection />

        {/* Section 4: Google Reviews (Compact 5.0 rating & customer cards matching screenshot) */}
        <GoogleReviewsSection />

        {/* Section 4: Need a cab? Call Now! (CTA banner matching website theme) */}
        <CleanCtaBanner />

      </main>

      {/* Footer matching simple professional structure */}
      <CleanFooter
        onOpenLogin={() => setIsAuthModalOpen(true)}
        currentUser={currentUser}
        onOpenDashboard={handleOpenDashboard}
      />

      {/* Flush Mobile App Navigation Bar */}
      <CleanFloatingBar onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Quick Action Button on the Right Side */}
      <FloatingWhatsAppButton />

      {/* Interactive Booking Modal without prices */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={modalInitialData}
        onBookingCreated={handleAddNewBooking}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Role-Based Portals */}
      {isDashboardOpen && currentUser && (
        <>
          {currentUser.role === 'admin' && (
            <DispatchDashboard
              user={currentUser}
              bookings={bookings}
              onUpdateBookingStatus={handleUpdateBookingStatus}
              onAddNewBooking={handleAddNewBooking}
              onLogout={handleLogout}
              onClose={() => setIsDashboardOpen(false)}
            />
          )}

          {currentUser.role === 'driver' && (
            <DriverPortal
              user={currentUser}
              bookings={bookings}
              onUpdateBookingStatus={handleUpdateBookingStatus}
              onLogout={handleLogout}
              onClose={() => setIsDashboardOpen(false)}
            />
          )}

          {currentUser.role === 'customer' && (
            <CustomerPortal
              user={currentUser}
              bookings={bookings}
              onBookNewCab={() => {
                setIsDashboardOpen(false);
                handleOpenBooking();
              }}
              onLogout={handleLogout}
              onClose={() => setIsDashboardOpen(false)}
            />
          )}
        </>
      )}

    </div>
  );
}

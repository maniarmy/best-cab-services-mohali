export type TripType = 'local' | 'airport' | 'outstation' | 'hourly';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'SUV' | 'Luxury' | 'Outstation Pro';
  carModels: string;
  passengers: number;
  luggage: number;
  ac: boolean;
  baseFare: number; // Base fare in INR
  perKmRate: number; // Rate per KM
  minDistance: number; // Minimum billable distance
  image: string;
  tag?: string;
  features: string[];
}

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  estTime: string;
  category: 'Tricity' | 'Airport' | 'Outstation' | 'University';
  priceStarting: number;
  highlight?: string;
}

export interface BookingFormData {
  tripType: TripType;
  pickupLocation: string;
  dropLocation: string;
  vehicleId: string;
  date: string;
  time: string;
  returnDate?: string;
  passengerName: string;
  passengerPhone: string;
  flightNumber?: string;
  specialInstructions?: string;
}

export interface ServiceZone {
  name: string;
  tagline: string;
  coverage: string[];
  pickupTime: string;
  cabsCount: number;
  hotspots: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  tripType: string;
  verified: boolean;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Booking' | 'Pricing' | 'Safety' | 'Airport';
}

export type UserRole = 'admin' | 'driver' | 'customer';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  vehicleAssigned?: string;
  isOnline?: boolean;
}

export interface RideBooking {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  pickupLocation: string;
  dropLocation: string;
  tripType: TripType;
  vehicleName: string;
  fare: number;
  status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  date: string;
  time: string;
  driverName?: string;
  driverPhone?: string;
  vehicleNumber?: string;
  otp?: string;
  notes?: string;
  createdAt: string;
}


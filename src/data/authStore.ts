import { AuthUser, RideBooking } from '../types';

export const DEMO_USERS: Record<string, AuthUser> = {
  admin: {
    id: 'usr_admin_1',
    name: 'Dispatch Manager (Admin)',
    email: 'admin@smartcabpro.com',
    phone: '+91 98155 05661',
    role: 'admin',
    avatar: '👨‍💼',
  },
  driver: {
    id: 'usr_driver_1',
    name: 'Gurpreet Singh',
    email: 'driver@smartcabpro.com',
    phone: '+91 98721 34912',
    role: 'driver',
    avatar: '🧔',
    vehicleAssigned: 'Maruti Suzuki Dzire (CH-01-TB-4892)',
    isOnline: true,
  },
  customer: {
    id: 'usr_cust_1',
    name: 'Manjeet Deol',
    email: 'manjeetdeolau@gmail.com',
    phone: '+91 98155 05661',
    role: 'customer',
    avatar: '👤',
  },
};

export const INITIAL_RIDE_BOOKINGS: RideBooking[] = [
  {
    id: 'BK-7841',
    customerName: 'Manjeet Deol',
    customerPhone: '+91 98155 05661',
    customerEmail: 'manjeetdeolau@gmail.com',
    pickupLocation: 'Chandigarh - Sector 17 (City Centre / ISBT 17)',
    dropLocation: 'Shimla - Mall Road / ISBT Shimla',
    tripType: 'outstation',
    vehicleName: 'Sedan (Dzire / Etios)',
    fare: 2499,
    status: 'assigned',
    date: 'Today',
    time: '11:30 AM',
    driverName: 'Gurpreet Singh',
    driverPhone: '+91 98721 34912',
    vehicleNumber: 'CH-01-TB-4892',
    otp: '4892',
    notes: 'Luggage assistance needed at Sector 17 hotel.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'BK-7842',
    customerName: 'Amanpreet Kaur',
    customerPhone: '+91 98881 23456',
    pickupLocation: 'Kharar - Sunny Enclave (Sector 125)',
    dropLocation: 'Mohali - Shaheed Bhagat Singh Intl Airport (IXC)',
    tripType: 'airport',
    vehicleName: 'Ertiga (6-Seater SUV)',
    fare: 750,
    status: 'in_progress',
    date: 'Today',
    time: '01:15 PM',
    driverName: 'Harvinder Sharma',
    driverPhone: '+91 98144 56789',
    vehicleNumber: 'PB-65-AX-3104',
    otp: '3104',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'BK-7843',
    customerName: 'Rajesh Verma',
    customerPhone: '+91 98722 99887',
    pickupLocation: 'Chandigarh - Sector 35 / 34',
    dropLocation: 'New Delhi - IGI International Airport (Terminal 3)',
    tripType: 'outstation',
    vehicleName: 'Innova Crysta (Luxury)',
    fare: 4999,
    status: 'pending',
    date: 'Tomorrow',
    time: '05:00 AM',
    otp: '9120',
    notes: 'Early morning flight at 11 AM.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'BK-7844',
    customerName: 'Dr. Simran Sidhu',
    customerPhone: '+91 98150 11223',
    pickupLocation: 'Mohali - Phase 3B2 Market',
    dropLocation: 'Panchkula - Sector 5 / MDC',
    tripType: 'local',
    vehicleName: 'Hatchback (WagonR)',
    fare: 320,
    status: 'completed',
    date: 'Yesterday',
    time: '04:45 PM',
    driverName: 'Gurpreet Singh',
    driverPhone: '+91 98721 34912',
    vehicleNumber: 'CH-01-TB-4892',
    otp: '5561',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

const USER_STORAGE_KEY = 'smartcab_active_user_v1';
const BOOKINGS_STORAGE_KEY = 'smartcab_bookings_list_v1';

export function getStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export function saveStoredUser(user: AuthUser | null) {
  try {
    if (!user) {
      localStorage.removeItem(USER_STORAGE_KEY);
    } else {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    }
  } catch (e) {
    // Ignore storage errors
  }
}

export function getStoredBookings(): RideBooking[] {
  try {
    const raw = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(INITIAL_RIDE_BOOKINGS));
      return INITIAL_RIDE_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_RIDE_BOOKINGS;
  }
}

export function saveStoredBookings(bookings: RideBooking[]) {
  try {
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
  } catch (e) {
    // Ignore storage errors
  }
}

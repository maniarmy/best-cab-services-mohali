import { Vehicle, PopularRoute, ServiceZone, Testimonial, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Best Cab Services in Mohali',
  tagline: 'Reliable, Safe & 24/7 Doorstep Cab Service',
  phone: '98155 05661',
  phoneClean: '+919815505661',
  phoneFormatted: '+91 98155 05661',
  email: 'info@bestcabservicesmohali.com',
  serviceAreas: ['Chandigarh', 'Mohali', 'Kharar', 'Zirakpur', 'Panchkula'],
  operatingHours: '24 Hours / 7 Days a Week',
  averagePickupTime: '5-10 Minutes',
  rating: '4.9',
  reviewsCount: '12,480+',
  activeDrivers: 48,
};

export const COMMON_LOCATIONS = [
  // Kharar
  'Kharar - Chandigarh University (CU Campus)',
  'Kharar - Sunny Enclave (Sector 125)',
  'Kharar - Bus Stand & Flyover',
  'Kharar - Gillco Valley / Heights',
  'Kharar - Nirwana Greens / Shivalik City',
  'Kharar - Landran Road / CGC College',
  'Kharar - Khanpur Chowk',
  'Kharar - Sector 127 / TDI City',
  
  // Mohali
  'Mohali - Shaheed Bhagat Singh Intl Airport (IXC)',
  'Mohali - Phase 1 / Phase 2 (Near Chandigarh Border)',
  'Mohali - Phase 3B2 / Phase 5 (Market & Food Hub)',
  'Mohali - Phase 7 / Phase 8 (Industrial & IT Hub)',
  'Mohali - Phase 9 / PCA Cricket Stadium',
  'Mohali - Sector 66 / 67 / CP67 Mall',
  'Mohali - Sector 70 / Mattaur / Homeland Heights',
  'Mohali - Sector 82 / IT City / Infosys',
  'Mohali - Fortis Hospital Mohali',
  'Mohali - Max Super Speciality Hospital (Phase 6)',
  'Mohali - QuarkCity / Bestech Business Towers',
  
  // Chandigarh
  'Chandigarh - Sector 17 (City Centre / ISBT 17)',
  'Chandigarh - Sector 43 (ISBT 43 Inter-state Bus Terminal)',
  'Chandigarh - Sector 35 / 34 (Commercial & Coaching Hub)',
  'Chandigarh - Chandigarh Railway Station (CDG)',
  'Chandigarh - Rajiv Gandhi Chandigarh IT Park (Manimajra)',
  'Chandigarh - Elante Mall (Industrial Area Phase 1)',
  'Chandigarh - PGIMER & Medical College (Sector 12)',
  'Chandigarh - Panjab University (PU Sector 14 / 25)',
  'Chandigarh - Sukhna Lake & Rock Garden (Sector 1/6)',
  'Chandigarh - Sector 22 (Mobile & Electronic Market)',
  'Chandigarh - Sector 26 (Grain Market / Club Road)',
  'Chandigarh - Sector 8 / Sector 9 (Inner Market)',
  
  // Nearby & Outstation
  'Zirakpur - VIP Road / Cosmo Mall / Dhillon Plaza',
  'Panchkula - Sector 5 / MDC / Amartex Chowk',
  'New Delhi - IGI International Airport (Terminal 1/2/3)',
  'New Delhi - Connaught Place / New Delhi Railway Station',
  'Shimla - Mall Road / ISBT Shimla',
  'Manali - Mall Road / Solang Valley',
  'Kasauli - Heritage Market / Garkhal',
  'Amritsar - Golden Temple / Sri Guru Ram Dass Jee Airport',
  'Dharamshala & McLeodganj',
  'Rishikesh / Haridwar'
];

export const VEHICLE_FLEET: Vehicle[] = [
  {
    id: 'hatchback',
    name: 'Smart Hatchback',
    category: 'Hatchback',
    carModels: 'Maruti WagonR / Swift / Celerio',
    passengers: 4,
    luggage: 2,
    ac: true,
    baseFare: 199,
    perKmRate: 11,
    minDistance: 5,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    tag: 'Most Economical',
    features: ['Instant 5-Min Pickup', 'High Mileage & Low Fare', 'Ideal for City Traffic', 'Clean & Sanitized', 'Dual AC']
  },
  {
    id: 'sedan',
    name: 'Executive Sedan',
    category: 'Sedan',
    carModels: 'Maruti Dzire / Honda Amaze / Hyundai Aura',
    passengers: 4,
    luggage: 3,
    ac: true,
    baseFare: 249,
    perKmRate: 13,
    minDistance: 5,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80',
    tag: 'Top Rated & Comfortable',
    features: ['Extra Boot Luggage Space', 'Premium Fabric Seats', 'Smooth Highway Ride', 'Phone Charger Onboard', 'Chilled Climate Control']
  },
  {
    id: 'suv',
    name: 'Prime SUV / Ertiga',
    category: 'SUV',
    carModels: 'Maruti Ertiga / Kia Carens (6+1 Seater)',
    passengers: 6,
    luggage: 4,
    ac: true,
    baseFare: 399,
    perKmRate: 17,
    minDistance: 8,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    tag: 'Family & Group Choice',
    features: ['6 Full Passenger Seats', 'Double Blower AC', 'Ample Roof / Boot Carrier', 'Smooth Suspension', 'Great for Outstation & Hills']
  },
  {
    id: 'innova',
    name: 'Innova Crysta Luxury',
    category: 'Luxury',
    carModels: 'Toyota Innova Crysta (7/8 Seater)',
    passengers: 7,
    luggage: 5,
    ac: true,
    baseFare: 599,
    perKmRate: 21,
    minDistance: 10,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80',
    tag: 'VIP Highway & Airport King',
    features: ['Captain Reclining Seats', 'Superior Highway Stability', 'Supreme Legroom', 'Hill Terrain Expert Driver', 'Bottled Mineral Water']
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller',
    category: 'Outstation Pro',
    carModels: 'Force Urbania / Traveller 12-17 Seater',
    passengers: 15,
    luggage: 12,
    ac: true,
    baseFare: 1499,
    perKmRate: 28,
    minDistance: 20,
    image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=600&q=80',
    tag: 'Group Tours & Weddings',
    features: ['Push-back Push luxury seats', 'Surround Sound System', 'Large Luggage Compartment', 'Ideal for Shimla/Manali/Delhi Tours']
  }
];

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: '1',
    from: 'Kharar (Sunny Enclave / CU)',
    to: 'Chandigarh Intl Airport (IXC)',
    distanceKm: 24,
    estTime: '35 mins',
    category: 'Airport',
    priceStarting: 549,
    highlight: 'Direct Flyover Route • Guaranteed On-time'
  },
  {
    id: '2',
    from: 'Chandigarh (Sec 17 / 35 / 43)',
    to: 'Chandigarh Intl Airport (IXC)',
    distanceKm: 16,
    estTime: '25 mins',
    category: 'Airport',
    priceStarting: 420,
    highlight: 'Zero Luggage Fee • Flight Tracking'
  },
  {
    id: '3',
    from: 'Kharar (Chandigarh University)',
    to: 'Chandigarh Sector 17 / Elante Mall',
    distanceKm: 18,
    estTime: '30 mins',
    category: 'University',
    priceStarting: 380,
    highlight: 'Special Student Discount'
  },
  {
    id: '4',
    from: 'Kharar (Sunny Enclave / Gillco)',
    to: 'Mohali IT City / Phase 8 / CP67',
    distanceKm: 14,
    estTime: '22 mins',
    category: 'Tricity',
    priceStarting: 320,
    highlight: 'Daily Office Commute Package'
  },
  {
    id: '5',
    from: 'Chandigarh / Mohali / Kharar',
    to: 'Delhi IGI Airport (T3/T2)',
    distanceKm: 260,
    estTime: '4 hrs 15 mins',
    category: 'Outstation',
    priceStarting: 2999,
    highlight: 'One-Way & Round Trip • Fastag Toll Assist'
  },
  {
    id: '6',
    from: 'Chandigarh / Mohali / Kharar',
    to: 'Shimla (Mall Road / Kufri)',
    distanceKm: 115,
    estTime: '3 hrs 30 mins',
    category: 'Outstation',
    priceStarting: 2499,
    highlight: 'Himalayan Hill Certified Driver'
  },
  {
    id: '7',
    from: 'Chandigarh / Mohali / Kharar',
    to: 'Manali / Solang Valley',
    distanceKm: 285,
    estTime: '6 hrs 45 mins',
    category: 'Outstation',
    priceStarting: 4999,
    highlight: '4-5 Days Sightseeing Custom Package'
  },
  {
    id: '8',
    from: 'Chandigarh / Mohali / Kharar',
    to: 'Amritsar (Golden Temple / Wagah)',
    distanceKm: 230,
    estTime: '4 hrs',
    category: 'Outstation',
    priceStarting: 2899,
    highlight: 'Same Day Return or Overnight Available'
  }
];

export const SERVICE_ZONES: ServiceZone[] = [
  {
    name: 'Kharar Zone',
    tagline: 'Fastest Cab Dispatch in Greater Mohali & Kharar',
    coverage: ['Sunny Enclave (Sec 125)', 'Chandigarh University (CU)', 'Gillco Valley', 'Nirwana Greens', 'Kharar Flyover / Bus Stand', 'Landran Road', 'Khanpur Chowk', 'Shivalik City'],
    pickupTime: '5-8 Minutes',
    cabsCount: 16,
    hotspots: ['CU Campus Gate 1 & 2', 'Sunny Enclave Market', 'Kharar Bus Stand', 'Gillco Heights']
  },
  {
    name: 'Mohali Zone',
    tagline: 'Complete Coverage across Phase 1-11 & IT City',
    coverage: ['Phase 1 to 11', 'Sector 66 to 118', 'IT City & QuarkCity', 'Fortis & Max Hospital', 'CP67 Mall', 'Homeland Heights', 'PCA Cricket Stadium', 'Aerocity / IT City'],
    pickupTime: '5-7 Minutes',
    cabsCount: 22,
    hotspots: ['Phase 3B2 Food Street', 'Sector 67 CP67', 'Phase 7 Industrial Area', 'Airport Road']
  },
  {
    name: 'Chandigarh Zone',
    tagline: 'The City Beautiful 24/7 Smart Transit',
    coverage: ['Sectors 1 to 70', 'Rajiv Gandhi IT Park', 'ISBT Sector 17 & 43', 'Chandigarh Railway Station', 'PGIMER & PU', 'Elante Mall', 'Sukhna Lake', 'Industrial Area Ph 1 & 2'],
    pickupTime: '4-7 Minutes',
    cabsCount: 28,
    hotspots: ['Sector 17 Plaza', 'ISBT 43', 'Elante Mall Entry', 'PGI Emergency', 'Railway Station']
  },
  {
    name: 'Airport & Outstation Hub',
    tagline: 'Dedicated Flight Transfers & Highway Highway Rides',
    coverage: ['Shaheed Bhagat Singh Intl Airport (IXC)', 'Delhi NCR Express Route', 'Himachal Tours (Shimla, Manali)', 'Punjab & Haryana Highway Transfers'],
    pickupTime: 'Instant or Scheduled',
    cabsCount: 18,
    hotspots: ['Airport Terminal Pick-up Zone', 'Zirakpur Flyover Junction', 'Kalka-Shimla Expressway Entry']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amanpreet Singh',
    role: 'Senior Software Engineer, IT City Mohali',
    location: 'Kharar to Mohali Phase 8',
    rating: 5,
    comment: 'I take Best Cab Services in Mohali daily from Sunny Enclave Kharar to my office in IT City. Driver arrives strictly within 7 minutes every morning, AC is always on, and the per-km rate is way more transparent than app surges. Saved me thousands every month!',
    tripType: 'Daily Commute',
    verified: true,
    date: '3 days ago'
  },
  {
    id: '2',
    name: 'Dr. Simran Kaur',
    role: 'Resident Doctor, PGIMER',
    location: 'Mohali Sector 70 to PGI Chandigarh',
    rating: 5,
    comment: 'Late night emergency duty shifts require 100% reliable and safe cabs. Best Cab Services in Mohali is my go-to service. The driver was verified, professional, and courteous. Just one WhatsApp text to 98155 05661 and the cab is at my gate.',
    tripType: 'Night Emergency Ride',
    verified: true,
    date: '1 week ago'
  },
  {
    id: '3',
    name: 'Rohit Sharma',
    role: 'Student, Chandigarh University (CU)',
    location: 'CU Kharar to Chandigarh Railway Station',
    rating: 5,
    comment: 'Booked their sedan for my family visiting from Lucknow. Clean car, polite driver who helped with all heavy luggage, and the fare was exactly what was promised. Best taxi service in Kharar!',
    tripType: 'Station Pick & Drop',
    verified: true,
    date: '2 weeks ago'
  },
  {
    id: '4',
    name: 'Jasleen & Vikram Verma',
    role: 'Family Holiday Travelers',
    location: 'Chandigarh to Manali & Rohtang Pass',
    rating: 5,
    comment: 'We hired an Innova Crysta for a 5-day Himachal tour. Our driver was extremely experienced in mountain roads, took us through scenic stops, and handled all toll passes smoothly. Truly trustworthy experience.',
    tripType: 'Outstation Tour (Innova)',
    verified: true,
    date: '3 weeks ago'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I book a cab in Chandigarh, Mohali, or Kharar?',
    answer: 'Booking is ultra-fast and simple! You can either use our instant online booking widget above, send a quick WhatsApp message to 98155 05661, or tap the direct Call button to speak directly with our 24/7 dispatcher. A cab will be assigned within 2 minutes.',
    category: 'Booking'
  },
  {
    question: 'What are your primary service areas?',
    answer: 'We provide comprehensive 24/7 cab services across Chandigarh (all sectors 1 to 70, IT Park, Railway Station, PGI), Mohali (Phases 1-11, Sectors 66-118, IT City, CP67), and Kharar (Sunny Enclave, Chandigarh University, Gillco Valley, Landran Road), as well as Zirakpur and Panchkula.',
    category: 'Booking'
  },
  {
    question: 'Do you charge night surge or hidden peak pricing?',
    answer: 'No! Unlike aggregator apps that increase fares by 2x-3x during peak hours or rainy weather, Best Cab Services in Mohali operates on fair, transparent per-kilometer and fixed route pricing with zero hidden surcharges.',
    category: 'Pricing'
  },
  {
    question: 'Do you provide Chandigarh Airport (IXC) pick-up and drop?',
    answer: 'Yes, we specialize in dedicated on-time airport transfers. You can schedule your pickup in advance with flight number details. Our driver arrives 10 minutes before schedule at your doorstep in Chandigarh, Mohali, or Kharar with zero luggage charges.',
    category: 'Airport'
  },
  {
    question: 'Are your cabs sanitized and air-conditioned?',
    answer: 'Every single cab in our fleet (Hatchback, Sedan, SUV, Innova) comes with 100% functional dual-zone Air Conditioning at no extra charge, and undergoes routine sanitization and safety inspections.',
    category: 'Safety'
  },
  {
    question: 'Can I book outstation cabs to Delhi, Shimla, or Manali?',
    answer: 'Absolutely. We offer one-way drops and round-trip holiday packages to Delhi IGI Airport, Shimla, Kasauli, Manali, Dharamshala, Amritsar, Rishikesh, and throughout North India with verified hill-certified drivers.',
    category: 'Booking'
  },
  {
    question: 'How much does a taxi from Chandigarh to Shimla cost?',
    answer: 'We offer the most competitive and transparent fixed rates for Chandigarh to Shimla taxi service with AC Sedan, Prime SUV, and Innova Crysta. Call our 24/7 booking desk at 98155 05661 for an instant quote with zero hidden charges.',
    category: 'Pricing'
  },
  {
    question: 'What is the travel route and time from Chandigarh to Shimla?',
    answer: 'The distance is approximately 115 km via the modern Himalayan Expressway and NH5 (Parwanoo, Dharampur, Solan bypass, Kandaghat, Taradevi). Total drive time is approximately 3.5 hours, with optional halts at Timber Trail or Giani Da Dhaba.',
    category: 'Booking'
  },
  {
    question: 'Are your drivers trained for Himalayan mountain roads?',
    answer: 'Yes, 100%! All our mountain chauffeurs are background-verified, licensed, and possess 7+ years of experience navigating the curves, tunnels, and hairpins of Himachal Pradesh safely and gently with zero aggressive driving.',
    category: 'Safety'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), Net Banking, and major Debit/Credit Cards. You can pay directly to the driver at the end of the trip or advance for outstation.',
    category: 'Pricing'
  }
];

// Calculation helper for distances and fares
export function calculateEstimatedTrip(
  from: string,
  to: string,
  tripType: 'local' | 'airport' | 'outstation' | 'hourly',
  vehicleId: string
) {
  const vehicle = VEHICLE_FLEET.find(v => v.id === vehicleId) || VEHICLE_FLEET[1]; // default sedan
  
  let distanceKm = 15;
  let durationMins = 25;
  
  const fromLower = from.toLowerCase();
  const toLower = to.toLowerCase();

  const isShimla = toLower.includes('shimla') || fromLower.includes('shimla');
  const isDelhi = toLower.includes('delhi') || fromLower.includes('delhi');
  const isManali = toLower.includes('manali') || fromLower.includes('manali');
  const isAmritsar = toLower.includes('amritsar') || fromLower.includes('amritsar');

  // Outstation checks
  if (isDelhi) {
    distanceKm = 260;
    durationMins = 255;
  } else if (isShimla) {
    distanceKm = 115;
    durationMins = 210;
  } else if (isManali) {
    distanceKm = 290;
    durationMins = 410;
  } else if (isAmritsar) {
    distanceKm = 230;
    durationMins = 240;
  } else if (toLower.includes('airport') || fromLower.includes('airport')) {
    if (fromLower.includes('kharar') || toLower.includes('kharar')) {
      distanceKm = 24;
      durationMins = 35;
    } else {
      distanceKm = 16;
      durationMins = 25;
    }
  } else if (
    (fromLower.includes('kharar') && toLower.includes('chandigarh')) ||
    (fromLower.includes('chandigarh') && toLower.includes('kharar'))
  ) {
    distanceKm = 18;
    durationMins = 30;
  } else if (
    (fromLower.includes('kharar') && toLower.includes('mohali')) ||
    (fromLower.includes('mohali') && toLower.includes('kharar'))
  ) {
    distanceKm = 13;
    durationMins = 20;
  } else if (
    (fromLower.includes('mohali') && toLower.includes('chandigarh')) ||
    (fromLower.includes('chandigarh') && toLower.includes('mohali'))
  ) {
    distanceKm = 11;
    durationMins = 18;
  } else {
    // Standard local commute inside Tricity
    distanceKm = 12;
    durationMins = 20;
  }

  // Calculate fare
  let totalFare = 0;
  if (isShimla) {
    // Fixed competitive all-inclusive outstation package for Shimla
    if (vehicle.id === 'hatchback') totalFare = 2299;
    else if (vehicle.id === 'sedan') totalFare = 2499;
    else if (vehicle.id === 'suv') totalFare = 3899;
    else if (vehicle.id === 'innova') totalFare = 4999;
    else totalFare = 7999;
  } else if (isDelhi) {
    if (vehicle.id === 'hatchback') totalFare = 2799;
    else if (vehicle.id === 'sedan') totalFare = 2999;
    else if (vehicle.id === 'suv') totalFare = 4499;
    else if (vehicle.id === 'innova') totalFare = 5999;
    else totalFare = 9999;
  } else if (tripType === 'hourly') {
    // 8 hr / 80 km package default
    totalFare = vehicle.baseFare * 4 + 80 * vehicle.perKmRate;
    distanceKm = 80;
    durationMins = 480;
  } else {
    const billableKm = Math.max(distanceKm, vehicle.minDistance);
    totalFare = vehicle.baseFare + (billableKm * vehicle.perKmRate);
  }

  // Round off to neat 10s
  totalFare = Math.ceil(totalFare / 10) * 10;

  return {
    distanceKm,
    durationMins,
    estTime: durationMins >= 60 ? `${Math.floor(durationMins / 60)}h ${durationMins % 60}m` : `${durationMins} mins`,
    totalFare,
    baseFare: vehicle.baseFare,
    perKmRate: vehicle.perKmRate,
    vehicle
  };
}

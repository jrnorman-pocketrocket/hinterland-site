// ---------------------------------------------------------------------------
// Hinterland Trailer Hire: the one file to edit.
//
// Add a trailer: copy an entry in `trailers`, change the details, drop photos
// into /public/images, and paste its Lockii product ID into `lockii.productId`.
// The site builds the card, the trailer page and the listings by itself.
//
// Add a location: copy an entry in `locations` and set `page: true` to give it
// its own page (e.g. /locations/beerwah/), which helps local Google searches.
// ---------------------------------------------------------------------------

export const business = {
  name: 'Hinterland Trailer Hire',
  url: 'https://www.hinterlandtrailerhire.com.au',
  phoneDisplay: '0430 095 190',
  phoneIntl: '+61430095190',
  email: 'hinterlandtrailerhireqld@gmail.com',
  region: 'Sunshine Coast Hinterland',
  serviceAreas: ['Landsborough', 'Beerwah', 'Mooloolah Valley', 'Glass House Mountains', 'Maleny', 'Aura'],
  googleReviewsUrl: 'https://www.google.com/search?q=Hinterland+Trailer+Hire+Landsborough',
  facebookUrl: '',
};

// Booking is handled entirely by Lockii (dates, ID check, payment, confirmation).
// companyId: from Lockii > Settings > Website & Embeds (the data-lockii-id in the base script).
// Each trailer also needs its Lockii productId (from the product page URL).
export const booking = {
  companyId: 'tqsfhzn',
  locationId: '',
  paymentNote: 'Pay securely by card when you book.',
};
export const lockiiBrowseUrl = () => (booking.companyId ? `https://lockii.app/${booking.companyId}/browse` : '');
export const lockiiFindUrl = () => (booking.companyId ? `https://lockii.app/${booking.companyId}/find` : '');

// How pickup works. Change `mode` to 'self-serve' once locks and GPS are fitted.
export const pickup = {
  mode: 'staffed' as 'staffed' | 'self-serve',
  staffed: {
    short: 'We meet you at the pickup point, walk you around the trailer and get you hitched.',
    steps: [
      'Bring your physical driver’s licence. We take a quick photo for our records.',
      'We do a walk-around together and take photos before you go.',
      'Return it to the same spot. We check it in and you’re done.',
    ],
  },
  selfServe: {
    short: 'Your access code arrives by text. Collect any time in your booking window.',
    steps: [
      'Verify your ID online when you book.',
      'Use your code to open the lockbox and collect the trailer.',
      'Return it to the same spot and lock it up. Done.',
    ],
  },
};

export type Location = {
  id: string;
  slug: string;
  name: string;
  suburb: string;
  address: string;
  postcode: string;
  mapsQuery: string;
  hours: string;
  page: boolean;
  blurb: string;
};

export const locations: Location[] = [
  {
    id: 'landsborough',
    slug: 'landsborough',
    name: 'Landsborough',
    suburb: 'Landsborough',
    address: 'Corner of Tunnel Ridge Rd and Kowald Rd',
    postcode: '4550',
    mapsQuery: 'Tunnel Ridge Rd and Kowald Rd, Landsborough QLD 4550',
    hours: '6am to 5pm, 7 days',
    page: false,
    blurb: 'Easy access off Tunnel Ridge Rd, a few minutes from Landsborough town, Beerwah and Mooloolah.',
  },
];

export type Trailer = {
  slug: string;
  name: string;
  nickname?: string;
  locationId: string;
  summary: string;
  description: string[];
  goodFor: string[];
  specs: { label: string; value: string }[];
  prices: { label: string; amount: number }[];
  photos: { src: string; alt: string }[];
  lockii: { productId: string };
};

export const trailers: Trailer[] = [
  {
    slug: '8x5-cage-tipper',
    name: '8x5 Cage Tipper Trailer',
    nickname: 'Shiny',
    locationId: 'landsborough',
    summary: 'Galvanised 8x5 with a 600mm cage, rear tailgate and tipping deck. The all-rounder for tip runs and moving jobs.',
    description: [
      'A 2025-built, fully galvanised single-axle trailer from North Coast Trailers in Yandina. The 600mm cage keeps garden waste and bulky loads where they belong, and the rear tailgate and tipping deck make unloading at the tip quick.',
      'Tows behind most sedans, SUVs and utes fitted with a 50mm towball. Check your vehicle’s towing capacity before you book.',
    ],
    goodFor: ['Tip runs and green waste', 'Moving furniture', 'Facebook Marketplace pickups', 'Garden and property cleanups', 'Tools and equipment'],
    specs: [
      { label: 'Internal deck', value: '2.4 x 1.5 m (8 x 5 ft)' },
      { label: 'Cage height', value: '600 mm' },
      { label: 'Max load', value: '350 kg' },
      { label: 'Unloading', value: 'Rear tailgate and tipping deck' },
      { label: 'Build', value: '2025, fully galvanised, single axle' },
      { label: 'Towball', value: '50 mm' },
      { label: 'Plug', value: '7-pin flat' },
      { label: 'Tyre pressure', value: '40 psi' },
    ],
    prices: [
      { label: 'Up to 4 hours', amount: 50 },
      { label: 'Full day', amount: 60 },
    ],
    photos: [
      { src: '/images/trailer-three-quarter', alt: 'Galvanised 8x5 cage tipper trailer with Hinterland Trailer Hire signage' },
      { src: '/images/pickup-corner', alt: 'The trailer at the pickup point on Tunnel Ridge Rd, Landsborough' },
      { src: '/images/trailer-rear', alt: 'Rear tailgate with the Hinterland Trailer Hire sign' },
      { src: '/images/trailer-sticker', alt: 'Close-up of the galvanised mudguard and cage' },
    ],
    lockii: { productId: 'e033d1ff-cc4f-43ab-af6a-83f8ba1ff437' },
  },
];

export const reviews = [
  {
    name: 'Clinton M',
    text: 'Had an amazing experience! Super nice and friendly, easy going and such incredibly priced, and the trailer was top of the line. Couldn’t recommend more!',
  },
];

export const faqs = [
  {
    q: 'How do I book?',
    a: 'Pick your trailer, choose your times and pay online. You’ll get a confirmation straight away with everything you need for pickup.',
  },
  {
    q: 'What do I need to hire a trailer?',
    a: 'A full driver’s licence (bring the physical card), and a vehicle with a 50mm towball and a 7-pin flat plug. If your vehicle has a different plug, bring your own adaptor. Check your vehicle’s towing capacity covers the trailer plus your load.',
  },
  {
    q: 'Is there a bond?',
    a: 'No bond. You pay the hire price and that’s it.',
  },
  {
    q: 'Where do I pick up and return?',
    a: 'At the corner of Tunnel Ridge Rd and Kowald Rd, Landsborough. Return it to the same spot at the end of your hire.',
  },
  {
    q: 'What hours can I hire?',
    a: 'Pickups and returns between 6am and 5pm, 7 days a week.',
  },
  {
    q: 'Can I extend my hire?',
    a: 'Yes, if the trailer isn’t booked after you. Call or text 0430 095 190 as early as you can.',
  },
  {
    q: 'How much can I carry?',
    a: 'Up to 350kg of load. Keep heavier items toward the front, and bring a tarp or net to cover anything that could blow out.',
  },
  {
    q: 'Can I drive with the tailgate down?',
    a: 'No. Never drive with the rear tailgate down, even for a short distance. Close and latch it on both sides before you move. If a load is too long to fit with the tailgate up, it\u2019s too long for this trailer.',
  },
  {
    q: 'What if something goes wrong?',
    a: 'Pull over somewhere safe and call us on 0430 095 190. In an emergency, call 000 first. Our trailers are roadworthy, regularly inspected and insured.',
  },
];

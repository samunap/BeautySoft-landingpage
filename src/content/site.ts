export const nav = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#roles" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const roles = [
  {
    key: "owner",
    title: "Owners run everything in one place",
    bullets: [
      "Smart calendar with staff scheduling",
      "Reduce no-shows with deposits & reminders",
      "Live revenue, utilization & reviews",
    ],
    cta: { label: "Start Free", href: "#cta" },
    icon: "briefcase",
  },
  {
    key: "staff",
    title: "Staff manage their day effortlessly",
    bullets: [
      "Today view & personal schedule",
      "Time-off requests & shift swaps",
      "Auto follow-ups to grow ratings",
    ],
    cta: { label: "Invite your owner", href: "#cta" },
    icon: "users",
  },
  {
    key: "customers",
    title: "Customers book in 10 seconds",
    bullets: [
      "Map search & favorite pros",
      "Instant confirmation & reminders",
      "Cashless payments & receipts",
    ],
    cta: { label: "Join the waitlist", href: "#lead" },
    icon: "heart",
  },
];

export const features = [
  { title: "Map-based Booking", desc: "Be found and booked fast.", icon: "map" },
  { title: "Smart Calendar", desc: "Day, week & staff views.", icon: "calendar" },
  { title: "No-show Protection", desc: "Deposits & reminders.", icon: "shield" },
  { title: "Payments & Invoices", desc: "Take cards, tips, send receipts.", icon: "credit-card" },
  { title: "Staff Requests", desc: "Time off, swaps, approvals.", icon: "clock" },
  { title: "Analytics", desc: "Revenue, utilization, top services.", icon: "bar-chart-3" },
];

export const pricing = [
  { 
    name: "Starter", 
    price: 29, 
    bullets: ["1 location", "Up to 3 staff", "Online bookings", "Reminders", "Reviews"], 
    cta: "Start Free",
    highlighted: false
  },
  { 
    name: "Pro", 
    price: 59, 
    bullets: ["Up to 10 staff", "No-show protection", "Inventory", "Advanced analytics"], 
    cta: "Start Free",
    highlighted: true
  },
  { 
    name: "Business", 
    price: 99, 
    bullets: ["Unlimited staff", "Multi-location", "Priority support", "API access"], 
    cta: "Talk to Sales",
    highlighted: false
  },
];

export const testimonials = [
  {
    quote: "No-shows dropped 35% in month one.",
    author: "Marco",
    role: "Barber",
    location: "Milan",
    avatar: "/avatars/marco.jpg"
  },
  {
    quote: "I finally see who's profitable—and when.",
    author: "Anna",
    role: "Salon Owner",
    location: "Prague",
    avatar: "/avatars/anna.jpg"
  },
  {
    quote: "Booking takes less than a minute.",
    author: "Lucia",
    role: "Customer",
    location: "Rome",
    avatar: "/avatars/lucia.jpg"
  }
];

export const faq = [
  {
    question: "Do I need a website?",
    answer: "No, you get a booking page automatically. BeautySoft provides a professional booking page that your customers can use directly."
  },
  {
    question: "Can I import data from another system?",
    answer: "Yes, via CSV or onboarding support. Our team will help you migrate your existing customer data and appointments seamlessly."
  },
  {
    question: "What about no-shows?",
    answer: "Deposits & auto-reminders built-in. Our system automatically sends reminders and can require deposits to reduce no-shows by up to 35%."
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes, iOS & Android apps for owners, staff, and customers. Everyone gets the tools they need on their preferred device."
  },
  {
    question: "Can staff have separate logins?",
    answer: "Yes, with role-based permissions. Staff can manage their schedules, request time off, and view their earnings while owners maintain full control."
  },
  {
    question: "Is BeautySoft GDPR compliant?",
    answer: "Yes, EU hosting options available. We take data protection seriously and offer European data hosting to ensure full GDPR compliance."
  },
  {
    question: "How much does it cost?",
    answer: "Plans start at €29/month for small salons. All plans include a 14-day free trial with no credit card required."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time from your account settings."
  }
];

export const howItWorks = [
  {
    step: 1,
    title: "Discover",
    description: "Customers find you on the map or through search, see real availability and staff profiles.",
    icon: "search"
  },
  {
    step: 2,
    title: "Book",
    description: "Choose service, time, and preferred staff member. Instant confirmation with calendar sync.",
    icon: "calendar-check"
  },
  {
    step: 3,
    title: "Manage",
    description: "Owners track everything, staff manage their day, customers get reminders and receipts.",
    icon: "settings"
  }
];

export const stats = [
  { label: "Active Salons", value: "500+" },
  { label: "Bookings Made", value: "50K+" },
  { label: "No-show Reduction", value: "35%" },
  { label: "Customer Rating", value: "4.9/5" }
];

export const brands = [
  { name: "TechCrunch", logo: "/logos/techcrunch.svg" },
  { name: "Forbes", logo: "/logos/forbes.svg" },
  { name: "Startup Magazine", logo: "/logos/startup.svg" },
  { name: "Beauty Today", logo: "/logos/beauty.svg" }
];

export const appScreens = [
  { name: "Mappa", image: "/screens/map.png", alt: "Mappa selezione sede" },
  { name: "Prenotazioni", image: "/screens/booking.png", alt: "Prenotazioni" },
  { name: "Staff Dashboard", image: "/screens/staff.png", alt: "Staff Dashboard" },
  { name: "Analitiche", image: "/screens/analytics.png", alt: "Analitiche e statistiche" },
  { name: "Gestione sedi", image: "/screens/timeoff.png", alt: "Gestione sedi" },
];

export const copy = {
  hero: {
    badge: "Disponibile su iOS & Android",
    headline: "Il Software per Parrucchieri e Saloni di Bellezza",
    subline: "Con BeautySoft i titolari gestiscono l’intero salone, lo staff organizza al meglio le giornate e i clienti prenotano in pochi secondi - tutto da un’unica app semplice e intuitiva.",
    primaryCta: "Inizia la Prova Gratuita",
    secondaryCta: "Richiedi una Demo",
    microTrust: "Scelto da saloni in crescita in tutta Europa • Disdici quando vuoi",
    emailPlaceholder: "Inserisci l’email del tuo salone"
  },
  meta: {
    title: "BeautySoft - Prenotazioni, Calendario & Crescita per Parrucchieri e Saloni",
    description: "BeautySoft è una suite completa per parrucchieri e saloni di bellezza che ti aiuta a gestire il tuo salone, fidelizzare i clienti e aumentare i ricavi. Con BeautySoft, i titolari possono gestire l’intero salone, lo staff può organizzare le giornate e i clienti possono prenotare in pochi secondi - tutto da un’unica app semplice e intuitiva.",
    ogImage: "/logo.png"
  }
};


// Color classes for consistent theming
export const colors = {
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    light: 'text-gray-400',
    dark: 'text-gray-900',
    white: 'text-white'
  },
  bg: {
    primary: 'bg-primary-500',
    accent: 'bg-accent-500',
    light: 'bg-gray-50',
    white: 'bg-white',
    dark: 'bg-gray-900'
  }
};

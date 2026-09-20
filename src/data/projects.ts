export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featureBadge: string;
  problem: string;
  keyFeatures: string[];
  highlightFeature: {
    title: string;
    description: string;
  };
  myContribution: string;
};

export const projects: Project[] = [
  {
    id: 'jigsevents',
    title: 'Jigs Events',
    category: 'EVENT MANAGEMENT PLATFORM',
    description: 'An event management and ticketing platform designed to help users discover events, manage event information, and handle ticket-related workflows.',
    featureBadge: 'SCANNER APP',
    technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Razorpay', 'Android'],
    liveUrl: 'https://www.linkedin.com/posts/prem-patel-b60411378_codealpha-internship-react-activity-7467232279572996097-bxdE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF1STjgBdIpKSF-M7pYBpqJyPjK9LeLy2sk',
    githubUrl: '#',
    problem: 'Managing event entry and ticket validation quickly and securely at the door.',
    keyFeatures: [
      'Powerful ticket / QR scanner application',
      'Event management',
      'Ticket verification workflow',
      'Authentication',
      'Backend APIs',
      'Payment integration'
    ],
    highlightFeature: {
      title: 'POWERFUL SCANNER APP',
      description: 'Built to support fast and practical event ticket scanning and verification.'
    },
    myContribution: 'I built the core ticketing workflow, backend APIs, and the powerful scanner app for verifying tickets at the door.'
  },
  {
    id: 'genurl',
    title: 'GenURL',
    category: 'URL SHORTENER',
    description: 'A URL-shortening platform that helps users create and manage shortened links with additional utility features.',
    featureBadge: 'CHROME EXTENSION',
    technologies: ['Python', 'Flask', 'SQLite', 'JavaScript', 'Chrome Extension API'],
    liveUrl: 'https://www.linkedin.com/posts/prem-patel-b60411378_codealpha-webdevelopment-frontenddevelopment-activity-7463208837702074368-idV9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF1STjgBdIpKSF-M7pYBpqJyPjK9LeLy2sk',
    githubUrl: '#',
    problem: 'Streamlining link sharing and tracking without leaving the browser workflow.',
    keyFeatures: [
      'URL shortening',
      'Chrome Extension',
      'Custom aliases',
      'Link management',
      'QR code generation',
      'History management',
      'Developer-focused workflow'
    ],
    highlightFeature: {
      title: 'CHROME EXTENSION',
      description: 'A browser-based workflow for quickly accessing GenURL functionality directly from the active tab.'
    },
    myContribution: 'I developed the URL shortener backend and the companion Chrome extension for rapid link generation.'
  },
  {
    id: 'fitpromixai',
    title: 'FITPROMIXAI',
    category: 'AI / FITNESS PLATFORM',
    description: 'A fitness and nutrition platform focused on personalized workouts, diet planning, and a user-oriented fitness experience.',
    featureBadge: 'AI FITNESS',
    technologies: ['Python', 'Streamlit', 'Web Development', 'Machine Learning'],
    liveUrl: 'https://www.linkedin.com/posts/prem-patel-b60411378_ai-fitnesstech-fullstack-activity-7453837497081466880-JFUZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF1STjgBdIpKSF-M7pYBpqJyPjK9LeLy2sk',
    githubUrl: '#',
    problem: 'Providing personalized, data-driven workout and diet plans in a single accessible interface.',
    keyFeatures: [
      'Personalized fitness experience',
      'Workout planning',
      'Diet / nutrition planning',
      'User profile and signup workflow',
      'Fitness-related recommendations',
      'Modern fitness interface'
    ],
    highlightFeature: {
      title: 'PERSONALIZED RECOMMENDATIONS',
      description: 'Utilizing AI components to deliver tailored fitness and nutrition guidance.'
    },
    myContribution: 'I built the core platform logic and web interface to deliver the personalized fitness plans.'
  },
  {
    id: 'rentx',
    title: 'RentX',
    category: 'RENTAL MANAGEMENT SYSTEM',
    description: 'A rental management application designed to support rental workflows, management, and delivery-related tracking.',
    featureBadge: 'LIVE TRACKING',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL', 'Razorpay'],
    liveUrl: 'https://lnkd.in/p/gUFPfeJx',
    githubUrl: '#',
    problem: 'Managing rental lifecycles, payments, and tracking the delivery status of rented assets.',
    keyFeatures: [
      'Rental management',
      'Live tracking',
      'Delivery tracking',
      'User-related rental workflow',
      'Payment integration with Razorpay',
      'Rental status management',
      'Responsive interface'
    ],
    highlightFeature: {
      title: 'LIVE TRACKING',
      description: 'Track delivery-related movement and status through the RentX tracking experience.'
    },
    myContribution: 'I developed the rental workflows, payment integration, and the tracking interface for asset deliveries.'
  }
];

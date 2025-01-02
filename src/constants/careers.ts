export interface CareerSection {
  id: string;
  title: string;
  description: string;
  media?: {
    type: 'image' | 'video';
    url: string;
  };
  bullets?: string[];
}

export const careerSections: CareerSection[] = [
  {
    id: 'intern-program',
    title: 'Our Intern Program',
    media: {
      type: 'image',
      url: '/assets/careers/intern.jpg'
    },
    description: 'Welcome to our Intern Program, offering a dynamic 3-month opportunity in Quantitative Management. As a Quant Management Trainee, you will immerse yourself in practical, on-the-job training designed to hone your skills and deepen your understanding of quantitative analysis and management principles.',
    bullets: [
      'Hands-on experience with industry experts',
      'Mentorship from senior professionals',
      'Real-world project exposure',
      'Career development opportunities'
    ]
  },
  {
    id: 'culture',
    title: 'Our Culture',
    media: {
      type: 'video',
      url: '/assets/careers/culture.mp4'
    },
    description: 'At Algoritt is the heartbeat of our organization, defined by a commitment to excellence, innovation, and inclusivity. It\'s a place where collaboration thrives, ideas are valued, and every voice is heard.',
  },
  {
    id: 'leadership',
    title: 'Our Leadership',
    media: {
      type: 'video',
      url: '/assets/careers/leadership.mp4'
    },
    description: 'Our leadership is built on a foundation of vision, integrity, and empowerment. Our leadership team consists of professionals who guide the organization with a commitment to innovation, excellence, and sustainable growth.',
  },
  {
    id: 'network',
    title: 'Our Network',
    media: {
      type: 'video',
      url: '/assets/careers/network.mp4'
    },
    description: 'Our Network in business consulting is anchored in expertise and specialization in risk management. At Algoritt, we pride ourselves on a robust network of professionals dedicated to navigating the complexities of risk with precision and foresight.',
  },
]

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  openings: number;
}

export const openPositions: JobPosition[] = [
  {
    id: 'senior-frontend-developer',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    openings: 2,
    description: 'We are looking for a Senior Frontend Developer to join our team and help build the next generation of our products.',
    requirements: [
      '5+ years of experience with modern JavaScript frameworks (React, Next.js)',
      'Strong understanding of web performance optimization',
      'Experience with TypeScript and modern CSS frameworks',
      'Excellent problem-solving skills and attention to detail',
    ],
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    openings: 3,
    description: 'Join our backend team to build scalable and reliable systems that power our applications.',
    requirements: [
      '3+ years of experience in backend development',
      'Strong knowledge of Node.js and TypeScript',
      'Experience with databases and API design',
      'Understanding of cloud infrastructure and microservices',
    ],
  },
  {
    id: 'quant-analyst',
    title: 'Quantitative Analyst',
    department: 'Analytics',
    location: 'London, UK',
    type: 'Full-time',
    openings: 1,
    description: 'Join our quantitative analytics team to develop and implement sophisticated mathematical models and strategies for financial markets.',
    requirements: [
      'Masters or PhD in Mathematics, Physics, Computer Science, or related field',
      'Strong programming skills in Python and R',
      'Experience with statistical modeling and machine learning',
      'Knowledge of financial markets and derivatives',
      'Excellent analytical and problem-solving skills',
    ],
  },
  {
    id: 'quant-management-trainee',
    title: 'Quantitative Management Trainee',
    department: 'Analytics',
    location: 'Warsaw, Poland',
    type: 'Full-time',
    openings: 5,
    description: 'An exciting opportunity for graduates to join our 12-month rotational program, gaining hands-on experience in quantitative analysis and management.',
    requirements: [
      'Recent graduate with a degree in Mathematics, Statistics, or related field',
      'Strong analytical and quantitative skills',
      'Programming experience in Python or R',
      'Excellent communication and teamwork abilities',
      'Eagerness to learn and grow in a fast-paced environment',
    ],
  },
  {
    id: 'business-development-associate',
    title: 'Business Development Associate',
    department: 'Sales',
    location: 'New York, USA',
    type: 'Full-time',
    openings: 2,
    description: 'Drive business growth by identifying and pursuing new opportunities, developing client relationships, and expanding our market presence.',
    requirements: [
      '3+ years of experience in business development or sales',
      'Strong network in the financial services industry',
      'Excellent presentation and negotiation skills',
      'Track record of closing enterprise deals',
      'Understanding of quantitative trading and financial markets',
    ],
  },
  {
    id: 'hr-manager',
    title: 'HR Manager',
    department: 'Human Resources',
    location: 'Prague, Czech Republic',
    type: 'Full-time',
    openings: 1,
    description: 'Lead our HR initiatives, focusing on talent acquisition, employee development, and maintaining a positive company culture across our global offices.',
    requirements: [
      '5+ years of HR management experience',
      'Experience in international recruitment and talent management',
      'Strong knowledge of HR best practices and employment laws',
      'Excellent interpersonal and communication skills',
      'Experience with HRIS systems and HR analytics',
    ],
  },
  {
    id: 'hr-specialist',
    title: 'HR Specialist',
    department: 'Human Resources',
    location: 'Bangalore, India',
    type: 'Full-time',
    openings: 2,
    description: 'Support our growing team by managing recruitment processes, employee relations, and HR operations in our India office.',
    requirements: [
      '3+ years of HR experience',
      'Strong understanding of Indian labor laws and HR practices',
      'Experience with full-cycle recruitment',
      'Excellent documentation and organizational skills',
      'Strong interpersonal and communication abilities',
    ],
  },
] 
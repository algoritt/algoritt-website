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
}

export const openPositions: JobPosition[] = [
  {
    id: 'senior-frontend-developer',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
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
    description: 'Join our backend team to build scalable and reliable systems that power our applications.',
    requirements: [
      '3+ years of experience in backend development',
      'Strong knowledge of Node.js and TypeScript',
      'Experience with databases and API design',
      'Understanding of cloud infrastructure and microservices',
    ],
  },
] 
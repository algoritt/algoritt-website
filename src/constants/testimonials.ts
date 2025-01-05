export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marvin',
    role: 'Managing Director',
    company: 'Global Investment Bank',
    rating: 5,
    service: 'Risk Management',
    testimonial: 'Working with Algoritt for our model validation and documentation has transformed our risk management approach. Their expertise in validating critical pricing and XVA models has significantly enhanced our risk assessment capabilities. The team\'s professionalism and deep knowledge have made them an invaluable partner in our risk management journey.',
  },
  {
    id: '2',
    name: 'Sarah',
    role: 'Chief Compliance Officer',
    company: 'European Financial Services',
    rating: 5,
    service: 'Compliance & Governance',
    testimonial: 'Algoritt\'s compliance solutions have revolutionized how we handle regulatory requirements. Their AML/KYC implementation and transaction monitoring systems have significantly improved our compliance framework. The team\'s understanding of regulatory landscapes and ability to deliver tailored solutions sets them apart.',
  },
  {
    id: '3',
    name: 'Michael',
    role: 'Head of Analytics',
    company: 'Fortune 500 Corporation',
    rating: 5,
    service: 'Data Analytics & AI',
    testimonial: 'The data analytics and AI solutions provided by Algoritt have given us unprecedented insights into our operations. Their advanced analytics models and visualization tools have helped us make data-driven decisions with confidence. The ROI we\'ve seen from their solutions has been exceptional.',
  },
  {
    id: '4',
    name: 'Elena',
    role: 'ESG Director',
    company: 'Global Asset Management',
    rating: 5,
    service: 'Sustainability & ESG',
    testimonial: 'Algoritt has been instrumental in advancing our ESG initiatives. Their comprehensive approach to climate risk assessment and ESG reporting has helped us meet evolving regulatory requirements while driving sustainable growth. Their expertise in integrating ESG factors into our strategy has been invaluable.',
  },
  {
    id: '5',
    name: 'David',
    role: 'Chief Risk Officer',
    company: 'Leading Insurance Group',
    rating: 5,
    service: 'Risk Management',
    testimonial: 'The model governance framework implemented by Algoritt has strengthened our risk management infrastructure. Their ability to combine regulatory compliance with operational efficiency has helped us build a more resilient risk management system. Their team\'s expertise and commitment to excellence are truly outstanding.',
  }
];

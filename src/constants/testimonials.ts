export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mark Ramirez',
    role: 'Owner',
    company: "Luna's Inc",
    rating: 5,
    testimonial: 'Their team took our wellness brand and elevated it to new heights with their thoughtful designs and strategic branding, they\'ve helped us create a cohesive and compelling brand identity.',
  },
  {
    id: '2',
    name: 'Thomas Gala',
    role: 'Founder',
    company: 'Zentech Wellness',
    rating: 4,
    testimonial: 'As a fellow creative professional, I have high standards when it comes to design. Kelola not only met but exceeded those standards, Kelola also optimized it for a seamless user experience.',
  },
  {
    id: '3',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechForward Solutions',
    rating: 5,
    testimonial: 'The development team at Algoritt transformed our digital presence completely. Their technical expertise and attention to detail resulted in a platform that exceeded our expectations.',
  },
  {
    id: '4',
    name: 'Michael Brooks',
    role: 'CEO',
    company: 'InnovateTech',
    rating: 5,
    testimonial: 'Working with Algoritt has been transformative for our business. Their innovative solutions and dedicated team have helped us achieve our digital transformation goals ahead of schedule.',
  }
];

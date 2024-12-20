export interface USP {
  id: string;
  title: string;
  description: string;
  icon: string;
  stats?: {
    value: string;
    label: string;
  };
}

export const usps: USP[] = [
  {
    id: 'expertise',
    title: 'Deep Technical Expertise',
    description: 'Our team comprises industry veterans with decades of combined experience in cutting-edge technologies.',
    icon: '/assets/icons/expertise.svg',
    stats: {
      value: '15+',
      label: 'Years Experience'
    }
  },
  {
    id: 'innovation',
    title: 'Culture of Innovation',
    description: 'We stay ahead of the curve by continuously exploring and implementing emerging technologies.',
    icon: '/assets/icons/innovation.svg',
    stats: {
      value: '50+',
      label: 'Innovation Projects'
    }
  },
  {
    id: 'agile',
    title: 'Agile Methodology',
    description: 'Our iterative approach ensures rapid development while maintaining flexibility to adapt to changing needs.',
    icon: '/assets/icons/agile.svg',
    stats: {
      value: '2x',
      label: 'Faster Delivery'
    }
  },
  {
    id: 'quality',
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure delivery of robust and reliable solutions.',
    icon: '/assets/icons/quality.svg',
    stats: {
      value: '99.9%',
      label: 'Client Satisfaction'
    }
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Round-the-clock technical support ensures your systems run smoothly at all times.',
    icon: '/assets/icons/support.svg',
    stats: {
      value: '24/7',
      label: 'Support Available'
    }
  },
  {
    id: 'customization',
    title: 'Tailored Solutions',
    description: 'We create custom solutions that perfectly align with your unique business requirements.',
    icon: '/assets/icons/customization.svg',
    stats: {
      value: '100%',
      label: 'Custom Built'
    }
  }
];

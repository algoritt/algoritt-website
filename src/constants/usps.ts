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
    id: 'advanced-analytics',
    title: 'Advanced Analytics',
    description: 'Leveraging advanced analytics and cutting-edge technologies, we provide actionable insights that empower informed decision-making and drive sustainable growth.',
    icon: '/assets/icons/analytics.svg',
    stats: {
      value: '1000+',
      label: 'Analytics Models'
    }
  },
  {
    id: 'domain-expertise',
    title: 'Domain Expertise',
    description: 'We bring deep domain knowledge and a proven track record in diverse sectors, enabling us to deliver tailored, high-impact solutions for your unique challenges.',
    icon: '/assets/icons/expertise.svg',
    stats: {
      value: '10+',
      label: 'Industries Served'
    }
  },
  {
    id: 'tailored-solutions',
    title: 'Tailored Approach',
    description: 'We understand that each organization is unique. Our solutions are tailored specifically to your needs, ensuring optimal results and measurable success.',
    icon: '/assets/icons/customization.svg',
    stats: {
      value: '100%',
      label: 'Custom Solutions'
    }
  },
  {
    id: 'strategic-partnership',
    title: 'Strategic Partnership',
    description: 'We build strategic partnerships with our clients, working closely with your team to ensure alignment, accountability, and high performance.',
    icon: '/assets/icons/innovation.svg',
    stats: {
      value: '95%',
      label: 'Client Retention'
    }
  },
  {
    id: 'innovation-focus',
    title: 'Innovation & Value',
    description: 'Our focus is on delivering lasting value through innovation, resilience, and optimization, helping you navigate market complexities and achieve long-term success.',
    icon: '/assets/icons/quality.svg',
    stats: {
      value: '500+',
      label: 'Projects Delivered'
    }
  }
];

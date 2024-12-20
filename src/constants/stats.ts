export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
}

export const stats: Stat[] = [
  {
    id: 'clients',
    value: '150',
    label: 'Active Clients',
    description: 'Trusted by businesses worldwide',
    suffix: '+'
  },
  {
    id: 'projects',
    value: '500',
    label: 'Projects Delivered',
    description: 'Across various industries',
    suffix: '+'
  },
  {
    id: 'technologies',
    value: '25',
    label: 'Technologies',
    description: 'Cutting-edge tech stack',
    suffix: '+'
  },
  {
    id: 'satisfaction',
    value: '98',
    label: 'Client Satisfaction',
    description: 'Based on client feedback',
    suffix: '%'
  }
];

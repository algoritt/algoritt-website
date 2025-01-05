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
    value: '12',
    label: 'Clients with Active Engagements',
    description: 'Global partnerships across industries',
    suffix: '+'
  },
  {
    id: 'models',
    value: '700',
    label: 'Models Developed/Validated',
    description: 'Advanced solutions implemented',
    suffix: '+'
  },
  {
    id: 'technologies',
    value: '15',
    label: 'Technologies Supported',
    description: 'Cutting-edge tech expertise',
    suffix: '+'
  },
  {
    id: 'satisfaction',
    value: '98',
    label: 'Client Satisfaction Rate',
    description: 'Consistent service excellence',
    suffix: '%'
  }
];

export interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const services: Service[] = [
    {
        id: 'risk-management',
        title: 'Risk Management',
        description: 'Comprehensive risk assessment and mitigation strategies to protect your business interests and ensure sustainable growth.',
        imageUrl: '/assets/services/risk-management.jpg'
    },
    {
        id: 'compliance-governance',
        title: 'Compliance and Governance',
        description: 'Ensure regulatory compliance and implement robust governance frameworks tailored to your industry requirements.',
        imageUrl: '/assets/services/compliance.jpg'
    },
    {
        id: 'sustainability',
        title: 'Sustainability',
        description: 'Develop and implement sustainable business practices that drive long-term value while minimizing environmental impact.',
        imageUrl: '/assets/services/sustainability.jpg'
    },
    {
        id: 'data-analytics-ai',
        title: 'Data Analytics & AI',
        description: 'Leverage advanced analytics and artificial intelligence to unlock insights and drive data-informed decision making.',
        imageUrl: '/assets/services/analytics.jpg'
    }
];

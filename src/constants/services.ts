export interface SubService {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name
}

export interface Service {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    media: {
        type: 'image' | 'video';
        url: string;
    };
    subServices: SubService[];
}

export const services: Service[] = [
    {
        id: 'risk-management',
        title: 'Risk Management',
        description: 'Comprehensive risk assessment and management solutions for modern businesses.',
        longDescription: 'Our risk management solutions combine advanced analytics with industry expertise to help organizations identify, assess, and mitigate risks effectively. We provide end-to-end risk management services tailored to your specific needs.',
        media: {
            type: 'image',
            url: '/assets/services/risk-management.jpg'
        },
        subServices: [
            {
                id: 'market-risk',
                title: 'Market Risk Analysis',
                description: 'Advanced analytics to assess and manage market-related risks.',
                icon: 'LineChart'
            },
            {
                id: 'operational-risk',
                title: 'Operational Risk',
                description: 'Comprehensive assessment of operational risks and mitigation strategies.',
                icon: 'Settings'
            },
            {
                id: 'credit-risk',
                title: 'Credit Risk Management',
                description: 'Evaluate and manage credit risks with sophisticated models.',
                icon: 'CircleDollarSign'
            },
            {
                id: 'risk-reporting',
                title: 'Risk Reporting',
                description: 'Detailed risk analysis reports and dashboards.',
                icon: 'FileText'
            }
        ]
    },
    {
        id: 'compliance-governance',
        title: 'Compliance & Governance',
        description: 'Advanced mathematical and statistical analysis for data-driven decisions.',
        longDescription: 'Our quantitative analysis services leverage cutting-edge mathematical models and statistical techniques to provide deep insights and support data-driven decision-making processes.',
        media: {
            type: 'image',
            url: '/assets/services/compliance-governance.jpg'
        },
        subServices: [
            {
                id: 'compliance-management',
                title: 'Compliance Management',
                description: 'Build and implement statistical models for business insights.',
                icon: 'Network'
            },
            {
                id: 'compliance-reporting',
                title: 'Compliance Reporting',
                description: 'Optimize investment portfolios using advanced algorithms.',
                icon: 'TrendingUp'
            },
            {
                id: 'compliance-training',
                title: 'Compliance Training',
                description: 'Analyze temporal data patterns for forecasting.',
                icon: 'Clock'
            },
            {
                id: 'compliance-automation',
                title: 'Compliance Automation',
                description: 'Develop and deploy ML models for prediction.',
                icon: 'Brain'
            }
        ]
    },
    {
        id: 'data-analytics-ai',
        title: 'Data Analytics & AI',
        description: 'Expert guidance and solutions for business transformation.',
        longDescription: 'Our consulting services provide strategic guidance and practical solutions to help organizations navigate complex challenges and achieve their business objectives.',
        media: {
            type: 'image',
            url: '/assets/services/data-analytics-ai.jpg'
        },
        subServices: [
            {
                id: 'data-analytics',
                title: 'Data Analytics',
                description: 'Develop effective business strategies for growth.',
                icon: 'Target'
            },
            {
                id: 'ai-solutions',
                title: 'AI Solutions',
                description: 'Guide organizations through digital evolution.',
                icon: 'Laptop'
            },
            {
                id: 'process-optimization',
                title: 'Process Optimization',
                description: 'Streamline operations for maximum efficiency.',
                icon: 'Settings2'
            },
            {
                id: 'change-management',
                title: 'Change Management',
                description: 'Manage organizational change effectively.',
                icon: 'RefreshCw'
            }
        ]
    },
    {
        id: 'sustainability-and-esg',
        title: 'Sustainability and ESG',
        description: 'Cutting-edge technology implementation and integration services.',
        longDescription: 'We deliver innovative technology solutions that help businesses modernize their operations, enhance efficiency, and stay competitive in the digital age.',
        media: {
            type: 'image',
            url: '/assets/services/sustainability-and-esg.jpg'
        },
        subServices: [
            {
                id: 'sustainability-management',
                title: 'Sustainability Management',
                description: 'Develop and implement comprehensive sustainability strategies aligned with your business goals.',
                icon: 'Leaf'
            },
            {
                id: 'esg-reporting',
                title: 'ESG Reporting',
                description: 'Create detailed Environmental, Social, and Governance reports that meet global standards.',
                icon: 'BarChart'
            },
            {
                id: 'sustainability-automation',
                title: 'Sustainability Automation',
                description: 'Streamline sustainability processes with automated data collection and monitoring systems.',
                icon: 'Settings'
            },
            {
                id: 'sustainability-reporting',
                title: 'Sustainability Reporting',
                description: 'Generate comprehensive sustainability reports with actionable insights and recommendations.',
                icon: 'FileText'
            }
        ]
    }
]

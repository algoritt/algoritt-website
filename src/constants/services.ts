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
            type: 'video',
            url: '/assets/services/risk-management.mp4'
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
        id: 'quantitative-analysis',
        title: 'Quantitative Analysis',
        description: 'Advanced mathematical and statistical analysis for data-driven decisions.',
        longDescription: 'Our quantitative analysis services leverage cutting-edge mathematical models and statistical techniques to provide deep insights and support data-driven decision-making processes.',
        media: {
            type: 'video',
            url: '/assets/services/quant-analysis.mp4'
        },
        subServices: [
            {
                id: 'statistical-modeling',
                title: 'Statistical Modeling',
                description: 'Build and implement statistical models for business insights.',
                icon: 'Network'
            },
            {
                id: 'portfolio-optimization',
                title: 'Portfolio Optimization',
                description: 'Optimize investment portfolios using advanced algorithms.',
                icon: 'TrendingUp'
            },
            {
                id: 'time-series-analysis',
                title: 'Time Series Analysis',
                description: 'Analyze temporal data patterns for forecasting.',
                icon: 'Clock'
            },
            {
                id: 'machine-learning',
                title: 'Machine Learning Models',
                description: 'Develop and deploy ML models for prediction.',
                icon: 'Brain'
            }
        ]
    },
    {
        id: 'consulting-services',
        title: 'Consulting Services',
        description: 'Expert guidance and solutions for business transformation.',
        longDescription: 'Our consulting services provide strategic guidance and practical solutions to help organizations navigate complex challenges and achieve their business objectives.',
        media: {
            type: 'video',
            url: '/assets/services/consulting.mp4'
        },
        subServices: [
            {
                id: 'strategy-consulting',
                title: 'Strategy Consulting',
                description: 'Develop effective business strategies for growth.',
                icon: 'Target'
            },
            {
                id: 'digital-transformation',
                title: 'Digital Transformation',
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
        id: 'technology-solutions',
        title: 'Technology Solutions',
        description: 'Cutting-edge technology implementation and integration services.',
        longDescription: 'We deliver innovative technology solutions that help businesses modernize their operations, enhance efficiency, and stay competitive in the digital age.',
        media: {
            type: 'video',
            url: '/assets/services/technology.mp4'
        },
        subServices: [
            {
                id: 'cloud-solutions',
                title: 'Cloud Solutions',
                description: 'Implement and manage cloud infrastructure.',
                icon: 'Cloud'
            },
            {
                id: 'data-analytics',
                title: 'Data Analytics',
                description: 'Transform data into actionable insights.',
                icon: 'BarChart'
            },
            {
                id: 'cybersecurity',
                title: 'Cybersecurity',
                description: 'Protect assets with advanced security solutions.',
                icon: 'Shield'
            },
            {
                id: 'api-integration',
                title: 'API Integration',
                description: 'Seamless integration of systems and services.',
                icon: 'Connection'
            }
        ]
    }
]

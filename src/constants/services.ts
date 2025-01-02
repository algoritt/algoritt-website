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
    subServices: {
        id: string;
        title: string;
        description: string;
        icon: string;
    }[];
    process?: {
        title: string;
        description: string;
    }[];
    benefits?: {
        title: string;
        description: string;
    }[];
}

export const services: Service[] = [
    {
        id: 'risk-management',
        title: 'Risk Management',
        description: 'Mitigating Risks, Maximizing Confidence',
        longDescription: 'At the heart of effective risk management is a robust model that offers predictive power and strategic foresight. Our Model Development & Documentation services focus on the development of risk models for credit risk, market risk, operational risk, and pricing, combining precision, reliability, and compliance with industry standards.',
        media: {
            type: 'image',
            url: '/assets/services/risk-management.jpg'
        },
        subServices: [
            {
                id: 'model-development',
                title: 'Model Development & Documentation',
                description: 'At the heart of effective risk management is a robust model that offers predictive power and strategic foresight. Our Model Development & Documentation services focus on the development of risk models for credit risk, market risk, operational risk, and pricing, combining precision, reliability, and compliance.',
                icon: 'Code'
            },
            {
                id: 'model-validation',
                title: 'Model Validation',
                description: 'Ensuring your models are built to perform effective risk management starts with robust model validation. Our Model Validation services provide a thorough review and evaluation of your models, ensuring they are accurate, compliant, and reliable. Whether you\'re validating a new model or conducting a periodic review, our team ensures your models meet the highest standards.',
                icon: 'CheckCircle'
            },
            {
                id: 'model-performance',
                title: 'Model Performance Monitoring',
                description: 'Keeping your models in peak condition requires regular performance monitoring to ensure they continue to operate efficiently under changing conditions. Our Model Performance Monitoring services are designed to keep your models aligned with business objectives and regulatory requirements through rigorous performance testing and continuous evaluation.',
                icon: 'LineChart'
            },
            {
                id: 'model-governance',
                title: 'Model Governance',
                description: 'Building governance that powers long-term success. Effective governance is the backbone of any successful risk management strategy. Our Model Governance services are designed to provide structure, transparency, and accountability to your organization\'s model ecosystem, helping you navigate the complexities of regulatory change while ensuring sustainable growth.',
                icon: 'Shield'
            }
        ]
    },
    {
        id: 'compliance-governance',
        title: 'Compliance & Governance',
        description: 'Navigating Complexity with Confidence: Comprehensive Compliance Solutions for Regulatory Excellence',
        longDescription: 'Our comprehensive compliance and governance solutions help organizations navigate complex regulatory landscapes while maintaining operational efficiency. We combine industry expertise with cutting-edge technology to deliver robust compliance frameworks that protect and empower your business.',
        media: {
            type: 'image',
            url: '/assets/services/compliance-governance.jpg'
        },
        subServices: [
            {
                id: 'customer-segmentation',
                title: 'Customer Segmentation and Risk Rating',
                description: 'At Algoritt, we provide expert Customer Segmentation and Risk Rating services to empower organizations in understanding and effectively managing their customer risk profiles. Utilizing a data-driven approach, we help businesses segment their customer base, based on critical factors such as transaction behavior, geographical location, and other risk indicators.',
                icon: 'Users'
            },
            {
                id: 'aml-kyc',
                title: 'AML/KYC Solutions',
                description: 'We specialize in delivering end-to-end AML/KYC solutions that enable organizations to navigate the intricacies of regulatory compliance seamlessly. Our bespoke approach ensures streamlined customer onboarding, sophisticated risk assessments, continuous transaction monitoring, and unwavering adherence to global regulatory frameworks.',
                icon: 'Shield'
            },
            {
                id: 'trade-surveillance',
                title: 'Trade Surveillance',
                description: 'Our Trade Surveillance offerings empower organizations in detecting, preventing, and mitigating the risks of market abuse and regulatory non-compliance. Our solutions are underpinned by advanced AI and machine learning capabilities, enabling comprehensive monitoring of trading activities, real-time anomaly detection, and robust adherence to regulatory requirements.',
                icon: 'LineChart'
            },
            {
                id: 'monitoring-assurance',
                title: 'Monitoring and Assurance',
                description: 'We offer tailored Monitoring and Assurance Services designed to ensure your business\'s operational excellence, compliance, and risk mitigation across all facets of its operations. Our comprehensive services include continuous monitoring, performance assessments, and the development of assurance frameworks that are specifically aligned with industry standards.',
                icon: 'Activity'
            },
            {
                id: 'transaction-monitoring',
                title: 'Transaction Monitoring',
                description: 'We provide Transaction Monitoring solutions to help organizations detect, prevent, and mitigate financial crime risks, including money laundering and fraud. Our advanced systems, powered by data analytics and real-time surveillance, ensure a comprehensive approach to risk assessment and compliance with global standards like AML, FATF, and other regulatory requirements.',
                icon: 'BarChart2'
            }
        ]
    },
    {
        id: 'data-analytics-ai',
        title: 'Data Analytics & AI',
        description: 'Insight-Driven Decisions, Future-Ready Intelligence',
        longDescription: 'We empower organizations with advanced analytics and artificial intelligence solutions to transform data into actionable insights. Our comprehensive approach combines cutting-edge technology with domain expertise to deliver sustainable value and competitive advantage.',
        media: {
            type: 'image',
            url: '/assets/services/data-analytics-ai.jpg'
        },
        subServices: [
            {
                id: 'data-collection-engineering',
                title: 'Data Collection & Data Engineering',
                description: 'Unlocking the full potential of AI and advanced analytics hinges on a robust data foundation. Transforming raw data into actionable insights is essential for driving real-time decisions and maximizing value. Our data engineering services ensure your data infrastructure is scalable, reliable, and optimized for advanced analytics.',
                icon: 'Database'
            },
            {
                id: 'data-visualization',
                title: 'Data Visualization',
                description: 'Our Data Visualization consulting services enable clients to convert complex datasets into strategic business insights. We apply advanced analytics methodologies to design and deploy bespoke dashboards and real-time reporting solutions, leveraging industry-leading platforms like Power BI and Tableau.',
                icon: 'BarChart'
            },
            {
                id: 'cloud-services',
                title: 'Cloud Services',
                description: 'Our Cloud Services consulting leverages the full potential of cloud computing to optimize financial operations and drive digital transformation. Our team of cloud architects works closely with clients to design and implement comprehensive enterprise cloud strategies, ensuring seamless migration, integration, and continuous support across platforms.',
                icon: 'Cloud'
            },
            {
                id: 'data-security-privacy',
                title: 'Data Security & Privacy Analytics',
                description: 'Our Data Security & Privacy Analytics services deliver a robust framework for protecting financial data and ensuring compliance in a dynamic regulatory environment. Through advanced anomaly detection models and predictive analytics, we proactively identify and mitigate potential security breaches, fraud, and operational inefficiencies.',
                icon: 'Shield'
            }
        ]
    },
    {
        id: 'sustainability-and-esg',
        title: 'Sustainability & ESG',
        description: 'Preparing for the Future: Holistic Strategies to Manage and Mitigate Climate Change Risks for Long-Term Sustainability',
        longDescription: 'We help organizations navigate the complexities of environmental, social, and governance challenges while building sustainable business practices. Our comprehensive approach integrates ESG considerations into core business strategies, ensuring long-term resilience and compliance with evolving regulatory requirements.',
        media: {
            type: 'image',
            url: '/assets/services/sustainability-and-esg.jpg'
        },
        subServices: [
            {
                id: 'climate-risk-resilience',
                title: 'Climate Risk and Resilience Strategies',
                description: 'With climate change posing significant financial and operational risks, organizations must develop strategies to mitigate and adapt to its effects. We offer expertise in assessing climate-related risks, creating climate resilience plans, and identifying opportunities for carbon reduction. Our team helps businesses integrate climate considerations into their risk management framework.',
                icon: 'Cloud'
            },
            {
                id: 'esg-risk-management',
                title: 'ESG Risk Management',
                description: 'We help businesses identify and mitigate key ESG risks, such as environmental impacts, supply chain disruptions, and governance failures. Our approach integrates sustainable practices into business strategies, ensuring companies can adapt to climate-related challenges and regulatory changes. We assist in evaluating environmental risks, managing sustainability initiatives, and implementing robust governance frameworks.',
                icon: 'Shield'
            },
            {
                id: 'sustainability-strategy',
                title: 'Sustainability Strategy Development',
                description: 'We work with organizations to build robust sustainability strategies that align with their business objectives and market demands. Whether you\'re in the early stages of adopting ESG principles or looking to enhance your existing framework, we provide the insights and strategies needed to integrate ESG factors into your core business practices.',
                icon: 'Leaf'
            },
            {
                id: 'esg-reporting',
                title: 'ESG Reporting and Compliance',
                description: 'As global regulatory standards evolve, businesses must ensure they comply with the latest ESG reporting requirements. Our consultants help clients navigate complex regulations such as the EU Taxonomy, SFDR, and TCFD. We support the creation of comprehensive, transparent ESG reports that communicate your sustainability efforts to investors and stakeholders.',
                icon: 'FileText'
            }
        ]
    }
]

export interface CareerSection {
  id: string;
  title: string;
  description: string;
  media?: {
    type: 'image' | 'video';
    url: string;
  };
  bullets?: string[];
}

export const careerSections: CareerSection[] = [
  {
    id: 'intern-program',
    title: 'Our Intern Program',
    media: {
      type: 'image',
      url: '/assets/careers/intern.jpg'
    },
    description: 'Welcome to our Intern Program, offering a dynamic 6-month opportunity in Quantitative Management. As a Quant Management Trainee, you will immerse yourself in practical, on-the-job training designed to hone your skills and deepen your understanding of quantitative analysis and management principles.',
    bullets: [
      'Hands-on experience with industry experts',
      'Mentorship from senior professionals',
      'Real-world project exposure',
      'Career development opportunities'
    ]
  },
  {
    id: 'culture',
    title: 'Our Culture',
    media: {
      type: 'video',
      url: '/assets/careers/culture.mp4'
    },
    description: 'At Algoritt is the heartbeat of our organization, defined by a commitment to excellence, innovation, and inclusivity. It\'s a place where collaboration thrives, ideas are valued, and every voice is heard.',
  },
  {
    id: 'leadership',
    title: 'Our Leadership',
    media: {
      type: 'video',
      url: '/assets/careers/leadership.mp4'
    },
    description: 'Our leadership is built on a foundation of vision, integrity, and empowerment. Our leadership team consists of professionals who guide the organization with a commitment to innovation, excellence, and sustainable growth.',
  },
  {
    id: 'network',
    title: 'Our Network',
    media: {
      type: 'video',
      url: '/assets/careers/network.mp4'
    },
    description: 'Our Network in business consulting is anchored in expertise and specialization in risk management. At Algoritt, we pride ourselves on a robust network of professionals dedicated to navigating the complexities of risk with precision and foresight.',
  },
]

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  workMode: 'Office' | 'Remote' | 'Hybrid';
  type: string;
  roleOverview: string;
  keyResponsibilities: string[];
  requirements: {
    education?: string[];
    experience?: string[];
    technical?: string[];
    soft?: string[];
  };
  openings: number;
}

export const openPositions: JobPosition[] = [
  {
    id: 'senior-consultant-corporate-sustainability',
    title: 'Senior Consultant - Corporate Sustainability & Climate Change',
    department: 'Consulting',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 2,
    roleOverview: 'Algoritt Consulting is seeking an experienced Sustainability Consultant with expertise in ESG reporting, climate risk analysis, and corporate ESG disclosures. The ideal candidate will have a strong background in sustainability, environment, or economics, coupled with certifications in ESG or climate studies. With 3+ years of experience, preferably in consulting, the candidate will contribute to impactful projects focused on corporate ESG data analysis, KPI monitoring, and decarbonization strategies.',
    keyResponsibilities: [
      'Lead ESG advisory projects from inception to delivery, including strategic direction and team coordination',
      'Collaborate with project managers to plan and execute projects, ensuring client satisfaction and successful outcomes',
      'Develop and present comprehensive analyses, conclusions, and deliverables, including written reports, metrics, and insights',
      'Execute multi-disciplinary projects across various aspects of sustainability platforms in a collaborative manner',
      'Ensure quality deliverables aligned with client objectives and maintain high levels of client satisfaction through effective communication and engagement',
      'Stay updated on ESG concepts, methodologies, and best practices, and share insights with the team to foster continuous improvement'
    ],
    requirements: {
      education: [
        "Master's degree in Sustainability, Environment, Economics, or a related field",
        'Certifications in ESG, climate studies, MRV, or risk analysis are highly desirable'
      ],
      experience: [
        'Minimum of 3 years of relevant experience in the sustainability space, preferably within a consulting role',
        'Hands-on experience in corporate ESG disclosures (e.g., SR, IR), ESG data analysis, and KPI monitoring',
        'Experience with climate risk analysis and developing decarbonization strategies is preferred'
      ],
      technical: [
        'Strong knowledge of ESG reporting frameworks, including GRI, SASB, DJSI/S&P, CDP, BRSR, TCFD, and UNPRI',
        'Advanced proficiency in MS Excel; data science skills are a plus'
      ],
      soft: [
        'Strong written and verbal communication skills in English, with excellent presentation skills',
        'Capable of working under pressure, maintaining flexibility in work hours',
        'Working independently with minimal supervision'
      ]
    }
  },
  {
    id: 'aws-data-engineer',
    title: 'AWS Data Engineer',
    department: 'Engineering',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 2,
    roleOverview: 'We are seeking an AWS Data Engineer to join our team. The ideal candidate will have strong experience in AWS cloud services, data engineering, and ETL processes. This role involves designing, implementing, and maintaining data pipelines, ensuring data quality, and collaborating with cross-functional teams.',
    keyResponsibilities: [
      'Design, develop and maintain scalable data pipelines using AWS services',
      'Implement ETL processes and ensure data quality and consistency',
      'Optimize data infrastructure for performance and cost',
      'Collaborate with data scientists and analysts to support their data needs',
      'Implement and maintain data security measures',
      'Document data architectures and processes'
    ],
    requirements: {
      education: [
        "Bachelor's/Master's degree in Computer Science, Engineering, or related field"
      ],
      experience: [
        'Minimum 3 years of experience with AWS data services',
        'Strong experience in data engineering and ETL processes',
        'Experience with big data technologies'
      ],
      technical: [
        'Expertise in AWS services (Redshift, S3, Glue, EMR, Lambda)',
        'Strong programming skills in Python and SQL',
        'Experience with data modeling and warehousing',
        'Knowledge of data security best practices'
      ],
      soft: [
        'Strong problem-solving and analytical skills',
        'Excellent communication and collaboration abilities',
        'Self-motivated and able to work independently'
      ]
    }
  },
  {
    id: 'azure-data-engineer',
    title: 'Azure Data Engineer',
    department: 'Engineering',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 2,
    roleOverview: 'We are looking for an Azure Data Engineer to join our team. The ideal candidate will have strong experience in Microsoft Azure cloud services, data engineering, and ETL processes. This role involves designing, implementing, and maintaining data solutions on Azure, ensuring data quality, and collaborating with cross-functional teams.',
    keyResponsibilities: [
      'Design and implement data solutions using Azure services',
      'Develop and maintain ETL/ELT pipelines',
      'Optimize data architectures for performance and cost',
      'Ensure data security and compliance',
      'Collaborate with data scientists and analysts',
      'Document technical specifications and processes'
    ],
    requirements: {
      education: [
        "Bachelor's/Master's degree in Computer Science, Engineering, or related field"
      ],
      experience: [
        'Minimum 3 years of experience with Azure data services',
        'Strong background in data engineering',
        'Experience with cloud data platforms'
      ],
      technical: [
        'Expertise in Azure services (Synapse Analytics, Data Factory, Databricks)',
        'Strong SQL and Python programming skills',
        'Experience with data modeling and ETL',
        'Knowledge of data security best practices'
      ],
      soft: [
        'Strong analytical and problem-solving skills',
        'Excellent communication abilities',
        'Team collaboration capabilities'
      ]
    }
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 2,
    roleOverview: 'We are looking for a Full Stack Developer to join our dynamic team. The ideal candidate will have experience in both frontend and backend development, with a strong foundation in modern web technologies. This role involves developing and maintaining web applications, ensuring high performance and responsiveness.',
    keyResponsibilities: [
      'Develop and maintain full-stack web applications',
      'Write clean, maintainable, and efficient code',
      'Design and implement database schemas',
      'Ensure the technical feasibility of UI/UX designs',
      'Optimize applications for maximum speed and scalability',
      'Collaborate with cross-functional teams'
    ],
    requirements: {
      education: [
        "Bachelor's/Master's degree in Computer Science or related field"
      ],
      experience: [
        'Minimum 3 years of experience in full-stack development',
        'Strong experience with modern web technologies',
        'Experience with cloud platforms (AWS/Azure)'
      ],
      technical: [
        'Proficiency in JavaScript/TypeScript, React, Node.js',
        'Experience with databases (SQL and NoSQL)',
        'Knowledge of version control systems (Git)',
        'Understanding of web security best practices'
      ],
      soft: [
        'Strong problem-solving abilities',
        'Excellent communication skills',
        'Ability to work independently and in a team'
      ]
    }
  },
  {
    id: 'genai-engineer',
    title: 'GenAI Engineer',
    department: 'Engineering',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 2,
    roleOverview: "We are seeking a Generative AI Engineer to join our innovative team. The ideal candidate will have strong experience in machine learning, particularly in generative models and natural language processing. This role involves developing and implementing AI solutions that push the boundaries of what's possible.",
    keyResponsibilities: [
      'Design and implement generative AI models',
      'Develop and optimize machine learning pipelines',
      'Research and implement state-of-the-art AI techniques',
      'Collaborate with cross-functional teams',
      'Ensure model performance and reliability',
      'Document technical processes and findings'
    ],
    requirements: {
      education: [
        "Master's/PhD in Computer Science, AI, or related field"
      ],
      experience: [
        'Minimum 3 years of experience in AI/ML development',
        'Strong background in deep learning and generative models',
        'Experience with NLP and transformer architectures'
      ],
      technical: [
        'Expertise in Python and deep learning frameworks (PyTorch/TensorFlow)',
        'Experience with large language models',
        'Knowledge of MLOps practices',
        'Understanding of distributed computing'
      ],
      soft: [
        'Strong research and analytical skills',
        'Excellent problem-solving abilities',
        'Good communication and collaboration skills'
      ]
    }
  },
  {
    id: 'senior-consultant-model-risk',
    title: 'Senior Consultant - Model Risk',
    department: 'Risk Management',
    location: 'Gurugram, New York',
    workMode: 'Hybrid',
    type: 'Full-time',
    openings: 2,
    roleOverview: 'We are seeking a Senior Consultant in Model Risk to join our team. The role involves conducting model validations, developing validation frameworks, and providing expert guidance on model risk management practices.',
    keyResponsibilities: [
      'Lead model validation projects and assessments',
      'Develop and enhance model validation frameworks',
      'Review model documentation and testing results',
      'Provide technical guidance to junior team members',
      'Collaborate with stakeholders to ensure model compliance',
      'Prepare detailed validation reports and presentations'
    ],
    requirements: {
      education: [
        "Master's degree in Mathematics, Statistics, Economics, or related quantitative field",
        'Professional certifications (FRM, PRM) are a plus'
      ],
      experience: [
        '5+ years of experience in model risk management or validation',
        'Strong background in statistical modeling and risk management',
        'Experience with regulatory requirements and guidelines'
      ],
      technical: [
        'Expertise in statistical analysis and modeling techniques',
        'Proficiency in programming languages (Python, R, SAS)',
        'Knowledge of risk models (Credit, Market, Operational)',
        'Understanding of machine learning and AI models'
      ],
      soft: [
        'Strong analytical and problem-solving skills',
        'Excellent communication and presentation abilities',
        'Leadership and mentoring capabilities'
      ]
    }
  },
  {
    id: 'bd-intern',
    title: 'Business Development Intern',
    department: 'Business Development',
    location: 'Gurugram, New York',
    workMode: 'Hybrid',
    type: 'Internship',
    openings: 2,
    roleOverview: 'We are looking for a Business Development Intern to support our growth initiatives. This role offers hands-on experience in market research, lead generation, and business strategy development.',
    keyResponsibilities: [
      'Conduct market research and competitor analysis',
      'Support lead generation and qualification processes',
      'Assist in preparing business proposals and presentations',
      'Help maintain CRM database and track opportunities',
      'Participate in business development meetings and calls',
      'Create reports and analyze business metrics'
    ],
    requirements: {
      education: [
        "Bachelor's/Master's degree in Business Administration, Marketing, or related field",
        'Currently enrolled students or recent graduates'
      ],
      experience: [
        'Previous internship experience is a plus',
        'Understanding of business development processes',
        'Familiarity with CRM systems'
      ],
      technical: [
        'Proficiency in MS Office Suite',
        'Experience with CRM software is a plus',
        'Basic understanding of data analysis tools'
      ],
      soft: [
        'Strong communication and interpersonal skills',
        'Analytical and research abilities',
        'Self-motivated and proactive attitude'
      ]
    }
  },
  {
    id: 'hr-intern',
    title: 'Human Resources Intern',
    department: 'Human Resources',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Internship',
    openings: 1,
    roleOverview: 'We are seeking an HR Intern to support our HR team in various functions including recruitment, employee engagement, and HR operations.',
    keyResponsibilities: [
      'Assist in recruitment and onboarding processes',
      'Support HR administrative tasks and documentation',
      'Help organize employee engagement activities',
      'Maintain HR databases and files',
      'Assist in preparing HR reports and presentations',
      'Support training and development initiatives'
    ],
    requirements: {
      education: [
        "Bachelor's/Master's degree in Human Resources, Business Administration, or related field",
        'Currently enrolled students or recent graduates'
      ],
      experience: [
        'Previous HR internship experience is a plus',
        'Understanding of HR processes and best practices'
      ],
      technical: [
        'Proficiency in MS Office Suite',
        'Familiarity with HRIS systems',
        'Basic understanding of HR analytics'
      ],
      soft: [
        'Strong interpersonal and communication skills',
        'Attention to detail and organizational abilities',
        'Professional and confidential approach'
      ]
    }
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Manager',
    department: 'Marketing',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 1,
    roleOverview: 'We are looking for a Social Media Manager to develop and implement our social media strategy. The role involves creating engaging content, managing social media channels, and growing our online presence.',
    keyResponsibilities: [
      'Develop and execute social media strategy',
      'Create and manage social media content calendar',
      'Monitor and engage with audience across platforms',
      'Analyze social media metrics and prepare reports',
      'Collaborate with marketing team on campaigns',
      'Stay updated with social media trends and best practices'
    ],
    requirements: {
      education: [
        "Bachelor's degree in Marketing, Communications, or related field"
      ],
      experience: [
        '3+ years of experience in social media management',
        'Proven track record of growing social media presence',
        'Experience with B2B social media marketing'
      ],
      technical: [
        'Proficiency in social media management tools',
        'Experience with content creation tools',
        'Knowledge of social media analytics',
        'Understanding of SEO and content marketing'
      ],
      soft: [
        'Excellent written and verbal communication skills',
        'Creative thinking and problem-solving abilities',
        'Strong organizational and time management skills'
      ]
    }
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    department: 'Project Management',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 1,
    roleOverview: 'We are seeking a Project Manager to lead and deliver complex consulting projects. The role involves managing project lifecycles, client relationships, and cross-functional teams.',
    keyResponsibilities: [
      'Lead end-to-end project management',
      'Develop project plans and timelines',
      'Manage project budgets and resources',
      'Coordinate with stakeholders and team members',
      'Monitor project progress and ensure deliverables',
      'Identify and mitigate project risks'
    ],
    requirements: {
      education: [
        "Bachelor's/Master's degree in Business, Engineering, or related field",
        'PMP certification is preferred'
      ],
      experience: [
        '5+ years of project management experience',
        'Experience in consulting or professional services',
        'Track record of successful project delivery'
      ],
      technical: [
        'Proficiency in project management tools',
        'Knowledge of project management methodologies',
        'Experience with resource planning tools',
        'Understanding of risk management'
      ],
      soft: [
        'Strong leadership and team management skills',
        'Excellent communication and stakeholder management',
        'Problem-solving and decision-making abilities'
      ]
    }
  },
  {
    id: 'manager-fcra',
    title: 'Manager FCRA',
    department: 'Risk Management',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 1,
    roleOverview: 'We are looking for a Manager to lead our FCRA (Fair Credit Reporting Act) compliance initiatives. The role involves ensuring compliance with FCRA regulations and managing related processes.',
    keyResponsibilities: [
      'Oversee FCRA compliance programs',
      'Develop and implement compliance policies',
      'Conduct compliance reviews and assessments',
      'Manage regulatory reporting requirements',
      'Train staff on FCRA compliance',
      'Monitor regulatory changes and updates'
    ],
    requirements: {
      education: [
        "Bachelor's/Master's degree in Business, Law, or related field",
        'FCRA certification is preferred'
      ],
      experience: [
        '5+ years of experience in FCRA compliance',
        'Strong background in regulatory compliance',
        'Experience in financial services industry'
      ],
      technical: [
        'Knowledge of FCRA regulations and requirements',
        'Experience with compliance management systems',
        'Understanding of risk assessment methodologies',
        'Proficiency in compliance reporting tools'
      ],
      soft: [
        'Strong analytical and problem-solving skills',
        'Excellent communication and presentation abilities',
        'Detail-oriented with strong organizational skills'
      ]
    }
  },
  {
    id: 'graphic-designer-intern',
    title: 'Graphic Designer Intern',
    department: 'Design',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Internship',
    openings: 1,
    roleOverview: 'We are seeking a creative Graphic Design Intern to support our marketing and design team. The role involves creating visual content for various platforms and marketing materials.',
    keyResponsibilities: [
      'Create visual designs for digital and print media',
      'Support brand identity implementation',
      'Assist in social media content creation',
      'Design marketing collateral and presentations',
      'Collaborate with marketing team on campaigns',
      'Maintain design assets and resources'
    ],
    requirements: {
      education: [
        "Bachelor's degree in Graphic Design, Visual Arts, or related field",
        'Currently enrolled students or recent graduates'
      ],
      experience: [
        'Portfolio demonstrating creative abilities',
        'Previous design internship is a plus',
        'Understanding of design principles'
      ],
      technical: [
        'Proficiency in Adobe Creative Suite',
        'Experience with design tools and software',
        'Knowledge of digital design best practices',
        'Understanding of UI/UX principles'
      ],
      soft: [
        'Creative thinking and artistic ability',
        'Attention to detail',
        'Good communication and collaboration skills'
      ]
    }
  },
  {
    id: 'director-nlp-genai',
    title: 'Director - NLP GenAI',
    department: 'Engineering',
    location: 'Gurugram',
    workMode: 'Office',
    type: 'Full-time',
    openings: 1,
    roleOverview: 'We are seeking a Director to lead our NLP and Generative AI initiatives. The role involves directing research and development of cutting-edge NLP and GenAI solutions.',
    keyResponsibilities: [
      'Lead NLP and GenAI strategy and implementation',
      'Direct research and development initiatives',
      'Manage and mentor technical teams',
      'Drive innovation in AI solutions',
      'Collaborate with stakeholders on AI roadmap',
      'Ensure technical excellence and best practices'
    ],
    requirements: {
      education: [
        'PhD in Computer Science, AI, or related field',
        'Research publications in NLP/GenAI is a plus'
      ],
      experience: [
        '10+ years of experience in AI/ML',
        'Strong background in NLP and GenAI',
        'Experience leading technical teams'
      ],
      technical: [
        'Deep expertise in NLP and language models',
        'Experience with deep learning frameworks',
        'Knowledge of MLOps and AI infrastructure',
        'Understanding of AI ethics and governance'
      ],
      soft: [
        'Strong leadership and vision',
        'Excellent communication and presentation skills',
        'Strategic thinking and decision-making abilities'
      ]
    }
  },
  {
    id: 'senior-manager-bd',
    title: 'Senior Manager - Business Development',
    department: 'Business Development',
    location: 'Gurugram, Singapore, Dubai, Czech Republic',
    workMode: 'Hybrid',
    type: 'Full-time',
    openings: 4,
    roleOverview: 'We are seeking a Senior Manager to drive business development initiatives across multiple regions. The role involves identifying opportunities, developing strategies, and building client relationships.',
    keyResponsibilities: [
      'Drive business development strategy',
      'Identify and pursue growth opportunities',
      'Build and maintain client relationships',
      'Lead proposal development and negotiations',
      'Manage BD team and initiatives',
      'Achieve revenue and growth targets'
    ],
    requirements: {
      education: [
        "Master's degree in Business Administration or related field",
        'Professional certifications are a plus'
      ],
      experience: [
        '8+ years of experience in business development',
        'Track record of successful deal closure',
        'Experience in international markets'
      ],
      technical: [
        'Proficiency in CRM systems',
        'Knowledge of market research tools',
        'Understanding of financial modeling',
        'Experience with proposal management'
      ],
      soft: [
        'Strong leadership and negotiation skills',
        'Excellent communication and presentation abilities',
        'Strategic thinking and business acumen'
      ]
    }
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'Gurugram, New York, London',
    workMode: 'Hybrid',
    type: 'Full-time',
    openings: 3,
    roleOverview: 'We are looking for a Data Scientist to develop and implement advanced analytics solutions. The role involves working with complex datasets and developing machine learning models.',
    keyResponsibilities: [
      'Develop and implement machine learning models',
      'Analyze complex datasets and extract insights',
      'Create predictive analytics solutions',
      'Collaborate with cross-functional teams',
      'Present findings to stakeholders',
      'Drive data-driven decision making'
    ],
    requirements: {
      education: [
        "Master's/PhD in Data Science, Statistics, or related field"
      ],
      experience: [
        '5+ years of experience in data science',
        'Strong background in machine learning',
        'Experience with big data technologies'
      ],
      technical: [
        'Expertise in Python, R, and SQL',
        'Experience with ML frameworks',
        'Knowledge of big data tools',
        'Understanding of statistical methods'
      ],
      soft: [
        'Strong analytical and problem-solving skills',
        'Excellent communication abilities',
        'Research and innovation mindset'
      ]
    }
  },
  {
    id: 'lead-model-risk',
    title: 'Lead Model Risk',
    department: 'Risk Management',
    location: 'Gurugram, New York',
    workMode: 'Hybrid',
    type: 'Full-time',
    openings: 2,
    roleOverview: 'We are seeking a Lead for our Model Risk Management team. The role involves leading model validation initiatives and developing risk management frameworks.',
    keyResponsibilities: [
      'Lead model risk management initiatives',
      'Develop validation frameworks and methodologies',
      'Review complex models and validation reports',
      'Guide and mentor team members',
      'Ensure regulatory compliance',
      'Interact with stakeholders and regulators'
    ],
    requirements: {
      education: [
        "Master's/PhD in Mathematics, Statistics, or related field",
        'Professional certifications (FRM, PRM) preferred'
      ],
      experience: [
        '8+ years of experience in model risk',
        'Strong background in quantitative analysis',
        'Experience with regulatory requirements'
      ],
      technical: [
        'Expertise in statistical modeling',
        'Knowledge of risk models and methodologies',
        'Understanding of machine learning',
        'Proficiency in programming languages'
      ],
      soft: [
        'Strong leadership and mentoring abilities',
        'Excellent communication skills',
        'Strategic thinking and decision making'
      ]
    }
  },
  {
    id: 'hr-executive',
    title: 'Human Resource Executive',
    department: 'Human Resources',
    location: 'Gurugram, New York',
    workMode: 'Hybrid',
    type: 'Full-time',
    openings: 2,
    roleOverview: 'We are seeking an HR Executive to support our global HR operations. The role involves managing HR processes and implementing HR initiatives across multiple locations.',
    keyResponsibilities: [
      'Manage end-to-end recruitment process',
      'Handle employee relations and engagement',
      'Implement HR policies and procedures',
      'Coordinate training and development programs',
      'Maintain HR documentation and records',
      'Support performance management process'
    ],
    requirements: {
      education: [
        "Bachelor's/Master's degree in Human Resources or related field",
        'HR certifications are a plus'
      ],
      experience: [
        '3+ years of experience in HR',
        'Experience in multinational environment',
        'Knowledge of HR best practices'
      ],
      technical: [
        'Proficiency in HRIS systems',
        'Knowledge of HR analytics',
        'Understanding of labor laws',
        'Experience with HR tools'
      ],
      soft: [
        'Strong interpersonal skills',
        'Excellent communication abilities',
        'Problem-solving capabilities'
      ]
    }
  }
] 
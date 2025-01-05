export interface NavItem {
  title: string
  href: string
  description?: string
  children?: NavItem[]
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  details: string[]
}

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

export interface ContactFormData {
  name: string
  email: string
  message: string
}

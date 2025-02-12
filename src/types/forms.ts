export interface ContactFormData {
  id?: string
  full_name: string
  email: string
  subject: string
  message: string
  createdAt?: string
}

export interface NewsletterSubscription {
  id?: string
  email: string
  createdAt?: string
  status: 'active' | 'unsubscribed'
}

export interface JobApplication {
  id?: string
  name: string
  email: string
  phone: string
  resume_url: string
  cover_letter: string
  portfolio?: string
  position_id: string
  position_title: string
  status: 'pending' | 'reviewed' | 'contacted' | 'rejected'
  created_at?: string
} 
'use server'

import type { ContactFormData, JobApplication } from '@/types/forms'
import { sendTeamsNotification } from '@/lib/notifications'
import { 
  ContactSubmissionModel, 
  NewsletterSubscriptionModel, 
  JobApplicationModel 
} from '@/lib/models'

export async function submitContactForm(formData: ContactFormData) {
  try {
    const data = await ContactSubmissionModel.create({
      full_name: formData.full_name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    })

    // Send Teams notification
    await sendTeamsNotification({
      title: '📧 New Contact Form Submission',
      formData
    })

    return { success: true, data }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error }
  }
}

export async function subscribeToNewsletter(email: string) {
  try {
    const data = await NewsletterSubscriptionModel.create(email)

    // Send Teams notification
    await sendTeamsNotification({
      title: '📫 New Newsletter Subscription',
      formData: { email }
    })

    return { success: true, data }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    
    // Handle duplicate email error
    if (error instanceof Error && error.message === 'Email already subscribed') {
      return { success: false, error: { code: 'DUPLICATE_EMAIL', message: error.message } }
    }
    
    return { success: false, error }
  }
}

export async function submitJobApplication(formData: JobApplication) {
  try {
    const data = await JobApplicationModel.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      resume_url: formData.resume_url,
      cover_letter: formData.cover_letter,
      portfolio: formData.portfolio,
      position_id: formData.position_id,
      position_title: formData.position_title
    })

    // Send Teams notification
    await sendTeamsNotification({
      title: '👔 New Job Application',
      formData: {
        ...formData,
        status: 'pending'
      }
    })

    return { success: true, data }
  } catch (error) {
    console.error('Error submitting job application:', error)
    return { success: false, error }
  }
} 
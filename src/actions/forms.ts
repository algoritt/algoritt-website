'use server'

import { supabase } from '@/lib/supabase'
import type { ContactFormData, JobApplication } from '@/types/forms'
import { sendTeamsNotification } from '@/lib/notifications'

export async function submitContactForm(formData: ContactFormData) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          ...formData,
        },
      ])
      .select()

    if (error) throw error

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
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([
        {
          email,
          status: 'active'
        },
      ])
      .select()

    if (error) throw error

    // Send Teams notification
    await sendTeamsNotification({
      title: '📫 New Newsletter Subscription',
      formData: { email }
    })

    return { success: true, data }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return { success: false, error }
  }
}

export async function submitJobApplication(formData: JobApplication) {
  try {
    const { data, error } = await supabase
      .from('job_applications')
      .insert([
        {
          ...formData,
          status: 'pending',
        },
      ])
      .select()

    if (error) throw error

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
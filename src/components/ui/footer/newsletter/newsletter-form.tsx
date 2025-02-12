'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { subscribeToNewsletter } from '@/actions/forms'
import type { PostgrestError } from '@supabase/supabase-js'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string | null
  }>({ type: null, message: null })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: null })

    try {
      const result = await subscribeToNewsletter(email)
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for subscribing to our newsletter!'
        })
        setEmail('')
      } else {
        throw result.error
      }
    } catch (error) {
      const pgError = error as PostgrestError
      
      setSubmitStatus({
        type: 'error',
        message: pgError.code === '23505' 
          ? 'You are already subscribed.'
          : 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex gap-x-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="flex-none rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Subscribe
        </motion.button>
      </div>
      <div className="h-8 mt-4">
        {submitStatus.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-sm ${
              submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}
      </div>
    </form>
  )
}
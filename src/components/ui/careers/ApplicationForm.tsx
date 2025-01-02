'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { JobPosition } from '@/types'

interface Props {
  position: JobPosition
}

export default function ApplicationForm({ position }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeUrl: '',
    coverLetter: '',
    portfolio: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formFields = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const formField = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.resumeUrl.trim()) {
      newErrors.resumeUrl = 'Resume URL is required'
    } else if (!formData.resumeUrl.includes('drive.google.com')) {
      newErrors.resumeUrl = 'Please provide a Google Drive URL'
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    // TODO: Implement form submission
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
  }

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      variants={formFields}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Name Input */}
      <motion.div variants={formField}>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200`}
          placeholder="John Doe"
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Email Input */}
      <motion.div variants={formField}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200`}
          placeholder="john@example.com"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Phone Input */}
      <motion.div variants={formField}>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone (Optional)
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
          placeholder="+1 (555) 000-0000"
        />
      </motion.div>

      {/* Resume URL Input */}
      <motion.div variants={formField}>
        <label htmlFor="resumeUrl" className="block text-sm font-medium text-gray-300 mb-2">
          Resume Google Drive URL
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="url"
          id="resumeUrl"
          value={formData.resumeUrl}
          onChange={(e) => setFormData(prev => ({ ...prev, resumeUrl: e.target.value }))}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.resumeUrl ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200`}
          placeholder="https://drive.google.com/file/d/..."
        />
        <AnimatePresence>
          {errors.resumeUrl && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.resumeUrl}
            </motion.p>
          )}
        </AnimatePresence>
        <motion.p 
          variants={formField}
          className="mt-1 text-xs text-gray-400"
        >
          Please upload your resume to Google Drive and share the link
        </motion.p>
      </motion.div>

      {/* Cover Letter */}
      <motion.div variants={formField}>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-2">
          Cover Letter
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          id="coverLetter"
          value={formData.coverLetter}
          onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.coverLetter ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-h-[120px] transition-all duration-200`}
          placeholder="Tell us why you're interested in this position..."
        />
        <AnimatePresence>
          {errors.coverLetter && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-500"
            >
              {errors.coverLetter}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Portfolio URL */}
      <motion.div variants={formField}>
        <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
          Portfolio URL (Optional)
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="url"
          id="portfolio"
          value={formData.portfolio}
          onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
          placeholder="https://your-portfolio.com"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={formField}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-200 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-purple-500'
          } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
        >
          {isSubmitting ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center"
            >
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </motion.span>
          ) : (
            'Submit Application'
          )}
        </motion.button>
      </motion.div>
    </motion.form>
  )
}
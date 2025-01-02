'use client'

import { useState } from 'react'
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

    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Phone Input */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      {/* Resume URL Input */}
      <div>
        <label htmlFor="resumeUrl" className="block text-sm font-medium text-gray-300 mb-2">
          Resume Google Drive URL
        </label>
        <input
          type="url"
          id="resumeUrl"
          value={formData.resumeUrl}
          onChange={(e) => setFormData(prev => ({ ...prev, resumeUrl: e.target.value }))}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.resumeUrl ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
          placeholder="https://drive.google.com/file/d/..."
        />
        {errors.resumeUrl && <p className="mt-1 text-sm text-red-500">{errors.resumeUrl}</p>}
        <p className="mt-1 text-xs text-gray-400">Please upload your resume to Google Drive and share the link</p>
      </div>

      {/* Cover Letter */}
      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-2">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          value={formData.coverLetter}
          onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
          className={`w-full px-4 py-3 bg-gray-700/50 border ${errors.coverLetter ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-h-[120px]`}
          placeholder="Tell us why you're interested in this position..."
        />
        {errors.coverLetter && <p className="mt-1 text-sm text-red-500">{errors.coverLetter}</p>}
      </div>

      {/* Portfolio URL */}
      <div>
        <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
          Portfolio URL (Optional)
        </label>
        <input
          type="url"
          id="portfolio"
          value={formData.portfolio}
          onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="https://your-portfolio.com"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Submit Application
      </button>
    </form>
  )
}
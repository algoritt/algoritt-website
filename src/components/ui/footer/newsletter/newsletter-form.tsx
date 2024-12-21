'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button/button'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Implement newsletter signup logic
    // This is where you'd integrate with your newsletter service
    try {
      // Add your newsletter subscription logic here
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 min-w-0 px-4 py-2 text-base text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-600"
          required
        />
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gray-800 hover:bg-gray-700"
        >
          Subscribe
        </Button>
      </div>
      {status === 'success' && (
        <p className="mt-2 text-sm text-green-500">Thank you for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
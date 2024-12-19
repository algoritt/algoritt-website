import type { Metadata } from 'next'
import Link from 'next/link'
import { type JobPosition } from '@/types'

export const metadata: Metadata = {
  title: 'Careers | Algoritt',
  description: 'Join our team and help build the future of technology.',
}

const openPositions: (JobPosition & { slug: string })[] = [
  {
    slug: 'senior-frontend-developer',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
]

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              We're looking for talented individuals to help us build the future of technology.
            </p>

            <div className="space-y-6">
              {openPositions.map((position) => (
                <Link
                  key={position.slug}
                  href={`/careers/${position.slug}`}
                  className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <h2 className="text-2xl font-semibold mb-2">{position.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { type JobPosition } from '@/types'
import { Button } from '@/components/ui/button/button'
import { careerSections } from '@/constants/careers'
import CareerSection from '@/components/ui/careers/CareerSection'

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

const companyStats = [
  { value: '50+', label: 'Team Members' },
  { value: '15+', label: 'Countries' },
  { value: '95%', label: 'Employee Satisfaction' },
  { value: '4.8/5', label: 'Glassdoor Rating' },
]

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Pitch */}
      <section className="relative w-full pt-24 md:pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              At Algoritt, we're building the future of technology. Join our team of passionate innovators and make a real impact in the world of software development.
            </p>
            <Button variant="default" size="lg" className="bg-purple-600 hover:bg-purple-500">
              <Link href="#open-positions">
                Explore Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Sections */}
      {careerSections.map((section, index) => (
        <CareerSection key={section.id} section={section} index={index} />
      ))}

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <Link
                  key={position.slug}
                  href={`/careers/${position.slug}`}
                  className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors hover:shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
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

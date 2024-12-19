import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { type JobPosition } from '@/types'

type Props = {
  params: { career: string }
}

const positions: Record<string, JobPosition> = {
  'senior-frontend-developer': {
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for a Senior Frontend Developer to join our team and help build the next generation of our products.',
    requirements: [
      '5+ years of experience with modern JavaScript frameworks (React, Next.js)',
      'Strong understanding of web performance optimization',
      'Experience with TypeScript and modern CSS frameworks',
      'Excellent problem-solving skills and attention to detail',
    ],
  },
  'backend-engineer': {
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our backend team to build scalable and reliable systems that power our applications.',
    requirements: [
      '3+ years of experience in backend development',
      'Strong knowledge of Node.js and TypeScript',
      'Experience with databases and API design',
      'Understanding of cloud infrastructure and microservices',
    ],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const position = positions[params.career]
  
  if (!position) {
    return {
      title: 'Position Not Found | Algoritt',
    }
  }

  return {
    title: `${position.title} | Careers at Algoritt`,
    description: position.description,
  }
}

export default function CareerPage({ params }: Props) {
  const position = positions[params.career]
  
  if (!position) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{position.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-8">
              <span>{position.department}</span>
              <span>•</span>
              <span>{position.location}</span>
              <span>•</span>
              <span>{position.type}</span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-8">{position.description}</p>

              <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
              <ul className="space-y-2">
                {position.requirements?.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    {requirement}
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <button
                  type="button"
                  className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
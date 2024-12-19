import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { type ServiceItem } from '@/types'

type Props = {
  params: { service: string }
}

const services: Record<string, ServiceItem> = {
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies.',
    details: [
      'Frontend Development',
      'Backend Development',
      'Full-Stack Solutions',
      'API Development',
      'Progressive Web Apps',
      'E-commerce Solutions',
    ]
  },
  'mobile-development': {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    details: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'Mobile App Design',
      'App Store Optimization',
      'Mobile Backend Services',
    ]
  },
  'cloud-solutions': {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and solutions.',
    details: [
      'Cloud Architecture',
      'Cloud Migration',
      'DevOps Services',
      'Cloud Security',
      'Serverless Solutions',
      'Container Orchestration',
    ]
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services[params.service]
  
  if (!service) {
    return {
      title: 'Service Not Found | Algoritt',
    }
  }

  return {
    title: `${service.title} | Services | Algoritt`,
    description: service.description,
  }
}

export default function ServicePage({ params }: Props) {
  const service = services[params.service]
  
  if (!service) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">{service.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.details.map((detail, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{detail}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

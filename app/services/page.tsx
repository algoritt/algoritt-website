import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Algoritt',
  description: 'Explore our comprehensive range of software development and technology services.',
}

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies.',
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and solutions.',
  },
]

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

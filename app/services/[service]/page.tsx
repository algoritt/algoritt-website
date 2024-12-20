import { services } from '@/constants/services'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    service: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.service)
  if (!service) return notFound()

  return {
    title: `${service.title} - Algoritt Services`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.id,
  }))
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.id === params.service)
  if (!service) return notFound()

  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="prose prose-invert max-w-none">
          {/* Add more detailed content about the service here */}
          <h2>Why Choose Our {service.title} Service?</h2>
          <p>
            At Algoritt, we understand that every business has unique challenges
            and requirements. Our {service.title.toLowerCase()} solutions are
            tailored to meet your specific needs while ensuring the highest
            standards of quality and innovation.
          </p>
          
          {/* Add more sections as needed */}
        </div>
      </div>
    </main>
  )
}

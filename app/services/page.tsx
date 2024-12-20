import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/constants/services'
import { Button } from '@/components/ui/button/button'

export const metadata: Metadata = {
  title: 'Services | Algoritt',
  description: 'Explore our comprehensive range of services.',
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      {/* Hero Section */}
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive solutions tailored to meet your business needs and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-64 overflow-hidden rounded-xl">
                  {service.media.type === 'video' ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={service.media.url} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={service.media.url}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-950">
        <div className="absolute inset-0 bg-purple-500/10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Button variant="default" size="lg" className="bg-purple-600 hover:bg-purple-500">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

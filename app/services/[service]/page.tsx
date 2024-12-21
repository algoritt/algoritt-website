import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { services } from '@/constants/services'
import SubServiceCard from '@/components/ui/services/SubServiceCard'
import { Button } from '@/components/ui/button/button'
import Link from 'next/link'

type ServiceParams = { service: string }

interface Props {
  params: Promise<ServiceParams> & {
    then: Promise<ServiceParams>['then'];
    catch: Promise<ServiceParams>['catch'];
    finally: Promise<ServiceParams>['finally'];
    [Symbol.toStringTag]: string;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const service = services.find(s => s.id === resolvedParams.service)
  if (!service) return {}

  return {
    title: `${service.title} | Algoritt Services`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params
  const service = services.find(s => s.id === resolvedParams.service)
  if (!service) return notFound()

  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      {/* Hero Section */}
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((subService) => (
              <SubServiceCard key={subService.id} subService={subService} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-950">
        <div className="absolute inset-0" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our {service.title.toLowerCase()} services.
          </p>
          <Button variant="default" size="lg" className="bg-purple-600 hover:bg-purple-500">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

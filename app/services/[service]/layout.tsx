import type { Metadata } from 'next'
import { services } from '@/constants/services'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ service: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const serviceData = services.find(s => s.id === service)

  if (!serviceData) {
    return {
      title: 'Service Not Found | Algoritt',
      description: 'The requested service could not be found.',
    }
  }

  return {
    title: `${serviceData.title} | Algoritt Services`,
    description: serviceData.description,
    openGraph: {
      title: `${serviceData.title} | Algoritt Services`,
      description: serviceData.description,
      type: 'website',
    },
  }
}

export default async function ServiceLayout({ children }: LayoutProps) {
  return children
} 
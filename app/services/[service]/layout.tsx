import type { Metadata } from 'next'
import { services } from '@/constants/services'

interface Props {
  children: React.ReactNode
  params: { service: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find(s => s.id === params.service)

  if (!service) {
    return {
      title: 'Service Not Found | Algoritt',
      description: 'The requested service could not be found.',
    }
  }

  return {
    title: `${service.title} | Algoritt Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Algoritt Services`,
      description: service.description,
      type: 'website',
    },
  }
}

export default function ServiceLayout({ children }: Props) {
  return children
} 
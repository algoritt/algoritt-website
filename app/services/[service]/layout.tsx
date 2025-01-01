import type { Metadata } from 'next'
import { services } from '@/constants/services'

type Props = {
  params: Promise<{ service: string }> & {
    service: string;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const service = services.find(s => s.id === resolvedParams.service)
  
  if (!service) {
    return {
      title: 'Service Not Found | Algoritt',
      description: 'The requested service could not be found.',
    }
  }

  return {
    title: `${service.title} | Algoritt Services`,
    description: service.description,
  }
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
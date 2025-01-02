import type { Metadata } from 'next'
import { openPositions } from '@/constants/careers'

interface Props {
  children: React.ReactNode
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const position = openPositions.find(p => p.id === params.id)

  if (!position) {
    return {
      title: 'Position Not Found | Algoritt',
      description: 'The requested position could not be found.',
    }
  }

  return {
    title: `${position.title} | Algoritt Careers`,
    description: position.description,
    openGraph: {
      title: `${position.title} | Algoritt Careers`,
      description: position.description,
      type: 'website',
    },
  }
}

export default function CareerPositionLayout({ children }: Props) {
  return children
} 
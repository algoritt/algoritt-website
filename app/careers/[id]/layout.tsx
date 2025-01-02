import type { Metadata } from 'next'
import { openPositions } from '@/constants/careers'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const position = openPositions.find(p => p.id === id)

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

export default async function CareerPositionLayout({
  children
}: LayoutProps) {
  return <>{children}</>
} 
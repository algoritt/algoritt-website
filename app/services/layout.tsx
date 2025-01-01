import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Algoritt',
  description: 'Explore our comprehensive range of services.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
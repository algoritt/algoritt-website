import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Algoritt',
  description: 'Get in touch with us to discuss how we can help transform your business with our expert solutions and services.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
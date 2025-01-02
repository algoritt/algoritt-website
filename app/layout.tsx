import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/ui/header/header'
import { Footer } from '@/components/ui/footer/footer'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Algoritt - Empowering Innovation and Growth',
  description: 'Join Algoritt, a leader in software development and business consulting, where innovation meets excellence. Explore our career opportunities and services.',
  keywords: [
    'quantitative analysis',
    'risk management',
    'business consulting',
    'career opportunities',
    'innovation',
    'software development',
    'technology solutions',
    'custom software',
    'web applications',
    'digital transformation'
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={workSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

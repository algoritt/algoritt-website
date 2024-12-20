import type { Metadata } from 'next'
import { aboutSections } from '@/constants/about'
import AboutBanner from '@/components/ui/about/AboutBanner'

export const metadata: Metadata = {
  title: 'About Us | Algoritt',
  description: 'Learn about our journey, mission, and the team behind Algoritt.',
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full pt-24 md:pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              About Algoritt
            </h1>
            <p className="text-xl text-gray-300">
              Empowering businesses with innovative digital solutions. We combine creativity with technical expertise to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Sections */}
      {aboutSections.map((section) => (
        <AboutBanner key={section.id} section={section} />
      ))}
    </main>
  )
}

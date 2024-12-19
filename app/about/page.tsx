import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Algoritt',
  description: 'Learn about our journey, mission, and the team behind Algoritt.',
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative w-full pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="prose dark:prose-invert max-w-none">
            {/* Add your about us content here */}
            <p className="text-lg">Your about us content goes here...</p>
          </div>
        </div>
      </section>
    </main>
  )
}

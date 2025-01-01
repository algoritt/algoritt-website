'use client';

import { aboutSections } from '@/constants/about'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import AboutBanner with no SSR to avoid hydration issues
const AboutBanner = dynamic(() => import('@/components/ui/about/AboutBanner'), {
  ssr: false
});

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 font-worksans">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Transforming <span className="text-purple-500">Insights</span> into Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We empower organizations to navigate complexity, embrace innovation, and achieve sustainable growth through data-driven strategies and expert consulting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { title: 'Data-Driven', description: 'Making informed decisions through advanced analytics' },
              { title: 'Innovation', description: 'Embracing cutting-edge solutions for modern challenges' },
              { title: 'Excellence', description: 'Delivering exceptional results with precision' }
            ].map((value, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      {aboutSections.map((section, index) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="w-full"
        >
          <AboutBanner section={section} />
        </motion.div>
      ))}

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s collaborate to unlock your organization&apos;s full potential.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

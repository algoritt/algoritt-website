'use client';

import { aboutSections } from '@/constants/about'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
              Driving <span className="text-purple-500">Excellence</span> Forward
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Strategic consulting and risk management solutions that transform businesses for lasting success.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      {aboutSections.map((section, index) => (
        <section key={section.id} className="py-24 bg-gray-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="inline-block">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="h-1 bg-purple-600 mb-4"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{section.description}</p>
              </motion.div>

              {/* Media Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`relative h-[400px] rounded-xl overflow-hidden ${
                  index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'
                }`}
              >
                {section.media.type === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={section.media.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={section.media.src}
                    alt={section.media.alt || section.title}
                    fill
                    className="object-cover"
                  />
                )}
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Values Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              These principles guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Commitment',
                description: 'Dedicated to delivering excellence and exceeding expectations in everything we do',
                icon: '🎯'
              },
              {
                title: 'Integrity',
                description: 'Upholding the highest ethical standards with transparency and honesty',
                icon: '⭐'
              },
              {
                title: 'Innovation',
                description: 'Continuously pushing boundaries and embracing new technologies',
                icon: '💡'
              },
              {
                title: 'Inclusion',
                description: 'Fostering a diverse environment where every voice matters',
                icon: '🤝'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Global Presence</h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Delivering excellence across continents with our strategically located offices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <Image
              src="/assets/about/global-presence.jpg"
              alt="Algoritt&apos;s Global Presence Map"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl"
              priority
            />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
              {[
                { country: 'USA', region: 'North America' },
                { country: 'UK', region: 'Europe' },
                { country: 'Poland', region: 'Europe' },
                { country: 'Czech Republic', region: 'Europe' },
                { country: 'India', region: 'Asia' },
              ].map((location, index) => (
                <motion.div
                  key={location.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all group"
                >
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{location.country}</h3>
                  <p className="text-gray-400">{location.region}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Let&apos;s collaborate to unlock your organization&apos;s full potential
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

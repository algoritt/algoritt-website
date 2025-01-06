'use client';

import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/constants/services'
import { motion } from 'framer-motion'

export default function ServicesPage() {
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
              Our <span className="text-purple-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive solutions tailored to meet your business needs and drive sustainable growth through innovation and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Services */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Solutions
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Explore our comprehensive range of services designed to drive your business forward
            </p>
          </motion.div> */}

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-1 hover:bg-gray-800 transition-all duration-300 flex flex-col h-full backdrop-blur-sm border border-gray-700"
                >
                  <div className="relative h-64 overflow-hidden rounded-xl">
                    <Image
                      src={service.media.thumbnail || service.media.url}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-500 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 group-hover:text-white transition-colors mb-6">
                      {service.description}
                    </p>
                    <div className="mt-auto grid grid-cols-2 gap-4">
                      {service.subServices.slice(0, 4).map((subService) => (
                        <div key={subService.id} className="text-sm text-gray-400 group-hover:text-gray-300">
                          • {subService.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
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
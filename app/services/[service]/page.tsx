'use client';

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { services } from '@/constants/services'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  params: Promise<{ service: string }> & {
    service: string;
  }
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params
  const service = services.find((s) => s.id === resolvedParams.service)

  if (!service) {
    notFound()
  }

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
            <Link 
              href="/services"
              className="inline-flex items-center text-sm text-gray-400 hover:text-purple-500 mb-6 transition-colors"
            >
              ← Back to Services
            </Link>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-8">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            {service.media.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={service.media.url} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={service.media.url}
                alt={service.title}
                fill
                className="object-cover"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              {service.longDescription}
            </p>

            <h2 className="text-3xl font-bold text-white mb-8">Our Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.subServices.map((subService, index) => (
                <motion.div
                  key={subService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    {subService.title}
                  </h3>
                  <p className="text-gray-300">
                    {subService.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our {service.title.toLowerCase()} services can transform your business.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

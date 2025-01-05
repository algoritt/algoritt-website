'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { services } from '@/constants/services';
import { getServiceIcon } from '@/utils/serviceIcons';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.45, 0.32, 0.9]
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicePage() {
  const { service } = useParams() as { service: string };
  const serviceData = services.find(s => s.id === service);

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link 
            href="/services"
            className="text-purple-400 hover:text-purple-300"
          >
            View all services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        {serviceData.media.type === 'video' ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={serviceData.media.url} type="video/mp4" />
          </video>
        ) : (
          <img
            src={serviceData.media.url}
            alt={serviceData.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/75 to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors group"
            >
              <svg 
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Services
            </Link>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-purple-500 mb-8 drop-shadow-lg">
              {serviceData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed drop-shadow-lg font-medium">
              {serviceData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Offerings</h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Discover how our {serviceData.title.toLowerCase()} service can transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.subServices.map((subService, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <svg 
                      className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={getServiceIcon(subService.id)}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {subService.title}
                  </h3>
                  <p className="text-gray-400">
                    {subService.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Transform your business with our {serviceData.title.toLowerCase()} solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

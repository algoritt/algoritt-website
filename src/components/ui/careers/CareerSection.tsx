'use client'

import { motion } from 'framer-motion'
import { CareerSection as CareerSectionType } from '@/constants/careers'
import Image from 'next/image'

interface Props {
  section: CareerSectionType
  index: number
}

export default function CareerSection({ section, index }: Props) {
  const isEven = index % 2 === 0

  const renderMedia = () => {
    if (!section.media) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-gray-800 flex items-center justify-center">
          <div className="text-6xl text-purple-500/20">
            {section.title.charAt(0)}
          </div>
        </div>
      )
    }

    if (section.media.type === 'video') {
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={section.media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    }

    return (
      <Image
        src={section.media.url}
        alt={section.title}
        fill
        className="object-cover"
      />
    )
  }

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
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
            <p className="text-gray-300 text-lg leading-relaxed">{section.description}</p>
            
            {section.bullets && (
              <ul className="space-y-3">
                {section.bullets.map((bullet, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-gray-300">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Media Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative h-[400px] rounded-xl overflow-hidden ${
              isEven ? 'lg:order-last' : 'lg:order-first'
            }`}
          >
            {renderMedia()}
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
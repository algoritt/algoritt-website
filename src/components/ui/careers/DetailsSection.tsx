'use client'

import { motion } from 'framer-motion'
import { JobPosition } from '@/types'

interface Props {
  position: JobPosition
}

export default function DetailsSection({ position }: Props) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      className="space-y-12"
    >
      {/* Requirements */}
      <div className="space-y-6">
        <motion.h2 
          variants={item}
          className="text-2xl font-bold text-white"
        >
          Requirements
        </motion.h2>
        <ul className="space-y-4">
          {position.requirements.map((req, index) => (
            <motion.li
              key={req}
              variants={item}
              className="flex items-start"
            >
              <svg
                className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-300">{req}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* What We Offer */}
      <div className="space-y-6">
        <motion.h2 
          variants={item}
          className="text-2xl font-bold text-white"
        >
          What We Offer
        </motion.h2>
        <ul className="space-y-4">
          {[
            'Competitive salary and equity package',
            'Flexible working hours and remote work options',
            'Health, dental, and vision insurance',
            'Professional development opportunities',
            'Modern tech stack and tools',
            'Collaborative and inclusive work environment'
          ].map((benefit, index) => (
            <motion.li
              key={index}
              variants={item}
              className="flex items-start"
            >
              <svg
                className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
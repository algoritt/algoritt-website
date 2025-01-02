'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { JobPosition } from '@/types'

interface Props {
  currentPosition: JobPosition
  positions: JobPosition[]
}

export default function SimilarPositions({ currentPosition, positions }: Props) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const similarPositions = positions
    .filter(p => p.department === currentPosition.department && p.id !== currentPosition.id)
    .slice(0, 2)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="space-y-8"
          >
            <motion.h2 
              variants={item}
              className="text-2xl font-bold text-white text-center"
            >
              Similar Positions
            </motion.h2>
            <div className="grid gap-6">
              {similarPositions.map((pos) => (
                <motion.div
                  key={pos.id}
                  variants={item}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/careers/${pos.id}`}
                    className="block p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{pos.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{pos.description}</p>
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span>{pos.location}</span>
                      <span>•</span>
                      <span>{pos.type}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
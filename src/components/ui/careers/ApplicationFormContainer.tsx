'use client'

import { motion } from 'framer-motion'
import { JobPosition } from '@/types'
import ApplicationForm from './ApplicationForm'

interface Props {
  position: JobPosition
}

export default function ApplicationFormContainer({ position }: Props) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  }

  return (
    <div className="lg:col-span-3">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="sticky top-24 bg-gray-800 rounded-lg p-6 shadow-xl backdrop-blur-sm border border-gray-700/50"
      >
        <motion.div
          variants={titleVariants}
          className="relative"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Apply for {position.title}
          </h2>
        </motion.div>
        <ApplicationForm position={position} />
      </motion.div>
    </div>
  )
} 
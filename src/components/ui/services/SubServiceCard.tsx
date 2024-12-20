'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { type SubService } from '@/constants/services'

interface Props {
  subService: SubService
}

export default function SubServiceCard({ subService }: Props) {
  const Icon = Icons[subService.icon as keyof typeof Icons]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 hover:bg-gray-800 transition-colors"
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-purple-600 group-hover:w-full transition-all duration-300" />
      <div className="mb-4 text-purple-500">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{subService.title}</h3>
      <p className="text-gray-300">{subService.description}</p>
    </motion.div>
  )
} 
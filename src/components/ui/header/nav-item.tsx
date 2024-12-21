'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface SubNavItem {
  title: string
  href: string
  description?: string
}

interface NavItemProps {
  title: string
  href?: string
  subItems?: SubNavItem[]
  className?: string
}

export function NavItem({ title, href, subItems, className }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<'left' | 'right'>('left')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const windowWidth = window.innerWidth
        const spaceOnRight = windowWidth - rect.right
        const spaceOnLeft = rect.left

        // If there's more space on the right, position dropdown on the left
        // If there's more space on the left, position dropdown on the right
        setDropdownPosition(spaceOnRight > spaceOnLeft ? 'left' : 'right')
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  if (!subItems) {
    return (
      <Link
        href={href || '#'}
        className={`text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-800/50 rounded-md ${className}`}
      >
        {title}
      </Link>
    )
  }

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div
        className={`flex items-center gap-1 text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-800/50 rounded-md cursor-pointer ${
          isOpen ? 'bg-gray-800/50' : ''
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link href={href || '#'}>{title}</Link>
        <ChevronDown className="h-4 w-4" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute top-full ${
              dropdownPosition === 'left' ? 'left-0' : 'right-0'
            } mt-2 w-80 rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="p-4 grid gap-4">
              {subItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block p-4 rounded-md hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div className="font-medium text-white mb-1">
                    {item.title}
                  </div>
                  {item.description && (
                    <div className="text-sm text-gray-400">
                      {item.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
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
}

export function NavItem({ title, href, subItems }: NavItemProps) {
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
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
      >
        {title}
      </Link>
    )
  }

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
      ref={containerRef}
    >
      <button
        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-10 mt-2 w-screen max-w-sm rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              dropdownPosition === 'left' 
                ? 'left-0 origin-top-left' 
                : 'right-0 origin-top-right'
            }`}
            style={{
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto'
            }}
          >
            <div className="p-4 grid gap-4">
              {subItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {item.description}
                    </p>
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
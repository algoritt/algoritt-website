'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { NavMenu } from './nav-menu'

// Import navigation items from nav-menu
const navigationItems = [
  {
    title: 'Solutions',
    subItems: [
      {
        title: 'Web Development',
        href: '/solutions/web-development',
        description: 'Create powerful web applications with modern technologies',
      },
      {
        title: 'Mobile Apps',
        href: '/solutions/mobile-apps',
        description: 'Build native and cross-platform mobile applications',
      },
      {
        title: 'Cloud Solutions',
        href: '/solutions/cloud',
        description: 'Scale your infrastructure with cloud-native solutions',
      },
    ],
  },
  {
    title: 'Services',
    subItems: [
      {
        title: 'Consulting',
        href: '/services/consulting',
        description: 'Expert guidance for your digital transformation',
      },
      {
        title: 'Development',
        href: '/services/development',
        description: 'Full-cycle software development services',
      },
      {
        title: 'Support',
        href: '/services/support',
        description: '24/7 technical support and maintenance',
      },
    ],
  },
  {
    title: 'Company',
    subItems: [
      {
        title: 'About Us',
        href: '/about',
        description: 'Learn about our mission and values',
      },
      {
        title: 'Careers',
        href: '/careers',
        description: 'Join our team of innovators',
      },
      {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team',
      },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0)
  })

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-10">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Algoritt
              </span>
            </Link>

            {/* Desktop Navigation */}
            <NavMenu />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white dark:bg-gray-900 z-40"
          initial={{ opacity: 0, x: '100%' }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? 0 : '100%',
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full overflow-y-auto">
            <nav className="px-4 py-6">
              {navigationItems.map((item) => (
                <div key={item.title} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className="flex items-center justify-between w-full py-4 text-base font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        {item.title}
                        {openSubmenu === item.title ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </button>
                      {openSubmenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 pb-4"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setOpenSubmenu(null)
                              }}
                            >
                              {subItem.title}
                              {subItem.description && (
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="block py-4 text-base font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </motion.div>
      </motion.header>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsMobileMenuOpen(false)
            setOpenSubmenu(null)
          }}
        />
      )}
    </>
  )
}
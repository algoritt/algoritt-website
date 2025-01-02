'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SocialLinks from './social/social-links'
import { NewsletterForm } from './newsletter/newsletter-form'
import { services } from '@/constants/services'
import Image from 'next/image'

const footerLinks = {
  solutions: services.map(service => ({
    name: service.title,
    href: `/services/${service.id}`
  })),
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
}

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="py-12 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Company Info */}
            <motion.div 
              className="space-y-6 lg:col-span-2"
              variants={itemVariants}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/" className="flex items-center">
                  <Image src="/assets/logo_white.png" alt="Algoritt Logo" width={100} height={100} />
                </Link>
              </motion.div>
              <motion.p 
                variants={itemVariants}
                className="text-base text-gray-400"
              >
                Empowering businesses with cutting-edge software solutions and digital transformation services.
              </motion.p>
              <motion.div variants={itemVariants}>
                <SocialLinks />
              </motion.div>
            </motion.div>

            {/* Solutions Links */}
            <motion.div 
              className='md:col-span-1'
              variants={itemVariants}
            >
              <motion.h3 
                variants={itemVariants}
                className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
              >
                Solutions
              </motion.h3>
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
              >
                {footerLinks.solutions.map((link) => (
                  <motion.li 
                    key={link.name}
                    variants={linkVariants}
                    whileHover={{ x: 4 }}
                  >
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Company Links */}
            <motion.div 
              className='md:col-span-1'
              variants={itemVariants}
            >
              <motion.h3 
                variants={itemVariants}
                className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
              >
                Company
              </motion.h3>
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
              >
                {footerLinks.company.map((link) => (
                  <motion.li 
                    key={link.name}
                    variants={linkVariants}
                    whileHover={{ x: 4 }}
                  >
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div 
              className='lg:col-span-2'
              variants={itemVariants}
            >
              <motion.h3 
                variants={itemVariants}
                className="text-sm font-semibold text-white uppercase tracking-wider mb-4"
              >
                Stay Updated
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-base text-gray-400 mb-4"
              >
                Subscribe to our newsletter for the latest updates and insights.
              </motion.p>
              <motion.div variants={itemVariants}>
                <NewsletterForm />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-400"
            >
              {currentYear} Algoritt. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
'use client'

import Link from 'next/link'
import { SocialLinks } from './social/social-links'
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
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-6 lg:col-span-2">
              <Link href="/" className="flex items-center">
                <Image src="/assets/logo_white.png" alt="Algoritt Logo" className="h-10" width={100} height={100} />
              </Link>
              <p className="text-base text-gray-400">
                Empowering businesses with cutting-edge software solutions and digital transformation services.
              </p>
              <SocialLinks />
            </div>

            {/* Solutions Links */}
           <div className='md:col-span-1'>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className='md:col-span-1'>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className='md:col-span-1'>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className='lg:col-span-2'>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Stay Updated
              </h3>
              <p className="text-base text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {currentYear} Algoritt. All rights reserved.
            </p>
            <div className="flex gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
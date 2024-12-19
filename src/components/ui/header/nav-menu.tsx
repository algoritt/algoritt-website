'use client'

import { NavItem } from './nav-item'

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

export function NavMenu() {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navigationItems.map((item) => (
        <NavItem
          key={item.title}
          title={item.title}
          href={item.href}
          subItems={item.subItems}
        />
      ))}
    </nav>
  )
}
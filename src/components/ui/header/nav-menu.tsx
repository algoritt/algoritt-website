'use client'

import { title } from 'process'
import { NavItem } from './nav-item'

const navigationItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
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
    title: 'Careers',
    href: '/careers',
  },
  {
    title: 'Contact Us',
    href: '/contact',
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
          className="text-gray-200 hover:text-white"
        />
      ))}
    </nav>
  )
}
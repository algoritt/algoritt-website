'use client'

import { title } from 'process'
import { NavItem } from './nav-item'
import { services } from '@/constants/services'

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
    href: '/services',
    subItems: services.map(service => ({
      title: service.title,
      href: `/services/${service.id}`,
      description: service.description,
    })),
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
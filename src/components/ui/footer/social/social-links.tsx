'use client'

import { SocialIcon, type SocialIconName } from '@/components/shared/icons/social-icons'

interface SocialLink {
  name: SocialIconName
  url: string
  label: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/algoritt',
    label: 'Follow us on GitHub'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/algoritt',
    label: 'Follow us on Twitter'
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/company/algoritt',
    label: 'Follow us on LinkedIn'
  },
  {
    name: 'facebook',
    url: 'https://facebook.com/algoritt',
    label: 'Follow us on Facebook'
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/algoritt',
    label: 'Follow us on Instagram'
  }
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          aria-label={link.label}
        >
          <SocialIcon name={link.name} />
        </a>
      ))}
    </div>
  )
}
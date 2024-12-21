'use client'

import { SocialIcon, type SocialIconName } from '@/components/shared/icons/social-icons'

interface SocialLink {
  name: SocialIconName
  url: string
  label: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'linkedin',
    url: 'https://linkedin.com/company/algoritt',
    label: 'Follow us on LinkedIn'
  },
  {
    name: 'glassdoor',
    url: 'https://www.glassdoor.com/Overview/Working-at-Algoritt',
    label: 'Check us out on Glassdoor'
  },
  {
    name: 'email',
    url: 'mailto:contact@algoritt.com',
    label: 'Email us'
  }
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name === 'email' ? '_self' : '_blank'}
          rel={link.name === 'email' ? '' : 'noopener noreferrer'}
          className="text-gray-400 hover:text-white transition-colors duration-200"
          aria-label={link.label}
        >
          <SocialIcon name={link.name} />
        </a>
      ))}
    </div>
  )
}
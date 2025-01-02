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
    url: 'https://www.linkedin.com/company/algoritt-consulting/',
    label: 'Follow us on LinkedIn'
  },
  {
    name: 'glassdoor',
    url: 'https://www.glassdoor.co.in/Overview/Working-at-Siya-Consulting-Group-EI_IE9605585.11,32.htm',
    label: 'Check us out on Glassdoor'
  },
  {
    name: 'email',
    url: 'mailto:contact@algoritt.com',
    label: 'Email us'
  }
]

export default function SocialLinks() {
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
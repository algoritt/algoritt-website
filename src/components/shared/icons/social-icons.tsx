'use client'

import { Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

export type SocialIconName = 'github' | 'twitter' | 'linkedin' | 'facebook' | 'instagram'

interface SocialIconProps {
  name: SocialIconName
  className?: string
}

export function SocialIcon({ name, className = '' }: SocialIconProps) {
  const iconProps = {
    className: `w-5 h-5 ${className}`,
    strokeWidth: 1.5
  }

  switch (name) {
    case 'github':
      return <Github {...iconProps} />
    case 'twitter':
      return <Twitter {...iconProps} />
    case 'linkedin':
      return <Linkedin {...iconProps} />
    case 'facebook':
      return <Facebook {...iconProps} />
    case 'instagram':
      return <Instagram {...iconProps} />
    default:
      return null
  }
}
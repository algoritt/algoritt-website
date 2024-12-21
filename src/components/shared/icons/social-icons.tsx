'use client'

import { Linkedin, Mail, Building2 } from 'lucide-react'

export type SocialIconName = 'linkedin' | 'glassdoor' | 'email'

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
    case 'linkedin':
      return <Linkedin {...iconProps} />
    case 'glassdoor':
      return <Building2 {...iconProps} />
    case 'email':
      return <Mail {...iconProps} />
    default:
      return null
  }
}
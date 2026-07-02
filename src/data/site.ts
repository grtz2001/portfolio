/** Site-wide shared content: nav, contact, footer links. */

export interface NavLink {
  label: string
  to: string
}

export interface SocialLink {
  label: string
  href: string
  accent?: boolean
}

export const email = 'grtz2001@gmail.com'

export const navLinks: NavLink[] = [
  { label: 'work', to: '/' },
  { label: 'research', to: '/research' },
  { label: 'education', to: '/education' },
  { label: 'math', to: '/olympiad' },
]

export const socialLinks: SocialLink[] = [
  { label: email, href: `mailto:${email}`, accent: true },
  { label: 'linkedin.com/in/gratzia', href: 'https://linkedin.com/in/gratzia' },
  { label: 'github.com/gratzia', href: 'https://github.com/gratzia' },
]

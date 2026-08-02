export type NavItem = {
  label: string
  href:  string
}

export type Skill = {
  name:     string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai' | 'other'
}

export type Project = {
  title:       string
  description: string
  tags:        string[]
  link?:       string
  github?:     string
  featured?:   boolean
}

export type Certificate = {
  title:       string
  institution: 'FIAP' | 'Alura' | 'AWS' | 'Santander Open Academy'
}

export type SocialLink = {
  label: string
  href:  string
  icon:  'github' | 'linkedin' | 'mail'
}
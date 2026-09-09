export type FileName = 'Home.tsx' | 'about.html' | 'contact.css' | 'projects.ts' | 'github.md'
export type View = FileName | 'settings'
export type FileIconKind = 'tsx' | 'html' | 'css' | 'ts' | 'md'

export type PortfolioFile = {
  name: FileName
  language: string
  icon: FileIconKind
}

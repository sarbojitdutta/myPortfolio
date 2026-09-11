import { FileCode2 } from 'lucide-react'
import { SiCss3, SiHtml5, SiMarkdown, SiReact, SiTypescript } from 'react-icons/si'
import type { FileIconKind } from '../../types/portfolio'

const icons: Record<FileIconKind, typeof FileCode2> = {
  tsx: SiReact,
  html: SiHtml5,
  css: SiCss3,
  ts: SiTypescript,
  md: SiMarkdown,
}

const colors: Record<FileIconKind, string> = {
  tsx: 'text-[var(--blue)]',
  html: 'text-[var(--orange)]',
  css: 'text-[var(--purple)]',
  ts: 'text-[var(--blue)]',
  md: 'text-[var(--green)]',
}

export function FileIcon({ kind }: { kind: FileIconKind }) {
  const Icon = icons[kind] || FileCode2

  return (
    <span className={`inline-flex w-6 shrink-0 items-center justify-center ${colors[kind]}`}>
      <Icon size={16} aria-hidden="true" />
    </span>
  )
}

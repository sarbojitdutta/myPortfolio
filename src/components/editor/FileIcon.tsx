import { FileCode2 } from 'lucide-react'
import { SiCss, SiHtml5, SiMarkdown, SiReact, SiTypescript } from 'react-icons/si'
import type { IconType } from 'react-icons'
import type { FileIconKind } from '../../types/portfolio'

const icons: Record<FileIconKind, IconType> = {
  tsx: SiReact,
  html: SiHtml5,
  css: SiCss,
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
  const Icon = icons[kind]

  if (!Icon) {
    return <FileCode2 size={16} className="shrink-0 text-[var(--muted)]" aria-hidden="true" />
  }

  return (
    <span className={`inline-flex w-6 shrink-0 items-center justify-center ${colors[kind]}`}>
      <Icon size={16} aria-hidden="true" />
    </span>
  )
}

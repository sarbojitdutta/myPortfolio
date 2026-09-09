import type { FileIconKind } from '../../types/portfolio'

const labels: Record<FileIconKind, string> = {
  tsx: 'TSX',
  html: '</>',
  css: '#',
  ts: 'TS',
  md: 'M↓',
}

const colors: Record<FileIconKind, string> = {
  tsx: 'text-[var(--blue)]',
  html: 'text-[var(--orange)]',
  css: 'text-[var(--purple)]',
  ts: 'text-[var(--blue)]',
  md: 'text-[var(--green)]',
}

export function FileIcon({ kind }: { kind: FileIconKind }) {
  return (
    <span className={`inline-flex w-6 justify-center font-mono text-[9px] font-medium ${colors[kind]}`}>
      {labels[kind]}
    </span>
  )
}

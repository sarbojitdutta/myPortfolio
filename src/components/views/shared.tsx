import type { ReactNode } from 'react'

export const mono = 'font-mono'
export const border = 'border-[var(--border)]'

export function PageView({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`min-h-full max-w-[1050px] px-[clamp(24px,6vw,90px)] pb-[60px] pt-[42px] max-[720px]:px-5 max-[720px]:pb-11 max-[720px]:pt-7 ${className}`}>{children}</div>
}

export function CodeHeader({ children }: { children: ReactNode }) {
  return <div className={`pb-8 ${mono} text-xs text-[var(--muted)]`}>{children}</div>
}

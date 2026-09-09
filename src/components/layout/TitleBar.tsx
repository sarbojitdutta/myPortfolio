import { Code2, Minus, PanelsTopLeft, X } from 'lucide-react'

export function TitleBar() {
  return (
    <header className="relative flex h-[35px] flex-none items-center border-b border-[var(--border-soft)] bg-[var(--panel-2)] text-xs text-[var(--muted)]">
      <div className="ml-[18px] flex gap-[7px]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ed6a5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f6c453]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
      </div>
      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
        <Code2 size={14} />
        <span>sarbojit-portfolio</span>
        <span className="text-[var(--faint)]">—</span>
        <span>Visual Studio Code</span>
      </div>
      <div className="ml-auto flex gap-5 px-4">
        <Minus size={14} />
        <PanelsTopLeft size={13} />
        <X size={15} />
      </div>
    </header>
  )
}

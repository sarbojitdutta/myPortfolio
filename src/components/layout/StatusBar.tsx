import { GitBranch, Search } from 'lucide-react'

export function StatusBar({ file, theme }: { file?: { language: string }; theme: string }) {
  return (
    <footer className="flex h-[22px] flex-none items-center justify-between bg-[var(--status)] px-2.5 font-mono text-[10px] text-white">
      <div className="flex items-center gap-4 max-[720px]:gap-2">
        <span className="inline-flex items-center gap-1.5"><GitBranch size={13} /> main*</span>
        <span className="inline-flex items-center gap-1.5 max-[720px]:hidden"><Search size={12} /> 0 errors</span>
      </div>
      <div className="flex items-center gap-4 max-[720px]:gap-2">
        <span className="max-[720px]:hidden">{theme}</span>
        <span>{file?.language || 'Settings'}</span>
        <span>UTF-8</span>
        <span>Ln 1, Col 1</span>
      </div>
    </footer>
  )
}

import { X } from 'lucide-react'
import { portfolioFiles } from '../../data/files'
import type { FileName, View } from '../../types/portfolio'
import { FileIcon } from '../editor/FileIcon'

type TabBarProps = {
  active: View
  closeTab: (file: FileName) => void
  openFile: (file: FileName) => void
  tabs: FileName[]
}

export function TabBar({ active, closeTab, openFile, tabs }: TabBarProps) {
  return (
    <div className="flex h-[38px] flex-none overflow-auto border-b border-[var(--border)] bg-[var(--panel)]">
      {tabs.map((tab) => (
        <div key={tab} onClick={() => openFile(tab)} className={`flex min-w-[130px] items-center gap-2 border-r border-[var(--border)] border-t bg-[var(--tab)] px-2.5 font-mono text-[11px] text-[var(--muted)] ${active === tab ? 'border-t-[var(--accent)] bg-[var(--editor)] text-[var(--text)]' : 'border-t-transparent'}`}>
          <FileIcon kind={portfolioFiles.find((file) => file.name === tab)?.icon || 'tsx'} />
          <span>{tab}</span>
          <button aria-label={`Close ${tab}`} onClick={(event) => { event.stopPropagation(); closeTab(tab) }} className="ml-auto grid place-items-center border-0 bg-transparent p-1 text-[var(--muted)] hover:bg-[var(--panel-2)] hover:text-[var(--text)]"><X size={13} /></button>
        </div>
      ))}
      <div className="min-w-12 flex-1" />
    </div>
  )
}

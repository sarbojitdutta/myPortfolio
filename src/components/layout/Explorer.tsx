import { ChevronDown, ChevronRight, FileText, Folder } from 'lucide-react'
import { portfolioFiles } from '../../data/files'
import type { FileName, View } from '../../types/portfolio'
import { FileIcon } from '../editor/FileIcon'

type ExplorerProps = {
  active: View
  isOpen: boolean
  openFile: (file: FileName) => void
  setIsOpen: (value: boolean) => void
}

export function Explorer({ active, isOpen, openFile, setIsOpen }: ExplorerProps) {
  return (
    <aside className={`relative flex-none border-r border-[var(--border)] bg-[var(--panel)] text-xs ${isOpen ? 'w-56' : 'w-6'} transition-[width] duration-200 max-[720px]:hidden`}>
      <div className="flex h-[38px] items-center justify-between px-3 text-[10px] tracking-widest text-[var(--text)]">
        <span className={isOpen ? '' : '[writing-mode:vertical-rl]'}>EXPLORER</span>
        {isOpen && <FileText size={15} />}
      </div>
      {isOpen && (
        <div className="py-1.5 text-[var(--muted)]">
          <div className="flex min-h-[26px] items-center gap-0.5 px-3 font-semibold tracking-wider text-[var(--text)]"><ChevronDown size={15} /><span>PORTFOLIO</span></div>
          <div className="pl-3">
            <div className="flex min-h-[26px] items-center gap-1"><ChevronDown size={14} /><Folder fill="currentColor" size={15} /><span>src</span></div>
            <div className="pl-4">
              {portfolioFiles.map((file) => (
                <button key={file.name} onClick={() => openFile(file.name)} className={`flex min-h-[26px] w-full items-center gap-2 border-0 px-3 text-left text-[var(--muted)] hover:bg-[var(--panel-2)] hover:text-[var(--text)] ${active === file.name ? 'bg-[var(--panel-2)] text-[var(--text)]' : 'bg-transparent'}`}>
                  <FileIcon kind={file.icon} /><span>{file.name}</span>
                </button>
              ))}
            </div>
          </div>
          {['assets', 'node_modules', 'public'].map((folder) => <div key={folder} className="mt-0.5 flex min-h-[26px] items-center gap-1 px-3 text-[var(--faint)]"><ChevronRight size={14} /><span>{folder}</span></div>)}
        </div>
      )}
      <button aria-label="Toggle explorer" onClick={() => setIsOpen(!isOpen)} className={`absolute top-2 grid h-[22px] w-[22px] place-items-center border border-[var(--border)] bg-[var(--panel-2)] text-[var(--muted)] ${isOpen ? '-right-3' : 'right-0 rotate-180'}`}><ChevronRight size={15} /></button>
    </aside>
  )
}

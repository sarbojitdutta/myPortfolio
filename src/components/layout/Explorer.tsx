import { useEffect, useRef } from 'react'
import { ChevronDown, ChevronRight, FileText, Folder } from 'lucide-react'
import { portfolioFiles } from '../../data/files'
import type { FileName, View } from '../../types/portfolio'
import { FileIcon } from '../editor/FileIcon'

type ExplorerProps = {
  active: View
  isOpen: boolean
  width: number
  openFile: (file: FileName) => void
  setIsOpen: (value: boolean) => void
  setWidth: (value: number) => void
}

const MIN_WIDTH = 180
const MAX_WIDTH = 420
const COLLAPSED_WIDTH = 8

export function Explorer({ active, isOpen, width, openFile, setIsOpen, setWidth }: ExplorerProps) {
  const resizing = useRef(false)

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!resizing.current) return
      const nextWidth = Math.min(MAX_WIDTH, Math.max(0, event.clientX - 49))

      if (nextWidth < MIN_WIDTH) {
        setWidth(COLLAPSED_WIDTH)
        setIsOpen(false)
      } else {
        setWidth(nextWidth)
        setIsOpen(true)
      }
    }

    const stopResizing = () => {
      resizing.current = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', stopResizing)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', stopResizing)
    }
  }, [setIsOpen, setWidth])

  const startResizing = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    resizing.current = true
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }

  return (
    <aside
      className="relative flex-none border-r border-[var(--border)] bg-[var(--panel)] text-xs max-[720px]:hidden"
      style={{ width: `${isOpen ? width : COLLAPSED_WIDTH}px` }}
    >
      {isOpen && (
        <>
          <div className="flex h-[38px] items-center justify-between px-3 text-[10px] tracking-widest text-[var(--text)]">
            <span>EXPLORER</span>
            <FileText size={15} />
          </div>
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
        </>
      )}

      <div
        aria-label="Resize explorer"
        role="separator"
        aria-orientation="vertical"
        onPointerDown={startResizing}
        className="absolute right-0 top-0 z-20 h-full w-1 cursor-col-resize touch-none hover:bg-[var(--accent)]/40"
      />
    </aside>
  )
}

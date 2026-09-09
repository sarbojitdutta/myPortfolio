import { Folder, Home, Mail, Menu, Settings, UserRound } from 'lucide-react'
import type { FileName, View } from '../../types/portfolio'

type ActivityBarProps = {
  active: View
  mobileNav: boolean
  onSettings: () => void
  openFile: (file: FileName) => void
  setMobileNav: (value: boolean) => void
}

export function ActivityBar({ active, mobileNav, onSettings, openFile, setMobileNav }: ActivityBarProps) {
  const items = [
    { label: 'Home', file: 'Home.tsx' as FileName, icon: <Home size={19} /> },
    { label: 'About', file: 'about.html' as FileName, icon: <UserRound size={19} /> },
    { label: 'Contact', file: 'contact.css' as FileName, icon: <Mail size={19} /> },
    { label: 'Projects', file: 'projects.ts' as FileName, icon: <Folder size={19} /> },
  ]

  return (
    <aside className="relative flex w-[49px] flex-none flex-col justify-between border-r border-[var(--border-soft)] bg-[var(--panel)]">
      <button className="hidden h-11 w-full place-items-center border-0 bg-transparent text-[var(--text)] max-[720px]:grid" aria-label="Toggle navigation" onClick={() => setMobileNav(!mobileNav)}>
        <Menu size={19} />
      </button>
      <div className={`flex flex-col items-center max-[720px]:absolute max-[720px]:left-[42px] max-[720px]:top-8 max-[720px]:z-10 max-[720px]:hidden max-[720px]:w-44 max-[720px]:items-stretch max-[720px]:border max-[720px]:border-[var(--border)] max-[720px]:bg-[var(--panel-2)] ${mobileNav ? 'max-[720px]:flex' : ''}`}>
        {items.map((item) => (
          <button
            key={item.file}
            aria-label={item.label}
            title={item.label}
            onClick={() => openFile(item.file)}
            className={`relative grid h-12 w-12 place-items-center border-0 bg-transparent text-[var(--muted)] hover:text-[var(--text)] max-[720px]:flex max-[720px]:h-10 max-[720px]:w-full max-[720px]:items-center max-[720px]:justify-start max-[720px]:gap-3 max-[720px]:px-4 ${active === item.file ? 'text-[var(--text)] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-[var(--accent)]' : ''}`}
          >
            {item.icon}
            <span className="hidden max-[720px]:inline">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <button aria-label="Themes" title="Themes" onClick={onSettings} className={`relative grid h-12 w-12 place-items-center border-0 bg-transparent text-[var(--muted)] hover:text-[var(--text)] max-[720px]:h-11 max-[720px]:w-10 ${active === 'settings' ? 'text-[var(--text)] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-[var(--accent)]' : ''}`}>
          <Settings size={18} />
        </button>
        <button aria-label="Accounts" title="Accounts" className="grid h-12 w-12 place-items-center border-0 bg-transparent text-[var(--muted)] hover:text-[var(--text)] max-[720px]:h-11 max-[720px]:w-10">
          <UserRound size={18} />
        </button>
      </div>
    </aside>
  )
}

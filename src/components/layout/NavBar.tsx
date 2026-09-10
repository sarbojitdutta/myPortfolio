import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fileToRoute } from '../../routes'
import type { FileName } from '../../types/portfolio'

type NavBarProps = {
  onToggleExplorer: () => void
  onOpenSettings: () => void
}

type MenuItem = {
  label: string
  action?: () => void
}

type Menu = {
  label: string
  items: MenuItem[]
}

const files: FileName[] = ['Home.tsx', 'about.html', 'contact.css', 'projects.ts', 'github.md']

export function NavBar({ onToggleExplorer, onOpenSettings }: NavBarProps) {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  const openFile = (file: FileName) => {
    navigate(fileToRoute(file))
    setOpenMenu(null)
  }

  const menus: Menu[] = [
    {
      label: 'File',
      items: [
        { label: 'Home', action: () => openFile('Home.tsx') },
        { label: 'About', action: () => openFile('about.html') },
        { label: 'Contact', action: () => openFile('contact.css') },
        { label: 'Projects', action: () => openFile('projects.ts') },
        { label: 'GitHub', action: () => openFile('github.md') },
      ],
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', action: () => window.history.back() },
        { label: 'Redo', action: () => window.history.forward() },
      ],
    },
    {
      label: 'View',
      items: [
        { label: 'Toggle Explorer', action: () => { onToggleExplorer(); setOpenMenu(null) } },
        { label: 'Settings', action: () => { onOpenSettings(); setOpenMenu(null) } },
      ],
    },
    {
      label: 'Go',
      items: files.map((file) => ({
        label: file.replace(/\.(tsx|html|css|ts|md)$/, ''),
        action: () => openFile(file),
      })),
    },
    {
      label: 'Run',
      items: [
        { label: 'Reload Portfolio', action: () => window.location.reload() },
      ],
    },
    {
      label: 'Terminal',
      items: [
        { label: 'Open GitHub', action: () => openFile('github.md') },
      ],
    },
    {
      label: 'Help',
      items: [
        { label: 'About This Portfolio', action: () => openFile('about.html') },
        { label: 'GitHub Repository', action: () => window.open('https://github.com/sarbojitdutta/myPortfolio', '_blank', 'noopener,noreferrer') },
      ],
    },
  ]

  return (
    <nav
      ref={navRef}
      aria-label="Application menu"
      className="relative z-30 flex flex-none items-center border-b border-[var(--border)] bg-[var(--panel-2)] px-2 text-xs text-[var(--muted)]"
    >
      {menus.map((menu) => {
        const isOpen = openMenu === menu.label

        return (
          <div key={menu.label} className="relative">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="menu"
              onClick={() => setOpenMenu(isOpen ? null : menu.label)}
              className={`rounded px-2.5 py-1.5 transition-colors hover:bg-[var(--panel)] hover:text-[var(--text)] ${isOpen ? 'bg-[var(--panel)] text-[var(--text)]' : ''}`}
            >
              {menu.label}
            </button>

            {isOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-0.5 min-w-44 overflow-hidden rounded border border-[var(--border)] bg-[var(--panel)] py-1 shadow-xl"
              >
                {menu.items.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    role="menuitem"
                    onClick={item.action}
                    className="flex w-full items-center px-3 py-1.5 text-left text-xs text-[var(--muted)] transition-colors hover:bg-[var(--panel-2)] hover:text-[var(--text)]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

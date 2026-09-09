import { useEffect, useState } from 'react'
import { ActivityBar } from './components/layout/ActivityBar'
import { Explorer } from './components/layout/Explorer'
import { StatusBar } from './components/layout/StatusBar'
import { TabBar } from './components/layout/TabBar'
import { TitleBar } from './components/layout/TitleBar'
import { EditorView } from './components/editor/EditorView'
import { ThemePicker } from './components/views/ThemePicker'
import { portfolioFiles } from './data/files'
import { themes, type ThemeName } from './themes/themes'
import type { FileName, View } from './types/portfolio'

function App() {
  const [active, setActive] = useState<View>('Home.tsx')
  const [openTabs, setOpenTabs] = useState<FileName[]>(['Home.tsx'])
  const [theme, setTheme] = useState<ThemeName>(() => {
    return (localStorage.getItem('portfolio-theme') as ThemeName) || 'dark-plus'
  })
  const [explorerOpen, setExplorerOpen] = useState(true)
  const [explorerWidth, setExplorerWidth] = useState(224)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const activeFile = portfolioFiles.find((file) => file.name === active)

  const openFile = (file: FileName) => {
    setOpenTabs((tabs) => (tabs.includes(file) ? tabs : [...tabs, file]))
    setActive(file)
    setMobileNav(false)
  }

  const toggleSettings = () => {
    setActive((current) => (current === 'settings' ? 'Home.tsx' : 'settings'))
  }

  const closeTab = (file: FileName) => {
    const remaining = openTabs.filter((tab) => tab !== file)
    const nextTabs = remaining.length ? remaining : ['Home.tsx' as FileName]

    setOpenTabs(nextTabs)

    if (active === file) {
      setActive(remaining[remaining.length - 1] || 'Home.tsx')
    }
  }

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
      <TitleBar />
      <div className="flex min-h-0 flex-1">
        <ActivityBar active={active} mobileNav={mobileNav} onSettings={toggleSettings} openFile={openFile} setMobileNav={setMobileNav} />
        <Explorer active={active} isOpen={explorerOpen} width={explorerWidth} openFile={openFile} setIsOpen={setExplorerOpen} setWidth={setExplorerWidth} />
        <section className="flex min-w-0 flex-1 flex-col bg-[var(--editor)]">
          <TabBar active={active} closeTab={closeTab} openFile={openFile} tabs={openTabs} />
          <div className="min-h-0 flex-1 overflow-auto">
            {active === 'settings' ? <ThemePicker theme={theme} setTheme={setTheme} /> : <EditorView active={active} openFile={openFile} />}
          </div>
        </section>
      </div>
      <StatusBar file={activeFile} theme={themes[theme].label} />
    </main>
  )
}

export default App

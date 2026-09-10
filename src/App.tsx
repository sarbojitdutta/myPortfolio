import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ActivityBar } from './components/layout/ActivityBar'
import { Explorer } from './components/layout/Explorer'
import { NavBar } from './components/layout/NavBar'
import { StatusBar } from './components/layout/StatusBar'
import { TabBar } from './components/layout/TabBar'
import { TitleBar } from './components/layout/TitleBar'
import { ThemePicker } from './components/views/ThemePicker'
import { GithubView } from './components/views/GithubView'
import { AboutView } from './components/views/AboutView'
import { ContactView } from './components/views/ContactView'
import { HomeView } from './components/views/HomeView'
import { ProjectsView } from './components/views/ProjectsView'
import { portfolioFiles } from './data/files'
import { themes, type ThemeName } from './themes/themes'
import { fileToRoute, routeToFile, RouteTitle } from './routes'
import type { FileName, View } from './types/portfolio'

function PortfolioShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const [openTabs, setOpenTabs] = useState<FileName[]>(['Home.tsx'])
  const [theme, setTheme] = useState<ThemeName>(() => {
    return (localStorage.getItem('portfolio-theme') as ThemeName) || 'dark-plus'
  })
  const [explorerOpen, setExplorerOpen] = useState(true)
  const [explorerWidth, setExplorerWidth] = useState(224)
  const [mobileNav, setMobileNav] = useState(false)

  const active: View = location.pathname === '/settings' ? 'settings' : routeToFile(location.pathname)
  const activeFile = portfolioFiles.find((file) => file.name === active)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    if (active !== 'settings') {
      setOpenTabs((tabs) => (tabs.includes(active) ? tabs : [...tabs, active]))
    }
  }, [active])

  const openFile = (file: FileName) => {
    setOpenTabs((tabs) => (tabs.includes(file) ? tabs : [...tabs, file]))
    navigate(fileToRoute(file))
    setMobileNav(false)
  }

  const toggleSettings = () => {
    navigate(location.pathname === '/settings' ? '/' : '/settings')
    setMobileNav(false)
  }

  const closeTab = (file: FileName) => {
    const remaining = openTabs.filter((tab) => tab !== file)
    const nextTabs = remaining.length ? remaining : ['Home.tsx' as FileName]

    setOpenTabs(nextTabs)

    if (active === file) {
      navigate(fileToRoute(remaining[remaining.length - 1] || 'Home.tsx'))
    }
  }

  const toggleExplorer = () => {
    setExplorerOpen((open) => !open)
  }

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
      <RouteTitle />
      <TitleBar />
      <NavBar onToggleExplorer={toggleExplorer} onOpenSettings={toggleSettings} />
      <div className="flex min-h-0 flex-1">
        <ActivityBar active={active} mobileNav={mobileNav} onSettings={toggleSettings} openFile={openFile} setMobileNav={setMobileNav} />
        <Explorer active={active} isOpen={explorerOpen} width={explorerWidth} openFile={openFile} setIsOpen={setExplorerOpen} setWidth={setExplorerWidth} />
        <section className="flex min-w-0 flex-1 flex-col bg-[var(--editor)]">
          <TabBar active={active} closeTab={closeTab} openFile={openFile} tabs={openTabs} />
          <div className="min-h-0 flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<HomeView openFile={openFile} />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/projects" element={<ProjectsView />} />
              <Route path="/github" element={<GithubView />} />
              <Route path="/settings" element={<ThemePicker theme={theme} setTheme={setTheme} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </section>
      </div>
      <StatusBar file={activeFile} theme={themes[theme].label} />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PortfolioShell />
    </BrowserRouter>
  )
}

export default App

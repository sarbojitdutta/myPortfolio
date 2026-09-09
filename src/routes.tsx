import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { FileName, View } from './types/portfolio'

export const fileRoutes: Record<FileName, string> = {
  'Home.tsx': '/',
  'about.html': '/about',
  'contact.css': '/contact',
  'projects.ts': '/projects',
  'github.md': '/github',
}

export const routeFiles: Record<string, FileName> = Object.fromEntries(
  Object.entries(fileRoutes).map(([file, path]) => [path, file as FileName]),
) as Record<string, FileName>

export const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact',
  '/projects': 'Projects',
  '/github': 'GitHub',
  '/settings': 'Settings',
}

export function fileToRoute(file: FileName): string {
  return fileRoutes[file]
}

export function routeToFile(pathname: string): FileName {
  return routeFiles[pathname] || 'Home.tsx'
}

export function RouteTitle() {
  const location = useLocation()

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Home'
    document.title = `Sarbojit Dutta | ${title}`
  }, [location.pathname])

  return null
}

export function usePortfolioNavigation() {
  const navigate = useNavigate()

  return (file: FileName | View) => {
    navigate(file === 'settings' ? '/settings' : fileToRoute(file))
  }
}

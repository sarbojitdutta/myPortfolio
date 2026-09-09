import type { FileName } from '../../types/portfolio'
import { AboutView } from '../views/AboutView'
import { ContactView } from '../views/ContactView'
import { GithubView } from '../views/GithubView'
import { HomeView } from '../views/HomeView'
import { ProjectsView } from '../views/ProjectsView'

export function EditorView({ active, openFile }: { active: FileName; openFile: (file: FileName) => void }) {
  return (
    <div className="min-h-full animate-[editor-reveal_.2s_ease-out]" key={active}>
      {active === 'Home.tsx' && <HomeView openFile={openFile} />}
      {active === 'about.html' && <AboutView />}
      {active === 'contact.css' && <ContactView />}
      {active === 'projects.ts' && <ProjectsView />}
      {active === 'github.md' && <GithubView />}
    </div>
  )
}

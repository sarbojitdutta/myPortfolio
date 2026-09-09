import { Braces, ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import { CodeHeader, mono, border, PageView } from './shared'

export function ProjectsView() {
  return (
    <PageView>
      <CodeHeader><span className="text-[var(--purple)]">const</span> <span className="text-[var(--yellow)]">projects</span>: <span className="text-[var(--blue)]">Project</span>[] = [</CodeHeader>
      <div className="grid max-w-[900px] gap-3.5">
        {projects.map((project, index) => (
          <article key={project.title} className={`grid grid-cols-[42px_1fr_auto] gap-3 border p-5 ${border} bg-[color-mix(in_srgb,var(--panel)_50%,transparent)] hover:border-[var(--accent)] max-[720px]:grid-cols-[28px_1fr]`}>
            <div className={`text-[11px] text-[var(--faint)] ${mono}`}>0{index + 1}</div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="m-0 text-[22px] text-[var(--text)]">{project.title}</h2>
              </div>
              <p className="mt-2.5 max-w-[650px] text-[13px] leading-relaxed text-[var(--muted)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{project.stack.map((tag) => <span key={tag} className={`border px-2 py-1 text-[10px] text-[var(--muted)] ${border} ${mono}`}>{tag}</span>)}</div>
              <div className={`mt-4 flex gap-4 text-[11px] ${mono}`}><a className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--accent)]" href={project.githubUrl}>GitHub <ExternalLink size={13} /></a><a className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--accent)]" href={project.liveDemoUrl}>Live demo <ExternalLink size={13} /></a></div>
            </div>
            <Braces className="m-1 ml-5 text-[var(--border)] max-[720px]:hidden" size={42} />
          </article>
        ))}
      </div>
      <div className={`mt-6 flex gap-8 text-xs ${mono}`}><span>];</span><span className="text-[var(--green)]">// more experiments loading...</span></div>
    </PageView>
  )
}

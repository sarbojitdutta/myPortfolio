import { useState } from 'react'
import { PanelsTopLeft } from 'lucide-react'
import { CodeHeader, mono, border, PageView } from './shared'

const skills = ['React','Next.js' , 'TypeScript', 'JavaScript', 'Python', 'RESTAPI', 'FAST API', 'Node.js', 'SQL', 'RAG', 'Git']

export function AboutView() {
  const [preview, setPreview] = useState(false)

  return (
    <PageView>
      <CodeHeader><span className="text-[var(--purple)]">&lt;</span><span className="text-[var(--purple)]">section</span>{' '}<span className="text-[var(--blue)]">id</span>=<span className="text-[var(--orange)]">&quot;about&quot;</span><span className="text-[var(--purple)]">&gt;</span></CodeHeader>
      <div className={`mb-8 flex items-center justify-between text-[11px] text-[var(--faint)] ${mono}`}>
        <span>about.html</span>
        <button className="inline-flex items-center gap-1.5 border px-2.5 py-1.5 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]" onClick={() => setPreview(!preview)}><PanelsTopLeft size={14} /> {preview ? 'Code view' : 'Browser preview'}</button>
      </div>
      {preview ? <div className={`max-w-[800px] border ${border}`}><div className={`flex h-[30px] items-center gap-1 px-3 ${mono} text-[10px] text-[var(--faint)] bg-[var(--panel-2)]`}><span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" /><span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" /><span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" /><b className="ml-3 font-normal">localhost:5173/about.html</b></div><div className="p-[60px] max-[720px]:p-8"><span className={`text-[10px] uppercase tracking-widest text-[var(--accent)] ${mono}`}>ABOUT / 2026</span><h2 className="my-4 text-3xl text-[var(--text)]">Building with curiosity.</h2><p className="text-sm leading-loose text-[var(--muted)]">final year IT student at Asansol Engineering College, expected graduation June 2027.</p></div></div> : <div className="grid max-w-[850px] grid-cols-[minmax(0,1.4fr)_minmax(250px,.8fr)] gap-[9vw] max-[720px]:block"><div><span className={`mr-3 text-[11px] text-[var(--faint)] ${mono}`}>01</span><h2 className="my-4 text-3xl tracking-tight text-[var(--text)]">Building with curiosity.</h2><p className="mb-4 max-w-[550px] text-sm leading-loose text-[var(--muted)]">I&apos;m a final year IT student at Asansol Engineering College, expected to graduate in June 2027. I enjoy taking fuzzy problems, giving them structure, and shipping something people can actually use.</p><p className="mb-4 max-w-[550px] text-sm leading-loose text-[var(--muted)]">My current orbit includes AI systems, developer tools, and interfaces that feel calm even when the technology underneath is complex.</p></div><div className="border-l pl-6 max-[720px]:mt-8 max-[720px]:border-l-0 max-[720px]:border-t max-[720px]:pl-0 max-[720px]:pt-6"><span className={`text-xs text-[var(--green)] ${mono}`}>/* tools I reach for */</span><div className="mt-6 flex flex-wrap gap-1.5">{skills.map((skill) => <span className={`border px-2 py-1 text-[10px] text-[var(--muted)] ${border} ${mono}`} key={skill}>{skill}</span>)}</div></div></div>}
      <div className={`mt-12 text-xs text-[var(--purple)] ${mono}`}>&lt;/section&gt;</div>
    </PageView>
  )
}

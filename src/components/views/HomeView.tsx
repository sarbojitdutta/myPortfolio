import { Code2, ExternalLink } from 'lucide-react'
import type { FileName } from '../../types/portfolio'
import { CodeHeader, mono, PageView } from './shared'

export function HomeView({ openFile }: { openFile: (file: FileName) => void }) {
  return (
    <PageView>
      <CodeHeader><span className="text-[var(--purple)]">export default</span>{' '}<span className="text-[var(--purple)]">function</span>{' '}<span className="text-[var(--yellow)]">Home</span>() {'{'}</CodeHeader>
      <div className="max-w-[850px] pb-20 pl-[clamp(0px,5vw,64px)] pt-[38px] max-[720px]:pb-14 max-[720px]:pt-8">
        <p className={`text-[10px] uppercase tracking-widest text-[var(--accent)] ${mono}`}><span className="mr-3 text-[var(--faint)]">01</span>// a developer who likes turning ideas into useful things</p>
        <h1 className="my-6 text-[clamp(36px,5vw,67px)] font-semibold leading-tight tracking-[-0.045em] text-[var(--text)] max-[720px]:text-[39px]">Hi, I&apos;m <span className="text-[var(--blue)]">Sarbojit Dutta</span><i className="text-[var(--accent)]">.</i></h1>
        <p className={`text-[clamp(19px,2vw,26px)] font-medium text-[var(--muted)] ${mono}`}>A Full Stack Developer<span className="ml-1.5 inline-block h-[22px] w-0.5 animate-[cursor-blink_1s_infinite] align-middle bg-[var(--accent)]" /></p>
        <p className="my-7 max-w-[520px] text-sm leading-loose text-[var(--muted)]">I build thoughtful digital products at the intersection of clean interfaces, dependable systems, and curious problem-solving.</p>
        <div className="flex flex-wrap gap-2.5">
          <button className="inline-flex items-center gap-3 rounded border border-[var(--accent)] bg-[var(--accent)] px-3.5 py-2 text-xs text-[var(--bg)] hover:brightness-110" onClick={() => openFile('projects.ts')}>View my Projects <span>→</span></button>
          <button className="inline-flex items-center gap-3 rounded border px-3.5 py-2 text-xs text-[var(--text)] hover:border-[var(--accent)]" onClick={() => openFile('about.html')}>Learn More</button>
        </div>
        <a className={`mt-7 inline-flex items-center gap-2 text-xs text-[var(--muted)] hover:text-[var(--accent)] ${mono}`} href="https://github.com/sarbojitdutta" rel="noreferrer" target="_blank"><Code2 size={16} /> View GitHub <ExternalLink size={13} /></a>
      </div>
      <div className="flex justify-between gap-4 border-t border-[var(--border-soft)] pt-4 text-[11px] text-[var(--muted)] max-[720px]:flex-col"><span><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />Currently open to meaningful problems</span><span className={`text-[var(--faint)] ${mono}`}>// Asansol / India · UTC +05:30</span></div>
    </PageView>
  )
}

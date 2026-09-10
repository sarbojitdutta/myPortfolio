import { useState } from 'react'
import { Code2, Mail } from 'lucide-react'
import { CodeHeader, mono, PageView, border } from './shared'

export function ContactView() {
  const [sent, setSent] = useState(false)

  return (
    <PageView>
      <CodeHeader><span className="text-[var(--accent)]">.contact</span> {'{'} <span className="text-[var(--blue)]">display</span>: <span className="text-[var(--orange)]">flex</span>; <span className="text-[var(--blue)]">gap</span>: <span className="text-[var(--orange)]">2rem</span>; {'}'}</CodeHeader>
      <div className="grid max-w-[850px] grid-cols-[minmax(0,1.4fr)_minmax(250px,.8fr)] gap-[5vw] max-[720px]:block">
        <div>
          <span className={`text-xs text-[var(--green)] ${mono}`}>/* let&apos;s make something useful */</span>
          <h2 className="my-4 text-4xl tracking-tight text-[var(--text)]">Contact Me</h2>
          <p className="max-w-[550px] text-sm leading-loose text-[var(--muted)]">Feel free to reach out to me through any of the channels below. I'm always open to new opportunities and collaborations.</p>
          <div className="mt-8 flex flex-col gap-3.5">
            <a className={`inline-flex items-center gap-2 text-s text-[var(--muted)] hover:text-[var(--accent)] ${mono}`} href="mailto:sarbojitd48@gmail.com"><Mail size={16} /> sarbojitd48@gmail.com</a>
            <a className={`inline-flex items-center gap-2 text-s text-[var(--muted)] hover:text-[var(--accent)] ${mono}`} href="tel:9031046493"><span className="text-base">⌕</span> 9031046493</a>
            <div className="mt-2 flex gap-2">
              <a aria-label="GitHub" className="grid h-10 w-10 place-items-center border text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]" href="https://github.com/sarbojitdutta" rel="noreferrer" target="_blank"><Code2 size={17} /></a>
              <a aria-label="LinkedIn" className="grid h-10 w-10 place-items-center border text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]" href="https://www.linkedin.com/in/sarbojitdutta/" rel="noreferrer" target="_blank"><span className="font-semibold">in</span></a>
            </div>
          </div>
        </div>
      </div>
    </PageView>
  )
}

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
          <h2 className="my-4 text-3xl tracking-tight text-[var(--text)]">Have a project in mind?</h2>
          <p className="max-w-[550px] text-sm leading-loose text-[var(--muted)]">Tell me what you&apos;re working on, what feels stuck, or what you&apos;d love to explore together.</p>
          <div className="mt-8 flex flex-col gap-3.5">
            <a className={`inline-flex items-center gap-2 text-xs text-[var(--muted)] hover:text-[var(--accent)] ${mono}`} href="mailto:sarbojitd48@gmail.com"><Mail size={16} /> sarbojitd48@gmail.com</a>
            <a className={`inline-flex items-center gap-2 text-xs text-[var(--muted)] hover:text-[var(--accent)] ${mono}`} href="tel:9031046493"><span className="text-base">⌕</span> 9031046493</a>
            <div className="mt-2 flex gap-2"><a aria-label="GitHub" className="grid h-8 w-8 place-items-center border text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]" href="https://github.com/sarbojitdutta" rel="noreferrer" target="_blank"><Code2 size={17} /></a><a aria-label="LinkedIn" className="grid h-8 w-8 place-items-center border text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]" href="https://linkedin.com" rel="noreferrer" target="_blank"><span className="font-semibold">in</span></a></div>
          </div>
        </div>
        <form className="flex flex-col gap-4 max-[720px]:mt-10" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
          <label className={`flex flex-col gap-1.5 text-[11px] text-[var(--muted)] ${mono}`}>Name<input className={`border bg-[var(--panel)] p-2.5 text-xs text-[var(--text)] outline-none focus:border-[var(--accent)] ${border}`} placeholder="Your name" required /></label>
          <label className={`flex flex-col gap-1.5 text-[11px] text-[var(--muted)] ${mono}`}>Email<input className={`border bg-[var(--panel)] p-2.5 text-xs text-[var(--text)] outline-none focus:border-[var(--accent)] ${border}`} placeholder="you@example.com" required type="email" /></label>
          <label className={`flex flex-col gap-1.5 text-[11px] text-[var(--muted)] ${mono}`}>Message<textarea className={`resize-y border bg-[var(--panel)] p-2.5 text-xs text-[var(--text)] outline-none focus:border-[var(--accent)] ${border}`} placeholder="A few words about the project..." required rows={4} /></label>
          <button className="inline-flex items-center justify-center gap-3 self-start rounded border border-[var(--accent)] bg-[var(--accent)] px-3.5 py-2 text-xs text-[var(--bg)] hover:brightness-110" type="submit">{sent ? 'Message ready to send' : 'Send message'} <span>→</span></button>
          {sent && <small className="text-[11px] leading-normal text-[var(--accent)]">Thanks. This demo form is ready to connect to Formspree or a mailto endpoint.</small>}
        </form>
      </div>
    </PageView>
  )
}

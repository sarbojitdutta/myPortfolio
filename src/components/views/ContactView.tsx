import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { CodeHeader, mono, PageView } from './shared'

export function ContactView() {
  return (
    <PageView>
      <CodeHeader>
        <span className="text-[var(--accent)]">contact.ts</span>
        <span className="text-[var(--muted)]"> — </span>
        <span className="text-[var(--green)]">get in touch</span>
      </CodeHeader>

      <div className="max-w-[820px]">
        <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel-2)] shadow-lg">
          <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--red)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--orange)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--green)]" />
            <div className={`ml-2 flex items-center gap-2 text-sm text-[var(--muted)] ${mono}`}>
              <Terminal size={15} />
              contact.ts
            </div>
          </div>

          <div className={`p-7 text-base leading-relaxed sm:p-9 sm:text-lg ${mono}`}>
            <div className="mb-7">
              <span className="text-[var(--muted)]">$ </span>
              <span className="text-[var(--accent)]">whoami</span>
            </div>

            <div className="mb-8 pl-4 text-[var(--text)]">
              <div><span className="text-[var(--blue)]">name</span><span className="text-[var(--muted)]">:</span> Sarbojit Dutta</div>
              <div><span className="text-[var(--blue)]">role</span><span className="text-[var(--muted)]">:</span> Full Stack Web Developer</div>
              <div><span className="text-[var(--blue)]">status</span><span className="text-[var(--muted)]">:</span> <span className="text-[var(--green)]">open to opportunities</span></div>
            </div>

            <div className="mb-6">
              <span className="text-[var(--muted)]">$ </span>
              <span className="text-[var(--accent)]">contact</span>
              <span className="text-[var(--text)]"> --email --social</span>
            </div>

            <div className="grid gap-3 border-l-2 border-[var(--accent)] pl-5 sm:pl-6">
              <a href="mailto:sarbojitd48@gmail.com" className="group flex items-center gap-3 text-[var(--text)] transition-colors hover:text-[var(--accent)]">
                <Mail size={20} className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
                <span>sarbojitd48@gmail.com</span>
              </a>
              <a href="https://github.com/sarbojitdutta" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[var(--text)] transition-colors hover:text-[var(--accent)]">
                <Github size={20} className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
                <span>github.com/sarbojitdutta</span>
              </a>
              <a href="https://www.linkedin.com/in/sarbojitdutta/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-[var(--text)] transition-colors hover:text-[var(--accent)]">
                <Linkedin size={20} className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
                <span>linkedin.com/in/sarbojitdutta</span>
              </a>
            </div>

            <div className="mt-8 text-[var(--muted)]">
              <span className="text-[var(--green)]">✓</span> Thanks for stopping by.
              <span className="ml-1 animate-pulse text-[var(--accent)]">▊</span>
            </div>
          </div>
        </div>
      </div>
    </PageView>
  )
}

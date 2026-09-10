import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { CodeHeader, mono, PageView } from './shared'

export function ContactView() {
  return (
    <PageView>
      <CodeHeader>
        <span className="text-[var(--accent)]">contact.ts</span>
      </CodeHeader>

      <div className="max-w-[850px]">
        <div className={`mb-8 text-sm font-semibold tracking-[0.2em] text-[var(--muted)] sm:text-base ${mono}`}>
          CONTACT
        </div>

        <div className={`space-y-2 text-base leading-relaxed sm:text-md md:text-sm ${mono}`}>
          <div>
            <span className="text-[var(--blue)]">const</span>{' '}
            <span className="text-[var(--accent)]">developer</span>{' '}
            <span className="text-[var(--muted)]">=</span>{' '}
            <span className="text-[var(--text)]">{'{'}</span>
          </div>

          <div className="pl-5 sm:pl-8">
            <span className="text-[var(--blue)]">name</span>
            <span className="text-[var(--muted)]">: </span>
            <span className="text-[var(--green)]">&quot;Sarbojit Dutta&quot;</span>
            <span className="text-[var(--muted)]">,</span>
          </div>

          <div className="pl-5 sm:pl-8">
            <span className="text-[var(--blue)]">role</span>
            <span className="text-[var(--muted)]">: </span>
            <span className="text-[var(--green)]">&quot;Full Stack Developer&quot;</span>
            <span className="text-[var(--muted)]">,</span>
          </div>

          <div className="pl-5 sm:pl-8">
            <span className="text-[var(--blue)]">status</span>
            <span className="text-[var(--muted)]">: </span>
            <span className="text-[var(--green)]">&quot;Open to opportunities&quot;</span>
          </div>

          <div className="text-[var(--text)]">{' };'}</div>

          <div className="pt-6">
            <span className="text-[var(--accent)]">connect</span>
            <span className="text-[var(--text)]">({'{'}</span>
          </div>

          <div className="pl-5 sm:pl-8">
            <a href="mailto:sarbojitd48@gmail.com" className="group inline-flex items-center gap-2 hover:text-[var(--accent)]">
              <Mail size={18} className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
              <span className="text-[var(--blue)]">email</span>
              <span className="text-[var(--muted)]">: </span>
              <span className="text-[var(--green)] group-hover:text-[var(--accent)]">&quot;sarbojitd48@gmail.com&quot;</span>
            </a>
            <span className="text-[var(--muted)]">,</span>
          </div>

          <div className="pl-5 sm:pl-8">
            <a href="https://github.com/sarbojitdutta" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-[var(--accent)]">
              <FaGithub size={18} className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
              <span className="text-[var(--blue)]">github</span>
              <span className="text-[var(--muted)]">: </span>
              <span className="text-[var(--green)] group-hover:text-[var(--accent)]">&quot;github.com/sarbojitdutta&quot;</span>
            </a>
            <span className="text-[var(--muted)]">,</span>
          </div>

          <div className="pl-5 sm:pl-8">
            <a href="https://linkedin.com/in/sarbojitdutta" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-[var(--accent)]">
              <FaLinkedin size={18} className="shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
              <span className="text-[var(--blue)]">linkedin</span>
              <span className="text-[var(--muted)]">: </span>
              <span className="text-[var(--green)] group-hover:text-[var(--accent)]">&quot;linkedin.com/in/sarbojitdutta&quot;</span>
            </a>
          </div>

          <div className="text-[var(--text)]">{' });'}</div>
        </div>
      </div>
    </PageView>
  )
}

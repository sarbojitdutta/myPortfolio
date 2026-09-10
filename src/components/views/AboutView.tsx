import { ArrowDownToLine, BrainCircuit, Braces, Database, MapPin, Telescope } from 'lucide-react'
import {
  SiFastapi,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { CodeHeader, mono, border, PageView } from './shared'

const skillGroups = [
  {
    label: 'LANGUAGES',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    label: 'FRAMEWORKS',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    label: 'TOOLS / AI',
    skills: [
      { name: 'REST API', icon: Braces },
      { name: 'SQL', icon: Database },
      { name: 'RAG', icon: BrainCircuit },
      { name: 'Git', icon: SiGit },
    ],
  },
]

function SkillLogo({ skill }: { skill: (typeof skillGroups)[number]['skills'][number] }) {
  const Icon = skill.icon
  return (
    <span className="inline-flex items-center gap-2 border px-3 py-2 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]" title={skill.name}>
      <Icon size={16} />
      <span className={mono}>{skill.name}</span>
    </span>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className={`mb-5 text-[10px] font-semibold tracking-[0.2em] text-[var(--accent)] ${mono}`}>{children}</h3>
}

export function AboutView() {
  return (
    <PageView>
      <CodeHeader>
        <span className="text-[var(--purple)]">&lt;</span>
        <span className="text-[var(--purple)]">section</span>{' '}
        <span className="text-[var(--blue)]">id</span>=<span className="text-[var(--orange)]">&quot;about&quot;</span>
        <span className="text-[var(--purple)]">&gt;</span>
      </CodeHeader>

      <div className={`max-w-[900px] border ${border}`}>
        <div className={`flex h-[30px] items-center gap-1 border-b px-3 ${mono} text-[10px] text-[var(--faint)]`} style={{ borderColor: 'var(--border)', background: 'var(--panel-2)' }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" />
          <b className="ml-3 font-normal">localhost:5173/about.html</b>
        </div>

        <div className="space-y-12 p-[clamp(28px,5vw,60px)]">
          <section>
            <span className={`text-[10px] uppercase tracking-widest text-[var(--accent)] ${mono}`}>ABOUT / 2026</span>
            <h2 className="my-4 text-3xl leading-tight text-[var(--text)] sm:text-4xl">Building with curiosity.</h2>
            <p className="max-w-2xl text-sm leading-loose text-[var(--muted)]">
              I’m a Full Stack Developer and IT student who enjoys turning ideas into useful products. I started with web development because I liked seeing an idea become something people could actually use. As I explored AI, that curiosity shifted toward how applications can reason over information instead of simply generating text. That led me to LLM tooling, retrieval systems, and Graph RAG — and projects like Lexis became a way to explore those ideas in practice.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-[var(--bg)] transition-opacity hover:opacity-90">
                <ArrowDownToLine size={15} /> Download Resume
              </a>
              <a href="mailto:sarbojitd48@gmail.com" className="inline-flex items-center gap-2 border px-4 py-2.5 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]">
                Email me
              </a>
            </div>
          </section>

          <section className="border-t pt-8" style={{ borderColor: 'var(--border)' }}>
            <SectionTitle>EDUCATION</SectionTitle>
            <div className="flex gap-4">
              <div className="mt-1 h-8 w-1 shrink-0 bg-[var(--accent)]" />
              <div>
                <h4 className="text-base font-semibold text-[var(--text)]">Asansol Engineering College</h4>
                <p className="mt-1 text-sm text-[var(--muted)]">B.Tech — Computer Science &amp; Information Technology</p>
                <p className={`mt-2 text-xs text-[var(--faint)] ${mono}`}>Expected graduation: June 2027</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8" style={{ borderColor: 'var(--border)' }}>
            <SectionTitle>JOURNEY / MILESTONES</SectionTitle>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ['2024', 'Started development', 'Learned the fundamentals of programming and web development.'],
                ['2025', 'Built Lexis', 'Explored LLMs, retrieval and Graph RAG through a legal-tech project.'],
                ['2026', 'Built CognitoFlow', 'Combined full-stack engineering with AI-powered GitHub workflows.'],
              ].map(([year, title, description]) => (
                <div key={year} className="border p-4 transition-colors hover:border-[var(--accent)]" style={{ borderColor: 'var(--border)' }}>
                  <span className={`text-lg font-bold text-[var(--accent)] ${mono}`}>{year}</span>
                  <h4 className="mt-3 text-sm font-semibold text-[var(--text)]">{title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t pt-8" style={{ borderColor: 'var(--border)' }}>
            <SectionTitle>TECH STACK</SectionTitle>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className={`mb-2 text-[9px] tracking-widest text-[var(--faint)] ${mono}`}>{group.label}</p>
                  <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <SkillLogo key={skill.name} skill={skill} />)}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 border-t pt-8 sm:grid-cols-2" style={{ borderColor: 'var(--border)' }}>
            <div className="border p-5" style={{ borderColor: 'var(--border)' }}>
              <Telescope size={20} className="mb-3 text-[var(--accent)]" />
              <SectionTitle>BEYOND CODE</SectionTitle>
              <p className="text-sm leading-relaxed text-[var(--muted)]">When I’m away from the terminal, I’m usually exploring astronomy, planning long-distance motorcycle trips, or looking for the next trail to trek.</p>
            </div>
            <div className="border p-5" style={{ borderColor: 'var(--border)' }}>
              <MapPin size={20} className="mb-3 text-[var(--accent)]" />
              <SectionTitle>OPEN TO</SectionTitle>
              <p className="text-sm leading-relaxed text-[var(--muted)]">Full-stack development, AI engineering, and opportunities where I can build, learn, and solve interesting problems.</p>
            </div>
          </section>

          <section className="border-t pt-8" style={{ borderColor: 'var(--border)' }}>
            <SectionTitle>CONNECT</SectionTitle>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/sarbojitdutta" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 border px-4 py-2.5 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]">
                <FaGithub size={17} /> GitHub
              </a>
              <a href="https://linkedin.com/in/sarbojitdutta" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 border px-4 py-2.5 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]">
                <FaLinkedin size={17} /> LinkedIn
              </a>
              <a href="mailto:sarbojitd48@gmail.com" aria-label="Email" className="inline-flex items-center gap-2 border px-4 py-2.5 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]">
                Email
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className={`mt-12 text-xs text-[var(--purple)] ${mono}`}>&lt;/section&gt;</div>
    </PageView>
  )
}

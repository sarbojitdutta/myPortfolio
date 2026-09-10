import { Braces, Database, BrainCircuit } from 'lucide-react'
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
import { CodeHeader, mono, border, PageView } from './shared'

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'REST API', icon: Braces },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'SQL', icon: Database },
  { name: 'RAG', icon: BrainCircuit },
  { name: 'Git', icon: SiGit },
]

function SkillLogo({ skill }: { skill: (typeof skills)[number] }) {
  const Icon = skill.icon
  return (
    <span className="inline-flex shrink-0 items-center gap-2 border px-3 py-2 text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]" title={skill.name}>
      <Icon size={17} />
      <span className={mono}>{skill.name}</span>
    </span>
  )
}

function SkillsMarquee() {
  return (
    <div className="relative mt-7 w-full overflow-hidden border-y py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]" style={{ borderColor: 'var(--border)' }}>
      <div className="flex w-max gap-3 animate-[skills-marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...skills, ...skills].map((skill, index) => (
          <SkillLogo skill={skill} key={`${skill.name}-${index}`} />
        ))}
      </div>
      <style>{`
        @keyframes skills-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export function AboutView() {
  return (
    <PageView>
      <CodeHeader>
        <span className="text-[var(--purple)]">&lt;</span>
        <span className="text-[var(--purple)]">section</span>{' '}<span className="text-[var(--blue)]">id</span>=<span className="text-[var(--orange)]">&quot;about&quot;</span><span className="text-[var(--purple)]">&gt;</span>
      </CodeHeader>
      <div className={`max-w-[800px] border ${border}`}>
        <div className={`flex h-[30px] items-center gap-1 px-3 ${mono} text-[10px] text-[var(--faint)] bg-[var(--panel-2)]`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" /><span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" /><span className="h-1.5 w-1.5 rounded-full bg-[var(--faint)]" /><b className="ml-3 font-normal">localhost:5173/about.html</b>
        </div>
        <div className="p-[60px] max-[720px]:p-8">
          <span className={`text-[10px] uppercase tracking-widest text-[var(--accent)] ${mono}`}>ABOUT / 2026</span><h2 className="my-4 text-3xl text-[var(--text)]">Building with curiosity.</h2>
          <p className="text-sm leading-loose text-[var(--muted)]">I’m a Full Stack Developer and final-year IT student, building modern web apps and AI-powered solutions, graduating in 2027.
          </p><SkillsMarquee />
        </div>
      </div>
      <div className={`mt-12 text-xs text-[var(--purple)] ${mono}`}>&lt;/section&gt;</div>
    </PageView>
  )
}

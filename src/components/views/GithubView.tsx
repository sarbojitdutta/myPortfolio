import { useEffect, useState } from 'react'
import { Code2, Copy, ExternalLink } from 'lucide-react'
import { CodeHeader, mono, border, PageView } from './shared'

type ContributionDay = {
  date: string
  contributionCount: number
  color: string
}

type ContributionWeek = {
  contributionDays: ContributionDay[]
}

type ContributionCalendar = {
  totalContributions: number
  weeks: ContributionWeek[]
}

export function GithubView() {
  const [raw, setRaw] = useState(false)
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null)
  const [error, setError] = useState(false)
  const levels = [0, 25, 45, 70, 100]

  useEffect(() => {
    fetch('/api/github-contributions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Github request failed')
        }
        return response.json()
      })
      .then(setCalendar)
      .catch(() => setError(true))
  }, [])

  return (
    <PageView>
      <CodeHeader><span className={`text-xs text-[var(--green)] ${mono}`}># a small window into the green squares</span></CodeHeader>
      <div className={`mb-8 flex items-center justify-between text-[11px] text-[var(--faint)] ${mono}`}><span>github.md</span><button className="inline-flex items-center gap-1.5 border px-2.5 py-1.5 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]" onClick={() => setRaw(!raw)}><Copy size={14} /> {raw ? 'Preview' : 'Raw markdown'}</button></div>
      {raw ? (
        <pre className={`whitespace-pre-wrap text-[13px] leading-loose text-[var(--muted)] ${mono}`}>{`# GitHub\n\nI build in public when I can.\n\n- Currently exploring: graph RAG\n- Learning: distributed systems\n- Open to: interesting collaborations`}</pre>
      ) : (
        <div className="max-w-[800px]">
          <span className={`text-[10px] uppercase tracking-widest text-[var(--accent)] ${mono}`}>GITHUB / PROFILE</span>
          <h2 className="my-4 text-3xl tracking-tight text-[var(--text)]">Building in public, one commit at a time.</h2>
          <p className="max-w-[550px] text-sm leading-loose text-[var(--muted)]">I like open source, tiny experiments, and leaving the codebase a little better than I found it.</p>
          <div className={`my-8 border p-4 ${border}`}>
            <div className={`flex justify-between text-[10px] text-[var(--muted)] ${mono}`}><span>contributions in the last year</span>
              <span className='text-[var(--accent)]'>
                {calendar
                  ? `${calendar.totalContributions} contributions`
                  : error
                    ? 'unavailable'
                    : 'loading...'}
              </span>
            </div>
            {error && (
              <p className="my-4 text-xs text-red-400">
                GitHub contributions could not be loaded. Check the API environment variables.
              </p>
            )}
            <div className="my-4 grid max-w-[570px] grid-cols-13 gap-1 max-[720px]:gap-0.5">
              {calendar?.weeks.flatMap((week) =>
                week.contributionDays.map((day) => (
                  <i
                    key={day.date}
                    className="aspect-square"
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    style={{ background: day.color }}
                  />
                )),
              )}
            </div>
            <div className={`flex justify-end gap-1 text-[10px] text-[var(--muted)] ${mono}`}><span className="mr-1">Less</span>{levels.map((opacity) => <i key={opacity} className="h-2.5 w-2.5" style={{ background: `color-mix(in srgb, var(--accent) ${opacity}%, var(--panel-2))` }} />)}<span className="ml-1">More</span></div>
          </div>
          <a className="inline-flex items-center gap-3 border px-3.5 py-2 text-xs text-[var(--text)] hover:border-[var(--accent)]" href="https://github.com/sarbojitdutta" rel="noreferrer" target="_blank"><Code2 size={16} /> Visit full GitHub profile <ExternalLink size={14} /></a>
        </div>
      )}
    </PageView>
  )
}

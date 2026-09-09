import { Check, Settings } from 'lucide-react'
import { themes, type ThemeName } from '../../themes/themes'
import { mono, border, PageView } from './shared'

export function ThemePicker({ theme, setTheme }: { theme: ThemeName; setTheme: (theme: ThemeName) => void }) {
  return (
    <PageView className="max-w-[700px]">
      <div className={`flex items-start gap-3.5 border-b pb-6 ${border}`}>
        <Settings className="mt-1 text-[var(--accent)]" size={18} />
        <div><span className={`text-[10px] uppercase tracking-widest text-[var(--accent)] ${mono}`}>APPEARANCE</span><h2 className="my-2 text-[25px] text-[var(--text)]">Choose a color theme</h2><p className="text-[13px] text-[var(--muted)]">Changes apply instantly across the workspace.</p></div>
      </div>
      <div className="mt-5 grid gap-1.5">
        {Object.entries(themes).map(([key, value]) => (
          <button key={key} onClick={() => setTheme(key as ThemeName)} className={`flex items-center gap-3 border border-transparent p-3 text-left text-xs text-[var(--muted)] hover:border-[var(--accent)] hover:bg-[var(--panel)] hover:text-[var(--text)] ${theme === key ? 'border-[var(--accent)] bg-[var(--panel)] text-[var(--text)]' : ''}`}>
            <span className="flex gap-0.5">{value.swatches.map((swatch) => <i key={swatch} className={`h-[19px] w-[19px] border ${border}`} style={{ background: swatch }} />)}</span>
            <span>{value.label}</span>
            {theme === key && <Check className="ml-auto text-[var(--accent)]" size={15} />}
          </button>
        ))}
      </div>
    </PageView>
  )
}

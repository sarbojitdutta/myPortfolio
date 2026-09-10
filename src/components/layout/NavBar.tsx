export const NavBar = () => {
    return (
        <nav className="flex flex-none items-center gap-2 border-b border-[var(--border)] bg-[var(--panel-2)] px-4 py-3 text-xs text-[var(--muted)]">
            <span className="text-[var(--faint)]">File</span>
            <span className="text-[var(--faint)]">Edit</span>
            <span className="text-[var(--faint)]">View</span>
            <span className="text-[var(--faint)]">Go</span>
            <span className="text-[var(--faint)]">Run</span>
            <span className="text-[var(--faint)]">Terminal</span>
            <span className="text-[var(--faint)]">Help</span>
        </nav>
    )
}
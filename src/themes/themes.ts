export type ThemeName = 'dark-plus' | 'dracula' | 'monokai' | 'light-plus' | 'solarized' | 'github'
export const themes: Record<ThemeName, { label: string; swatches: string[] }> = {
    'dark-plus': { label: 'Dark+ (Default Dark)', 
    swatches: ['#1e1e1e', '#252526', '#569cd6'] }, 
    dracula: { label: 'Dracula', swatches: ['#282a36', '#44475a', '#ff79c6'] }, 
    monokai: { label: 'Monokai', swatches: ['#272822', '#49483e', '#a6e22e'] },
    'light-plus': { label: 'Light+ (Default Light)', 
    swatches: ['#ffffff', '#f3f3f3', '#007acc'] }, 
    solarized: { label: 'Solarized Light', swatches: ['#fdf6e3', '#eee8d5', '#268bd2'] }, 
    github: { label: 'GitHub Light', swatches: ['#ffffff', '#f6f8fa', '#0969da'] },
}
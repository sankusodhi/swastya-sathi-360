const SESSION_KEY = 'swasthya-saathi-session'
const LOCALE_KEY = 'swasthya-saathi-locale'
const THEME_KEY = 'swasthya-saathi-theme'

export const storage = {
  getSession(): string | null {
    return window.localStorage.getItem(SESSION_KEY)
  },
  setSession(value: string): void {
    window.localStorage.setItem(SESSION_KEY, value)
  },
  clearSession(): void {
    window.localStorage.removeItem(SESSION_KEY)
  },
  getLocale(): string | null {
    return window.localStorage.getItem(LOCALE_KEY)
  },
  setLocale(value: string): void {
    window.localStorage.setItem(LOCALE_KEY, value)
  },
  getTheme(): string | null {
    return window.localStorage.getItem(THEME_KEY)
  },
  setTheme(value: string): void {
    window.localStorage.setItem(THEME_KEY, value)
  },
}
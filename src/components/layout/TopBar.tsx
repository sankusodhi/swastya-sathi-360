import { Bell, MoonStar, SunMedium } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'
import { useAuth } from '@/hooks/useAuth'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'
import { Button } from '@/components/ui/Button'
import { languageLabels } from '@/utils/i18n'
import { useTheme } from '@/hooks/useTheme'
import { LanguageSelector } from '@/components/LanguageSelector'
import { useTranslation } from '@/hooks/useTranslation'

export function TopBar() {
  const { language, setLanguage } = useLocale()
  const { session, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const isOnline = useOnlineStatus()
  const { t } = useTranslation()

  return (
    <header className="glass-panel sticky top-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-[28px] px-4 py-3 shadow-2xl shadow-slate-950/5">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-teal-600 dark:text-teal-300">{t('topbar.platform')}</p>
        <h1 className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">
          {session?.user.fullName ?? t('topbar.guest')} • {isOnline ? t('topbar.online') : t('topbar.offline')}
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <LanguageSelector />

        <Button variant="secondary" onClick={toggleTheme} aria-label={t('topbar.toggle_theme')}>
          {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          {theme === 'dark' ? t('topbar.theme.light') : t('topbar.theme.dark')}
        </Button>

        <Button variant="ghost" onClick={logout} disabled={!session}>
          <Bell className="h-4 w-4" />
          {t('topbar.notifications')}
        </Button>

        <span className="rounded-full bg-teal-600 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {session ? languageLabels[language] : t('topbar.preview')}
        </span>
      </div>
    </header>
  )
}
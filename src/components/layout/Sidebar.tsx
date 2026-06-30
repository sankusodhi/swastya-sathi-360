import { NavLink } from 'react-router-dom'
import { dashboardNavigation, publicNavigation, roleLabelKeys } from '@/utils/constants'
import { useTranslation } from '@/hooks/useTranslation'
import { useAuth } from '@/hooks/useAuth'
import { Card } from '@/components/ui/Card'

export function Sidebar() {
  const { session } = useAuth()
  const { t } = useTranslation()

  return (
    <aside className="space-y-4">
      <Card className="sticky top-4 hidden lg:block">
        <p className="text-xs uppercase tracking-[0.28em] text-teal-600 dark:text-teal-300">{t('sidebar.swasthya')}</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{t('sidebar.command_center')}</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{t('sidebar.one_platform')}</p>
        {session ? <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{t('sidebar.signed_in_as', 'Signed in as')} {t(roleLabelKeys[session.user.role])}</p> : null}
      </Card>

      <Card>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">{t('sidebar.public')}</p>
          {publicNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  'flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition',
                  isActive
                    ? 'bg-teal-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80',
                ].join(' ')
              }
            >
              <span>{t(item.labelKey)}</span>
              <span className="text-xs opacity-80">{t(item.descriptionKey)}</span>
            </NavLink>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-xs uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">{t('sidebar.dashboards')}</p>
          {dashboardNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  'flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition',
                  isActive
                    ? 'bg-sky-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80',
                ].join(' ')
              }
            >
              <span>{t(item.labelKey)}</span>
              <span className="text-xs opacity-80">{t(item.descriptionKey)}</span>
            </NavLink>
          ))}
        </div>
      </Card>
    </aside>
  )
}
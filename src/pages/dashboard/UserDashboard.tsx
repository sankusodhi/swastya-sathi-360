import { CalendarDays, CircleCheckBig, Megaphone, Pill, ShieldPlus, Siren } from 'lucide-react'
import { DashboardFrame } from './DashboardFrame'
import { useTranslation } from '@/hooks/useTranslation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import type { DashboardMetric } from '@/types/domain'

const rawMetrics = [
  { labelKey: 'dashboard.metrics.upcoming_appointments', value: '04', delta: '+2 this week', tone: 'sky' },
  { labelKey: 'dashboard.metrics.active_reminders', value: '12', delta: '3 urgent medicine reminders', tone: 'emerald' },
  { labelKey: 'dashboard.metrics.vaccinations_tracked', value: '08', delta: 'All on schedule', tone: 'amber' },
  { labelKey: 'dashboard.metrics.health_records', value: '19', delta: 'Synced across devices', tone: 'violet' },
]

const features = [
  { icon: CircleCheckBig, titleKey: 'user.cards.profile_management.title', descriptionKey: 'user.cards.profile_management.description' },
  { icon: Megaphone, titleKey: 'user.cards.ai_symptom_checker.title', descriptionKey: 'user.cards.ai_symptom_checker.description' },
  { icon: Pill, titleKey: 'user.cards.medicine_reminders.title', descriptionKey: 'user.cards.medicine_reminders.description' },
  { icon: CalendarDays, titleKey: 'user.cards.appointment_booking.title', descriptionKey: 'user.cards.appointment_booking.description' },
]

export function UserDashboard() {
  const { t } = useTranslation()
  const metrics: DashboardMetric[] = rawMetrics.map((m) => ({ ...m, label: t(m.labelKey) }))
  return (
    <DashboardFrame
      eyebrow={t('dashboard.citizen_eyebrow')}
      title={t('dashboard.citizen_title')}
      description={t('dashboard.citizen_description')}
      metrics={metrics}
    >
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((item) => (
              <div key={item.titleKey} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
                <item.icon className="h-5 w-5 text-teal-600" />
                <h3 className="mt-3 text-base font-semibold text-slate-950 dark:text-white">{t(item.titleKey)}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t(item.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Siren className="h-5 w-5 text-rose-600" />
              <div>
                <h3 className="font-semibold text-slate-950 dark:text-white">{t('user.emergency.title')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{t('user.emergency.description')}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-100">
              {t('user.emergency.help_text')}
            </div>
            <Button fullWidth variant="danger">
              <ShieldPlus className="h-4 w-4" />
              {t('user.emergency.update_button')}
            </Button>
          </div>
        </Card>
      </div>
    </DashboardFrame>
  )
}
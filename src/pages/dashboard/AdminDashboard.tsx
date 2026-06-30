import { BarChart3, FolderKey, ShieldCheck, UserRoundCog, Users2 } from 'lucide-react'
import { DashboardFrame } from './DashboardFrame'
import { Card } from '@/components/ui/Card'
import type { DashboardMetric } from '@/types/domain'
import { useTranslation } from '@/hooks/useTranslation'

const rawMetrics = [
  { labelKey: 'dashboard.metrics.active_users', value: '2,418', delta: '+120 this month', tone: 'emerald' },
  { labelKey: 'dashboard.metrics.verified_clinicians', value: '84', delta: '6 onboarding requests', tone: 'sky' },
  { labelKey: 'dashboard.metrics.field_workers', value: '312', delta: '42 districts covered', tone: 'amber' },
  { labelKey: 'dashboard.metrics.reports_delivered', value: '57', delta: 'Weekly and monthly packs', tone: 'violet' },
]

const features = [
  { icon: Users2, titleKey: 'admin.cards.user_management.title', descriptionKey: 'admin.cards.user_management.description' },
  { icon: UserRoundCog, titleKey: 'admin.cards.doctor_asha_management.title', descriptionKey: 'admin.cards.doctor_asha_management.description' },
  { icon: BarChart3, titleKey: 'admin.cards.analytics_dashboard.title', descriptionKey: 'admin.cards.analytics_dashboard.description' },
  { icon: FolderKey, titleKey: 'admin.cards.reports_dashboard.title', descriptionKey: 'admin.cards.reports_dashboard.description' },
  { icon: ShieldCheck, titleKey: 'admin.cards.security_overview.title', descriptionKey: 'admin.cards.security_overview.description' },
  { icon: BarChart3, titleKey: 'admin.cards.deployment_readiness.title', descriptionKey: 'admin.cards.deployment_readiness.description' },
]

export function AdminDashboard() {
  const { t } = useTranslation()
  const metrics: DashboardMetric[] = rawMetrics.map((m) => ({ ...m, label: t(m.labelKey) }))

  return (
    <DashboardFrame
      eyebrow={t('dashboard.admin_eyebrow')}
      title={t('dashboard.admin_title')}
      description={t('dashboard.admin_description')}
      metrics={metrics}
    >
      <Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <div key={item.titleKey} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
              <item.icon className="h-5 w-5 text-violet-600" />
              <h3 className="mt-3 text-base font-semibold text-slate-950 dark:text-white">{t(item.titleKey)}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t(item.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </Card>
    </DashboardFrame>
  )
}
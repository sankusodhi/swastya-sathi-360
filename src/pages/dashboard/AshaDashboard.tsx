import { Baby, ClipboardList, Database, HeartPulse, ScanSearch, Syringe } from 'lucide-react'
import { DashboardFrame } from './DashboardFrame'
import { Card } from '@/components/ui/Card'
import type { DashboardMetric } from '@/types/domain'
import { useTranslation } from '@/hooks/useTranslation'

type DashboardMetricInput = Omit<DashboardMetric, 'label'> & { labelKey: string }

const rawMetrics: DashboardMetricInput[] = [
  { labelKey: 'dashboard.metrics.patients_added', value: '126', delta: '18 this month', tone: 'emerald' },
  { labelKey: 'dashboard.metrics.pregnancy_followups', value: '27', delta: '5 high risk cases', tone: 'amber' },
  { labelKey: 'dashboard.metrics.vaccine_tracking', value: '212', delta: '98% coverage', tone: 'sky' },
  { labelKey: 'dashboard.metrics.survey_records', value: '41', delta: 'Offline sync pending 3', tone: 'violet' },
]

const features = [
  { icon: ClipboardList, titleKey: 'asha.cards.add_patient.title', descriptionKey: 'asha.cards.add_patient.description' },
  { icon: Baby, titleKey: 'asha.cards.pregnancy_monitoring.title', descriptionKey: 'asha.cards.pregnancy_monitoring.description' },
  { icon: Syringe, titleKey: 'asha.cards.vaccination_tracking.title', descriptionKey: 'asha.cards.vaccination_tracking.description' },
  { icon: HeartPulse, titleKey: 'asha.cards.high_risk_monitoring.title', descriptionKey: 'asha.cards.high_risk_monitoring.description' },
  { icon: ScanSearch, titleKey: 'asha.cards.health_survey_records.title', descriptionKey: 'asha.cards.health_survey_records.description' },
  { icon: Database, titleKey: 'asha.cards.offline_sync.title', descriptionKey: 'asha.cards.offline_sync.description' },
]

export function AshaDashboard() {
  const { t } = useTranslation()
  const metrics: DashboardMetric[] = rawMetrics.map((m) => ({
    label: t(m.labelKey),
    value: m.value,
    delta: m.delta,
    tone: m.tone,
  }))

  return (
    <DashboardFrame
      eyebrow={t('dashboard.asha_eyebrow')}
      title={t('dashboard.asha_title')}
      description={t('dashboard.asha_description')}
      metrics={metrics}
    >
      <Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <div key={item.titleKey} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
              <item.icon className="h-5 w-5 text-teal-600" />
              <h3 className="mt-3 text-base font-semibold text-slate-950 dark:text-white">{t(item.titleKey)}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t(item.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </Card>
    </DashboardFrame>
  )
}
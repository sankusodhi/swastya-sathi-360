import { FileClock, FolderKanban, Mic, NotebookPen, PillBottle, Users } from 'lucide-react'
import { DashboardFrame } from './DashboardFrame'
import { Card } from '@/components/ui/Card'
import type { DashboardMetric } from '@/types/domain'
import { useTranslation } from '@/hooks/useTranslation'

type DashboardMetricInput = Omit<DashboardMetric, 'label'> & { labelKey: string }

const rawMetrics: DashboardMetricInput[] = [
  { labelKey: 'dashboard.metrics.patients_in_queue', value: '34', delta: '8 pending review', tone: 'sky' },
  { labelKey: 'dashboard.metrics.appointments_today', value: '14', delta: '6 telehealth', tone: 'emerald' },
  { labelKey: 'dashboard.metrics.prescriptions_issued', value: '23', delta: '4 require follow-up', tone: 'amber' },
  { labelKey: 'dashboard.metrics.summaries_generated', value: '11', delta: 'AI assisted', tone: 'violet' },
]

const features = [
  { icon: Users, titleKey: 'doctor.cards.patient_list.title', descriptionKey: 'doctor.cards.patient_list.description' },
  { icon: FileClock, titleKey: 'doctor.cards.medical_history.title', descriptionKey: 'doctor.cards.medical_history.description' },
  { icon: NotebookPen, titleKey: 'doctor.cards.prescription_management.title', descriptionKey: 'doctor.cards.prescription_management.description' },
  { icon: FolderKanban, titleKey: 'doctor.cards.appointment_management.title', descriptionKey: 'doctor.cards.appointment_management.description' },
  { icon: PillBottle, titleKey: 'doctor.cards.medication_review.title', descriptionKey: 'doctor.cards.medication_review.description' },
  { icon: Mic, titleKey: 'doctor.cards.voice_input_support.title', descriptionKey: 'doctor.cards.voice_input_support.description' },
]

export function DoctorDashboard() {
  const { t } = useTranslation()
  const metrics: DashboardMetric[] = rawMetrics.map((m) => ({
    label: t(m.labelKey),
    value: m.value,
    delta: m.delta,
    tone: m.tone,
  }))

  return (
    <DashboardFrame
      eyebrow={t('dashboard.doctor_eyebrow')}
      title={t('dashboard.doctor_title')}
      description={t('dashboard.doctor_description')}
      metrics={metrics}
    >
      <Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <div key={item.titleKey} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
              <item.icon className="h-5 w-5 text-sky-600" />
              <h3 className="mt-3 text-base font-semibold text-slate-950 dark:text-white">{t(item.titleKey)}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t(item.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </Card>
    </DashboardFrame>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageFrame } from './PageFrame'
import { useTranslation } from '@/hooks/useTranslation'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { FeatureCard } from '@/types/domain'

const features: FeatureCard[] = [
  { title: 'features.ai_symptom_support', description: 'features.ai_symptom_support_description', icon: 'AI' },
  { title: 'features.multilingual_access', description: 'features.multilingual_access_description', icon: 'भाषा' },
  { title: 'features.offline_first', description: 'features.offline_first_description', icon: '↻' },
  { title: 'features.secure_role_control', description: 'features.secure_role_control_description', icon: '🔒' },
  { title: 'features.digital_health_records', description: 'features.digital_health_records_description', icon: '📋' },
  { title: 'features.rural_first', description: 'features.rural_first_description', icon: '📱' },
]

export function HomePage() {
  const { t } = useTranslation()
  return (
    <PageFrame
      eyebrow={t('home.app_name')}
      title={t('home.title')}
      description={t('home.description')}
      actions={
        <>
          <Link to="/register" className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-teal-700">
            {t('home.get_started')} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/dashboard/user" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100">
            {t('home.open_dashboard')}
          </Link>
        </>
      }
      features={features.map((item) => ({
        ...item,
        title: t(item.title),
        description: t(item.description),
      }))}
    >
      <Card>
        <SectionHeader eyebrow={t('home.platform_goals_eyebrow')} title={t('home.platform_goals_title')} description={t('home.platform_goals_description')} />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: t('home.supported_languages'), value: '5+' },
            { label: t('home.user_roles'), value: '4' },
            { label: t('home.offline_mode'), value: t('home.offline_mode') },
            { label: t('home.deployment_targets'), value: t('home.deployment_targets_value') },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </Card>
    </PageFrame>
  )
}
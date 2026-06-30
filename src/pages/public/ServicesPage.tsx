import { PageFrame } from './PageFrame'
import { useTranslation } from '@/hooks/useTranslation'
import type { FeatureCard } from '@/types/domain'

const features: FeatureCard[] = [
  { title: 'services.features.citizen_care.title', description: 'services.features.citizen_care.description', icon: '🏡' },
  { title: 'services.features.field_tools.title', description: 'services.features.field_tools.description', icon: '🩺' },
  { title: 'services.features.clinical_workflow.title', description: 'services.features.clinical_workflow.description', icon: '👩‍⚕️' },
  { title: 'services.features.administration.title', description: 'services.features.administration.description', icon: '📊' },
]

export function ServicesPage() {
  const { t } = useTranslation()

  return (
    <PageFrame
      eyebrow={t('services.eyebrow')}
      title={t('services.title')}
      description={t('services.description')}
      features={features.map((item) => ({
        ...item,
        title: t(item.title),
        description: t(item.description),
      }))}
    />
  )
}
import { PageFrame } from './PageFrame'
import { useTranslation } from '@/hooks/useTranslation'
import type { FeatureCard } from '@/types/domain'

const features: FeatureCard[] = [
  { title: 'about.features.mission.title', description: 'about.features.mission.description', icon: '🎯' },
  { title: 'about.features.security.title', description: 'about.features.security.description', icon: '🛡️' },
  { title: 'about.features.scalability.title', description: 'about.features.scalability.description', icon: '📈' },
]

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <PageFrame
      eyebrow={t('about.eyebrow')}
      title={t('about.title')}
      description={t('about.description')}
      features={features.map((item) => ({ ...item, title: t(item.title), description: t(item.description) }))}
    />
  )
}
import { Link } from 'react-router-dom'
import { PageFrame } from './PageFrame'
import { useTranslation } from '@/hooks/useTranslation'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <PageFrame
      eyebrow={t('not_found.eyebrow')}
      title={t('not_found.title')}
      description={t('not_found.description')}
      actions={
        <Link to="/" className="inline-flex items-center rounded-2xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-teal-700">
          {t('not_found.actions.return_home')}
        </Link>
      }
    />
  )
}
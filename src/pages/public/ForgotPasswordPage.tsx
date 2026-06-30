import { PageFrame } from './PageFrame'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/hooks/useTranslation'

export function ForgotPasswordPage() {
  const { t } = useTranslation()

  return (
    <PageFrame
      eyebrow={t('forgot_password.eyebrow')}
      title={t('forgot_password.title')}
      description={t('forgot_password.description')}
    >
      <Card className="mx-auto max-w-xl">
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p>{t('forgot_password.help_text')}</p>
          <Button fullWidth>{t('forgot_password.actions.send_reset_link')}</Button>
        </div>
      </Card>
    </PageFrame>
  )
}
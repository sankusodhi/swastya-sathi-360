import { Mail, MapPin, Phone } from 'lucide-react'
import { PageFrame } from './PageFrame'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/hooks/useTranslation'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <PageFrame
      eyebrow={t('contact.eyebrow')}
      title={t('contact.title')}
      description={t('contact.description')}
      actions={<Button>{t('contact.actions.send_message')}</Button>}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { icon: Mail, title: t('contact.methods.email.title'), value: 'support@swasthyasaathi360.in' },
          { icon: Phone, title: t('contact.methods.phone.title'), value: '+91 00000 00000' },
          { icon: MapPin, title: t('contact.methods.coverage.title'), value: t('contact.methods.coverage.value') },
        ].map((item) => (
          <Card key={item.title} className="flex items-start gap-4">
            <item.icon className="mt-1 h-5 w-5 text-teal-600" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.title}</p>
              <p className="mt-1 text-base font-medium text-slate-950 dark:text-white">{item.value}</p>
            </div>
          </Card>
        ))}
      </div>
    </PageFrame>
  )
}
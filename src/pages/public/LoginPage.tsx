import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link, Navigate } from 'react-router-dom'
import { LockKeyhole, Mail } from 'lucide-react'
import { PageFrame } from './PageFrame'
import { useTranslation } from '@/hooks/useTranslation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'
import type { AuthSession } from '@/types/domain'
import { UserRole, LanguageCode } from '@/types/domain'

const schema = z.object({
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(8, 'Password must contain at least 8 characters'),
})

type LoginFormValues = z.infer<typeof schema>

const demoSession: AuthSession = {
  accessToken: 'demo-access-token',
  refreshToken: 'demo-refresh-token',
  user: {
    id: 'demo-user',
    fullName: 'Dr. Meera Sharma',
    email: 'doctor@swasthyasaathi.in',
    role: UserRole.Doctor,
    language: LanguageCode.English,
  },
}

export function LoginPage() {
  const { login, session } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: 'doctor@swasthyasaathi.in', password: 'Password@123' },
  })

  const onSubmit = async (): Promise<void> => {
    login(demoSession)
  }

  if (session) {
    return <Navigate to="/dashboard/doctor" replace />
  }

  const { t } = useTranslation()

  return (
    <PageFrame eyebrow={t('auth.authentication')} title={t('auth.secure_sign_in')} description={t('auth.use_demo')}>
      <Card className="mx-auto max-w-2xl">
        <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('auth.email')}</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/40">
              <Mail className="h-4 w-4 text-teal-600" />
              <input type="email" className="w-full bg-transparent outline-none" {...register('email')} placeholder={t('auth.email') + ' ' + 'name@hospital.in'} />
            </div>
            {errors.email ? <span className="text-sm text-rose-600">{errors.email.message}</span> : null}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('auth.password')}</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/40">
              <LockKeyhole className="h-4 w-4 text-teal-600" />
              <input type="password" className="w-full bg-transparent outline-none" {...register('password')} placeholder="********" />
            </div>
            {errors.password ? <span className="text-sm text-rose-600">{errors.password.message}</span> : null}
          </label>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
            <Link to="/forgot-password" className="font-medium text-teal-700 dark:text-teal-300">{t('auth.forgot_password')}</Link>
            <Link to="/register" className="font-medium text-sky-700 dark:text-sky-300">{t('auth.create_account')}</Link>
          </div>

          <Button type="submit" fullWidth disabled={isSubmitting}>
            {isSubmitting ? t('auth.signing_in') : t('auth.sign_in')}
          </Button>
        </form>
      </Card>
    </PageFrame>
  )
}
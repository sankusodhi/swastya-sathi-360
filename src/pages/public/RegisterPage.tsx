import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { Building2, LockKeyhole, Mail, Phone, UserRound } from 'lucide-react'
import { PageFrame } from './PageFrame'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { languageOptions, roleLabelKeys } from '@/utils/constants'
import { useTranslation } from '@/hooks/useTranslation'
import { UserRole, LanguageCode, type AuthSession } from '@/types/domain'
import { useAuth } from '@/hooks/useAuth'

const schema = z.object({
  fullName: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phoneNumber: z.string().min(10, 'Enter a valid phone number'),
  password: z.string().min(8, 'Password must contain at least 8 characters'),
  language: z.string().min(1, 'Choose a language'),
  role: z.nativeEnum(UserRole),
})

type RegisterFormValues = z.infer<typeof schema>

export function RegisterPage() {
  const { login } = useAuth()
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      language: LanguageCode.Hindi,
      role: UserRole.Citizen,
    },
  })

  const onSubmit = async (values: RegisterFormValues) => {
    const session: AuthSession = {
      accessToken: 'demo-access-token',
      refreshToken: 'demo-refresh-token',
      user: {
        id: `user-${values.phoneNumber}`,
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        role: values.role,
        language: values.language as LanguageCode,
      },
    }

    login(session)
  }

  return (
    <PageFrame
      eyebrow={t('auth.create_account')}
      title={t('auth.register')}
      description={t('auth.use_demo')}
    >
      <Card className="mx-auto max-w-3xl">
        <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('auth.full_name')}</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/40">
              <UserRound className="h-4 w-4 text-teal-600" />
              <input className="w-full bg-transparent outline-none" {...register('fullName')} placeholder={t('auth.full_name')} />
            </div>
            {errors.fullName ? <span className="text-sm text-rose-600">{errors.fullName.message}</span> : null}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('auth.email')}</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/40">
              <Mail className="h-4 w-4 text-teal-600" />
              <input type="email" className="w-full bg-transparent outline-none" {...register('email')} placeholder={t('auth.email')} />
            </div>
            {errors.email ? <span className="text-sm text-rose-600">{errors.email.message}</span> : null}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('auth.phone_number')}</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/40">
              <Phone className="h-4 w-4 text-teal-600" />
              <input className="w-full bg-transparent outline-none" {...register('phoneNumber')} placeholder={t('auth.phone_number')} />
            </div>
            {errors.phoneNumber ? <span className="text-sm text-rose-600">{errors.phoneNumber.message}</span> : null}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('auth.password')}</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/40">
              <LockKeyhole className="h-4 w-4 text-teal-600" />
              <input type="password" className="w-full bg-transparent outline-none" {...register('password')} placeholder={t('auth.password')} />
            </div>
            {errors.password ? <span className="text-sm text-rose-600">{errors.password.message}</span> : null}
          </label>

          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('auth.primary_language')}</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/40">
              <Building2 className="h-4 w-4 text-teal-600" />
              <select className="w-full bg-transparent outline-none" {...register('language')}>
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.language ? <span className="text-sm text-rose-600">{errors.language.message}</span> : null}
          </label>

          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('auth.role')}</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-950/40">
              <Building2 className="h-4 w-4 text-teal-600" />
              <select className="w-full bg-transparent outline-none" {...register('role')}>
                {Object.values(UserRole).map((role) => (
                  <option key={role} value={role}>
                    {t(roleLabelKeys[role as UserRole])}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
            <p>{t('auth.already_have_account')}</p>
            <Link to="/login" className="font-medium text-teal-700 dark:text-teal-300">{t('auth.sign_in_now')}</Link>
          </div>

          <div className="md:col-span-2">
            <Button type="submit" fullWidth disabled={isSubmitting}>
              {isSubmitting ? t('auth.creating_account') : t('auth.register')}
            </Button>
          </div>
        </form>
      </Card>
    </PageFrame>
  )
}

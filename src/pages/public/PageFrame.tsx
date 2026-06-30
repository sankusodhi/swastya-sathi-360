import type { ReactNode } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { FeatureGrid } from '@/components/ui/FeatureGrid'
import { InfoPill } from '@/components/ui/InfoPill'
import { useTranslation } from '@/hooks/useTranslation'
import { healthHighlights } from '@/utils/constants'
import type { FeatureCard } from '@/types/domain'

interface PageFrameProps {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
  highlights?: readonly string[]
  features?: FeatureCard[]
  children?: ReactNode
}

export function PageFrame({ eyebrow, title, description, actions, highlights, features, children }: PageFrameProps) {
  const { t } = useTranslation()
  const resolvedHighlights = (highlights ?? healthHighlights).map((k) => t(k))
  return (
    <AppShell>
      <section className="space-y-6">
        <Card className="overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <InfoPill>{eyebrow}</InfoPill>
              <div>
                <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl">{title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
              </div>
              <div className="flex flex-wrap gap-3">{actions}</div>
            </div>
            <div className="grid gap-3 rounded-[28px] bg-teal-600/5 p-5">
              {resolvedHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-teal-600/10 bg-white/70 p-4 text-sm leading-7 text-slate-700 dark:bg-slate-950/40 dark:text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {features ? <FeatureGrid items={features} /> : null}
        {children}
      </section>
    </AppShell>
  )
}
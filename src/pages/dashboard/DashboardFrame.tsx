import type { ReactNode } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatCard } from '@/components/ui/StatCard'
import type { DashboardMetric } from '@/types/domain'

interface DashboardFrameProps {
  eyebrow: string
  title: string
  description: string
  metrics: DashboardMetric[]
  children?: ReactNode
}

export function DashboardFrame({ eyebrow, title, description, metrics, children }: DashboardFrameProps) {
  return (
    <AppShell>
      <section className="space-y-6">
        <Card>
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <StatCard key={metric.label} metric={metric} />
          ))}
        </div>
        {children}
      </section>
    </AppShell>
  )
}
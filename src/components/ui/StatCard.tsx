import { ArrowUpRight } from 'lucide-react'
import type { DashboardMetric } from '@/types/domain'
import { Card } from './Card'

interface StatCardProps {
  metric: DashboardMetric
}

const toneClasses: Record<DashboardMetric['tone'], string> = {
  emerald: 'from-emerald-500/15 to-emerald-500/5 text-emerald-700 dark:text-emerald-200',
  sky: 'from-sky-500/15 to-sky-500/5 text-sky-700 dark:text-sky-200',
  amber: 'from-amber-500/15 to-amber-500/5 text-amber-700 dark:text-amber-200',
  violet: 'from-violet-500/15 to-violet-500/5 text-violet-700 dark:text-violet-200',
}

export function StatCard({ metric }: StatCardProps) {
  return (
    <Card className={`bg-gradient-to-br ${toneClasses[metric.tone]}`}>
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300">{metric.label}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-3xl font-semibold text-slate-950 dark:text-white">{metric.value}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{metric.delta}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0" />
      </div>
    </Card>
  )
}
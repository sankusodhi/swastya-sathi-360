import type { FeatureCard } from '@/types/domain'
import { Card } from './Card'

interface FeatureGridProps {
  items: FeatureCard[]
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600/10 text-2xl">{item.icon}</div>
          <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
        </Card>
      ))}
    </div>
  )
}
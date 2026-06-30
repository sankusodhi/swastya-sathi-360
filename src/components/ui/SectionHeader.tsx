import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description: string
  action?: ReactNode
}

export function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-300">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      {action}
    </div>
  )
}
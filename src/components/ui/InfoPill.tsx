import type { ReactNode } from 'react'

interface InfoPillProps {
  children: ReactNode
}

export function InfoPill({ children }: InfoPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-teal-500/15 bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-200">
      {children}
    </span>
  )
}
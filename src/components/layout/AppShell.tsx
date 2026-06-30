import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="page-shell">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-6 px-4 py-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-6">
        <Sidebar />
        <main className="space-y-6">
          <TopBar />
          {children}
        </main>
      </div>
    </div>
  )
}
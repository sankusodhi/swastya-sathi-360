import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { AuthSession } from '@/types/domain'
import { storage } from '@/utils/storage'

interface AuthContextValue {
  session: AuthSession | null
  isAuthenticated: boolean
  login: (session: AuthSession) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() => {
    const stored = storage.getSession()

    if (!stored) {
      return null
    }

    try {
      return JSON.parse(stored) as AuthSession
    } catch {
      storage.clearSession()
      return null
    }
  })

  useEffect(() => {
    if (session) {
      storage.setSession(JSON.stringify(session))
    }
  }, [session])

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      isAuthenticated: Boolean(session),
      login: setSession,
      logout: () => {
        storage.clearSession()
        setSession(null)
      },
    }),
    [session],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }

  return context
}
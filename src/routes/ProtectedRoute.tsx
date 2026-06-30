import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { UserRole } from '@/types/domain'

interface ProtectedRouteProps {
  children: ReactNode
  allowedRoles?: UserRole[]
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { session } = useAuth()

  if (!session) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(session.user.role)) {
    return <Navigate to="/dashboard/user" replace />
  }

  return <>{children}</>
}
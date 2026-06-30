import type { AuthSession, AuthUser, DashboardMetric } from './domain'

export interface ApiErrorResponse {
  message: string
  code?: string
  statusCode?: number
  details?: string[]
}

export interface ApiEnvelope<TData> {
  success: boolean
  message: string
  data: TData
}

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  fullName: string
  email: string
  phoneNumber: string
  password: string
  language: string
}

export interface DashboardSummaryResponse {
  metrics: DashboardMetric[]
  alerts: string[]
}

export interface SessionResponse {
  session: AuthSession
}

export interface UserListResponse {
  users: AuthUser[]
}
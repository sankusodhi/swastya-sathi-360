export enum UserRole {
  Citizen = 'CITIZEN',
  AshaWorker = 'ASHA_WORKER',
  Doctor = 'DOCTOR',
  Admin = 'ADMIN',
}

export enum LanguageCode {
  English = 'en',
  Hindi = 'hi',
  Gondi = 'gon',
  Halbi = 'hlb',
  Chhattisgarhi = 'hne',
}

export enum AppointmentStatus {
  Pending = 'PENDING',
  Confirmed = 'CONFIRMED',
  Rescheduled = 'RESCHEDULED',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
}

export interface AuthUser {
  id: string
  fullName: string
  email: string
  role: UserRole
  language: LanguageCode
  phoneNumber?: string
  avatarUrl?: string
}

export interface AuthSession {
  accessToken: string
  refreshToken: string
  user: AuthUser
}

export interface DashboardMetric {
  label: string
  value: string
  delta: string
  tone: 'emerald' | 'sky' | 'amber' | 'violet'
}

export interface FeatureCard {
  title: string
  description: string
  icon: string
}

export interface TranslationMap {
  [key: string]: string
}
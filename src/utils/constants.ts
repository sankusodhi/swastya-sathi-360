import { LanguageCode, UserRole } from '@/types/domain'

export const appName = 'Swasthya Saathi 360'

export const languageOptions = [
  { value: LanguageCode.English, label: 'English' },
  { value: LanguageCode.Hindi, label: 'Hindi' },
  { value: LanguageCode.Gondi, label: 'Gondi' },
  { value: LanguageCode.Halbi, label: 'Halbi' },
  { value: LanguageCode.Chhattisgarhi, label: 'Chhattisgarhi' },
] as const

export const roleLabels: Record<UserRole, string> = {
  [UserRole.Citizen]: 'Citizen',
  [UserRole.AshaWorker]: 'ASHA Worker',
  [UserRole.Doctor]: 'Doctor',
  [UserRole.Admin]: 'Administrator',
}

export const roleLabelKeys: Record<UserRole, string> = {
  [UserRole.Citizen]: 'roles.CITIZEN',
  [UserRole.AshaWorker]: 'roles.ASHA_WORKER',
  [UserRole.Doctor]: 'roles.DOCTOR',
  [UserRole.Admin]: 'roles.ADMIN',
}

export const publicNavigation = [
  { labelKey: 'nav.home', href: '/', descriptionKey: 'nav.about' },
  { labelKey: 'nav.about', href: '/about', descriptionKey: 'home.platform_goals_title' },
  { labelKey: 'nav.services', href: '/services', descriptionKey: 'home.platform_goals_description' },
  { labelKey: 'nav.contact', href: '/contact', descriptionKey: 'home.deployment_targets' },
] as const

export const dashboardNavigation = [
  { labelKey: 'dashboard.citizen_eyebrow', href: '/dashboard/user', descriptionKey: 'dashboard.citizen_description' },
  { labelKey: 'dashboard.asha_eyebrow', href: '/dashboard/asha', descriptionKey: 'dashboard.citizen_description' },
  { labelKey: 'dashboard.doctor_eyebrow', href: '/dashboard/doctor', descriptionKey: 'dashboard.citizen_description' },
  { labelKey: 'dashboard.admin_eyebrow', href: '/dashboard/admin', descriptionKey: 'dashboard.citizen_description' },
] as const

export const healthHighlights = [
  'health_highlights.0',
  'health_highlights.1',
  'health_highlights.2',
  'health_highlights.3',
] as const
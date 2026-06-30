import { LanguageCode } from '@/types/domain'

export const languageLabels: Record<LanguageCode, string> = {
  [LanguageCode.English]: 'English',
  [LanguageCode.Hindi]: 'हिंदी',
  [LanguageCode.Gondi]: 'गोंडी',
  [LanguageCode.Halbi]: 'हलबी',
  [LanguageCode.Chhattisgarhi]: 'छत्तीसगढ़ी',
}

export const localeTagByCode: Record<LanguageCode, string> = {
  [LanguageCode.English]: 'en-IN',
  [LanguageCode.Hindi]: 'hi-IN',
  [LanguageCode.Gondi]: 'gon-IN',
  [LanguageCode.Halbi]: 'hlb-IN',
  [LanguageCode.Chhattisgarhi]: 'hne-IN',
}
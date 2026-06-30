import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageCode } from '@/types/domain'
import { localeTagByCode } from '@/utils/i18n'
import { storage } from '@/utils/storage'

interface LocaleContextValue {
  language: LanguageCode
  localeTag: string
  setLanguage: (language: LanguageCode) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const stored = storage.getLocale()
    return stored && Object.values(LanguageCode).includes(stored as LanguageCode)
      ? (stored as LanguageCode)
      : LanguageCode.English
  })

  useEffect(() => {
    storage.setLocale(language)
    document.documentElement.lang = localeTagByCode[language]
  }, [language])

  const value = useMemo<LocaleContextValue>(
    () => ({
      language,
      localeTag: localeTagByCode[language],
      setLanguage,
    }),
    [language],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }

  return context
}
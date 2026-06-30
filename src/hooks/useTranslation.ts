import { useMemo } from 'react'
import { useLocale } from '@/hooks/useLocale'
import { LanguageCode } from '@/types/domain'

type Translations = Record<string, any>

function get(obj: any, path: string): any {
  if (!obj) return undefined
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj)
}

const fileMap: Record<LanguageCode, string> = {
  [LanguageCode.English]: 'en.json',
  [LanguageCode.Hindi]: 'hi.json',
  [LanguageCode.Gondi]: 'gondi.json',
  [LanguageCode.Halbi]: 'halbi.json',
  [LanguageCode.Chhattisgarhi]: 'chhattisgarhi.json',
}

export function useTranslation() {
  const { language } = useLocale()

  // load all locale files eagerly via Vite glob
  const modules = import.meta.glob('../locales/*.json', { eager: true }) as Record<string, { default: Translations }>

  const translations = useMemo(() => {
    const map: Record<string, Translations> = {}
    for (const key in modules) {
      const parts = key.split('/')
      const file = parts[parts.length - 1]
      map[file] = modules[key].default || (modules[key] as any)
    }

    const getFor = (code: LanguageCode) => map[fileMap[code]] || {}

    return {
      current: getFor(language),
      fallback: getFor(LanguageCode.English),
    }
  }, [language])

  function t(key: string, defaultText?: string): string {
    const found = get(translations.current, key)
    if (found !== undefined) return String(found)
    const fb = get(translations.fallback, key)
    if (fb !== undefined) return String(fb)
    return defaultText ?? key
  }

  return { t, lang: language }
}

export default useTranslation

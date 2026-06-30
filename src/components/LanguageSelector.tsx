import { Globe } from 'lucide-react'
import { languageOptions } from '@/utils/constants'
import { languageLabels } from '@/utils/i18n'
import { useLocale } from '@/hooks/useLocale'
import { useTranslation } from '@/hooks/useTranslation'

export function LanguageSelector() {
  const { language, setLanguage } = useLocale()
  const { t } = useTranslation()

  return (
    <label className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100">
      <Globe className="h-4 w-4" />
      <select
        className="bg-transparent outline-none"
        value={language}
        onChange={(event) => setLanguage(event.target.value as typeof language)}
        aria-label={t('topbar.language_select')}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {languageLabels[option.value]}
          </option>
        ))}
      </select>
    </label>
  )
}

export default LanguageSelector

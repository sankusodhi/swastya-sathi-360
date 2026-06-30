import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  fullWidth?: boolean
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-500/20',
  secondary: 'bg-sky-100 text-sky-900 hover:bg-sky-200 dark:bg-sky-500/10 dark:text-sky-100',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80',
  danger: 'bg-rose-600 text-white hover:bg-rose-700',
}

export function Button({ children, className = '', fullWidth = false, variant = 'primary', type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 disabled:cursor-not-allowed disabled:opacity-60',
        variantClasses[variant],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
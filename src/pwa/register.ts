import { registerSW } from 'virtual:pwa-register'

let hasRegistered = false

export function registerPwa(): void {
  if (hasRegistered || typeof window === 'undefined') {
    return
  }

  hasRegistered = true

  registerSW({
    immediate: true,
  })
}
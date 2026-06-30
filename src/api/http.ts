import axios from 'axios'
import { storage } from '@/utils/storage'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api/v1',
  withCredentials: true,
  timeout: 20000,
})

api.interceptors.request.use((config) => {
  const sessionRaw = storage.getSession()

  if (sessionRaw) {
    try {
      const session = JSON.parse(sessionRaw) as { accessToken?: string }

      if (session.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`
      }
    } catch {
      storage.clearSession()
    }
  }

  return config
})
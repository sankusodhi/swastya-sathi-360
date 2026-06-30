import type { AuthSession } from '@/types/domain'
import { api } from './http'
import type { LoginPayload, RegisterPayload } from '@/types/api'

export async function login(payload: LoginPayload): Promise<AuthSession> {
  const { data } = await api.post<AuthSession>('/auth/login', payload)
  return data
}

export async function register(payload: RegisterPayload): Promise<AuthSession> {
  const { data } = await api.post<AuthSession>('/auth/register', payload)
  return data
}
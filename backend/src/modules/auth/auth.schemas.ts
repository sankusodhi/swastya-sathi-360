import { z } from 'zod'
import { UserRole } from '@/types/domain'

export const registerSchema = z.object({
  body: z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phoneNumber: z.string().min(8),
    password: z.string().min(8),
    role: z.nativeEnum(UserRole),
    language: z.string().default('hi'),
  }),
})

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
})

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
})

export const resetPasswordSchema = z.object({
  body: z.object({
    token: z.string().min(1),
    password: z.string().min(8),
  }),
})

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1),
  }),
})
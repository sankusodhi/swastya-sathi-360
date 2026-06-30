import type { Request, Response } from 'express'
import { asyncHandler } from '@/lib/asyncHandler'
import {
  forgotPasswordSchema,
  loginSchema,
  refreshTokenSchema,
  registerSchema,
  resetPasswordSchema,
} from './auth.schemas'
import { loginUser, refreshSession, registerUser, requestPasswordReset, resetPassword } from './auth.service'

export const register = asyncHandler(async (req: Request, res: Response) => {
  const payload = registerSchema.parse({ body: req.body }).body
  const session = await registerUser(payload)

  res.status(201).json({ success: true, message: 'Account created', data: { session } })
})

export const login = asyncHandler(async (req: Request, res: Response) => {
  const payload = loginSchema.parse({ body: req.body }).body
  const session = await loginUser(payload)

  res.status(200).json({ success: true, message: 'Login successful', data: { session } })
})

export const refresh = asyncHandler(async (req: Request, res: Response) => {
  const payload = refreshTokenSchema.parse({ body: req.body }).body
  const session = await refreshSession(payload.refreshToken)

  res.status(200).json({ success: true, message: 'Session refreshed', data: { session } })
})

export const forgotPassword = asyncHandler(async (req: Request, res: Response) => {
  const payload = forgotPasswordSchema.parse({ body: req.body }).body
  const result = await requestPasswordReset(payload.email)

  res.status(200).json({ success: true, message: result.message, data: result })
})

export const resetPasswordController = asyncHandler(async (req: Request, res: Response) => {
  const payload = resetPasswordSchema.parse({ body: req.body }).body
  const result = await resetPassword(payload.token, payload.password)

  res.status(200).json({ success: true, message: result.message, data: result })
})
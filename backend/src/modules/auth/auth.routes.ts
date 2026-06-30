import { Router } from 'express'
import { forgotPassword, login, refresh, register, resetPasswordController } from './auth.controller'

export const authRouter = Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/refresh', refresh)
authRouter.post('/forgot-password', forgotPassword)
authRouter.post('/reset-password', resetPasswordController)
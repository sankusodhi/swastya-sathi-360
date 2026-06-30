import { Router } from 'express'
import { getMe, listUsers } from './users.controller'
import { authenticate, authorize } from '@/middleware/auth'
import { UserRole } from '@/types/domain'

export const usersRouter = Router()

usersRouter.get('/', authenticate, authorize(UserRole.ADMIN), listUsers)
usersRouter.get('/me', authenticate, getMe)
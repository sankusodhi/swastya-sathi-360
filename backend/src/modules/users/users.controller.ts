import type { Request, Response } from 'express'
import { asyncHandler } from '@/lib/asyncHandler'
import { prisma } from '@/config/prisma'
import { ApiError } from '@/lib/apiError'

export const listUsers = asyncHandler(async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } })
  res.json({ success: true, message: 'Users fetched', data: { users } })
})

export const getMe = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.header('x-demo-user-id')

  if (!userId) {
    throw new ApiError(401, 'Unauthenticated request', 'AUTH_REQUIRED')
  }

  const user = await prisma.user.findUnique({ where: { id: userId } })

  if (!user) {
    throw new ApiError(404, 'User not found', 'USER_NOT_FOUND')
  }

  res.json({ success: true, message: 'Profile loaded', data: { user } })
})
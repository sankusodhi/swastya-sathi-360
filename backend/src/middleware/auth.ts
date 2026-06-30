import type { NextFunction, Request, Response } from 'express'
import { ApiError } from '@/lib/apiError'
import { verifyAccessToken } from '@/lib/token'
import { UserRole } from '@/types/domain'

interface AuthenticatedRequest extends Request {
  user?: {
    id: string
    role: UserRole
  }
}

export function authenticate(req: AuthenticatedRequest, _res: Response, next: NextFunction): void {
  const header = req.header('authorization')

  if (!header?.startsWith('Bearer ')) {
    next(new ApiError(401, 'Authentication required', 'AUTH_REQUIRED'))
    return
  }

  const token = header.slice(7)

  try {
    const payload = verifyAccessToken(token)
    req.user = { id: payload.sub, role: payload.role }
    next()
  } catch {
    next(new ApiError(401, 'Invalid or expired token', 'TOKEN_INVALID'))
  }
}

export function authorize(...roles: UserRole[]) {
  return (req: AuthenticatedRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new ApiError(401, 'Authentication required', 'AUTH_REQUIRED'))
      return
    }

    if (!roles.includes(req.user.role)) {
      next(new ApiError(403, 'Insufficient permissions', 'FORBIDDEN'))
      return
    }

    next()
  }
}

export type { AuthenticatedRequest }
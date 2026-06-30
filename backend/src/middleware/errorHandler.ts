import type { NextFunction, Request, Response } from 'express'
import { ApiError } from '@/lib/apiError'
import { logger } from '@/config/logger'

export function notFoundHandler(_req: Request, _res: Response, next: NextFunction): void {
  next(new ApiError(404, 'Route not found', 'NOT_FOUND'))
}

export function errorHandler(error: unknown, _req: Request, res: Response, next: NextFunction): void {
  void next

  if (error instanceof ApiError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
      code: error.code,
      details: error.details,
    })
    return
  }

  logger.error({ error }, 'Unhandled server error')

  res.status(500).json({
    success: false,
    message: 'Internal server error',
  })
}
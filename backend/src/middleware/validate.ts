import type { NextFunction, Request, Response } from 'express'
import type { AnyZodObject } from 'zod'
import { ApiError } from '@/lib/apiError'

export function validate(schema: AnyZodObject) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    })

    if (!result.success) {
      next(new ApiError(400, 'Validation failed', 'VALIDATION_ERROR', result.error.issues.map((issue) => issue.message)))
      return
    }

    next()
  }
}
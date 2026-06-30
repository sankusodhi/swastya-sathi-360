import type { NextFunction, Request, Response } from 'express'
import crypto from 'crypto'

export function requestContext(req: Request, res: Response, next: NextFunction): void {
  res.setHeader('x-request-id', req.header('x-request-id') ?? crypto.randomUUID())
  next()
}
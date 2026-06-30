import { Router } from 'express'

export const recordsRouter = Router()

recordsRouter.get('/', (_req, res) => {
  res.json({ success: true, message: 'Health records fetched', data: { healthRecords: [] } })
})
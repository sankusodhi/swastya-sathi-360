import { Router } from 'express'

export const analyticsRouter = Router()

analyticsRouter.get('/summary', (_req, res) => {
  res.json({ success: true, message: 'Analytics summary fetched', data: { charts: [], insights: [] } })
})
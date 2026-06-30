import { Router } from 'express'

export const notificationsRouter = Router()

notificationsRouter.get('/', (_req, res) => {
  res.json({ success: true, message: 'Notifications fetched', data: { notifications: [] } })
})
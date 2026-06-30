import { Router } from 'express'

export const remindersRouter = Router()

remindersRouter.get('/', (_req, res) => {
  res.json({ success: true, message: 'Reminders fetched', data: { reminders: [] } })
})

remindersRouter.post('/', (_req, res) => {
  res.status(201).json({ success: true, message: 'Reminder created', data: {} })
})
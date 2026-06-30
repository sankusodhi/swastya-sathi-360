import { Router } from 'express'

export const prescriptionsRouter = Router()

prescriptionsRouter.get('/', (_req, res) => {
  res.json({ success: true, message: 'Prescriptions fetched', data: { prescriptions: [] } })
})

prescriptionsRouter.post('/', (_req, res) => {
  res.status(201).json({ success: true, message: 'Prescription created', data: {} })
})
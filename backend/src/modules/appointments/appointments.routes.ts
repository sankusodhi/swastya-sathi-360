import { Router } from 'express'

export const appointmentsRouter = Router()

appointmentsRouter.get('/', (_req, res) => {
  res.json({ success: true, message: 'Appointments fetched', data: { appointments: [] } })
})

appointmentsRouter.post('/', (_req, res) => {
  res.status(201).json({ success: true, message: 'Appointment booked', data: {} })
})
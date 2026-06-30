import { Router } from 'express'

export const patientsRouter = Router()

patientsRouter.get('/', (_req, res) => {
  res.json({ success: true, message: 'Patients fetched', data: { patients: [] } })
})

patientsRouter.post('/', (_req, res) => {
  res.status(201).json({ success: true, message: 'Patient created', data: {} })
})
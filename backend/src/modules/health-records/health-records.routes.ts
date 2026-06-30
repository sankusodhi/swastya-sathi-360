import { Router } from 'express'

export const healthRecordsRouter = Router()

healthRecordsRouter.get('/', (_req, res) => {
  res.json({ success: true, message: 'Health records fetched', data: { healthRecords: [] } })
})

healthRecordsRouter.post('/', (_req, res) => {
  res.status(201).json({ success: true, message: 'Health record created', data: {} })
})
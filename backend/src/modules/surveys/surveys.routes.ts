import { Router } from 'express'

export const surveysRouter = Router()

surveysRouter.get('/', (_req, res) => {
  res.json({ success: true, message: 'Surveys fetched', data: { surveys: [] } })
})

surveysRouter.post('/', (_req, res) => {
  res.status(201).json({ success: true, message: 'Survey created', data: {} })
})
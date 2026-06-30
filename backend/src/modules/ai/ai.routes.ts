import { Router } from 'express'
import { analyzeSymptomsController, summarizeReportController } from './ai.controller'

export const aiRouter = Router()

aiRouter.post('/symptom-analyze', analyzeSymptomsController)
aiRouter.post('/report-summarize', summarizeReportController)
import type { Request, Response } from 'express'
import { asyncHandler } from '@/lib/asyncHandler'
import { analyzeSymptoms, summarizeReport } from './ai.service'

export const analyzeSymptomsController = asyncHandler(async (req: Request, res: Response) => {
  const { symptoms = '', language = 'hi' } = req.body as { symptoms?: string; language?: string }
  const result = await analyzeSymptoms(symptoms, language)

  res.json({ success: true, message: 'AI symptom analysis complete', data: result })
})

export const summarizeReportController = asyncHandler(async (req: Request, res: Response) => {
  const { reportText = '' } = req.body as { reportText?: string }
  const result = await summarizeReport(reportText)

  res.json({ success: true, message: 'Report summary complete', data: result })
})
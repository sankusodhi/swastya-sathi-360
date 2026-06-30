import { env } from '@/config/env'

export async function analyzeSymptoms(symptoms: string, language: string) {
  const model = env.GEMINI_API_KEY ? 'gemini-enabled' : 'demo-mode'

  return {
    model,
    language,
    triageLevel: symptoms.length > 80 ? 'urgent' : 'routine',
    guidance:
      'Seek care at the nearest facility if symptoms worsen, and use the ASHA worker or local doctor for follow-up.',
  }
}

export async function summarizeReport(reportText: string) {
  return {
    summary: reportText.slice(0, 180),
    keyFindings: ['Vitals stable', 'Referral recommended if symptoms persist'],
  }
}
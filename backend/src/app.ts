import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import { env } from '@/config/env'
import { requestContext } from '@/middleware/requestContext'
import { errorHandler, notFoundHandler } from '@/middleware/errorHandler'
import { authRouter } from '@/modules/auth/auth.routes'
import { usersRouter } from '@/modules/users/users.routes'
import { aiRouter } from '@/modules/ai/ai.routes'
import { patientsRouter } from '@/modules/patients/patients.routes'
import { appointmentsRouter } from '@/modules/appointments/appointments.routes'
import { recordsRouter } from '@/modules/records/records.routes'
import { healthRecordsRouter } from '@/modules/health-records/health-records.routes'
import { prescriptionsRouter } from '@/modules/prescriptions/prescriptions.routes'
import { remindersRouter } from '@/modules/reminders/reminders.routes'
import { surveysRouter } from '@/modules/surveys/surveys.routes'
import { notificationsRouter } from '@/modules/notifications/notifications.routes'
import { analyticsRouter } from '@/modules/analytics/analytics.routes'

export const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: true }))
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(requestContext)
app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'))
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    limit: 120,
    standardHeaders: true,
    legacyHeaders: false,
  }),
)

app.get('/api/v1/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Swasthya Saathi 360 API is healthy',
    data: {
      service: 'backend',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
  })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/ai', aiRouter)
app.use('/api/v1/patients', patientsRouter)
app.use('/api/v1/appointments', appointmentsRouter)
app.use('/api/v1/records', recordsRouter)
app.use('/api/v1/health-records', healthRecordsRouter)
app.use('/api/v1/prescriptions', prescriptionsRouter)
app.use('/api/v1/reminders', remindersRouter)
app.use('/api/v1/surveys', surveysRouter)
app.use('/api/v1/notifications', notificationsRouter)
app.use('/api/v1/analytics', analyticsRouter)

app.use(notFoundHandler)
app.use(errorHandler)
import { app } from './app'
import { env } from '@/config/env'
import { logger } from '@/config/logger'
import { prisma } from '@/config/prisma'

async function main(): Promise<void> {
  await prisma.$connect()

  app.listen(env.PORT, () => {
    logger.info(`Swasthya Saathi 360 backend listening on port ${env.PORT}`)
  })
}

void main().catch((error: unknown) => {
  logger.error({ error }, 'Backend startup failed')
  process.exit(1)
})
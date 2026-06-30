import { prisma } from '@/config/prisma'
import { hashPassword, comparePassword } from '@/lib/password'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '@/lib/token'
import { ApiError } from '@/lib/apiError'
import { UserRole } from '@/types/domain'

interface AuthInput {
  fullName: string
  email: string
  phoneNumber: string
  password: string
  role: UserRole
  language: string
}

interface LoginInput {
  email: string
  password: string
}

function mapSession(userId: string, role: UserRole) {
  return {
    accessToken: signAccessToken({ sub: userId, role }),
    refreshToken: signRefreshToken({ sub: userId, role }),
  }
}

export async function registerUser(input: AuthInput) {
  const passwordHash = await hashPassword(input.password)

  const user = await prisma.user.create({
    data: {
      fullName: input.fullName,
      email: input.email,
      phoneNumber: input.phoneNumber,
      passwordHash,
      role: input.role,
      language: input.language,
    },
  })

  const tokens = mapSession(user.id, user.role)

  return {
    user,
    ...tokens,
  }
}

export async function loginUser(input: LoginInput) {
  const user = await prisma.user.findUnique({ where: { email: input.email } })

  if (!user) {
    throw new ApiError(401, 'Invalid credentials', 'INVALID_CREDENTIALS')
  }

  const isValid = await comparePassword(input.password, user.passwordHash)

  if (!isValid) {
    throw new ApiError(401, 'Invalid credentials', 'INVALID_CREDENTIALS')
  }

  const tokens = mapSession(user.id, user.role)

  return {
    user,
    ...tokens,
  }
}

export async function refreshSession(refreshToken: string) {
  const payload = verifyRefreshToken(refreshToken)
  const user = await prisma.user.findUnique({ where: { id: payload.sub } })

  if (!user) {
    throw new ApiError(401, 'Invalid refresh token', 'INVALID_REFRESH_TOKEN')
  }

  return {
    user,
    accessToken: signAccessToken({ sub: user.id, role: user.role }),
    refreshToken: signRefreshToken({ sub: user.id, role: user.role }),
  }
}

export async function requestPasswordReset(email: string) {
  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    return { message: 'If the account exists, reset instructions were sent.' }
  }

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      token: `reset-${Date.now()}`,
      expiresAt: new Date(Date.now() + 1000 * 60 * 30),
    },
  })

  return { message: 'Reset instructions were sent.' }
}

export async function resetPassword(token: string, password: string) {
  const record = await prisma.passwordResetToken.findUnique({ where: { token } })

  if (!record || record.expiresAt < new Date()) {
    throw new ApiError(400, 'Invalid or expired reset token', 'RESET_TOKEN_INVALID')
  }

  const passwordHash = await hashPassword(password)

  await prisma.$transaction([
    prisma.user.update({ where: { id: record.userId }, data: { passwordHash } }),
    prisma.passwordResetToken.delete({ where: { token } }),
  ])

  return { message: 'Password reset successful' }
}
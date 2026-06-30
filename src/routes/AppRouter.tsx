import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from '@/pages/public/AboutPage'
import { AdminDashboard } from '@/pages/dashboard/AdminDashboard'
import { AshaDashboard } from '@/pages/dashboard/AshaDashboard'
import { ContactPage } from '@/pages/public/ContactPage'
import { DoctorDashboard } from '@/pages/dashboard/DoctorDashboard'
import { ForgotPasswordPage } from '@/pages/public/ForgotPasswordPage'
import { HomePage } from '@/pages/public/HomePage'
import { LoginPage } from '@/pages/public/LoginPage'
import { NotFoundPage } from '@/pages/public/NotFoundPage'
import { ProtectedRoute } from './ProtectedRoute'
import { RegisterPage } from '@/pages/public/RegisterPage'
import { ServicesPage } from '@/pages/public/ServicesPage'
import { UserDashboard } from '@/pages/dashboard/UserDashboard'
import { UserRole } from '@/types/domain'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route
        path="/dashboard/user"
        element={
          <ProtectedRoute allowedRoles={[UserRole.Citizen, UserRole.AshaWorker, UserRole.Doctor, UserRole.Admin]}>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/asha"
        element={
          <ProtectedRoute allowedRoles={[UserRole.AshaWorker, UserRole.Admin]}>
            <AshaDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/doctor"
        element={
          <ProtectedRoute allowedRoles={[UserRole.Doctor, UserRole.Admin]}>
            <DoctorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/admin"
        element={
          <ProtectedRoute allowedRoles={[UserRole.Admin]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/dashboard" element={<Navigate to="/dashboard/user" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
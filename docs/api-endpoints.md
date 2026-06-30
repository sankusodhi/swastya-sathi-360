# REST API Endpoints

## Health

- `GET /api/v1/health`

## Auth

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/forgot-password`
- `POST /api/v1/auth/reset-password`

## Users

- `GET /api/v1/users` `ADMIN`
- `GET /api/v1/users/me`

## AI

- `POST /api/v1/ai/symptom-analyze`
- `POST /api/v1/ai/report-summarize`

## Patients

- `GET /api/v1/patients`
- `POST /api/v1/patients`

## Appointments

- `GET /api/v1/appointments`
- `POST /api/v1/appointments`

## Records

- `GET /api/v1/records`

## Health Records

- `GET /api/v1/health-records`
- `POST /api/v1/health-records`

## Prescriptions

- `GET /api/v1/prescriptions`
- `POST /api/v1/prescriptions`

## Reminders

- `GET /api/v1/reminders`
- `POST /api/v1/reminders`

## Surveys

- `GET /api/v1/surveys`
- `POST /api/v1/surveys`

## Notifications

- `GET /api/v1/notifications`

## Analytics

- `GET /api/v1/analytics/summary`
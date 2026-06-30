# Swasthya Saathi 360 Architecture

## Frontend

- React + Vite + TypeScript SPA with PWA support.
- Router-based public pages and role-specific dashboards.
- Context-driven auth, locale, and theme state.
- Form handling with React Hook Form and Zod.
- Server state ready for TanStack Query.

## Backend

- Express + TypeScript REST API.
- MVC-inspired module layout with routes, controllers, services, middleware, and config.
- JWT access and refresh token strategy.
- Prisma ORM for MySQL persistence.
- Security hardening with Helmet, CORS, rate limiting, validation, and centralized error handling.

## Data Layer

- MySQL as the primary relational database.
- Prisma models for users, doctors, ASHA workers, patients, health records, appointments, prescriptions, reminders, surveys, notifications, refresh tokens, and reset tokens.

## AI Layer

- Gemini integration placeholder in the AI module.
- Symptom analysis, report summarization, multilingual prompts, and voice-input friendly workflows.

## PWA Layer

- Installable manifest.
- Service worker generated through `vite-plugin-pwa`.
- Offline-friendly shell and background sync ready architecture.
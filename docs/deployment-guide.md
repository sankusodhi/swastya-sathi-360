# Deployment Guide

## Frontend on Vercel

1. Set the project root to the repository root.
2. Configure environment variables such as `VITE_API_BASE_URL`.
3. Use the build command `npm run build`.
4. Set the output directory to `dist`.

## Backend on Railway or Render

1. Point the service to `backend` as the working directory.
2. Set `PORT`, `DATABASE_URL`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `CLIENT_ORIGIN`, and `GEMINI_API_KEY`.
3. Install dependencies from `backend/package.json`.
4. Build with `npm run build` and start with `npm start`.

## Database

1. Provision a managed MySQL database.
2. Apply the Prisma schema from `backend/prisma/schema.prisma`.
3. Run migrations and generate the Prisma client.

## Recommended rollout order

1. Backend health endpoint.
2. Auth and refresh token flows.
3. Patient and appointment workflows.
4. ASHA field capture.
5. AI assistant features.
6. PWA offline and push notification enhancements.
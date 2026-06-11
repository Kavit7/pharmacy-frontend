# AI Agent Guide for Pharmacy

## Purpose

This project is a frontend-only React application built with Vite, Tailwind CSS, and React Router. There is no backend code in this repository.

## How to run

- `npm install`
- `npm run dev` — start the local development server
- `npm run build` — build production assets
- `npm run lint` — run ESLint across the repository

## Key technologies

- React 19
- Vite
- Tailwind CSS
- React Router v7
- ESLint
- `xlsx` for Excel file handling
- `sweetalert2` for alerts

## Important files and directories

- `src/App.jsx` — route definitions
- `src/main.jsx` — React entrypoint
- `src/routes/ProtectedRoute.jsx` — route protection using `localStorage` token
- `src/Page/` — page-level components for routes
- `src/Layout/` — high-level layout components
- `src/LayoutComponent/` — shared layout pieces like header/footer/sidebar
- `src/forms/` — form components used across pages
- `src/Section/` — home page sections and landing content

## Project conventions

- Pages live in `src/Page/` and are mounted directly in `App.jsx`
- Layout composition is used for authenticated routes: `MainLayout` wraps protected page components
- Authentication is checked via `localStorage.getItem('token')` in `ProtectedRoute`
- Routing uses `BrowserRouter`, `Routes`, and `Route`
- Use existing component naming/casing conventions when adding or updating files

## What to avoid

- Do not assume a backend exists in this repo
- Do not add server-related code unless explicitly requested
- Avoid changing the project's overall structure without reason

## Notes for AI code generation

- Preserve the existing file-level organization and naming patterns
- Keep changes aligned with React + Vite conventions
- Prefer small, isolated improvements over broad refactors unless the user asks for one

## Useful references

- `README.md` — generic Vite + React starter guidance

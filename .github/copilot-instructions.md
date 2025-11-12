## Purpose
Short, actionable instructions to help an AI coding agent work productively in this repository.

## Big picture (from docs/)
- This project is "NBA Shot Analytics": a fullstack web app (frontend + backend + DB) described in `docs/pdd.md` and planned in `docs/ROADMAP.md`.
- Main components described: Frontend (React + Vite + TypeScript), Backend (Node.js + Express), Database (PostgreSQL), and optional ETL scripts (Python + Pandas).
- Key public API endpoints referenced in the docs: `/hello` (health check), `/players`, `/shots` — implement/features should match the schemas described in `docs/`.

## What to look for first
1. Read `docs/pdd.md` and `docs/ROADMAP.md` — they contain the authoritative architecture, milestones, and the endpoints the app expects.
2. Search the repo for package manifests (`package.json`, `pyproject.toml`, `requirements.txt`) and server/frontend folders (`server/`, `backend/`, `src/`, `frontend/`). If none exist, note the repo currently only has docs and confirm bootstrapping steps with the maintainer.

## Developer workflows and commands (how maintainers expect things to run)
- The docs assume a Vite/React frontend and a Node/Express backend. If standard manifests are present follow their scripts (npm/yarn pnpm). Common dev commands to try (PowerShell):
  - Install deps (if package.json exists): `npm install` or `pnpm install` or `yarn`
  - Start frontend dev: `npm run dev` (or check `package.json` `scripts`)
  - Start backend dev: `npm run dev` (or `node src/index.js` / `nodemon src/index.js`)
- If database is required, the roadmap references PostgreSQL (Docker recommended). Look for `docker-compose.yml` or `Dockerfile`; if missing, suggest a minimal docker-compose for local Postgres.

## Project-specific conventions and patterns (from docs)
- API routes expected: `/hello`, `/players`, `/shots` — follow simple REST semantics (GET for listing, POST for seeds/imports).
- Frontend should plot shot charts on a court component (SVG or Canvas). Look for or create a `Court` / `ShotChart` component in the frontend when adding visualization code.
- Tests: roadmap suggests Jest + React Testing Library for frontend and Jest + Supertest for backend. If tests are added, follow that stack and naming patterns (e.g., `__tests__` or `*.spec.(ts|js)`).

## Integration points & external dependencies
- External APIs: potential NBA public API (planned in docs). Treat data ingestion as separate ETL scripts (Python + Pandas) that seed Postgres.
- Deployment: docs mention Render/Vercel and CI/CD via GitHub Actions — add workflow files under `.github/workflows/` if setting up CI.

## Concrete examples for small tasks
- Implement health route: create a minimal Express route `/hello` returning `{status: "ok"}` and add one-line integration test using Supertest.
- Implement `/players`: return an array of player objects (id, name, team) — use mock data if DB is not yet available.
- Frontend fetch: add a simple fetch to `/players` and render a list; place the code near the root React app (e.g., `src/App.*`).

## Rules for the AI agent
1. Prefer using existing files and patterns; do not introduce major structural changes without a short explanation in the PR. Reference `docs/pdd.md` when making architecture choices.
2. If package manifests or source files are missing, propose a minimal scaffold (explain assumptions) and ask for approval before committing large scaffolding.
3. When adding code that touches infra (Docker, DB), include a short README snippet explaining how to run it locally.

## Where to add findings or questions
- Add implementation notes, questions, or decisions into `docs/` or open an issue describing assumptions (preferred) so maintainers can confirm.

---
If you'd like, I can now create this file in the repo (it does not exist) and propose a small scaffold for frontend/backend based on the roadmap — tell me whether to proceed.

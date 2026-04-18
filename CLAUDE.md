# CLAUDE.md — Maria Makeup Artist Project

## About This Project
This is the website and booking system for Maria Neunfeld, a professional makeup artist.
Built by a non-developer using AI assistance ("vibe coding"). Be patient, be clear, and avoid jargon.

---

## Project Structure
- **Frontend**: `mariamakeupartist` — React + Vite + Tailwind + shadcn/ui
- **Backend**: `marianeunfeld-RBAC` — Python + FastAPI + SQLAlchemy + JWT
- **Live site**: mariamakeupartist.lovable.app (auto-deploys from `main` branch)

---

## Ground Rules

### Before writing any code
- Always read the existing file before editing it
- Never overwrite existing styles or content without asking first
- Keep the site in Spanish unless told otherwise
- Match the existing design aesthetic: elegant, minimal, uppercase tracking, soft tones

### Branches
- `main` → production (what the live site shows)
- `develop` → active development (work here first)
- Never push directly to `main` without reviewing changes

### Environment variables
- Frontend: `.env.local` with `VITE_API_URL=http://localhost:8000`
- Backend: `.env` with `SECRET_KEY`, `DATABASE_URL`, `ALLOWED_ORIGINS`
- Never commit `.env` or `.env.local` files

---

## Tech Decisions Already Made
- UI components come from shadcn/ui — reuse them, don't reinvent
- Auth uses JWT tokens stored in localStorage
- Roles are `admin` (Maria) and `client` (her customers)
- API base URL comes from `VITE_API_URL` env variable — never hardcode it

---

## How to Run Locally

### Frontend
```bash
cd mariamakeupartist
npm run dev
# Opens at http://localhost:5173
```

### Backend
```bash
cd marianeunfeld-RBAC
pip install -r requirements.txt
uvicorn app.main:app --reload
# API at http://localhost:8000
# Docs at http://localhost:8000/docs
```

---

## Vibe Coding Tips (for the AI)
- The owner is a makeup artist, not a developer — explain things simply
- Prefer small, focused changes over large rewrites
- When adding a new feature, always describe what it does before building it
- If something could break the live site, warn first and ask for confirmation
- Keep commit messages short and in plain English

# Ticket: Verified one-command quick start and contributor entry points

## Meta
- ID:             003
- Typ:            chore
- Status:         proposed
- Erstellt:       2026-10-28
- Erstellt von:   Mohamad Masri
- Verantwortlich: Mohamad Masri
- Referenzen:     README.md (Quick Start) · docker-compose.yml · Dockerfile · ONBOARDING.md · jobs/engine.py

## Kontext
The README quick start starts with copying a JSON profile and running Python commands. Launch visitors want to see it running in under a minute. `docker-compose.yml` exists but binds to port 80 (often already taken, and needs admin on some systems), and it isn't the first thing the README shows. There are also no "good first issue" entries or Discussions for people who want to help.

## Ziel
A visitor goes from `git clone` to the web resume in the browser with one command, on a clean machine, and has an obvious place to ask questions or contribute.

## Anforderungen
- `docker compose up` as step 1 in the README, mapped to `8080:80` (or configurable via `PORT`).
- Python engine steps (`build-links`, `build-roles`, `run`) follow as step 2, with the Python version and Chrome/Edge requirement stated.
- Test the full quick start in a fresh clone (no local `config/profile.json` changes, no cached files).
- Enable GitHub Discussions; create 3 `good first issue` issues (e.g. a new profile template, a new language, a README translation).

## Akzeptanzkriterien
- [ ] Fresh clone + `docker compose up` serves the resume at `http://localhost:8080`.
- [ ] Fresh clone + the documented Python commands produce a PDF resume and cover letter without errors.
- [ ] Discussions enabled and 3 labelled `good first issue` issues exist.

## Risiken
- Changing the port mapping could affect the Coolify deployment if it reads `docker-compose.yml`; check before merging.

## Offene Fragen
- Does Coolify deploy from the Dockerfile or from `docker-compose.yml`?

## Erste Umsetzungsidee
Use `ports: ["${PORT:-8080}:80"]`, test in `git worktree add ../career-engine-test`, then record the commands that actually worked into the README.

## Kommentare
- 2026-10-28: `docker-compose.yml` port is now `${PORT:-80}:80` (default unchanged for Coolify). Found locally: Laravel Herd nginx holds 127.0.0.1:80, so `localhost` hit Herd and returned 404; `PORT=8080` works. README documents the override.

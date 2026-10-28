# Ticket: Rename repo to career-engine and unify naming

## Meta
- ID:             002
- Typ:            chore
- Status:         review
- Erstellt:       2026-10-28
- Erstellt von:   Mohamad Masri
- Verantwortlich: Mohamad Masri
- Referenzen:     README.md · docker-compose.yml (service `career-hub`) · docs/marketing/where-to-share.md ("WebResume") · .github/workflows/docker-publish.yml (ghcr image `resume-template`) · Obsidian note "Career Hub"

## Kontext
The project currently goes by four names: "Career Engine" (marketing), "Career Hub" (Obsidian note, Docker service), "WebResume" (where-to-share playbook) and `resume-template` (repo, container image). Launch posts, search and word of mouth only work if people can find the project by one name.

## Ziel
One name, "Career Engine", used in the repo name, README title, website, Docker service and all launch posts.

## Anforderungen
- Rename the GitHub repo `masrisystems/resume-template` → `masrisystems/career-engine` (GitHub redirects old URLs and clones).
- Update the README title, docker-compose service/image name, the GHCR image name in CI, and Coolify if it pulls by image name.
- Update links in the Obsidian notes (Career Hub, Open Source, OSS Launch Plan) and on masrisystems.com.
- Update the local git remote.

## Akzeptanzkriterien
- [ ] `https://github.com/masrisystems/resume-template` redirects to the new repo.
- [ ] The Coolify deployment of career.masrisystems.com still builds and serves after the rename.
- [ ] No "WebResume" / "Career Hub" left in public-facing text, except where it describes the web resume feature.

## Risiken
- The GHCR image path changes, so Coolify or any `docker pull` using the old image name breaks until it's updated.
- Do the rename **before** the launch posts, never after; old links in posts would still redirect, but mixed names in comments confuse people.

## Offene Fragen
- "Career Engine" or "Career Hub" as the final name? The plan assumes Career Engine.

## Erste Umsetzungsidee
`gh repo rename career-engine`, then `git remote set-url origin https://github.com/masrisystems/career-engine.git`, then grep for `resume-template|career-hub|WebResume` and replace in public-facing files.

## Kommentare
- 2026-10-28: GitHub repo renamed to `masrisystems/career-engine`, local remote updated, homepage/description/topics set. Public-facing names, repo links, starter kit (`career-engine-starter.zip`) and tests updated; 14/14 tests pass. `docker-compose.yml` service name `career-hub` left unchanged on purpose so the Coolify service mapping is not affected. Open: verify the next Coolify deploy and the new GHCR image path `ghcr.io/masrisystems/career-engine`; update links on masrisystems.com.

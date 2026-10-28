# Ticket: Launch-ready README and repo metadata

## Meta
- ID:             001
- Typ:            chore
- Status:         doing
- Erstellt:       2026-10-28
- Erstellt von:   Mohamad Masri
- Verantwortlich: Mohamad Masri
- Referenzen:     README.md · docs/marketing/where-to-share.md · https://career.masrisystems.com · https://github.com/masrisystems/resume-template

## Kontext
The repo is public with 0 stars and is about to be launched on Reddit, Show HN and Product Hunt. Visitors decide within seconds whether to star a repo. Right now the README has no screenshot or GIF, the live demo isn't linked, the repo has no topics and no website field, and the first line lists features instead of the problem it solves. `docs/marketing/where-to-share.md` also contains claims that can't be backed up ("audited and approved by senior tech recruiters"), which HN commenters will challenge.

## Ziel
A first-time visitor understands within 10 seconds what the project does and who it's for, and can open the live demo or run it locally with one command.

## Anforderungen
- Demo GIF (10–15 s, < 5 MB) at the top of the README: DE/EN toggle, dark mode, PDF export, generated cover letter.
- Live demo link (career.masrisystems.com) in the first lines of the README and in the repo's "Website" field.
- Problem-first intro: "Open-source resume + cover letter generator for the German job market: bilingual web CV, DIN-5008 cover letters, ATS-friendly PDFs."
- Topics: `resume`, `cv`, `resume-template`, `cover-letter`, `ats`, `job-search`, `din-5008`, `bewerbung`, `lebenslauf`, `python`, `tailwindcss`, `self-hosted`.
- Short "Need it set up for you or your team? → Masri Systems" line at the end of the README.
- Remove or soften unverifiable claims in README and `docs/marketing/`.

## Akzeptanzkriterien
- [ ] GIF renders at the top of the README on github.com (light and dark GitHub theme).
- [ ] `gh repo view` shows topics and a homepage URL.
- [ ] Demo link and Masri Systems link both work.
- [ ] No "recruiter approved" style claims left without a source.

## Risiken
- A GIF that's too large loads slowly on mobile; keep it under 5 MB or use an MP4 in a GitHub-hosted video.

## Offene Fragen
- Is the live demo on career.masrisystems.com your real CV or an example persona? Answered: example persona (Stefan Kramer).

## Erste Umsetzungsidee
Record with ScreenToGif from the local Docker build, save it as `docs/demo.gif`, then set topics and the homepage with `gh repo edit --add-topic ... --homepage https://career.masrisystems.com`.

## Kommentare
- 2026-10-28: README rewritten (problem-first intro, live demo link, screenshot `assets/readme/demo-resume.png`, Why section, Docker quick start, Masri Systems CTA). Topics and website field set. Live demo confirmed to show the example persona Stefan Kramer. Open: demo GIF (static screenshot for now); demo GIF only. Recruiter claims confirmed by Mohamad (real recruiter reviews), kept.

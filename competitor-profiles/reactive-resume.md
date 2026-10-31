# Reactive Resume — Competitor Profile

**URL**: https://rxresu.me  
**GitHub**: https://github.com/AmruthPillai/Reactive-Resume  
**Generated**: 2026-10-31  
**Depth**: Deep Profile  

---

## At a Glance

| Metric | Value |
|--------|-------|
| **Tagline** | A free and open-source resume builder that simplifies the process of creating, updating, and sharing your resume |
| **Category** | Open-Source GUI Resume Builder |
| **License** | MIT License |
| **GitHub Stars** | 45,000+ |
| **Target Audience** | Developers, privacy-conscious job seekers, self-hosters |
| **Pricing** | $0 (100% Free hosted & self-hosted) |
| **Tech Stack** | React, NestJS, Prisma, PostgreSQL, MinIO, Browserless (Chrome) |
| **German DIN 5008 Cover Letters** | Not supported natively |

---

## Positioning & Messaging

**Primary value proposition**: A completely free, privacy-first, open-source alternative to commercial drag-and-drop resume builders with zero tracking, zero ads, and full self-hosting capability.

**Target audience**: Tech-savvy job seekers and developers who want a visual WYSIWYG editor (similar to Canva or FlowCV) without paying subscription fees or surrendering personal data to commercial SaaS platforms.

**Positioning angle**: Privacy-first, open-source visual SaaS alternative with optional BYOK (Bring Your Own Key) OpenAI integration.

**Key messaging themes**:
- Free forever with no paywalls, watermarks, or dark patterns.
- Real-time visual canvas editing with multiple multi-column and single-column templates.
- Self-hostable via Docker Compose for total data ownership.

---

## Product & Features

### Core Capabilities
- **Real-time WYSIWYG Editor**: Interactive split-screen interface with drag-and-drop section ordering, custom typography (Google Fonts), and color palette controls.
- **Multiple Templates**: Built-in visual templates (Azallia, Bronzor, Chikorita, Ditto, Kakuna, Nosepass, Onyx, Pikachu, Rhyhorn) supporting single and two-column layouts.
- **Public Sharing Links**: Hosted shareable URLs (`rxresu.me/username/slug`) with view-count tracking.
- **JSON Import/Export**: Supports importing LinkedIn data, JSON Resume schemas, and Reactive Resume JSON backups.
- **BYOK AI Integration**: Optional client-side OpenAI API key configuration for grammar correction and tone adjustment inside the text editor.

### Notable Differentiators
- Massive open-source community adoption (45k+ GitHub stars) and polished visual UI.
- Multilingual interface translation via Crowdin.

---

## Pricing

| Tier | Price | Key Inclusions |
|------|-------|---------------|
| **Cloud Hosted (`rxresu.me`)** | $0 / forever | Unlimited resumes, PDF exports, public share links (donation-supported) |
| **Self-Hosted (Docker)** | $0 (MIT) | Full stack deployment on private infrastructure |

---

## Strengths & Weaknesses

### Strengths
- **Best-in-class Open-Source GUI**: Visual drag-and-drop experience rivals commercial SaaS tools at zero cost.
- **Strong Brand Recognition**: High visibility on GitHub, Reddit (`r/selfhosted`), and Hacker News.
- **Zero Vendor Lock-in**: JSON export and MIT license allow complete portability.

### Weaknesses
- **Heavy Self-Hosting Footprint**: Self-hosting requires orchestrating 5+ stateful services (PostgreSQL database, MinIO S3 object storage, Browserless Chrome container, NestJS backend, React frontend, and SMTP/Auth configuration) — overkill for a single candidate's CV.
- **No Native DIN 5008 German Cover Letter Engine**: Focused strictly on resumes; lacks formal German *Anschreiben* layout rules, sender/recipient window geometry, and automatic contractual invariants (salary expectation and notice period).
- **Multi-Column ATS Risks**: Several popular visual templates rely on two-column canvas layouts that can scramble reading order in older corporate ATS parsers.
- **No Daily Job Discovery or CLI Tailoring Pipeline**: Manual GUI editing per job application rather than an automated CLI workflow (`jobs/engine.py`) with 24 specialized career agent skills.

---

## Competitive Implications for Career Engine

**Where they're strong vs. us**:
- Non-technical users who want a point-and-click WYSIWYG canvas editor in the browser without editing JSON or HTML files prefer Reactive Resume's visual builder.

**Where we're strong vs. them**:
- **Zero-Database Static & CLI Architecture**: Career Engine runs from a single `config/profile.json` file and lightweight static HTML/CSS (`caddy:2-alpine` container <35MB vs. Reactive Resume's multi-container Postgres + MinIO + NestJS stack).
- **German Market & DIN 5008 Mastery**: Built-in DIN 5008 cover letter compilation with enforced German invariants (`target_salary_phrase_de`, `notice_period_de`, spaced compound technical terms).
- **End-to-End Job Search Pipeline**: Includes the 20-minute daily job search workflow, automated search query generator (`build-links`), 5 pre-validated role archetypes, and 24 specialized AI agent skills.
- **Dual Web + Print Identity**: Career Engine's `resume.html` functions simultaneously as a dark/light interactive bilingual portfolio (EN/DE) and a deterministic 2-page A4 ATS PDF.


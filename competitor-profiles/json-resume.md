# JSON Resume — Competitor Profile

**URL**: https://jsonresume.org  
**GitHub**: https://github.com/jsonresume  
**Generated**: 2026-10-31  
**Depth**: Deep Profile  

---

## At a Glance

| Metric | Value |
|--------|-------|
| **Tagline** | The open source initiative to create a JSON-based standard for resumes |
| **Category** | Open-Source Schema Standard & Node.js CLI Ecosystem |
| **License** | MIT License |
| **Target Audience** | Software engineers, JavaScript/Node.js developers |
| **Pricing** | $0 (Open Source) |
| **Tech Stack** | JSON Schema, Node.js, npm (`resume-cli` / `resumed`), Handlebars, Puppeteer |
| **German DIN 5008 Cover Letters** | Not supported |

---

## Positioning & Messaging

**Primary value proposition**: Write your resume once in a standardized `resume.json` schema and render it across hundreds of community-built npm themes (`jsonresume-theme-*`).

**Target audience**: Software developers who want "Resume as Code" stored in Git and are comfortable with Node.js/npm package management.

**Positioning angle**: Ecosystem standard and schema specification rather than an all-in-one job application platform.

---

## Product & Features

### Core Capabilities
- **Standardized Schema**: Defines structured fields for `basics`, `work`, `volunteer`, `education`, `awards`, `certificates`, `publications`, `skills`, `languages`, `interests`, `references`, and `projects`.
- **CLI Tooling (`resume-cli` / `resumed`)**: Validates `resume.json` against the official schema and exports to HTML or PDF using installed npm theme packages.
- **Community Theme Registry**: Hundreds of independent npm themes using Handlebars or Pug templates.
- **Gist Hosting**: Optional free hosting via GitHub Gists (`registry.jsonresume.org`).

---

## Pricing

| Tier | Price | Key Inclusions |
|------|-------|---------------|
| **Open Source** | $0 (MIT) | Schema, CLI, and community npm themes |

---

## Strengths & Weaknesses

### Strengths
- **Industry-Recognized Schema**: Widely supported as an import/export format across developer tools.
- **Git Version Control**: Pure JSON storage makes tracking career history diffs effortless.
- **Theme Variety**: Large catalog of community-contributed visual themes on npm.

### Weaknesses
- **Fragmented & Stale Maintenance**: The official `resume-cli` has suffered from broken dependencies, outdated Puppeteer builds, and inconsistent PDF page-break handling across community themes.
- **Single-Language Schema**: The standard `resume.json` specification has no native bilingual (`en` / `de`) field structure — candidates applying in both English and German must maintain two separate JSON files that quickly drift out of sync.
- **Resume-Only Scope**: Zero support for cover letters (DIN 5008), job discovery queries, role archetype tailoring, or interview preparation prompts.
- **Print / PDF Fragility**: Most community themes are designed for web viewing and break badly when printed to A4 PDF (orphaned headings, clipped backgrounds, unselectable canvas elements).

---

## Competitive Implications for Career Engine

**Where they're strong vs. us**:
- Broad third-party ecosystem compatibility for the base `resume.json` schema.

**Where we're strong vs. them**:
- **Native Bilingual SSOT (`en` + `de` in one file)**: `config/profile.json` stores English and German strings side by side, enabling 1-click live language switching in the browser and synchronized bilingual maintenance.
- **Production-Grade A4 Print & DIN 5008 Cover Letters**: Career Engine guarantees deterministic 2-page A4 resume layout and 1-page DIN 5008 cover letters via headless Chrome/Edge without broken npm theme dependencies.
- **Complete Application Engine**: Goes beyond static schema rendering to provide job config scaffolding (`init-config`), role compilation (`build-roles`), search link generation (`build-links`), and 24 career agent skills.


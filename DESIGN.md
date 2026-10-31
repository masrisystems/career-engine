# Career Engine — Design System & UI Architecture (`DESIGN.md`)

This document defines the visual language, design tokens, typography, component specifications, responsive breakpoints, and print/PDF layout standards for **Career Engine** (`career.masrisystems.com`).

---

## 1. Design Philosophy & Core Principles

Career Engine serves two distinct visual environments from a single codebase:
1. **The Interactive Career Hub (`index.html`)** — An editorial product showcase, interactive workflow simulator, AI prompt library, and live resume preview following the **Airtable Editorial Dialect**.
2. **Formal Application Documents (`resume.html` & DIN-5008 Cover Letters)** — High-precision, ATS-parseable A4 documents engineered for German and international hiring pipelines (Personio, Workday, Greenhouse, SAP SuccessFactors).

### Core Design Invariants
- **Editorial Clarity Over Visual Noise**: Generous vertical rhythm (`96px` section bands), crisp `1px` hairline borders, high-contrast ink typography, and deliberate signature accent surfaces.
- **Zero Emojis Mandate**: Emojis are strictly prohibited across all HTML templates, CSS rules, cover letters, and UI states. All iconography uses clean, deterministic inline SVG vectors (Lucide Icons).
- **Spaced Technical Compounds**: Compound technical terms and role titles must use spaces instead of hyphens (`REST APIs`, `CI/CD Pipelines`, `MCP Tools`, `KI Agenten`, `Fullstack Entwickler`, `Fullstack Engineer`, `Cloud Architekturen`, `Figma Design`, `n8n Workflows`).
- **Dual-Context Rendering (Screen vs. Print)**: On-screen interfaces support full Light and Dark themes (`html.dark`), while `@media print` and `.pdf-export-active` deterministically lock documents to crisp `#0f172a` ink on `#ffffff` A4 paper with zero UI chrome leakage.

---

## 2. Color System & Design Tokens

All color tokens are declared in [`style.css`](style.css) on `:root` with dedicated dark-mode overrides under `html.dark, .dark`.

### 2.1 Base Canvas & Ink Palette

| Token | Light Mode | Dark Mode (`html.dark`) | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--color-canvas` | `#ffffff` | `#0b0f17` | Primary page background floor |
| `--color-surface-soft` | `#f8fafc` | `#131b26` | Secondary cards, filter bars, subtle containers |
| `--color-surface-strong` | `#e0e2e6` | `#1c2635` | Highlighted bands, active pill backgrounds, elevated surfaces |
| `--color-surface-dark` | `#181d26` | `#181d26` | Inverted dark editorial banners |
| `--color-surface-dark-elevated` | `#1d1f25` | `#1d1f25` | Elevated cards inside dark surfaces |
| `--color-hairline` | `#dddddd` | `#223145` | `1px` structural borders, dividers, card outlines |
| `--color-border-strong` | `#9297a0` | `#33465e` | Emphasized input and interactive borders |
| `--color-ink` | `#0f172a` | `#f8fafc` | Primary headings (`h1`–`h4`), strong labels |
| `--color-body` | `#333840` | `#cbd5e1` | Standard running copy and list items |
| `--color-muted` | `#41454d` | `#94a3b8` | Metadata, captions, timestamps, secondary labels |
| `--color-primary` | `#181d26` | `#f8fafc` | Primary CTA button fill and active state indicator |
| `--color-primary-active` | `#0d1218` | `#e2e8f0` | Pressed / active state for primary buttons |
| `--color-on-primary` | `#ffffff` | `#0b0f17` | Foreground label color on `--color-primary` |

### 2.2 Brand & Resume Accent Palette

Used for hyperlinks, role subtitles, timeline highlights, and interactive accents in both the web resume and DIN-5008 cover letters:

| Name | Hex | Usage |
| :--- | :--- | :--- |
| **Brand Terracotta (Default)** | `#cc785c` | Inline links (`a`), contact icons, progress gradients |
| **Brand Terracotta Deep (Hover / Print)** | `#a9583e` | Link hover state, print subtitle accent, DIN-5008 sender title |
| **Brand Amber Light (Dark Mode)** | `#e8a55a` | Accessible link and subtitle accent on dark surfaces |
| **Interactive Sky (Dark Mode Active)** | `#38bdf8` | Active simulation steps, dark-mode code tags, active pills |

### 2.3 Signature Editorial Surfaces

High-contrast editorial callouts and pastel card surfaces used to establish visual hierarchy across the Career Hub:

| Token / Class | Light Mode | Dark Mode Override | Usage |
| :--- | :--- | :--- | :--- |
| `--color-sig-coral` (`.signature-coral-card`) | `#aa2d00` | `linear-gradient(135deg, #872300, #681a00)` | High-voltage feature banner |
| `--color-sig-forest` | `#0a2e0e` | `#0a2e0e` | Deep green signature accent |
| `--color-sig-cream` (`.cream-callout-card`) | `#f5e9d4` | `#131b26` (border `#223145`) | Warm editorial callout band |
| `.prompt-card.surface-mint` | `#f0f8f5` (border `#cde6dc`) | `#0d1f1c` (border `#114e45`) | Prompt card variant (Mint) |
| `.prompt-card.surface-peach` | `#fff6f0` (border `#fcd9c3`) | `#201514` (border `#6c2a17`) | Prompt card variant (Peach) |
| `.prompt-card.surface-yellow` | `#fdfbf0` (border `#faefcb`) | `#1f1b11` (border `#634011`) | Prompt card variant (Yellow) |
| `.prompt-card.surface-cream` | `#faf7f2` (border `#eedec8`) | `#1c1815` (border `#52381f`) | Prompt card variant (Cream) |

### 2.4 Semantic & Status Tokens

- **Success / Verified**: Light `#15803d` on `#dcfce7` (border `#bbf7d0`) · Dark `#4ade80` on `rgba(34, 197, 94, 0.18)`
- **SOP Badge (`.nav-tag-sop`)**: Light `#92400e` on `#fef3c7` · Dark `#fbbf24` on `rgba(245, 158, 11, 0.15)`
- **CLI Badge (`.nav-tag-cli`)**: Light `#0369a1` on `#e0f2fe` · Dark `#38bdf8` on `rgba(14, 165, 233, 0.15)`
- **Skills Badge (`.nav-tag-skills`)**: Light `#6b21a8` on `#f3e8ff` · Dark `#c084fc` on `rgba(168, 85, 247, 0.15)`

---

## 3. Typography & Hierarchy

### 3.1 Font Stacks

| Context | Font Family Stack | Notes |
| :--- | :--- | :--- |
| **Career Hub UI (`body`)** | `"Inter Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif` | Clean geometric/neo-grotesque sans-serif for editorial UI |
| **Resume Headings (`h1`–`h3`, `.title-font`)** | `"Playfair Display SC", serif` | Authoritative small-caps serif for candidate name and section titles |
| **Resume Body & Cover Letters** | `"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | High-legibility humanist sans-serif for dense A4 text |
| **Code, CLI & Prompts** | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` | Used for terminal logs, prompt previews, skill slugs, and CLI commands |

### 3.2 Typographic Scale (Screen)

- **Hero Headline (`.hero-headline`)**: `40px` (`font-weight: 400`, `line-height: 1.2`, `letter-spacing: -0.02em`, `max-width: 840px`)
- **Hero Subhead (`.hero-subhead`)**: `18px` (`font-weight: 400`, `line-height: 1.5`, `max-width: 680px`, `color: var(--color-muted)`)
- **Section / Card Display Headings (`h2`)**: `28px`–`32px` (`font-weight: 400` on editorial cards; `bold` with `1.5px solid #0f172a` bottom divider on resume sections)
- **Card Titles (`.prompt-card-title`, `.setup-step-title`)**: `18px`–`20px` (`font-weight: 500`–`600`)
- **Body Copy**: `14px`–`15px` (`line-height: 1.5`–`1.6`)
- **Monospace Previews & Terminal Logs**: `12px` (`line-height: 1.4`)
- **Micro Badges & Category Pills**: `10.5px`–`11.5px` (`font-weight: 600`, `text-transform: uppercase`, `letter-spacing: 0.04em`–`0.06em`)

---

## 4. Spacing, Grid & Border Radii

### 4.1 Spacing Scale
```css
--spacing-section: 96px; /* Vertical padding between major hub sections */
--spacing-xxl:     48px; /* Internal padding for signature banners */
--spacing-xl:      32px; /* Grid margins and major stack gaps */
--spacing-lg:      24px; /* Container horizontal padding & card grid gaps */
--spacing-md:      16px; /* Standard component padding & cluster gaps */
--spacing-sm:      12px; /* Compact control spacing */
--spacing-xs:      8px;  /* Inline icon-to-label gap */
```

### 4.2 Border Radii
```css
--radius-lg:   12px;   /* Primary CTAs, signature cards, simulator deck, FAQ container */
--radius-md:   10px;   /* Prompt cards, workflow stage cards, dropdown menus, mobile drawer links */
--radius-sm:   6px;    /* Code blocks, badges, skill items, stat chips */
--radius-pill: 9999px; /* Navigation CTAs, language/role selectors, filter pills */
```

### 4.3 Container & Responsive Grid System
- **Hub Container (`.hub-container`)**: `max-width: 1280px`, centered (`margin: 0 auto`), horizontal padding `24px` (`var(--spacing-lg)`).
- **Prompt Grid (`.prompt-grid`)**: `grid-template-columns: repeat(auto-fit, minmax(360px, 1fr))` with `24px` gap (collapses safely via `minmax(min(360px, 100%), 1fr)` inside fold groups on narrow viewports).
- **Workflow Pipeline Grid (`.workflow-pipeline-grid`)**: `repeat(auto-fit, minmax(240px, 1fr))` with `16px` gap.
- **Skills Directory Grid (`.skills-grid`)**: `repeat(auto-fill, minmax(280px, 1fr))` with `16px` gap.
- **Engine Command Grid (`.engine-command-grid`)**: `repeat(auto-fit, minmax(320px, 1fr))` with `16px` gap.

---

## 5. Component Architecture & Interactive Patterns

### 5.1 Sticky Glassmorphic Navigation (`#top-nav`)
- **Desktop (`>= 901px`)**:
  - Pinned `64px` header with `rgba(255, 255, 255, 0.94)` (dark: `rgba(11, 15, 23, 0.94)`) and `backdrop-filter: blur(12px)`.
  - Left: Dual-theme logo (`.nav-logo-light` / `.nav-logo-dark`), brand title, and `Open Source` tag.
  - Center: Horizontal link strip with hover dropdown menus (`.nav-dropdown-menu`) featuring an `8px` invisible hover bridge (`::before`) to prevent menu flicker.
  - Right: Theme toggle button, `.lang-select` pill dropdown, Portfolio link, and primary rounded pill CTA (`.btn-nav-cta`).
- **Tablet & Mobile (`<= 900px`)**:
  - `.desktop-nav-links` and `.nav-desktop-actions` hide automatically.
  - `.nav-toggle-btn` (`38px × 38px`) displays a vector hamburger/close icon and controls `#nav-drawer`.
  - `#nav-drawer` slides down below the `64px` bar (`max-height: calc(100vh - 64px)`), providing `44px` minimum touch targets (`.drawer-link`), accordion subgroups (`<details class="drawer-group">`), and full-width action controls.
  - Automatically closes on link click, `Escape` key press, outside click, or viewport resize above `900px`.

### 5.2 Button Dialect
- **`.btn-primary`**: Solid `--color-primary` background, `--color-on-primary` text, `14px 24px` padding, `12px` radius. Inverted to `#f1f5f9` fill with `#0b0f17` text in dark mode.
- **`.btn-secondary`**: `--color-canvas` background, `1px solid var(--color-hairline)`, `--color-ink` text, `14px 24px` padding, `12px` radius.
- **`.btn-secondary-on-dark`**: High-contrast `#ffffff` button with `#872300` label and subtle elevation shadow for use on `.signature-coral-card`.
- **`.btn-outline-on-dark`**: Transparent background with `1.5px solid rgba(255, 255, 255, 0.6)` border on dark/coral banners.
- **`.btn-pill-sm`**: Compact `13px` pill control (`padding: 6px 14px`, `border-radius: 9999px`) used for theme toggles, persona selection, and secondary toolbar actions.

### 5.3 20-Minute Daily Workflow Simulator (`#daily-workflow`)
- Interactive state machine driven by [`hub.js`](hub.js) (`SIM_STAGES`).
- **Control Deck (`.workflow-sim-controls`)**: Play/Pause trigger, Reset button, simulated wall-clock badge (`08:00 AM` → `08:20 AM`), elapsed timer, and playback speed selector (`1x`, `2x`, `5x`).
- **Progress Scrub Bar (`.workflow-scrub-bar`)**: Animated gradient progress bar (`linear-gradient(90deg, #cc785c, #aa2d00)` in light mode; `linear-gradient(90deg, #0284c7, #38bdf8)` in dark mode) paired with 4 interactive step buttons.
- **Telemetry Monitor (`.workflow-sim-monitor`)**: Displays a live pulsing emerald beacon (`.sim-live-pulse`), 4 metric chips (`.sim-stat-chip`), and a dark terminal viewport (`.sim-terminal-screen`) streaming timestamped execution logs.

### 5.4 AI Prompt Library Cards (`#prompts`)
- Structured cards combining pastel editorial surfaces with a scrollable monospace prompt preview (`.prompt-code-preview`, `max-height: 140px`).
- Dynamic template variables (e.g., `{{COMPANY}}`, `{{JOB_DESCRIPTION}}`) are highlighted via `<mark>` tags (`#ffe066` in light mode; `#854d0e` with `#fef08a` text in dark mode).
- Full-width `.btn-copy-prompt` copies the raw prompt to the clipboard and triggers the fixed bottom-right notification toast (`#hub-toast`).

### 5.5 Progressive Disclosure Fold Groups (`.fold-group` & `.faq-item`)
- Built on native semantic `<details>` and `<summary>` elements with custom CSS chevron indicators (`::after` rotated `45deg` closed, `-135deg` open).
- Used for collapsible skill categories, extended prompt libraries, engine module details, and the FAQ section.

---

## 6. Document & Print Engineering (A4 PDF & DIN-5008)

### 6.1 Master Bilingual Web Resume (`resume.html` & `#resumeContent`)
- **Dimensions**: Centered `210mm` A4 container on screen; `100%` width with `@page { size: A4; margin: 6mm 8mm; }` in print.
- **Print & PDF Isolation**:
  - When printing (`@media print`) or exporting via client-side PDF (`.pdf-export-active`), all Career Hub sections (`#top-nav`, `#hero`, `#prompts`, `#daily-workflow`, `.persona-switcher-bar`, `.hub-footer`, `.no-print`) are forcefully hidden (`display: none !important`).
  - Typography scales to `9pt` (`line-height: 1.35`) with compact `6px` section margins to guarantee a clean 2-page A4 fit.
  - Dark mode classes are overridden so exported PDFs always render with `#0f172a` ink on a pure `#ffffff` background.
  - Certifications (`#certifications ul`) automatically arrange into a compact 2-column grid (`grid-template-columns: repeat(2, 1fr)`).
  - The `.print-signature` block becomes visible exclusively in print/PDF output.
- **ATS Plain-Text Mode**: Toggling ATS mode strips visual styling to verify linear DOM reading order for automated applicant tracking parsers.

### 6.2 DIN-5008 German Cover Letter Layout (`engine/cover_letter.py`)
Server-side cover letters are compiled to standalone HTML and rendered to A4 PDF via headless Chrome/Edge (`engine/pdf.py`):
- **Page Geometry**: Strict A4 (`width: 210mm; height: 297mm`), `@page { size: A4; margin: 0; }`, internal padding `24mm 22mm 20mm 25mm` (top `24mm`, right `22mm`, bottom `20mm`, left `25mm` per DIN-5008 standard).
- **Typography**: `10.5pt` system sans-serif, `line-height: 1.55`, justified body paragraphs (`text-align: justify`), `#1e293b` body ink, `#0f172a` headings, and `#a9583e` brand terracotta accents for sender title and links.
- **Structural Blocks**:
  1. **Header Row (`.header-row`)**: Left-aligned candidate name (`16pt bold`) and role subtitle (`9.5pt #a9583e`); right-aligned sender address, phone, email, and portfolio links (`8.5pt`), separated by a `1.5px solid #e2e8f0` rule.
  2. **Recipient & Date Row (`.recipient-date-row`)**: Left-aligned company recipient block (`9.5pt`); right-aligned location and date stamp (`9pt #64748b`).
  3. **Subject Line (`.subject-line`)**: `12pt bold #0f172a` without a "Betreff:" prefix.
  4. **Body & Contractual Invariants**: Salutation (`600` weight), tailored paragraphs, and mandatory contractual invariants (`invariants.notice_period_de` and `invariants.target_salary_phrase_de` from `config/profile.json`).
  5. **Signature & Footer Note**: Closing formula, candidate signature (`11pt bold`), and pinned bottom footer (`bottom: 12mm`, `8pt`) linking to the interactive web resume.

---

## 7. Internationalization (i18n) & Theme Synchronization

- **Declarative Translation Binding**: UI elements in `index.html` bind to translation keys via `data-i18n="section.key"` and `data-i18n-attr="attr:section.key"`, resolved at runtime by [`i18n/i18n.js`](i18n/i18n.js) from `window.CAREER_I18N` catalogs ([`i18n/en.js`](i18n/en.js), [`i18n/de.js`](i18n/de.js)).
- **Bilingual Resume Attributes**: Resume elements in `resume.html` use `data-lang-en` and `data-lang-de` attributes for instantaneous language switching.
- **Parent ↔ Iframe Synchronization**: Switching languages or themes (`Light` / `Dark`) in the Career Hub header persists the preference to `localStorage`, updates URL parameters (`?lang=de`), and synchronizes the embedded `#resumeFrame` iframe in real time.

---

## 8. Quality Gates & Programmatic Verification

All design and layout changes must pass automated verification without visual screenshot scripts:

```bash
# 1. Verify Career Hub DOM structure, anchor links, and zero-emoji invariant
python -m unittest tests/test_career_hub.py

# 2. Verify i18n translation parity and key resolution
python -m unittest tests/test_i18n.py

# 3. Validate master resume DOM structure and required sections
python jobs/engine.py validate-resume --file index.html
python jobs/engine.py validate-resume --file resume.html
```


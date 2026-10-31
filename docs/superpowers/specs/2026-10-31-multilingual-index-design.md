# Career Engine — Multilingual Architecture & German Localization Design

- **Date:** 2026-10-31
- **Status:** Approved
- **Scope:** Complete German localization for `index.html` and extensible multilingual architecture for future languages.

---

## 1. Overview & Goals

Career Engine's landing page and interactive showcase (`index.html`) is currently predominantly in English, while the embedded web resume (`resume.html`) supports bilingual rendering. This specification defines an extensible, zero-dependency, client-side internationalization (i18n) architecture that:

1. Translates the entire `index.html` landing page into German (DE).
2. Enables seamless addition of any future language (e.g. Spanish `es`, French `fr`, Japanese `ja`) simply by adding a single dictionary script (`i18n/<lang>.js`) without requiring any changes to HTML tags or core application logic.
3. Operates 100% reliably in both web server/Docker environments and local `file://` environments (downloaded offline starter kit) with zero CORS issues.
4. Synchronizes state seamlessly between `index.html`, the embedded live `#resumeFrame` iframe, `localStorage`, and URL query parameters (`?lang=de`).
5. Strictly enforces professional German localization invariants (spaced compound technical terms: `REST APIs`, `CI/CD Pipelines`, `MCP Tools`, `KI Agenten`, `Fullstack Entwickler`, `Cloud Architekturen`, zero emojis, and DIN-5008 standards).

---

## 2. Architecture & File Structure

The internationalization layer lives in a dedicated, lightweight `i18n/` directory:

```text
career-engine/
├── i18n/
│   ├── i18n.js         # Core translation engine, DOM parser & state synchronizer
│   ├── en.js           # Authoritative English translation catalog (source of truth)
│   └── de.js           # Complete German translation catalog
├── hub.js              # Interactive client logic (simulator, briefs, copy toasts)
├── index.html          # Markup equipped with declarative data-i18n attributes
├── style.css           # Styling for language selector and UI components
└── resume.html         # Embedded master resume (synced via postMessage/switchLanguage)
```

### 2.1 Extensible Registry Pattern (Zero-Touch HTML for Future Languages)

Each language dictionary self-registers to the global `window.CAREER_I18N` namespace:

```javascript
window.CAREER_I18N = window.CAREER_I18N || {};
window.CAREER_I18N.de = {
  meta: {
    code: "de",
    label: "Deutsch",
    dir: "ltr"
  },
  nav: { ... },
  hero: { ... },
  setup: { ... },
  workflow: { ... },
  briefs: { ... },
  prompts: { ... },
  coverLetters: { ... },
  engine: { ... },
  skills: { ... },
  resume: { ... },
  faq: { ... },
  download: { ... },
  share: { ... },
  footer: { ... },
  ui: { ... }
};
```

When an engineer or contributor adds a new language in the future:
1. Copy `i18n/en.js` to `i18n/fr.js` and provide translations.
2. Add `<script src="./i18n/fr.js"></script>` to `<head>`.
3. The core engine dynamically discovers `Object.keys(window.CAREER_I18N)` and automatically adds French (`FR`) to the language selector dropdown across both desktop and mobile navigation.

---

## 3. Core Engine Specification (`i18n/i18n.js`)

`i18n/i18n.js` provides the reactive translation driver with the following responsibilities:

### 3.1 Public API

- `init()`: Detects initial language from (1) URL param `?lang=`, (2) `localStorage.getItem('career_engine_lang')`, (3) browser `navigator.language`, falling back to `'en'`. Populates all language switcher dropdowns and executes initial translation.
- `setLanguage(langCode)`: Switches active language, applies translations in-place across the DOM, updates `<html lang="...">`, persists to `localStorage`, synchronizes URL parameter via `history.replaceState`, and triggers iframe synchronization with `#resumeFrame`.
- `getLanguage()`: Returns the currently active language code.
- `getAvailableLanguages()`: Returns array of loaded language metadata objects (`[{ code: 'en', label: 'English' }, { code: 'de', label: 'Deutsch' }]`).
- `t(keyPath, fallback, interpolations)`: Resolves dot-notated string keys (e.g. `t('ui.copied', 'Copied!')`), falling back first to `en` dictionary and then to `fallback`. Supports dynamic variable replacement (`{name}`).

### 3.2 Declarative DOM Binding

- **Text Content**: Elements tagged with `data-i18n="hero.headline"` receive localized text or HTML (`innerHTML` supported for inline elements like `<code>`, `<strong>`, `<a>`).
- **Attributes**: Elements requiring attribute translations use `data-i18n-attr="placeholder:search.placeholder,aria-label:nav.menuLabel"`.
- **Pre-rendering Integrity**: If a key cannot be resolved, existing DOM content remains untouched, preventing empty text flashes.

---

## 4. Dynamic Content & Interactive Components (`hub.js`)

Interactive sections controlled by `hub.js` are fully integrated with the i18n engine:

1. **Clipboard Copy Feedback & Toasts**:
   - `showToast(t("ui.toastPromptCopied", "Prompt copied to clipboard!"))`
   - Temporary button text: `t("ui.copied", "Copied!")`
2. **20-Minute Workflow Simulator (`SIM_STAGES`)**:
   - Stage titles, taglines, log lines, and stat cards are defined with localized entries in `i18n/en.js` and `i18n/de.js`.
   - On language switch, the currently active simulation step re-renders instantly in the selected language.
3. **Morning Action Briefs (`BRIEFS`)**:
   - Titles, badges, section headers, and justification summaries adapt to the active language.
4. **Cover Letter Showcase (`COVER_LETTERS`)**:
   - Provides German (DIN-5008 authoritative) and English role-specific cover letter templates with localized UI labels.
5. **Archetype Selectors & Role Names**:
   - Dropdown options update display labels according to the active language.

---

## 5. UI Language Selector UX & Bidirectional Synchronization

### 5.1 Navigation Controls

The existing static button (`EN / DE`) is replaced with an accessible, compact selector in two places:
1. **Desktop Nav Header**: `.lang-select` styled with the existing pill design aesthetic (`.btn-pill-sm` / `.role-select`).
2. **Mobile Nav Drawer**: `.lang-select` inside the drawer actions container.

Both selectors are populated dynamically and stay in sync.

### 5.2 Embedded Resume Iframe Synchronization

When the user switches languages on `index.html`:
1. The landing page updates smoothly in-place without scrolling or jumping.
2. The engine invokes `contentWindow.switchLanguage(lang)` on `#resumeFrame`.
3. If the user clicks the language toggle inside the iframe, the parent window receives the update via event listener and updates `index.html` accordingly.

---

## 6. Language & Cultural Invariants (German Calibration)

In strict adherence to repository guidelines:
- **Spaced Technical Compounds**: Never use hyphenated compounds in German translations.
  * Correct: `REST APIs`, `CI/CD Pipelines`, `MCP Tools`, `KI Agenten`, `Fullstack Entwickler`, `Fullstack Engineer`, `Cloud Architekturen`, `Figma Design`, `n8n Workflows`.
  * Forbidden: `REST-APIs`, `CI/CD-Pipelines`, `MCP-Tools`, `KI-Agenten`, `Fullstack-Entwickler`.
- **Zero Emojis**: Use clean SVG vectors and Lucide icons; no emojis anywhere in markup, translations, or UI messages.
- **DIN-5008 Accuracy**: Maintain formal German business terminology for cover letters and ATS evaluations.

---

## 7. Verification & Acceptance Criteria

1. **Bilingual Completeness**:
   - Every user-facing section of `index.html` displays accurate German when `DE` is selected and accurate English when `EN` is selected.
   - All interactive components (simulator, briefs, cover letters, prompts copy buttons, toasts) render correctly in both languages.
2. **Extensibility Verification**:
   - Adding a mock test locale (e.g. `i18n/test.js`) results in the language automatically showing up in the switcher dropdown without altering HTML.
3. **Storage & URL Persistence**:
   - Visiting `index.html?lang=de` boots the page immediately in German.
   - Refreshing the page retains the user's selected language via `localStorage`.
4. **Offline & File Protocol Compatibility**:
   - Opening `index.html` directly via `file:///` in Chrome/Edge/Firefox works without CORS security errors.
5. **No Regressions**:
   - Existing responsive styles, dark mode toggle, mobile drawer, print styles, and PDF compilation via `jobs/engine.py` continue to work without error.

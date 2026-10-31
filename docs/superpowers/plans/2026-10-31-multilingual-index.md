# Multilingual index.html & German Localization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a modular, zero-dependency multilingual architecture for `index.html`, fully translate the landing page and dynamic components into German, and ensure future languages can be added with zero markup changes.

**Architecture:** Client-side modular locale dictionaries (`i18n/en.js`, `i18n/de.js`) register to a global namespace (`window.CAREER_I18N`), driven by a reactive DOM translation and state manager (`i18n/i18n.js`). Elements in `index.html` declare translation keys via `data-i18n` and `data-i18n-attr`, with dynamic strings in `hub.js` routed through `window.CAREER_I18N.t()`. Language preferences persist across `localStorage`, URL query parameters (`?lang=de`), and bidirectional synchronization with the embedded `#resumeFrame` iframe.

**Tech Stack:** Vanilla JavaScript (ES6+), HTML5 semantic markup, Tailwind CSS / Vanilla CSS (`style.css`), Python 3 (automated validation test suite).

---

### Task 1: Core i18n Engine (`i18n/i18n.js`)

**Files:**
- Create: `i18n/i18n.js`
- Test: `tests/test_i18n_engine.html`

- [ ] **Step 1: Write the browser-based test suite for `i18n.js`**

Create `tests/test_i18n_engine.html` to test initial language detection, key lookup with dot notation, attribute translation, DOM translation, fallback handling, and event dispatching.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>i18n Engine Unit Tests</title>
</head>
<body>
  <div id="test-container">
    <h1 id="test-h1" data-i18n="test.title">Original Title</h1>
    <p id="test-p" data-i18n="test.body">Original Body</p>
    <input id="test-input" type="text" data-i18n-attr="placeholder:test.placeholder,aria-label:test.ariaLabel" placeholder="Old" aria-label="Old" />
    <span id="test-missing" data-i18n="missing.key">Original Content</span>
  </div>

  <select id="lang-select-1" class="lang-select"></select>
  <select id="lang-select-2" class="lang-select"></select>

  <script>
    window.CAREER_I18N = {
      en: {
        meta: { code: "en", label: "English" },
        test: {
          title: "English Title",
          body: "English <strong>Body</strong>",
          placeholder: "Type here...",
          ariaLabel: "English Input"
        }
      },
      de: {
        meta: { code: "de", label: "Deutsch" },
        test: {
          title: "Deutscher Titel",
          body: "Deutscher <strong>Körper</strong>",
          placeholder: "Hier eingeben...",
          ariaLabel: "Deutsche Eingabe"
        }
      }
    };
  </script>
  <script src="../i18n/i18n.js"></script>
  <script>
    const results = [];
    function assert(desc, condition) {
      results.push({ desc, pass: !!condition });
      console.log((condition ? "PASS: " : "FAIL: ") + desc);
    }

    CareerI18n.init();

    // 1. Check default language
    assert("Default language should be en", CareerI18n.getLanguage() === "en");
    assert("H1 text should be translated to English", document.getElementById("test-h1").textContent === "English Title");
    assert("Input placeholder translated", document.getElementById("test-input").getAttribute("placeholder") === "Type here...");

    // 2. Switch language to de
    CareerI18n.setLanguage("de");
    assert("Language changed to de", CareerI18n.getLanguage() === "de");
    assert("H1 text should be translated to German", document.getElementById("test-h1").textContent === "Deutscher Titel");
    assert("P html should contain strong", document.getElementById("test-p").innerHTML === "Deutscher <strong>Körper</strong>");
    assert("Input placeholder updated to German", document.getElementById("test-input").getAttribute("placeholder") === "Hier eingeben...");
    assert("Missing key keeps fallback/original", document.getElementById("test-missing").textContent === "Original Content");

    // 3. Dropdown population
    const select1 = document.getElementById("lang-select-1");
    assert("Dropdown 1 has 2 options", select1.options.length === 2);
    assert("Dropdown 1 value is de", select1.value === "de");

    // 4. Helper t()
    assert("t() resolves dot notation", CareerI18n.t("test.title") === "Deutscher Titel");
    assert("t() falls back if missing", CareerI18n.t("non.existent", "Fallback") === "Fallback");

    const allPassed = results.every(r => r.pass);
    const summary = document.createElement("div");
    summary.id = "test-result";
    summary.textContent = allPassed ? "ALL TESTS PASSED" : "SOME TESTS FAILED";
    document.body.appendChild(summary);
  </script>
</body>
</html>
```

- [ ] **Step 2: Implement `i18n/i18n.js`**

```javascript
/**
 * Career Engine Modular i18n Translation & State Manager
 * Zero external dependencies. Works on web servers, Docker, and file:// protocol.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CareerI18n = factory();
  }
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  const STORAGE_KEY = 'career_engine_lang';
  let activeLang = 'en';
  let isInitializing = false;

  function getLoadedLocales() {
    if (typeof window === 'undefined') return {};
    return window.CAREER_I18N || {};
  }

  function getAvailableLanguages() {
    const locales = getLoadedLocales();
    return Object.keys(locales).map(function (code) {
      const meta = (locales[code] && locales[code].meta) || {};
      return {
        code: code,
        label: meta.label || code.toUpperCase(),
        dir: meta.dir || 'ltr'
      };
    });
  }

  function getNestedValue(obj, path) {
    if (!obj || !path) return undefined;
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length; i++) {
      if (current === null || current === undefined || typeof current !== 'object') {
        return undefined;
      }
      current = current[parts[i]];
    }
    return current;
  }

  function t(keyPath, fallback, interpolations) {
    const locales = getLoadedLocales();
    let val = getNestedValue(locales[activeLang], keyPath);
    if (val === undefined && activeLang !== 'en') {
      val = getNestedValue(locales['en'], keyPath);
    }
    if (val === undefined) {
      val = fallback !== undefined ? fallback : keyPath;
    }
    if (typeof val === 'string' && interpolations && typeof interpolations === 'object') {
      Object.keys(interpolations).forEach(function (k) {
        val = val.replace(new RegExp('\\{' + k + '\\}', 'g'), interpolations[k]);
      });
    }
    return val;
  }

  function translateElement(el, lang) {
    const locales = getLoadedLocales();
    const currentDict = locales[lang] || {};
    const fallbackDict = locales['en'] || {};

    const key = el.getAttribute('data-i18n');
    if (key) {
      let val = getNestedValue(currentDict, key);
      if (val === undefined && lang !== 'en') {
        val = getNestedValue(fallbackDict, key);
      }
      if (val !== undefined && val !== null) {
        el.innerHTML = val;
      }
    }

    const attrSpec = el.getAttribute('data-i18n-attr');
    if (attrSpec) {
      attrSpec.split(',').forEach(function (pair) {
        const parts = pair.split(':');
        if (parts.length === 2) {
          const attr = parts[0].trim();
          const attrKey = parts[1].trim();
          let attrVal = getNestedValue(currentDict, attrKey);
          if (attrVal === undefined && lang !== 'en') {
            attrVal = getNestedValue(fallbackDict, attrKey);
          }
          if (attrVal !== undefined && attrVal !== null) {
            el.setAttribute(attr, attrVal);
          }
        }
      });
    }
  }

  function translatePage(lang) {
    if (typeof document === 'undefined') return;
    const targetLang = lang || activeLang;
    const elements = document.querySelectorAll('[data-i18n], [data-i18n-attr]');
    elements.forEach(function (el) {
      translateElement(el, targetLang);
    });

    document.documentElement.lang = targetLang;
    const locales = getLoadedLocales();
    const meta = (locales[targetLang] && locales[targetLang].meta) || {};
    if (meta.dir) {
      document.documentElement.dir = meta.dir;
    }
    const pageTitle = getNestedValue(locales[targetLang], 'meta.pageTitle');
    if (pageTitle) {
      document.title = pageTitle;
    }
  }

  function populateSelectors() {
    if (typeof document === 'undefined') return;
    const languages = getAvailableLanguages();
    const selects = document.querySelectorAll('.lang-select');

    selects.forEach(function (select) {
      const prevVal = select.value || activeLang;
      select.innerHTML = '';
      languages.forEach(function (lang) {
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = `${lang.code.toUpperCase()} · ${lang.label}`;
        if (lang.code === activeLang) opt.selected = true;
        select.appendChild(opt);
      });
      select.value = prevVal || activeLang;
    });
  }

  function syncResumeFrame(lang) {
    if (typeof document === 'undefined') return;
    const frame = document.getElementById('resumeFrame');
    if (!frame || !frame.contentWindow) return;
    try {
      const frameWin = frame.contentWindow;
      if (typeof frameWin.switchLanguage === 'function') {
        frameWin.switchLanguage(lang);
      }
    } catch (e) {
      // Cross-origin fallback or frame not yet loaded
    }
  }

  function setLanguage(langCode, options) {
    const opts = options || {};
    const locales = getLoadedLocales();
    if (!locales[langCode]) {
      console.warn('[CareerI18n] Language not loaded:', langCode);
      return;
    }

    activeLang = langCode;

    if (!opts.skipStorage && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, langCode);
      } catch (e) {}
    }

    if (!opts.skipUrl && typeof window !== 'undefined' && window.history && window.history.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', langCode);
      window.history.replaceState({}, '', url.toString());
    }

    populateSelectors();
    translatePage(activeLang);

    if (!opts.skipIframe) {
      syncResumeFrame(activeLang);
    }

    if (typeof window !== 'undefined') {
      const event = new CustomEvent('career-i18n-changed', {
        detail: { language: activeLang }
      });
      window.dispatchEvent(event);
    }
  }

  function detectInitialLanguage() {
    if (typeof window === 'undefined') return 'en';
    const locales = getLoadedLocales();

    // 1. URL Query Param: ?lang=de
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang && locales[urlLang]) return urlLang;
    } catch (e) {}

    // 2. LocalStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && locales[saved]) return saved;
    } catch (e) {}

    // 3. Browser Language
    try {
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase().slice(0, 2);
      if (browserLang && locales[browserLang]) return browserLang;
    } catch (e) {}

    return 'en';
  }

  function bindEvents() {
    if (typeof document === 'undefined') return;
    document.addEventListener('change', function (e) {
      if (e.target && e.target.classList.contains('lang-select')) {
        setLanguage(e.target.value);
      }
    });

    const frame = document.getElementById('resumeFrame');
    if (frame) {
      frame.addEventListener('load', function () {
        syncResumeFrame(activeLang);
      });
    }

    window.addEventListener('message', function (event) {
      if (event.data && event.data.type === 'CAREER_RESUME_LANG_CHANGED') {
        const newLang = event.data.language;
        if (newLang && newLang !== activeLang && getLoadedLocales()[newLang]) {
          setLanguage(newLang, { skipIframe: true });
        }
      }
    });
  }

  function init() {
    if (isInitializing) return;
    isInitializing = true;
    activeLang = detectInitialLanguage();
    bindEvents();
    populateSelectors();
    translatePage(activeLang);
  }

  return {
    init: init,
    t: t,
    setLanguage: setLanguage,
    getLanguage: function () { return activeLang; },
    getAvailableLanguages: getAvailableLanguages,
    translatePage: translatePage,
    translateElement: translateElement
  };
});
```

- [ ] **Step 3: Run the browser unit test using python headless runner or CLI test**

Execute headless check on `tests/test_i18n_engine.html` via Python's browser runner or simple script to verify `ALL TESTS PASSED`.

- [ ] **Step 4: Commit Task 1**

```bash
git add i18n/i18n.js tests/test_i18n_engine.html
git commit -m "feat(i18n): create core translation and state manager engine"
```

---

### Task 2: English Translation Dictionary (`i18n/en.js`)

**Files:**
- Create: `i18n/en.js`

- [ ] **Step 1: Write `i18n/en.js` covering every section of `index.html`**

Structure `i18n/en.js` systematically by section matching the layout of `index.html`:
- `meta`: pageTitle, description
- `nav`: brandTitle, guide, toolkit, faq, getStarted, dailyRoutine, results, aiPrompts, coverLetters, cliEngine, skills, webResume, toggleTheme, light, dark, portfolio, downloadKit
- `hero`: headline, subhead, trustBadgePill, trustBadgeText, ctaSetup, ctaPrompts, ctaResume, github
- `coral`: title, desc, cta
- `setup`: title, badge, desc1, desc2, step1Title, step1Desc, step2Title, step2Desc, step3Title, step3Desc, step4Title, step4Desc, copyCommands
- `workflow`: title, badge, desc, scrubLabel, step1Tab, step2Tab, step3Tab, step4Tab, step1Title, step1Tagline, step2Title, step2Tagline, step3Title, step3Tagline, step4Title, step4Tagline
- `briefs`: title, badge, desc, selectorLabel, pkg1Title, pkg2Title, checklistTitle, maintenanceTitle
- `prompts`: title, badge, desc, promptCards (titles, descriptions, tags, copyPrompt)
- `coverLetters`: title, badge, desc, selectorLabel, dinNotice
- `engine`: title, badge, desc, commandCards (titles, descriptions)
- `skills`: title, badge, desc, categories, skillCards
- `resume`: archetypeLabel, standaloneLink, toggleAts, printPdf, previewNotice
- `faq`: title, badge, items (6 questions and answers matching JSON-LD Schema)
- `download`: title, desc, cta, bullets
- `share`: title, desc, btnTwitter, btnLinkedIn, btnCopyLink
- `footer`: brandDesc, copyright, links
- `ui`: copied, promptCopiedToast, commandCopiedToast, atsActiveToast, atsStandardToast, switchPreviewToast

- [ ] **Step 2: Validate `i18n/en.js` syntax**

Run: `node -e "require('./i18n/en.js'); console.log('Syntax OK')"` (or Python regex parser).

- [ ] **Step 3: Commit Task 2**

```bash
git add i18n/en.js
git commit -m "feat(i18n): create comprehensive English translation dictionary"
```

---

### Task 3: German Translation Dictionary (`i18n/de.js`)

**Files:**
- Create: `i18n/de.js`

- [ ] **Step 1: Write `i18n/de.js` with complete German translations**

Translate all keys matching `i18n/en.js` 1:1.
**Strict German Invariants Enforced:**
- Spaced technical terms: `REST APIs`, `CI/CD Pipelines`, `MCP Tools`, `KI Agenten`, `Fullstack Entwickler`, `Fullstack Engineer`, `Cloud Architekturen`, `n8n Workflows`. Zero hyphenated terms.
- Zero emojis.
- Exact DIN-5008 alignment for application and resume terminology.

- [ ] **Step 2: Commit Task 3**

```bash
git add i18n/de.js
git commit -m "feat(i18n): create German translation dictionary with spaced compound invariants"
```

---

### Task 4: Key Parity & Invariants Verification Test (`tests/test_i18n.py`)

**Files:**
- Create: `tests/test_i18n.py`

- [ ] **Step 1: Write the automated test script `tests/test_i18n.py`**

The test must verify:
1. `en.js` and `de.js` parse cleanly as JSON/objects.
2. Every key path in `en.js` exists in `de.js` and vice versa (100% key parity).
3. No banned hyphenated terms in `de.js` (`REST-APIs`, `CI/CD-Pipelines`, `MCP-Tools`, `KI-Agenten`, `Fullstack-Entwickler`, `Full-Stack`, `Cloud-Architekturen`).
4. No emojis in either translation dictionary.
5. `meta.code` equals `'en'` and `'de'` respectively.

- [ ] **Step 2: Run test to verify key parity and invariants**

Run: `python tests/test_i18n.py`
Expected: `PASS: 100% key parity and invariant compliance verified.`

- [ ] **Step 3: Commit Task 4**

```bash
git add tests/test_i18n.py
git commit -m "test(i18n): add automated key parity and invariant verification test"
```

---

### Task 5: Language Switcher Dropdown & CSS Styling (`style.css`)

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Add `.lang-select` styles in `style.css`**

Add responsive styling matching `.role-select` and `.btn-pill-sm` for both desktop navbar and mobile navigation drawer:
- Custom chevron SVG background icon.
- Dark mode compatibility (`html.dark .lang-select`).
- Focus states and proper padding.

- [ ] **Step 2: Verify styles with existing design system**

Check dark and light mode variable references in `style.css`.

- [ ] **Step 3: Commit Task 5**

```bash
git add style.css
git commit -m "style: add responsive styles for multilingual language dropdown"
```

---

### Task 6: Declarative DOM Tagging in `index.html`

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add i18n scripts to `<head>`**

```html
<script src="./i18n/en.js" defer></script>
<script src="./i18n/de.js" defer></script>
<script src="./i18n/i18n.js" defer></script>
<script src="./hub.js" defer></script>
```

- [ ] **Step 2: Replace binary `EN / DE` buttons with `.lang-select` dropdowns**

In desktop navbar:
```html
<div class="nav-desktop-actions">
  <select class="lang-select" aria-label="Select Language"></select>
  <a href="https://links.masrisystems.com" target="_blank" rel="noopener noreferrer" class="btn-pill-sm">Portfolio</a>
  <a href="./download/career-engine-starter.zip" download="career-engine-starter.zip" class="btn-primary btn-nav-cta" data-i18n="nav.downloadKit">Download Kit</a>
</div>
```

In mobile navigation drawer:
```html
<div class="nav-drawer-row">
  <select class="lang-select drawer-lang-select" aria-label="Select Language"></select>
  <a href="https://links.masrisystems.com" target="_blank" rel="noopener noreferrer" class="btn-pill-sm drawer-pill-btn">Portfolio</a>
</div>
```

- [ ] **Step 3: Tag all elements across `index.html` with `data-i18n`**

Tag sections:
- Navigation links (`data-i18n="nav.guide"`, `nav.toolkit"`, etc.)
- Hero headline, subhead, trust badge, CTAs
- Signature Coral Card
- Step-by-Step Setup Guide (`#setup`)
- Daily routine simulator header, controls, and scrub bar (`#daily-workflow`)
- Action Brief showcase headers and labels (`#brief-showcase`)
- AI Prompt Library titles, descriptions, and copy buttons (`#prompts`)
- Cover letter showcase titles, labels, and DIN notice (`#cover-letters`)
- CLI Engine showcase titles and command cards (`#engine`)
- Skills and Agent workflows (`#workflows`)
- Web Resume live preview controls and iframe labels (`#resume`)
- FAQ accordion questions and answers (`#faq`)
- Download kit band and bullets (`#download`)
- Share section (`#share`)
- Editorial Footer links and copyright (`#footer`)

- [ ] **Step 4: Update inline script in `index.html` to initialize `CareerI18n`**

Ensure `DOMContentLoaded` triggers `CareerI18n.init()`.

- [ ] **Step 5: Run `python tests/test_i18n.py` to verify all `data-i18n` tags exist in dictionaries**

- [ ] **Step 6: Commit Task 6**

```bash
git add index.html
git commit -m "feat(i18n): tag index.html elements with data-i18n attributes and connect language selectors"
```

---

### Task 7: Dynamic Content & Client Logic Integration in `hub.js`

**Files:**
- Modify: `hub.js`

- [ ] **Step 1: Integrate `CareerI18n.t()` for all dynamic UI messages in `hub.js`**

- Update `showToast`: localize switch and copy notifications.
- Update `copyPrompt`: button text changes to `CareerI18n.t('ui.copied', 'Copied!')`.
- Update `copyEngineCommand`: button text changes to `CareerI18n.t('ui.copied', 'Copied!')`.
- Update `toggleAtsMode`: toast message uses `CareerI18n.t()`.

- [ ] **Step 2: Localize `SIM_STAGES` (Interactive 20-min workflow)**

Refactor `SIM_STAGES` so titles, taglines, log lines, and stat labels read from `CareerI18n.t()` or a localized lookup, re-rendering on the `'career-i18n-changed'` event.

- [ ] **Step 3: Localize Action Briefs (`BRIEFS`) and Cover Letters (`COVER_LETTERS`) headers and field labels**

- [ ] **Step 4: Commit Task 7**

```bash
git add hub.js
git commit -m "feat(i18n): connect hub.js dynamic simulation and action brief labels to i18n engine"
```

---

### Task 8: End-to-End Verification & Validation

**Files:**
- Run: `tests/test_i18n.py`
- Run: `python jobs/engine.py build-roles`

- [ ] **Step 1: Run complete i18n test suite**

Run: `python tests/test_i18n.py`
Verify:
- 100% key parity between `en.js` and `de.js`.
- All `data-i18n` attributes in `index.html` have corresponding entries.
- Zero hyphenated technical compounds in German dictionary.
- Zero emojis across all dictionaries and UI files.

- [ ] **Step 2: Validate existing engine commands and PDF generation**

Run: `python jobs/engine.py build-roles`
Verify that `jobs/engine.py` builds without errors.

- [ ] **Step 3: Verify query parameter and storage boot**

Simulate loading with `?lang=de` and verify active language starts in German.

- [ ] **Step 4: Commit all final adjustments**

```bash
git commit -m "chore: complete multilingual index.html and German localization verification"
```

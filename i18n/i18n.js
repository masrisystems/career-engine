/**
 * Career Engine Core Internationalization (i18n) Engine
 *
 * Lightweight, zero-dependency translation and state manager module.
 * Provides dot notation key resolution, DOM element and attribute translation,
 * dropdown synchronization, persistence across localStorage and URL search params,
 * and seamless bidirectional synchronization with embedded resume iframes.
 *
 * Standard: UMD (Browser, CommonJS, AMD)
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CareerI18n = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Constants & Storage Keys
  var STORAGE_KEY = 'career_engine_lang';
  var LEGACY_STORAGE_KEY = 'lang';
  var DEFAULT_LANG = 'en';

  // Standard language labels map for fallback presentation
  var DEFAULT_LANGUAGE_LABELS = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    it: 'Italiano',
    nl: 'Nederlands',
    pt: 'Português',
    pl: 'Polski',
    zh: '中文',
    ja: '日本語',
    ar: 'العربية'
  };

  // Internal State
  var currentLang = DEFAULT_LANG;
  var translations = {};
  var isInitialized = false;
  var messageListenerBound = false;

  /**
   * Deeply merges source object into target object.
   */
  function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    if (!target || typeof target !== 'object') target = {};

    var keys = Object.keys(source);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (!target[key] || typeof target[key] !== 'object') {
          target[key] = {};
        }
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }

  /**
   * Resolves a nested object property path via dot notation.
   */
  function resolvePath(obj, keys) {
    if (!obj || typeof obj !== 'object') return undefined;
    var curr = obj;
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (curr === null || curr === undefined || typeof curr !== 'object') {
        return undefined;
      }
      curr = curr[k];
    }
    return curr;
  }

  /**
   * Retrieves the active translation dictionary for a given language code.
   */
  function getDictionary(lang) {
    if (!lang) return null;
    var normalized = String(lang).toLowerCase();

    // Check internal registry first
    if (translations[normalized]) {
      return translations[normalized];
    }

    // Check window.CAREER_I18N global dictionary
    if (typeof window !== 'undefined' && window.CAREER_I18N && window.CAREER_I18N[normalized]) {
      return window.CAREER_I18N[normalized];
    }

    return null;
  }

  /**
   * Returns list of all available language codes.
   */
  function getAvailableLanguages() {
    var langSet = {};

    // Keys from internal store
    var internalKeys = Object.keys(translations);
    for (var i = 0; i < internalKeys.length; i++) {
      langSet[internalKeys[i].toLowerCase()] = true;
    }

    // Keys from window.CAREER_I18N
    if (typeof window !== 'undefined' && window.CAREER_I18N && typeof window.CAREER_I18N === 'object') {
      var globalKeys = Object.keys(window.CAREER_I18N);
      for (var j = 0; j < globalKeys.length; j++) {
        langSet[globalKeys[j].toLowerCase()] = true;
      }
    }

    var available = Object.keys(langSet);
    if (available.length === 0) {
      return ['en', 'de'];
    }
    return available;
  }

  /**
   * Resolves human readable language label.
   */
  function getLanguageLabel(code) {
    var normalized = String(code).toLowerCase();
    var dict = getDictionary(normalized);

    if (dict && dict.meta) {
      if (dict.meta.label) return dict.meta.label;
      if (dict.meta.name) return dict.meta.name;
    }

    if (DEFAULT_LANGUAGE_LABELS[normalized]) {
      return DEFAULT_LANGUAGE_LABELS[normalized];
    }

    return normalized.toUpperCase();
  }

  /**
   * Translates a translation key with fallback and parameter interpolation.
   */
  function t(keyPath, fallback, interpolations) {
    var fb = fallback;
    var params = interpolations;

    // Handle case where fallback is omitted and interpolations object is passed second
    if (typeof fallback === 'object' && fallback !== null && interpolations === undefined) {
      params = fallback;
      fb = undefined;
    }

    if (!keyPath || typeof keyPath !== 'string') {
      return fb !== undefined ? fb : undefined;
    }

    var keys = keyPath.split('.');

    // 1. Resolve in current active language
    var val = resolvePath(getDictionary(currentLang), keys);

    // 2. Fallback to English dictionary if missing in current language
    if (val === undefined && currentLang !== DEFAULT_LANG) {
      val = resolvePath(getDictionary(DEFAULT_LANG), keys);
    }

    var result = val !== undefined ? val : fb;

    // 3. Interpolate variables if supplied (supports {var} and {{var}})
    if (result !== undefined && params && typeof params === 'object') {
      if (typeof result === 'string') {
        var paramKeys = Object.keys(params);
        for (var i = 0; i < paramKeys.length; i++) {
          var paramKey = paramKeys[i];
          var replacement = params[paramKey];
          var regex = new RegExp('\\{\\{?\\s*' + paramKey + '\\s*\\}\\}?', 'g');
          result = result.replace(regex, replacement);
        }
      }
    }

    return result;
  }

  /**
   * Detects the initial language based on URL, localStorage, DOM, or defaults.
   */
  function detectInitialLanguage(options) {
    var available = getAvailableLanguages();

    // 1. URL search parameter (?lang=...)
    try {
      if (typeof window !== 'undefined' && window.location && window.location.search) {
        var params = new URLSearchParams(window.location.search);
        var urlLang = params.get('lang');
        if (urlLang && available.indexOf(urlLang.toLowerCase()) !== -1) {
          return urlLang.toLowerCase();
        }
      }
    } catch (e) {}

    // 2. Local storage
    try {
      if (typeof localStorage !== 'undefined') {
        var stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
        if (stored && available.indexOf(stored.toLowerCase()) !== -1) {
          return stored.toLowerCase();
        }
      }
    } catch (e) {}

    // 3. Explicit default from options
    if (options && options.defaultLang && available.indexOf(options.defaultLang.toLowerCase()) !== -1) {
      return options.defaultLang.toLowerCase();
    }

    // 4. HTML document language attribute
    try {
      if (typeof document !== 'undefined' && document.documentElement && document.documentElement.lang) {
        var docLang = document.documentElement.lang.slice(0, 2).toLowerCase();
        if (docLang && available.indexOf(docLang) !== -1) {
          return docLang;
        }
      }
    } catch (e) {}

    // 5. Default fallback
    if (available.indexOf(DEFAULT_LANG) !== -1) {
      return DEFAULT_LANG;
    }
    return available.length > 0 ? available[0] : DEFAULT_LANG;
  }

  /**
   * Persists active language to localStorage and updates URL without page reload.
   */
  function persistLanguage(lang) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
        localStorage.setItem(LEGACY_STORAGE_KEY, lang);
      }
    } catch (e) {}

    try {
      if (typeof window !== 'undefined' && window.location && window.history && window.history.replaceState) {
        var url = new URL(window.location.href);
        if (url.searchParams.get('lang') !== lang) {
          url.searchParams.set('lang', lang);
          window.history.replaceState({}, '', url.toString());
        }
      }
    } catch (e) {}
  }

  /**
   * Translates a single DOM element.
   */
  function translateElement(el, lang) {
    if (!el || typeof el.getAttribute !== 'function') return;
    var activeLang = lang || currentLang;

    // 1. Text or HTML translation via data-i18n
    var i18nKey = el.getAttribute('data-i18n');
    if (i18nKey) {
      var val = t(i18nKey);
      if (val !== undefined && val !== null) {
        if (typeof val === 'string' && /<[a-z\/][\s\S]*>/i.test(val)) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    }

    // 2. Attribute translation via data-i18n-attr (e.g. "placeholder:test.placeholder,aria-label:test.ariaLabel")
    var attrAttr = el.getAttribute('data-i18n-attr');
    if (attrAttr) {
      var pairs = attrAttr.split(',');
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].trim();
        if (!pair) continue;
        var colonIdx = pair.indexOf(':');
        if (colonIdx === -1) continue;

        var attrName = pair.slice(0, colonIdx).trim();
        var keyPath = pair.slice(colonIdx + 1).trim();
        if (!attrName || !keyPath) continue;

        var attrVal = t(keyPath);
        if (attrVal !== undefined && attrVal !== null) {
          el.setAttribute(attrName, attrVal);
          if (attrName === 'value' && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
            el.value = attrVal;
          }
        }
      }
    }

    // 3. Convenience single attributes
    var placeholderKey = el.getAttribute('data-i18n-placeholder');
    if (placeholderKey) {
      var placeholderVal = t(placeholderKey);
      if (placeholderVal !== undefined && placeholderVal !== null) {
        el.setAttribute('placeholder', placeholderVal);
      }
    }

    var titleKey = el.getAttribute('data-i18n-title');
    if (titleKey) {
      var titleVal = t(titleKey);
      if (titleVal !== undefined && titleVal !== null) {
        el.setAttribute('title', titleVal);
      }
    }

    var ariaLabelKey = el.getAttribute('data-i18n-aria-label');
    if (ariaLabelKey) {
      var ariaLabelVal = t(ariaLabelKey);
      if (ariaLabelVal !== undefined && ariaLabelVal !== null) {
        el.setAttribute('aria-label', ariaLabelVal);
      }
    }

    // 4. Legacy bilingual tags (data-lang-en / data-lang-de / data-lang-*)
    var legacyVal = el.getAttribute('data-lang-' + activeLang);
    if (legacyVal !== null && legacyVal !== undefined) {
      if (legacyVal.indexOf('<') !== -1 && legacyVal.indexOf('>') !== -1) {
        el.innerHTML = legacyVal;
      } else {
        el.textContent = legacyVal;
      }
    }
  }

  /**
   * Translates all annotated elements across the page.
   */
  function translatePage(lang) {
    if (typeof document === 'undefined') return;
    var targetLang = lang || currentLang;

    if (document.documentElement) {
      document.documentElement.lang = targetLang;
    }

    var selector = '[data-i18n], [data-i18n-attr], [data-i18n-placeholder], [data-i18n-title], [data-i18n-aria-label], [data-lang-en], [data-lang-de]';
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      translateElement(elements[i], targetLang);
    }
  }

  /**
   * Populates all .lang-select dropdowns and binds change listeners.
   */
  function populateDropdowns() {
    if (typeof document === 'undefined') return;
    var selects = document.querySelectorAll('.lang-select');
    var available = getAvailableLanguages();

    for (var s = 0; s < selects.length; s++) {
      var select = selects[s];

      // Build options if not populated or if length differs
      var currentOptions = [];
      for (var o = 0; o < select.options.length; o++) {
        currentOptions.push(select.options[o].value);
      }

      var needsRebuild = currentOptions.length !== available.length;
      if (!needsRebuild) {
        for (var a = 0; a < available.length; a++) {
          if (currentOptions.indexOf(available[a]) === -1) {
            needsRebuild = true;
            break;
          }
        }
      }

      if (needsRebuild) {
        select.innerHTML = '';
        for (var i = 0; i < available.length; i++) {
          var code = available[i];
          var opt = document.createElement('option');
          opt.value = code;
          opt.textContent = code.toUpperCase() + ' \u00B7 ' + getLanguageLabel(code);
          select.appendChild(opt);
        }
      }

      select.value = currentLang;

      // Bind change listener once
      if (!select.dataset.careerI18nBound) {
        select.dataset.careerI18nBound = 'true';
        select.addEventListener('change', function (e) {
          setLanguage(e.target.value);
        });
      }
    }
  }

  /**
   * Synchronizes active language with #resumeFrame iframe if present.
   */
  function syncResumeFrame(lang) {
    if (typeof document === 'undefined') return;
    var frame = document.getElementById('resumeFrame');
    if (!frame) return;

    try {
      if (frame.contentWindow) {
        // Send window message
        frame.contentWindow.postMessage({
          type: 'CAREER_RESUME_LANG_CHANGED',
          action: 'CAREER_SET_LANGUAGE',
          lang: lang,
          language: lang
        }, '*');

        // Direct function invocation if same origin
        if (typeof frame.contentWindow.switchLanguage === 'function') {
          frame.contentWindow.switchLanguage(lang);
        } else if (frame.contentWindow.CareerI18n && typeof frame.contentWindow.CareerI18n.setLanguage === 'function') {
          frame.contentWindow.CareerI18n.setLanguage(lang, { fromParent: true });
        }

        if (frame.contentDocument && frame.contentDocument.documentElement) {
          frame.contentDocument.documentElement.lang = lang;
        }
      }
    } catch (e) {}
  }

  /**
   * Ensures #resumeFrame receives current language upon finishing loading.
   */
  function bindResumeFrame() {
    if (typeof document === 'undefined') return;
    var frame = document.getElementById('resumeFrame');
    if (frame && !frame.dataset.careerI18nBound) {
      frame.dataset.careerI18nBound = 'true';
      frame.addEventListener('load', function () {
        syncResumeFrame(currentLang);
      });
    }
  }

  /**
   * Handles incoming window messages for language coordination.
   */
  function bindMessageListener() {
    if (messageListenerBound || typeof window === 'undefined') return;
    messageListenerBound = true;

    window.addEventListener('message', function (event) {
      if (!event || !event.data) return;
      var data = event.data;
      if (data.type === 'CAREER_RESUME_LANG_CHANGED' || data.action === 'CAREER_RESUME_LANG_CHANGED') {
        var incomingLang = data.lang || data.language;
        if (incomingLang && incomingLang !== currentLang) {
          setLanguage(incomingLang, { fromFrame: true });
        }
      }
    });
  }

  /**
   * Switches active language, translates document, updates selects, and dispatches events.
   */
  function setLanguage(lang, options) {
    if (!lang || typeof lang !== 'string') return;
    var normalizedLang = lang.trim().toLowerCase();
    var previousLang = currentLang;

    currentLang = normalizedLang;

    // Persist to storage and URL
    persistLanguage(normalizedLang);

    // Translate DOM
    translatePage(normalizedLang);

    // Sync dropdown elements
    populateDropdowns();

    // Sync embedded resume frame unless event originated from frame
    if (!options || !options.fromFrame) {
      syncResumeFrame(normalizedLang);
    }
    bindResumeFrame();

    // Dispatch custom events
    if (typeof window !== 'undefined') {
      var eventDetail = { lang: normalizedLang, previousLang: previousLang };
      try {
        window.dispatchEvent(new CustomEvent('career:lang-changed', { detail: eventDetail }));
        window.dispatchEvent(new CustomEvent('career_lang_changed', { detail: eventDetail }));
        window.dispatchEvent(new CustomEvent('CAREER_RESUME_LANG_CHANGED', { detail: eventDetail }));
      } catch (e) {}
    }
    if (typeof document !== 'undefined') {
      try {
        document.dispatchEvent(new CustomEvent('career:lang-changed', { detail: { lang: normalizedLang, previousLang: previousLang } }));
      } catch (e) {}
    }

    return currentLang;
  }

  /**
   * Registers or updates a translation dictionary for a specific language.
   */
  function registerTranslation(lang, dict) {
    if (!lang || typeof dict !== 'object') return;
    var normalized = String(lang).toLowerCase();
    if (!translations[normalized]) {
      translations[normalized] = {};
    }
    deepMerge(translations[normalized], dict);
  }

  /**
   * Bulk loads translation dictionaries.
   */
  function loadTranslations(dictMap) {
    if (!dictMap || typeof dictMap !== 'object') return;
    var keys = Object.keys(dictMap);
    for (var i = 0; i < keys.length; i++) {
      registerTranslation(keys[i], dictMap[keys[i]]);
    }
  }

  /**
   * Returns currently active language code.
   */
  function getLanguage() {
    return currentLang;
  }

  /**
   * Initializes the i18n engine.
   */
  function init(options) {
    var opts = options || {};

    if (opts.translations) {
      loadTranslations(opts.translations);
    }

    currentLang = detectInitialLanguage(opts);

    bindMessageListener();
    bindResumeFrame();

    translatePage(currentLang);
    populateDropdowns();
    syncResumeFrame(currentLang);

    isInitialized = true;
    return CareerI18n;
  }

  var CareerI18n = {
    init: init,
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    getAvailableLanguages: getAvailableLanguages,
    translatePage: translatePage,
    translateElement: translateElement,
    t: t,
    registerTranslation: registerTranslation,
    loadTranslations: loadTranslations
  };

  return CareerI18n;
}));

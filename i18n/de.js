/**
 * Career Engine Authoritative German Translation Dictionary
 * Zero external dependencies. Zero emojis.
 * Spaced compound technical terms enforced (e.g. REST APIs, CI/CD Pipelines, MCP Tools, Fullstack Entwickler).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CAREER_I18N = root.CAREER_I18N || {};
    root.CAREER_I18N.de = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return {
    meta: {
      code: "de",
      label: "Deutsch",
      dir: "ltr",
      pageTitle: "Career Engine | Masri Systems",
      description: "Career Engine — Open-Source ATS Web-Lebenslauf Template, KI Prompt Bibliothek für Anschreiben & Anpassung, 24 Karriere-Agenten Skills und Headless-PDF-Automatisierung.",
      ogTitle: "Career Engine | Masri Systems",
      ogDescription: "Open Source ATS optimiertes Web Lebenslauf Template, tägliche Jobsuche Routine, KI Prompt Bibliothek für Anschreiben & Anpassung und Headless PDF Automatisierung."
    },

    nav: {
      brandTitle: "Career Engine",
      openSource: "Open Source",
      tag: "Open Source",
      guide: "Leitfaden",
      toolkit: "Toolkit",
      getStarted: "Erste Schritte",
      dailyRoutine: "Tägliche Routine",
      results: "Ergebnisse",
      aiPrompts: "KI Prompts",
      coverLetters: "Anschreiben",
      cliEngine: "CLI Engine",
      skills: "Skills",
      webResume: "Web Lebenslauf",
      faq: "FAQ",
      toggleTheme: "Farbschema wechseln",
      light: "Hell",
      dark: "Dunkel",
      portfolio: "Portfolio",
      downloadKit: "Starter Kit herunterladen",
      menuLabel: "Navigationsmenü umschalten"
    },

    hero: {
      headline: "Die Open Source ATS Web Lebenslauf & Karriere Automatisierungs Engine",
      subhead: "Ein einheitliches Karriere Toolkit für Tech Profis. Enthält ein interaktives DIN-5008 Lebenslauf Template, produktionserprobte LLM Prompts für Anschreiben und Anpassung, 24 spezialisierte Karriere Agenten Skills und Headless PDF Automatisierung.",
      trustBadgePill: "100% Lokal & Privat",
      trustBadgeText: "Läuft vollständig lokal auf Ihrem Rechner. Keine Cloud-Konten erforderlich, 100% ATS-Parser-Kompatibilität (Personio, Workday, Greenhouse) und strenge DIN-5008-Standards.",
      ctaSetup: "In 4 Schritten starten",
      ctaPrompts: "KI Prompts entdecken",
      ctaResume: "Web Lebenslauf ansehen",
      github: "GitHub"
    },

    coral: {
      title: "Karriere Engineering in Produktionsqualität",
      desc: "Entwickelt, um die Lücke zwischen ATS-Parsern, Hiring Managern und moderner KI-Automatisierung zu schließen. Kombiniert Single-Source-Profilarchitektur (config/profile.json) mit 7 praxiserprobten Prompt Suites, automatisierter Python Headless Chromium Kompilierung und täglichen Bewerbungspipelines — 100% lokal und Open Source.",
      cta: "Starter Kit herunterladen (ZIP)"
    },

    setup: {
      title: "In 4 Schritten starten",
      badge: "Etwa 30 Minuten · Einmalig",
      desc1: "Vom Download bis zum automatischen Lauf jeden Morgen. Sie brauchen Python 3.10+ (keine zusätzlichen Pakete), Chrome oder Edge für den PDF Export und einen KI Coding Agenten für Schritt 3 und 4. Die Beispiele nutzen <a href=\"https://claude.com/claude-code\" target=\"_blank\" rel=\"noopener noreferrer\">Claude Code</a>. Codex CLI und Gemini CLI lesen dieselbe <code class=\"font-mono text-xs\">AGENTS.md</code> und funktionieren genauso.",
      desc2: "Unter macOS und Linux tippen Sie <code class=\"font-mono text-xs\">python3</code> überall dort, wo in den Befehlen <code class=\"font-mono text-xs\">python</code> steht.",
      step1Title: "Installieren",
      step1Desc: "Klonen Sie das Repository (oder <a href=\"./download/career-engine-starter.zip\" download>laden Sie das ZIP herunter</a> und entpacken Sie es) und erstellen Sie dann die Beispiel Lebensläufe, um zu prüfen, ob Python und der PDF Export funktionieren. Danach liegen PDFs in <code class=\"font-mono text-xs\">jobs/roles/pdf/</code>.",
      step1CardClone: "Klonen und Engine testen",
      step1CardDocker: "Optional: nur die Webseiten ansehen",
      step1CardDockerDesc: "Stellt diese Seite und den Web Lebenslauf mit Docker unter http://localhost bereit. Port 80 belegt? Stellen Sie PORT=8080 voran.",
      step2Title: "Profil mit KI erstellen",
      step2Desc: "Alles, was die Engine erzeugt (Lebenslauf, Anschreiben, Suchlinks), stammt aus einer Datei: <code class=\"font-mono text-xs\">config/profile.json</code>. Lassen Sie sie von einer KI ausfüllen:",
      step2Item1: "Kopieren Sie den <a href=\"#prompts\">Prompt für Profil &amp; Lebenslauf Onboarding</a> in ChatGPT, Claude oder Gemini.",
      step2Item2: "Fügen Sie danach Ihren alten Lebenslauf oder Ihren LinkedIn Text ein, oder schreiben Sie <em>Interview me</em> und beantworten Sie stattdessen 7 kurze Fragen.",
      step2Item3: "Speichern Sie das zurückgegebene JSON als <code class=\"font-mono text-xs\">config/profile.json</code> und ersetzen Sie damit das Beispiel.",
      step2Item4: "Erstellen Sie alles mit Ihren Daten neu und öffnen Sie die Ergebnisse: Ihre Lebenslauf PDFs in <code class=\"font-mono text-xs\">jobs/roles/pdf/</code> und Ihre Jobbörsen Links in <code class=\"font-mono text-xs\">daily-job-search-links.md</code>.",
      step2Card: "Aus Ihrem Profil erstellen",
      step3Title: "Erster täglicher Lauf mit Ihrem KI Agenten",
      step3Desc: "Öffnen Sie ein Terminal im Ordner <code class=\"font-mono text-xs\">career-engine</code>, starten Sie Ihren Agenten (<code class=\"font-mono text-xs\">claude</code>, <code class=\"font-mono text-xs\">codex</code> oder <code class=\"font-mono text-xs\">gemini</code>) und fügen Sie die Anweisung unten ein. Der Agent sucht Stellen, bewertet sie, schreibt mit <code class=\"font-mono text-xs\">jobs/engine.py</code> für die besten Treffer einen angepassten Lebenslauf und ein DIN-5008 Anschreiben, trägt sie in <code class=\"font-mono text-xs\">jobs/job_matches.md</code> ein und endet mit einem Morning Action Brief wie im <a href=\"#brief-showcase\">Beispiel unten</a>. Beobachten Sie diesen ersten Lauf und bestätigen Sie seine Schritte, damit Sie wissen, was der geplante Lauf tun wird.",
      step3Card: "In Ihren Agenten einfügen",
      step3After: "Lesen Sie die Unterlagen in <code class=\"font-mono text-xs\">jobs/resumes/</code> und <code class=\"font-mono text-xs\">jobs/cover_letters/</code>, korrigieren Sie, was nicht stimmt, und senden Sie die Bewerbung selbst ab. Der Agent bewirbt sich nie in Ihrem Namen.",
      step4Title: "Jeden Werktag morgens planen",
      step4Desc: "<code class=\"font-mono text-xs\">scripts/daily-run.ps1</code> (Windows) und <code class=\"font-mono text-xs\">scripts/daily-run.sh</code> (macOS, Linux) führen dieselbe Anweisung ohne Chatfenster über Claude Code aus. Der Agent darf nur Dateien im Projekt lesen und bearbeiten, im Web suchen und <code class=\"font-mono text-xs\">jobs/engine.py</code> ausführen. Jeder Lauf schreibt ein Log nach <code class=\"font-mono text-xs\">jobs/logs/</code>. Planen Sie das Skript für 07:30 Uhr und nutzen Sie Ihre 20 Minuten dann für die Prüfung der Unterlagen statt für die Suche. Ersetzen Sie den Beispielpfad durch Ihren eigenen Ordner. Ihr Computer muss zu dieser Zeit eingeschaltet sein.",
      step4Win: "Windows (Aufgabenplanung)",
      step4WinDesc: "Einmal im Terminal ausführen. Wieder entfernen mit: schtasks /Delete /TN CareerEngineDaily",
      step4Cron: "macOS / Linux (cron)",
      step4CronDesc: "Führen Sie crontab -e aus und fügen Sie diese Zeile hinzu. Zum Beenden die Zeile löschen.",
      step4Cloud: "Cloud (Claude Code Routine)",
      step4CloudDesc: "Läuft auch, wenn Ihr Computer aus ist. Laden Sie Ihre Kopie in ein privates GitHub Repository hoch (es enthält Ihr Profil), tippen Sie dann dies in Claude Code und geben Sie die Anweisung aus Schritt 3 und einen Zeitplan für werktags 07:30 Uhr an.",
      copyCommand: "Befehl kopieren",
      copyCommands: "Befehle kopieren",
      copyInstruction: "Anweisung kopieren",
      copyLine: "Zeile kopieren"
    },

    workflow: {
      title: "Tägliche Jobsuche & Bewerbungsroutine",
      badge: "SOP · 20 Min tägliche Routine",
      desc: "Eine einfache, tägliche 20 Minuten Routine für Absolventen und Berufstätige. Statt 4 Stunden Jobportale zu durchsuchen und 50 generische Bewerbungen zu verschicken, finden Sie jeden Morgen 2 hochgradig passende Stellen, prüfen Ihre Eignung und generieren bis 08:20 Uhr 100% maßgeschneiderte, ATS fertige Bewerbungspakete.",
      playSim: "20 Min Simulation starten",
      pauseSim: "Simulation anhalten",
      reset: "Zurücksetzen",
      clockLabel: "Routine Uhr",
      elapsedLabel: "Vergangen",
      speedLabel: "Geschwindigkeit:",
      scrubLabel: "20 Min Routine Zeitachse",
      step1Tab: "Phase 1 · Neue Stellen finden",
      step2Tab: "Phase 2 · Eignung prüfen",
      step3Tab: "Phase 3 · Auto Generierung",
      step4Tab: "Phase 4 · Absenden & Entspannen",
      step1Badge: "Phase 1",
      step1Time: "08:00 - 08:05",
      step1Title: "Neue Stellen finden & alte überspringen",
      step1Desc: "Finden Sie 10 bis 15 neu ausgeschriebene Stellen der letzten 24 Stunden. Filtern Sie Unternehmen automatisch heraus, bei denen Sie sich bereits beworben haben.",
      step1Item1: "<strong>Schritt 1: Bewerbungshistorie prüfen</strong> — Scannen Sie Ihren Tracker (<code class=\"font-mono text-xs\">jobs/job_matches.md</code>), um bereits kontaktierte Firmen sofort auszuschließen.",
      step1Item2: "<strong>Schritt 2: 1 Klick Suchläufe</strong> — Öffnen Sie vorgefilterte Links für Google, LinkedIn, StepStone und Startups, um tagesaktuelle Vakanzen zu finden.",
      step1Tagline: "14 neue Stellen auf Google, LinkedIn & StepStone gescannt · 12 Duplikate übersprungen",
      step2Badge: "Phase 2",
      step2Time: "08:05 - 08:10",
      step2Title: "Eignung prüfen & Top 2 auswählen",
      step2Desc: "Verschwenden Sie keine Zeit mit 50 Zufallsbewerbungen. Bewerten Sie Stellen von 0 bis 10 und fokussieren Sie sich nur auf Rollen, für die Sie wirklich qualifiziert sind.",
      step2Item1: "<strong>Schritt 3: Eignung bewerten (9/10 Regel)</strong> — Gewichten Sie Muss Kriterien (70%) gegen Kann Kriterien (30%). Sortieren Sie Ausschlusskriterien (z. B. 10 Jahre Erfahrung) direkt aus.",
      step2Item2: "<strong>Schritt 4: Stellenprofil sichern & Gehalt prüfen</strong> — Sichern Sie die Stellenanzeige als Text und vergleichen Sie Marktgehälter auf Kununu oder Glassdoor.",
      step2Tagline: "Passgenauigkeit: 100% Muss Kriterien + 95% Kann Kriterien = 9.8 / 10 Score",
      step3Badge: "Phase 3",
      step3Time: "08:10 - 08:15",
      step3Title: "Lebenslauf & Anschreiben automatisch generieren",
      step3Desc: "Schluss mit stundenlanger manueller Word Formatierung. Die Automatisierung erstellt in Sekunden maßgeschneiderte, ATS konforme Bewerbungspakete.",
      step3Item1: "<strong>Schritt 5: Maßgeschneiderter ATS Lebenslauf</strong> — Erzeugt einen sauberen, ATS konformen Lebenslauf mit exakt den geforderten Projekten und Skills — ohne Layoutfehler.",
      step3Item2: "<strong>Schritt 6: DIN-5008 Anschreiben</strong> — Formuliert ein prägnantes, 1-seitiges Anschreiben (<300 Wörter), das 3 Kernprobleme des Arbeitgebers belegt löst, und exportiert als gestochen scharfes PDF.",
      step3Tagline: "Keine manuelle Word Bearbeitung: Maßgeschneiderter ATS Lebenslauf + DIN-5008 Anschreiben + High Res PDF",
      step4Badge: "Phase 4",
      step4Time: "08:15 - 08:20",
      step4Title: "Absenden, dokumentieren & fertig!",
      step4Desc: "Laden Sie Ihre PDFs direkt im Karriereportal hoch, tragen Sie das Datum im Tracker ein und genießen Sie Ihren Kaffee vor Arbeitsbeginn.",
      step4Item1: "<strong>Schritt 7: Im Bewerbungs Tracker erfassen</strong> — Vermerken Sie Firmenname, Bewerbungslink und Datum für geplante Follow ups ohne unübersichtliche Tabellen.",
      step4Item2: "<strong>Schritt 8: Laptop zuklappen & entspannen</strong> — 2 erstklassige, individuelle Bewerbungen in unter 20 Minuten versendet. Maximaler Rücklauf ohne Burnout!",
      step4Tagline: "Im Unternehmensportal hochgeladen · Im Tracking Ledger erfasst · Erledigt in 18 Minuten!"
    },

    briefs: {
      roleLabel: "Rolle",
      title: "Workflow Ergebnis Showcase",
      badge: "Produktionslauf",
      desc: "Interaktives Morning Action Brief, generiert von der täglichen Automatisierungs Engine. Zeigt verifizierte, atomare Bewerbungspakete aus verschiedenen technischen Disziplinen.",
      selectorLabel: "Bereich:",
      tabFullstack: "Fullstack (Produktionslauf)",
      tabDevops: "Cloud DevOps",
      tabDesigner: "Product Design",
      tabEngineering: "Erneuerbare Energien",
      verifiedStatus: "Verifizierter Exit Code 0 · 2/2 atomare Pakete bereit",
      result: "Ergebnis: 2 vollständige, geprüfte Bewerbungspakete generiert, validiert und als druckfertiges HTML sowie Vektor PDF exportiert.",
      pkg1Badge: "Bewerbungspaket 1",
      pkg2Badge: "Bewerbungspaket 2",
      pkg1Title: "Bewerbungspaket 1",
      pkg2Title: "Bewerbungspaket 2",
      labelRole: "Rolle:",
      labelLocation: "Standort & Arbeitsweg:",
      labelJustification: "Passungsbegründung:",
      labelKeywords: "Top ATS Keywords:",
      labelGap: "Identifizierte Lücke:",
      labelSalary: "Gehaltsnachweis:",
      labelApply: "Offizielles Bewerbungsziel:",
      labelAssets: "Generierte Bewerbungsunterlagen:",
      labelQa: "QA Gates:",
      checklistTitle: "Human in the Loop Checkliste vor dem Absenden",
      labelAvailability: "Verfügbarkeit & Kündigungsfrist:",
      labelCompensation: "Gehaltsvorstellung:",
      labelUploads: "Erforderliche Dokumenten Uploads:",
      maintenanceTitle: "Phase 8 Master Lebenslauf Pflegeprüfung:"
    },

    prompts: {
      title: "KI Prompt Bibliothek",
      badge: "Produktions Prompt Suites",
      desc: "Praxiserprobte Prompts direkt aus produktiven Karriere Workflows. Klicken Sie auf eine Karte, um den vollständigen Prompt zu kopieren.",
      showMore: "Weitere Prompts",
      copyPrompt: "Prompt kopieren",
      fastTrack: "Fast Track",
      p0Title: "Profil & Lebenslauf Onboarding",
      p0Desc: "Liest einen vorhandenen Lebenslauf (PDF/Text/LinkedIn) ein oder führt ein 7 Fragen Interview durch, um config/profile.json und STAR Stichpunkte zu generieren.",
      p0Tag: "Fast Track",
      p1Title: "DIN-5008 Anschreiben",
      p1Desc: "Generiert ein maßgeschneidertes deutsches Tech Anschreiben nach der STAR Methode, mit verifizierten Projektmetriken und DIN-5008 Konformität.",
      p2Title: "ATS Lebenslauf Anpassung",
      p2Desc: "Fügt Ziel Keywords ein, schärft Erfahrungsstichpunkte und behält strikte DOM Struktur Parität bei.",
      p3Title: "STAR Technisches Interview",
      p3Desc: "Erstellt individuelle deutsche Elevator Pitches, situative STAR Antwortgeschichten und fundierte Abschlussfragen.",
      p4Title: "Deutsche Tech Suchmatrix",
      p4Desc: "Generiert präzise boolesche Suchanfragen für StepStone, LinkedIn DE und Indeed mit regionaler und Remote Filterung.",
      p5Title: "Google Direct ATS Sourcing",
      p5Desc: "Findet versteckte Direktausschreibungen auf Personio, Greenhouse und Lever via Google Dorking — vorbei an Personalvermittlern und Agentur Spam.",
      p6Title: "Tägliche Intake & Anpassungsroutine",
      p6Desc: "Vollständige 20 Min tägliche Routine: Stellensuche, Scoring, JSON Konfiguration und automatisierter Headless PDF Export.",
      p7Title: "Suchlinks für jeden Beruf",
      p7Desc: "Generiert daily-job-search-links-[profession].md mit präzisen booleschen Abfragen, ATS Portalen und VC Portfolio Verzeichnissen.",
      p8Title: "Kanonische Rollen Extraktion",
      p8Desc: "Extrahiert standardisierte Rollenprofile (jobs/roles/[role_id].json) gemäß dem 4 Kategorien Kompetenzschema.",
      p9Title: "Gehaltsverhandlung & Gegenangebot",
      p9Desc: "Ermittelt Marktgehälter, berechnet den Gesamtwert des Vergütungspakets und verfasst souveräne Verhandlungsskripte.",
      p10Title: "LinkedIn Profil Optimierer",
      p10Desc: "Verwandelt Ihr Kandidatenprofil in eine konversionsstarke, Recruiter optimierte LinkedIn Headline, Über uns Sektion und Erfahrungs Stichpunkte.",
      promptCards: [
        {
          id: 0,
          title: "Profil & Lebenslauf Onboarding",
          desc: "Liest einen vorhandenen Lebenslauf (PDF/Text/LinkedIn) ein oder führt ein 7 Fragen Interview durch, um config/profile.json und STAR Stichpunkte zu generieren.",
          tag: "Fast Track"
        },
        {
          id: 1,
          title: "DIN-5008 Anschreiben",
          desc: "Generiert ein maßgeschneidertes deutsches Tech Anschreiben nach der STAR Methode, mit verifizierten Projektmetriken und DIN-5008 Konformität."
        },
        {
          id: 2,
          title: "ATS Lebenslauf Anpassung",
          desc: "Fügt Ziel Keywords ein, schärft Erfahrungsstichpunkte und behält strikte DOM Struktur Parität bei."
        },
        {
          id: 3,
          title: "STAR Technisches Interview",
          desc: "Erstellt individuelle deutsche Elevator Pitches, situative STAR Antwortgeschichten und fundierte Abschlussfragen."
        },
        {
          id: 4,
          title: "Deutsche Tech Suchmatrix",
          desc: "Generiert präzise boolesche Suchanfragen für StepStone, LinkedIn DE und Indeed mit regionaler und Remote Filterung."
        },
        {
          id: 5,
          title: "Google Direct ATS Sourcing",
          desc: "Findet versteckte Direktausschreibungen auf Personio, Greenhouse und Lever via Google Dorking — vorbei an Personalvermittlern und Agentur Spam."
        },
        {
          id: 6,
          title: "Tägliche Intake & Anpassungsroutine",
          desc: "Vollständige 20 Min tägliche Routine: Stellensuche, Scoring, JSON Konfiguration und automatisierter Headless PDF Export."
        },
        {
          id: 7,
          title: "Suchlinks für jeden Beruf",
          desc: "Generiert daily-job-search-links-[profession].md mit präzisen booleschen Abfragen, ATS Portalen und VC Portfolio Verzeichnissen."
        },
        {
          id: 8,
          title: "Kanonische Rollen Extraktion",
          desc: "Extrahiert standardisierte Rollenprofile (jobs/roles/[role_id].json) gemäß dem 4 Kategorien Kompetenzschema."
        },
        {
          id: 9,
          title: "Gehaltsverhandlung & Gegenangebot",
          desc: "Ermittelt Marktgehälter, berechnet den Gesamtwert des Vergütungspakets und verfasst souveräne Verhandlungsskripte."
        },
        {
          id: 10,
          title: "LinkedIn Profil Optimierer",
          desc: "Verwandelt Ihr Kandidatenprofil in eine konversionsstarke, Recruiter optimierte LinkedIn Headline, Über uns Sektion und Erfahrungs Stichpunkte."
        }
      ]
    },

    coverLetters: {
      roleLabel: "Rolle",
      title: "DIN-5008 Anschreiben Showcase",
      badge: "DIN-5008 Standardkonform",
      desc: "Produktionsreife deutsche Anschreiben nach DIN-5008 Geschäftsstandard mit STAR-Erfolgshooks, technischer Problemlösungskompetenz und automatisierter Invarianten Injektion.",
      selectorLabel: "Archetyp:",
      tabFullstack: "Fullstack Entwickler",
      tabDesigner: "Product Designer",
      tabDevops: "DevOps Engineer",
      tabEngineering: "Ingenieur Maschinenbau",
      dinNotice: "Exakte DIN-5008 Formatierung mit Absenderzeile, Anschriftenfeld, Datumszeile, hervorgehobener Betreffzeile und gegliederten Textabsätzen."
    },

    engine: {
      title: "Architektur der Python Automatisierungs Engine",
      badge: "Modulare CLI Engine · Python 3.10+",
      modulesToggle: "Architektur Module",
      desc: "Das Repository enthält eine entkoppelte Python Automatisierungs Engine (<code class=\"font-mono text-xs\">jobs/engine.py</code> und <code class=\"font-mono text-xs\">engine/*</code>). Sie automatisiert die Profilkonfiguration, kanonische Rollenkompilierung, ATS Strukturvalidierung, DIN-5008 Anschreibengenerierung und Headless Chromium Vektor PDF Kompilierung.",
      configName: "engine/config.py",
      configRole: "SSOT Loader & Invarianten Validator",
      configDesc: "Parst <code class=\"font-mono text-xs\">config/profile.json</code> (mit Fallback auf <code class=\"font-mono text-xs\">profile.example.json</code>). Validiert das Schema, löst vertragliche Invarianten auf (Gehalt, Kündigungsfrist, Portfolio Links) und fängt unzulässige Domains ab.",
      resumeName: "engine/resume.py",
      resumeRole: "Hydration Engine für maßgeschneiderte Lebensläufe",
      resumeDesc: "Befüllt <code class=\"font-mono text-xs\">resume.html</code> mit zielgerichteten Keywords und kanonischen Rollenprofilen. Garantiert 100% DOM Struktur Parität, Tag Reihenfolge und zweisprachige Attribute.",
      coverLetterName: "engine/cover_letter.py",
      coverLetterRole: "DIN-5008 Anschreiben Compiler",
      coverLetterDesc: "Erzeugt druckfertige deutsche DIN-5008 HTML Anschreiben unter 300 Wörtern. Erzwingt Anti-KI Formatierung, Burstiness Varianz (≥ 20 Wörter) und prüft 8-Wort Sequenz Überlappungen mit der Stellenausschreibung.",
      rolesName: "engine/roles.py",
      rolesRole: "Katalog kanonischer Rollen Archetypen",
      rolesDesc: "Erstellt und verwaltet geprüfte Karriere Archetypen (<code class=\"font-mono text-xs\">jobs/roles/*.json</code>). Kompiliert alle Rollenlebensläufe parallel nach <code class=\"font-mono text-xs\">jobs/roles/html/</code> und Vektor PDFs.",
      searchLinksName: "engine/search_links.py",
      searchLinksRole: "Synthese boolescher Suchanfragen",
      searchLinksDesc: "Generiert Dashboards mit täglichen Suchlinks (<code class=\"font-mono text-xs\">daily-job-search-links.md</code> und <code class=\"font-mono text-xs\">workflows/search_links/</code>) mit vorgefilterten booleschen Abfragen für LinkedIn DE, StepStone, Indeed, Techstars und HTGF.",
      pdfName: "engine/pdf.py",
      pdfRole: "Headless Chromium PDF Compiler",
      pdfDesc: "Steuert Headless Chrome/Chromium via Playwright oder Subprozess, um durchsuchbare A4 Vektor PDFs für Lebensläufe und 1-seitige DIN-5008 Anschreiben mit exaktem Drucklayout zu kompilieren.",
      commandsTitle: "Einheitliche CLI Befehlsreferenz",
      commandsDesc: "Führen Sie tägliche Automatisierungsaufgaben aus dem Repository Stammverzeichnis aus. Klicken Sie auf einen Befehl zum Kopieren.",
      copyCommand: "Befehl kopieren",
      cmd1Title: "Vollständiges Bewerbungspaket generieren",
      cmd1Desc: "Kompiliert maßgeschneiderten HTML Lebenslauf, DIN-5008 Anschreiben, validiert ATS DOM Parität und exportiert Vektor PDFs.",
      cmd2Title: "Alle kanonischen Rollen erstellen",
      cmd2Desc: "Kompiliert und validiert alle 5 vorkonfigurierten kanonischen Rollen Archetypen in eigenständige HTML und Vektor PDF Formate.",
      cmd3Title: "Tägliche Suchlinks generieren",
      cmd3Desc: "Synthetisiert aktive boolesche Suchlinks und Plattform URL Templates aus den Suchpräferenzen des Kandidatenprofils.",
      cmd4Title: "Bewerbungsskelett initialisieren",
      cmd4Desc: "Erstellt ein schlankes JSON Konfigurationsgerüst, verknüpft mit einem Ziel Rollenprofil für die heutige Bewerbung.",
      cmd5Title: "ATS DOM Struktur validieren",
      cmd5Desc: "Prüft strukturelle DOM Parität, Tag Zählung, Zeichenkodierung und stellt sicher, dass keine verbotenen Domains oder Trennstriche vorhanden sind.",
      cmd6Title: "Vektor PDFs kompilieren",
      cmd6Desc: "Startet Headless Chromium für den Export durchsuchbarer A4 Vektor PDFs mit DIN-5008 Rändern und Druckisolation.",
      commandCards: [
        {
          title: "Vollständiges Bewerbungspaket generieren",
          desc: "Kompiliert maßgeschneiderten HTML Lebenslauf, DIN-5008 Anschreiben, validiert ATS DOM Parität und exportiert Vektor PDFs.",
          code: "python jobs/engine.py run --config jobs/configs/YYYY-MM-DD_[company_slug].json"
        },
        {
          title: "Alle kanonischen Rollen erstellen",
          desc: "Kompiliert und validiert alle 5 vorkonfigurierten kanonischen Rollen Archetypen in eigenständige HTML und Vektor PDF Formate.",
          code: "python jobs/engine.py build-roles"
        },
        {
          title: "Tägliche Suchlinks generieren",
          desc: "Synthetisiert aktive boolesche Suchlinks und Plattform URL Templates aus den Suchpräferenzen des Kandidatenprofils.",
          code: "python jobs/engine.py build-links"
        },
        {
          title: "Bewerbungsskelett initialisieren",
          desc: "Erstellt ein schlankes JSON Konfigurationsgerüst, verknüpft mit einem Ziel Rollenprofil für die heutige Bewerbung.",
          code: "python jobs/engine.py init-config --slug [company_slug] --date YYYY-MM-DD --role fullstack_laravel"
        },
        {
          title: "ATS DOM Struktur validieren",
          desc: "Prüft strukturelle DOM Parität, Tag Zählung, Zeichenkodierung und stellt sicher, dass keine verbotenen Domains oder Trennstriche vorhanden sind.",
          code: "python jobs/engine.py validate-resume --file resume.html"
        },
        {
          title: "Vektor PDFs kompilieren",
          desc: "Startet Headless Chromium für den Export durchsuchbarer A4 Vektor PDFs mit DIN-5008 Rändern und Druckisolation.",
          code: "python jobs/engine.py export-pdfs --slug [company_slug]"
        }
      ]
    },

    skills: {
      title: "24 Spezialisierte Karriere Agenten Skills",
      badge: "Portable Agent Skills · skills/*",
      desc: "Modulare, interoperable Karriere Skills nach dem Portable Agent Standard. Kompatibel mit Claude Code, Antigravity und OpenAI Codex für Lebenslauf Anpassung, Marktrecherche, Anschreiben und Interview Coaching.",
      categories: {
        resumeOptimization: "Lebenslauf Optimierung",
        lettersApplications: "Anschreiben & Bewerbungen",
        careerTransitions: "Karriereübergänge",
        interviewsOffers: "Vorstellungsgespräche & Angebote",
        jobMarketIntelligence: "Arbeitsmarkt Intelligence"
      },
      resumeAtsOptimizerName: "resume-ats-optimizer",
      resumeAtsOptimizerDesc: "Optimiert Lebenslauf Stichpunkte und Abschnittslayouts für maximale ATS Keyword Dichte und Parsing Genauigkeit.",
      resumeTailorName: "resume-tailor",
      resumeTailorDesc: "Passt Lebenslauf Inhalte, Zusammenfassung und Berufserfahrung gezielt auf konkrete Stellenbeschreibungen an.",
      resumeBulletWriterName: "resume-bullet-writer",
      resumeBulletWriterDesc: "Formuliert Erfahrungsstichpunkte in prägnante, handlungsorientierte und mit Metriken belegte STAR Aufzählungspunkte um.",
      resumeQuantifierName: "resume-quantifier",
      resumeQuantifierDesc: "Identifiziert qualitative Aussagen und hilft bei der Berechnung messbarer Prozentwerte, KPIs und Geschäftsergebnisse.",
      resumeFormatterName: "resume-formatter",
      resumeFormatterDesc: "Stellt einheitliche Typografie, Datumsformate, Abstände und standardisierte deutsche oder englische Formatierungen sicher.",
      resumeSectionBuilderName: "resume-section-builder",
      resumeSectionBuilderDesc: "Erstellt neue Lebenslaufabschnitte (z. B. Nebenprojekte, Patente, Publikationen, Zertifikate) unter Wahrung der DOM Parität.",
      resumeVersionManagerName: "resume-version-manager",
      resumeVersionManagerDesc: "Verfolgt, vergleicht und verwaltet angepasste Lebenslauf Iterationen über mehrere Stellenbewerbungen hinweg.",
      techResumeOptimizerName: "tech-resume-optimizer",
      techResumeOptimizerDesc: "Spezialisierte Optimierung für Software Entwickler mit Fokus auf Cloud Architekturen, REST APIs und CI/CD Pipelines.",
      coverLetterGeneratorName: "cover-letter-generator",
      coverLetterGeneratorDesc: "Erstellt deutsche und englische DIN-5008 Anschreiben mit überzeugenden Aufhängern und festen Kandidateninvarianten.",
      applicationFormFillerName: "application-form-filler",
      applicationFormFillerDesc: "Parst komplexe Bewerbungsformulare in Portalen (Workday, Greenhouse) und liefert kopierfertige Antworten.",
      portfolioCaseStudyWriterName: "portfolio-case-study-writer",
      portfolioCaseStudyWriterDesc: "Strukturiert Software und Designprojekte in tiefgehende technische Fallstudien mit Problem, Architektur und messbarem Impact.",
      jobApplicationGeneratorName: "job-application-generator",
      jobApplicationGeneratorDesc: "Koordiniert die durchgängige Generierung vollständiger Bewerbungspakete (Lebenslauf, Anschreiben, Konfiguration, Match Note).",
      executiveResumeWriterName: "executive-resume-writer",
      executiveResumeWriterDesc: "Passt Lebensläufe für Führungskräfte, VP und Director Positionen an, mit Schwerpunkt auf GuV Verantwortung und Team Skalierung.",
      careerChangerTranslatorName: "career-changer-translator",
      careerChangerTranslatorDesc: "Übersetzt unkonventionelle Karrierewege und branchenspezifisches Fachwissen in relevante technische Kernkompetenzen.",
      academicCvBuilderName: "academic-cv-builder",
      academicCvBuilderDesc: "Formatiert akademische Lebensläufe einschließlich Forschungsgeldern, Lehrerfahrung und begutachteten Publikationen.",
      creativePortfolioResumeName: "creative-portfolio-resume",
      creativePortfolioResumeDesc: "Optimiert Portfolio Lebensläufe für Product Designer, Creative Directors und Frontend Entwickler im visuellen Bereich.",
      interviewCoachName: "interview-coach",
      interviewCoachDesc: "Simuliert verhaltensbezogene und technische Interviewfragen und bewertet Antworten anhand der Stellenanforderungen.",
      interviewPrepGeneratorName: "interview-prep-generator",
      interviewPrepGeneratorDesc: "Erstellt 5 Phasen Vorbereitungsbögen mit deutschen Elevator Pitches, STAR Geschichten und Abschlussfragen.",
      salaryNegotiationPrepName: "salary-negotiation-prep",
      salaryNegotiationPrepDesc: "Bereitet datengestützte Gehaltsverhandlungsleitfäden und Gegenangebote auf Basis deutscher Tech Benchmarks vor.",
      offerComparisonAnalyzerName: "offer-comparison-analyzer",
      offerComparisonAnalyzerDesc: "Vergleicht konkurrierende Jobangebote nach Grundgehalt, Bonus, Unternehmensanteilen, Remote Flexibilität und Zusatzleistungen.",
      dailyJobWorkflowName: "daily-job-workflow",
      dailyJobWorkflowDesc: "Steuert die tägliche Recherche-, Qualifizierungs- und Einreichungsroutine aus daily-job-search-workflow.md.",
      jobDescriptionAnalyzerName: "job-description-analyzer",
      jobDescriptionAnalyzerDesc: "Extrahiert Hard Skills, Soft Skills, Erfahrungsstufen und versteckte Anforderungen aus Stellenausschreibungen.",
      linkedinProfileOptimizerName: "linkedin-profile-optimizer",
      linkedinProfileOptimizerDesc: "Richtet LinkedIn Slogans, Infobereiche und vorgestellte Medien an den Invarianten des Master Lebenslaufs aus.",
      referenceListBuilderName: "reference-list-builder",
      referenceListBuilderDesc: "Erstellt formatierte, professionelle Referenzdossiers, die gezielt auf die Wunschposition abgestimmt sind.",
      skillCards: [
        { name: "resume-ats-optimizer", desc: "Optimiert Lebenslauf Stichpunkte und Abschnittslayouts für maximale ATS Keyword Dichte und Parsing Genauigkeit.", category: "Lebenslauf Optimierung" },
        { name: "resume-tailor", desc: "Passt Lebenslauf Inhalte, Zusammenfassung und Berufserfahrung gezielt auf konkrete Stellenbeschreibungen an.", category: "Lebenslauf Optimierung" },
        { name: "resume-bullet-writer", desc: "Formuliert Erfahrungsstichpunkte in prägnante, handlungsorientierte und mit Metriken belegte STAR Aufzählungspunkte um.", category: "Lebenslauf Optimierung" },
        { name: "resume-quantifier", desc: "Identifiziert qualitative Aussagen und hilft bei der Berechnung messbarer Prozentwerte, KPIs und Geschäftsergebnisse.", category: "Lebenslauf Optimierung" },
        { name: "resume-formatter", desc: "Stellt einheitliche Typografie, Datumsformate, Abstände und standardisierte deutsche oder englische Formatierungen sicher.", category: "Lebenslauf Optimierung" },
        { name: "resume-section-builder", desc: "Erstellt neue Lebenslaufabschnitte (z. B. Nebenprojekte, Patente, Publikationen, Zertifikate) unter Wahrung der DOM Parität.", category: "Lebenslauf Optimierung" },
        { name: "resume-version-manager", desc: "Verfolgt, vergleicht und verwaltet angepasste Lebenslauf Iterationen über mehrere Stellenbewerbungen hinweg.", category: "Lebenslauf Optimierung" },
        { name: "tech-resume-optimizer", desc: "Spezialisierte Optimierung für Software Entwickler mit Fokus auf Cloud Architekturen, REST APIs und CI/CD Pipelines.", category: "Lebenslauf Optimierung" },
        { name: "cover-letter-generator", desc: "Erstellt deutsche und englische DIN-5008 Anschreiben mit überzeugenden Aufhängern und festen Kandidateninvarianten.", category: "Anschreiben & Bewerbungen" },
        { name: "application-form-filler", desc: "Parst komplexe Bewerbungsformulare in Portalen (Workday, Greenhouse) und liefert kopierfertige Antworten.", category: "Anschreiben & Bewerbungen" },
        { name: "portfolio-case-study-writer", desc: "Strukturiert Software und Designprojekte in tiefgehende technische Fallstudien mit Problem, Architektur und messbarem Impact.", category: "Anschreiben & Bewerbungen" },
        { name: "job-application-generator", desc: "Koordiniert die durchgängige Generierung vollständiger Bewerbungspakete (Lebenslauf, Anschreiben, Konfiguration, Match Note).", category: "Anschreiben & Bewerbungen" },
        { name: "executive-resume-writer", desc: "Passt Lebensläufe für Führungskräfte, VP und Director Positionen an, mit Schwerpunkt auf GuV Verantwortung und Team Skalierung.", category: "Karriereübergänge" },
        { name: "career-changer-translator", desc: "Übersetzt unkonventionelle Karrierewege und branchenspezifisches Fachwissen in relevante technische Kernkompetenzen.", category: "Karriereübergänge" },
        { name: "academic-cv-builder", desc: "Formatiert akademische Lebensläufe einschließlich Forschungsgeldern, Lehrerfahrung und begutachteten Publikationen.", category: "Karriereübergänge" },
        { name: "creative-portfolio-resume", desc: "Optimiert Portfolio Lebensläufe für Product Designer, Creative Directors und Frontend Entwickler im visuellen Bereich.", category: "Karriereübergänge" },
        { name: "interview-coach", desc: "Simuliert verhaltensbezogene und technische Interviewfragen und bewertet Antworten anhand der Stellenanforderungen.", category: "Vorstellungsgespräche & Angebote" },
        { name: "interview-prep-generator", desc: "Erstellt 5 Phasen Vorbereitungsbögen mit deutschen Elevator Pitches, STAR Geschichten und Abschlussfragen.", category: "Vorstellungsgespräche & Angebote" },
        { name: "salary-negotiation-prep", desc: "Bereitet datengestützte Gehaltsverhandlungsleitfäden und Gegenangebote auf Basis deutscher Tech Benchmarks vor.", category: "Vorstellungsgespräche & Angebote" },
        { name: "offer-comparison-analyzer", desc: "Vergleicht konkurrierende Jobangebote nach Grundgehalt, Bonus, Unternehmensanteilen, Remote Flexibilität und Zusatzleistungen.", category: "Vorstellungsgespräche & Angebote" },
        { name: "daily-job-workflow", desc: "Steuert die tägliche Recherche-, Qualifizierungs- und Einreichungsroutine aus daily-job-search-workflow.md.", category: "Arbeitsmarkt Intelligence" },
        { name: "job-description-analyzer", desc: "Extrahiert Hard Skills, Soft Skills, Erfahrungsstufen und versteckte Anforderungen aus Stellenausschreibungen.", category: "Arbeitsmarkt Intelligence" },
        { name: "linkedin-profile-optimizer", desc: "Richtet LinkedIn Slogans, Infobereiche und vorgestellte Medien an den Invarianten des Master Lebenslaufs aus.", category: "Arbeitsmarkt Intelligence" },
        { name: "reference-list-builder", desc: "Erstellt formatierte, professionelle Referenzdossiers, die gezielt auf die Wunschposition abgestimmt sind.", category: "Arbeitsmarkt Intelligence" }
      ]
    },

    resume: {
      title: "Zweisprachiger Web Lebenslauf",
      desc: "Interaktiver einspaltiger semantischer Web Lebenslauf mit sofortiger DE/EN Umschaltung, 5 kanonischen Rollen Archetypen und Headless Chromium A4 PDF Export.",
      archetypeLabel: "Archetyp",
      archetypeSelectLabel: "Archetyp auswählen",
      fullstack: "Fullstack Engineer",
      devops: "DevOps & Cloud",
      designer: "Product Designer",
      finance: "Finanzen & Controlling",
      engineering: "Maschinenbau & Systeme",
      standaloneLink: "Eigenständiger Lebenslauf",
      toggleAts: "ATS Modus umschalten",
      printPdf: "Drucken / PDF",
      previewNotice: "Interaktive Live Vorschau synchronisiert mit dem Master Profil."
    },

    faq: {
      title: "Häufig gestellte Fragen",
      badge: "ATS & Karriere Leitfaden",
      desc: "Alles, was Sie über ATS Parser Kompatibilität, deutsche DIN-5008 Standards, Headless PDF Export und die 20-minütige tägliche Bewerbungsroutine wissen müssen.",
      q1: "Was macht diesen Web Lebenslauf ATS freundlich?",
      a1: "Anders als Exporte aus Grafikprogrammen, die Texte rastern oder mehrspaltige Layouts unlesbar machen, setzt Career Engine auf einspaltiges semantisches HTML5. Die Kompilierung erfolgt über Headless Chromium in sauberen, selektierbaren A4 Standardtext. Parser wie Personio, Workday und Greenhouse extrahieren Kontaktdaten, Berufserfahrung und Skill Tags zu 100% fehlerfrei.",
      q2: "Wie hilft DIN-5008 Konformität bei Bewerbungen im deutschen Tech Sektor?",
      a2: "DIN-5008 ist der maßgebliche Standard für den deutschen Geschäftsschriftverkehr. Die Engine formatiert Briefkopf, Seitenränder, Absender- und Empfängerblöcke, Datumsangaben und Betreffzeilen exakt nach DIN-5008. Das signalisiert deutschen Recruitern und Personalabteilungen sofort Professionalität und perfekte kulturelle Passung.",
      q3: "Wie funktioniert die Single Source of Truth (profile.json)?",
      a3: "Alle festen Kandidatendaten — Kontaktdaten, Gehaltsvorstellung, Kündigungsfrist und der zentrale Tech Stack — werden zentral in <code>config/profile.json</code> definiert. Eine Aktualisierung dieser Datei aktualisiert automatisch Ihren Web Lebenslauf, alle Rollen PDFs, DIN-5008 Anschreiben und tägliche Suchabfragen.",
      q4: "Wie funktioniert die 20-minütige tägliche Bewerbungsroutine?",
      a4: "Statt 4 Stunden ziellos auf Jobportalen zu scrollen, durchlaufen Sie eine strukturierte 4 Schritte Routine: (1) Google Direct ATS Abfragen für unveröffentlichte Vakanzen, (2) Eignungsprüfung mit strukturierten Prompts, (3) automatische Generierung eines maßgeschneiderten Lebenslaufs samt DIN-5008 Anschreiben via <code>jobs/engine.py</code> und (4) Absenden und Protokollieren vor 08:20 Uhr morgens.",
      q5: "Kann ich die Vorlage für andere Tech Rollen anpassen?",
      a5: "Ja. Das Repository enthält 5 vorkonfigurierte kanonische Rollen Archetypen: Fullstack Software Engineer, Cloud DevOps & Platform Engineer, UI/UX & Product Designer, Banking & Controlling sowie Mechanical & Energy Systems Engineering. Sie können mit einem Klick wechseln oder eigene Rollen definieren.",
      q6: "Ist dieses Tool kostenlos und quelloffen?",
      a6: "Ja. Career Engine ist 100% Open Source unter der MIT Lizenz. Es gibt keine Abonnements, keine künstlichen Exportbeschränkungen und kein Tracking. Ihr Code und Ihre Bewerbungsdaten gehören vollkommen Ihnen.",
      items: [
        {
          question: "Was macht diesen Web Lebenslauf ATS freundlich?",
          answer: "Anders als Exporte aus Grafikprogrammen, die Texte rastern oder mehrspaltige Layouts unlesbar machen, setzt Career Engine auf einspaltiges semantisches HTML5. Die Kompilierung erfolgt über Headless Chromium in sauberen, selektierbaren A4 Standardtext. Parser wie Personio, Workday und Greenhouse extrahieren Kontaktdaten, Berufserfahrung und Skill Tags zu 100% fehlerfrei."
        },
        {
          question: "Wie hilft DIN-5008 Konformität bei Bewerbungen im deutschen Tech Sektor?",
          answer: "DIN-5008 ist der maßgebliche Standard für den deutschen Geschäftsschriftverkehr. Die Engine formatiert Briefkopf, Seitenränder, Absender- und Empfängerblöcke, Datumsangaben und Betreffzeilen exakt nach DIN-5008. Das signalisiert deutschen Recruitern und Personalabteilungen sofort Professionalität und perfekte kulturelle Passung."
        },
        {
          question: "Wie funktioniert die Single Source of Truth (profile.json)?",
          answer: "Alle festen Kandidatendaten — Kontaktdaten, Gehaltsvorstellung, Kündigungsfrist und der zentrale Tech Stack — werden zentral in config/profile.json definiert. Eine Aktualisierung dieser Datei aktualisiert automatisch Ihren Web Lebenslauf, alle Rollen PDFs, DIN-5008 Anschreiben und tägliche Suchabfragen."
        },
        {
          question: "Wie funktioniert die 20-minütige tägliche Bewerbungsroutine?",
          answer: "Statt 4 Stunden ziellos auf Jobportalen zu scrollen, durchlaufen Sie eine strukturierte 4 Schritte Routine: (1) Google Direct ATS Abfragen für unveröffentlichte Vakanzen, (2) Eignungsprüfung mit strukturierten Prompts, (3) automatische Generierung eines maßgeschneiderten Lebenslaufs samt DIN-5008 Anschreiben via jobs/engine.py und (4) Absenden und Protokollieren vor 08:20 Uhr morgens."
        },
        {
          question: "Kann ich die Vorlage für andere Tech Rollen anpassen?",
          answer: "Ja. Das Repository enthält 5 vorkonfigurierte kanonische Rollen Archetypen: Fullstack Software Engineer, Cloud DevOps & Platform Engineer, UI/UX & Product Designer, Banking & Controlling sowie Mechanical & Energy Systems Engineering. Sie können mit einem Klick wechseln oder eigene Rollen definieren."
        },
        {
          question: "Ist dieses Tool kostenlos und quelloffen?",
          answer: "Ja. Career Engine ist 100% Open Source unter der MIT Lizenz. Es gibt keine Abonnements, keine künstlichen Exportbeschränkungen und kein Tracking. Ihr Code und Ihre Bewerbungsdaten gehören vollkommen Ihnen."
        }
      ]
    },

    download: {
      title: "Starten Sie mit Career Engine",
      desc: "Laden Sie das komplette eigenständige Open Source Kit herunter — inklusive Master Lebenslauf Vorlage, Profilkonfigurationen, aller 5 KI Prompts, 24 Agenten Skills und der Python Automatisierungs Engine.",
      cta: "Starter Kit herunterladen (ZIP)",
      bullet1: "1. Klonen / Entpacken",
      bullet2: "2. config/profile.json anpassen",
      bullet3: "3. python jobs/engine.py ausführen",
      bullets: [
        "1. Klonen / Entpacken",
        "2. config/profile.json anpassen",
        "3. python jobs/engine.py ausführen"
      ]
    },

    connect: {
      title: "Vernetzen & Zusammenarbeiten",
      desc: "Sie suchen professionelle Unterstützung oder eine Zusammenarbeit rund um Career Engine? Buchen Sie ein Gespräch oder melden Sie sich über einen der folgenden Kanäle.",
      btnCall: "Kennenlerngespräch buchen",
      btnServices: "Leistungen",
      btnEmail: "E-Mail",
      btnLinkedin: "LinkedIn",
      btnGithub: "GitHub",
      btnPortfolio: "Live Portfolio",
      btnLinksHub: "Links Hub"
    },

    footer: {
      brand: "Masri Systems",
      brandDesc: "Career Engine (MIT Lizenz)",
      copyright: "Masri Systems · Career Engine (MIT Lizenz)",
      github: "GitHub",
      portfolio: "Portfolio",
      masterResume: "Master Lebenslauf",
      prompts: "Prompts",
      skills: "Skills",
      faq: "FAQ",
      download: "Download",
      imprint: "Impressum",
      privacy: "Datenschutz",
      links: {
        github: "GitHub",
        portfolio: "Portfolio",
        masterResume: "Master Lebenslauf",
        prompts: "Prompts",
        skills: "Skills",
        faq: "FAQ",
        download: "Download",
        imprint: "Impressum",
        privacy: "Datenschutz"
      }
    },

    ui: {
      copied: "Kopiert!",
      copyPrompt: "Prompt kopieren",
      copyCommand: "Befehl kopieren",
      promptCopiedToast: "Prompt in die Zwischenablage kopiert!",
      commandCopiedToast: "Befehl in die Zwischenablage kopiert!",
      linkCopiedToast: "Link in die Zwischenablage kopiert!",
      pressToCopy: "Drücken Sie Strg+C zum Kopieren",
      copyFailed: "Kopieren fehlgeschlagen",
      atsActiveToast: "ATS Nur Text Vorschau aktiv",
      atsStandardToast: "Standard Layout aktiv",
      switchPreviewToast: "Vorschau gewechselt zu {name} ({key})",
      briefLoadedToast: "Ergebnisse geladen: {key}",
      coverLetterLoadedToast: "Anschreiben geladen: {key}",
      selectLanguage: "Sprache auswählen",
      selectRole: "Rolle auswählen",
      selectArchetype: "Archetyp auswählen",
      selectBrief: "Brief auswählen"
    }
  };
}));

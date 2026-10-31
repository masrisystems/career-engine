/**
 * Career Engine Authoritative English Translation Dictionary (Source of Truth)
 * Zero external dependencies. Zero emojis.
 * Spaced compound technical terms enforced (e.g. REST APIs, CI/CD Pipelines, MCP Tools, Fullstack Engineer).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CAREER_I18N = root.CAREER_I18N || {};
    root.CAREER_I18N.en = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return {
    meta: {
      code: "en",
      label: "English",
      dir: "ltr",
      pageTitle: "Career Engine | Masri Systems",
      description: "Career Engine — Open-source ATS-optimized web resume template, AI prompt library for cover letters & tailoring, 24 career agent skills, and headless PDF automation.",
      ogTitle: "Career Engine | Masri Systems",
      ogDescription: "Open-source ATS-optimized web resume template, daily job search workflow, AI prompt library for cover letters & tailoring, and headless PDF automation."
    },

    nav: {
      brandTitle: "Career Engine",
      openSource: "Open Source",
      tag: "Open Source",
      guide: "Guide",
      toolkit: "Toolkit",
      getStarted: "Get Started",
      dailyRoutine: "Daily Routine",
      results: "Results",
      aiPrompts: "AI Prompts",
      coverLetters: "Cover Letters",
      cliEngine: "CLI Engine",
      skills: "Skills",
      webResume: "Web Resume",
      faq: "FAQ",
      toggleTheme: "Toggle Theme",
      light: "Light",
      dark: "Dark",
      portfolio: "Portfolio",
      downloadKit: "Download Kit",
      menuLabel: "Toggle Navigation Menu"
    },

    hero: {
      headline: "The Open-Source ATS Web Resume & Career Automation Engine",
      subhead: "A unified career toolkit for tech professionals. Features an interactive DIN-5008 resume template, production-grade LLM prompts for cover letters and tailoring, 24 specialized career agent skills, and headless PDF automation.",
      trustBadgePill: "Recruiter & Consultant Approved",
      trustBadgeText: "Audited, tested, and approved by senior tech recruiters and career consultants across Germany & the EU for 100% ATS parser compatibility and DIN-5008 compliance.",
      ctaSetup: "Get Started in 4 Steps",
      ctaPrompts: "Explore AI Prompts",
      ctaResume: "Preview Web Resume",
      github: "GitHub"
    },

    coral: {
      title: "Production-Grade Career Engineering",
      desc: "Vetted and approved by senior tech recruiters and career consultants to bridge the gap between ATS parsers, recruiter evaluation, and modern AI automation. Combines clean semantic HTML with 7 battle-tested prompt suites, automated Python headless Chromium compilation, and daily intake pipelines.",
      cta: "Download Starter Kit (ZIP)"
    },

    setup: {
      title: "Get Started in 4 Steps",
      badge: "About 30 Minutes · Once",
      desc1: "From download to an automatic morning run. You need Python 3.10+ (no extra packages), Chrome or Edge for PDF export, and an AI coding agent for steps 3 and 4. The examples use <a href=\"https://claude.com/claude-code\" target=\"_blank\" rel=\"noopener noreferrer\">Claude Code</a>; Codex CLI and Gemini CLI read the same <code class=\"font-mono text-xs\">AGENTS.md</code> and work the same way.",
      desc2: "On macOS and Linux, type <code class=\"font-mono text-xs\">python3</code> wherever the commands say <code class=\"font-mono text-xs\">python</code>.",
      step1Title: "Install",
      step1Desc: "Clone the repository (or <a href=\"./download/career-engine-starter.zip\" download>download the ZIP</a> and unzip it), then build the example resumes to check that Python and the PDF export work. You should get PDFs in <code class=\"font-mono text-xs\">jobs/roles/pdf/</code>.",
      step1CardClone: "Clone and test the engine",
      step1CardDocker: "Optional: only preview the web pages",
      step1CardDockerDesc: "Serves this page and the web resume at http://localhost with Docker. Port 80 taken? Prefix with PORT=8080.",
      step2Title: "Create your profile with AI",
      step2Desc: "Everything the engine writes (resume, cover letters, search links) comes from one file: <code class=\"font-mono text-xs\">config/profile.json</code>. Let an AI fill it for you:",
      step2Item1: "Copy the <a href=\"#prompts\">Profile &amp; Resume Onboarding prompt</a> into ChatGPT, Claude or Gemini.",
      step2Item2: "Paste your old CV or LinkedIn text after it, or type <em>Interview me</em> to answer 7 short questions instead.",
      step2Item3: "Save the JSON it returns as <code class=\"font-mono text-xs\">config/profile.json</code>, replacing the example.",
      step2Item4: "Rebuild with your data and open the results: your resume PDFs in <code class=\"font-mono text-xs\">jobs/roles/pdf/</code> and your job board links in <code class=\"font-mono text-xs\">daily-job-search-links.md</code>.",
      step2Card: "Build from your profile",
      step3Title: "Do your first daily run with your AI agent",
      step3Desc: "Open a terminal in the <code class=\"font-mono text-xs\">career-engine</code> folder, start your agent (<code class=\"font-mono text-xs\">claude</code>, <code class=\"font-mono text-xs\">codex</code> or <code class=\"font-mono text-xs\">gemini</code>) and paste the instruction below. The agent searches for jobs, scores them, writes a tailored resume and DIN-5008 cover letter for the best matches with <code class=\"font-mono text-xs\">jobs/engine.py</code>, logs them in <code class=\"font-mono text-xs\">jobs/job_matches.md</code> and ends with a Morning Action Brief like the <a href=\"#brief-showcase\">example below</a>. Watch this first run and approve its steps, so you know what the scheduled run will do.",
      step3Card: "Paste into your agent",
      step3After: "Read the packages in <code class=\"font-mono text-xs\">jobs/resumes/</code> and <code class=\"font-mono text-xs\">jobs/cover_letters/</code>, fix anything that is wrong, and send the application yourself. The agent never applies on your behalf.",
      step4Title: "Schedule it every weekday morning",
      step4Desc: "<code class=\"font-mono text-xs\">scripts/daily-run.ps1</code> (Windows) and <code class=\"font-mono text-xs\">scripts/daily-run.sh</code> (macOS, Linux) run the same instruction through Claude Code without a chat window. The agent may only read and edit files in the project, search the web and run <code class=\"font-mono text-xs\">jobs/engine.py</code>. Each run writes a log to <code class=\"font-mono text-xs\">jobs/logs/</code>. Schedule the script for 07:30, then spend your 20 minutes reviewing the packages instead of searching. Replace the example path with your own folder. Your computer needs to be on at that time.",
      step4Win: "Windows (Task Scheduler)",
      step4WinDesc: "Run once in a terminal. Remove it again with: schtasks /Delete /TN CareerEngineDaily",
      step4Cron: "macOS / Linux (cron)",
      step4CronDesc: "Run crontab -e and add this line. Remove the line to stop.",
      step4Cloud: "Cloud (Claude Code routine)",
      step4CloudDesc: "Runs even when your computer is off. Push your copy to a private GitHub repository (it contains your profile), then type this in Claude Code and give it the step 3 instruction and a weekday 07:30 schedule.",
      copyCommand: "Copy Command",
      copyCommands: "Copy Commands",
      copyInstruction: "Copy Instruction",
      copyLine: "Copy Line"
    },

    workflow: {
      title: "Daily Job Discovery & Application Routine",
      badge: "SOP · 20-Min Daily Habit",
      desc: "A simple, 20-minute daily habit designed for fresh graduates and busy professionals. Instead of spending 4 hours scrolling job boards and sending 50 generic resumes that get ignored, you find 2 high-matching vacancies every morning, verify you can actually do the job, and generate 100% tailored, ATS-ready application packages before 08:20 AM.",
      playSim: "Play 20-Min Simulation",
      pauseSim: "Pause Simulation",
      reset: "Reset",
      clockLabel: "Routine Clock",
      elapsedLabel: "Elapsed",
      speedLabel: "Speed:",
      scrubLabel: "20-Minute Routine Timeline",
      step1Tab: "Stage 1 · Spot Fresh Jobs",
      step2Tab: "Stage 2 · Check Your Fit",
      step3Tab: "Stage 3 · Auto Generation",
      step4Tab: "Stage 4 · Submit & Relax",
      step1Badge: "Stage 1",
      step1Time: "08:00 - 08:05",
      step1Title: "Spot Fresh Jobs & Skip Old Ones",
      step1Desc: "Find 10–15 newly posted openings from the last 24 hours. Automatically filter out companies you already applied to so you never send duplicates.",
      step1Item1: "<strong>Step 1: Check Application History</strong> — Scan your simple tracker (<code>jobs/job_matches.md</code>) to instantly eliminate any company or role you already applied to.",
      step1Item2: "<strong>Step 2: 1-Click Search Sweeps</strong> — Open pre-filtered Google, LinkedIn, StepStone, and startup links to uncover active vacancies posted today.",
      step1Tagline: "Scanned 14 newly posted openings across Google, LinkedIn & StepStone · 12 duplicates skipped",
      step2Badge: "Stage 2",
      step2Time: "08:05 - 08:10",
      step2Title: "Check Your Fit & Pick The Top 2",
      step2Desc: "Don't waste time spraying 50 random applications. Grade vacancies from 0 to 10 and only focus on roles you are actually qualified to win.",
      step2Item1: "<strong>Step 3: Grade Your Fit (9/10 Rule)</strong> — Score required skills (70%) vs nice-to-haves (30%). Disqualify jobs with impossible dealbreakers (e.g. 10 years experience).",
      step2Item2: "<strong>Step 4: Save Job Details & Check Pay</strong> — Save the full job description text before it expires, and check typical salaries on Kununu or Glassdoor to verify fair compensation.",
      step2Tagline: "Graded fit: 100% Required Skills Match + 95% Preferred Match = 9.8 / 10 Score",
      step3Badge: "Stage 3",
      step3Time: "08:10 - 08:15",
      step3Title: "Auto-Generate Resume & Cover Letter",
      step3Desc: "Stop spending 3 hours manually editing Word files. Let automation create custom, ATS-friendly application packages in seconds.",
      step3Item1: "<strong>Step 5: Tailored ATS Resume</strong> — Generates a clean, ATS-compliant resume highlighting the exact projects and skills the employer asked for — zero formatting bugs.",
      step3Item2: "<strong>Step 6: DIN-5008 German Cover Letter</strong> — Writes a punchy, 1-page cover letter (<300 words) solving 3 key employer problems with real proof, then exports to crisp PDF.",
      step3Tagline: "Zero manual Word editing: Tailored ATS Resume + DIN-5008 Cover Letter + High-Res PDF",
      step4Badge: "Stage 4",
      step4Time: "08:15 - 08:20",
      step4Title: "Submit, Record It & You're Done!",
      step4Desc: "Upload your PDFs directly to the employer's official website, log the date in your tracker, and finish before morning coffee.",
      step4Item1: "<strong>Step 7: Log in Application Tracker</strong> — Add the company name, apply link, and date so you always know when to follow up and avoid messy spreadsheets.",
      step4Item2: "<strong>Step 8: Close Your Laptop & Relax</strong> — 2 top-tier, custom applications dispatched in under 20 minutes. Zero burnout, maximum interview callbacks!",
      step4Tagline: "Uploaded to company portal · Logged in tracking ledger · Done in 18 minutes!"
    },

    briefs: {
      title: "Workflow Results Showcase",
      badge: "Production Run",
      desc: "Interactive Morning Action Brief generated by the daily automation engine. Demonstrates verified atomic application packages across diverse technical disciplines.",
      selectorLabel: "Domain:",
      tabFullstack: "Fullstack (Production Run)",
      tabDevops: "Cloud DevOps",
      tabDesigner: "Product Design",
      tabEngineering: "Renewable Energy",
      verifiedStatus: "Verified Exit Code 0 · 2/2 Atomic Packages Ready",
      result: "Result: 2 complete, fully verified application packages generated, validated, and exported to print-ready HTML and high-fidelity PDF.",
      pkg1Badge: "Application Package 1",
      pkg2Badge: "Application Package 2",
      pkg1Title: "Application Package 1",
      pkg2Title: "Application Package 2",
      labelRole: "Role:",
      labelLocation: "Location & Commute:",
      labelJustification: "Match Justification:",
      labelKeywords: "Top ATS Keywords:",
      labelGap: "Identified Gap:",
      labelSalary: "Salary Evidence:",
      labelApply: "Official Apply Target:",
      labelAssets: "Generated Application Assets:",
      labelQa: "QA Gates:",
      checklistTitle: "Human-in-the-Loop Pre-Submission Checklist",
      labelAvailability: "Availability & Kündigungsfrist:",
      labelCompensation: "Target Compensation:",
      labelUploads: "Required Document Uploads:",
      maintenanceTitle: "Stage 8 Master Resume Maintenance Review:"
    },

    prompts: {
      title: "AI Prompt Library",
      badge: "Production Prompt Suites",
      desc: "Battle-tested prompts sourced directly from production career workflows. Click any card to copy the full prompt payload.",
      copyPrompt: "Copy Prompt",
      fastTrack: "Fast Track",
      p0Title: "Profile & Resume Onboarding",
      p0Desc: "Ingests an existing resume (PDF/text/LinkedIn) or runs a guided 7-question interview to generate config/profile.json and tailored STAR bullets.",
      p0Tag: "Fast Track",
      p1Title: "DIN-5008 Cover Letter",
      p1Desc: "Generates a tailored German tech cover letter using the STAR method, verified project metrics, and DIN-5008 compliance.",
      p2Title: "ATS Resume Tailoring",
      p2Desc: "Injects target job keywords, sharpens experience bullet points, and maintains strict DOM structure parity.",
      p3Title: "STAR Technical Interview",
      p3Desc: "Produces tailored German elevator pitches, situational STAR response stories, and insightful closing questions.",
      p4Title: "German Tech Search Matrix",
      p4Desc: "Generates precision Boolean search queries for StepStone, LinkedIn DE, and Indeed with regional and remote filtering.",
      p5Title: "Google Direct ATS Sourcing",
      p5Desc: "Finds hidden, direct company openings on Personio, Greenhouse, and Lever via Google Dorking — bypassing middlemen and agency spam.",
      p6Title: "Daily Intake & Tailoring",
      p6Desc: "End-to-end 20-minute daily intake routine: role discovery, scoring, JSON configuration, and automated headless PDF export.",
      p7Title: "Search Links for Any Profession",
      p7Desc: "Generates daily-job-search-links-[profession].md with precision Boolean queries, ATS portals, and VC portfolio directories.",
      p8Title: "Canonical Role Extraction",
      p8Desc: "Extracts standardized canonical role profiles (jobs/roles/[role_id].json) adhering to the 4-category competencies schema.",
      p9Title: "Salary Negotiation & Counter-Offer",
      p9Desc: "Benchmarks market compensation, calculates total package value, and writes confident counter-offer negotiation scripts.",
      p10Title: "LinkedIn Profile Optimizer",
      p10Desc: "Transforms your candidate profile into a high-converting, recruiter-optimized LinkedIn headline, About section, and experience bullets.",
      promptCards: [
        {
          id: 0,
          title: "Profile & Resume Onboarding",
          desc: "Ingests an existing resume (PDF/text/LinkedIn) or runs a guided 7-question interview to generate config/profile.json and tailored STAR bullets.",
          tag: "Fast Track"
        },
        {
          id: 1,
          title: "DIN-5008 Cover Letter",
          desc: "Generates a tailored German tech cover letter using the STAR method, verified project metrics, and DIN-5008 compliance."
        },
        {
          id: 2,
          title: "ATS Resume Tailoring",
          desc: "Injects target job keywords, sharpens experience bullet points, and maintains strict DOM structure parity."
        },
        {
          id: 3,
          title: "STAR Technical Interview",
          desc: "Produces tailored German elevator pitches, situational STAR response stories, and insightful closing questions."
        },
        {
          id: 4,
          title: "German Tech Search Matrix",
          desc: "Generates precision Boolean search queries for StepStone, LinkedIn DE, and Indeed with regional and remote filtering."
        },
        {
          id: 5,
          title: "Google Direct ATS Sourcing",
          desc: "Finds hidden, direct company openings on Personio, Greenhouse, and Lever via Google Dorking — bypassing middlemen and agency spam."
        },
        {
          id: 6,
          title: "Daily Intake & Tailoring",
          desc: "End-to-end 20-minute daily intake routine: role discovery, scoring, JSON configuration, and automated headless PDF export."
        },
        {
          id: 7,
          title: "Search Links for Any Profession",
          desc: "Generates daily-job-search-links-[profession].md with precision Boolean queries, ATS portals, and VC portfolio directories."
        },
        {
          id: 8,
          title: "Canonical Role Extraction",
          desc: "Extracts standardized canonical role profiles (jobs/roles/[role_id].json) adhering to the 4-category competencies schema."
        },
        {
          id: 9,
          title: "Salary Negotiation & Counter-Offer",
          desc: "Benchmarks market compensation, calculates total package value, and writes confident counter-offer negotiation scripts."
        },
        {
          id: 10,
          title: "LinkedIn Profile Optimizer",
          desc: "Transforms your candidate profile into a high-converting, recruiter-optimized LinkedIn headline, About section, and experience bullets."
        }
      ]
    },

    coverLetters: {
      title: "DIN-5008 German Cover Letter Showcase",
      badge: "Recruiter & Consultant Approved",
      desc: "Production-grade German cover letters audited and approved by senior recruiters and HR consultants. Formatted in accordance with DIN-5008, featuring STAR achievement hooks, technical problem solving, and automated contractual invariants injection.",
      selectorLabel: "Archetype:",
      tabFullstack: "Fullstack Developer",
      tabDesigner: "Product Designer",
      tabDevops: "DevOps Engineer",
      tabEngineering: "Mechanical Engineer",
      dinNotice: "Exact DIN-5008 standard formatting with sender header, address field, date line, bold subject line, and structured body paragraphs."
    },

    engine: {
      title: "Python Automation Engine Architecture",
      badge: "Modular CLI Engine · Python 3.10+",
      desc: "The repository includes a decoupled Python automation engine (<code>jobs/engine.py</code> and <code>engine/*</code>). It automates candidate config hydration, canonical role compilation, ATS structural validation, DIN-5008 cover letter rendering, and headless Chromium vector PDF compilation.",
      configName: "engine/config.py",
      configRole: "SSOT Loader & Invariant Validator",
      configDesc: "Parses <code>config/profile.json</code> (with fallback to <code>profile.example.json</code>). Validates schema, resolves candidate contractual invariants (salary, notice period, portfolio links), and catches prohibited domains.",
      resumeName: "engine/resume.py",
      resumeRole: "Tailored Resume Hydration Engine",
      resumeDesc: "Hydrates <code>resume.html</code> with targeted keywords and canonical role profiles. Strictly enforces 100% DOM structure parity, tag sequencing, and bilingual attribute preservation.",
      coverLetterName: "engine/cover_letter.py",
      coverLetterRole: "DIN-5008 Cover Letter Compiler",
      coverLetterDesc: "Generates print-ready German DIN-5008 HTML cover letters under 300 words. Enforces anti-AI formatting, burstiness variance (≥ 20 words), and runs 8-word sequence overlap checks against raw job postings.",
      rolesName: "engine/roles.py",
      rolesRole: "Canonical Role Archetypes Catalog",
      rolesDesc: "Builds and manages pre-validated career archetypes (<code>jobs/roles/*.json</code>). Compiles all role resumes simultaneously to <code>jobs/roles/html/</code> and vector PDFs.",
      searchLinksName: "engine/search_links.py",
      searchLinksRole: "Boolean Search Query Synthesizer",
      searchLinksDesc: "Generates daily job search link dashboards (<code>daily-job-search-links.md</code> and <code>workflows/search_links/</code>) with pre-filtered Boolean queries across LinkedIn DE, StepStone, Indeed, Techstars, and HTGF.",
      pdfName: "engine/pdf.py",
      pdfRole: "Headless Chromium PDF Compiler",
      pdfDesc: "Drives headless Chrome/Chromium via Playwright or subprocess to compile selectable vector A4 PDFs for both resumes and 1-page DIN-5008 cover letters with exact print layout.",
      commandsTitle: "Unified CLI Command Reference",
      commandsDesc: "Execute daily automation tasks from the repository root. Click any command to copy.",
      copyCommand: "Copy Command",
      cmd1Title: "Run Full Application Package",
      cmd1Desc: "Compiles tailored HTML resume, DIN-5008 cover letter, validates ATS DOM parity, and exports high-fidelity PDFs.",
      cmd2Title: "Build All Canonical Roles",
      cmd2Desc: "Compiles and validates all 5 pre-configured canonical role archetypes into standalone HTML and vector PDF formats.",
      cmd3Title: "Render Daily Search Links",
      cmd3Desc: "Synthesizes active Boolean search links and platform URL templates from candidate profile search preferences.",
      cmd4Title: "Initialize Application Skeleton",
      cmd4Desc: "Creates a lean JSON configuration scaffold mapped to a target canonical role profile for today's application.",
      cmd5Title: "Validate ATS DOM Structure",
      cmd5Desc: "Validates structural DOM parity, tag counts, character encoding, and ensures zero prohibited domains or hyphens.",
      cmd6Title: "Compile High-Fidelity PDFs",
      cmd6Desc: "Invokes headless Chromium to export selectable vector A4 PDFs with DIN-5008 margins and print isolation.",
      commandCards: [
        {
          title: "Run Full Application Package",
          desc: "Compiles tailored HTML resume, DIN-5008 cover letter, validates ATS DOM parity, and exports high-fidelity PDFs.",
          code: "python jobs/engine.py run --config jobs/configs/YYYY-MM-DD_[company_slug].json"
        },
        {
          title: "Build All Canonical Roles",
          desc: "Compiles and validates all 5 pre-configured canonical role archetypes into standalone HTML and vector PDF formats.",
          code: "python jobs/engine.py build-roles"
        },
        {
          title: "Render Daily Search Links",
          desc: "Synthesizes active Boolean search links and platform URL templates from candidate profile search preferences.",
          code: "python jobs/engine.py build-links"
        },
        {
          title: "Initialize Application Skeleton",
          desc: "Creates a lean JSON configuration scaffold mapped to a target canonical role profile for today's application.",
          code: "python jobs/engine.py init-config --slug [company_slug] --date YYYY-MM-DD --role fullstack_laravel"
        },
        {
          title: "Validate ATS DOM Structure",
          desc: "Validates structural DOM parity, tag counts, character encoding, and ensures zero prohibited domains or hyphens.",
          code: "python jobs/engine.py validate-resume --file resume.html"
        },
        {
          title: "Compile High-Fidelity PDFs",
          desc: "Invokes headless Chromium to export selectable vector A4 PDFs with DIN-5008 margins and print isolation.",
          code: "python jobs/engine.py export-pdfs --slug [company_slug]"
        }
      ]
    },

    skills: {
      title: "24 Specialized Career Agent Skills",
      badge: "Portable Agent Skills · skills/*",
      desc: "Modular, interoperable career skills adhering to the portable agent standard. Compatible with Claude Code, Antigravity, and OpenAI Codex across resume tailoring, market research, cover letters, and interview coaching.",
      categories: {
        resumeOptimization: "Resume Optimization",
        lettersApplications: "Letters & Applications",
        careerTransitions: "Career Transitions",
        interviewsOffers: "Interviews & Offers",
        jobMarketIntelligence: "Job Market Intelligence"
      },
      resumeAtsOptimizerName: "resume-ats-optimizer",
      resumeAtsOptimizerDesc: "Optimizes resume bullet points and section layouts for high ATS keyword density and parsing accuracy.",
      resumeTailorName: "resume-tailor",
      resumeTailorDesc: "Tailors resume content, summary, and experience to match specific job descriptions.",
      resumeBulletWriterName: "resume-bullet-writer",
      resumeBulletWriterDesc: "Rewrites job experience items into punchy, action-oriented, and metric-backed STAR bullet points.",
      resumeQuantifierName: "resume-quantifier",
      resumeQuantifierDesc: "Identifies qualitative bullet points and helps calculate measurable percentages, KPIs, and outcomes.",
      resumeFormatterName: "resume-formatter",
      resumeFormatterDesc: "Enforces consistent typography, dates, spacing, and standard German or English date formatting.",
      resumeSectionBuilderName: "resume-section-builder",
      resumeSectionBuilderDesc: "Scaffolds new resume sections (e.g. side projects, patents, publications, certifications) with DOM parity.",
      resumeVersionManagerName: "resume-version-manager",
      resumeVersionManagerDesc: "Tracks, diffs, and manages tailored resume iterations across multiple job applications.",
      techResumeOptimizerName: "tech-resume-optimizer",
      techResumeOptimizerDesc: "Specialized optimization for software engineers, emphasizing cloud architectures, REST APIs, and pipelines.",
      coverLetterGeneratorName: "cover-letter-generator",
      coverLetterGeneratorDesc: "Drafts DIN-5008 German and English cover letters with compelling hooks and candidate invariants.",
      applicationFormFillerName: "application-form-filler",
      applicationFormFillerDesc: "Parses complex portal application forms (Workday, Greenhouse) and prepares copy-ready answers.",
      portfolioCaseStudyWriterName: "portfolio-case-study-writer",
      portfolioCaseStudyWriterDesc: "Structures software and design projects into deep technical case studies with problem, architecture, and impact.",
      jobApplicationGeneratorName: "job-application-generator",
      jobApplicationGeneratorDesc: "Coordinates end-to-end generation of complete application bundles (Resume, Letter, Config, Match Note).",
      executiveResumeWriterName: "executive-resume-writer",
      executiveResumeWriterDesc: "Tailors resumes for leadership, VP, and Director roles focusing on P&L ownership and team scale.",
      careerChangerTranslatorName: "career-changer-translator",
      careerChangerTranslatorDesc: "Translates non-traditional career paths and domain expertise into relevant engineering competencies.",
      academicCvBuilderName: "academic-cv-builder",
      academicCvBuilderDesc: "Formats academic curricula vitae including research grants, teaching experience, and peer-reviewed papers.",
      creativePortfolioResumeName: "creative-portfolio-resume",
      creativePortfolioResumeDesc: "Optimizes portfolio resumes for product designers, creative directors, and frontend visual developers.",
      interviewCoachName: "interview-coach",
      interviewCoachDesc: "Simulates behavioral and technical interview questions, grading responses against job requirements.",
      interviewPrepGeneratorName: "interview-prep-generator",
      interviewPrepGeneratorDesc: "Generates 5-phase interview cheat sheets with German elevator pitches, STAR stories, and closing questions.",
      salaryNegotiationPrepName: "salary-negotiation-prep",
      salaryNegotiationPrepDesc: "Prepares data-driven salary negotiation talk tracks and counter-offers based on German tech benchmarks.",
      offerComparisonAnalyzerName: "offer-comparison-analyzer",
      offerComparisonAnalyzerDesc: "Compares competing job offers across base salary, bonus, equity, remote flexibility, and benefits.",
      dailyJobWorkflowName: "daily-job-workflow",
      dailyJobWorkflowDesc: "Drives the daily discovery, qualification, and submission routine from daily-job-search-workflow.md.",
      jobDescriptionAnalyzerName: "job-description-analyzer",
      jobDescriptionAnalyzerDesc: "Extracts hard skills, soft skills, seniority levels, and hidden requirements from raw job postings.",
      linkedinProfileOptimizerName: "linkedin-profile-optimizer",
      linkedinProfileOptimizerDesc: "Aligns LinkedIn headlines, About sections, and featured media with the master resume invariants.",
      referenceListBuilderName: "reference-list-builder",
      referenceListBuilderDesc: "Generates formatted, professional professional reference dossiers tailored to target positions.",
      skillCards: [
        { name: "resume-ats-optimizer", desc: "Optimizes resume bullet points and section layouts for high ATS keyword density and parsing accuracy.", category: "Resume Optimization" },
        { name: "resume-tailor", desc: "Tailors resume content, summary, and experience to match specific job descriptions.", category: "Resume Optimization" },
        { name: "resume-bullet-writer", desc: "Rewrites job experience items into punchy, action-oriented, and metric-backed STAR bullet points.", category: "Resume Optimization" },
        { name: "resume-quantifier", desc: "Identifies qualitative bullet points and helps calculate measurable percentages, KPIs, and outcomes.", category: "Resume Optimization" },
        { name: "resume-formatter", desc: "Enforces consistent typography, dates, spacing, and standard German or English date formatting.", category: "Resume Optimization" },
        { name: "resume-section-builder", desc: "Scaffolds new resume sections (e.g. side projects, patents, publications, certifications) with DOM parity.", category: "Resume Optimization" },
        { name: "resume-version-manager", desc: "Tracks, diffs, and manages tailored resume iterations across multiple job applications.", category: "Resume Optimization" },
        { name: "tech-resume-optimizer", desc: "Specialized optimization for software engineers, emphasizing cloud architectures, REST APIs, and pipelines.", category: "Resume Optimization" },
        { name: "cover-letter-generator", desc: "Drafts DIN-5008 German and English cover letters with compelling hooks and candidate invariants.", category: "Letters & Applications" },
        { name: "application-form-filler", desc: "Parses complex portal application forms (Workday, Greenhouse) and prepares copy-ready answers.", category: "Letters & Applications" },
        { name: "portfolio-case-study-writer", desc: "Structures software and design projects into deep technical case studies with problem, architecture, and impact.", category: "Letters & Applications" },
        { name: "job-application-generator", desc: "Coordinates end-to-end generation of complete application bundles (Resume, Letter, Config, Match Note).", category: "Letters & Applications" },
        { name: "executive-resume-writer", desc: "Tailors resumes for leadership, VP, and Director roles focusing on P&L ownership and team scale.", category: "Career Transitions" },
        { name: "career-changer-translator", desc: "Translates non-traditional career paths and domain expertise into relevant engineering competencies.", category: "Career Transitions" },
        { name: "academic-cv-builder", desc: "Formats academic curricula vitae including research grants, teaching experience, and peer-reviewed papers.", category: "Career Transitions" },
        { name: "creative-portfolio-resume", desc: "Optimizes portfolio resumes for product designers, creative directors, and frontend visual developers.", category: "Career Transitions" },
        { name: "interview-coach", desc: "Simulates behavioral and technical interview questions, grading responses against job requirements.", category: "Interviews & Offers" },
        { name: "interview-prep-generator", desc: "Generates 5-phase interview cheat sheets with German elevator pitches, STAR stories, and closing questions.", category: "Interviews & Offers" },
        { name: "salary-negotiation-prep", desc: "Prepares data-driven salary negotiation talk tracks and counter-offers based on German tech benchmarks.", category: "Interviews & Offers" },
        { name: "offer-comparison-analyzer", desc: "Compares competing job offers across base salary, bonus, equity, remote flexibility, and benefits.", category: "Interviews & Offers" },
        { name: "daily-job-workflow", desc: "Drives the daily discovery, qualification, and submission routine from daily-job-search-workflow.md.", category: "Job Market Intelligence" },
        { name: "job-description-analyzer", desc: "Extracts hard skills, soft skills, seniority levels, and hidden requirements from raw job postings.", category: "Job Market Intelligence" },
        { name: "linkedin-profile-optimizer", desc: "Aligns LinkedIn headlines, About sections, and featured media with the master resume invariants.", category: "Job Market Intelligence" },
        { name: "reference-list-builder", desc: "Generates formatted, professional professional reference dossiers tailored to target positions.", category: "Job Market Intelligence" }
      ]
    },

    resume: {
      title: "Bilingual Web Resume",
      desc: "Interactive single-column semantic web resume with instant DE/EN language toggle, 5 canonical role archetypes, and headless Chromium A4 PDF export.",
      archetypeLabel: "Archetype:",
      archetypeSelectLabel: "Select Archetype",
      fullstack: "Fullstack Engineer",
      devops: "DevOps & Cloud",
      designer: "Product Designer",
      finance: "Finance & Controlling",
      engineering: "Mechanical Systems",
      standaloneLink: "Standalone Resume",
      toggleAts: "Toggle ATS Mode",
      printPdf: "Print / PDF",
      previewNotice: "Interactive live preview synchronized with master profile."
    },

    faq: {
      title: "Frequently Asked Questions",
      badge: "ATS & Career Guide",
      desc: "Everything you need to know about ATS parser compatibility, German DIN-5008 standards, headless PDF export, and the 20-minute daily application routine.",
      q1: "What makes this web resume ATS-friendly?",
      a1: "Unlike graphic editor exports that flatten text or scramble multi-column layouts, Career Engine uses single-column semantic HTML5 and compiles via headless Chromium into clean, selectable standard A4 text. Parsers like Personio, Workday, and Greenhouse extract 100% of contact info, experience, and skill tags without errors.",
      q2: "How does DIN-5008 compliance help with German tech job applications?",
      a2: "DIN-5008 is the formal standard for German business correspondence. The engine formats cover letter headers, margins, sender/recipient blocks, date stamps, and subject lines to exact DIN-5008 specifications, instantly signaling professionalism and cultural calibration to German recruiters and HR departments.",
      q3: "How does the Single Source of Truth (profile.json) work?",
      a3: "All candidate invariants—contact information, target compensation, notice period, and core tech stack—are defined once in <code>config/profile.json</code>. Updating this single file automatically refreshes your web resume, role archetype PDFs, DIN-5008 cover letters, and daily job link queries.",
      q4: "How does the 20-minute daily job search routine work?",
      a4: "Instead of spending 4 hours manually browsing job boards, you execute a focused 4-step routine: (1) Run Google Direct ATS queries to uncover fresh unlisted jobs, (2) Evaluate your skills match using structured prompts, (3) Auto-compile a tailored resume and DIN-5008 cover letter via <code>jobs/engine.py</code>, and (4) Submit and log the match before 08:20 AM.",
      q5: "Can I customize this template for different tech roles?",
      a5: "Yes. The repository includes 5 pre-validated canonical role archetypes: Fullstack Software Engineer, Cloud DevOps & Platform Engineer, UI/UX & Product Designer, Banking & Controlling, and Mechanical & Energy Systems Engineering. You can switch between them with one click or create your own custom roles.",
      q6: "Is this tool free and open source?",
      a6: "Yes. Career Engine is 100% open source under the MIT License. There are no subscriptions, no paywalled export limits, and no tracking scripts. You own your code and your candidate data completely.",
      items: [
        {
          question: "What makes this web resume ATS-friendly?",
          answer: "Unlike graphic editor exports that flatten text or scramble multi-column layouts, Career Engine uses single-column semantic HTML5 and compiles via headless Chromium into clean, selectable standard A4 text. Parsers like Personio, Workday, and Greenhouse extract 100% of contact info, experience, and skill tags without errors."
        },
        {
          question: "How does DIN-5008 compliance help with German tech job applications?",
          answer: "DIN-5008 is the formal standard for German business correspondence. The engine formats cover letter headers, margins, sender/recipient blocks, date stamps, and subject lines to exact DIN-5008 specifications, instantly signaling professionalism and cultural calibration to German recruiters and HR departments."
        },
        {
          question: "How does the Single Source of Truth (profile.json) work?",
          answer: "All candidate invariants—contact information, target compensation, notice period, and core tech stack—are defined once in config/profile.json. Updating this single file automatically refreshes your web resume, role archetype PDFs, DIN-5008 cover letters, and daily job link queries."
        },
        {
          question: "How does the 20-minute daily job search routine work?",
          answer: "Instead of spending 4 hours manually browsing job boards, you execute a focused 4-step routine: (1) Run Google Direct ATS queries to uncover fresh unlisted jobs, (2) Evaluate your skills match using structured prompts, (3) Auto-compile a tailored resume and DIN-5008 cover letter via jobs/engine.py, and (4) Submit and log the match before 08:20 AM."
        },
        {
          question: "Can I customize this template for different tech roles?",
          answer: "Yes. The repository includes 5 pre-validated canonical role archetypes: Fullstack Software Engineer, Cloud DevOps & Platform Engineer, UI/UX & Product Designer, Banking & Controlling, and Mechanical & Energy Systems Engineering. You can switch between them with one click or create your own custom roles."
        },
        {
          question: "Is this tool free and open source?",
          answer: "Yes. Career Engine is 100% open source under the MIT License. There are no subscriptions, no paywalled export limits, and no tracking scripts. You own your code and your candidate data completely."
        }
      ]
    },

    download: {
      title: "Get Started with Career Engine",
      desc: "Download the complete standalone open-source kit including the master resume template, profile configurations, all 5 AI prompts, 24 agent skills, and the Python automation engine.",
      cta: "Download Starter Kit (ZIP)",
      bullet1: "1. Clone / Unzip",
      bullet2: "2. Edit config/profile.json",
      bullet3: "3. Run python jobs/engine.py",
      bullets: [
        "1. Clone / Unzip",
        "2. Edit config/profile.json",
        "3. Run python jobs/engine.py"
      ]
    },

    share: {
      title: "Know an Engineer Looking for Their Next Role?",
      desc: "Share this free open-source ATS engine with friends, colleagues, or your tech community to help them bypass applicant tracking filters and save hours every morning.",
      btnWhatsapp: "WhatsApp",
      btnLinkedin: "LinkedIn",
      btnTwitter: "X / Twitter",
      btnCopyLink: "Copy Link"
    },

    footer: {
      brand: "Masri Systems",
      brandDesc: "Career Engine (MIT License)",
      copyright: "Masri Systems · Career Engine (MIT License)",
      github: "GitHub",
      portfolio: "Portfolio",
      masterResume: "Master Resume",
      prompts: "Prompts",
      skills: "Skills",
      faq: "FAQ",
      download: "Download",
      imprint: "Impressum",
      privacy: "Datenschutz",
      links: {
        github: "GitHub",
        portfolio: "Portfolio",
        masterResume: "Master Resume",
        prompts: "Prompts",
        skills: "Skills",
        faq: "FAQ",
        download: "Download",
        imprint: "Impressum",
        privacy: "Datenschutz"
      }
    },

    ui: {
      copied: "Copied!",
      copyPrompt: "Copy Prompt",
      copyCommand: "Copy Command",
      promptCopiedToast: "Prompt copied to clipboard!",
      commandCopiedToast: "Command copied to clipboard!",
      linkCopiedToast: "Link copied to clipboard!",
      pressToCopy: "Press Ctrl+C to copy",
      copyFailed: "Failed to copy",
      atsActiveToast: "ATS plain-text preview active",
      atsStandardToast: "Standard visual layout active",
      switchPreviewToast: "Switched preview to {name} ({key})",
      briefLoadedToast: "Loaded results: {key}",
      coverLetterLoadedToast: "Loaded cover letter: {key}",
      selectLanguage: "Select Language",
      selectRole: "Select Role",
      selectArchetype: "Select Archetype",
      selectBrief: "Select Brief"
    }
  };
}));

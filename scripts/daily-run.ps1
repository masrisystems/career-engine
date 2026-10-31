# Daily Career Engine run: Claude Code executes the daily job workflow without a chat window.
# Schedule it with Windows Task Scheduler (see "Get Started" on the project page).
$ErrorActionPreference = "Stop"
Set-Location (Split-Path -Parent $PSScriptRoot)

New-Item -ItemType Directory -Force "jobs/logs" | Out-Null
$log = "jobs/logs/{0}.log" -f (Get-Date -Format "yyyy-MM-dd")

$prompt = "Read AGENTS.md, skills/daily-job-workflow/SKILL.md and daily-job-search-workflow.md, then run today's daily job workflow exactly as described there. Find up to 2 open roles that score 9.0/10 or higher, build each application package with python jobs/engine.py, update jobs/job_matches.md and finish with the Morning Action Brief. Prepare only: never submit an application or contact an employer."

claude -p $prompt --allowedTools Read Write Edit Glob Grep WebSearch WebFetch "Bash(python jobs/engine.py:*)" *>&1 | Tee-Object -FilePath $log

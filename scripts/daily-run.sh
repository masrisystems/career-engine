#!/usr/bin/env bash
# Daily Career Engine run: Claude Code executes the daily job workflow without a chat window.
# Schedule it with cron (see "Get Started" on the project page).
set -euo pipefail
cd "$(dirname "$0")/.."
# cron starts with a minimal PATH; add the usual install locations of the claude CLI
export PATH="$HOME/.local/bin:/usr/local/bin:/opt/homebrew/bin:$PATH"

mkdir -p jobs/logs
prompt="Read AGENTS.md, skills/daily-job-workflow/SKILL.md and daily-job-search-workflow.md, then run today's daily job workflow exactly as described there. Find up to 2 open roles that score 9.0/10 or higher, build each application package with python3 jobs/engine.py, update jobs/job_matches.md and finish with the Morning Action Brief. Prepare only: never submit an application or contact an employer."

claude -p "$prompt" --allowedTools Read Write Edit Glob Grep WebSearch WebFetch \
  "Bash(python jobs/engine.py:*)" "Bash(python3 jobs/engine.py:*)" 2>&1 | tee "jobs/logs/$(date +%F).log"

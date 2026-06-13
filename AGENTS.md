# IT-Learn — Agent instructions

## Repo overview

Static educational SPA (HTML/CSS/JS, **no build tools, no package.json**) hosted on Cloudflare Pages, with a Flask backend on PythonAnywhere (`https://itlearn.pythonanywhere.com/api`).

## Branch rule

PRs **must** target `beta`, not `main`.

## Key directories

| Path | Purpose |
|---|---|
| `learn/` | SPA entry: `learn/index.html` → `learn/ui/js/main.js` |
| `learn/api/{lang}/` | Course content per language (`courses.json`, `theory.md`, `quiz.json`, `practice.json`) |
| `learn/ui/js/services/` | All API calls to the PythonAnywhere backend |
| `learn/ui/js/state/` | App state, hash-based router, gamification state |
| `learn/ui/js/render/` | All SPA views (courses, chapters, profile, settings, store, badges, projects, onboarding, etc.) |
| `learn/ui/js/runners/` | Code executors (Pyodide for Python, SQL.js for SQL) |
| `learn/ui/js/web-llm-lib/` | In-browser LLM used by TeacherBot |

## Development

- **No build step.** Serve the root directory with any static HTTP server.
- AI model `.bin` files under `learn/ui/js/web-llm/models/` are gitignored; downloaded at runtime.

## Architecture notes

- **Auth:** Cookie-based session + Cloudflare Turnstile CAPTCHA on login/signup.
- **Code editor:** Ace (configured per language in `runners/languageConfig.js`).
- **Python execution:** Pyodide WebWorker (`pyodide-worker.js`).
- **SQL execution:** SQL.js WebWorker (`sql-worker.js`).
- **AI TeacherBot:** Web-LLM (runs entirely in-browser, no external API key).
- **i18n:** Custom `translations.js` for UI strings + language-specific content files under `learn/api/{lang}/`.
- **SPA router:** Hash-based (`#/courses`, `#/courses/{id}/chapters/{id}`, `#/projects`, `#/profile`, `#/settings`, `#/store`, `#/badges`, `#/onboarding`). Defined in `state/router.js`.

## Testing / CI

No test suite or CI config in this repo. Cloudflare Pages auto-deploys from GitHub on push to `beta`/`main`.

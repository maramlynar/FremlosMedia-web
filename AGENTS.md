# Repository Guidelines

## Project Structure & Module Organization
This repository is currently a clean starting point. Use the structure below as the default:

- `src/` - application source code, organized by feature/module.
- `tests/` - automated tests mirroring `src/` paths.
- `assets/` - static files (images, fixtures, sample data).
- `docs/` - design notes, architecture decisions, and runbooks.

Example:
`src/auth/login.ts` -> `tests/auth/login.test.ts`

## Build, Test, and Development Commands
No build tooling is configured yet. When adding tooling, expose commands through a single entry point (prefer `Makefile` or package scripts) and document them here.

Recommended baseline commands:

- `make setup` - install dependencies and local tooling.
- `make test` - run the full test suite.
- `make lint` - run static checks/format validation.
- `make dev` - start the local development workflow.

If using Node.js instead, provide equivalent `npm run ...` scripts.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for YAML/JSON/Markdown, 4 spaces for Python, language defaults elsewhere.
- Keep modules small and cohesive; one primary responsibility per file.
- File names: `kebab-case` for assets/docs, language-idiomatic names for source files.
- Use formatters/linters for every language introduced (for example, Prettier/ESLint, Ruff/Black, or equivalent).

## Testing Guidelines
- Place tests in `tests/` and mirror source layout.
- Use clear test names like `feature_behavior_expected_result`.
- Add unit tests for new logic and regression tests for bug fixes.
- Aim for meaningful coverage on critical paths; target >=80% once coverage tooling is added.

## Commit & Pull Request Guidelines
No existing commit history is available here, so use Conventional Commits:

- `feat: add token refresh handler`
- `fix: prevent null dereference in parser`
- `docs: update setup steps`

PRs should include:

- concise summary of what changed and why,
- linked issue/ticket (if applicable),
- test evidence (`make test` output or equivalent),
- screenshots or logs for UI/behavioral changes.

## Security & Configuration Tips
- Never commit secrets; use `.env.local` and a committed `.env.example`.
- Pin dependency versions where practical.
- Review third-party packages before adding them.

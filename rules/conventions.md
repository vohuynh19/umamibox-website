# Conventions

Shared conventions to keep the codebase consistent and easy to navigate.

## Naming
- Components: `PascalCase` (e.g., `HeroSection.tsx`).
- Files & folders: `kebab-case` for non-components (e.g., `performance-and-testing.md`).
- Props interfaces: `ComponentNameProps`.
- IDs: simple, lowercase (`story`, `rewards`, `faq`).

## Folder Structure
- Pages compose sections from `src/components`.
- Keep section components flat in `src/components` unless sub-components are needed.
- Place reusable helpers in `src/libs/*`.

## Imports
- Use path aliases where available (e.g., `@/components`).
- Avoid deep relative paths; prefer alias or short relative imports.

## Code Style
- TypeScript: annotate props and public interfaces.
- Keep functions small and purposeful; avoid mega-components.
- No inline comments unless clarifying non-obvious logic.

## i18n
- No hard-coded strings in components; pass via `messages` prop.
- Keep language files mirrored (`en.json` ↔ `vi.json`).

## Commits (suggested)
- Prefix: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `perf:`, `test:`.
- Keep messages short and actionable.

## Dependencies
- Avoid introducing new libraries unless they solve a clear problem.
- Maintain versions in `package.json`; keep changes minimal and focused.
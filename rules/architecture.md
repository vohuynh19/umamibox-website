# Architecture Overview

This document summarizes the app’s architecture and rules that keep the codebase consistent, legible, and easy to extend.

## Tech Stack
- Next.js (Pages Router)
- TypeScript
- Tailwind CSS
- Framer Motion (UI animations)
- next-intl (i18n)
- next/image (optimized images)

## Directory Structure
- `src/pages/` — Page-level composition and meta tags.
  - `index.tsx` composes top-level sections: `Hero → Story → Rewards → FAQ → Footer`.
- `src/components/` — Reusable presentational components (sections).
  - Examples: `Header`, `HeroSection`, `StorySection`, `RewardsSection`, `FAQSection`, `Footer`.
- `messages/` — Translation sources.
  - `en.json`, `vi.json` store content and structured UI data (campaign, rewards).
- `public/` — Static assets (images, logos, fonts).
- `src/styles/` — Global styles (Tailwind base via `globals.css`).
- `src/constants/` — Project-wide constants.
- `src/libs/` — Utilities and helpers.

## Layering & Responsibilities
- Pages: assemble sections, handle SEO/meta, wire i18n data (`t.raw(...)`) and ids for navigation.
- Components: pure UI sections, minimal state, typed props, no side-effects beyond local UI.
- Messages: source of truth for user-facing strings and structured UI content.
- Assets: referenced through `next/image` for performance.

## Composition Rules
- Keep section order consistent: `Hero → Story → Rewards → FAQ → Footer`.
- Each section must have a stable `id` (e.g., `story`, `rewards`, `faq`) to support header navigation.
- Components receive `messages` as a typed prop; avoid hard-coded strings in components.
- Prefer small, focused components over deeply nested logic.

## Client/Server Rules
- Mark interactive or animated components with `"use client"`.
- Keep page files server-side by default; pass data down as props.

## Styling Rules
- Use Tailwind utility classes for layout and spacing.
- Maintain consistent typography and colors (e.g., gray text, green accents).
- Use responsive classes (`sm`, `md`, `lg`) to ensure mobile-first behavior.

## Animation Rules
- Use Framer Motion for simple entrance/hover effects.
- Keep animation durations modest (≤ 0.6s) and avoid jank.

## Performance Rules
- Always use `next/image` with `fill` or explicit dimensions.
- Avoid excessive client state; derive from props when possible.
- Defer heavy content loading; show skeletons when useful.

## i18n Rules
- Define all user-facing strings in `messages/*.json`.
- Use `useTranslations()` and `t.raw(key)` for structured data.
- Keep key names consistent: `hero`, `story`, `rewards`, `faq`, `footer`, `campaign`.

## Navigation Rules
- Header nav items must map 1:1 to section ids.
- Use `scrollIntoView({ behavior: "smooth" })` for in-page navigation.

## Change Management
- Prefer targeted edits; keep style consistent with existing code.
- Update i18n files in tandem with UI changes.
- Avoid introducing new libraries unless necessary.
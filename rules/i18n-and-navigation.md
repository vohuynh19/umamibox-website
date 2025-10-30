# i18n & Navigation Rules

Guidelines for translations and section navigation.

## i18n Source of Truth
- Store all user-facing strings and structured UI data in `messages/en.json` and `messages/vi.json`.
- Use consistent top-level keys: `header`, `hero`, `story`, `rewards`, `faq`, `footer`, `campaign`.

## Structured Data in i18n
- Keep complex UI data (e.g., `campaign`, `rewards.tiers`) in JSON for easy localization.
- Example `campaign` object:
  ```json
  {
    "campaign": {
      "pledged": 12500,
      "goal": 50000,
      "backers": 150,
      "daysLeft": 28,
      "percentFunded": 25,
      "status": "Funding",
      "labels": {
        "pledged": "Pledged",
        "goal": "Goal",
        "backers": "Backers",
        "daysLeft": "Days Left"
      }
    }
  }
  ```

## Access Pattern
- Use `useTranslations()` in pages and pass data down via `t.raw(key)`.
- Do not call `useTranslations()` inside section components.

## Keys & Naming
- Keep keys lowercase and descriptive; prefer nested objects for section content.
- Mirror keys across languages; avoid missing or extra keys between `en.json` and `vi.json`.

## Navigation & Section IDs
- Header nav must map directly to section ids: `story`, `rewards`, `faq`.
- Each section component should render with a matching `id`.
- Use smooth scrolling: `element.scrollIntoView({ behavior: "smooth" })`.

## Updating Navigation
- Update header nav labels in `messages/*.json` under `header.nav`.
- Keep the number of nav items small (3–4) to retain focus.
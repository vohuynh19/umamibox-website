# Performance & Testing Guidelines

Practical rules to keep the app fast and reliable.

## Performance
- Prefer server-rendered pages; keep client components only where interaction/animation is needed.
- Use `next/image` for all images. Provide container dimensions or `fill` + `object-cover`.
- Avoid large, complex animations on scroll; use modest durations and simple transforms.
- Keep sections lean; avoid heavy loops and deep nesting.
- Minimize re-renders by keeping state local and derived from props.
- Use skeletons for perceived performance when content is heavy.

## Accessibility & UX
- Maintain readable contrast, clear focus states, and meaningful alt text.
- Ensure interactive elements are reachable with keyboard navigation.

## Testing Strategy (Pragmatic)
- Component-level checks: manually verify rendering, props, and responsive layout.
- Key flows: navigation tabs scroll to correct sections (`story`, `rewards`, `faq`).
- i18n consistency: verify both languages load and labels match keys.
- Visual sanity: run dev server and validate layout at `sm`, `md`, `lg` breakpoints.

## Optional Test Ideas (if you add tooling later)
- Unit tests for helper functions.
- Visual regression snapshots for critical sections.
- ESLint/TypeScript as static tests to catch typing and import errors.

## Build & Dev Tips
- Restart dev server if `.next` artifacts error (e.g., ENOENT manifest issues).
- Keep dependencies up to date; avoid adding heavy libraries without need.
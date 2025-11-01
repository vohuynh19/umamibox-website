# Components Guidelines

Rules to keep UI components predictable, accessible, and easy to maintain.

## General
- Prefer stateless, presentational components.
- Use `"use client"` in interactive or animated components.
- Keep props small and typed; avoid passing entire translation objects unless necessary.

## Props Typing
- Define a dedicated props interface per component.
- For i18n, pass a `messages` object with typed shape relevant to the component.
- Example:
  ```ts
  interface HeroProps {
    messages: { title: string; subtitle: string; cta: string };
    campaign: {
      pledged: number;
      goal: number;
      backers: number;
      daysLeft: number;
      percentFunded: number;
      status: string;
      labels?: Record<string, string>;
    };
    scrollToRewards: () => void;
  }
  ```

## Section IDs
- Each section component should render a stable `id` (e.g., `id="story"`).
- IDs must match header navigation items.

## Styling
- Use Tailwind utilities; avoid inline styles except for dynamic values.
- Keep spacing consistent: `py-16` sections, `max-w-4xl/7xl` containers.
- Use gray text for body (`text-gray-600`) and green accents for CTAs (`bg-green-600`).

## Accessibility
- Provide informative `alt` text for images.
- Ensure buttons have clear text and focus states.
- Keep color contrast readable; avoid text over busy images.

## Animations
- Use Framer Motion for entrance and hover animations.
- Keep motion subtle (e.g., `opacity/y`, modest durations ≤ 0.6s).
- Avoid animating layout-heavy elements on scroll for performance.

## Loading & Skeletons
- Use simple skeleton placeholders when content depends on async or heavy assets.
- Keep skeleton colors neutral; match surrounding section layout.

## Images
- Use `next/image` with `fill` and `className="object-cover"` for responsive media.
- Prefer square/aspect-ratio containers to prevent CLS.

## Lists & Grids
- Keep lists short and scannable; avoid deep nesting.
- Use responsive grids (`grid-cols-1/2/4`) with modest gaps.
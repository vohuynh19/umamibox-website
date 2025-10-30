# Data Model Rules

Canonical shapes for campaign and rewards used across the UI and i18n.

## Campaign
Use this shape for funding stats passed to `HeroSection`:
```ts
export interface Campaign {
  pledged: number;
  goal: number;
  backers: number;
  daysLeft: number;
  percentFunded: number; // 0–100
  status: string;        // e.g., "Funding", "Successful"
  labels?: Record<string, string>;
}
```

Example (from `messages/en.json`):
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

## Rewards
Use a normalized tier shape for `RewardsSection`:
```ts
export interface RewardTier {
  id: string;
  title: string;
  price: number;             // currency amount in VND
  description: string;
  includes: string[];        // bullet points
  delivery: string;          // month/year or relative date
  backers: number;           // count of supporters
  popular?: boolean;         // highlights popular tier
}
```

Example (from `messages/en.json`):
```json
{
  "rewards": {
    "title": "Choose Your Reward",
    "subtitle": "Support the project and enjoy UmamiBox",
    "tiers": [
      {
        "id": "early-bird",
        "title": "Early Bird Special",
        "price": 499000,
        "description": "Limited-time offer for early supporters.",
        "includes": ["Premium beef box", "Recipe card", "Thank-you note"],
        "delivery": "Nov 2024",
        "backers": 58,
        "popular": true
      }
    ]
  }
}
```

## Rules
- Keep types stable across components and i18n.
- Avoid optional fields unless they are truly optional (`labels`, `popular`).
- Prefer numeric `price`; format in the UI.
- When adding fields, update both languages consistently.
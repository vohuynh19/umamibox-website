export const locales = ['en', 'vi'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'vi';

export function getMessages(locale: Locale) {
  switch (locale) {
    case 'en':
      return import('../messages/en.json').then(module => module.default);
    case 'vi':
      return import('../messages/vi.json').then(module => module.default);
    default:
      return import('../messages/vi.json').then(module => module.default);
  }
}
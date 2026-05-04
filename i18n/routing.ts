// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',

  // Optional: Show no prefix for default locale (recommended)
  localePrefix: 'as-needed',
});
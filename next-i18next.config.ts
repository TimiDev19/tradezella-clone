import type { UserConfig } from 'next-i18next';

const config: UserConfig = {
  i18n: {
    locales: ['en', 'fr', 'es'], // your supported languages
    defaultLocale: 'en',
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development', // hot reload translations in dev
};

export default config;

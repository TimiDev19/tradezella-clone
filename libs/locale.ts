// src/libs/locale.ts

// Supported languages in your app
const SUPPORTED_LOCALES = ['en', 'fr', 'es'] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];

/**
 * Detects the user's locale from environment variables or defaults to "en".
 * Works on both server and client.
 */
export async function getUserLocale(): Promise<Locale> {
  // Check if running on the server
  if (typeof window === 'undefined') {
    // Server: read from request headers
    const acceptLanguage = process.env.ACCEPT_LANGUAGE || ''; // Replace with actual header access if in middleware
    const matched = matchSupportedLocale(acceptLanguage);
    return matched;
  }

  // Client: use browser settings or localStorage
  const storedLocale = localStorage.getItem('locale');
  if (storedLocale && isSupportedLocale(storedLocale)) {
    return storedLocale as Locale;
  }

  const browserLocale = navigator.language.split('-')[0];
  return matchSupportedLocale(browserLocale);
}

function matchSupportedLocale(locale: string): Locale {
  const shortCode = locale.toLowerCase().split('-')[0];
  return (SUPPORTED_LOCALES.includes(shortCode as Locale)
    ? shortCode
    : 'en') as Locale;
}

function isSupportedLocale(locale: string): boolean {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

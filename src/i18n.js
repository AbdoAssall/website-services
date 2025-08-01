import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // ✅ Use backend to load translation from public
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    supportedLngs: ['en', 'ar'],
    debug: import.meta.env.MODE === 'development',
    backend: {
      loadPath: '/locales/{{lng}}.json', // 👈 Path of translation files in public
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: true,
    }
  });

// Function to handle language direction
export const setLanguageWithDirection = (language = 'ar') => {
  i18n.changeLanguage(language);

  // Set direction based on language
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = direction;
  document.documentElement.lang = language;
  document.body.dir = direction;
};

export default i18n;
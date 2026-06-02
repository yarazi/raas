import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import heTranslation from './locales/he.json';
import esTranslation from './locales/es.json';
import enTranslation from './locales/en.json'; // הייבוא החדש

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      he: { translation: heTranslation },
      es: { translation: esTranslation },
      en: { translation: enTranslation } // השפה החדשה במערכת
    },
    fallbackLng: 'en', // מומלץ להפוך את אנגלית לברירת המחדל הגלובלית אם המערכת לא מזהה
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
    },
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
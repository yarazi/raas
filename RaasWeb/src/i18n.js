import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "badge": "Next Generation GIS Architecture",
      "title": "Raster as a Service",
      "subtitle": "Unprecedented stable performance and decentralized tile storage. The modern architecture that will slash your infrastructure costs.",
      "cta": "Schedule a Quick Architecture Call",
      "card1Title": "Decentralized Tile Storage",
      "card1Text": "Say goodbye to expensive local disks and bottlenecks. RaaS manages and serves Tiles from decentralized object storage, ensuring zero disk wear and near-zero storage costs.",
      "card2Title": "Stable Performance Under Load",
      "card2Text": "Total separation between compute and storage layers maintains a linear, stable performance curve. Response times remain consistently fast without voltage drops, even under extreme user loads.",
      "tableTitle": "The Architectural Difference",
      "tableSubtitle": "Why advanced GIS systems are moving to a decentralized architecture"
    }
  },
  he: {
    translation: {
      "badge": "ארכיטקטורת הדור הבא למערכות GIS",
      "title": "Raster as a Service",
      "subtitle": "ביצועים יציבים חסרי תקדים ואחסון טיילים מבוזר. הארכיטקטורה המודרנית שתחתוך את עלויות התשתית שלכם.",
      "cta": "תיאום שיחת ארכיטקטורה מהירה",
      "card1Title": "אחסון טיילים מבוזר",
      "card1Text": "נפרדים מהתלות בדיסקים מקומיים יקרים ובצווארי בקבוק. RaaS מנהלת ומגישה את ה-Tiles מאחסון אובייקטים מבוזר, מה שמבטיח אפס שחיקת דיסק ועלויות אחסון שואפות לאפס.",
      "card2Title": "ביצועים יציבים בעומס",
      "card2Text": "הפרדה מוחלטת בין שכבת המחשוב לשכבת האחסון שומרת על קו ביצועים ליניארי ויציב. זמני התגובה נשארים מהירים וקבועים ללא נפילות מתח, גם בעומס משתמשים קיצוני.",
      "tableTitle": "ההבדל הארכיטקטוני",
      "tableSubtitle": "למה מערכות GIS מתקדמות עוברות לארכיטקטורה מבוזרת"
    }
  }
};

i18n
  .use(LanguageDetector) // מזהה אוטומטית את שפת הדפדפן/המדינה
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // אם המשתמש לא מישראל, הוא יקבל אנגלית
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
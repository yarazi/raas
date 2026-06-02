// src/config.js

// src/config.js

export const config = {
  // --- API Connections ---
  // If the .env variable is missing, it will safely default to your local backend
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8446',

  // --- Support Info ---
  supportPhone: import.meta.env.VITE_SUPPORT_PHONE || '+9725364769',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'hello@familycookbook.com',

  // --- App Settings (Optional) ---
  // You can also store standard, non-secret app settings here so they are easy to change!
  maxUploadSizeMB: 5,
  defaultLanguage: 'he',
};
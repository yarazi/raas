import React, { useState } from 'react';

const translations = {
  he: {
    badge: "ארכיטקטורת הדור הבא למערכות GIS",
    title: "Raster as a Service",
    subtitle: "ביצועים יציבים חסרי תקדים ואחסון טיילים מבוזר.",
    subtitle2: "הארכיטקטורה המודרנית שתחתוך את עלויות התשתית שלכם.",
    cta: "תיאום שיחת ארכיטקטורה מהירה",
    waMessage: "היי יניב, הגעתי מדף ה-RaaS ואשמח לקבוע שיחת ייעוץ קצרה",
    card1Title: "אחסון טיילים מבוזר",
    card1Text: "נפרדים מהתלות בדיסקים מקומיים יקרים ובצווארי בקבוק. RaaS מנהלת ומגישה את ה-Tiles מאחסון אובייקטים מבוזר, מה שמבטיח אפס שחיקת דיסק ועלויות אחסון שואפות לאפס.",
    card2Title: "ביצועים יציבים בעומס",
    card2Text: "הפרדה מוחלטת בין שכבת המחשוב לשכבת האחסון שומרת על קו ביצועים ליניארי ויציב. זמני התגובה נשארים מהירים וקבועים ללא נפילות מתח, גם בעומס משתמשים קיצוני.",
    tableTitle: "ההבדל הארכיטקטוני",
    tableSub: "למה מערכות GIS מתקדמות עוברות לארכיטקטורה מבוזרת",
    th1: "מאפיין",
    th2: "שרת מפות מסורתי",
    th3: "ארכיטקטורת RaaS",
    row1Col1: "מיקום אחסון הטיילים",
    row1Col2: "דיסק שרת מקומי (נפח מוגבל ויקר)",
    row1Col3: "אחסון מבוזר (Scalable & Cheap)",
    row2Col1: "התנהגות בעומסי שיא",
    row2Col2: "האטת I/O / סכנת קריסה בשרת",
    row2Col3: "ביצועים יציבים וקבועים ב-100%",
    row3Col1: "עלויות גידול (Scaling)",
    row3Col2: "קפיצות תקציב (חומרה ורישוי)",
    row3Col3: "צמיחה אורגנית (לפי שימוש בלבד)"
  },
  es: {
    badge: "La arquitectura de próxima generación para sistemas GIS",
    title: "Raster as a Service",
    subtitle: "Rendimiento estable sin precedentes y almacenamiento de teselas distribuido.",
    subtitle2: "La arquitectura moderna que reducirá drásticamente sus costos de infraestructura.",
    cta: "Coordinar una breve llamada de arquitectura",
    waMessage: "Hola Yaniv, llegué desde la página de RaaS y me gustaría programar una breve llamada de consulta.",
    card1Title: "Almacenamiento de Teselas Distribuido",
    card1Text: "Despídase de la dependencia de discos locales costosos y cuellos de botella. RaaS gestiona y sirve las teselas desde un almacenamiento de objetos distribuido, asegurando cero desgaste del disco y costos de almacenamiento cercanos a cero.",
    card2Title: "Rendimiento Estable Bajo Carga",
    card2Text: "La separación total entre la capa de computación y la capa de almacenamiento mantiene una línea de rendimiento lineal y estable. Los tiempos de respuesta se mantienen rápidos y constantes sin caídas, incluso bajo cargas extremas de usuarios.",
    tableTitle: "La Diferencia Arquitectónica",
    tableSub: "Por qué los sistemas GIS avanzados están migrando a una arquitectura distribuida",
    th1: "Característica",
    th2: "Servidor de Mapas Tradicional",
    th3: "Arquitectura RaaS",
    row1Col1: "Ubicación del almacenamiento",
    row1Col2: "Disco de servidor local (capacidad limitada y costosa)",
    row1Col3: "Almacenamiento distribuido (Escalable y Económico)",
    row2Col1: "Comportamiento en picos de carga",
    row2Col2: "Ralentización de I/O / riesgo de caída del servidor",
    row2Col3: "Rendimiento 100% estable y constante",
    row3Col1: "Costos de escalabilidad (Scaling)",
    row3Col2: "Saltos en el presupuesto (hardware y licencias)",
    row3Col3: "Crecimiento orgánico (solo por uso)"
  }
};

const RaasInfoPage = () => {
  const [lang, setLang] = useState('he');
  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden ${lang === 'he' ? 'text-right' : 'text-left'}`} dir={lang === 'he' ? 'rtl' : 'ltr'}>
      
      {/* Language Switcher */}
      <div className="absolute top-6 left-6 z-50 flex gap-2" dir="ltr">
        <button 
          onClick={() => setLang('he')}
          className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${lang === 'he' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700'}`}
        >
          עברית
        </button>
        <button 
          onClick={() => setLang('es')}
          className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${lang === 'es' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700'}`}
        >
          Español
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative bg-slate-950 text-white pb-32 pt-24 px-6 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10 mt-8">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
            {t.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-indigo-100" dir="ltr">
            {t.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
            <br className="hidden md:block" /> {t.subtitle2}
          </p>
          
          <a 
            href={`https://wa.me/972506400922?text=${encodeURIComponent(t.waMessage)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="text-lg">{t.cta}</span>
            <svg className={`w-5 h-5 ${lang === 'he' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </header>

      {/* Core Features Section */}
      <section className="px-6 max-w-5xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
              <svg style={{ width: '24px', height: '24px' }} className="text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.card1Title}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t.card1Text}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
              <svg style={{ width: '24px', height: '24px' }} className="text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.card2Title}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t.card2Text}</p>
          </div>

        </div>
      </section>

      {/* Architectural Comparison Table */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{t.tableTitle}</h2>
          <p className="text-lg text-slate-500">{t.tableSub}</p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <table className={`w-full border-collapse ${lang === 'he' ? 'text-right' : 'text-left'}`}>
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-6 font-bold text-slate-500 bg-slate-50 w-1/3">{t.th1}</th>
                <th className="p-6 font-bold text-slate-700 bg-white w-1/3">{t.th2}</th>
                <th className="p-6 font-extrabold text-blue-900 bg-blue-50/50 w-1/3 text-xl">{t.th3}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">{t.row1Col1}</td>
                <td className="p-6 text-slate-600">{t.row1Col2}</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">{t.row1Col3}</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">{t.row2Col1}</td>
                <td className="p-6 text-slate-600">{t.row2Col2}</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">{t.row2Col3}</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">{t.row3Col1}</td>
                <td className="p-6 text-slate-600">{t.row3Col2}</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">{t.row3Col3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default RaasInfoPage;
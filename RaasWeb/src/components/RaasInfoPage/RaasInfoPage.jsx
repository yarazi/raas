import React from 'react';

const RaasInfoPage = () => {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans text-right overflow-hidden" dir="rtl">
      
      {/* Hero Section */}
      <header className="relative bg-slate-950 text-white pb-32 pt-24 px-6 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
            ארכיטקטורת הדור הבא למערכות GIS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-indigo-100">
            Raster as a Service
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            ביצועים יציבים חסרי תקדים ואחסון טיילים מבוזר.
            <br className="hidden md:block" /> הארכיטקטורה המודרנית שתחתוך את עלויות התשתית שלכם.
          </p>
          
          <a 
            href="https://wa.me/{9725364769}?text=היי יניב, הגעתי מדף ה-RaaS ואשמח לקבוע שיחת ייעוץ קצרה" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="text-lg">תיאום שיחת ארכיטקטורה מהירה</span>
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </header>

      {/* Core Features Section - Overlapping the Hero */}
      <section className="px-6 max-w-5xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">אחסון טיילים מבוזר</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              נפרדים מהתלות בדיסקים מקומיים יקרים ובצווארי בקבוק. RaaS מנהלת ומגישה את ה-Tiles מאחסון אובייקטים מבוזר, מה שמבטיח אפס שחיקת דיסק ועלויות אחסון שואפות לאפס.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
              <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">ביצועים יציבים בעומס</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              הפרדה מוחלטת בין שכבת המחשוב לשכבת האחסון שומרת על קו ביצועים ליניארי ויציב. זמני התגובה נשארים מהירים וקבועים ללא נפילות מתח, גם בעומס משתמשים קיצוני.
            </p>
          </div>

        </div>
      </section>

      {/* Architectural Comparison Table */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">ההבדל הארכיטקטוני</h2>
          <p className="text-lg text-slate-500">למה מערכות GIS מתקדמות עוברות לארכיטקטורה מבוזרת</p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-6 font-bold text-slate-500 bg-slate-50 w-1/3">מאפיין</th>
                <th className="p-6 font-bold text-slate-700 bg-white w-1/3">שרת מפות מסורתי</th>
                <th className="p-6 font-extrabold text-blue-900 bg-blue-50/50 w-1/3 text-xl">ארכיטקטורת RaaS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">מיקום אחסון הטיילים</td>
                <td className="p-6 text-slate-600">דיסק שרת מקומי (נפח מוגבל ויקר)</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">אחסון מבוזר (Scalable & Cheap)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">התנהגות בעומסי שיא</td>
                <td className="p-6 text-slate-600">האטת I/O / סכנת קריסה בשרת</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">ביצועים יציבים וקבועים ב-100%</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">עלויות גידול (Scaling)</td>
                <td className="p-6 text-slate-600">קפיצות תקציב (חומרה ורישוי)</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">צמיחה אורגנית (לפי שימוש בלבד)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default RaasInfoPage;
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const RaasInfoPage = () => {
  const { t, i18n } = useTranslation();

  // משנה את כיוון האתר אוטומטית (מימין לשמאל או משמאל לימין) לפי השפה
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden ${i18n.dir() === 'rtl' ? 'text-right' : 'text-left'}`}>
      
      {/* Hero Section */}
      <header className="relative bg-slate-950 text-white pb-32 pt-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
            {t('badge')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-indigo-100">
            {t('title')}
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
          
          <a 
            href="https://wa.me/972506400922" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${i18n.dir() === 'rtl' ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <span className="text-lg">{t('cta')}</span>
            <svg className={`w-5 h-5 ${i18n.dir() === 'rtl' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </header>

      {/* Core Features Section */}
      <section className="px-6 max-w-5xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('card1Title')}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t('card1Text')}</p>
          </div>

          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
              <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('card2Title')}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t('card2Text')}</p>
          </div>

        </div>
      </section>

      {/* Header for Table Section (You can translate the table content similarly) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{t('tableTitle')}</h2>
          <p className="text-lg text-slate-500">{t('tableSubtitle')}</p>
        </div>
      </section>

    </div>
  );
};

export default RaasInfoPage;
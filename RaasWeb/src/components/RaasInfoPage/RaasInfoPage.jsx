import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const RaasInfoPage = () => {
  
  const { t, i18n } = useTranslation();
  
  // שואב את השפה הנוכחית בבטחה (נופל לעברית אם משהו משתבש)
  const currentLang = i18n.resolvedLanguage || i18n.language || 'he';

  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText('yaniv@yygis.online');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // מחזיר את הכפתור למצב רגיל אחרי 2 שניות
  };
  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden ${currentLang === 'he' ? 'text-right' : 'text-left'}`} dir={currentLang === 'he' ? 'rtl' : 'ltr'}>
      
      {/* Single Button Language Switcher */}
{/* 3-Way Language Switcher */}
      <div className="absolute top-6 left-6 z-50" dir="ltr">
        <button 
          onClick={() => {
            // מעבר מעגלי בין השפות
            const nextLang = currentLang === 'he' ? 'en' : currentLang === 'en' ? 'es' : 'he';
            i18n.changeLanguage(nextLang);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md text-slate-200 font-bold shadow-lg border border-slate-700 hover:bg-slate-700 hover:text-white transition-all w-[120px] justify-center"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
          </svg>
          <span>
            {currentLang === 'he' ? 'עברית' : currentLang === 'es' ? 'Español' : 'English'}
          </span>
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative bg-slate-950 text-white pb-32 pt-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10 mt-8">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
            {t('badge')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-indigo-100" dir="ltr">
            {t('title')}
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
            <br className="hidden md:block" /> {t('subtitle2')}
          </p>
          
          <a 
            href={`https://wa.me/972506400922?text=${encodeURIComponent(t('waMessage'))}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="text-lg">{t('cta')}</span>
            <svg className={`w-5 h-5 ${currentLang === 'he' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </header>

      {/* Core Features Section */}
      <section className="px-6 max-w-5xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
              <svg style={{ width: '24px', height: '24px' }} className="text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('card1Title')}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t('card1Text')}</p>
          </div>

          <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
              <svg style={{ width: '24px', height: '24px' }} className="text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{t('card2Title')}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t('card2Text')}</p>
          </div>
        </div>
      </section>

      {/* Architectural Comparison Table */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{t('tableTitle')}</h2>
          <p className="text-lg text-slate-500">{t('tableSub')}</p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <table className={`w-full border-collapse ${currentLang === 'he' ? 'text-right' : 'text-left'}`}>
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-6 font-bold text-slate-500 bg-slate-50 w-1/3">{t('th1')}</th>
                <th className="p-6 font-bold text-slate-700 bg-white w-1/3">{t('th2')}</th>
                <th className="p-6 font-extrabold text-blue-900 bg-blue-50/50 w-1/3 text-xl">{t('th3')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">{t('row1Col1')}</td>
                <td className="p-6 text-slate-600">{t('row1Col2')}</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">{t('row1Col3')}</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">{t('row2Col1')}</td>
                <td className="p-6 text-slate-600">{t('row2Col2')}</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">{t('row2Col3')}</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition">
                <td className="p-6 font-semibold text-slate-700 bg-slate-50/30">{t('row3Col1')}</td>
                <td className="p-6 text-slate-600">{t('row3Col2')}</td>
                <td className="p-6 font-bold text-blue-800 bg-blue-50/30">{t('row3Col3')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
{/* Footer Section */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16 mt-12 relative z-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-slate-300 mb-8">{t('footerTitle')}</h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12" dir="ltr">
            
{/* Email - Click to Copy */}
            <button 
              onClick={copyEmail}
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${copied ? 'bg-green-600' : 'bg-slate-800 group-hover:bg-blue-600'}`}>
                {copied ? (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <span className="font-medium text-lg tracking-wide">
                {copied ? (currentLang === 'he' ? 'הועתק!' : currentLang === 'es' ? '¡Copiado!' : 'Copied!') : 'yaniv@yygis.com'}
              </span>
            </button>

            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/yanivarazi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#0a66c2] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <span className="font-medium text-lg tracking-wide">LinkedIn Profile</span>
            </a>

            {/* my site*/}
            <a 
              href="https://yygis.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-[#0a66c2] transition-colors">
                <img src="/favicon-32x32.png" alt="My Website" className="w-5 h-5" />
              </div>
              <span className="font-medium text-lg tracking-wide">My Website</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RaasInfoPage;
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

interface TermsOfUseProps {
  isDarkMode: boolean;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ isDarkMode }) => {
  const { t } = useLanguage();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-stone-950' : 'bg-stone-100'} py-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isDarkMode ? 'bg-stone-900' : 'bg-white'} rounded-lg shadow-xl p-8`}>
          <div className="flex items-center mb-8">
            <button 
              onClick={() => window.location.href = '/'}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-stone-800 hover:bg-stone-700 text-stone-300' 
                  : 'bg-stone-200 hover:bg-stone-300 text-stone-700'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Povratak na početnu</span>
            </button>
          </div>
          <h1 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
            {t('terms.title')}
          </h1>
          
          <div className={`space-y-6 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('terms.acceptance')}
              </h2>
              <p className="mb-4">
                {t('terms.acceptanceText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('terms.useOfService')}
              </h2>
              <p className="mb-4">
                {t('terms.useOfServiceText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('terms.reservations')}
              </h2>
              <p className="mb-4">
                {t('terms.reservationsText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('terms.liability')}
              </h2>
              <p className="mb-4">
                {t('terms.liabilityText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('terms.changes')}
              </h2>
              <p className="mb-4">
                {t('terms.changesText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('terms.contact')}
              </h2>
              <p className="mb-4">
                {t('terms.contactText')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

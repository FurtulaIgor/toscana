import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  isDarkMode: boolean;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isDarkMode }) => {
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
            {t('privacy.title')}
          </h1>
          
          <div className={`space-y-6 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('privacy.introduction')}
              </h2>
              <p className="mb-4">
                {t('privacy.introductionText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('privacy.dataCollection')}
              </h2>
              <p className="mb-4">
                {t('privacy.dataCollectionText')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacy.dataCollectionItem1')}</li>
                <li>{t('privacy.dataCollectionItem2')}</li>
                <li>{t('privacy.dataCollectionItem3')}</li>
                <li>{t('privacy.dataCollectionItem4')}</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('privacy.dataUsage')}
              </h2>
              <p className="mb-4">
                {t('privacy.dataUsageText')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacy.dataUsageItem1')}</li>
                <li>{t('privacy.dataUsageItem2')}</li>
                <li>{t('privacy.dataUsageItem3')}</li>
                <li>{t('privacy.dataUsageItem4')}</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('privacy.dataSharing')}
              </h2>
              <p className="mb-4">
                {t('privacy.dataSharingText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('privacy.dataSecurity')}
              </h2>
              <p className="mb-4">
                {t('privacy.dataSecurityText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('privacy.yourRights')}
              </h2>
              <p className="mb-4">
                {t('privacy.yourRightsText')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('privacy.yourRightsItem1')}</li>
                <li>{t('privacy.yourRightsItem2')}</li>
                <li>{t('privacy.yourRightsItem3')}</li>
                <li>{t('privacy.yourRightsItem4')}</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('privacy.changes')}
              </h2>
              <p className="mb-4">
                {t('privacy.changesText')}
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-stone-900'}`}>
                {t('privacy.contact')}
              </h2>
              <p className="mb-4">
                {t('privacy.contactText')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

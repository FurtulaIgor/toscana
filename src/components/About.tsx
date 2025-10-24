import React from 'react';
import { Heart, Users, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const { t } = useLanguage();

  return (
    <section 
      id="about" 
      className={`py-20 ${isDarkMode ? 'bg-stone-800' : 'bg-stone-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
              {t('about.passion.title')}
            </h3>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
              {t('about.description')}
            </p>
          </div>
          
          <div className="relative">
            <img
              src="/images/about/Toscana_apetit_bar20.jpg"
              alt="Alto Coffee ambijent"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Coffee className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-stone-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}>
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
              {t('about.roasted.title')}
            </h4>
            <p className={`${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
              {t('about.roasted.desc')}
            </p>
          </div>

          <div className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-stone-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}>
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
              {t('about.community.title')}
            </h4>
            <p className={`${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
              {t('about.community.desc')}
            </p>
          </div>

          <div className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-stone-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}>
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <h4 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
              {t('about.coworking.title')}
            </h4>
            <p className={`${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
              {t('about.coworking.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen }) => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-stone-900/95 backdrop-blur-sm border-b border-stone-700' 
        : 'bg-white/95 backdrop-blur-sm border-b border-stone-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo/Logo.webp"
              alt="Alto Coffee"
              className="h-14 md:h-16 w-auto object-contain"
            />
            <span className="sr-only">Toscana Apetit Bar</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`hover:text-amber-600 transition-colors ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-amber-600 transition-colors ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`hover:text-amber-600 transition-colors ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}
            >
              {t('nav.gallery')}
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className={`hover:text-amber-600 transition-colors ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}
            >
              {t('nav.locations')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-amber-600 transition-colors ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}
            >
              {t('nav.contact')}
            </button>
            <LanguageSelector isDarkMode={isDarkMode} />
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'text-amber-400 hover:bg-stone-800' 
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector isDarkMode={isDarkMode} />
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'text-amber-400 hover:bg-stone-800' 
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-stone-900' : 'bg-white'} border-t ${isDarkMode ? 'border-stone-700' : 'border-stone-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'hero', key: 'nav.home' },
                { id: 'about', key: 'nav.about' },
                { id: 'gallery', key: 'nav.gallery' },
                { id: 'locations', key: 'nav.locations' },
                { id: 'contact', key: 'nav.contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium transition-colors w-full text-left ${
                    isDarkMode 
                      ? 'text-stone-300 hover:text-amber-400 hover:bg-stone-800' 
                      : 'text-stone-600 hover:text-amber-600 hover:bg-stone-50'
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
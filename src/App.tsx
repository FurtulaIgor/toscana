import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/terms') {
        setCurrentPage('terms');
      } else if (path === '/privacy') {
        setCurrentPage('privacy');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial route
    handleRouteChange();

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsOfUse isDarkMode={isDarkMode} />;
      case 'privacy':
        return <PrivacyPolicy isDarkMode={isDarkMode} />;
      default:
        return (
          <>
            <Hero isDarkMode={isDarkMode} />
            <About isDarkMode={isDarkMode} />
            <Gallery isDarkMode={isDarkMode} />
            <Locations isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-stone-900' : 'bg-white'
      }`}>
        <Header 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {renderPage()}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </LanguageProvider>
  );
}

export default App;
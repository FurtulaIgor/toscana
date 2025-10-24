import React from 'react';
import { MapPin, Clock, Phone, Wifi } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LocationsProps {
  isDarkMode: boolean;
}

const Locations: React.FC<LocationsProps> = ({ isDarkMode }) => {
  const { t } = useLanguage();

  const locations = [
    {
      name: 'Toscana Apetit Bar',
      address: 'Trg Narodnog Fronta, 34000 Kragujevac, Srbija',
      phone: '+381 67 7 78 78 78',
      hours: 'Pon-Ned: 08:00 - 24:00',
      features: ['Terasa', 'Besplatan WiFi', 'Dostava'],
      image: '/images/locations/Toscana-centar'
    }
  ];

  return (
    <section 
      id="locations" 
      className={`py-20 ${isDarkMode ? 'bg-stone-800' : 'bg-stone-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
            {t('locations.title')}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            {t('locations.subtitle')}
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDarkMode ? 'bg-stone-900' : 'bg-white'
              }`}
            >
              <div className="relative h-48">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('locations.open')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                  {location.name}
                </h3>

                <div className={`space-y-3 mb-6 ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>{location.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-stone-800 text-stone-300' 
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => window.open('https://maps.app.goo.gl/15NkVZVfNJCSCTys8', '_blank')}
                  className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-medium transition-colors duration-300"
                >
                  {t('locations.viewMap')}
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className={`mt-16 text-center p-8 rounded-2xl ${isDarkMode ? 'bg-stone-900' : 'bg-white'} shadow-lg`}>
          <Wifi className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
            {t('locations.wifi.title')}
          </h3>
          <p className={`text-lg ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            {t('locations.wifi.desc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
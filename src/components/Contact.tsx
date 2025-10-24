import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${isDarkMode ? 'bg-stone-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
            {t('contact.title')}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
              {t('contact.info')}
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                    {t('contact.email')}
                  </h4>
                  <p className={`${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                    info@altocoffee.rs
                  </p>                  
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                    {t('contact.phone')}
                  </h4>
                  <p className={`${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                    +381 67 7 78 78 78
                  </p>                 
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                    {t('contact.address')}
                  </h4>
                  <p className={`${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                    Trg Narodnog Fronta<br />
                    34000 Kragujevac, Srbija
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-stone-800' : 'bg-stone-50'}`}>
              <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                {t('contact.hours')}
              </h4>
              <div className={`space-y-2 ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                <div className="flex justify-between">
                  <span>{t('contact.hours.weekdays')}</span>
                  <span>08:00 - 24:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.weekend')}</span>
                  <span>08:00 - 24:00</span>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-700/30">
                  <h5 className={`font-semibold mb-2 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                    {t('contact.breakfast.title')}
                  </h5>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekdays')}</span>
                    <span>08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekend')}</span>
                    <span>08:00 - 14:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-stone-800' : 'bg-stone-50'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
              {t('contact.form.title')}
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                  {t('contact.form.success.title')}
                </h4>
                <p className={`${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                  {t('contact.form.success.desc')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}
                    >
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        isDarkMode 
                          ? 'bg-stone-900 border-stone-700 text-stone-100' 
                          : 'bg-white border-stone-300 text-stone-900'
                      }`}
                      placeholder={t('contact.form.placeholders.name')}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}
                    >
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        isDarkMode 
                          ? 'bg-stone-900 border-stone-700 text-stone-100' 
                          : 'bg-white border-stone-300 text-stone-900'
                      }`}
                      placeholder={t('contact.form.placeholders.email')}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}
                  >
                    {t('contact.form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      isDarkMode 
                        ? 'bg-stone-900 border-stone-700 text-stone-100' 
                        : 'bg-white border-stone-300 text-stone-900'
                    }`}
                  >
                    <option value="">{t('contact.form.subjects.select')}</option>
                    <option value="general">{t('contact.form.subjects.general')}</option>
                    <option value="reservation">{t('contact.form.subjects.reservation')}</option>
                    <option value="feedback">{t('contact.form.subjects.feedback')}</option>
                    <option value="partnership">{t('contact.form.subjects.partnership')}</option>
                    <option value="other">{t('contact.form.subjects.other')}</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}
                  >
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                      isDarkMode 
                        ? 'bg-stone-900 border-stone-700 text-stone-100' 
                        : 'bg-white border-stone-300 text-stone-900'
                    }`}
                    placeholder={t('contact.form.placeholders.message')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('contact.form.send')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
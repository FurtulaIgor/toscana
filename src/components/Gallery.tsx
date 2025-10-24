import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GalleryProps {
  isDarkMode: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isDarkMode }) => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Generate gallery image URLs based on files in public/images/gallery
  // Filenames include a space before the parentheses, e.g. "Toscana_apetit_bar (1).jpg"
  const images = Array.from({ length: 19 }, (_, i) => ({
    url: `/images/gallery/Toscana_apetit_bar (${i + 1}).jpg`,
    alt: `Gallery image ${i + 1}`
  }));

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setSelectedImage(images[index].url);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex].url);
  };

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex].url);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage) {
        switch (event.key) {
          case 'Escape':
            closeImage();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextImage();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <section 
      id="gallery" 
      className={`py-20 ${isDarkMode ? 'bg-stone-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
            {t('gallery.title')}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
            {t('gallery.subtitle')}
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => openImage(index)}
            >
              <div className="relative aspect-square">
                <img
                  src={encodeURI(image.url)}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={closeImage}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
              onClick={closeImage}
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            {/* Next button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 text-white text-lg font-medium z-10">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Main image */}
            <img
              src={selectedImage ? encodeURI(selectedImage) : ''}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
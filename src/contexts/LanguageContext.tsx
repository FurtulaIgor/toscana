import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'sr' | 'en' | 'fr' | 'de' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  sr: {
    // Header
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.gallery': 'Galerija',
    'nav.locations': 'Lokacije',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.welcome': 'Dobrodošli u',
    'hero.brand': 'Toscana Apetit Bar',
    'hero.subtitle': 'Otkrijte savršenu kombinaciju izuzetne kafe, ukusnih kolača i inspirativnog coworking prostora u srcu grada',
    'hero.cta.visit': 'Posetite nas',
    'hero.cta.learn': 'Saznajte više',
    
    // About
  'about.title': 'Naša priča',
  'about.passion.title': 'Strast prema savršenoj kafi',
  'about.description': 'Porodični restoran koji odiše toplom atmosferom. Vrhunska usluga, uz odličan doručak i još bolju kafu. Nalazimo se na Trgu Narodnog Fronta, izuzetno mirnom delu grada, gde se pruža prelep pogled ka starom mostu i gradskoj fontani. Za Vaše mališane pripremili smo 100% prirodne sokove, kao i specijalne obroke samo za njih.',
  'about.passion.p2': '',
  'about.passion.p3': '',
    'about.roasted.title': 'Pečeno sa ljubavlju',
    'about.roasted.desc': 'Svako zrno kafe pečemo sa posebnom pažnjom, koristeći tradicionalne tehnike kombinovane sa modernim pristupom.',
    'about.community.title': 'Zajednica',
    'about.community.desc': 'Stvaramo prostor gde se povezuju ljudi, ideje i strasti. Ovde svaki gost postaje deo naše velike Toscana porodice.',
    'about.coworking.title': 'Coworking prostor',
    'about.coworking.desc': 'Besplatan WiFi, udobni stolovi i inspirativna atmosfera čine naše lokacije savršenim mestom za rad i kreativnost.',
    
    // Gallery
    'gallery.title': 'Galerija',
    'gallery.subtitle': 'Zavirite u naš svet - od savršeno pripremljene kafe do prijatnog ambijenta koji čini svaku posetu nezaboravnim',
    
    // Locations
    'locations.title': 'Naše lokacije',
    'locations.subtitle': 'Posetite nas na bilo kojoj od naših lokacija i uživajte u jedinstvenom iskustvu Toscana Apetit Bar zajednice',
    'locations.open': 'Otvoreno',
    'locations.viewMap': 'Pogledaj na mapi',
    'locations.wifi.title': 'Besplatan WiFi na svim lokacijama',
    'locations.wifi.desc': 'Radite, učite ili se jednostavno opustite uz brzu internetsku konekciju. Naš coworking prostor je otvoren za sve goste.',
    
    // Contact
    'contact.title': 'Kontaktirajte nas',
    'contact.subtitle': 'Imate pitanja, predloge ili želite da rezervišete prostor? Javite nam se - rado ćemo vam pomoći!',
    'contact.info': 'Informacije',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    'contact.address': 'Glavna lokacija',
    'contact.hours': 'Radno vreme',
    'contact.hours.weekdays': 'Ponedeljak - Petak',
    'contact.hours.weekend': 'Vikend',
  'contact.breakfast.title': 'Doručak',
    'contact.form.title': 'Pošaljite poruku',
    'contact.form.name': 'Ime i prezime',
    'contact.form.email': 'Email adresa',
    'contact.form.subject': 'Tema',
    'contact.form.message': 'Poruka',
    'contact.form.send': 'Pošaljite poruku',
    'contact.form.success.title': 'Poruka je poslana!',
    'contact.form.success.desc': 'Hvala vam na poruci. Odgovoriće vam u najkraćem mogućem roku.',
    'contact.form.placeholders.name': 'Unesite vaše ime',
    'contact.form.placeholders.email': 'vase.ime@email.com',
    'contact.form.placeholders.message': 'Unesite vašu poruku ovde...',
    'contact.form.subjects.select': 'Izaberite temu',
    'contact.form.subjects.general': 'Opšte pitanje',
    'contact.form.subjects.reservation': 'Rezervacija prostora',
    'contact.form.subjects.feedback': 'Povratne informacije',
    'contact.form.subjects.partnership': 'Partnerstvo',
    'contact.form.subjects.other': 'Ostalo',
    
    // Footer
    'footer.description': 'Otkrijte savršenu kombinaciju izuzetne kafe, kreativnosti i zajednice. Toscana Apetit Bar - vaš inspirativni prostor u srcu grada.',
    'footer.quickLinks': 'Brzi linkovi',
    'footer.contact': 'Kontakt',
    'footer.copyright': 'Sva prava zadržana.',
    'footer.terms': 'Uslovi korišćenja',
    'footer.privacy': 'Privatnost',
    
    // Terms of Use
    'terms.title': 'Uslovi korišćenja',
    'terms.acceptance': 'Prihvatanje uslova',
    'terms.acceptanceText': 'Korišćenjem naše web stranice pristajete na ove uslove korišćenja. Ako se ne slažete sa bilo kojim delom ovih uslova, molimo vas da ne koristite našu web stranicu.',
    'terms.useOfService': 'Korišćenje usluge',
    'terms.useOfServiceText': 'Naša web stranica služi za informisanje o našim uslugama i lokacijama. Zabranjeno je korišćenje stranice za bilo koju nezakonitu ili nedozvoljenu svrhu.',
    'terms.reservations': 'Rezervacije',
    'terms.reservationsText': 'Rezervacije se mogu obaviti putem kontakt forme ili direktno pozivom. Zadržavamo pravo da odbijemo rezervacije po našoj diskreciji.',
    'terms.liability': 'Odgovornost',
    'terms.liabilityText': 'Toscana Apetit Bar ne snosi odgovornost za bilo kakve direktne, indirektne, slučajne ili posledične štete koje mogu nastati korišćenjem naše web stranice.',
    'terms.changes': 'Izmene uslova',
    'terms.changesText': 'Zadržavamo pravo da menjamo ove uslove korišćenja u bilo kom trenutku bez prethodne obaveštenosti. Vaša nastavka korišćenja stranice predstavlja prihvatanje novih uslova.',
    'terms.contact': 'Kontakt',
    'terms.contactText': 'Za pitanja u vezi sa ovim uslovima korišćenja, molimo vas da nas kontaktirate na info@toscana-apetit-bar.rs ili pozovite +381 67 7 78 78 78.',
    
    // Privacy Policy
    'privacy.title': 'Politika privatnosti',
    'privacy.introduction': 'Uvod',
    'privacy.introductionText': 'Toscana Apetit Bar poštuje vašu privatnost i obavezuje se da štiti vaše lične podatke. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše informacije.',
    'privacy.dataCollection': 'Prikupljanje podataka',
    'privacy.dataCollectionText': 'Prikupljamo sledeće vrste podataka:',
    'privacy.dataCollectionItem1': 'Informacije koje nam direktno pružate kroz kontakt formu',
    'privacy.dataCollectionItem2': 'Informacije o vašoj poseti našoj web stranici',
    'privacy.dataCollectionItem3': 'Informacije o komunikaciji sa nama',
    'privacy.dataCollectionItem4': 'Rezervacije i preferencije usluga',
    'privacy.dataUsage': 'Korišćenje podataka',
    'privacy.dataUsageText': 'Vaše podatke koristimo za:',
    'privacy.dataUsageItem1': 'Obradu vaših zahteva i rezervacija',
    'privacy.dataUsageItem2': 'Poboljšanje kvaliteta naših usluga',
    'privacy.dataUsageItem3': 'Komunikaciju sa vama o našim uslugama',
    'privacy.dataUsageItem4': 'Poštovanje zakonskih obaveza',
    'privacy.dataSharing': 'Deljenje podataka',
    'privacy.dataSharingText': 'Vaše lične podatke ne prodajemo, ne iznajmljujemo niti delimo sa trećim stranama osim u slučajevima kada je to potrebno za pružanje usluga ili kada zahteva zakon.',
    'privacy.dataSecurity': 'Bezbednost podataka',
    'privacy.dataSecurityText': 'Primenjujemo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od neovlašćenog pristupa, izmene, otkrivanja ili uništenja.',
    'privacy.yourRights': 'Vaša prava',
    'privacy.yourRightsText': 'Imate pravo da:',
    'privacy.yourRightsItem1': 'Zatražite pristup vašim ličnim podacima',
    'privacy.yourRightsItem2': 'Zatražite ispravku netačnih podataka',
    'privacy.yourRightsItem3': 'Zatražite brisanje vaših podataka',
    'privacy.yourRightsItem4': 'Prigovorite na obradu vaših podataka',
    'privacy.changes': 'Izmene politike',
    'privacy.changesText': 'Ova politika privatnosti može biti ažurirana povremeno. Sve izmene će biti objavljene na ovoj stranici sa datumom poslednje izmene.',
    'privacy.contact': 'Kontakt',
    'privacy.contactText': 'Za pitanja u vezi sa ovom politikom privatnosti, molimo vas da nas kontaktirate na info@toscana-apetit-bar.rs ili pozovite +381 67 7 78 78 78.'
  },
  
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.locations': 'Locations',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.welcome': 'Welcome to',
    'hero.brand': 'Toscana Apetit Bar',
    'hero.subtitle': 'Discover the perfect combination of exceptional coffee, delicious pastries and inspiring coworking space in the heart of the city',
    'hero.cta.visit': 'Visit Us',
    'hero.cta.learn': 'Learn More',
    
    // About
    'about.title': 'Our Story',
    'about.passion.title': 'Passion for Perfect Coffee',
    'about.passion.p1': 'Toscana Apetit Bar was born from a simple idea - creating a space where quality coffee, creativity and community meet. Founded in 2018, our brand quickly became a favorite place for all coffee lovers looking for more than just a regular drink.',
    'about.description': 'A family restaurant that exudes a warm atmosphere. Top service, with an excellent breakfast and even better coffee. We are located at Trg Narodnog Fronta, an extremely quiet part of the city, offering a beautiful view towards the old bridge and the city fountain. For your little ones we have prepared 100% natural juices, as well as special meals just for them.',
    'about.passion.p2': '',
    'about.passion.p3': '',
    'about.roasted.title': 'Roasted with Love',
    'about.roasted.desc': 'We roast every coffee bean with special care, using traditional techniques combined with a modern approach.',
    'about.community.title': 'Community',
    'about.community.desc': 'We create a space where people, ideas and passions connect. Here every guest becomes part of our big Toscana family.',
    'about.coworking.title': 'Coworking Space',
    'about.coworking.desc': 'Free WiFi, comfortable tables and inspiring atmosphere make our locations the perfect place for work and creativity.',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Peek into our world - from perfectly prepared coffee to pleasant ambiance that makes every visit unforgettable',
    
    // Locations
    'locations.title': 'Our Locations',
    'locations.subtitle': 'Visit us at any of our locations and enjoy the unique Toscana Apetit Bar community experience',
    'locations.open': 'Open',
    'locations.viewMap': 'View on Map',
    'locations.wifi.title': 'Free WiFi at All Locations',
    'locations.wifi.desc': 'Work, study or simply relax with fast internet connection. Our coworking space is open to all guests.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions, suggestions or want to reserve space? Contact us - we\'ll be happy to help!',
    'contact.info': 'Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Main Location',
    'contact.hours': 'Working Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.weekend': 'Weekend',
  'contact.breakfast.title': 'Breakfast',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success.title': 'Message Sent!',
    'contact.form.success.desc': 'Thank you for your message. We will respond as soon as possible.',
    'contact.form.placeholders.name': 'Enter your name',
    'contact.form.placeholders.email': 'your.name@email.com',
    'contact.form.placeholders.message': 'Enter your message here...',
    'contact.form.subjects.select': 'Select subject',
    'contact.form.subjects.general': 'General Question',
    'contact.form.subjects.reservation': 'Space Reservation',
    'contact.form.subjects.feedback': 'Feedback',
    'contact.form.subjects.partnership': 'Partnership',
    'contact.form.subjects.other': 'Other',
    
    // Footer
    'footer.description': 'Discover the perfect combination of exceptional coffee, creativity and community. Toscana Apetit Bar - your inspiring space in the heart of the city.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy',
    
    // Terms of Use
    'terms.title': 'Terms of Use',
    'terms.acceptance': 'Acceptance of Terms',
    'terms.acceptanceText': 'By using our website, you agree to these terms of use. If you disagree with any part of these terms, please do not use our website.',
    'terms.useOfService': 'Use of Service',
    'terms.useOfServiceText': 'Our website serves to inform about our services and locations. It is prohibited to use the site for any unlawful or unauthorized purpose.',
    'terms.reservations': 'Reservations',
    'terms.reservationsText': 'Reservations can be made through the contact form or by direct phone call. We reserve the right to refuse reservations at our discretion.',
    'terms.liability': 'Liability',
    'terms.liabilityText': 'Toscana Apetit Bar is not liable for any direct, indirect, incidental or consequential damages that may arise from the use of our website.',
    'terms.changes': 'Changes to Terms',
    'terms.changesText': 'We reserve the right to modify these terms of use at any time without prior notice. Your continued use of the site constitutes acceptance of the new terms.',
    'terms.contact': 'Contact',
    'terms.contactText': 'For questions regarding these terms of use, please contact us at info@toscana-apetit-bar.rs or call +381 67 7 78 78 78.',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.introduction': 'Introduction',
    'privacy.introductionText': 'Toscana Apetit Bar respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use and protect your information.',
    'privacy.dataCollection': 'Data Collection',
    'privacy.dataCollectionText': 'We collect the following types of data:',
    'privacy.dataCollectionItem1': 'Information you directly provide through our contact form',
    'privacy.dataCollectionItem2': 'Information about your visit to our website',
    'privacy.dataCollectionItem3': 'Information about communication with us',
    'privacy.dataCollectionItem4': 'Reservations and service preferences',
    'privacy.dataUsage': 'Data Usage',
    'privacy.dataUsageText': 'We use your data for:',
    'privacy.dataUsageItem1': 'Processing your requests and reservations',
    'privacy.dataUsageItem2': 'Improving the quality of our services',
    'privacy.dataUsageItem3': 'Communicating with you about our services',
    'privacy.dataUsageItem4': 'Complying with legal obligations',
    'privacy.dataSharing': 'Data Sharing',
    'privacy.dataSharingText': 'We do not sell, rent or share your personal data with third parties except when necessary to provide services or when required by law.',
    'privacy.dataSecurity': 'Data Security',
    'privacy.dataSecurityText': 'We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure or destruction.',
    'privacy.yourRights': 'Your Rights',
    'privacy.yourRightsText': 'You have the right to:',
    'privacy.yourRightsItem1': 'Request access to your personal data',
    'privacy.yourRightsItem2': 'Request correction of inaccurate data',
    'privacy.yourRightsItem3': 'Request deletion of your data',
    'privacy.yourRightsItem4': 'Object to processing of your data',
    'privacy.changes': 'Policy Changes',
    'privacy.changesText': 'This privacy policy may be updated periodically. All changes will be published on this page with the date of the last update.',
    'privacy.contact': 'Contact',
    'privacy.contactText': 'For questions regarding this privacy policy, please contact us at info@toscana-apetit-bar.rs or call +381 67 7 78 78 78.'
  },
  
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.gallery': 'Galerie',
    'nav.locations': 'Emplacements',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.welcome': 'Bienvenue chez',
    'hero.brand': 'Toscana Apetit Bar',
    'hero.subtitle': 'Découvrez la combinaison parfaite d\'un café exceptionnel, de délicieuses pâtisseries et d\'un espace de coworking inspirant au cœur de la ville',
    'hero.cta.visit': 'Visitez-nous',
    'hero.cta.learn': 'En savoir plus',
    
    // About
    'about.title': 'Notre Histoire',
    'about.passion.title': 'Passion pour le Café Parfait',
    'about.passion.p1': 'Toscana Apetit Bar est né d\'une idée simple - créer un espace où se rencontrent café de qualité, créativité et communauté. Fondée en 2018, notre marque est rapidement devenue un lieu de prédilection pour tous les amateurs de café qui cherchent plus qu\'une simple boisson.',
    'about.description': 'Un restaurant familial qui dégage une atmosphère chaleureuse. Un service de première qualité, avec un excellent petit-déjeuner et un café encore meilleur. Nous sommes situés sur la place Trg Narodnog Fronta, une partie très calme de la ville, offrant une belle vue sur le vieux pont et la fontaine de la ville. Pour vos petits, nous avons préparé des jus 100% naturels, ainsi que des repas spéciaux rien que pour eux.',
    'about.passion.p2': 'Nous croyons que chaque tasse de café doit être une expérience - des grains torréfiés que nous sélectionnons soigneusement dans les meilleures plantations du monde, à l\'ambiance qui inspire le travail et la socialisation.',
    'about.passion.p3': 'Nos espaces sont conçus comme une oasis moderne dans l\'agitation urbaine, où vous pouvez profiter d\'un moment paisible avec un café ou travailler de manière productive dans un environnement inspirant.',
    'about.roasted.title': 'Torréfié avec Amour',
    'about.roasted.desc': 'Nous torréfions chaque grain de café avec un soin particulier, en utilisant des techniques traditionnelles combinées à une approche moderne.',
    'about.community.title': 'Communauté',
    'about.community.desc': 'Nous créons un espace où les gens, les idées et les passions se connectent. Ici, chaque invité devient partie de notre grande famille Toscana.',
    'about.coworking.title': 'Espace de Coworking',
    'about.coworking.desc': 'WiFi gratuit, tables confortables et atmosphère inspirante font de nos emplacements l\'endroit parfait pour le travail et la créativité.',
    
    // Gallery
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Jetez un coup d\'œil dans notre monde - du café parfaitement préparé à l\'ambiance agréable qui rend chaque visite inoubliable',
    
    // Locations
    'locations.title': 'Nos Emplacements',
    'locations.subtitle': 'Visitez-nous dans n\'importe lequel de nos emplacements et profitez de l\'expérience unique de la communauté Toscana Apetit Bar',
    'locations.open': 'Ouvert',
    'locations.viewMap': 'Voir sur la carte',
    'locations.wifi.title': 'WiFi Gratuit dans Tous les Emplacements',
    'locations.wifi.desc': 'Travaillez, étudiez ou détendez-vous simplement avec une connexion Internet rapide. Notre espace de coworking est ouvert à tous les invités.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Vous avez des questions, des suggestions ou souhaitez réserver un espace ? Contactez-nous - nous serons heureux de vous aider !',
    'contact.info': 'Informations',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Emplacement Principal',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.hours.weekdays': 'Lundi - Vendredi',
    'contact.hours.weekend': 'Week-end',
  'contact.breakfast.title': 'Petit-déjeuner',
    'contact.form.title': 'Envoyer un Message',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.success.title': 'Message Envoyé !',
    'contact.form.success.desc': 'Merci pour votre message. Nous répondrons dès que possible.',
    'contact.form.placeholders.name': 'Entrez votre nom',
    'contact.form.placeholders.email': 'votre.nom@email.com',
    'contact.form.placeholders.message': 'Entrez votre message ici...',
    'contact.form.subjects.select': 'Sélectionner le sujet',
    'contact.form.subjects.general': 'Question Générale',
    'contact.form.subjects.reservation': 'Réservation d\'Espace',
    'contact.form.subjects.feedback': 'Commentaires',
    'contact.form.subjects.partnership': 'Partenariat',
    'contact.form.subjects.other': 'Autre',
    
    // Footer
    'footer.description': 'Découvrez la combinaison parfaite d\'un café exceptionnel, de créativité et de communauté. Toscana Apetit Bar - votre espace inspirant au cœur de la ville.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.copyright': 'Tous droits réservés.',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.privacy': 'Confidentialité',
    
    // Terms of Use
    'terms.title': 'Conditions d\'Utilisation',
    'terms.acceptance': 'Acceptation des Conditions',
    'terms.acceptanceText': 'En utilisant notre site web, vous acceptez ces conditions d\'utilisation. Si vous n\'êtes pas d\'accord avec une partie de ces conditions, veuillez ne pas utiliser notre site web.',
    'terms.useOfService': 'Utilisation du Service',
    'terms.useOfServiceText': 'Notre site web sert à informer sur nos services et emplacements. Il est interdit d\'utiliser le site à des fins illégales ou non autorisées.',
    'terms.reservations': 'Réservations',
    'terms.reservationsText': 'Les réservations peuvent être effectuées via le formulaire de contact ou par appel téléphonique direct. Nous nous réservons le droit de refuser les réservations à notre discrétion.',
    'terms.liability': 'Responsabilité',
    'terms.liabilityText': 'Toscana Apetit Bar n\'est pas responsable de tout dommage direct, indirect, fortuit ou consécutif qui pourrait résulter de l\'utilisation de notre site web.',
    'terms.changes': 'Modifications des Conditions',
    'terms.changesText': 'Nous nous réservons le droit de modifier ces conditions d\'utilisation à tout moment sans préavis. Votre utilisation continue du site constitue une acceptation des nouvelles conditions.',
    'terms.contact': 'Contact',
    'terms.contactText': 'Pour des questions concernant ces conditions d\'utilisation, veuillez nous contacter à info@toscana-apetit-bar.rs ou appeler +381 67 7 78 78 78.',
    
    // Privacy Policy
    'privacy.title': 'Politique de Confidentialité',
    'privacy.introduction': 'Introduction',
    'privacy.introductionText': 'Toscana Apetit Bar respecte votre vie privée et s\'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.',
    'privacy.dataCollection': 'Collecte de Données',
    'privacy.dataCollectionText': 'Nous collectons les types de données suivants :',
    'privacy.dataCollectionItem1': 'Informations que vous nous fournissez directement via notre formulaire de contact',
    'privacy.dataCollectionItem2': 'Informations sur votre visite à notre site web',
    'privacy.dataCollectionItem3': 'Informations sur la communication avec nous',
    'privacy.dataCollectionItem4': 'Réservations et préférences de service',
    'privacy.dataUsage': 'Utilisation des Données',
    'privacy.dataUsageText': 'Nous utilisons vos données pour :',
    'privacy.dataUsageItem1': 'Traiter vos demandes et réservations',
    'privacy.dataUsageItem2': 'Améliorer la qualité de nos services',
    'privacy.dataUsageItem3': 'Communiquer avec vous sur nos services',
    'privacy.dataUsageItem4': 'Respecter les obligations légales',
    'privacy.dataSharing': 'Partage des Données',
    'privacy.dataSharingText': 'Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf lorsque c\'est nécessaire pour fournir des services ou lorsque la loi l\'exige.',
    'privacy.dataSecurity': 'Sécurité des Données',
    'privacy.dataSecurityText': 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l\'accès non autorisé, l\'altération, la divulgation ou la destruction.',
    'privacy.yourRights': 'Vos Droits',
    'privacy.yourRightsText': 'Vous avez le droit de :',
    'privacy.yourRightsItem1': 'Demander l\'accès à vos données personnelles',
    'privacy.yourRightsItem2': 'Demander la correction de données inexactes',
    'privacy.yourRightsItem3': 'Demander la suppression de vos données',
    'privacy.yourRightsItem4': 'Vous opposer au traitement de vos données',
    'privacy.changes': 'Modifications de la Politique',
    'privacy.changesText': 'Cette politique de confidentialité peut être mise à jour périodiquement. Toutes les modifications seront publiées sur cette page avec la date de la dernière mise à jour.',
    'privacy.contact': 'Contact',
    'privacy.contactText': 'Pour des questions concernant cette politique de confidentialité, veuillez nous contacter à info@toscana-apetit-bar.rs ou appeler +381 67 7 78 78 78.'
  },
  
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.gallery': 'Galerie',
    'nav.locations': 'Standorte',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.welcome': 'Willkommen bei',
    'hero.brand': 'Toscana Apetit Bar',
    'hero.subtitle': 'Entdecken Sie die perfekte Kombination aus außergewöhnlichem Kaffee, köstlichem Gebäck und inspirierendem Coworking-Space im Herzen der Stadt',
    'hero.cta.visit': 'Besuchen Sie uns',
    'hero.cta.learn': 'Mehr erfahren',
    
    // About
    'about.title': 'Unsere Geschichte',
    'about.passion.title': 'Leidenschaft für Perfekten Kaffee',
    'about.passion.p1': 'Toscana Apetit Bar entstand aus einer einfachen Idee - einen Raum zu schaffen, wo sich Qualitätskaffee, Kreativität und Gemeinschaft treffen. 2018 gegründet, wurde unsere Marke schnell zu einem Lieblingsort für alle Kaffeeliebhaber, die mehr als nur ein gewöhnliches Getränk suchen.',
    'about.description': 'Ein Familienrestaurant, das eine warme Atmosphäre ausstrahlt. Erstklassiger Service, mit einem ausgezeichneten Frühstück und noch besserem Kaffee. Wir befinden uns am Trg Narodnog Fronta, in einem äußerst ruhigen Teil der Stadt, mit einem schönen Blick auf die alte Brücke und den Stadtbrunnen. Für Ihre Kleinen haben wir 100% natürliche Säfte sowie spezielle Mahlzeiten nur für sie vorbereitet.',
    'about.passion.p2': 'Wir glauben, dass jede Tasse Kaffee ein Erlebnis sein sollte - von den gerösteten Bohnen, die wir sorgfältig aus den besten Plantagen der Welt auswählen, bis hin zum Ambiente, das zu Arbeit und Geselligkeit inspiriert.',
    'about.passion.p3': 'Unsere Räume sind als moderne Oase im städtischen Trubel konzipiert, wo Sie einen ruhigen Moment mit Kaffee genießen oder produktiv in einer inspirierenden Umgebung arbeiten können.',
    'about.roasted.title': 'Mit Liebe Geröstet',
    'about.roasted.desc': 'Wir rösten jede Kaffeebohne mit besonderer Sorgfalt und verwenden traditionelle Techniken kombiniert mit einem modernen Ansatz.',
    'about.community.title': 'Gemeinschaft',
    'about.community.desc': 'Wir schaffen einen Raum, wo Menschen, Ideen und Leidenschaften sich verbinden. Hier wird jeder Gast Teil unserer großen Toscana-Familie.',
    'about.coworking.title': 'Coworking-Space',
    'about.coworking.desc': 'Kostenloses WLAN, bequeme Tische und inspirierende Atmosphäre machen unsere Standorte zum perfekten Ort für Arbeit und Kreativität.',
    
    // Gallery
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Werfen Sie einen Blick in unsere Welt - von perfekt zubereitetem Kaffee bis hin zum angenehmen Ambiente, das jeden Besuch unvergesslich macht',
    
    // Locations
    'locations.title': 'Unsere Standorte',
    'locations.subtitle': 'Besuchen Sie uns an einem unserer Standorte und genießen Sie das einzigartige Toscana Apetit Bar Gemeinschaftserlebnis',
    'locations.open': 'Geöffnet',
    'locations.viewMap': 'Auf Karte anzeigen',
    'locations.wifi.title': 'Kostenloses WLAN an Allen Standorten',
    'locations.wifi.desc': 'Arbeiten, lernen oder entspannen Sie einfach mit schneller Internetverbindung. Unser Coworking-Space steht allen Gästen offen.',
    
    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Haben Sie Fragen, Vorschläge oder möchten einen Platz reservieren? Kontaktieren Sie uns - wir helfen gerne!',
    'contact.info': 'Informationen',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.address': 'Hauptstandort',
    'contact.hours': 'Öffnungszeiten',
    'contact.hours.weekdays': 'Montag - Freitag',
    'contact.hours.weekend': 'Wochenende',
  'contact.breakfast.title': 'Frühstück',
    'contact.form.title': 'Nachricht Senden',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht Senden',
    'contact.form.success.title': 'Nachricht Gesendet!',
    'contact.form.success.desc': 'Vielen Dank für Ihre Nachricht. Wir werden so schnell wie möglich antworten.',
    'contact.form.placeholders.name': 'Geben Sie Ihren Namen ein',
    'contact.form.placeholders.email': 'ihr.name@email.com',
    'contact.form.placeholders.message': 'Geben Sie hier Ihre Nachricht ein...',
    'contact.form.subjects.select': 'Betreff auswählen',
    'contact.form.subjects.general': 'Allgemeine Frage',
    'contact.form.subjects.reservation': 'Platzreservierung',
    'contact.form.subjects.feedback': 'Feedback',
    'contact.form.subjects.partnership': 'Partnerschaft',
    'contact.form.subjects.other': 'Andere',
    
    // Footer
    'footer.description': 'Entdecken Sie die perfekte Kombination aus außergewöhnlichem Kaffee, Kreativität und Gemeinschaft. Toscana Apetit Bar - Ihr inspirierender Raum im Herzen der Stadt.',
    'footer.quickLinks': 'Schnelle Links',
    'footer.contact': 'Kontakt',
    'footer.copyright': 'Alle Rechte vorbehalten.',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.privacy': 'Datenschutz',
    
    // Terms of Use
    'terms.title': 'Nutzungsbedingungen',
    'terms.acceptance': 'Annahme der Bedingungen',
    'terms.acceptanceText': 'Durch die Nutzung unserer Website stimmen Sie diesen Nutzungsbedingungen zu. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, verwenden Sie bitte unsere Website nicht.',
    'terms.useOfService': 'Nutzung des Dienstes',
    'terms.useOfServiceText': 'Unsere Website dient der Information über unsere Dienstleistungen und Standorte. Es ist verboten, die Website für illegale oder nicht autorisierte Zwecke zu nutzen.',
    'terms.reservations': 'Reservierungen',
    'terms.reservationsText': 'Reservierungen können über das Kontaktformular oder durch direkten Anruf vorgenommen werden. Wir behalten uns das Recht vor, Reservierungen nach unserem Ermessen abzulehnen.',
    'terms.liability': 'Haftung',
    'terms.liabilityText': 'Toscana Apetit Bar haftet nicht für direkte, indirekte, zufällige oder Folgeschäden, die aus der Nutzung unserer Website entstehen können.',
    'terms.changes': 'Änderungen der Bedingungen',
    'terms.changesText': 'Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit ohne Vorankündigung zu ändern. Ihre fortgesetzte Nutzung der Website stellt eine Annahme der neuen Bedingungen dar.',
    'terms.contact': 'Kontakt',
    'terms.contactText': 'Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter info@toscana-apetit-bar.rs oder rufen Sie +381 67 7 78 78 78 an.',
    
    // Privacy Policy
    'privacy.title': 'Datenschutzerklärung',
    'privacy.introduction': 'Einführung',
    'privacy.introductionText': 'Toscana Apetit Bar respektiert Ihre Privatsphäre und verpflichtet sich, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen.',
    'privacy.dataCollection': 'Datensammlung',
    'privacy.dataCollectionText': 'Wir sammeln folgende Arten von Daten:',
    'privacy.dataCollectionItem1': 'Informationen, die Sie uns direkt über unser Kontaktformular zur Verfügung stellen',
    'privacy.dataCollectionItem2': 'Informationen über Ihren Besuch auf unserer Website',
    'privacy.dataCollectionItem3': 'Informationen über die Kommunikation mit uns',
    'privacy.dataCollectionItem4': 'Reservierungen und Servicepräferenzen',
    'privacy.dataUsage': 'Datennutzung',
    'privacy.dataUsageText': 'Wir verwenden Ihre Daten für:',
    'privacy.dataUsageItem1': 'Bearbeitung Ihrer Anfragen und Reservierungen',
    'privacy.dataUsageItem2': 'Verbesserung der Qualität unserer Dienstleistungen',
    'privacy.dataUsageItem3': 'Kommunikation mit Ihnen über unsere Dienstleistungen',
    'privacy.dataUsageItem4': 'Einhaltung rechtlicher Verpflichtungen',
    'privacy.dataSharing': 'Datenaustausch',
    'privacy.dataSharingText': 'Wir verkaufen, vermieten oder teilen Ihre persönlichen Daten nicht mit Dritten, außer wenn es notwendig ist, um Dienstleistungen zu erbringen oder wenn es das Gesetz erfordert.',
    'privacy.dataSecurity': 'Datensicherheit',
    'privacy.dataSecurityText': 'Wir implementieren angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer persönlichen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung.',
    'privacy.yourRights': 'Ihre Rechte',
    'privacy.yourRightsText': 'Sie haben das Recht:',
    'privacy.yourRightsItem1': 'Zugang zu Ihren persönlichen Daten zu verlangen',
    'privacy.yourRightsItem2': 'Korrektur ungenauer Daten zu verlangen',
    'privacy.yourRightsItem3': 'Löschung Ihrer Daten zu verlangen',
    'privacy.yourRightsItem4': 'Der Verarbeitung Ihrer Daten zu widersprechen',
    'privacy.changes': 'Änderungen der Richtlinie',
    'privacy.changesText': 'Diese Datenschutzerklärung kann regelmäßig aktualisiert werden. Alle Änderungen werden auf dieser Seite mit dem Datum der letzten Aktualisierung veröffentlicht.',
    'privacy.contact': 'Kontakt',
    'privacy.contactText': 'Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns bitte unter info@toscana-apetit-bar.rs oder rufen Sie +381 67 7 78 78 78 an.'
  },
  
  it: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Chi siamo',
    'nav.gallery': 'Galleria',
    'nav.locations': 'Sedi',
    'nav.contact': 'Contatto',
    
    // Hero
    'hero.welcome': 'Benvenuti da',
    'hero.brand': 'Toscana Apetit Bar',
    'hero.subtitle': 'Scoprite la combinazione perfetta di caffè eccezionale, dolci deliziosi e spazio coworking ispirante nel cuore della città',
    'hero.cta.visit': 'Visitateci',
    'hero.cta.learn': 'Scopri di più',
    
    // About
    'about.title': 'La Nostra Storia',
    'about.passion.title': 'Passione per il Caffè Perfetto',
    'about.passion.p1': 'Toscana Apetit Bar è nato da un\'idea semplice - creare uno spazio dove si incontrano caffè di qualità, creatività e comunità. Fondato nel 2018, il nostro marchio è rapidamente diventato un luogo preferito per tutti gli amanti del caffè che cercano più di una semplice bevanda.',
    'about.description': 'Un ristorante di famiglia che emana un\'atmosfera calda. Servizio di Toscana livello, con un\'ottima colazione e un caffè ancora migliore. Siamo situati in Trg Narodnog Fronta, una zona estremamente tranquilla della città, che offre una splendida vista verso il vecchio ponte e la fontana della città. Per i vostri piccini abbiamo preparato succhi 100% naturali, nonché pasti speciali solo per loro.',
    'about.passion.p2': 'Crediamo che ogni tazza di caffè debba essere un\'esperienza - dai chicchi tostati che selezioniamo attentamente dalle migliori piantagioni del mondo, all\'ambiente che ispira lavoro e socializzazione.',
    'about.passion.p3': 'I nostri spazi sono progettati come un\'oasi moderna nel trambusto urbano, dove potete godervi un momento tranquillo con il caffè o lavorare produttivamente in un ambiente ispirante.',
    'about.roasted.title': 'Tostato con Amore',
    'about.roasted.desc': 'Tostiamo ogni chicco di caffè con particolare cura, utilizzando tecniche tradizionali combinate con un approccio moderno.',
    'about.community.title': 'Comunità',
    'about.community.desc': 'Creiamo uno spazio dove persone, idee e passioni si connettono. Qui ogni ospite diventa parte della nostra grande famiglia Toscana.',
    'about.coworking.title': 'Spazio Coworking',
    'about.coworking.desc': 'WiFi gratuito, tavoli comodi e atmosfera ispirante rendono le nostre sedi il luogo perfetto per lavoro e creatività.',
    
    // Gallery
    'gallery.title': 'Galleria',
    'gallery.subtitle': 'Date un\'occhiata al nostro mondo - dal caffè perfettamente preparato all\'ambiente piacevole che rende ogni visita indimenticabile',
    
    // Locations
    'locations.title': 'Le Nostre Sedi',
    'locations.subtitle': 'Visitateci in qualsiasi delle nostre sedi e godetevi l\'esperienza unica della comunità Toscana Apetit Bar',
    'locations.open': 'Aperto',
    'locations.viewMap': 'Visualizza sulla mappa',
    'locations.wifi.title': 'WiFi Gratuito in Tutte le Sedi',
    'locations.wifi.desc': 'Lavorate, studiate o semplicemente rilassatevi con una connessione internet veloce. Il nostro spazio coworking è aperto a tutti gli ospiti.',
    
    // Contact
    'contact.title': 'Contattateci',
    'contact.subtitle': 'Avete domande, suggerimenti o volete prenotare uno spazio? Contattateci - saremo felici di aiutarvi!',
    'contact.info': 'Informazioni',
    'contact.email': 'Email',
    'contact.phone': 'Telefono',
    'contact.address': 'Sede Principale',
    'contact.hours': 'Orari di Apertura',
    'contact.hours.weekdays': 'Lunedì - Venerdì',
    'contact.hours.weekend': 'Weekend',
  'contact.breakfast.title': 'Colazione',
    'contact.form.title': 'Invia Messaggio',
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'Indirizzo Email',
    'contact.form.subject': 'Oggetto',
    'contact.form.message': 'Messaggio',
    'contact.form.send': 'Invia Messaggio',
    'contact.form.success.title': 'Messaggio Inviato!',
    'contact.form.success.desc': 'Grazie per il vostro messaggio. Risponderemo il prima possibile.',
    'contact.form.placeholders.name': 'Inserite il vostro nome',
    'contact.form.placeholders.email': 'vostro.nome@email.com',
    'contact.form.placeholders.message': 'Inserite qui il vostro messaggio...',
    'contact.form.subjects.select': 'Seleziona oggetto',
    'contact.form.subjects.general': 'Domanda Generale',
    'contact.form.subjects.reservation': 'Prenotazione Spazio',
    'contact.form.subjects.feedback': 'Feedback',
    'contact.form.subjects.partnership': 'Partnership',
    'contact.form.subjects.other': 'Altro',
    
    // Footer
    'footer.description': 'Scoprite la combinazione perfetta di caffè eccezionale, creatività e comunità. Toscana Apetit Bar - il vostro spazio ispirante nel cuore della città.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.contact': 'Contatto',
    'footer.copyright': 'Tutti i diritti riservati.',
    'footer.terms': 'Termini di Utilizzo',
    'footer.privacy': 'Privacy',
    
    // Terms of Use
    'terms.title': 'Termini di Utilizzo',
    'terms.acceptance': 'Accettazione dei Termini',
    'terms.acceptanceText': 'Utilizzando il nostro sito web, accettate questi termini di utilizzo. Se non siete d\'accordo con una parte di questi termini, vi preghiamo di non utilizzare il nostro sito web.',
    'terms.useOfService': 'Utilizzo del Servizio',
    'terms.useOfServiceText': 'Il nostro sito web serve per informare sui nostri servizi e sedi. È vietato utilizzare il sito per scopi illegali o non autorizzati.',
    'terms.reservations': 'Prenotazioni',
    'terms.reservationsText': 'Le prenotazioni possono essere effettuate tramite il modulo di contatto o chiamando direttamente. Ci riserviamo il diritto di rifiutare prenotazioni a nostra discrezione.',
    'terms.liability': 'Responsabilità',
    'terms.liabilityText': 'Toscana Apetit Bar non è responsabile per danni diretti, indiretti, casuali o consequenziali che possano derivare dall\'utilizzo del nostro sito web.',
    'terms.changes': 'Modifiche ai Termini',
    'terms.changesText': 'Ci riserviamo il diritto di modificare questi termini di utilizzo in qualsiasi momento senza preavviso. Il vostro continuo utilizzo del sito costituisce accettazione dei nuovi termini.',
    'terms.contact': 'Contatto',
    'terms.contactText': 'Per domande riguardo a questi termini di utilizzo, vi preghiamo di contattarci a info@toscana-apetit-bar.rs o chiamare +381 67 7 78 78 78.',
    
    // Privacy Policy
    'privacy.title': 'Informativa sulla Privacy',
    'privacy.introduction': 'Introduzione',
    'privacy.introductionText': 'Toscana Apetit Bar rispetta la vostra privacy e si impegna a proteggere i vostri dati personali. Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo le vostre informazioni.',
    'privacy.dataCollection': 'Raccolta Dati',
    'privacy.dataCollectionText': 'Raccogliamo i seguenti tipi di dati:',
    'privacy.dataCollectionItem1': 'Informazioni che ci fornite direttamente tramite il nostro modulo di contatto',
    'privacy.dataCollectionItem2': 'Informazioni sulla vostra visita al nostro sito web',
    'privacy.dataCollectionItem3': 'Informazioni sulla comunicazione con noi',
    'privacy.dataCollectionItem4': 'Prenotazioni e preferenze di servizio',
    'privacy.dataUsage': 'Utilizzo dei Dati',
    'privacy.dataUsageText': 'Utilizziamo i vostri dati per:',
    'privacy.dataUsageItem1': 'Elaborare le vostre richieste e prenotazioni',
    'privacy.dataUsageItem2': 'Migliorare la qualità dei nostri servizi',
    'privacy.dataUsageItem3': 'Comunicare con voi sui nostri servizi',
    'privacy.dataUsageItem4': 'Rispettare gli obblighi legali',
    'privacy.dataSharing': 'Condivisione Dati',
    'privacy.dataSharingText': 'Non vendiamo, affittiamo o condividiamo i vostri dati personali con terze parti, tranne quando necessario per fornire servizi o quando richiesto dalla legge.',
    'privacy.dataSecurity': 'Sicurezza Dati',
    'privacy.dataSecurityText': 'Implementiamo misure tecniche e organizzative appropriate per proteggere i vostri dati personali da accessi non autorizzati, alterazioni, divulgazioni o distruzioni.',
    'privacy.yourRights': 'I Vostri Diritti',
    'privacy.yourRightsText': 'Avete il diritto di:',
    'privacy.yourRightsItem1': 'Richiedere l\'accesso ai vostri dati personali',
    'privacy.yourRightsItem2': 'Richiedere la correzione di dati inesatti',
    'privacy.yourRightsItem3': 'Richiedere la cancellazione dei vostri dati',
    'privacy.yourRightsItem4': 'Opporvi al trattamento dei vostri dati',
    'privacy.changes': 'Modifiche alla Politica',
    'privacy.changesText': 'Questa informativa sulla privacy può essere aggiornata periodicamente. Tutte le modifiche saranno pubblicate su questa pagina con la data dell\'ultimo aggiornamento.',
    'privacy.contact': 'Contatto',
    'privacy.contactText': 'Per domande riguardo a questa informativa sulla privacy, vi preghiamo di contattarci a info@toscana-apetit-bar.rs o chiamare +381 67 7 78 78 78.'
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update document language
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
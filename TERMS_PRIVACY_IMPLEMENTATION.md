# Implementacija Terms of Use i Privacy Policy

## Pregled
Implementirane su stranice za Uslove korišćenja (Terms of Use) i Politiku privatnosti (Privacy Policy) za Toscana Apetit Bar web sajt.

## Kreirane komponente

### 1. TermsOfUse.tsx
- Komponenta za prikaz uslova korišćenja
- Podržava dark/light mode
- Ima dugme za povratak na glavnu stranicu
- Koristi prevode iz LanguageContext-a

### 2. PrivacyPolicy.tsx
- Komponenta za prikaz politike privatnosti
- Podržava dark/light mode
- Ima dugme za povratak na glavnu stranicu
- Koristi prevode iz LanguageContext-a

## Prošireni LanguageContext
Dodani su prevodi za Terms of Use i Privacy Policy na svih 5 jezika:
- Srpski (sr)
- Engleski (en)
- Francuski (fr)
- Nemački (de)
- Italijanski (it)

### Dodani ključevi za Terms of Use:
- `terms.title`
- `terms.acceptance`
- `terms.acceptanceText`
- `terms.useOfService`
- `terms.useOfServiceText`
- `terms.reservations`
- `terms.reservationsText`
- `terms.liability`
- `terms.liabilityText`
- `terms.changes`
- `terms.changesText`
- `terms.contact`
- `terms.contactText`

### Dodani ključevi za Privacy Policy:
- `privacy.title`
- `privacy.introduction`
- `privacy.introductionText`
- `privacy.dataCollection`
- `privacy.dataCollectionText`
- `privacy.dataCollectionItem1-4`
- `privacy.dataUsage`
- `privacy.dataUsageText`
- `privacy.dataUsageItem1-4`
- `privacy.dataSharing`
- `privacy.dataSharingText`
- `privacy.dataSecurity`
- `privacy.dataSecurityText`
- `privacy.yourRights`
- `privacy.yourRightsText`
- `privacy.yourRightsItem1-4`
- `privacy.changes`
- `privacy.changesText`
- `privacy.contact`
- `privacy.contactText`

## Ažuriran App.tsx
- Dodana logika za rute
- Podržava obične rute (/terms, /privacy)
- Renderuje odgovarajuće komponente na osnovu trenutne rute
- Dodao event listener za promene ruta

## Ažuriran Footer.tsx
- Linkovi za Terms of Use i Privacy Policy sada vode na odgovarajuće stranice
- Koriste obične rute (/terms, /privacy)

## Kreirani HTML fajlovi
- `public/terms.html` - redirect na /terms
- `public/privacy.html` - redirect na /privacy

## Korišćene rute
- `/terms` - Terms of Use stranica
- `/privacy` - Privacy Policy stranica
- `/` - Glavna stranica

## Funkcionalnosti
1. **Multilingvalna podrška** - Svi sadržaji su prevedeni na 5 jezika
2. **Dark/Light mode** - Komponente prate trenutni mod sajta
3. **Responsive dizajn** - Stranice su prilagođene svim uređajima
4. **Navigacija** - Dugmad za povratak na glavnu stranicu
5. **Obične rute** - Jednostavna implementacija ruta bez potrebe za React Router

## Sadržaj
### Terms of Use pokriva:
- Prihvatanje uslova
- Korišćenje usluge
- Rezervacije
- Odgovornost
- Izmene uslova
- Kontakt informacije

### Privacy Policy pokriva:
- Uvod
- Prikupljanje podataka
- Korišćenje podataka
- Deljenje podataka
- Bezbednost podataka
- Korisnička prava
- Izmene politike
- Kontakt informacije

## Testiranje
Za testiranje:
1. Otvorite sajt
2. Idite na dno stranice u footer
3. Kliknite na "Uslovi korišćenja" ili "Privatnost"
4. Proverite da se stranica učitava ispravno
5. Testirajte dugme za povratak na glavnu stranicu
6. Testirajte prebacivanje jezika
7. Testirajte dark/light mode

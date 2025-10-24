# Galerija - Dodana navigacija levo-desno

## Pregled
Dodana je navigacija levo-desno u galeriju, omogućavajući korisnicima da listaju slike bez potrebe da zatvore view i otvore novu sliku.

## Dodane funkcionalnosti

### 1. Navigacija levo-desno
- **Leva strelica** - Prethodna slika
- **Desna strelica** - Sledeća slika
- **Krug navigacije** - Kada dođete do poslednje slike, vraća se na prvu (i obrnuto)

### 2. Keyboard support
- **Escape** - Zatvaranje galerije
- **Leva strelica (←)** - Prethodna slika
- **Desna strelica (→)** - Sledeća slika

### 3. UI poboljšanja
- **Brojač slika** - Prikazuje trenutnu sliku (npr. "5 / 19")
- **Navigacioni dugmići** - Levo i desno dugme za navigaciju
- **Hover efekti** - Dugmići menjaju boju na hover

## Implementirane funkcije

### `openImage(index: number)`
- Otvara sliku na određenom indeksu
- Postavlja trenutni indeks i URL slike

### `closeImage()`
- Zatvaranje galerije
- Resetuje selektovane vrednosti

### `nextImage()`
- Prebacuje na sledeću sliku
- Krug navigacije - vraća se na prvu sliku kada dođe do poslednje

### `prevImage()`
- Prebacuje na prethodnu sliku
- Krug navigacije - ide na poslednju sliku kada je na prvoj

### Keyboard event listener
- Osluškuje pritiske na tastere
- Omogućava navigaciju bez miša

## UI elementi

### Navigacioni dugmići
- **Leva strelica** - Pozicionirana levo od slike
- **Desna strelica** - Pozicionirana desno od slike
- **Hover efekat** - Menjaju boju u amber kada se hover

### Brojač slika
- **Pozicija** - Gornji levi ugao
- **Format** - "trenutna / ukupno" (npr. "5 / 19")
- **Stil** - Bela boja, srednji font

### Close dugme
- **Pozicija** - Gornji desni ugao
- **Funkcionalnost** - Zatvaranje galerije
- **Hover efekat** - Menja boju u amber

## Korisničko iskustvo

### Prednosti
1. **Brža navigacija** - Nema potrebe za zatvaranjem i otvaranjem novih slika
2. **Keyboard support** - Mogućnost navigacije bez miša
3. **Intuitivna navigacija** - Standardni UI elementi za galeriju
4. **Brojač slika** - Korisnik uvek zna gde se nalazi u galeriji
5. **Krug navigacije** - Nema "mrtvih" pozicija

### Načini navigacije
1. **Miš** - Klik na levo/desno dugme
2. **Keyboard** - Leva/desna strelica
3. **Klik na pozadinu** - Zatvaranje galerije
4. **Escape taster** - Zatvaranje galerije

## Responsive dizajn
- Navigacioni dugmići su prilagođeni svim veličinama ekrana
- Brojač slika je uvek vidljiv
- Close dugme je uvek dostupno

## Testiranje
Za testiranje:
1. Otvorite galeriju
2. Kliknite na bilo koju sliku
3. Koristite levo/desno dugme za navigaciju
4. Testirajte keyboard navigaciju (← → tasteri)
5. Testirajte zatvaranje (Escape ili klik na pozadinu)
6. Proverite da brojač slika radi ispravno
7. Testirajte krug navigacije (poslednja → prva, prva → poslednja)

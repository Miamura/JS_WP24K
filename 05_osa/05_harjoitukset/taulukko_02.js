// Harjoitus 1: Määritä taulukon pituus ja ehto tarkistus
/*
Luo funktio nimeltä myAlphabetLength, joka kirjaa taulukon pituuden.
Sisällytä myös if-lauseke tarkistaaksesi, onko taulukon pituus alle 5.
Odotettu tulos: 
"Taulukon myAlphabet pituus: 7"
"Taulukon pituus on suurempi tai yhtä suuri kuin 5."
*/
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

function myAlphabetLength() {
  let length = myAlphabet.length;
  console.log(`Taulukon myAlphabet pituus: ${length}`);
  if (length >= 5) {
    console.log("Taulukon pituus on suurempi tai yhtä suuri kuin 5.");
  } else {
    console.log("Taulukon pituus on alle 5.");
  }
}

myAlphabetLength();

// Harjoitus 2: Käy läpi taulukko ja kirjaa jokainen alkio sen indeksillä
/*
Kirjaa jokainen planeetta taulukossa yhdessä sen indeksin kanssa.
Odotetut tulokset:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];

planets.forEach((planet, index) => {
  console.log(`Planeetta: ${planet}, Indeksi: ${index}`);
});

// Harjoitus 3: Kirjaa taulukon alkiot niiden tyyppeineen
/*
Käy läpi taulukko, kirjaten jokaisen alkion, sen indeksin ja datatyypin.
Odotetut tulokset:
"Alkio: 1, Indeksi: 0, Tyyppi: number"
"Alkio: text, Indeksi: 1, Tyyppi: string"
...
"Alkio: undefined, Indeksi: 4, Tyyppi: undefined"
*/
const wowDatatypes = [1, "text", false, null, undefined];

wowDatatypes.forEach((item, index) => {
  console.log(`Alkio: ${item}, Indeksi: ${index}, Tyyppi: ${typeof item}`);
});

// Harjoitus 4: Kirjaa taulukon alkiot ilman silmukkaa
/*
Kirjaa jokainen alkio tässä taulukossa metodin avulla eli ilman silmukkaa.
Odotetut tulokset: 1, 2, "One", true
*/
let myArr = [1, 2, "One", true];

myArr.forEach((item) => console.log(item));

// Harjoitus 5: Etsi yhteiset kurssit kahden opiskelijan välillä
/*
Tunnista ja kirjaa ylös kaikki kurssit, jotka ovat yhteisiä sekä student1Courses- että student2Courses-taulukossa.
Odotettu tulos: "Yhteinen kurssi: Ohjelmointi"
*/
let student1Courses = ["Matematiikka", "Englanti", "Ohjelmointi"];
let student2Courses = ["Maantieto", "Espanja", "Ohjelmointi"];

student1Courses.forEach((course) => {
  if (student2Courses.includes(course)) {
    console.log(`Yhteinen kurssi: ${course}`);
  }
});

// Harjoitus 6: Kirjaa jokainen taulukon alkion kirjain
/*
Kirjaa ylös jokainen kirjain furniture-taulukon jokaisesta alkioista.
Odotetut tulokset:
"Kirjaimet 'Pöytä'-sanassa: P, ö, y, t, ä"
...
"Kirjaimet 'Matto'-sanassa: M, a, t, t, o"
*/
let furniture = ["Pöytä", "Tuolit", "Matto"];

furniture.forEach((item) => {
  let letters = item.split("").join(", ");
  console.log(`Kirjaimet '${item}'-sanassa: ${letters}`);
});

// Harjoitus 7: Suodata positiiviset lämpötilat
/*
Kirjoita getPositiveTemperatures-funktio siten, että se palauttaa taulukon, joka sisältää positiiviset lämpötilat (lämpötilat, jotka ovat yli 0).
Odotettu tulos: [3, 22, 5, 18]
*/
let temperatures = [-5, 3, -1, 22, -40, 5, 18];

function getPositiveTemperatures(temps) {
  return temps.filter((temp) => temp > 0);
}

console.log(getPositiveTemperatures(temperatures));

// Harjoitus 8: Suodata parittomat vuodet
/*
Täydennä getOddYears-funktio siten, että se palauttaa kaikki vuodet, jotka ovat parittomia saamistaan vuosiparametreista. 
Vuodet annetaan taulukkona.
Odotetut tulokset:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

function getOddYears(years) {
  return years.filter((year) => year % 2 !== 0);
}

// Testaus - Poista alta kommenttimerkinnät, niin voit testata funktion toimintaa
console.log(getOddYears([2019, 2020, 2021]));
console.log(getOddYears([2000, 2015, 2018, 2020]));

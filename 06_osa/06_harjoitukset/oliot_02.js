/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/
let kirjasto = [
  {
    otsikko: "Komisario Palmun Erehdys",
    kirjailija: "Mika Waltari",
    julkaisuvuosi: 1940,
  },
  {
    otsikko: "Sinuhe egyptiläinen",
    kirjailija: "Mika Waltari",
    julkaisuvuosi: 1945,
  },
];

/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
console.log(kirjasto[0].otsikko);
kirjasto[1].julkaisuvuosi = 1950;
console.log(kirjasto[1]);

/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
kirjasto[0].lajityypit = ["Salapoliisiromaani", "Historiallinen fiktio"];
kirjasto[0]["onSaatavilla"] = true;

/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
function Kirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
  this.otsikko = otsikko;
  this.kirjailija = kirjailija;
  this.julkaisuvuosi = julkaisuvuosi;
  this.lajityypit = lajityypit;
}

let uusiKirja = new Kirja("Seitsemän veljestä", "Aleksis Kivi", 1870, [
  "Klassikko",
  "Romaani",
]);
kirjasto.push(uusiKirja);

/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
function luoKirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
  return new Kirja(otsikko, kirjailija, julkaisuvuosi, lajityypit);
}

let testikirja = luoKirja("Kalevala", "Elias Lönnrot", 1835, [
  "Eepos",
  "Kansanrunous",
]);
console.log(testikirja);

/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
let kirjastoJSON = JSON.stringify(kirjasto);
console.log(kirjastoJSON);

let kirjastoOlio = JSON.parse(kirjastoJSON);
console.log(kirjastoOlio[0].otsikko);

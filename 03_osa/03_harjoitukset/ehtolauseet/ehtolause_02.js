/**
 * Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
 * Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
 * Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
 */
function getTemperature(temp) {
  if (temp < 15) {
    return console.log("pukee takki");
  } else {
    return console.log("ei puke takki");
  }
}

let esimerkki = prompt("Mikä on nykyinen lämpötila?");

let numero = Number(esimerkki);

getTemperature(numero);

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function saalampotila(saa) {
  if (saa < 5) {
    return console.log("ota talvi renkaat");
  } else {
    return console.log("ei ota talvi renkaat");
  }
}

// Kutsu tekemääsi funktiota
saalampotila(numero);

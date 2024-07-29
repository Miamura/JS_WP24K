/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
  return name[name.length - 1];
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function neljaViimeisenNumero(numero) {
  return numero.slice(-4);
}
// Kutsu tekemääsi funktiota

console.log("Sinun kortti on ****" + neljaViimeisenNumero("10234785674894"));
console.log("Sinun kortti on ****" + neljaViimeisenNumero("02347856742233"));
console.log("Sinun kortti on ****" + neljaViimeisenNumero("02347856745942"));

/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

function getFirstCharacter(name) {
  return name[0];
}

// Esimerkki - älä muokkaa
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function bonuksenvoittaja(nimi) {
  return nimi[0];
}

// Kutsu tekemääsi funktiota
console.log(
  "Bonuksen voittaja : " +
    bonuksenvoittaja("Fethi") +
    "****" +
    bonuksenvoittaja("Abali") +
    "****"
);
console.log(
  "Bonuksen voittaja : " +
    bonuksenvoittaja("Liu") +
    "****" +
    bonuksenvoittaja("Han") +
    "****"
);

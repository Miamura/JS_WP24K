/**
Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä

 */
function skipFirstCharacter(text) {
  return text.slice(1);
}

// Esimerkki - älä muokkaa
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function vainHedelma(sana) {
  return sana.substr(1);
}
// Kutsu tekemääsi funktiota
console.log("Ostava hedelma : " + vainHedelma("1omena"));
console.log("Ostava hedelma : " + vainHedelma("5mandariini"));

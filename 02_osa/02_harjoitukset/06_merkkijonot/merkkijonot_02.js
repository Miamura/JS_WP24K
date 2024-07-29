/**
Muokkaa funktio shoutMyName palauttamaan saamansa name-parametri isolla kirjaimilla.
 */

function shoutMyName(name) {
  return name.toUpperCase();
}

// Esimerkki - älä muokkaa
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function tournouksenkilpailijat(nimi) {
  return nimi.toUpperCase();
}

// Kutsu tekemääsi funktiota
console.log("Veeti uppercase on : " + tournouksenkilpailijat("Veeti"));
console.log("KEETTi uppercase on : " + tournouksenkilpailijat("KEETTi"));
console.log("heetti uppercase on : " + tournouksenkilpailijat("heetti"));

/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
  let lowerWord;
  lowerWord = word.toLowerCase();
  return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
}

// Esimerkki - älä muokkaa
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

// Kutsu tekemääsi funktiota
function nimionAlempana(nimi) {
  let alempiNimi;
  alempiNimi = nimi.toLowerCase();
  return alempiNimi.charAt(0).toUpperCase() + alempiNimi.slice(1);
}

console.log(nimionAlempana("veeti"));
console.log(nimionAlempana("kUUti"));
console.log(nimionAlempana("LOOTI"));

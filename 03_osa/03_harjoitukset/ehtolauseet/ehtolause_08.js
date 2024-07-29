/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

 */

function pluralize(substantiivi, määrä) {
  if (määrä == 1) {
    return määrä + " " + substantiivi;
  } else {
    substantiivi = substantiivi + "a";
    return määrä + " " + substantiivi;
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Minulla on " + pluralize("kala", 0));
console.log("Minulla on " + pluralize("koira", 1));
console.log("Minulla on " + pluralize("papukaija", 7));

// Treenaa: Keksi itse samanlainen funktio eri nimellä.
function tavarat(substantiivi, määrä) {
  if (määrä == 1) {
    return määrä + " " + substantiivi;
  } else {
    substantiivi = substantiivi + "a";
    return määrä + " " + substantiivi;
  }
}
// Kutsu tekemääsi funktiota
console.log("Minulla on " + tavarat("sohva", 0));
console.log("Minulla on " + tavarat("televisio", 1));
console.log("Minulla on " + tavarat("tuoli", 7));

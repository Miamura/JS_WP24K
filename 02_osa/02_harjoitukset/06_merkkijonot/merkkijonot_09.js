/**
Muokkaa funktio getFullName function palauttamaan interpolation avulla so that it returns the person's full name by utilizing string interpolation.
 */

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// Esimerkki - älä muokkaa
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function tulosnimi(etunimi, sukunimi) {
  return etunimi + " " + sukunimi;
}
// Kutsu tekemääsi funktiota
console.log(tulosnimi("Fethi", "Abali"));
console.log(tulosnimi("Veeti", "Karkkonen"));

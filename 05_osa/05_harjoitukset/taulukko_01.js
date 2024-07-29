// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ["Jukka", "Emilia", "Miikka", "Saara"];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
teamMembers.forEach((member) => console.log(member));

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
teamMembers.shift();
console.log(teamMembers);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
teamMembers.pop();
console.log(teamMembers);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
teamMembers.unshift("Aleksi");
console.log(teamMembers);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
teamMembers.push("Linda");
console.log(teamMembers);

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
/* let newTeam = teamMembers.slice(2);
   console.log(newTeam);   */
let newTeam = [, ,].concat(teamMembers.slice(2));
console.log(newTeam);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
let miikkaIndex = newTeam.indexOf("Miikka");
console.log(miikkaIndex);

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
let jaakkoIndex = newTeam.indexOf("Jaakko");
console.log(jaakkoIndex);

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
newTeam.splice(miikkaIndex, 1, "Karoliina", "Bettina");
// newTeam.splice(0, 2);
console.log(newTeam);

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
let uusiRyhma = newTeam.concat("Hemmo");
console.log(uusiRyhma);

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
let kopioRyhma = uusiRyhma.slice();
console.log(kopioRyhma);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
let newMembers = ["Tiina", "Daniel"];
let yhdistettyRyhma = teamMembers.concat(uusiRyhma);
console.log(yhdistettyRyhma);

// Harjoitus 13: Etsi kaikki Jukan esiintymät
let jukkaesintymä = [];
teamMembers.forEach((member, index) => {
  if (member === "Jukka") {
    jukkaesintymä.push(index);
  }
});
console.log(jukkaesintymä);

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
let upperCaseTeam = yhdistettyRyhma.map((member) => member.toUpperCase());
console.log(upperCaseTeam);

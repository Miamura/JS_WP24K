/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/

let age, nimi, isStudent, hobbies, infoOlio;

age = 27;

nimi = "veeti";

isStudent = true;

harrastukset = ["pöytätennis", "shakki"];

infoOlio = {
  koulunnimi: "Business College Helsinki",
};

console.log(age);
console.log(nimi);
console.log(isStudent);
console.log(harrastukset);
console.log(infoOlio);

console.log(typeof age);
console.log(typeof nimi);
console.log(typeof isStudent);
console.log(typeof harrastukset);
console.log(typeof infoOlio);

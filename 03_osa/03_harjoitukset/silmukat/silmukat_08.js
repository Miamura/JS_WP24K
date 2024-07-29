// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää.
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista.
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.
let kuinkaPaljonNumeroa = prompt("Anna kuinka monta numeroa haluat syöttää");
maxnumero = 0;
minnumero = 0;

let numerot = prompt("Anna numeroa:");
numerot = parseInt(numerot);
minnumero = numerot;
maxnumero = numerot;

for (let index = 0; index < kuinkaPaljonNumeroa - 1; index++) {
  let numerot = prompt("Anna numeroa:");
  numerot = parseInt(numerot);

  if (numerot < minnumero) {
    minnumero = numerot;
  }
  if (numerot > maxnumero) {
    maxnumero = numerot;
  }
}

console.log(
  "Syöttämiesi numeroiden suurin ja pienin luku " +
    maxnumero +
    " ja " +
    minnumero
);

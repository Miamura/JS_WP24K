// Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä
// tulostaa pienimmän ja suurimman numeron.
// Tähän on ainakin kaksi vaihtoehtoa, löydät ne esimerkkivastaukset - kansiosta

let maxNum, laske, summa;
laske = 0;
maxNum = 0;
summa = 0;

let numero = prompt("Anna numeroa:");
numero = parseInt(numero);
let minNum = numero;
maxNum = numero;
laske++;
summa = summa + numero;

for (let index = 0; index < 9; index++) {
  let numero1 = prompt("Anna numeroa:");
  numero1 = parseInt(numero1);
  laske++;
  summa = summa + numero1;

  if (numero1 < minNum) {
    minNum = numero1;
  }
  if (numero1 > maxNum) {
    maxNum = numero1;
  }
}

console.log(
  "Syöttämiesi numeroiden suurin ja pienin luku " +
    maxNum +
    " ja " +
    minNum +
    " keskiarvo " +
    summa / laske
);

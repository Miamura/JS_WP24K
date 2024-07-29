// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.
let laske, yhteenveto, keskiarvo;
laske = 0;
yhteenveto = 0;

while (true) {
  let numero = prompt("Anna numeroa:");
  numero = parseInt(numero);

  if (numero == 0) {
    break;
  }
  laske++;
  yhteenveto = yhteenveto + numero;
}
keskiarvo = 0;

if (laske != 0) {
  keskiarvo = yhteenveto / laske;
}

console.log("Sinun keskiarvosi " + keskiarvo.toFixed(1));

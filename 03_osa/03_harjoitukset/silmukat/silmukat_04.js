// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty,
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
let laske;
laske = 0;
for (let index = 0; index < 20; index++) {
  let numero = prompt("Anna numeroa:");
  numero = parseInt(numero);
  if (numero % 2 == 0) {
    laske++;
  }
}
if (laske == 1) {
  console.log(laske + " syöttämistäsi numeroista on parillinen");
} else {
  console.log(laske + " syöttämistäsi numeroista on parillisia");
}

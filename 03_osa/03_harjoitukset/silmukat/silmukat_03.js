// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden.
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.
// Tehdään tämä opettajan esimerkkinä ... ohjelma on perfect jos halua perfectin perfecti käytä while(isNanN){syötä numero}
let etaisyys, aika;
etaisyys = 0;
aika = 0;

do {
  let kilometrinNumero = prompt("Anna kilometria:");
  kilometrinNumero = parseInt(kilometrinNumero);
  if (kilometrinNumero == 0) break;

  let ajanNumero = prompt("Anna aikaa:");
  ajanNumero = parseInt(ajanNumero);

  if (!isNaN(kilometrinNumero) && !isNaN(ajanNumero)) {
    console.log("Syöttämäsi kilometri: " + kilometrinNumero);
    console.log("Syöttämäsi kilometri: " + ajanNumero);
    etaisyys = etaisyys + kilometrinNumero;
    aika = aika + ajanNumero;
    continue;
  } else {
    if (isNaN(kilometrinNumero)) {
      kilometrinNumero = prompt("Anna oikea kilometria:");
      kilometrinNumero = parseInt(kilometrinNumero);
    }
    if (kilometrinNumero == 0) break;

    if (isNaN(ajanNumero)) {
      ajanNumero = prompt("Anna oikea aikaa:");
      ajanNumero = parseInt(ajanNumero);
    }
    if (!isNaN(kilometrinNumero) && !isNaN(ajanNumero)) {
      console.log("Syöttämäsi kilometri: " + kilometrinNumero);
      console.log("Syöttämäsi kilometri: " + ajanNumero);
      etaisyys = etaisyys + kilometrinNumero;
      aika = aika + ajanNumero;
      continue;
    }
    continue;
  }
} while (true);

console.log("Keskinopeus on " + etaisyys / aika + " km/h");

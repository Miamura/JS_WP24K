/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.
    kokeillaan
    while (KvaiE != "e" || KvaiE != "k") {
    let KvaiE = prompt("Anna kyllä eli k tai ei eli e  (k/e)");
    KvaiE = KvaiE.toLowerCase();
    }
*/
let laske, yhteenveto, keskiarvo;
laske = 0;
yhteenveto = 0;

do {
  let numero = prompt("Anna numeroa:");
  numero = parseInt(numero);

  if (numero == 0) {
    break;
  }

  laske++;
  yhteenveto = yhteenveto + numero;

  let KvaiE = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");
  KvaiE = KvaiE.toLowerCase();

  if (KvaiE == "k") {
    continue;
  }

  if (KvaiE == "e") {
    break;
  }
} while (true);
keskiarvo = 0;

if (laske != 0) {
  keskiarvo = yhteenveto / laske;
}

console.log("Sinun keskiarvosi " + keskiarvo.toFixed(1));

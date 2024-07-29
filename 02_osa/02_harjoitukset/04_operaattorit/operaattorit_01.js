/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/

let a = 4;
let b = 2;

let yhteenlasku, vähennyslasku, kertolasku, jakolasku;

yhteenlasku = a + b;
vähennyslasku = a - b;
kertolasku = a * b;
jakolasku = a / b;
loput = a % b;

console.log(
  "Meillä on 2 numeroa :  4 ja 2. Naiden numeroiden : summa" +
    yhteenlasku +
    " Erotus : " +
    vähennyslasku +
    ". Kerto : " +
    kertolasku +
    ". Jako : " +
    jakolasku +
    ", Jäljelle jäävä : " +
    loput
);

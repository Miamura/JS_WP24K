/** Harjoitus: Kolmion pinta-ala
 * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
 * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

function laskeKolmionPintaala(kannanPituus, korkeus) {
  return (kannanPituus * korkeus) / 2;
}

const laskeKolmionPintaala2 = (kannanPituus, korkeus) =>
  (kannanPituus * korkeus) / 2;

console.log("Kolmion pinta ala on :");
console.log(laskeKolmionPintaala(5, 4));
console.log(laskeKolmionPintaala(6, 8));
console.log(laskeKolmionPintaala2(1, 4));
console.log(laskeKolmionPintaala2(2, 7));

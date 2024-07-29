/** Harjoitus: Neliön pinta-ala
 * Tee funktio nimeltä laskeNelionPintaala, joka ottaa yhden parametrin: sivunPituus.
 * Funktio laskee annetun neliön pinta-alan kaavalla sivunPituus * sivunPituus ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

function laskeNelionPintaala(sivunPituus) {
  return sivunPituus * sivunPituus;
}
const laskeNelionPintaala2 = (sivunPituus) => sivunPituus * sivunPituus;

console.log("Neliöiden pinta ala on : " + laskeNelionPintaala(5));
console.log(laskeNelionPintaala(3));
console.log(laskeNelionPintaala2(8));
console.log(laskeNelionPintaala2(7));

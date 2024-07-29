/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */
let kpl1 = 19.99;
let kpl2 = 5.49;
let kpl3 = 15.75;
let kpl4 = 3.99;

let totalPrice = kpl1 + kpl2 + kpl3 + kpl4;

console.log("Ostoskorin tuotteiden yhteishinta on: " + totalPrice.toFixed(2));

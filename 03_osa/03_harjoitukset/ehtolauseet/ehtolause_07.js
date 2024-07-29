/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.
*/
function assignGrade(pointti) {
  if (pointti >= 90) {
    return "A";
  } else if (pointti >= 80 && pointti < 90) {
    return "B";
  } else if (pointti >= 70 && pointti < 80) {
    return "C";
  } else if (pointti >= 60 && pointti < 70) {
    return "D";
  } else if (pointti < 60) {
    return "F";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Sinä sait " + assignGrade(95)); // Sinä sait A
console.log("Sinä sait " + assignGrade(81)); // Sinä sait B
console.log("Sinä sait " + assignGrade(72)); // Sinä sait C
console.log("Sinä sait " + assignGrade(64)); // Sinä sait D
console.log("Sinä sait " + assignGrade(42)); // Sinä sait F

// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.
function yleensakoulunmaara(ika) {
  if (ika >= 25) {
    return "aikuiskoulu";
  } else if (ika >= 18 && ika < 25) {
    return "AMK tai yliopisto";
  } else if (ika >= 15 && ika < 18) {
    return "lukio tai ammattikoulu";
  } else if (ika >= 7 && ika < 15) {
    return "peruskoulu";
  } else if (ika >= 6 && ika < 7) {
    return "esikoulu";
  } else if (ika < 6) {
    return "paivakoti";
  }
}

// Kutsu tekemääsi funktiota
console.log("Sinä voit mennä: " + yleensakoulunmaara(34));
console.log("Sinä voit mennä: " + yleensakoulunmaara(20));
console.log("Sinä voit mennä: " + yleensakoulunmaara(16));
console.log("Sinä voit mennä: " + yleensakoulunmaara(10));
console.log("Sinä voit mennä: " + yleensakoulunmaara(6));
console.log("Sinä voit mennä: " + yleensakoulunmaara(5));

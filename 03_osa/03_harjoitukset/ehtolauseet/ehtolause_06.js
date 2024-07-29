/**
Kehitä funktio nimeltä greaterNum, joka:

- Hyväksyy kaksi argumenttia, jotka molemmat ovat numeroita.
- Palauttaa näistä kahdesta suuremman numeron.
return Math.max(a,b);
 */

function greaterNum(a, b) {
  if (a < b) {
    return b;
  } else {
    return a;
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));
